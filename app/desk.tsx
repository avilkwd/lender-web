"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { bffRateSheet, lenders, researchDate } from "./lenders";
import type { Lender } from "./lenders";
import { blankQuote } from "./quote";
import type { Quote, QuoteFields } from "./quote";

const usDollars = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 });
const dateDisplay = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
const lenderById = new Map(lenders.map((lender) => [lender.id, lender]));
const asDollars = (value: string) => value ? usDollars.format(Number(value)) : "";
const showDate = (value: string) => value ? dateDisplay.format(new Date(value + "T00:00:00Z")) : "";
const rangeMatches = (count: number, minimum: number, maximum: number | null) =>
  count >= minimum && (maximum === null || count <= maximum);

function External({ href, children }: { href: string; children: ReactNode }) {
  return <a className="source-link" href={href} target="_blank" rel="noreferrer">{children}</a>;
}

function Value({ children }: { children: ReactNode }) {
  return children || <span className="missing" aria-label="Unknown">—</span>;
}

function LenderDetails({ lender, onQuote }: { lender: Lender; onQuote: (lenderId: string) => void }) {
  return <div className="details-grid">
    <section>
      <h3>Eligibility & overlays</h3>
      <p>{lender.overlays}</p>
      <div className="sources">
        <External href={lender.program}>Broker program</External>
        {lender.matrix && <External href={lender.matrix}>Program guidelines</External>}
        {lender.id === "ad" && <External href="https://admortgage.com/wp-content/uploads/DSCR_Mixed-Use_AD_Products-5.pdf">Mixed-use guidelines</External>}
        {lender.pricing && <External href={lender.pricing}>Pricing source</External>}
      </div>
    </section>
    <section>
      <h3>Review evidence</h3>
      <p>{lender.review}</p>
      <div className="sources">{lender.reviewSources?.map((source) => <External href={source.url} key={source.url}>{source.label}</External>)}</div>
    </section>
    <button className="button secondary detail-action" onClick={() => onQuote(lender.id)}>Log a quote</button>
  </div>;
}

function Directory({ onQuote }: { onQuote: (lenderId: string) => void }) {
  const [search, setSearch] = useState("");
  const [property, setProperty] = useState("all");
  const [units, setUnits] = useState("");
  const [expanded, setExpanded] = useState(new Set<string>());
  const term = search.trim().toLowerCase();
  const matches = lenders.filter((lender) => {
    if (term && ![lender.name, lender.channel, lender.overlays].some((text) => text.toLowerCase().includes(term))) return false;
    if (!units) return true;
    const count = Number(units);
    const multifamily = rangeMatches(count, 5, lender.multifamilyMax);
    const mixed = lender.mixedMax !== null && rangeMatches(count, 2, lender.mixedMax);
    return (property !== "mixed" && multifamily) || (property !== "multifamily" && mixed);
  });

  function toggle(id: string) {
    setExpanded((previous) => {
      const next = new Set(previous);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return <>
    <section className="research-hero" aria-labelledby="directory-title">
      <div className="hero-copy">
        <span className="eyebrow">Wholesale lender directory</span>
        <h1 id="directory-title">Multifamily &amp;<br className="hero-break"/> mixed-use DSCR</h1>
        <p>Compare 5+ unit programs, check overlays, and log broker quotes for the same deal.</p>
      </div>
      <div className="rate-panel">
        <h2>Published starting rates</h2>
        <dl className="rate-list">
          <div><dt>Maverick Lending NYC</dt><dd>6.99<span>%</span></dd></div>
          <div><dt>IceCap / BluFin</dt><dd>7.25<span>%</span></dd></div>
        </dl>
        <p>Advertised for these property types. Confirm wholesale points, prepay, and leverage.</p>
      </div>
    </section>

    <section aria-labelledby="comparison-title" className="main-section">
      <div className="section-heading">
        <div>
          <h2 id="comparison-title">Compare lenders</h2>
          <p>Open a lender to see overlays, review evidence, and pricing sources.</p>
        </div>
        <span className="section-comment">Research as of {researchDate}</span>
      </div>
      <div className="sheet">
        <div className="toolbar">
          <label className="search-field"><span className="search-icon" aria-hidden="true"></span><span className="sr-only">Search lenders or overlays</span>
            <input type="search" placeholder="Search lenders or overlays" value={search} onChange={(event) => setSearch(event.target.value)} />
          </label>
          <label className="filter-field"><span>Property</span><select value={property} onChange={(event) => setProperty(event.target.value)}>
            <option value="all">All types</option><option value="multifamily">Multifamily</option><option value="mixed">Mixed-use</option>
          </select></label>
          <label className="filter-field"><span>Units</span><input type="number" min="2" step="1" placeholder="Any" value={units} onChange={(event) => setUnits(event.target.value)} /></label>
          <span className="result-count" aria-live="polite">{matches.length} of {lenders.length} lenders</span>
          {units && property !== "multifamily" && <span className="filter-note">Mixed-use programs with unpublished unit limits are excluded from unit-count results.</span>}
        </div>
        <div className="table-scroll" tabIndex={0} role="region" aria-label="Wholesale lender comparison">
          <table>
            <thead><tr><th scope="col">Lender</th><th scope="col">Multifamily</th><th scope="col">Mixed-use</th><th scope="col">Min. loan</th><th scope="col">Min. FICO</th><th scope="col">Min. DSCR</th><th scope="col">Public pricing</th></tr></thead>
            <tbody>
            {matches.map((lender) => <Fragment key={lender.id}>
              <tr className={expanded.has(lender.id) ? "expanded" : ""}>
                <th scope="row"><div className="lender-cell"><span className="monogram" aria-hidden="true">{lender.initials}</span><div><External href={lender.program}>{lender.name}</External><small>{lender.channel}</small></div><button className="disclosure" type="button" aria-label={(expanded.has(lender.id) ? "Hide " : "Show ") + lender.name + " details"} aria-expanded={expanded.has(lender.id)} onClick={() => toggle(lender.id)}>{expanded.has(lender.id) ? "−" : "+"}</button></div></th>
                <td>{lender.multifamily} units</td><td>{lender.mixed}{lender.mixedMax !== null ? " units" : ""}</td>
                <td><Value>{lender.minimumAmount}</Value></td><td><Value>{lender.fico}</Value></td><td><Value>{lender.dscr}</Value></td>
                <td>{lender.price ? <><strong className="rate-cell">{lender.price}</strong><small>{lender.priceType}</small></> : <Value>{""}</Value>}</td>
                
              </tr>
              {expanded.has(lender.id) && <tr className="lender-details"><td colSpan={7}><LenderDetails lender={lender} onQuote={onQuote}/></td></tr>}
            </Fragment>)}
            </tbody>
          </table>
        </div>
        {matches.length === 0 && <p className="empty-inline">No lenders match those filters. <button className="link-button" onClick={() => { setSearch(""); setProperty("all"); setUnits(""); }}>Clear filters</button></p>}
      </div>
      <p className="table-note">A dash means the value was unverified or unpublished. Published minimums and maximums apply at different pricing tiers.</p>
    </section>

    <section className="benchmark" aria-labelledby="benchmark-title">
      <div>
        <span className="eyebrow">November 23, 2026 rate sheet</span>
        <h2 id="benchmark-title">Brokers First Funding benchmark</h2>
        <p>$750K purchase · 70% LTV · 740 FICO · 1.25× DSCR · 30-year fixed · three-year prepay</p>
        <External href={bffRateSheet}>View wholesale rate sheet, page 11</External>
      </div>
      <div className="benchmark-prices">
        <div><span>Multifamily</span><strong>9.125%</strong><span>0.125 points</span></div>
        <div><span>Mixed-use</span><strong>9.125%</strong><span>0.625 points</span></div>
        <p>$1,995 lender fee either way. Broker compensation and third-party costs are additional.</p>
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
      <header className="dialog-header"><div><h2 id="dialog-title">{id ? "Edit quote" : "Log a quote"}</h2><p>Only the lender and scenario name are required.</p></div>
        <button className="disclosure" disabled={saving} type="button" aria-label="Close quote form" onClick={onClose}>×</button>
      </header>
      <div className="dialog-body">
        <fieldset><legend>Scenario</legend><div className="form-grid">
          {field("scenario", "Scenario name", { required: true, maxLength: 100, placeholder: "Example: Newark 6-unit purchase", autoFocus: true })}
          <label className="field"><span>Lender</span><select name="lenderId" defaultValue={form.lenderId} required><option value="">Choose lender</option>{lenders.map((lender) => <option key={lender.id} value={lender.id}>{lender.name}</option>)}</select></label>
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
