import type { CommunityNote, PriceNote, ResearchListing } from "./research-types";

export const newListings: ResearchListing[] = [
  {
    "id": "constructive-capital",
    "name": "Constructive Capital",
    "role": "Direct lender",
    "group": "Wholesale DSCR / Non-QM",
    "access": "Wholesale / TPO",
    "accessDetails": "The company publishes a wholesale-only broker partner onboarding route.",
    "fundingEvidence": "Constructive Capital identifies itself as the wholesale private lender providing capital directly through its broker desk.",
    "coverage": "Advertises nationwide coverage. Check the 5–8-unit matrix and state restrictions.",
    "multifamily": "5–8 units, DSCR",
    "multifamilyRange": {
      "min": 5,
      "max": 8
    },
    "mixedUse": "",
    "loanSize": "",
    "notes": "Company program page explicitly lists 5–8 in its residential DSCR offering. Ask for collateral-specific sizing, credit, and pricing. Mixed-use remains unverified.",
    "sources": [
      {
        "label": "DSCR collateral eligibility",
        "url": "https://www.constructiveloans.com/dscr"
      },
      {
        "label": "Wholesale broker agreement route",
        "url": "https://www.constructiveloans.com/partners"
      }
    ]
  },
  {
    "id": "eb-wholesale-mortgage",
    "name": "EB Wholesale Mortgage",
    "role": "Direct claim unverified",
    "group": "Wholesale DSCR / Non-QM",
    "access": "Wholesale / TPO",
    "accessDetails": "Official wholesale desk serves mortgage brokers, TPOs, and community banks.",
    "fundingEvidence": "Scianna Capital Group, LLC uses the EB Wholesale Mortgage DBA. Its wholesale page calls the company a lender and its main page identifies it as a mortgage broker. Confirm who closes and funds this execution.",
    "coverage": "Based in Michigan. Advertises national lending. Confirm state and collateral eligibility.",
    "multifamily": "5–9 units, long-term DSCR (10+ by exception)",
    "multifamilyRange": {
      "min": 5,
      "max": 9
    },
    "mixedUse": "Short-term rehab",
    "loanSize": "$250K–$2M term multifamily. $250K–$3M multifamily or mixed-use rehab.",
    "notes": "Published term DSCR maximum is 67.5% LTV for purchase or rate-and-term at 740+ FICO. The separate mixed-use rehab program has a 12-month term with a 6-month extension. Confirm prepayment and broker compensation on the quote.",
    "fico": "680 term multifamily",
    "dscr": "1.20× term multifamily",
    "price": "From 7.25%",
    "priceType": "Advertised 5–9-unit term starting rate, source checked Nov 24, 2026",
    "sources": [
      {
        "label": "Wholesale 5–9-unit and mixed-use programs",
        "url": "https://www.ebwmtg.com/wholesale"
      },
      {
        "label": "Company and legal entity",
        "url": "https://www.ebwmtg.com/"
      }
    ]
  },
  {
    "id": "east-west-bank",
    "name": "East West Bank",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Broker access unverified",
    "accessDetails": "Published intake is via the bank’s commercial real estate specialists. Ask whether a broker can submit and how compensation works.",
    "fundingEvidence": "The bank publishes its own commercial acquisition, term and bridge financing.",
    "coverage": "U.S. bank with strong California and New York footprint. Contact the bank for exact collateral geography.",
    "multifamily": "Bank acquisition or CRE term loan",
    "mixedUse": "Bank CRE",
    "loanSize": "",
    "notes": "Advertises fixed or variable financing up to a 10-year term plus bridge and development options. Public CRE material leaves loan minimum, unit limits, DSCR and pricing open.",
    "sources": [
      {
        "label": "Bank CRE programs and collateral",
        "url": "https://www.eastwestbank.com/en/commercial-banking/real-estate"
      },
      {
        "label": "Commercial banking",
        "url": "https://www.eastwestbank.com/en/commercial-banking"
      }
    ]
  },
  {
    "id": "everbank",
    "name": "EverBank Multifamily Lending",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Broker access unverified",
    "accessDetails": "Published intake is through regional bank professionals. Broker submissions and compensation are open.",
    "fundingEvidence": "EverBank publishes its own commercial multifamily term-loan program.",
    "coverage": "Program lists regional contacts for CA, OR and WA. Confirm county-level coverage with the bank.",
    "multifamily": "5+ units, stabilized term loan or construction takeout",
    "multifamilyRange": {
      "min": 5
    },
    "mixedUse": "Bank term program",
    "loanSize": "$1M–$20M+",
    "notes": "Up to 75% LTV and 30-year amortization. Initial fixed periods of 3, 5, 7 or 10 years, then adjusts. Full and limited recourse options. Flexible prepay advertised. Confirm the charge and mixed-use limits on the specific structure.",
    "dscr": "1.15×, 1.20× cash-out",
    "sources": [
      {
        "label": "Multifamily and mixed-use program",
        "url": "https://www.everbank.com/commercial/financing/multifamily-lending"
      }
    ]
  },
  {
    "id": "ffb-bank",
    "name": "FFB Bank / Fresno First",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Commercial broker access",
    "accessDetails": "Dedicated wholesale commercial lending desk with a multifamily broker application and broker-specific quote checklist.",
    "fundingEvidence": "Fresno First Bank publishes its bank-originated permanent and FFBridge multifamily programs.",
    "coverage": "California. Confirm the county and local market.",
    "multifamily": "Permanent acquisition or refinance, plus bridge",
    "mixedUse": "Permanent acquisition or refinance",
    "loanSize": "",
    "notes": "Formal quote checklist asks for at least six months PITI in reserves and net worth equal to the loan request. The linked historical rate sheet is effective March 2021. Request the current matrix, mixed-use limits, rate, fees, broker compensation and prepay.",
    "sources": [
      {
        "label": "Permanent multifamily and mixed-use program",
        "url": "https://www.ffb.bank/home/business/wholesale-commercial-lending/permanent-multifamily-financing/"
      },
      {
        "label": "Multifamily broker application",
        "url": "https://www.ffb.bank/home/business/wholesale-commercial-lending/broker-resources/broker-application/"
      },
      {
        "label": "Quote and sponsor checklist",
        "url": "https://www.ffb.bank/home/business/wholesale-commercial-lending/permanent-multifamily-financing/soft-quote-and-formal-quote-requirements/"
      }
    ]
  },
  {
    "id": "landmark-credit-union",
    "name": "Landmark Credit Union (Wisconsin)",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Broker access unverified",
    "accessDetails": "Borrower inquiry goes to its commercial lending team. Third-party broker submissions and pay were unverified.",
    "fundingEvidence": "Landmark publishes its own Focused Real Estate lending program and a separate CRE lending desk.",
    "coverage": "Wisconsin region. Confirm field-of-membership and property coverage.",
    "multifamily": "5+ considered",
    "multifamilyRange": {
      "min": 5
    },
    "mixedUse": "",
    "loanSize": "$50K–$500K",
    "notes": "Focused Real Estate lists five-year fixed with up to 30-year amortization and fully amortizing 15-year fixed. It excludes mixed-use. Published down payment is 20% for purchases, and refinance LTV is capped at 75%.",
    "sources": [
      {
        "label": "Focused Real Estate rates and eligibility",
        "url": "https://landmarkcu.com/business-borrow/focused-real-estate/"
      },
      {
        "label": "Commercial loan desk",
        "url": "https://www.landmarkcu.com/business-borrow/"
      }
    ]
  },
  {
    "id": "partners-1st-fcu",
    "name": "Partners 1st Federal Credit Union",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Broker access unverified",
    "accessDetails": "Commercial lending staff are the published channel. Broker arrangements are unverified.",
    "fundingEvidence": "Partners 1st directly offers its own commercial real estate loans for the published property categories.",
    "coverage": "Fort Wayne, Indiana-based. Confirm lending territory and membership for the subject.",
    "multifamily": "Commercial multifamily",
    "mixedUse": "Eligible",
    "loanSize": "",
    "notes": "Purchase, refinance, renovation and construction are listed. It considers both owner- and non-owner-occupied properties and prices on debt service coverage, LTV, term, and credit.",
    "sources": [
      {
        "label": "Commercial real estate program",
        "url": "https://partners1stcu.org/business-needs/borrow/commercial-real-estate"
      }
    ]
  },
  {
    "id": "somerville-bank-oh",
    "name": "Somerville Bank (Ohio)",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Broker access unverified",
    "accessDetails": "Local bank inquiry. Public evidence for a broker or TPO desk was limited.",
    "fundingEvidence": "The bank actively markets mixed-use property loans to real estate investors and business owners.",
    "coverage": "Ohio and Indiana.",
    "multifamily": "",
    "mixedUse": "Mixed-use property loans",
    "loanSize": "",
    "notes": "Published fit includes atypical and rural residential-commercial combinations. Confirm eligibility as a non-owner-occupied CRE transaction, advance, and amortization. Standalone 5+ apartments were unverified.",
    "sources": [
      {
        "label": "Mixed-use program and territory",
        "url": "https://somervillebank.net/mixed-use-property-loans/"
      }
    ]
  },
  {
    "id": "uw-credit-union",
    "name": "UW Credit Union",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Broker access unverified",
    "accessDetails": "The website routes inquiries to the credit union's lending staff. Formal commercial broker compensation and intake were unverified.",
    "fundingEvidence": "The credit union publishes and offers its own investment property loan program.",
    "coverage": "Wisconsin properties. Preference for Wisconsin-based owners and guarantors.",
    "multifamily": "5+ apartments",
    "multifamilyRange": {
      "min": 5
    },
    "mixedUse": "",
    "loanSize": "",
    "notes": "Existing all-rental buildings qualify for consideration. Published maximum 80% LTV, with customizable terms and amortization. Mixed-use and ground-up are excluded from this program.",
    "sources": [
      {
        "label": "Investment property program and overlays",
        "url": "https://www.uwcu.org/loans/investment-property"
      }
    ]
  },
  {
    "id": "aj-capital-funding",
    "name": "AJ Capital Funding Group",
    "role": "Direct claim unverified",
    "group": "Private capital",
    "access": "Commercial broker access",
    "accessDetails": "Its multifamily page directs brokers to an account executive for portal access.",
    "fundingEvidence": "The company markets itself as a direct portfolio lender. Independent verification of the note lender and capital source was limited.",
    "coverage": "Advertises nationwide lending. Confirm state eligibility.",
    "multifamily": "Apartment buildings",
    "mixedUse": "Eligible",
    "loanSize": "",
    "notes": "Asset-based commercial and mixed-use financing is published. Confirm the exact unit count, credit terms, funding entity, and broker agreement.",
    "sources": [
      {
        "label": "Commercial and mixed-use product disclosure",
        "url": "https://ajcapitalfunding.com/commercial-loans/"
      },
      {
        "label": "Multifamily and broker portal",
        "url": "https://ajcapitalfunding.com/multi-family/"
      }
    ]
  },
  {
    "id": "bridgewell-capital",
    "name": "BridgeWell Capital",
    "role": "Lends and places deals",
    "group": "Private capital",
    "access": "Commercial broker access",
    "accessDetails": "BridgeWell publishes application and workflow information for approved broker partners.",
    "fundingEvidence": "The company identifies its private capital as direct. Its 5+ multifamily page also offers access to institutional capital programs, so the funder depends on execution.",
    "coverage": "U.S. lending footprint varies by program. Confirm the property state.",
    "multifamily": "5+ units, bridge and term options",
    "multifamilyRange": {
      "min": 5
    },
    "mixedUse": "Small-balance CRE",
    "loanSize": "$150K–$2M on small CRE",
    "notes": "The small CRE program lists terms up to five years and mixed-use eligibility. Verify pricing, term, geographic limits and lender of record on the specific multifamily or mixed-use execution.",
    "sources": [
      {
        "label": "5+ multifamily programs",
        "url": "https://www.bridgewellcapital.com/loans/multi-family/"
      },
      {
        "label": "Small-balance commercial",
        "url": "https://www.bridgewellcapital.com/loans/commercial-real-estate-loans/"
      },
      {
        "label": "Broker partners",
        "url": "https://www.bridgewellcapital.com/partners/"
      }
    ],
    "review": "Trustpilot showed 4.5/5 across 85 reviews. Invited reviewers cite responsiveness, flexibility and quick closings. A 2023 reviewer reported a credit requirement they had not expected. Reviews span several products and deal sizes.",
    "reviewSources": [
      {
        "label": "Trustpilot customer reviews",
        "url": "https://www.trustpilot.com/review/bridgewellcapital.com"
      }
    ]
  },
  {
    "id": "ccig",
    "name": "Commercial Capital Investor Group",
    "role": "Direct claim unverified",
    "group": "Private capital",
    "access": "Broker access unverified",
    "accessDetails": "Advisor and direct investor channels are public. Independent confirmation of a formal broker submission program was limited.",
    "fundingEvidence": "CCIG describes itself as a direct or correspondent lender. Ask which entity originates and funds the selected commercial program.",
    "coverage": "Advertises 42+ states, headquartered in Haverhill, Massachusetts.",
    "multifamily": "5+ units",
    "multifamilyRange": {
      "min": 5
    },
    "mixedUse": "Eligible",
    "loanSize": "$75K–$5M across programs",
    "notes": "Published overall range spans multiple programs. Confirm the actual floor and fixed term for 5+ multifamily or mixed-use. Its term page advertises amortizing and adjustable options.",
    "sources": [
      {
        "label": "Term and funding disclosure",
        "url": "https://ccigloans.com/loan-terms.html"
      },
      {
        "label": "Multifamily product",
        "url": "https://ccigloans.com/property-loans/multi-family/"
      },
      {
        "label": "Mixed-use product",
        "url": "https://ccigloans.com/property-loans/mixed-use/"
      }
    ]
  },
  {
    "id": "edgewood-capital",
    "name": "Edgewood Capital Advisors",
    "role": "Direct lender",
    "group": "Private capital",
    "access": "Broker access unverified",
    "accessDetails": "Publishes direct origination intake. Confirm third-party submissions and fee protection.",
    "fundingEvidence": "Edgewood states it originates, holds and services bridge loans. Its deal announcement details a first-lien Brooklyn apartment loan.",
    "coverage": "U.S. commercial markets. Confirm state and metro.",
    "multifamily": "Bridge, including a documented 5-unit close",
    "mixedUse": "Bridge",
    "loanSize": "$2M–$40M published range",
    "notes": "For transitional or time-sensitive collateral. A Brooklyn deal announcement shows a $1.65M exception on five units. The documented closing illustrates past execution. Current minimum remains subject to underwriting.",
    "sources": [
      {
        "label": "Bridge program and funding",
        "url": "https://www.edgewoodcapital.com/bridge-loans/"
      },
      {
        "label": "Published Brooklyn 5-unit closing",
        "url": "https://www.edgewoodcapital.com/transaction/brooklyn-value-add-multifamily/"
      }
    ]
  },
  {
    "id": "goldman-funding",
    "name": "Goldman Funding",
    "role": "Direct claim unverified",
    "group": "Private capital",
    "access": "Commercial broker access",
    "accessDetails": "The official FAQ includes a broker channel and broker-compensation questions.",
    "fundingEvidence": "The firm markets private lending. Its FAQ says it uses a capital provider to fund loans directly, so the lender of record and funding relationship need confirmation.",
    "coverage": "Lists national coverage excluding AK, ID, ND, SD, UT and VT for these loans.",
    "multifamily": "5+ units",
    "multifamilyRange": {
      "min": 5
    },
    "mixedUse": "Eligible",
    "loanSize": "",
    "notes": "Small-balance commercial financing targets stabilized properties and publishes 1.20× minimum DSCR and 660+ FICO. Ask for specific lender, terms, and fees.",
    "sources": [
      {
        "label": "Small-balance CRE program",
        "url": "https://goldman-funding.com/small-balance-commercial-loans/"
      },
      {
        "label": "Outside capital and broker FAQ",
        "url": "https://goldman-funding.com/faqs/"
      }
    ]
  },
  {
    "id": "gps-capital",
    "name": "GPS Capital",
    "role": "Direct lender",
    "group": "Private capital",
    "access": "Commercial broker access",
    "accessDetails": "The DSCR desk advertises broker protection. Its hard-money broker desk also describes payment of broker fees.",
    "fundingEvidence": "GPS states it funds and services its hard-money deals in-house and lists itself as the direct lender under its rental program.",
    "coverage": "Published DSCR program advertises all 50 states. Confirm eligibility and lender of record for the state.",
    "multifamily": "5–9 units, long-term DSCR",
    "multifamilyRange": {
      "min": 5,
      "max": 9
    },
    "mixedUse": "DSCR and bridge",
    "loanSize": "$250K–$4M advertised DSCR program",
    "notes": "Published program headline shows up to 80% LTV, FICO from 660, DSCR from 0.75× and interest-only available. Confirm the tier that actually applies to 5–9 units or mixed-use and price each separately.",
    "fico": "660 advertised program floor",
    "dscr": "0.75× advertised program floor",
    "price": "From 6.50%",
    "priceType": "Indicative DSCR program floor, source checked Nov 24, 2026",
    "sources": [
      {
        "label": "DSCR collateral and program parameters",
        "url": "https://dscr.gpscapllc.com/"
      },
      {
        "label": "Broker access and direct funding",
        "url": "https://hardmoney.gpscapllc.com/brokers/"
      }
    ]
  },
  {
    "id": "helvetica-financial-group",
    "name": "Helvetica Financial Group",
    "role": "Direct lender",
    "group": "Private capital",
    "access": "Commercial broker access",
    "accessDetails": "Dedicated wholesale direct bridge submissions for brokers.",
    "fundingEvidence": "Company identifies its Raiseli platform as its proprietary sourcing of capital and states Helvetica funds issued term sheets.",
    "coverage": "Select U.S. metro markets. Eligibility depends on collateral, licensing and underwriting.",
    "multifamily": "5+ units, bridge",
    "multifamilyRange": {
      "min": 5
    },
    "mixedUse": "Commercial bridge",
    "loanSize": "$300K–$10M+",
    "notes": "Investment property only. Considers distressed, low-occupancy or value-add deals using collateral and exit. Request leverage, term, minimum interest and compensation for the file.",
    "sources": [
      {
        "label": "Broker-only bridge guidelines and capital source",
        "url": "https://helveticagroup.com/bridge-loans-for-brokers"
      }
    ]
  },
  {
    "id": "insource-funding",
    "name": "Insource Funding",
    "role": "Direct lender",
    "group": "Private capital",
    "access": "Commercial broker access",
    "accessDetails": "Dedicated broker agreement with posted partner qualifications, including roughly 10 deals annually and operating through an eligible licensed entity.",
    "fundingEvidence": "Company describes asset-based direct private lending and direct access to its own underwriting. Verify the named closing entity in the term sheet.",
    "coverage": "Published coverage in 43 states and DC, including NY and NJ.",
    "multifamily": "5–20 units, asset-based",
    "multifamilyRange": {
      "min": 5,
      "max": 20
    },
    "mixedUse": "Asset-based business purpose",
    "loanSize": "",
    "notes": "Small commercial broker page advertises qualifying exceptions below $500K without a DSCR minimum. Confirm thresholds and prepayment on the specific property.",
    "review": "The company site features testimonials describing the speed of a 12-unit closing and a separate mixed-use closing. These are company-selected accounts.",
    "sources": [
      {
        "label": "Collateral and underwriting overview",
        "url": "https://www.insourcefunding.net/lender-overview"
      },
      {
        "label": "Broker agreement and submission qualifications",
        "url": "https://insourcefunding.net/become-a-broker"
      }
    ],
    "reviewSources": [
      {
        "label": "Company-hosted borrower testimonials",
        "url": "https://www.insourcefunding.net/"
      }
    ]
  },
  {
    "id": "kirkland-capital-group",
    "name": "Kirkland Capital Group",
    "role": "Direct lender",
    "group": "Private capital",
    "access": "Commercial broker access",
    "accessDetails": "Broker-only CRE submissions. Kirkland states the broker fee is included in the term sheet and loan documents.",
    "fundingEvidence": "Kirkland describes this as direct portfolio lending and publishes its underwriting process and sample loan documents.",
    "coverage": "U.S. commercial markets, including selected small towns and rural locations. Confirm the state and property.",
    "multifamily": "5+ units, bridge",
    "multifamilyRange": {
      "min": 5
    },
    "mixedUse": "Bridge",
    "loanSize": "$200K–$1.5M",
    "notes": "12-, 18-, and 24-month interest-only bridge with extensions. Published maximums are 80% LTV for 5+ multifamily and 75% for mixed-use. Longer-term takeout is a separate financing decision.",
    "price": "From 9.99%",
    "priceType": "Advertised bridge rate",
    "sources": [
      {
        "label": "Bridge guidelines and collateral",
        "url": "https://kirklandlending.com/lending"
      },
      {
        "label": "Broker-only intake",
        "url": "https://kirklandlending.com/loan-scenario-submission"
      },
      {
        "label": "Portfolio and process",
        "url": "https://kirklandlending.com/underwriting-documentation-requirements"
      }
    ]
  },
  {
    "id": "red-oak-capital-holdings",
    "name": "Red Oak Capital Holdings",
    "role": "Direct lender",
    "group": "Private capital",
    "access": "Broker access unverified",
    "accessDetails": "Published originator contact on program sheet. Confirm broker submission and fee terms.",
    "fundingEvidence": "Red Oak describes deployment through its CRE credit investment platform and offers a senior bridge program.",
    "coverage": "Primary and secondary U.S. markets.",
    "multifamily": "Core bridge",
    "mixedUse": "Core bridge",
    "loanSize": "$2M–$20M",
    "notes": "Term up to five years with all extensions. Up to 75% stabilized LTV and 75% LTC. Break-even in-place coverage. Minimum interest generally half the initial term. Confirm floor, fees and any recourse.",
    "dscr": "1.00× in-place",
    "price": "1-mo. Term SOFR + 450–550 bps",
    "priceType": "Published variable interest-only bridge spread, source checked Nov 24, 2026",
    "sources": [
      {
        "label": "Core bridge collateral, sizing and pricing",
        "url": "https://www.redoakcapitalholdings.com/loan-program/core-bridge-loan/"
      }
    ]
  },
  {
    "id": "redlending",
    "name": "REDLending",
    "role": "Direct lender",
    "group": "Private capital",
    "access": "Commercial broker access",
    "accessDetails": "Published broker route names submitting party as broker of record and sends deal questions back through the broker.",
    "fundingEvidence": "Broker guide identifies RED as direct lender and lender of record and sets out its own decision process.",
    "coverage": "5+ unit bridge in CT, IL, MA, NC, NH, NJ, NY, PA, RI and SC.",
    "multifamily": "5+ units, transitional bridge",
    "multifamilyRange": {
      "min": 5
    },
    "mixedUse": "",
    "loanSize": "",
    "notes": "Up to 70% LTC and 75% as-is LTV. Requires multifamily experience, liquidity equal to 10% of loan and net worth equal to 100% of loan. Official property guide excludes mixed-use. The 30-year rental product is for 1–4 units.",
    "fico": "725",
    "dscr": "1.25× stabilized",
    "sources": [
      {
        "label": "5+ unit transitional bridge",
        "url": "https://www.red-lending.com/blog/multifamily-5-plus-transitional-bridge"
      },
      {
        "label": "Broker desk and lender-of-record statement",
        "url": "https://www.red-lending.com/brokers"
      },
      {
        "label": "Collateral exclusions",
        "url": "https://www.red-lending.com/blog/what-we-finance-property-types"
      }
    ]
  },
  {
    "id": "rgc-capital",
    "name": "RGC Capital",
    "role": "Lends and places deals",
    "group": "Private capital",
    "access": "Commercial broker access",
    "accessDetails": "Publishes a signed broker application agreement, submission sheet and broker fee acknowledgment.",
    "fundingEvidence": "RGC names itself as commercial lender in its broker agreement and also distributes third-party program sheets. Obtain the named funding entity for the specific execution.",
    "coverage": "Confirm property state and product availability with the desk.",
    "multifamily": "Small-balance CRE",
    "mixedUse": "Small-balance CRE",
    "loanSize": "$100K–$2M in published small-balance broker material",
    "notes": "Broker materials include both asset types and a separate fee-acknowledgment template. Product details, prepayment and rate need a current term sheet.",
    "sources": [
      {
        "label": "Small-balance eligible assets and size",
        "url": "https://rgccap.com/wp-content/uploads/2024/04/RGC-Broker-Email-Scripts-Referral-Source.pdf"
      },
      {
        "label": "Broker agreement",
        "url": "https://rgccap.com/wp-content/uploads/2025/11/RGC-Capital-Lender-to-Broker-Contract.pdf"
      },
      {
        "label": "Broker fee form",
        "url": "https://rgccap.com/wp-content/uploads/2025/08/Broker-Fee-Acknowledgment.1-1-1.pdf"
      }
    ]
  },
  {
    "id": "socotra-capital",
    "name": "Socotra Capital",
    "role": "Direct lender",
    "group": "Private capital",
    "access": "Commercial broker access",
    "accessDetails": "Dedicated mortgage broker approval. Socotra says it puts broker fees in the loan offer.",
    "fundingEvidence": "Socotra describes its in-house direct funding. Its investor document identifies a dedicated loan fund covering commercial collateral.",
    "coverage": "U.S. private lending, based in Sacramento. Confirm property state and applicable program.",
    "multifamily": "Business-purpose private money",
    "mixedUse": "Commercial bridge and special situations",
    "loanSize": "",
    "notes": "Loan eligibility is deal-specific and depends on equity, property and the exit plan. The FAQ allows certain business-purpose owner-occupied mixed-use or multifamily deals. Confirm unit count, term and leverage.",
    "review": "Google reviewers aggregated by Birdeye describe responsive service, including a cannabis real-estate loan. Published reviews cover multiple products and do not establish 5+ or mixed-use quote terms.",
    "sources": [
      {
        "label": "Loan and collateral FAQ",
        "url": "https://www.socotracapital.com/resources/faqs/about-socotra-capital"
      },
      {
        "label": "Broker approval",
        "url": "https://www.socotracapital.com/mortgage-broker-approval-form"
      },
      {
        "label": "Broker fees and referral process",
        "url": "https://www.socotracapital.com/guide-for-real-estate-agents-mortgage-bankers-and-commercial-brokers"
      },
      {
        "label": "Loan fund collateral",
        "url": "https://socotracapital.com/wp-content/uploads/The-Socotra-Opportunity-Fund.pdf"
      }
    ],
    "reviewSources": [
      {
        "label": "Google reviews via Birdeye",
        "url": "https://reviews.birdeye.com/socotra-capital-167751611384806"
      }
    ]
  },
  {
    "id": "stokley-capital",
    "name": "Stokley Capital",
    "role": "Direct lender",
    "group": "Private capital",
    "access": "Commercial broker access",
    "accessDetails": "Dedicated broker intake. Publishes a general 1% funded-deal referral fee subject to law and agreed terms.",
    "fundingEvidence": "Stokley describes first-lien direct lending through VitalBridgeX Holdings LLC. In some states a licensed affiliate or third party may make or arrange the loan.",
    "coverage": "Advertises nationwide coverage with a state licensing overlay. Confirm property state.",
    "multifamily": "5+ units, bridge or hard money",
    "multifamilyRange": {
      "min": 5
    },
    "mixedUse": "Bridge or hard money",
    "loanSize": "$500K–$5M typical, larger by exception",
    "notes": "Business-purpose loans to entities on non-owner-occupied property. Sizing uses as-is collateral value and a clear exit. Confirm term, prepay and actual funding entity for the file.",
    "sources": [
      {
        "label": "Collateral, lending limits and funding disclosure",
        "url": "https://stokleycapital.com/"
      },
      {
        "label": "Broker referral and compensation terms",
        "url": "https://stokleycapital.com/intermediaries"
      }
    ]
  },
  {
    "id": "colliers-mortgage",
    "name": "Colliers Mortgage",
    "role": "Agency originator",
    "group": "Agency / institutional",
    "access": "Broker access unverified",
    "accessDetails": "Public originator directory. Confirm third-party intake and compensation directly with the agency desk.",
    "fundingEvidence": "Colliers Mortgage is listed as a Fannie Mae DUS lender and identifies its FHA/HUD and Ginnie Mae capabilities. Related Colliers teams also place capital.",
    "coverage": "U.S. CRE platform. Execution depends on property type, location and housing program.",
    "multifamily": "Fannie Mae and HUD financing for eligible apartments",
    "mixedUse": "Agency execution where eligible, plus commercial placement",
    "loanSize": "",
    "notes": "A published Fannie Mae refinance covers apartments with ancillary commercial space in Macon, GA. Check the current program’s commercial income and floor-area caps. Request costs, recourse and prepay on the selected execution.",
    "sources": [
      {
        "label": "Agency lending credentials",
        "url": "https://www.colliers.com/en/services/colliers-debt-and-structured-finance/agency-finance"
      },
      {
        "label": "Fannie Mae DUS lender evidence",
        "url": "https://capitalmarkets.fanniemae.com/media/8631/display"
      },
      {
        "label": "Closing with ancillary commercial space",
        "url": "https://www.colliers.com/en/news/atlanta/colliers-closes-multi-family-and-commercial-transaction-in-macon"
      }
    ]
  },
  {
    "id": "crefcoa",
    "name": "CREFCOA",
    "role": "Broker / marketplace",
    "group": "Broker / marketplace",
    "access": "Borrower-direct",
    "accessDetails": "Direct intake for borrowers. CREFCOA says its platform is closed to new broker or third-party-originator relationships.",
    "fundingEvidence": "Its lender marketplace recruits independent capital providers, and its bank series is sourced through lending partners.",
    "coverage": "U.S. property eligibility varies by market, state and loan program.",
    "multifamily": "5+ units, Small Balance Plus",
    "multifamilyRange": {
      "min": 5
    },
    "mixedUse": "Commercial-residential Small Balance Plus",
    "loanSize": "$250K–$2M Small Balance Plus",
    "notes": "Publishes 3–10-year fixed periods, 30-year amortization and up to 70% LTV. Full recourse and tax/insurance impounds. Published 3-year and 5-year fixed options carry 3% and 5% prepay terms respectively. Confirm current availability and actual lender.",
    "fico": "640",
    "dscr": "1.20–1.30× by property type",
    "sources": [
      {
        "label": "Small Balance Plus underwriting and terms",
        "url": "https://www.crefcoa.com/small-balance-plus-underwriting.html"
      },
      {
        "label": "Third-party access policy",
        "url": "https://www.crefcoa.com/contact.html"
      },
      {
        "label": "Lender marketplace",
        "url": "https://www.crefcoa.com/lender-marketplace.html"
      }
    ]
  }
];

export const newCommunityNotes: CommunityNote[] = [
  {
    "title": "Credit union financing for a five-unit mixed-use property",
    "kind": "BiggerPockets · self-reported closed loan",
    "text": "A member described financing a five-unit mixed-use property through a credit union and cited loan size as a concern for smaller properties. The lender name, pricing and fee terms were omitted.",
    "source": {
      "label": "Read BiggerPockets thread",
      "url": "https://www.biggerpockets.com/forums/32/topics/1265031-funding-for-an-apartment-building"
    }
  },
  {
    "title": "Broker search for a 5+ unit loan under $250K",
    "kind": "Reddit · community suggestions",
    "text": "Loan originators discussed Velocity, LendSure, and local banks or credit unions for a balance below $250K. Posts give leads to check with the lender on the specific unit count. Deal closings and actual quotes were unverified.",
    "source": {
      "label": "Read r/loanoriginators thread",
      "url": "https://www.reddit.com/r/loanoriginators/comments/1r14xqd/any_recommended_lenders_for_5_units_under_250k/"
    }
  },
  {
    "title": "ClearEdge account executive on mixed-use",
    "kind": "LinkedIn · lender-affiliated marketing",
    "text": "A ClearEdge account executive promoted 5–8-unit DSCR and a 49% cap on mixed-use in a LinkedIn post. The published program guidance and lender quote are the sources for the specific collateral calculation and availability.",
    "source": {
      "label": "View account executive post",
      "url": "https://www.linkedin.com/posts/leah-merritt-334b4239_nonqm-mortgagebrokers-loanofficers-activity-7466187550278217728-LXsX"
    }
  }
];

export const newPriceNotes: PriceNote[] = [
  {
    "name": "EB Wholesale Mortgage",
    "rate": "From 7.25%",
    "terms": "Advertised 5–9-unit term DSCR floor, checked Nov 24, 2026. $250K–$2M, 680+ FICO, 1.20×+ DSCR, separate mixed-use rehab offering. Points, fees and compensation require a quote.",
    "source": {
      "label": "Wholesale multifamily DSCR terms",
      "url": "https://www.ebwmtg.com/wholesale"
    }
  },
  {
    "name": "GPS Capital",
    "rate": "From 6.50%",
    "terms": "Advertised indicative DSCR floor, checked Nov 24, 2026. The program includes 5–9-unit and mixed-use collateral. Property-specific pricing tiers and charges remain open.",
    "source": {
      "label": "Published DSCR parameters",
      "url": "https://dscr.gpscapllc.com/"
    }
  },
  {
    "name": "Red Oak Capital Holdings",
    "rate": "1-mo. Term SOFR + 450–550 bps",
    "terms": "Published floating bridge spread, checked Nov 24, 2026. $2M–$20M, interest-only and up to five years fully extended. Minimum interest generally equals half the initial term.",
    "source": {
      "label": "Core bridge pricing and minimum interest",
      "url": "https://www.redoakcapitalholdings.com/loan-program/core-bridge-loan/"
    }
  }
];
