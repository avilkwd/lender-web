import { additions } from "./research-data";
import { newListings } from "./research-expansion";
import { linkedinListings } from "./research-linkedin";
import type { AccessType, EvidenceLink, FundingRole, ProgramGroup, UnitRange } from "./research-types";

export type Lender = {
  id: string;
  newListing?: boolean;
  linkedinListing?: boolean;
  name: string;
  initials: string;
  channel: string;
  program: string;
  matrix?: string;
  pricing?: string;
  multifamily: string;
  multifamilyMax: number | null;
  mixed: string;
  mixedMax: number | null;
  minimumAmount: string;
  fico: string;
  dscr: string;
  price: string;
  priceType?: string;
  overlays: string;
  review: string;
  reviewSources?: EvidenceLink[];
  role: FundingRole;
  group: ProgramGroup;
  access: AccessType;
  accessDetails?: string;
  fundingEvidence: string;
  coverage?: string;
  sources?: EvidenceLink[];
  multifamilyRange?: UnitRange;
  mixedRange?: UnitRange;
  loanSize?: string;
};

const nyNj = "New York is excluded on this program. New Jersey requires 720 FICO and caps LTV at 70% on purchases and 65% on refinances.";

export const researchDate = "November 24, 2026";
export const bffRateSheet = "https://www.bffws.com/api/media/file/Non-QM%20Rate%20Sheet%2011232026.pdf";

const initialLenders: Omit<Lender, "role" | "group" | "access" | "fundingEvidence">[] = [
  {
    id: "maverick", name: "Maverick Lending NYC", initials: "M", channel: "Broker program",
    program: "https://www.mavericklendingnyc.com/broker-program",
    multifamily: "5–10", multifamilyMax: 10, mixed: "2–8", mixedMax: 8,
    minimumAmount: "$350K", fico: "720", dscr: "1.00×", price: "6.99%", priceType: "Advertised starting rate",
    overlays: "$350K–$4M. Up to 75% purchase or rate/term LTV and 70% cash-out LTV. Mixed-use requires at least 51% residential by area and income. Units must be at least 400 sq. ft. The published starting rate is specific to these property types. Points and prepay terms for that rate are unverified.",
    review: "Lender-published broker testimonials praise communication and complex deal structuring. Independent firsthand feedback was sparse.",
    reviewSources: [{label:"Broker testimonials", url:"https://www.mavericklendingnyc.com/broker-program"},{label:"Independent research profile", url:"https://www.realestate-reviews.net/lenders/firms/maverick-lending-nyc"}],
  },
  {
    id: "blufin", name: "IceCap / BluFin", initials: "B", channel: "BluFin wholesale",
    program: "https://icecapgroup.com/brokers/blufin/", pricing: "https://icecapgroup.com/loan-products/dscr/",
    multifamily: "5–9", multifamilyMax: 9, mixed: "2–8", mixedMax: 8,
    minimumAmount: "$350K / $400K", fico: "", dscr: "", price: "7.25%", priceType: "Advertised starting rate",
    overlays: "$350K–$2M multifamily and $400K–$2M mixed-use. Up to 75% LTV. Cash-out up to 70% for multifamily and 65% for mixed-use. Mixed-use requires 51% residential use. Experienced investors only. IceCap advertises 7.25% on its product page. Ask BluFin for wholesale terms at that rate.",
    review: "Lender-published broker testimonials describe smooth closings and a rate that was honored. A Loan Factory profile showed one internal review.",
    reviewSources: [{label:"BluFin broker testimonials", url:"https://icecapgroup.com/brokers/blufin/"},{label:"Loan Factory profile", url:"https://www.rbhomefinance.com/our-lenders/icecap-group-33502627028"}],
  },
  {
    id: "quontic", name: "Quontic Wholesale", initials: "Q", channel: "Bank wholesale",
    program: "https://quonticwholesale.com/resources/scenario-request-form/",
    matrix: "https://quonticwholesale.com/wp-content/uploads/2025/03/QB-MU-MF-DSCR-Product-Guidelines-03.17.25.pdf",
    multifamily: "5–10", multifamilyMax: 10, mixed: "2–8", mixedMax: 8,
    minimumAmount: "$250K", fico: "660", dscr: "1.00×", price: "",
    overlays: "$250K–$3M. Up to 75% purchase LTV at qualifying tiers. Purchase tiers start at 660 FICO at lower leverage. Loans below $400K have a 5-point reduction to maximum LTV. Use the dedicated mixed-use and multifamily scenario form for pricing.",
    review: "Trustpilot showed 4.2/5 from 721 companywide reviews. Mortgage reviewers cite helpful staff and, in some cases, communication delays. The profile also covers banking products.",
    reviewSources: [{label:"Trustpilot reviews", url:"https://www.trustpilot.com/review/quontic.com"}],
  },
  {
    id: "ad", name: "AD Mortgage", initials: "AD", channel: "Wholesale",
    program: "https://admortgage.com/wholesale-lender/",
    matrix: "https://admortgage.com/wp-content/uploads/DSCR_Multifamily_AD_Products-5.pdf", pricing: "https://pricer.admortgage.com/",
    multifamily: "5–8", multifamilyMax: 8, mixed: "2–8", mixedMax: 8,
    minimumAmount: "$400K", fico: "700", dscr: "1.10×", price: "",
    overlays: "$400K–$3M. Up to 75% CLTV. Mixed-use commercial space is capped at 49% of building area and 49.99% of qualifying income. " + nyNj,
    review: "Trustpilot showed 4.9/5 from 187 companywide reviews. Broker reviewers cite responsive account executives and fast underwriting. Some reviews were invited.",
    reviewSources: [{label:"Trustpilot reviews", url:"https://www.trustpilot.com/review/admortgage.com"}],
  },
  {
    id: "thelender", name: "theLender", initials: "tl", channel: "NONI58 wholesale",
    program: "https://wholesale.thelender.com/noni58/", pricing: "https://wholesale.thelender.com/ratesheets/",
    multifamily: "5–8", multifamilyMax: 8, mixed: "2–8", mixedMax: 8,
    minimumAmount: "$400K mixed-use", fico: "700", dscr: "1.00×", price: "",
    overlays: "NONI58 offers up to $2M and 75% purchase LTV. The program page lists a $400K minimum for mixed-use and permits certain interest-only scenarios.",
    review: "Google reviews displayed on the lender’s site praise timely updates. BBB complaints include unwanted sales calls, including from a mortgage broker.",
    reviewSources: [{label:"Lender review page", url:"https://wholesale.thelender.com/reviews/"},{label:"BBB complaints", url:"https://www.bbb.org/us/ca/lake-forest/profile/mortgage-lenders/thelender-1126-1000082213/complaints"}],
  },
  {
    id: "bff", name: "Brokers First Funding", initials: "BF", channel: "Wholesale only",
    program: "https://www.bffws.com/programs/dscr-multifamily", pricing: "https://www.bffws.com/resources/daily-rates",
    multifamily: "5–8", multifamilyMax: 8, mixed: "2–8", mixedMax: 8,
    minimumAmount: "$400K", fico: "700", dscr: "1.00×", price: "9.125%", priceType: "Dated rate-sheet example",
    overlays: "$400K–$2M. Up to 75% purchase LTV. Mixed-use allows up to 49% commercial leasable area and requires executed commercial leases. Excludes New York, Illinois, Bergen and Essex counties in NJ, and certain MD and PA locations or property types.",
    review: "Lender-published broker testimonials describe on-time closings. Independent firsthand evidence for these programs was sparse.",
    reviewSources: [{label:"Broker testimonials", url:"https://www.bffws.com/"}],
  },
  {
    id: "verus", name: "Verus Wholesale", initials: "V", channel: "Investor Solutions",
    program: "https://verusmc.com/wholesale/", matrix: "https://verusmc.com/wp-content/uploads/resources/Verus-Wholesale-Non-Agency-Loan-LTV-Matrix-10.19.2026-Final-2.pdf",
    multifamily: "5–8", multifamilyMax: 8, mixed: "2–8", mixedMax: 8,
    minimumAmount: "$400K", fico: "700", dscr: "1.00×", price: "",
    overlays: "Up to $3M multifamily and $2M mixed-use. Up to 75% purchase LTV at qualifying tiers. Commercial use is limited to retail, office, or restaurant, with building area and commercial rent caps. " + nyNj + " Connecticut has the same LTV and FICO limits.",
    review: "Little firsthand public feedback specific to the wholesale channel surfaced in the research.",
  },
  {
    id: "nqm", name: "NQM Funding", initials: "NQ", channel: "Wholesale",
    program: "https://www.nqmf.com/wholesale/", matrix: "https://www.nqmf.com/docs/Flyers/Standard/DSCRMixUse.pdf",
    multifamily: "5–10", multifamilyMax: 10, mixed: "2–8", mixedMax: 8,
    minimumAmount: "", fico: "720", dscr: "1.00×", price: "",
    overlays: "Up to $3M and 75% LTV. The flyer allows some first-time investors for 5–10 unit residential properties subject to restrictions.",
    review: "A Boca Raton company profile showed 2.4/5 from 21 reviews. One reviewer reported pricing changes near closing. This small sample covers the company generally.",
    reviewSources: [{label:"Birdeye profile", url:"https://reviews.birdeye.com/nqm-funding-llc-171807328035942"}],
  },
  {
    id: "5th", name: "5th Street Capital", initials: "5", channel: "Wholesale only",
    program: "https://www.5thstcap.com/multi-family",
    multifamily: "5–8", multifamilyMax: 8, mixed: "2–8", mixedMax: 8,
    minimumAmount: "", fico: "700", dscr: ">1.00×", price: "",
    overlays: "Up to $2M and 75% LTV. Interest-only options. Generally allows up to 49% commercial use. Experienced investors only. New York and Illinois are excluded.",
    review: "Independent broker feedback was sparse. The Loan Factory profile showed one internal review.",
    reviewSources: [{label:"Loan Factory profile", url:"https://www.rbhomefinance.com/our-lenders/5th-street-capital-inc-34264267200"}],
  },
  {
    id: "easy", name: "Easy Street Capital", initials: "ES", channel: "EasyRent broker program",
    program: "https://easystreetcap.com/mortgage-broker-program/",
    matrix: "https://easystreetcap.com/easyrent/",
    multifamily: "5–10", multifamilyMax: 10, mixed: "Eligible", mixedMax: null,
    minimumAmount: "", fico: "", dscr: "", price: "",
    overlays: "EasyRent advertises residential investment loans through 10 units and supports qualifying mixed-use. The 5.75% general EasyRent headline was unverified for 5+ unit or mixed-use collateral. Request property-specific terms from the broker desk.",
    review: "Trustpilot showed 2.4/5 from 15 reviews. Feedback includes responsive service through appraisal challenges and complaints about lengthy processing.",
    reviewSources: [{label:"Trustpilot reviews", url:"https://www.trustpilot.com/review/easystreetcap.com"}],
  },
  {
    id: "velocity", name: "Velocity Mortgage Capital", initials: "VM", channel: "Commercial broker lending",
    program: "https://www.velocitymortgage.com/mortgage-programs/", pricing: "https://www3.velocitymortgage.com/rate-sheet-request",
    multifamily: "5+", multifamilyMax: null, mixed: "Eligible", mixedMax: null,
    minimumAmount: "", fico: "", dscr: "", price: "",
    overlays: "30-year fixed available for 5+ unit multifamily and mixed-use. Useful commercial desk for 11+ units or a higher commercial share. Confirm unit count, leverage, and eligible tenants for the address with the broker desk.",
    review: "BBB reviewers report some servicing and fee issues. Firsthand feedback specific to wholesale closings was limited.",
    reviewSources: [{label:"BBB customer reviews", url:"https://www.bbb.org/us/ca/westlake-village/profile/loans/velocity-mortgage-capital-1236-2000079/customer-reviews"}],
  },
];

const originalEvidence: Record<string, Pick<Lender, "role" | "group" | "access" | "fundingEvidence" | "sources" | "coverage" | "reviewSources"> & { review?: string }> = {
  maverick: {
    role: "Direct claim unverified", group: "Private capital", access: "Commercial broker access",
    fundingEvidence: "The company describes itself as a direct private lender and markets a broker program. Independent evidence of who funds or is named on these notes was limited. Ask for the lender of record before relying on the advertised terms.",
    coverage: "NYC-based. Program geography unverified.",
    sources: [{ label: "Company statement", url: "https://www.mavericklendingnyc.com/" }, { label: "Company LinkedIn", url: "https://www.linkedin.com/company/maverick-lending-nyc/" }],
  },
  blufin: {
    role: "Direct lender", group: "Wholesale DSCR / Non-QM", access: "Wholesale / TPO",
    fundingEvidence: "BluFin is the wholesale lending division of Ice Lender Holdings / IceCap Group. IceCap describes separate direct, wholesale and referral channels.",
    sources: [{ label: "Lender channel FAQ", url: "https://icecapgroup.com/faq/" }, { label: "BluFin LinkedIn", url: "https://www.linkedin.com/company/blufin-group" }],
  },
  quontic: {
    role: "Bank / credit union", group: "Wholesale DSCR / Non-QM", access: "Wholesale / TPO",
    fundingEvidence: "Quontic Bank publishes a lender matrix and runs a dedicated wholesale mixed-use and multifamily scenario desk.",
    coverage: "State and licensing overlays apply.",
    sources: [{ label: "Quontic bank site", url: "https://www.quontic.com/mortgages/non-traditional-loans/dscr-mixed-use-multi-family/" }],
  },
  ad: {
    role: "Direct lender", group: "Wholesale DSCR / Non-QM", access: "Wholesale / TPO",
    fundingEvidence: "AD Mortgage publishes its own wholesale product guidelines under the mortgage lender entity A&D Mortgage LLC.",
    coverage: "Program excludes AK, IL and NY. NJ overlays apply.",
    sources: [{ label: "Wholesale partner support", url: "https://admortgage.com/partner-support/" }],
  },
  thelender: {
    role: "Direct lender", group: "Wholesale DSCR / Non-QM", access: "Wholesale / TPO",
    fundingEvidence: "theLender publishes the NONI58 wholesale eligibility and pricing under Hometown Equity Mortgage, LLC.",
    sources: [{ label: "Wholesale channel", url: "https://wholesale.thelender.com/" }],
  },
  bff: {
    role: "Direct lender", group: "Wholesale DSCR / Non-QM", access: "Wholesale / TPO",
    fundingEvidence: "Brokers First Funding identifies itself as FlexPoint, Inc. and operates a wholesale-only mortgage channel with lender-issued rate sheets.",
    coverage: "Program excludes NY, IL, and certain NJ, PA and MD locations.",
    review: "A Reddit mortgage originator reported that BFF closed their eight-unit file quickly. Lender-published testimonies also describe on-time closings.",
    reviewSources: [{ label: "Reddit originator report", url: "https://www.reddit.com/r/loanoriginators/comments/1r2jvlm/5_unit/" }, { label: "Lender testimonials", url: "https://www.bffws.com/" }],
  },
  verus: {
    role: "Direct lender", group: "Wholesale DSCR / Non-QM", access: "Wholesale / TPO",
    fundingEvidence: "Verus Wholesale, a trade name of Verus Residential Loanco, LLC, describes underwriting and funding its wholesale loans.",
    coverage: "Program excludes AK, IL and NY, with county and CT/NJ overlays.",
    sources: [{ label: "Funding entity", url: "https://verusmc.com/contact/" }],
  },
  nqm: {
    role: "Direct lender", group: "Wholesale DSCR / Non-QM", access: "Wholesale / TPO",
    fundingEvidence: "NQM Funding, LLC publishes the program and is listed by Freddie Mac as a participating wholesale lender.",
    review: "A Reddit originator reported a generally smooth six-family rate-and-term refinance. A small companywide Birdeye profile had complaints about costs changing near closing.",
    reviewSources: [{ label: "Reddit originator report", url: "https://www.reddit.com/r/loanoriginators/comments/1uy54ec/dscr_lender_love/" }, { label: "Birdeye", url: "https://reviews.birdeye.com/nqm-funding-llc-171807328035942" }],
    sources: [{ label: "Participating lender listing", url: "https://sf.freddiemac.com/tools-learning/technology-tools/wholesaler" }],
  },
  "5th": {
    role: "Direct lender", group: "Wholesale DSCR / Non-QM", access: "Wholesale / TPO",
    fundingEvidence: "5th Street Capital publishes its own matrix and identifies itself as an independent, wholesale-only non-QM lender.",
    coverage: "Program excludes NY and IL.",
    sources: [{ label: "Wholesale broker approval", url: "https://www.5thstcap.com/broker-approval" }],
  },
  easy: {
    role: "Direct lender", group: "Wholesale DSCR / Non-QM", access: "Commercial broker access",
    fundingEvidence: "Easy Street describes a private lending and servicing operation, with a separate mortgage-broker program.",
    sources: [{ label: "Mixed-use program details", url: "https://easystreetcap.com/dscr-loans-for-mixed-use-investment-properties/" }],
  },
  velocity: {
    role: "Direct lender", group: "Wholesale DSCR / Non-QM", access: "Wholesale / TPO",
    fundingEvidence: "Velocity’s November 2026 SEC filing describes origination and securitization of multifamily and mixed-use mortgages via brokers and direct borrowers.",
    sources: [{ label: "SEC origination disclosure", url: "https://www.sec.gov/Archives/edgar/data/1692376/000119312526450404/vel-20260930.htm" }],
  },
};

const recentListings = [...newListings, ...linkedinListings];
const newListingIds = new Set(recentListings.map((listing) => listing.id));
const linkedinListingIds = new Set(linkedinListings.map((listing) => listing.id));

export const lenders: Lender[] = [
  ...initialLenders.map((lender) => ({
    ...lender,
    ...originalEvidence[lender.id],
    multifamilyRange: { min: 5, max: lender.multifamilyMax ?? undefined },
    mixedRange: lender.mixedMax === null ? undefined : { min: 2, max: lender.mixedMax },
    multifamily: lender.multifamily + " units",
    mixed: lender.mixed + (lender.mixedMax === null ? "" : " units"),
  })),
  ...[...additions, ...recentListings].map((listing): Lender => ({
    newListing: newListingIds.has(listing.id),
    linkedinListing: linkedinListingIds.has(listing.id),
    id: listing.id,
    name: listing.name,
    initials: listing.name.split(/\s+/).slice(0, 2).map((word) => word[0]).join("").toUpperCase(),
    channel: listing.group,
    program: listing.sources[0].url,
    role: listing.role,
    group: listing.group,
    access: listing.access,
    accessDetails: listing.accessDetails,
    fundingEvidence: listing.fundingEvidence,
    coverage: listing.coverage,
    multifamily: listing.multifamily,
    multifamilyMax: listing.multifamilyRange?.max ?? null,
    multifamilyRange: listing.multifamilyRange,
    mixed: listing.mixedUse,
    mixedMax: listing.mixedUseRange?.max ?? null,
    mixedRange: listing.mixedUseRange,
    minimumAmount: "",
    loanSize: listing.loanSize,
    fico: listing.fico ?? "",
    dscr: listing.dscr ?? "",
    price: listing.price ?? "",
    priceType: listing.priceType,
    overlays: listing.notes,
    review: listing.review ?? "",
    reviewSources: listing.reviewSources,
    sources: listing.sources.slice(1),
  })),
];
