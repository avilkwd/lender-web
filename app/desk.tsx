"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { bffRateSheet, lenders, researchDate } from "./lenders";
import type { Lender } from "./lenders";
import { communityNotes, priceNotes } from "./research-data";
import { newCommunityNotes, newPriceNotes } from "./research-expansion";
import { linkedinCommunityNotes, linkedinPriceNotes } from "./research-linkedin";
import { accessTypes, fundingRoles, programGroups } from "./research-types";
import type { UnitRange } from "./research-types";
import { blankQuote } from "./quote";
import type { Quote, QuoteFields } from "./quote";

const usDollars = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 });
const dateDisplay = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
const lenderById = new Map(lenders.map((lender) => [lender.id, lender]));
const asDollars = (value: string) => value ? usDollars.format(Number(value)) : "";
const showDate = (value: string) => value ? dateDisplay.format(new Date(value + "T00:00:00Z")) : "";
const rangeMatches = (count: number, range?: UnitRange) =>
  !!range && count >= range.min && (range.max === undefined || count <= range.max);
const directoryPageSize = 24;

function External({ href, children }: { href: string; children: ReactNode }) {
  return <a className="source-link" href={href} target="_blank" rel="noreferrer">{children}</a>;
}

function Value({ children }: { children: ReactNode }) {
  return children || <span className="missing" aria-label="Unknown">—</span>;
}

function LenderDetails({ lender, onQuote }: { lender: Lender; onQuote: (lenderId: string) => void }) {
  return <div className="details-grid">
    <section>
      <h3>Funding & broker access</h3>
      <p>{lender.fundingEvidence}</p>
      <p className="detail-line"><strong>{lender.access}.</strong> {lender.accessDetails}</p>
      {lender.coverage && <p className="detail-line"><strong>Coverage.</strong> {lender.coverage}</p>}
    </section>
    <section>
      <h3>Program & overlays</h3>
      <p>{lender.overlays}</p>
      {(lender.fico || lender.dscr) && <p className="detail-line">{[
        lender.fico && "Published minimum FICO " + lender.fico,
        lender.dscr && "Published minimum DSCR " + lender.dscr,
      ].filter(Boolean).join(" · ")}</p>}
      <div className="sources">
        <External href={lender.program}>Program / company</External>
        {lender.matrix && <External href={lender.matrix}>Program guidelines</External>}
        {lender.id === "ad" && <External href="https://admortgage.com/wp-content/uploads/DSCR_Mixed-Use_AD_Products-5.pdf">Mixed-use guidelines</External>}
        {lender.pricing && <External href={lender.pricing}>Pricing source</External>}
        {lender.sources?.map((source) => <External key={source.url + source.label} href={source.url}>{source.label}</External>)}
      </div>
    </section>
    <section className="detail-review">
      <h3>Review evidence</h3>
      <p>{lender.review || "No program-specific firsthand review verified in this research."}</p>
      <div className="sources">{lender.reviewSources?.map((source) => <External href={source.url} key={source.url}>{source.label}</External>)}</div>
      <button className="button secondary detail-action" onClick={() => onQuote(lender.id)}>Log a quote</button>
    </section>
  </div>;
}

const filtersDefault = { search: "", group: "", role: "", access: "", property: "", units: "", added: "" };
type DirectoryFilters = typeof filtersDefault;
const roleGuide = [
  ["Direct lender", "Publishes its own lending program and describes direct origination or funding. A loan may be sold after closing."],
  ["Bank / credit union", "The depository institution offers commercial lending. Broker access varies by program."],
  ["Agency originator", "An approved lender can underwrite and close an agency execution. Agency or investor capital may take out the loan."],
  ["Lends and places deals", "May fund some deals and arrange others. Check the entity named in the term sheet."],
  ["Broker / marketplace", "Shops, matches, or places a deal with third-party capital. The funding source is deal-specific."],
  ["Direct claim unverified", "The provider markets itself as direct. Corroboration of the funding entity was limited or conflicting."],
];

function Directory({ onQuote }: { onQuote: (lenderId: string) => void }) {
  const [filters, setFilters] = useState<DirectoryFilters>(filtersDefault);
  const [expanded, setExpanded] = useState(new Set<string>());
  const [page, setPage] = useState(0);
  const term = filters.search.trim().toLowerCase();
  const matches = lenders.filter((lender) => {
    if (term && ![lender.name, lender.channel, lender.overlays, lender.coverage, lender.fundingEvidence].some((text) => text?.toLowerCase().includes(term))) return false;
    if (filters.group && lender.group !== filters.group) return false;
    if (filters.role && lender.role !== filters.role) return false;
    if (filters.access && lender.access !== filters.access) return false;
    if (filters.added === "new" && !lender.newListing) return false;
    if (filters.added === "linkedin" && !lender.linkedinListing) return false;
    const count = filters.units ? Number(filters.units) : null;
    const multifamily = !!lender.multifamily && (count === null || rangeMatches(count, lender.multifamilyRange));
    const mixed = !!lender.mixed && (count === null || rangeMatches(count, lender.mixedRange));
    return filters.property === "both" ? multifamily && mixed :
      filters.property === "multifamily" ? multifamily :
      filters.property === "mixed" ? mixed : count === null || multifamily || mixed;
  });
  const start = page * directoryPageSize;
  const visible = matches.slice(start, start + directoryPageSize);

  function updateFilter(key: keyof DirectoryFilters, value: string) {
    setFilters((current) => ({ ...current, [key]: value }));
    setPage(0);
  }

  function toggle(id: string) {
    setExpanded((previous) => {
      const next = new Set(previous);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function picker(key: "group" | "role" | "access", label: string, options: readonly string[]) {
    return <label className="filter-field"><span>{label}</span>
      <select value={filters[key]} onChange={(event) => updateFilter(key, event.target.value)}>
        <option value="">All</option>{options.map((value) => <option key={value}>{value}</option>)}
      </select>
    </label>;
  }

  return <>
    <section className="research-hero" aria-labelledby="directory-title">
      <div className="hero-copy">
        <span className="eyebrow">Commercial financing directory</span>
        <h1 id="directory-title">Multifamily &amp;<br className="hero-break"/> mixed-use lending</h1>
        <p>Find funding for 5+ unit properties, check who originates the loan and compare broker access.</p>
      </div>
      <div className="rate-panel">
        <h2>Program coverage</h2>
        <dl className="rate-list">
          <div><dt>Lenders, originators and intermediaries</dt><dd>{lenders.length}</dd></div>
          <div><dt>Published wholesale or commercial broker access</dt><dd>{lenders.filter((lender) => lender.access === "Wholesale / TPO" || lender.access === "Commercial broker access").length}</dd></div>
        </dl>
        <p>Open a listing for primary sources, eligibility and any firsthand feedback.</p>
      </div>
    </section>

    <section aria-labelledby="comparison-title" className="main-section">
      <div className="section-heading">
        <div>
          <h2 id="comparison-title">Compare financing sources</h2>
          <p>Filter by funding role, broker access and property type.</p>
        </div>
        <span className="section-comment">Research as of {researchDate}</span>
      </div>
      <div className="sheet">
        <div className="toolbar directory-toolbar">
          <label className="search-field"><span className="search-icon" aria-hidden="true"></span><span className="sr-only">Search providers, geography or overlays</span>
            <input type="search" placeholder="Search providers, geography or overlays" value={filters.search} onChange={(event) => updateFilter("search", event.target.value)} />
          </label>
          {picker("group", "Program", programGroups)}
          {picker("role", "Funding role", fundingRoles)}
          {picker("access", "Broker access", accessTypes)}
          <label className="filter-field"><span>Property</span><select value={filters.property} onChange={(event) => updateFilter("property", event.target.value)}>
            <option value="">All types</option><option value="multifamily">Multifamily</option><option value="mixed">Mixed-use</option><option value="both">Both programs</option>
          </select></label>
          <label className="filter-field"><span>Units</span><input type="number" min="2" step="1" placeholder="Any" value={filters.units} onChange={(event) => updateFilter("units", event.target.value)} /></label>
          <label className="filter-field"><span>Added</span><select value={filters.added} onChange={(event) => updateFilter("added", event.target.value)}>
            <option value="">All listings</option><option value="new">New listings</option><option value="linkedin">LinkedIn additions</option>
          </select></label>
          <span className="result-count" aria-live="polite">{matches.length} of {lenders.length} listings</span>
          {filters.units && <span className="filter-note">Unit-count results require a published unit range or minimum. Check the listing for transaction-specific limits.</span>}
        </div>
        <div className="table-scroll" tabIndex={0} role="region" aria-label="Commercial financing comparison">
          <table className="research-table">
            <thead><tr><th scope="col">Provider</th><th scope="col">Funding role</th><th scope="col">Broker access</th><th scope="col">Multifamily</th><th scope="col">Mixed-use</th><th scope="col">Loan size</th><th scope="col">Public pricing</th></tr></thead>
            <tbody>
            {visible.map((lender) => <Fragment key={lender.id}>
              <tr className={expanded.has(lender.id) ? "expanded" : ""}>
                <th scope="row"><div className="lender-cell"><span className="monogram" aria-hidden="true">{lender.initials}</span><div><External href={lender.program}>{lender.name}</External><small>{lender.group}</small></div><button className="disclosure" type="button" aria-label={(expanded.has(lender.id) ? "Hide " : "Show ") + lender.name + " details"} aria-expanded={expanded.has(lender.id)} onClick={() => toggle(lender.id)}>{expanded.has(lender.id) ? "−" : "+"}</button></div></th>
                <td>{lender.role}</td><td>{lender.access}</td>
                <td><Value>{lender.multifamily}</Value></td><td><Value>{lender.mixed}</Value></td>
                <td><Value>{lender.loanSize || (lender.minimumAmount && lender.minimumAmount + " min.")}</Value></td>
                <td>{lender.price ? <><strong className="rate-cell">{lender.price}</strong><small>{lender.priceType}</small></> : <Value>{""}</Value>}</td>
              </tr>
              {expanded.has(lender.id) && <tr className="lender-details"><td colSpan={7}><LenderDetails lender={lender} onQuote={onQuote}/></td></tr>}
            </Fragment>)}
            </tbody>
          </table>
        </div>
        {matches.length === 0 && <p className="empty-inline">No providers match those filters. <button className="link-button" onClick={() => { setFilters(filtersDefault); setPage(0); }}>Clear filters</button></p>}
        {matches.length > directoryPageSize && <div className="directory-pages" aria-label="Directory pages">
          <span>{start + 1}–{Math.min(start + directoryPageSize, matches.length)} of {matches.length}</span>
          <button className="button secondary" disabled={page === 0} onClick={() => setPage(page - 1)}>Previous</button>
          <button className="button secondary" disabled={start + directoryPageSize >= matches.length} onClick={() => setPage(page + 1)}>Next</button>
        </div>}
      </div>
      <p className="table-note">A dash means eligibility or terms were unverified, unpublished or unavailable for that program.</p>
      <details className="research-method">
        <summary>Funding roles and evidence</summary>
        <dl>{roleGuide.map(([role, definition]) => <div key={role}><dt>{role}</dt><dd>{definition}</dd></div>)}</dl>
      </details>
    </section>

    <section className="main-section" aria-labelledby="pricing-title">
      <div className="section-heading"><div><h2 id="pricing-title">Published pricing & recorded deals</h2><p>Rates below come with different loan sizes, terms and prepay structures. Use the quote tracker for matched scenarios.</p></div></div>
      <div className="evidence-grid">
        {[...linkedinPriceNotes, ...newPriceNotes, ...priceNotes].map((note) => <article key={note.name + note.rate} className="evidence-card">
          <h3>{note.name}</h3><strong className="evidence-rate">{note.rate}</strong><p>{note.terms}</p><External href={note.source.url}>{note.source.label}</External>
        </article>)}
      </div>
      <div className="benchmark">
        <div>
          <span className="eyebrow">November 23, 2026 rate sheet</span>
          <h2>Brokers First Funding benchmark</h2>
          <p>$750K purchase · 70% LTV · 740 FICO · 1.25× DSCR · 30-year fixed · three-year prepay</p>
          <External href={bffRateSheet}>View wholesale rate sheet, page 11</External>
        </div>
        <div className="benchmark-prices">
          <div><span>Multifamily</span><strong>9.125%</strong><span>0.125 points</span></div>
          <div><span>Mixed-use</span><strong>9.125%</strong><span>0.625 points</span></div>
          <p>$1,995 lender fee either way. Broker compensation and third-party costs are additional.</p>
        </div>
      </div>
    </section>

    <section className="main-section" aria-labelledby="community-title">
      <div className="section-heading"><div><h2 id="community-title">Forum and social evidence</h2><p>User-reported experiences and company announcements carry different weight.</p></div></div>
      <div className="evidence-grid">
        {[...linkedinCommunityNotes, ...newCommunityNotes, ...communityNotes].map((note) => <article key={note.title} className="evidence-card">
          <span className="evidence-kind">{note.kind}</span><h3>{note.title}</h3><p>{note.text}</p><External href={note.source.url}>{note.source.label}</External>
        </article>)}
      </div>
    </section>
  </>;
}

async function quoteRequest<T>(init?: RequestInit, query = ""): Promise<T> {
  const response = await fetch("/api/quotes" + query, init);
  const result = await response.json().catch(() => ({ error: "" }));
  if (!response.ok) {
    const message = result && typeof result === "object" && "error" in result && typeof result.error === "string" ? result.error : "";
    throw new Error(message || "The quote tracker couldn't connect. Try again.");
  }
  return result as T;
}

function QuoteTable({ quotes, reload, loading, error, onNew, onEdit, onDelete, removing }: {
  quotes: Quote[]; reload: () => void; loading: boolean; error: string;
  onNew: () => void; onEdit: (quote: Quote) => void; onDelete: (quote: Quote) => void; removing: string;
}) {
  const [scenario, setScenario] = useState("");
  const [sort, setSort] = useState("latest");
  const cases = [...new Set(quotes.map((quote) => quote.scenario))].sort((a, b) => a.localeCompare(b));
  const selected = cases.includes(scenario) ? scenario : "";
  const visible = quotes.filter((quote) => !selected || quote.scenario === selected).sort((a, b) => {
    if (sort === "rate") return (a.rate ? Number(a.rate) : Infinity) - (b.rate ? Number(b.rate) : Infinity);
    return b.date.localeCompare(a.date) || b.updatedAt.localeCompare(a.updatedAt);
  });

  return <section className="quote-section" aria-labelledby="quotes-title">
    <div className="quote-heading">
      <div><span className="eyebrow">Private quote tracker</span><h1 id="quotes-title">Broker quotes</h1><p>Use the same scenario name for competing quotes on one deal.</p></div>
    </div>
    {error && <div className="alert" role="alert">{error} <button className="link-button" onClick={reload}>Retry</button></div>}
    {loading ? <p className="empty-inline" role="status">Loading your quotes…</p> : null}
    {!loading && !error && quotes.length === 0 && <div className="empty-quotes">
      <h2>No quotes logged</h2><p>Add the terms you have. You can fill in the rest as they come in.</p>
      <button className="button primary" onClick={onNew}>Add your first quote</button>
    </div>}
    {quotes.length > 0 && <div className="sheet">
      <div className="toolbar">
        <label className="filter-field"><span>Scenario</span><select value={selected} onChange={(event) => setScenario(event.target.value)}>
          <option value="">All scenarios</option>{cases.map((item) => <option key={item}>{item}</option>)}
        </select></label>
        <label className="filter-field"><span>Sort by</span><select value={sort} onChange={(event) => setSort(event.target.value)}>
          <option value="latest">Latest quote date</option><option value="rate">Lowest rate</option>
        </select></label>
        <span className="result-count" aria-live="polite">{visible.length} {visible.length === 1 ? "quote" : "quotes"}</span>
      </div>
      <div className="table-scroll" tabIndex={0} role="region" aria-label="Saved broker quotes">
        <table className="quote-table"><thead><tr><th scope="col">Scenario / Lender</th><th scope="col">Quoted / Expires</th><th scope="col">Rate / Term</th><th scope="col">Points</th><th scope="col">Lender fees</th><th scope="col">Broker comp</th><th scope="col">Prepay</th><th scope="col"><span className="sr-only">Actions</span></th></tr></thead>
          <tbody>{visible.map((quote) => <tr key={quote.id}>
            <th scope="row">{quote.scenario}<small>{lenderById.get(quote.lenderId)?.name || quote.lenderId}</small>
              <small>{[quote.units && quote.units + " units", quote.property, asDollars(quote.amount), quote.ltv && quote.ltv + "% LTV", quote.fico && quote.fico + " FICO", quote.dscr && quote.dscr + "× DSCR"].filter(Boolean).join(" · ")}</small>
            </th>
            <td><Value>{showDate(quote.date)}</Value>{quote.expiration && <small>Expires {showDate(quote.expiration)}</small>}</td>
            <td><strong className="rate-cell"><Value>{quote.rate && quote.rate + "%"}</Value></strong>{quote.term && <small>{quote.term}</small>}</td>
            <td className={Number(quote.points) < 0 ? "credit" : ""}><Value>{quote.points}</Value></td><td><Value>{asDollars(quote.fees)}</Value></td>
            <td><Value>{quote.brokerComp && quote.brokerComp + "%"}</Value>{quote.compType && <small>{quote.compType}</small>}</td>
            <td><Value>{quote.prepay}</Value></td>
            <td><div className="table-actions"><button className="link-button" onClick={() => onEdit(quote)}>Edit</button><button className="link-button" disabled={removing === quote.id} onClick={() => onDelete(quote)}>Delete</button></div></td>
          </tr>)}</tbody>
        </table>
      </div>
    </div>}
  </section>;
}

function QuoteDialog({ form, id, onClose, onSave }: {
  form: QuoteFields; id?: string; onClose: () => void; onSave: (quote: Quote) => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const element = dialog.current;
    element?.showModal();
    return () => { element?.close(); };
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (saving) return;
    setSaving(true);
    setError("");
    const values = Object.fromEntries(new FormData(event.currentTarget));
    try {
      const quote = await quoteRequest<Quote>({
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...values, id }),
      });
      onSave(quote);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not save the quote.");
      setSaving(false);
    }
  }

  const field = (key: keyof QuoteFields, label: string, props: React.InputHTMLAttributes<HTMLInputElement> = {}) =>
    <label className="field" key={key}><span>{label}</span><input name={key} defaultValue={form[key]} {...props} /></label>;
  const number = (key: keyof QuoteFields, label: string, min: number, max: number, step = "any") =>
    field(key, label, { type: "number", min, max, step });

  return <dialog className="quote-dialog" ref={dialog} aria-labelledby="dialog-title" onCancel={(event) => { event.preventDefault(); if (!saving) onClose(); }}>
    <form onSubmit={submit}>
      <header className="dialog-header"><div><h2 id="dialog-title">{id ? "Edit quote" : "Log a quote"}</h2><p>Only the quote source and scenario name are required.</p></div>
        <button className="disclosure" disabled={saving} type="button" aria-label="Close quote form" onClick={onClose}>×</button>
      </header>
      <div className="dialog-body">
        <fieldset><legend>Scenario</legend><div className="form-grid">
          {field("scenario", "Scenario name", { required: true, maxLength: 100, placeholder: "Example: Newark 6-unit purchase", autoFocus: true })}
          <label className="field"><span>Quote source</span><select name="lenderId" defaultValue={form.lenderId} required><option value="">Choose a provider</option>{lenders.map((lender) => <option key={lender.id} value={lender.id}>{lender.name}</option>)}</select></label>
          <label className="field"><span>Property type</span><select name="property" defaultValue={form.property}><option value="">Select if known</option><option>Multifamily</option><option>Mixed-use</option></select></label>
          {number("units", "Units", 1, 10000, "1")}
          {number("amount", "Loan amount ($)", 1, 1e9, "0.01")}
          {number("ltv", "LTV (%)", 0, 100)}
          {number("fico", "FICO", 300, 850, "1")}
          {number("dscr", "DSCR (×)", 0, 100)}
        </div></fieldset>
        <fieldset><legend>Pricing & terms</legend><div className="form-grid">
          {field("date", "Quote date", { type: "date" })}
          {field("expiration", "Expiration date", { type: "date" })}
          {number("rate", "Note rate (%)", 0, 100)}
          {number("points", "Points / lender credit (%)", -100, 100)}
          {number("fees", "Lender fees ($)", 0, 1e8, "0.01")}
          {field("term", "Term / product", { maxLength: 90, placeholder: "Example: 30-year fixed" })}
          <label className="field"><span>Broker compensation type</span><select name="compType" defaultValue={form.compType}><option value="">Select if known</option><option>Borrower-paid</option><option>Lender-paid</option><option>Split</option></select></label>
          {number("brokerComp", "Broker compensation (%)", 0, 100)}
          <div className="full-width">{field("prepay", "Prepayment terms", { maxLength: 180, placeholder: "Example: 5/4/3/2/1 or none" })}</div>
          <label className="field full-width"><span>Notes</span><textarea name="notes" rows={3} defaultValue={form.notes} maxLength={1400} /></label>
        </div></fieldset>
        {error && <p className="alert" role="alert">{error}</p>}
      </div>
      <footer className="dialog-footer">
        <button className="button secondary" type="button" disabled={saving} onClick={onClose}>Cancel</button>
        <button className="button primary" type="submit" disabled={saving}>{saving ? "Saving…" : "Save quote"}</button>
      </footer>
    </form>
  </dialog>;
}

export function Desk() {
  const [view, setView] = useState<"directory" | "quotes">("directory");
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [actionStatus, setActionStatus] = useState("");
  const [requestNumber, setRequestNumber] = useState(0);
  const [removing, setRemoving] = useState("");
  const [dialog, setDialog] = useState<{ form: QuoteFields; id?: string } | null>(null);

  useEffect(() => {
    const syncHash = () => setView(location.hash === "#quotes" ? "quotes" : "directory");
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  useEffect(() => {
    if (view !== "quotes") return;
    const abort = new AbortController();
    setLoading(true);
    setError("");
    quoteRequest<Quote[]>({ signal: abort.signal })
      .then((result) => { if (!abort.signal.aborted) setQuotes(result); })
      .catch((err: Error) => { if (!abort.signal.aborted) setError(err.message); })
      .finally(() => { if (!abort.signal.aborted) setLoading(false); });
    return () => abort.abort();
  }, [view, requestNumber]);

  function openQuote(lenderId = "") {
    setDialog({ form: { ...blankQuote, lenderId } });
    setActionStatus("");
  }

  function saved(quote: Quote) {
    setQuotes((current) => [quote, ...current.filter((entry) => entry.id !== quote.id)]);
    setDialog(null);
    setView("quotes");
    location.hash = "quotes";
    setRequestNumber((current) => current + 1);
    setActionStatus("Quote saved.");
  }

  async function remove(quote: Quote) {
    if (removing || !window.confirm("Delete this quote for " + quote.scenario + "?")) return;
    setRemoving(quote.id);
    setActionStatus("");
    try {
      await quoteRequest({ method: "DELETE" }, "?id=" + encodeURIComponent(quote.id));
      setQuotes((current) => current.filter((entry) => entry.id !== quote.id));
      setRequestNumber((current) => current + 1);
      setActionStatus("Quote deleted.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not delete the quote.");
    } finally {
      setRemoving("");
    }
  }

  return <>
    <header className="site-header">
      <div className="top-bar">
        <a className="brand" href="#directory"><span className="brand-icon" aria-hidden="true"><i/><i/><i/></span><span>Wholesale DSCR Desk</span></a>
        <nav aria-label="Main navigation"><a aria-current={view === "directory" ? "page" : undefined} href="#directory">Lenders</a><a aria-current={view === "quotes" ? "page" : undefined} href="#quotes">Quotes</a></nav>
        <button className="button primary top-cta" onClick={() => openQuote()}>Log a quote</button>
      </div>
    </header>
    <main className="page-width">
      <div hidden={view !== "directory"}><Directory onQuote={openQuote} /></div>
      {view === "quotes" && <QuoteTable quotes={quotes} reload={() => setRequestNumber((current) => current + 1)} loading={loading} error={error} onNew={() => openQuote()}
        onEdit={(quote) => { setActionStatus(""); setDialog({ form: quote, id: quote.id }); }} onDelete={remove} removing={removing} />}
      <p role="status" className={actionStatus ? "toast" : "sr-only"}>{actionStatus}</p>
    </main>
    {dialog && <QuoteDialog form={dialog.form} id={dialog.id} onClose={() => setDialog(null)} onSave={saved} />}
  </>;
}
