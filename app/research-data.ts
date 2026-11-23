import type { CommunityNote, PriceNote, ResearchListing } from "./research-types";

export const additions: ResearchListing[] = [
  {
    "id": "aaa",
    "name": "AAA Lendings",
    "role": "Direct lender",
    "group": "Wholesale DSCR / Non-QM",
    "access": "Wholesale / TPO",
    "accessDetails": "Wholesale confirmed",
    "fundingEvidence": "Direct nonbank lender",
    "coverage": "",
    "multifamily": "5–8 units",
    "mixedUse": "",
    "loanSize": "Up to $3M",
    "notes": "DSCR term. Up to 75% LTV. Program page identifies the 5–8-unit multifamily lane. Mixed use was not verified for this lane. Mixed-use: Unverified.",
    "sources": [
      {
        "label": "Program",
        "url": "https://www.wholesaleaaalendings.com/dscr-5-8-units-product/"
      },
      {
        "label": "Broker program or channel",
        "url": "https://wholesaleaaalendings.com/products/"
      },
      {
        "label": "Lender or guidelines",
        "url": "https://wholesaleaaalendings.com/unconventional-home-loans/"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 8
    },
    "fico": "720",
    "dscr": "1.00×"
  },
  {
    "id": "ahlfunding",
    "name": "AHL Funding",
    "role": "Direct lender",
    "group": "Wholesale DSCR / Non-QM",
    "access": "Wholesale / TPO",
    "accessDetails": "Wholesale confirmed; confirm specific tier",
    "fundingEvidence": "Direct wholesale lender; program via AE lead",
    "coverage": "",
    "multifamily": "5–8 in AE updates",
    "mixedUse": "Advertised by AE, up to 49.9% commercial",
    "loanSize": "",
    "notes": "DSCR term lead. Its official site verifies the wholesale business. The 5–8 / mixed-use claim came from its account executives' public social pages. Ask for the current Fusion matrix.",
    "sources": [
      {
        "label": "Program",
        "url": "https://ahlfunding.com/"
      },
      {
        "label": "Supplemental product evidence",
        "url": "https://www.linkedin.com/in/ricardo-aguilar-b83269182"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 8
    }
  },
  {
    "id": "american-heritage",
    "name": "American Heritage Lending",
    "role": "Direct lender",
    "group": "Wholesale DSCR / Non-QM",
    "access": "Wholesale / TPO",
    "accessDetails": "Dedicated wholesale and correspondent platform. AHL describes in-house handling from submission to funding.",
    "fundingEvidence": "American Heritage Lending, LLC identifies itself as a direct mortgage lender, NMLS 93735.",
    "coverage": "Business-purpose state map on company site.",
    "multifamily": "5–10 units",
    "mixedUse": "",
    "loanSize": "",
    "notes": "Rental-income underwriting for experienced investors. Mixed-use eligibility was unverified on this particular 5–10 unit program.",
    "sources": [
      {
        "label": "AHL wholesale submission and products",
        "url": "https://ahlendtpo.com/broker/"
      },
      {
        "label": "Wholesale platform",
        "url": "https://ahlend.com/docs/does-ahl-work-with-mortgage-brokers/"
      },
      {
        "label": "Company webinar",
        "url": "https://www.youtube.com/watch?v=jE4L1kbBtgw"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 10
    }
  },
  {
    "id": "apb",
    "name": "American Pride Bank Wholesale",
    "role": "Bank / credit union",
    "group": "Wholesale DSCR / Non-QM",
    "access": "Wholesale / TPO",
    "accessDetails": "Wholesale confirmed",
    "fundingEvidence": "Bank lender",
    "coverage": "",
    "multifamily": "5–8 units",
    "mixedUse": "2–8 units",
    "loanSize": "",
    "notes": "DSCR term. Dedicated DSCR Multi / Mixed product and broker enrollment. Public program list doesn't state loan floor or underwriting limits.",
    "sources": [
      {
        "label": "Program",
        "url": "https://www.apbwholesale.com/our-products"
      },
      {
        "label": "Broker program or channel",
        "url": "https://www.apbwholesale.com/"
      },
      {
        "label": "Lender or guidelines",
        "url": "https://www.apbwholesale.com/about"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 8
    },
    "mixedUseRange": {
      "min": 2,
      "max": 8
    }
  },
  {
    "id": "ameritrust",
    "name": "AmeriTrust Mortgage",
    "role": "Direct lender",
    "group": "Wholesale DSCR / Non-QM",
    "access": "Wholesale / TPO",
    "accessDetails": "Wholesale confirmed",
    "fundingEvidence": "Direct nonbank lender",
    "coverage": "",
    "multifamily": "5–8 units",
    "mixedUse": "2–8 in Diamond guidelines",
    "loanSize": "Up to $3M multifamily",
    "notes": "DSCR term. Ask for current tier. Separate web matrices for DSCR 5–8 and Diamond mixed/non-mixed terms can differ. Verify which is open and check NY/NJ overlays before quoting.",
    "sources": [
      {
        "label": "Program",
        "url": "https://ameritrusttpo.com/programs/"
      },
      {
        "label": "Broker program or channel",
        "url": "https://ameritrusttpo.com/wholesale/"
      },
      {
        "label": "Lender or guidelines",
        "url": "https://ameritrusttpo.com/wp-content/uploads/Ameritrust-Diamond-DSCR-Multi-Mixed-Guidelines.pdf"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 8
    },
    "mixedUseRange": {
      "min": 2,
      "max": 8
    },
    "review": "Originators mentioned AmeriTrust for an all-residential seven-unit wholesale scenario. No closing outcome shown.",
    "reviewSources": [
      {
        "label": "Forum or independent review",
        "url": "https://www.reddit.com/r/loanoriginators/comments/1xnzr6x/need_wholesale_lender_no_private_money/"
      }
    ],
    "dscr": "1.00× multifamily"
  },
  {
    "id": "cake",
    "name": "CAKE Mortgage",
    "role": "Direct lender",
    "group": "Wholesale DSCR / Non-QM",
    "access": "Wholesale / TPO",
    "accessDetails": "Wholesale confirmed",
    "fundingEvidence": "Direct nonbank lender",
    "coverage": "",
    "multifamily": "5–9 in underwriting section; site summary says 5–8",
    "mixedUse": "",
    "loanSize": "Up to $3M",
    "notes": "DSCR term. Up to 75% advertised. Resolve the lender's 5–8 versus 5–9 discrepancy on an actual nine-unit file. $2M+ requires at least 1.00× DSCR and 9% debt yield in the multifamily section. Mixed-use: Excluded in underwriting guide.",
    "sources": [
      {
        "label": "Program",
        "url": "https://www.caketpo.com/files/guidelines/DSCR_6.0_Guidelines_v.2.pdf"
      },
      {
        "label": "Broker program or channel",
        "url": "https://www.caketpo.com/apply"
      },
      {
        "label": "Lender or guidelines",
        "url": "https://www.caketpo.com/guidelines"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 9
    },
    "review": "One BiggerPockets broker reported closing several legal, conforming six-unit files and praised the process.",
    "reviewSources": [
      {
        "label": "Forum or independent review",
        "url": "https://www.biggerpockets.com/forums/22/topics/1271036-dscr-lender-for-6-unit-in-indianapolis-anyone-used-easy-street-or-rcn"
      }
    ],
    "fico": "660+ advertised"
  },
  {
    "id": "champions",
    "name": "Champions Funding / Victory Wholesale",
    "role": "Direct lender",
    "group": "Wholesale DSCR / Non-QM",
    "access": "Wholesale / TPO",
    "accessDetails": "Wholesale and correspondent",
    "fundingEvidence": "CDFI nonbank lender",
    "coverage": "",
    "multifamily": "5–8 units",
    "mixedUse": "",
    "loanSize": "Up to $2M",
    "notes": "DSCR term. Up to 75% LTV. Victory Wholesale is a Champions Funding brand with the same programs and underwriting. The Nov. 2, 2026 residential matrix treats IL/NY as exception only and caps CT/FL/NJ at 70% purchase / 65% refinance. LinkedIn marketing claimed mixed-use but the residential matrix did not confirm it. Mixed-use: Unverified.",
    "sources": [
      {
        "label": "Program",
        "url": "https://www.champstpo.com/dscr-accelerator-product-overview"
      },
      {
        "label": "Broker program or channel",
        "url": "https://www.champstpo.com/"
      },
      {
        "label": "Lender or guidelines",
        "url": "https://21505619.fs1.hubspotusercontent-na1.net/hubfs/21505619/Website%20-%20Guidelines%20(2025)/Accelerator%205-8%20Units.pdf"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 8
    },
    "review": "The live wholesale overview calls the program Accelerator. Mortgage-originator comments mention Champions, but terms and direct mixed-use eligibility were not independently established.",
    "reviewSources": [
      {
        "label": "Forum or independent review",
        "url": "https://www.reddit.com/r/loanoriginators/comments/1vgaku2/does_anybody_still_do_58_unit_dscr_loans/"
      }
    ],
    "fico": "700",
    "dscr": "1.00×"
  },
  {
    "id": "clearedge",
    "name": "ClearEdge Lending",
    "role": "Direct lender",
    "group": "Wholesale DSCR / Non-QM",
    "access": "Wholesale / TPO",
    "accessDetails": "Wholesale confirmed",
    "fundingEvidence": "Direct nonbank lender",
    "coverage": "",
    "multifamily": "5–8 units",
    "mixedUse": "2–8 units",
    "loanSize": "$400K–$2M",
    "notes": "DSCR term. Up to 75% purchase LTV. Investor Jade restricts commercial tenants and limits the commercial portion. Check current availability and state overlays with AE.",
    "sources": [
      {
        "label": "Program",
        "url": "https://clearedgelending.com/wp-content/uploads/2024/10/InvestorJade-DSCR-Mixed.pdf"
      },
      {
        "label": "Broker program or channel",
        "url": "https://clearedgelending.com/non-qm/"
      },
      {
        "label": "Lender or guidelines",
        "url": "https://clearedgelending.com/downloads/WHOLESALE_MORTGAGE_BROKER_AGREEMENT.pdf"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 8
    },
    "mixedUseRange": {
      "min": 2,
      "max": 8
    },
    "fico": "700",
    "dscr": "1.00×"
  },
  {
    "id": "cmd",
    "name": "Commercial Mortgage Depot",
    "role": "Lends and places deals",
    "group": "Wholesale DSCR / Non-QM",
    "access": "Wholesale / TPO",
    "accessDetails": "Wholesale commercial/broker",
    "fundingEvidence": "Direct commercial wholesale first mortgages and separate correspondent or agent placements.",
    "coverage": "",
    "multifamily": "5–9 published DSCR",
    "mixedUse": "2–8 published DSCR",
    "loanSize": "Mixed-use page $250K–$10M+",
    "notes": "Commercial DSCR term. 5-, 7-, 10- and 30-year options on mixed-use page. Official site says it offers wholesale first mortgage loans directly. Confirm loan amount, prepay and whether the direct desk or a placement desk issues the term sheet. Ask which channel is quoting. Program flyers use different amounts by execution.",
    "sources": [
      {
        "label": "Program",
        "url": "https://commercialmortgagedepot.com/"
      },
      {
        "label": "Broker program or channel",
        "url": "https://commercialmortgagedepot.com/mixed-use-loans"
      },
      {
        "label": "Lender or guidelines",
        "url": "https://commercialmortgagedepot.com/team"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 9
    },
    "mixedUseRange": {
      "min": 2,
      "max": 8
    },
    "review": "The BBB profile lists both mortgage lender and mortgage broker services. Role should be checked per program rather than treating its entire catalog as direct.",
    "reviewSources": [
      {
        "label": "Forum or independent review",
        "url": "https://www.bbb.org/us/nj/clifton/profile/financing/commercial-mortgage-depot-0221-90233530"
      }
    ]
  },
  {
    "id": "defy",
    "name": "Defy Wholesale / Mortava",
    "role": "Direct lender",
    "group": "Wholesale DSCR / Non-QM",
    "access": "Wholesale / TPO",
    "accessDetails": "Wholesale only",
    "fundingEvidence": "Direct nonbank lender",
    "coverage": "",
    "multifamily": "5–9 units",
    "mixedUse": "Eligible on separate guidelines",
    "loanSize": "Up to $2.5M",
    "notes": "DSCR term. Up to 75% LTV. Defy says it underwrites and funds broker submissions. Mortava's 5–9 residential page expressly excludes mixed use from that specific program while Defy separately advertises mixed use. Keep as one brand family.",
    "sources": [
      {
        "label": "Program",
        "url": "https://defytpo.com/tpo-lender"
      },
      {
        "label": "Broker program or channel",
        "url": "https://defytpo.com/wholesale-mortgage-lender"
      },
      {
        "label": "Lender or guidelines",
        "url": "https://mortava.com/dscr-5-9-units"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 9
    },
    "fico": "700"
  },
  {
    "id": "dominion",
    "name": "Dominion Financial",
    "role": "Direct lender",
    "group": "Wholesale DSCR / Non-QM",
    "access": "Wholesale / TPO",
    "accessDetails": "The 5–10 matrix is published by Dominion Financial Wholesale.",
    "fundingEvidence": "Dominion Financial Services identifies the mortgage company behind its rental loan program.",
    "coverage": "",
    "multifamily": "5–10 units",
    "mixedUse": "Separate bridge desk",
    "loanSize": "",
    "notes": "Investor Premier wholesale 5–10 matrix is dated January 27, 2025. Confirm current matrix and current acceptance before underwriting. Mixed-use bridge is a separate short-term execution.",
    "sources": [
      {
        "label": "Wholesale 5–10 unit matrix",
        "url": "https://dominionfinancialservices.com/wp-content/uploads/2025/01/Dominion-Financial-Wholesale-Matrix-Investor-Premier-Multifamily-1-27-2025.pdf"
      },
      {
        "label": "Direct rental product",
        "url": "https://dominionfinancialservices.com/dscr-rental/"
      },
      {
        "label": "Wholesale product handout",
        "url": "https://dominionfinancialservices.com/wp-content/uploads/2025/02/Fix-To-Rent-White-Label-Flyer-DFW-02-12-25.pdf"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 10
    },
    "review": "One BiggerPockets investor reported a smooth six-unit closing in Brooklyn with extra entity guaranties. Another reported delays on a construction-to-DSCR refinance.",
    "reviewSources": [
      {
        "label": "BiggerPockets deal reports",
        "url": "https://www.biggerpockets.com/forums/49/topics/1115034-dominion-financial-company"
      }
    ]
  },
  {
    "id": "epm",
    "name": "Equity Prime Mortgage (EPM)",
    "role": "Direct lender",
    "group": "Wholesale DSCR / Non-QM",
    "access": "Wholesale / TPO",
    "accessDetails": "Wholesale confirmed",
    "fundingEvidence": "Direct nonbank lender",
    "coverage": "",
    "multifamily": "5–10 units",
    "mixedUse": "2–8 units",
    "loanSize": "$250K–$3M",
    "notes": "DSCR term. Up to 75% LTV, with a 5-point LTV reduction below $400K. Below $400K, there is a five-point reduction from the applicable LTV cap. The individual Multi & Mixed matrix lists county and city overlays, including in NY and NJ. Hawaii’s delegated-correspondent-only restriction is state-specific.",
    "sources": [
      {
        "label": "Program",
        "url": "https://www.epmwholesale.com/documents/EPM-Flex_NonQM_and_DSC_Guidelines_2-1-26.pdf"
      },
      {
        "label": "Broker program or channel",
        "url": "https://www.epmwholesale.com/products/"
      },
      {
        "label": "Lender or guidelines",
        "url": "https://www.epmwholesale.com/documents/EPM-DSCR.pdf"
      },
      {
        "label": "Supplemental product evidence",
        "url": "https://www.epmwholesale.com/documents/EPM-NonQM-and-DSCR-Matrices.pdf"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 10
    },
    "mixedUseRange": {
      "min": 2,
      "max": 8
    },
    "fico": "720",
    "dscr": "1.00×"
  },
  {
    "id": "firstequity",
    "name": "First Equity Funding",
    "role": "Direct lender",
    "group": "Wholesale DSCR / Non-QM",
    "access": "Commercial broker access",
    "accessDetails": "Broker program confirmed",
    "fundingEvidence": "Direct private lender",
    "coverage": "",
    "multifamily": "5+; page lists 5–8 floor",
    "mixedUse": "Eligible",
    "loanSize": "$350K 5–8 minimum; $400K mixed-use minimum",
    "notes": "DSCR term. Confirm collateral-specific maximum. New Jersey–based privately funded lender. Advertises 30-year fixed and interest-only options. Program page's 80% LTV table covers the broader program. Ask for the specific multifamily/mixed-use tier.",
    "sources": [
      {
        "label": "Program",
        "url": "https://firstequityfundingllc.com/rental-loans/"
      },
      {
        "label": "Broker program or channel",
        "url": "https://firstequityfundingllc.com/brokers/"
      },
      {
        "label": "Lender or guidelines",
        "url": "https://firstequityfundingllc.com/our-story/"
      },
      {
        "label": "Supplemental product evidence",
        "url": "https://aaplonline.com/directory/first-equity-funding/"
      }
    ],
    "multifamilyRange": {
      "min": 5
    },
    "fico": "680 multifamily / 700 mixed-use",
    "dscr": "1.00× at max leverage"
  },
  {
    "id": "foundation",
    "name": "Foundation Mortgage",
    "role": "Direct lender",
    "group": "Wholesale DSCR / Non-QM",
    "access": "Wholesale / TPO",
    "accessDetails": "Wholesale and non-delegated correspondent",
    "fundingEvidence": "Direct nonbank lender",
    "coverage": "",
    "multifamily": "5–8 units",
    "mixedUse": "2–8 units",
    "loanSize": "$300K minimum; $3M multifamily / $2M mixed-use maximum",
    "notes": "DSCR term. Up to 75% purchase LTV. FMC 1 October 2026 matrix excludes NY and IL. CT/NJ require 720 FICO, 70% max purchase, 65% max refinance. Other streams may differ.",
    "sources": [
      {
        "label": "Program",
        "url": "https://foundationmortgage.com/wp-content/uploads/2026/10/FMC-1-NonQM-Credit-Matrices-20261019.pdf"
      },
      {
        "label": "Broker program or channel",
        "url": "https://foundationmortgage.com/wholesale-lending/"
      },
      {
        "label": "Lender or guidelines",
        "url": "https://foundationmortgage.com/wp-content/uploads/2024/09/Closing-Doc-Request-CDR-Form-FINAL.pdf"
      },
      {
        "label": "Supplemental product evidence",
        "url": "https://www.loanfactory.com/our-lenders/foundation-mortgage-corporation-33008417435"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 8
    },
    "mixedUseRange": {
      "min": 2,
      "max": 8
    },
    "fico": "700",
    "dscr": "1.00×"
  },
  {
    "id": "greenbox",
    "name": "Greenbox Loans",
    "role": "Direct lender",
    "group": "Wholesale DSCR / Non-QM",
    "access": "Wholesale / TPO",
    "accessDetails": "Wholesale confirmed",
    "fundingEvidence": "Direct nonbank lender",
    "coverage": "",
    "multifamily": "5–8 units",
    "mixedUse": "",
    "loanSize": "$500K–$2M",
    "notes": "DSCR term. Up to 70% purchase LTV. 2026 5–8 matrix excludes mixed-use, NY, IL, short-term rentals, and entity borrowers. Confirm vesting early. Mixed-use: Excluded by matrix.",
    "sources": [
      {
        "label": "Program",
        "url": "https://greenboxloans.com/wp-content/uploads/2026/04/9.-5-8-UNIT-DSCR-2026.04.13.pdf"
      },
      {
        "label": "Broker program or channel",
        "url": "https://wholesale.greenboxloans.com/"
      },
      {
        "label": "Lender or guidelines",
        "url": "https://greenboxloans.com/why-us/our-team/"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 8
    },
    "fico": "720",
    "dscr": "1.00×"
  },
  {
    "id": "groundfloor",
    "name": "Groundfloor Lending",
    "role": "Direct lender",
    "group": "Wholesale DSCR / Non-QM",
    "access": "Commercial broker access",
    "accessDetails": "Broker program confirmed; distinct from simple referral",
    "fundingEvidence": "Direct private lender",
    "coverage": "",
    "multifamily": "5–9 units",
    "mixedUse": "",
    "loanSize": "$350K–$2.5M+",
    "notes": "DSCR term. Up to 75% purchase / 70% cash-out. April 2026 program allows up to two vacant units using market rents. Verify broker compensation and commercial uses separately. Mixed-use: Unverified.",
    "sources": [
      {
        "label": "Program",
        "url": "https://blog.lending.groundfloor.com/sizing-up-5-9-unit-dscr-loan-program-is-now-live"
      },
      {
        "label": "Broker program or channel",
        "url": "https://lending.groundfloor.com/brokers/"
      },
      {
        "label": "Lender or guidelines",
        "url": "https://lending.groundfloor.com/dscr-get-started/"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 9
    }
  },
  {
    "id": "homex",
    "name": "HomeXpress Mortgage",
    "role": "Direct lender",
    "group": "Wholesale DSCR / Non-QM",
    "access": "Wholesale / TPO",
    "accessDetails": "Wholesale confirmed",
    "fundingEvidence": "Direct nonbank lender",
    "coverage": "",
    "multifamily": "5–8 units",
    "mixedUse": "",
    "loanSize": "Up to $2M",
    "notes": "DSCR term. 75% purchase / 70% rate-term / 65% cash-out. Experienced investors. The company announced its InvestorX 5–8 relaunch on LinkedIn. Confirm current matrix and minimum loan before quoting. Mixed-use: Excluded in May 2026 InvestorX guide.",
    "sources": [
      {
        "label": "Program",
        "url": "https://homexmortgage.com/business-purpose/"
      },
      {
        "label": "Broker program or channel",
        "url": "https://www.arive.com/press/homexpress-mortgage-corp-launches-on-the-arive-platform-expanding-broker-access-to-non-qm-and-investor-lending"
      },
      {
        "label": "Lender or guidelines",
        "url": "https://www.sec.gov/Archives/edgar/data/1409493/000140949326000068/cim-20260930.htm"
      },
      {
        "label": "Supplemental product evidence",
        "url": "https://www.linkedin.com/posts/homexpress-mortgage-corp_homexpress-mortgage-is-proud-to-announce-activity-7396366548241739778-doDL"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 8
    },
    "fico": "700"
  },
  {
    "id": "lendsimpli",
    "name": "LendSimpli",
    "role": "Direct lender",
    "group": "Wholesale DSCR / Non-QM",
    "access": "Commercial broker access",
    "accessDetails": "Broker program published",
    "fundingEvidence": "AAPL member listing identifies LendSimpli/Beach Park Partners as a national private lender. BiggerPockets listing expressly describes it as direct.",
    "coverage": "",
    "multifamily": "5–30 per indexed program",
    "mixedUse": "",
    "loanSize": "",
    "notes": "Indexed MF page quotes $350K–$5M (case-by-case to $10M), 1.20×, 700 FICO, 75% LTV, from 7.125%. The page redirected on click, so get a current rate sheet and product confirmation before quoting. Mixed-use: Unverified.",
    "sources": [
      {
        "label": "Indexed multifamily program",
        "url": "https://lendsimpli.com/multifamily-loan/"
      },
      {
        "label": "Broker program",
        "url": "https://lendsimpli.com/brokers/"
      },
      {
        "label": "AAPL member profile",
        "url": "https://aaplonline.com/member-directory/9194/"
      },
      {
        "label": "Affiliate directory",
        "url": "https://www.biggerpockets.com/fl/lenders"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 30
    }
  },
  {
    "id": "lendsure",
    "name": "LendSure Mortgage",
    "role": "Direct lender",
    "group": "Wholesale DSCR / Non-QM",
    "access": "Wholesale / TPO",
    "accessDetails": "Wholesale confirmed",
    "fundingEvidence": "A nonbank mortgage lender offering its own broker DSCR program.",
    "coverage": "",
    "multifamily": "5–10 units",
    "mixedUse": "",
    "loanSize": "Up to $3M",
    "notes": "DSCR term. 75% purchase / 70% rate-term / 65% cash-out. LLC vesting, experienced investors, at most two vacant units. The mixed-use exception is listed under 1–4-unit specs and requires senior management approval. Do not assume 5–10 mixed-use fits. Mixed-use: Case approval; confirm size and mix.",
    "sources": [
      {
        "label": "Program",
        "url": "https://lendsure.com/specialty-loan-solutions/dscr-investor-cash-flow-loans/"
      },
      {
        "label": "Broker program or channel",
        "url": "https://lendsure.com/webinar-loan-programs-for-expanded-property-types/"
      },
      {
        "label": "Lender or guidelines",
        "url": "https://lendsure.com/"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 10
    },
    "review": "Reddit originators mention LendSure frequently. A purported LendSure rep quoted low-to-mid 7s on a forum, with no dated written terms or points. Treat as anecdotal pricing only.",
    "reviewSources": [
      {
        "label": "Forum or independent review",
        "url": "https://www.reddit.com/r/loanoriginators/comments/1vgaku2/does_anybody_still_do_58_unit_dscr_loans/"
      }
    ],
    "fico": "680 multifamily",
    "dscr": "1.10× on published multifamily product page"
  },
  {
    "id": "lendz",
    "name": "Lendz Financial",
    "role": "Direct lender",
    "group": "Wholesale DSCR / Non-QM",
    "access": "Wholesale / TPO",
    "accessDetails": "Wholesale confirmed",
    "fundingEvidence": "Direct nonbank lender",
    "coverage": "",
    "multifamily": "5–8 units",
    "mixedUse": "2–8 units",
    "loanSize": "Up to $3M",
    "notes": "DSCR term. Up to 75% LTV. Product FAQ says all units must be leased. Confirm with AE before ordering an appraisal.",
    "sources": [
      {
        "label": "Program",
        "url": "https://www.lendzfinancial.com/program/dscr-loans-5-8-units-2-8-mixed-use"
      },
      {
        "label": "Broker program or channel",
        "url": "https://www.lendzfinancial.com/about-lendz"
      },
      {
        "label": "Lender or guidelines",
        "url": "https://www.lendzfinancial.com/legal"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 8
    },
    "mixedUseRange": {
      "min": 2,
      "max": 8
    },
    "fico": "700",
    "dscr": "1.00×"
  },
  {
    "id": "ocmbc",
    "name": "LoanStream / OCMBC Commercial / Forward Lending",
    "role": "Direct lender",
    "group": "Wholesale DSCR / Non-QM",
    "access": "Wholesale / TPO",
    "accessDetails": "Wholesale plus commercial submissions",
    "fundingEvidence": "Direct nonbank lender",
    "coverage": "",
    "multifamily": "5–8 wholesale DSCR; 5+ CRE",
    "mixedUse": "Separate commercial program",
    "loanSize": "",
    "notes": "DSCR term and CRE term / bridge. OCMBC, Inc., NMLS 2125, includes LoanStream and Forward Lending. The wholesale 5–8 residential lane excludes mixed use. Commercial desk lists 5+ multiunit and mixed-use, with separate underwriting. Forward’s Nov. 2, 2026 wholesale sheet shows 5–8 base pricing but excludes YSP and lender credit on that product.",
    "sources": [
      {
        "label": "Program",
        "url": "https://loanstreamwholesale.com/non-qm-dscr/"
      },
      {
        "label": "Broker program or channel",
        "url": "https://ocmbccommercial.com/programs/"
      },
      {
        "label": "Lender or guidelines",
        "url": "https://forwardlendingmtg.com/about-us/"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 8
    },
    "review": "Originators discussed LoanStream as a 5–8 wholesale option. The residential product restriction is independently visible in the lender's own webinar.",
    "reviewSources": [
      {
        "label": "Forum or independent review",
        "url": "https://www.reddit.com/r/loanoriginators/comments/1vgaku2/does_anybody_still_do_58_unit_dscr_loans/"
      }
    ]
  },
  {
    "id": "logan",
    "name": "Logan Finance Wholesale",
    "role": "Direct lender",
    "group": "Wholesale DSCR / Non-QM",
    "access": "Wholesale / TPO",
    "accessDetails": "Wholesale confirmed",
    "fundingEvidence": "Direct nonbank lender",
    "coverage": "",
    "multifamily": "5–8 units",
    "mixedUse": "",
    "loanSize": "Up to $2.5M",
    "notes": "DSCR term. Up to 75% purchase / rate-term LTV. July 2026 5–8 residential page says first-time homebuyers or investors can qualify with 12 months of rental history. Separate DirectPath commercial channel exists. Ask for a written mixed-use scenario rather than assuming eligibility. Mixed-use: Unverified.",
    "sources": [
      {
        "label": "Program",
        "url": "https://loganwholesale.com/experience-5-8-unit/"
      },
      {
        "label": "Broker program or channel",
        "url": "https://loganwholesale.com/arive/"
      },
      {
        "label": "Lender or guidelines",
        "url": "https://loganwholesale.com/"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 8
    },
    "review": "An originator claimed to use Logan and Newfi for six-unit files. Logan's current official page corroborates 5–8 residential, rather than mixed use.",
    "reviewSources": [
      {
        "label": "Forum or independent review",
        "url": "https://www.reddit.com/r/loanoriginators/comments/1cggkav"
      }
    ],
    "fico": "660"
  },
  {
    "id": "luxury",
    "name": "Luxury Mortgage Wholesale",
    "role": "Direct lender",
    "group": "Wholesale DSCR / Non-QM",
    "access": "Wholesale / TPO",
    "accessDetails": "Wholesale confirmed",
    "fundingEvidence": "Direct nonbank lender",
    "coverage": "",
    "multifamily": "5–10 units",
    "mixedUse": "",
    "loanSize": "",
    "notes": "DSCR term. Official FAQ confirms qualifying 5–10 unit residential loans. Don't apply broader program pricing or a forum-reported floor without a quote. Mixed-use: Unverified.",
    "sources": [
      {
        "label": "Program",
        "url": "https://luxurymortgagewholesale.com/faq/"
      },
      {
        "label": "Broker program or channel",
        "url": "https://luxurymortgagewholesale.com/"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 10
    },
    "review": "An originator cites Luxury as an option and speculates about its minimum loan amount. The dollar amount was unverified.",
    "reviewSources": [
      {
        "label": "Forum or independent review",
        "url": "https://www.reddit.com/r/loanoriginators/comments/1vgaku2/does_anybody_still_do_58_unit_dscr_loans/"
      }
    ]
  },
  {
    "id": "silver-hill-capital",
    "name": "Silver Hill Capital",
    "role": "Direct lender",
    "group": "Wholesale DSCR / Non-QM",
    "access": "Wholesale / TPO",
    "accessDetails": "Wholesale broker registration verified",
    "fundingEvidence": "Bayview's careers site describes its small-balance division as a direct wholesale lender.",
    "coverage": "",
    "multifamily": "5–9 Gold; other CRE programs",
    "mixedUse": "Commercial programs",
    "loanSize": "$100K–$2.5M across CRE",
    "notes": "Commercial range $100K–$2.5M overall; Gold min DSCR 1.20×, separate economics apply to other property types.",
    "sources": [
      {
        "label": "Gold 5–9",
        "url": "https://commercial.silverhillcap.com/gold-multifamily-program/"
      },
      {
        "label": "CRE and mixed-use",
        "url": "https://commercial.silverhillcap.com/loans/"
      },
      {
        "label": "Become a broker",
        "url": "https://commercial.silverhillcap.com/broker-registration/"
      },
      {
        "label": "Parent's role disclosure",
        "url": "https://careers.bayview.com/shf/"
      },
      {
        "label": "BiggerPockets feedback",
        "url": "https://www.biggerpockets.com/forums/50/topics/1078106-looking-for-hard-money-dscr-lenders"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 9
    },
    "review": "A self-described broker on BiggerPockets reported good results with Silver Hill and Velocity. Property type and deal terms were omitted.",
    "reviewSources": [
      {
        "label": "BiggerPockets discussion",
        "url": "https://www.biggerpockets.com/forums/50/topics/1078106-looking-for-hard-money-dscr-lenders"
      }
    ]
  },
  {
    "id": "stronghill",
    "name": "Stronghill Capital",
    "role": "Direct lender",
    "group": "Wholesale DSCR / Non-QM",
    "access": "Wholesale / TPO",
    "accessDetails": "Wholesale and commercial broker desk",
    "fundingEvidence": "Direct commercial/nonbank lender",
    "coverage": "",
    "multifamily": "5–8 DSCR; 5+ CRE",
    "mixedUse": "2–8 residential-majority; separate CRE desk",
    "loanSize": "",
    "notes": "DSCR term and commercial bank-style term. Investment Achiever is one lane. Commercial desk shows a closed 15-unit Bridgeport, CT refinance and has separate CRE underwriting. Older and newer marketing describes different non-QM limits, so ask for current matrix.",
    "sources": [
      {
        "label": "Program",
        "url": "https://stronghill.com/residential-loans/"
      },
      {
        "label": "Broker program or channel",
        "url": "https://stronghill.com/"
      },
      {
        "label": "Lender or guidelines",
        "url": "https://stronghill.com/multi-family/"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 8
    },
    "mixedUseRange": {
      "min": 2,
      "max": 8
    },
    "review": "Stronghill identifies its wholesale operation and published a closed multifamily loan and broker payout. Its 3.4/5 Birdeye/Google listing had 17 companywide reviews, with comments on both quick closings and communication.",
    "reviewSources": [
      {
        "label": "Forum or independent review",
        "url": "https://reviews.birdeye.com/stronghill-capital-167602102541237"
      }
    ]
  },
  {
    "id": "tql",
    "name": "Total Quality Lending (TQL)",
    "role": "Direct lender",
    "group": "Wholesale DSCR / Non-QM",
    "access": "Wholesale / TPO",
    "accessDetails": "Wholesale confirmed",
    "fundingEvidence": "Direct nonbank lender",
    "coverage": "",
    "multifamily": "5–9 units",
    "mixedUse": "2–8 units",
    "loanSize": "$350K–$2.5M multifamily; $400K–$2M mixed-use",
    "notes": "DSCR term. Up to 75% purchase LTV. Multifamily must vest in a domestic LLC with a personal guarantor. Mixed-use retail, office or restaurant, up to 50% commercial area. The TPO guide is different from the borrower-facing 5–8 guide.",
    "sources": [
      {
        "label": "Program",
        "url": "https://tqltpo.totalqualitylending.com/five-to-nine-unit-lending-mix-use-loans-for-brokers"
      },
      {
        "label": "Broker program or channel",
        "url": "https://tqltpo.totalqualitylending.com/programs"
      },
      {
        "label": "Lender or guidelines",
        "url": "https://www.totalqualitylending.com/loans/dscr/multi-unit"
      },
      {
        "label": "Supplemental product evidence",
        "url": "https://tqltpo.totalqualitylending.com/programs/2-8-mixed-use"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 9
    },
    "mixedUseRange": {
      "min": 2,
      "max": 8
    },
    "fico": "680 multifamily / 700 mixed-use",
    "dscr": "1.15× multifamily / 1.00× mixed-use"
  },
  {
    "id": "zloans",
    "name": "Z Loans Funding",
    "role": "Lends and places deals",
    "group": "Wholesale DSCR / Non-QM",
    "access": "Wholesale / TPO",
    "accessDetails": "Wholesale confirmed; verify funder on Luzi",
    "fundingEvidence": "Hybrid mortgage banker and broker",
    "coverage": "",
    "multifamily": "5–8 units",
    "mixedUse": "Advertised; unit limits unpublished",
    "loanSize": "Up to $4M",
    "notes": "DSCR term. Up to ~75% LTV. Program page gives approximate limits. Company explicitly says it can lend directly or broker when needed. Confirm legal lender of record in writing on this product.",
    "sources": [
      {
        "label": "Program",
        "url": "https://www.zloans.net/wholesale"
      },
      {
        "label": "Lender or guidelines",
        "url": "https://www.zloansfunding.com/our-story"
      },
      {
        "label": "Supplemental product evidence",
        "url": "https://www.linkedin.com/company/zloans"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 8
    },
    "fico": "~660"
  },
  {
    "id": "aquam",
    "name": "Aquam Funding",
    "role": "Direct claim unverified",
    "group": "Wholesale DSCR / Non-QM",
    "access": "Broker access unverified",
    "accessDetails": "Broker intake advertised",
    "fundingEvidence": "Wholesale provider; funding entity unverified",
    "coverage": "",
    "multifamily": "5–10 units",
    "mixedUse": "",
    "loanSize": "$350K–$2.5M",
    "notes": "DSCR term. Up to 75% purchase or rate-term LTV. Lago excludes mixed-use, commercial and row homes. Up to two vacant units can use 75% of market rent. Check the legal entity on a term sheet. Mixed-use: Excluded by Lago program.",
    "sources": [
      {
        "label": "Program",
        "url": "https://www.aquamfunding.com/lago-5-10-units"
      },
      {
        "label": "Broker program or channel",
        "url": "https://www.aquamfunding.com/coast-5-10-units"
      },
      {
        "label": "Lender or guidelines",
        "url": "https://www.aquamfunding.com/"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 10
    },
    "dscr": "1.15×"
  },
  {
    "id": "abl",
    "name": "Asset Based Lending (ABL)",
    "role": "Lends and places deals",
    "group": "Wholesale DSCR / Non-QM",
    "access": "Broker access unverified",
    "accessDetails": "Direct bridge/CRE; ask about outside broker submission on DSCR",
    "fundingEvidence": "Hybrid: DSCR arranged through third-party capital",
    "coverage": "",
    "multifamily": "5–9 DSCR",
    "mixedUse": "",
    "loanSize": "",
    "notes": "DSCR arranged; bridge and CRE direct. Company explicitly says DSCR rental is handled by outside capital partners. Its bridge, construction and CRE products are funded in-house. Do not infer that the 5–9 DSCR product is directly funded. Mixed-use: Unverified for DSCR.",
    "sources": [
      {
        "label": "Program",
        "url": "https://www.ablfunding.com/blog/expanding-into-multifamily-property-investments/"
      },
      {
        "label": "Broker program or channel",
        "url": "https://www.ablfunding.com/company-overview/"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 9
    }
  },
  {
    "id": "drivetpo",
    "name": "Drive TPO / Solve Mortgage",
    "role": "Direct lender",
    "group": "Wholesale DSCR / Non-QM",
    "access": "Broker access unverified",
    "accessDetails": "Wholesale confirmed; current DSCR matrix unverified",
    "fundingEvidence": "Direct wholesale lender; historical specific program",
    "coverage": "",
    "multifamily": "Legacy program; verify",
    "mixedUse": "Legacy program; verify",
    "loanSize": "",
    "notes": "DSCR term lead. Solve renamed itself Drive TPO. Its earlier Series H matrix advertised 5–8 and 2–8, and current resources still list Series H. Verify current product and funding entity after the change.",
    "sources": [
      {
        "label": "Program",
        "url": "https://staging.drivetpo.com/resources"
      },
      {
        "label": "Broker program or channel",
        "url": "https://www.drivetpo.com/brokers-signup"
      },
      {
        "label": "Lender or guidelines",
        "url": "https://www.drivetpo.com/disclosure"
      },
      {
        "label": "Supplemental product evidence",
        "url": "https://www.linkedin.com/company/solvemortgage"
      }
    ]
  },
  {
    "id": "rockstone",
    "name": "Rockstone",
    "role": "Direct claim unverified",
    "group": "Wholesale DSCR / Non-QM",
    "access": "Broker access unverified",
    "accessDetails": "TPO intake advertised",
    "fundingEvidence": "Funding entity unverified; lender-panel model disclosed by a similarly branded site",
    "coverage": "",
    "multifamily": "5–8 units",
    "mixedUse": "Advertised; limits unverified",
    "loanSize": "",
    "notes": "DSCR term lead. Up to 75% LTV advertised. TPO site publishes a 5–8 / mixed-use product. A similarly branded site describes a wholesale lender panel. Their legal relationship and the funding entity on this program need verification.",
    "sources": [
      {
        "label": "Program",
        "url": "https://rockstonetpo.com/"
      },
      {
        "label": "Lender or guidelines",
        "url": "https://joinrockstone.com/programs"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 8
    },
    "fico": "700"
  },
  {
    "id": "alliant-cu",
    "name": "Alliant Credit Union",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Commercial broker access",
    "accessDetails": "Mortgage brokers only",
    "fundingEvidence": "Direct portfolio lender",
    "coverage": "Nationwide",
    "multifamily": "Market-rate, student, partially subsidized",
    "mixedUse": "Reported historical mixed-use closing; general eligibility unverified",
    "loanSize": "$7M target–$35M target",
    "notes": "Permanent financing up to 15 years. Posts a national broker network manager. Target size applies to its general portfolio program. Says it funds without syndicating; qualifying assets may receive initial interest-only and recourse can be reduced or eliminated. An Alliant employee’s public LinkedIn activity reports a $23.19M mixed-use acquisition in the Akron, OH MSA; get current mixed-use policy in writing.",
    "sources": [
      {
        "label": "Bank program",
        "url": "https://www.alliantcreditunion.org/borrow/commercial-lending"
      },
      {
        "label": "Loan officer’s LinkedIn report of $9M Phoenix multifamily refi with Northmarq",
        "url": "https://www.linkedin.com/posts/activity-7499153728818565120-CjAt"
      },
      {
        "label": "Employee LinkedIn activity reports Akron mixed-use close",
        "url": "https://www.linkedin.com/in/jeana-vardalos-4976b21a2"
      }
    ]
  },
  {
    "id": "american-first-cu",
    "name": "American First Credit Union",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Commercial broker access",
    "accessDetails": "Works directly with borrowers and brokers on CRE",
    "fundingEvidence": "Direct credit-union CRE lender; underwriting and servicing in-house",
    "coverage": "Advertised nationwide CRE, with officer coverage stated for the contiguous 48",
    "multifamily": "Apartment buildings",
    "mixedUse": "",
    "loanSize": "$1M–$10M",
    "notes": "5/7/10-year fixed or adjustable options; final terms 10, 14 or 15 years; up to 30-year amortization. Full or nonrecourse options and products with or without prepay. Multifamily is explicit; mixed-use is not named on the purchase product page.",
    "sources": [
      {
        "label": "Bank program",
        "url": "https://www.amerfirst.org/products/commercial-real-estate/purchase-commercial-property"
      }
    ]
  },
  {
    "id": "axos",
    "name": "Axos Bank Small Balance CRE",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Commercial broker access",
    "accessDetails": "Published small-balance CRE broker lane and premium broker rebates",
    "fundingEvidence": "Direct portfolio lender",
    "coverage": "Nationwide major MSAs, generally at least 250,000 people",
    "multifamily": "5+; detailed page considers 2–200 units",
    "mixedUse": "Stabilized apartments with retail or office",
    "loanSize": "Up to $20M; higher case-by-case per overall page",
    "notes": "3/5/7/10-year hybrid, 25–30 year amortization depending on property. Up to 75% LTV for either property category. Multifamily program explicitly advertises premium broker rebates. Mixed-use supports acquisition, refinance and cash-out; the mixed-use product calls for a growing MSA.",
    "sources": [
      {
        "label": "Bank program",
        "url": "https://www.axosbank.com/commercial/lending/small-balance-commercial-real-estate"
      },
      {
        "label": "Multifamily limits and broker rebates",
        "url": "https://www.axosbank.com/commercial/lending/small-balance-commercial-real-estate/multifamily-lending"
      },
      {
        "label": "Mixed-use requirements",
        "url": "https://www.axosbank.com/commercial/lending/small-balance-commercial-real-estate/mixed-use-lending"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 200
    }
  },
  {
    "id": "first-tech",
    "name": "First Tech Federal Credit Union",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Commercial broker access",
    "accessDetails": "Broker-friendly CRE",
    "fundingEvidence": "Direct balance-sheet lender",
    "coverage": "Nationwide except Louisiana",
    "multifamily": "Commercial multifamily",
    "mixedUse": "Eligible mixed-use",
    "loanSize": "$500K–$10M+",
    "notes": "3-, 5-, and 7-year fixed options. First Tech says it holds portfolio loans on its own balance sheet. Recourse and borrower global cash flow qualifications are required. No prepayment penalties advertised. DCU and First Tech legally combined January 2026 under First Technology FCU, with divisions during integration.",
    "sources": [
      {
        "label": "Bank program",
        "url": "https://www.firsttechfed.com/borrow/commercial-lending"
      },
      {
        "label": "First Tech/DCU merger",
        "url": "https://www.firsttechfed.com/merger/faqs"
      }
    ]
  },
  {
    "id": "pinnacle-bank",
    "name": "Pinnacle Bank / PNFP Capital Markets",
    "role": "Lends and places deals",
    "group": "Bank / credit union",
    "access": "Commercial broker access",
    "accessDetails": "Regularly works with CRE mortgage brokers",
    "fundingEvidence": "Hybrid: direct bank portfolio and agency origination plus outside capital placement",
    "coverage": "Nationwide brokers and CRE platform",
    "multifamily": "Stabilized multifamily, including Freddie Optigo small balance",
    "mixedUse": "Broad balance-sheet CRE, confirm mixed-use eligibility",
    "loanSize": "$1M on agency small-balance lane–$7.5M on agency small-balance lane",
    "notes": "Nonrecourse fixed rates available through Freddie for eligible stabilized multifamily. PNFP discusses each execution separately: its own balance-sheet loans, Freddie small-balance origination, and placement with other institutions. Synovus became part of Pinnacle Bank in January 2026. Do not treat a placement as bank-funded.",
    "sources": [
      {
        "label": "Bank program",
        "url": "https://recm.pnfp.com/"
      },
      {
        "label": "SEC filing names Pinnacle as surviving bank",
        "url": "https://www.sec.gov/Archives/edgar/data/2082866/000208286626000092/pnfp-20260930.htm"
      }
    ]
  },
  {
    "id": "abacus-bank",
    "name": "Abacus Federal Savings Bank",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Broker access unverified",
    "accessDetails": "Direct; broker terms unverified",
    "fundingEvidence": "Direct savings bank commercial mortgage desk",
    "coverage": "Manhattan, Brooklyn, Queens, Middlesex County NJ and Philadelphia PA",
    "multifamily": "Commercial multifamily",
    "mixedUse": "Eligible",
    "loanSize": "",
    "notes": "Useful small local-bank lead with an unusually specific published geographic focus across NYC, NJ and Pennsylvania. Confirm applicant, leverage and unit criteria on the deal.",
    "sources": [
      {
        "label": "Bank program",
        "url": "https://www.abacusbank.com/loans/commercial-mortgages"
      }
    ]
  },
  {
    "id": "alpine-bank",
    "name": "Alpine Capital Bank",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Broker access unverified",
    "accessDetails": "Direct CRE desk; broker terms unverified",
    "fundingEvidence": "Direct NYC commercial bank lending",
    "coverage": "Primarily NYC and surrounding area",
    "multifamily": "Commercial multifamily",
    "mixedUse": "Eligible",
    "loanSize": "",
    "notes": "Bank lists property types directly. It highlights individual loan structuring for local borrowers. Ask whether deposit relationship, guaranty or a minimum amount applies.",
    "sources": [
      {
        "label": "Bank program",
        "url": "https://www.alpinecapitalbank.com/commercial-lending/overview"
      }
    ]
  },
  {
    "id": "amalgamated",
    "name": "Amalgamated Bank",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Broker access unverified",
    "accessDetails": "Direct commercial team; broker terms unverified",
    "fundingEvidence": "Direct bank portfolio lender",
    "coverage": "New York metro core for CRE per bank filing",
    "multifamily": "Multifamily including affordable housing",
    "mixedUse": "Bank portfolio lists mixed-use",
    "loanSize": "",
    "notes": "Three-, five-, seven-, and ten-year fixed or floating term loans on major property types. Bank CRE page details term and affordable housing products. The bank's investor filing confirms mixed-use lending in the portfolio. Verify whether new mixed-use deals and market-rate assets are currently accepted.",
    "sources": [
      {
        "label": "Bank program",
        "url": "https://www.amalgamatedbank.com/commercial-real-estate"
      },
      {
        "label": "Bank filing names mixed-use holdings",
        "url": "https://ir.amalgamatedbank.com/static-files/3dba589a-d99b-432e-9940-6d90b381ec66"
      }
    ]
  },
  {
    "id": "apple-bank",
    "name": "Apple Bank",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Broker access unverified",
    "accessDetails": "Direct commercial team; broker terms unverified",
    "fundingEvidence": "Direct portfolio lender for CRE",
    "coverage": "NYC, Westchester, Long Island, NJ and Rockland",
    "multifamily": "Commercial multifamily",
    "mixedUse": "",
    "loanSize": "$3M–$100M",
    "notes": "The Bank says the CRE loans are for its own portfolio, and lists multifamily, retail and office. Mixed-use is not separately named on that page. Apple’s consumer mortgage referral to Guaranteed Rate is a different channel. Mixed-use: Confirm address and use mix.",
    "sources": [
      {
        "label": "Bank program",
        "url": "https://www.applebank.com/business/loans-lines/commercial-mortgages"
      },
      {
        "label": "Separate residential referral relationship",
        "url": "https://www.applebank.com/personal/loans-lines/mortgages"
      }
    ]
  },
  {
    "id": "ascendia",
    "name": "Ascendia Bank",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Broker access unverified",
    "accessDetails": "Direct; broker terms unverified",
    "fundingEvidence": "Direct community bank CRE desk",
    "coverage": "14 NJ areas including Bergen, Passaic, Essex, Hudson, Morris, Monmouth and northern Ocean",
    "multifamily": "Commercial multifamily",
    "mixedUse": "Eligible",
    "loanSize": "$100K–$3.5M",
    "notes": "Fixed/variable; up to 30-year amortization. Its August 2026 commercial page lists unusually small loans and specific NJ counties. Thirty years refers to amortization, not the rate-lock term. Verify the exact tenor.",
    "sources": [
      {
        "label": "Bank program",
        "url": "https://www.ascendiabank.com/loans/commercial-loans/"
      }
    ]
  },
  {
    "id": "avidbank",
    "name": "Avidbank",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Broker access unverified",
    "accessDetails": "Bank direct; broker acceptance unverified",
    "fundingEvidence": "Bank's official products list permanent loans on investment CRE, multifamily and mixed-use.",
    "coverage": "San Francisco Bay Area",
    "multifamily": "Eligible CRE; confirm unit count",
    "mixedUse": "Eligible CRE",
    "loanSize": "",
    "notes": "Bay Area CRE focus. Reddit user reported 6.15% in May 2025 at 1.20× DSCR on a commercial loan; collateral size, points, prepay and term unstated. Historical anecdote only.",
    "sources": [
      {
        "label": "Bank programs",
        "url": "https://www.avidbank.com/lending-products"
      },
      {
        "label": "Regional focus",
        "url": "https://ir.avidbank.com/overview/default.aspx"
      },
      {
        "label": "Borrower anecdote",
        "url": "https://www.reddit.com/r/realestateinvesting/comments/1osb210/what_are_your_recent_dscr_rates_looking_like/"
      }
    ]
  },
  {
    "id": "broadview-cu",
    "name": "Broadview Federal Credit Union",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Broker access unverified",
    "accessDetails": "Direct commercial contact; broker terms unverified",
    "fundingEvidence": "Direct credit union commercial team",
    "coverage": "Upstate NY examples: Albany, Saratoga Springs and Buffalo area",
    "multifamily": "Apartment complexes",
    "mixedUse": "Eligible",
    "loanSize": "",
    "notes": "Up to 15-year term and 25-year amortization. Publishes no prepayment penalty. Its commercial portfolio examples cover mixed-use and apartment complexes. Confirm county and membership eligibility.",
    "sources": [
      {
        "label": "Bank program",
        "url": "https://www.broadviewfcu.com/business/commercial-real-estate/"
      }
    ]
  },
  {
    "id": "cathay-bank",
    "name": "Cathay Bank",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Broker access unverified",
    "accessDetails": "Direct CRE desk; broker terms unverified",
    "fundingEvidence": "Direct bank; generally carries originated mortgages in portfolio",
    "coverage": "Multiple markets; recorded Brooklyn, Queens and Manhattan deals",
    "multifamily": "Commercial multifamily residential",
    "mixedUse": "Recorded NYC examples; ask desk about current terms",
    "loanSize": "",
    "notes": "The bank names itself a direct lender. Its 2025 annual report describes generally retaining loans it originates and its Q3 2026 filing reports a multifamily portfolio. A recorded-mortgage analytics firm identifies specific mixed-use loans closed in September 2026; that evidence establishes historical funding, not today's terms.",
    "sources": [
      {
        "label": "Bank program",
        "url": "https://www.cathaybank.com/business/lending/commercial-real-estate-and-construction"
      },
      {
        "label": "Bank annual report funding model",
        "url": "https://www.cathaybank.com/sites/default/files/2026-04/CATHAY_BANK_ANNUAL_REPORT_2025.pdf"
      },
      {
        "label": "Q3 multifamily portfolio",
        "url": "https://www.cathaybank.com/sites/default/files/2026-11/3Q-2026%20Form-10-Q.pdf"
      },
      {
        "label": "NYC recorded loan examples; third party",
        "url": "https://circlemark.ai/commercial-lenders/cathay-bank"
      }
    ]
  },
  {
    "id": "columbia-bank",
    "name": "Columbia Bank NJ (includes former Northfield)",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Broker access unverified",
    "accessDetails": "Direct CRE desk; broker terms unverified",
    "fundingEvidence": "Direct bank; commercial loan and held portfolio evidence",
    "coverage": "NJ and Staten Island/Brooklyn regional lending centers",
    "multifamily": "Commercial multifamily; reported portfolio",
    "mixedUse": "Mixed-use; reported portfolio",
    "loanSize": "",
    "notes": "Columbia Financial completed its acquisition of Northfield in July 2026. Its Q1 investor release shows multifamily and mixed-use exposures. Portfolio evidence confirms historical funding; call the post-merger desk for active collateral and terms. Different from west-coast Columbia Bank.",
    "sources": [
      {
        "label": "Bank program",
        "url": "https://www.columbiabankonline.com/business-banking/commercial-loans"
      },
      {
        "label": "Reported multifamily and mixed-use portfolio",
        "url": "https://ir.columbiabankonline.com/news/news-details/2026/Columbia-Financial-Inc--Announces-Financial-Results-for-the-First-Quarter-Ended-March-31-2026/default.aspx"
      },
      {
        "label": "Northfield acquisition completed",
        "url": "https://ir.columbiabankonline.com/news/news-details/2026/Columbia-Financial-Inc--Announces-Completion-of-Second-Step-Conversion-and-1-7-Billion-Stock-Offering-and-Acquisition-of-Northfield-Bancorp-Inc-/default.aspx"
      },
      {
        "label": "Bank footprint",
        "url": "https://ir.columbiabankonline.com/corporate-profile/"
      }
    ]
  },
  {
    "id": "customers-bank",
    "name": "Customers Bank",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Broker access unverified",
    "accessDetails": "Relationship CRE team; broker terms unverified",
    "fundingEvidence": "Direct commercial bank",
    "coverage": "NY tri-state for new traditional CRE; broader for existing borrowers and lender finance",
    "multifamily": "Commercial multifamily",
    "mixedUse": "Eligible",
    "loanSize": "",
    "notes": "Fixed spread over 5-year Treasury or variable reference pricing. Bank offers permanent investment, bridge and construction CRE options. The bank discusses broader depository needs and a good-faith term-sheet deposit. Its nationwide note-on-note program is lender financing, not the ordinary borrower-facing commercial mortgage.",
    "sources": [
      {
        "label": "Bank program",
        "url": "https://www.customersbank.com/commercial/real-estate/"
      }
    ]
  },
  {
    "id": "dime-bank",
    "name": "Dime Community Bank",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Broker access unverified",
    "accessDetails": "Direct commercial officers; CRE broker terms unverified",
    "fundingEvidence": "Direct commercial bank; regulated portfolio disclosures",
    "coverage": "Greater NYC and Long Island; bank filing also shows NJ exposure",
    "multifamily": "Apartment buildings",
    "mixedUse": "Residential complexes with commercial space",
    "loanSize": "Up to $15M",
    "notes": "Fixed and adjustable options. Offers a dedicated multifamily and mixed-use program. SEC filing lists held commercial, multifamily and residential mixed-use portfolio categories. The program landing page uses commercial lending officers for submissions.",
    "sources": [
      {
        "label": "Bank program",
        "url": "https://www.dime.com/lending/multi-family-property-loans"
      },
      {
        "label": "SEC loan-portfolio breakdown",
        "url": "https://www.sec.gov/Archives/edgar/data/846617/000084661726000052/dcom-20260930x10q.htm"
      },
      {
        "label": "Local Reddit mortgage conversation; residential anecdotes",
        "url": "https://www.reddit.com/r/ForestHills/comments/1q0d09w/local_mortgage_lender_recommendations/"
      },
      {
        "label": "Reported $5M mixed-use closing",
        "url": "https://traded.co/deals/new-york/mixed-use/loan/185-bedford-avenue/"
      }
    ]
  },
  {
    "id": "first-central",
    "name": "First Central Savings Bank",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Broker access unverified",
    "accessDetails": "Direct; broker terms unverified",
    "fundingEvidence": "Direct savings bank commercial team",
    "coverage": "New York community bank; confirm collateral counties",
    "multifamily": "Commercial multifamily",
    "mixedUse": "Eligible",
    "loanSize": "",
    "notes": "CRE, bridge and construction offered. Lists both target assets and dedicated commercial loan officers. Confirm current minimum amount, unit count and available terms directly.",
    "sources": [
      {
        "label": "Bank program",
        "url": "https://www.firstcentralsavings.com/commercial-lending/"
      }
    ]
  },
  {
    "id": "hab",
    "name": "Habib American Bank (HAB Bank)",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Broker access unverified",
    "accessDetails": "Direct team; broker terms unverified",
    "fundingEvidence": "Direct bank business and CRE lending",
    "coverage": "NY, NJ, CA, PA, CT",
    "multifamily": "Apartment complexes / tenanted multifamily",
    "mixedUse": "Tenanted mixed-use and development",
    "loanSize": "Up to $7.5M on published mixed-use page",
    "notes": "Fixed or adjustable options. Has a separate tenanted investment property program for existing multifamily or mixed-use collateral. The $7.5M published amount is on a mixed-use development page, so confirm the cap for stabilized acquisition/refi.",
    "sources": [
      {
        "label": "Bank program",
        "url": "https://www.hab.bank/business/commercial-lending/investment-real-estate-tenanted"
      },
      {
        "label": "Mixed-use development and loan cap",
        "url": "https://www.hab.bank/business/commercial-lending/mixed-use"
      }
    ]
  },
  {
    "id": "haven",
    "name": "Haven Savings Bank",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Broker access unverified",
    "accessDetails": "Direct local office; broker terms unverified",
    "fundingEvidence": "Direct savings bank commercial lending",
    "coverage": "Northern NJ via New Providence and Hoboken",
    "multifamily": "Commercial multifamily; also lists 1–4 rentals",
    "mixedUse": "Eligible",
    "loanSize": "",
    "notes": "Fixed and floating options. Ask whether the property has any unit-count constraints and whether a third-party broker agreement is available for the address.",
    "sources": [
      {
        "label": "Bank program",
        "url": "https://havenbank.com/business/commercial-lending-services/"
      }
    ]
  },
  {
    "id": "chase-ctl",
    "name": "JPMorgan Chase Commercial Term Lending",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Broker access unverified",
    "accessDetails": "Local client managers; broker terms unverified",
    "fundingEvidence": "Direct bank CRE lender",
    "coverage": "NY regional desk; Chase has other local CTL desks",
    "multifamily": "Commercial multifamily",
    "mixedUse": "Eligible",
    "loanSize": "$500K–$25M+",
    "notes": "Fixed and adjustable-rate options. Published range is across New York Commercial Term Lending property types. Contact the local deal team to confirm execution, prepayment and whether your role can be compensated.",
    "sources": [
      {
        "label": "Bank program",
        "url": "https://www.jpmorgan.com/commercial-banking/solutions/commercial-real-estate/commercial-term-lending/ctl-new-york"
      }
    ]
  },
  {
    "id": "kearny",
    "name": "Kearny Bank",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Broker access unverified",
    "accessDetails": "Direct commercial officers; broker terms unverified",
    "fundingEvidence": "Direct CRE origination for the bank",
    "coverage": "NJ, NY, PA, CT, DE and MD via one named CRE officer",
    "multifamily": "Commercial multifamily",
    "mixedUse": "Eligible",
    "loanSize": "",
    "notes": "The bank's officers say they originate CRE in multifamily, mixed use and other asset types. Geographic information is specific to the published lending officer and should be confirmed by ZIP.",
    "sources": [
      {
        "label": "Bank program",
        "url": "https://www.kearnybank.com/contact-detail/ryan-newberry"
      },
      {
        "label": "Property types originated for Kearny",
        "url": "https://www.kearnybank.com/contact-detail/francis-mccauley"
      }
    ]
  },
  {
    "id": "maspeth",
    "name": "Maspeth Federal Savings",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Broker access unverified",
    "accessDetails": "Direct bank desk; CRE broker terms unverified",
    "fundingEvidence": "Direct federally chartered savings bank",
    "coverage": "NYC-area bank; confirm ZIP with CRE desk",
    "multifamily": "5+ apartments",
    "mixedUse": "Commercial space with apartments",
    "loanSize": "",
    "notes": "5/5/5 or 10-year balloon on 25 years; 15-year self-liquidating. Rates posted effective Nov. 23, 2026 for both categories. The 7.25% initial rate resets twice at prevailing rates. Up to 65% LTV, zero points and no prepayment penalties are published. The OCC identifies Maspeth as a savings and loan association, not a credit union.",
    "sources": [
      {
        "label": "Bank program",
        "url": "https://www.maspethfederal.com/borrow/commercial-real-estate"
      },
      {
        "label": "OCC charter and market",
        "url": "https://www.occ.gov/static/cra/craeval/nov26/705138.pdf"
      },
      {
        "label": "Reddit local mortgage discussion; residential anecdotes",
        "url": "https://www.reddit.com/r/ForestHills/comments/1q0d09w/local_mortgage_lender_recommendations/"
      }
    ],
    "multifamilyRange": {
      "min": 5
    },
    "price": "7.25% initial",
    "priceType": "Published bank/CU terms"
  },
  {
    "id": "necb",
    "name": "NorthEast Community Bank",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Broker access unverified",
    "accessDetails": "Historical broker sourcing; current onboarding unverified",
    "fundingEvidence": "Direct commercial bank",
    "coverage": "NYC, lower Hudson Valley (including Monsey, Spring Valley and Monroe), Massachusetts",
    "multifamily": "Commercial multifamily",
    "mixedUse": "Eligible; stated specialization",
    "loanSize": "",
    "notes": "The bank names multifamily and mixed-use as specialties. Its SEC 2021 annual report describes mortgage-broker sourcing in New York; that is historical evidence, not confirmation of a current wholesale program or compensation.",
    "sources": [
      {
        "label": "Bank program",
        "url": "https://www.necb.com/Commercial/commercial-services"
      },
      {
        "label": "Property specialization and footprints",
        "url": "https://www.necb.com/About-us/"
      },
      {
        "label": "2021 SEC broker sourcing disclosure",
        "url": "https://www.sec.gov/Archives/edgar/data/1847398/000155837022004780/necb-20211231x10k.htm"
      }
    ]
  },
  {
    "id": "oceanfirst",
    "name": "OceanFirst Bank (formerly Flushing Bank)",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Broker access unverified",
    "accessDetails": "Direct commercial desk; CRE broker terms unverified",
    "fundingEvidence": "Direct bank; surviving bank after merger",
    "coverage": "NYC and broader OceanFirst NY/NJ/PA footprint; reconfirm active CRE territory",
    "multifamily": "5+ apartments on legacy Flushing program",
    "mixedUse": "Legacy Flushing: 5+ residential units plus store/office",
    "loanSize": "",
    "notes": "Flushing merged into OceanFirst Bank N.A. June 2, 2026. Use OceanFirst as the current contact; published legacy criteria require reconfirmation. In June 2026 OceanFirst disclosed the sale of $1.3B of NYC multifamily loans, citing reduced rent-regulation exposure. Confirm current appetite, especially for regulated rents.",
    "sources": [
      {
        "label": "Bank program",
        "url": "https://oceanfirst.com/business-banking/commercial/lending"
      },
      {
        "label": "Legacy property criteria",
        "url": "https://www.flushingbank.com/lending/commercial-real-estate-lending/"
      },
      {
        "label": "SEC bank-merger effective date",
        "url": "https://www.sec.gov/Archives/edgar/data/1004702/000119312526251866/d49769ds8pos.htm"
      },
      {
        "label": "Portfolio sale and rent-regulation exposure",
        "url": "https://ir.oceanfirst.com/news/news-details/2026/OceanFirst-Financial-Corp--Completes-Previously--Announced-Sale-of-1-3-Billion-of-New-York-City-Multifamily-Loans/default.aspx"
      }
    ],
    "multifamilyRange": {
      "min": 5
    }
  },
  {
    "id": "psfcu",
    "name": "Polish & Slavic Federal Credit Union",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Broker access unverified",
    "accessDetails": "Direct branch application; broker terms unverified",
    "fundingEvidence": "Direct credit union investment property lending",
    "coverage": "Application submitted in person at a PSFCU branch; confirm property state",
    "multifamily": "Rental housing; exact unit corridor unpublished",
    "mixedUse": "Eligible",
    "loanSize": "",
    "notes": "3- or 5-year fixed and variable options. Publishes up to 80% LTV subject to collateral and credit, applicable to the overall program. The site instructs applicants to submit paperwork at a branch. Verify 5+ unit eligibility and membership before quoting.",
    "sources": [
      {
        "label": "Bank program",
        "url": "https://www.psfcu.com/lending/mortgages/investment-property-financing-"
      }
    ]
  },
  {
    "id": "ponce",
    "name": "Ponce Bank",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Broker access unverified",
    "accessDetails": "A named commercial broker arranged the documented refinance. Formal wholesale program and compensation are unverified.",
    "fundingEvidence": "The bank markets commercial mortgages. Trade reporting names Ponce as lender and Highcap as arranging broker.",
    "coverage": "NYC area shown in the recorded transaction.",
    "multifamily": "Commercial apartments",
    "mixedUse": "Recorded mixed-use closing",
    "loanSize": "",
    "notes": "$2.2M Astoria refinance on five apartments and one commercial unit at 6.25% for a five-year term and 30-year amortization, reported September 2026. Points and prepayment terms were omitted.",
    "sources": [
      {
        "label": "Bank commercial mortgage desk",
        "url": "https://www.poncebank.com/business-lending"
      },
      {
        "label": "Trade-reported closing",
        "url": "https://traded.co/deals/new-york/mixed-use/loan/12-36-31st-drive/"
      }
    ],
    "price": "6.25%",
    "priceType": "Sept. 2026 closed deal"
  },
  {
    "id": "provident",
    "name": "Provident Bank (includes former Lakeland)",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Broker access unverified",
    "accessDetails": "Direct CRE desk; broker terms unverified",
    "fundingEvidence": "Direct commercial bank CRE lender",
    "coverage": "NJ and PA CRE team; confirm current footprint",
    "multifamily": "Multi-family housing developments",
    "mixedUse": "Eligible buildings",
    "loanSize": "",
    "notes": "Advertises terms up to 25 years. Lakeland Bank joined Provident in 2024, so do not count it as a separate lender. Investment loan program lists auto-debit linked to Provident checking. Confirm the actual interest-rate term and any relationship conditions.",
    "sources": [
      {
        "label": "Bank program",
        "url": "https://www.provident.bank/commercial-banking/commercial-real-estate/commercial-real-estate-investment"
      },
      {
        "label": "Provident/Lakeland combination",
        "url": "https://www.provident.bank/lakeland/provident"
      },
      {
        "label": "NJ/PA construction team",
        "url": "https://www.provident.bank/commercial-banking/commercial-real-estate/commercial-construction-loans"
      }
    ]
  },
  {
    "id": "ridgewood",
    "name": "Ridgewood Savings Bank",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Broker access unverified",
    "accessDetails": "General bank wholesale program; CRE lane unverified",
    "fundingEvidence": "Direct savings bank",
    "coverage": "NYC, Westchester, Rockland, Long Island, lower Hudson Valley, northern NJ and Fairfield County CT",
    "multifamily": "Commercial multifamily",
    "mixedUse": "Eligible",
    "loanSize": "",
    "notes": "CRE page advertises up to 75% financing. The bank has an independent broker program, but its public broker agreement references residential real property, and full schedules require credentials. Ask the CRE team whether this specific loan can be submitted with broker compensation.",
    "sources": [
      {
        "label": "Bank program",
        "url": "https://www.ridgewoodbank.com/home/rates/commercial_lending"
      },
      {
        "label": "General wholesale channel",
        "url": "https://www.ridgewoodbank.com/home/borrowing/wholesale-lending"
      },
      {
        "label": "Public agreement scope",
        "url": "https://www.ridgewoodbank.com/clients_agreement/Mortgage%20Broker%20Agreement.pdf"
      },
      {
        "label": "Recorded NYC mixed-use lender activity; third party",
        "url": "https://www.crezly.com/lenders/mixed_use/"
      }
    ]
  },
  {
    "id": "self-reliance-cu",
    "name": "Self Reliance Financial FCU",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Broker access unverified",
    "accessDetails": "Member/direct; broker terms unverified",
    "fundingEvidence": "Direct credit union; local underwriting and servicing",
    "coverage": "Eastern PA, NJ, DE, MD, NY, CT, DC, VA, FL",
    "multifamily": "5+ apartments; up to 50 units considered",
    "mixedUse": "Eligible",
    "loanSize": "$100K min.",
    "notes": "12-year fixed amortizes in 12 years; 6-year balloon amortizes over 30. Rate table dated Nov. 20, 2026. Up to 75% LTV, zero points/origination fees and no prepay penalty advertised. Publishes 1.20× minimum DSCR using gross rent/PITIA. Membership required. Formed by the October 2025 merger of Ukrainian Selfreliance and Self Reliance New York FCUs. Check the CRE loan page for current balloon options and rate tables.",
    "sources": [
      {
        "label": "Bank program",
        "url": "https://srffcu.com/commercial-loans/"
      },
      {
        "label": "Credit union merger",
        "url": "https://srffcu.com/merger-updates/"
      },
      {
        "label": "Recorded NYC commercial mortgages; third-party evidence",
        "url": "https://circlemark.ai/commercial-lenders/self-reliance-financial-federal-credit-union"
      },
      {
        "label": "Credit union rate table",
        "url": "https://srffcu.com/rates/"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 50
    },
    "price": "From 6.00%",
    "priceType": "Published bank/CU terms"
  },
  {
    "id": "spencer",
    "name": "Spencer Savings Bank",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Broker access unverified",
    "accessDetails": "Direct portfolio desk; broker terms unverified",
    "fundingEvidence": "Direct balance-sheet lender",
    "coverage": "Primarily NJ; page also addresses NJ/NY CRE borrowers",
    "multifamily": "Select multifamily",
    "mixedUse": "Eligible",
    "loanSize": "$1M–$20M",
    "notes": "5–10 years. Explicitly identifies as a balance-sheet lender. Publishes investment acquisition/refinance and NJ multifamily construction. The loan range is for construction and permanent commercial mortgages on the bank's page.",
    "sources": [
      {
        "label": "Bank program",
        "url": "https://www.spencersavings.com/loans/commercial-real-estate/commercial-mortgage/"
      }
    ]
  },
  {
    "id": "teachers-cu",
    "name": "Teachers Federal Credit Union",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Broker access unverified",
    "accessDetails": "Direct CRE desk; broker terms unverified",
    "fundingEvidence": "Direct credit union; reports a CRE loan portfolio",
    "coverage": "NY, NJ, CT, FL",
    "multifamily": "Commercial multifamily buildings",
    "mixedUse": "Eligible",
    "loanSize": "Up to Up to eight figures advertised",
    "notes": "5-, 10-, or 15-year fixed terms. Publishes an approximately $500M commercial portfolio and purchase/refi. Check membership and transaction requirements with the lending team.",
    "sources": [
      {
        "label": "Bank program",
        "url": "https://www.teachersfcu.org/business-lending/commercial-real-estate"
      }
    ]
  },
  {
    "id": "valley-bank",
    "name": "Valley Bank",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Broker access unverified",
    "accessDetails": "Direct commercial team; broker terms unverified",
    "fundingEvidence": "Direct bank CRE financing",
    "coverage": "Regional bank CRE footprint; confirm property location with desk",
    "multifamily": "Apartment buildings",
    "mixedUse": "Eligible",
    "loanSize": "",
    "notes": "Dedicated CRE page names both properties. Ask about local lending limits and availability for the size and rent profile before treating it as a quote.",
    "sources": [
      {
        "label": "Bank program",
        "url": "https://valley.com/commercial/industry-expertise/commercial-real-estate"
      }
    ]
  },
  {
    "id": "wsfs",
    "name": "WSFS Bank",
    "role": "Bank / credit union",
    "group": "Bank / credit union",
    "access": "Broker access unverified",
    "accessDetails": "Direct local CRE or business banking team; broker terms unverified",
    "fundingEvidence": "Direct regional bank financing",
    "coverage": "Greater Philadelphia and Delaware region",
    "multifamily": "Commercial multifamily",
    "mixedUse": "Eligible",
    "loanSize": "",
    "notes": "Small-business real estate product expressly lists financing and refi for residential, multifamily, and mixed-use CRE. The large CRE product has a separate relationship desk. Verify which team and exact asset threshold fit.",
    "sources": [
      {
        "label": "Bank program",
        "url": "https://www.wsfsbank.com/small-business/borrowing/real-estate-financing/"
      },
      {
        "label": "Broader commercial real estate desk",
        "url": "https://www.wsfsbank.com/commercial/financing/commercial-real-estate-loans/"
      }
    ]
  },
  {
    "id": "apex",
    "name": "Apex Commercial Capital",
    "role": "Direct lender",
    "group": "Private capital",
    "access": "Commercial broker access",
    "accessDetails": "Commercial mortgage broker approval application and deal submission link.",
    "fundingEvidence": "Company identifies itself as a direct commercial lender. AACFB directory lists an Apex broker agreement.",
    "coverage": "Nationwide per AACFB directory.",
    "multifamily": "Commercial apartments",
    "mixedUse": "Eligible",
    "loanSize": "$50K+ across CRE",
    "notes": "The commercial partner page names both property types. The $50K general floor is not a guarantee for every collateral type. Ask about minimum DSCR and term structure.",
    "sources": [
      {
        "label": "Commercial broker program",
        "url": "https://www.apexcommercial.com/brokers-referral-partners-commercial"
      },
      {
        "label": "Direct lender disclosure",
        "url": "https://www.apexcommercial.com/"
      },
      {
        "label": "Broker approval",
        "url": "https://www.apexcommercial.com/commercial/become-an-approved-broker"
      },
      {
        "label": "AACFB funding directory",
        "url": "https://members.aacfb.org/AACFBMembers/AACFBMembers/Members_Only/FundingDirCompanyDetails.aspx?ID=19301"
      }
    ]
  },
  {
    "id": "arixa",
    "name": "Arixa Capital",
    "role": "Direct lender",
    "group": "Private capital",
    "access": "Commercial broker access",
    "accessDetails": "Broker and principal submission form",
    "fundingEvidence": "Direct private lender and fund manager",
    "coverage": "Active-market footprint; check county and state",
    "multifamily": "5+ units",
    "mixedUse": "Accepted on broker form; qualify with desk",
    "loanSize": "$500K–$25M multifamily",
    "notes": "Bridge, construction & mini-perm. Multifamily bridge, renovation and construction underwritten in-house. Broker form takes 5+ and mixed-use. Separate mini-permanent and Pro Builder paths have their own caps. Ask which property types the mini-permanent execution covers.",
    "sources": [
      {
        "label": "Multifamily products",
        "url": "https://www.arixacapital.com/multifamily"
      },
      {
        "label": "Private lender and fund manager",
        "url": "https://www.arixacapital.com/"
      },
      {
        "label": "Broker submission form",
        "url": "https://go.arixacapital.com/l/681003/2026-02-23/m8fxc"
      },
      {
        "label": "Investor forum thread",
        "url": "https://www.biggerpockets.com/forums/49/topics/510254-private-lending-funds-arixa-capital"
      }
    ],
    "multifamilyRange": {
      "min": 5
    },
    "review": "BiggerPockets and Wall Street Oasis threads discuss company funds or employment. Neither substantiates recent multifamily broker service.",
    "reviewSources": [
      {
        "label": "Investor forum thread",
        "url": "https://www.biggerpockets.com/forums/49/topics/510254-private-lending-funds-arixa-capital"
      }
    ]
  },
  {
    "id": "bloomfield",
    "name": "Bloomfield Capital",
    "role": "Direct lender",
    "group": "Private capital",
    "access": "Commercial broker access",
    "accessDetails": "Broker submissions and commissions",
    "fundingEvidence": "Direct balance-sheet lender",
    "coverage": "Nationwide, subject to market",
    "multifamily": "Eligible multifamily",
    "mixedUse": "Eligible",
    "loanSize": "$3M–$30M",
    "notes": "Bridge. Short-term first mortgages available for both property types, published six months to three years and generally up to 75% LTV. Explicitly welcomes brokers and pays commission on most closings. Published indicative bridge 7%–11% and 1–4 points. Confirm at the deal level.",
    "sources": [
      {
        "label": "Bridge program, balance sheet, and broker policy",
        "url": "https://bloomfieldcapital.com/bridge-loans/"
      },
      {
        "label": "Example closing coverage",
        "url": "https://bloomfieldcapital.com/news/bloomfield-capital-provides-8-5-million-medical-office-bridge-loan-in-new-jersey/"
      }
    ]
  },
  {
    "id": "brass-financial-group",
    "name": "Brass Financial Group",
    "role": "Direct lender",
    "group": "Private capital",
    "access": "Commercial broker access",
    "accessDetails": "Broker partner program verified",
    "fundingEvidence": "Says it funds directly. Company LinkedIn reported funding an 8-unit mixed-use refinance brought by a broker.",
    "coverage": "",
    "multifamily": "5+ apartments",
    "mixedUse": "Eligible commercial",
    "loanSize": "",
    "notes": "No-income commercial program publishes 650 min FICO. Ask for current pricing and correct term.",
    "sources": [
      {
        "label": "Commercial product",
        "url": "https://brassfinancialgroup.com/commercial-loans/"
      },
      {
        "label": "Direct funding disclosure",
        "url": "https://brassfinancialgroup.com/about-us/"
      },
      {
        "label": "Broker program",
        "url": "https://brassfinancialgroup.com/brokers/"
      },
      {
        "label": "Lender-reported close",
        "url": "https://www.linkedin.com/posts/brass-financial-group_commerciallending-realestate-investor-activity-7420531771387146240-cdR0"
      }
    ],
    "multifamilyRange": {
      "min": 5
    },
    "review": "The company reported funding an eight-unit mixed-use refinance introduced by a broker on its LinkedIn page.",
    "reviewSources": [
      {
        "label": "Company LinkedIn transaction post",
        "url": "https://www.linkedin.com/posts/brass-financial-group_commerciallending-realestate-investor-activity-7420531771387146240-cdR0"
      }
    ]
  },
  {
    "id": "corevest",
    "name": "CoreVest Finance (Redwood Trust)",
    "role": "Direct lender",
    "group": "Private capital",
    "access": "Wholesale / TPO",
    "accessDetails": "Broker and wholesale partners",
    "fundingEvidence": "Private lender using its own capital",
    "coverage": "Multi-state; confirm address",
    "multifamily": "5+ multifamily",
    "mixedUse": "Bridge verified",
    "loanSize": "$500K–$20M+ multifamily term; $3M–$15M+ multifamily bridge",
    "notes": "Term & bridge. Own loan decision and capital per company. Stabilized 3-, 5-, 7- and 10-year fixed up to 65% LTV. Separate multifamily bridge takes majority-residential mixed-use and advertises up to 75% cost or 65% value.",
    "sources": [
      {
        "label": "Multifamily term",
        "url": "https://www.corevestfinance.com/loan-types/multifamily-term-loans"
      },
      {
        "label": "Multifamily bridge and own-capital statement",
        "url": "https://www.corevestfinance.com/loan-types/multifamily-bridge-loans"
      },
      {
        "label": "Broker terms",
        "url": "https://www.corevestfinance.com/solutions/brokers"
      },
      {
        "label": "Trustpilot company reviews",
        "url": "https://www.trustpilot.com/review/www.corevestfinance.com"
      }
    ],
    "multifamilyRange": {
      "min": 5
    },
    "review": "Trustpilot showed 4.5/5 from 141 companywide reviews; respondents report strong communication and quick closings. The profile mixes products.",
    "reviewSources": [
      {
        "label": "Trustpilot company reviews",
        "url": "https://www.trustpilot.com/review/www.corevestfinance.com"
      }
    ]
  },
  {
    "id": "ease-capital",
    "name": "Ease Capital",
    "role": "Direct lender",
    "group": "Private capital",
    "access": "Commercial broker access",
    "accessDetails": "Dedicated CRE broker channel",
    "fundingEvidence": "Direct multifamily lender and private credit manager",
    "coverage": "U.S.; NJ funding reported",
    "multifamily": "5+ units",
    "mixedUse": "Published with 30% commercial income cap",
    "loanSize": "$5M–$50M on published bridge-to-perm sheet",
    "notes": "Bridge-to-permanent. Bridge-to-perm sheet shows interest-only bridge and 30-year permanent amortization, plus 75% LTV at close and 65% at stabilization. Confirm current terms given sheet vintage. Trade coverage confirms an NJ takeout loan. Older sheet illustrates SOFR +375–500 on bridge. Refresh before quoting.",
    "sources": [
      {
        "label": "Bridge-to-permanent product sheet",
        "url": "https://www.easecapital.io/tear-sheets/ease-bridge-to-perm-loans.pdf"
      },
      {
        "label": "CRE broker channel",
        "url": "https://www.easecapital.com/for-brokers"
      },
      {
        "label": "Commercial Observer closing coverage",
        "url": "https://commercialobserver.com/2024/04/ease-capital-provides-32m-takeout-construction-loan-new-jersey-apartments/"
      }
    ],
    "multifamilyRange": {
      "min": 5
    }
  },
  {
    "id": "kennedy-funding",
    "name": "Kennedy Funding",
    "role": "Direct claim unverified",
    "group": "Private capital",
    "access": "Commercial broker access",
    "accessDetails": "Commercial broker inquiries accepted",
    "fundingEvidence": "Advertises direct bridge lending; role merits confirmation",
    "coverage": "U.S. and select international markets",
    "multifamily": "Eligible multifamily",
    "mixedUse": "Eligible",
    "loanSize": "$1M–$50M+ domestic",
    "notes": "Bridge. Published terms up to five years and up to 75% LTV. Company reports funded deals, including mixed-use; the BBB local profile classifies the LLC as an advance-fee broker. Confirm the note lender and any refundable or nonrefundable deposits in writing. Site advertises from 6% with points as low as 2. Treat as an advertised floor.",
    "sources": [
      {
        "label": "Bridge criteria",
        "url": "https://www.kennedyfunding.com/loancriteria/"
      },
      {
        "label": "Broker intake",
        "url": "https://www.kennedyfunding.com/loan-application/"
      },
      {
        "label": "Documented mixed-use closing",
        "url": "https://www.kennedyfunding.com/kennedy-funding-closes-3-633-million-bridge-loan-for-mixed-use-resort-in-naples-florida/"
      },
      {
        "label": "BBB role listing",
        "url": "https://www.bbb.org/us/nj/englewood-cliffs/profile/advance-fee-brokers/kennedy-funding-llc-0221-90194858"
      },
      {
        "label": "Court record on fees",
        "url": "https://www.govinfo.gov/content/pkg/USCOURTS-ca3-24-01041/pdf/USCOURTS-ca3-24-01041-0.pdf"
      }
    ],
    "review": "Independent review and court records document fee disputes. This is a distinct entity from Kennedy Mortgage.",
    "reviewSources": [
      {
        "label": "BBB role listing",
        "url": "https://www.bbb.org/us/nj/englewood-cliffs/profile/advance-fee-brokers/kennedy-funding-llc-0221-90194858"
      }
    ]
  },
  {
    "id": "lendvent-realty-capital",
    "name": "LendVent Realty Capital",
    "role": "Direct lender",
    "group": "Private capital",
    "access": "Commercial broker access",
    "accessDetails": "Broker intake and quote portal published; confirm comp terms",
    "fundingEvidence": "Identifies as direct lender with in-house underwriting.",
    "coverage": "",
    "multifamily": "5+",
    "mixedUse": "Eligible",
    "loanSize": "",
    "notes": "Multifamily and mixed-use program includes stabilized rentals and separate bridge, rehab and ground-up options. 1.00× DSCR indicated for stabilized rental row.",
    "sources": [
      {
        "label": "Programs and pricer",
        "url": "https://lendvent.com/lending-programs/"
      },
      {
        "label": "Direct role disclosure",
        "url": "https://lendvent.com/about-us/"
      },
      {
        "label": "Broker inquiry",
        "url": "https://lendvent.com/lendvent/"
      }
    ],
    "multifamilyRange": {
      "min": 5
    }
  },
  {
    "id": "lima-one",
    "name": "Lima One Capital",
    "role": "Direct lender",
    "group": "Private capital",
    "access": "Commercial broker access",
    "accessDetails": "Broker portal and AE",
    "fundingEvidence": "Direct private lender; MFA Financial subsidiary",
    "coverage": "Multi-state; confirm address",
    "multifamily": "5+; up to 10 for published 30-year option",
    "mixedUse": "",
    "loanSize": "30-year option up to $3M per product page",
    "notes": "Term & bridge. Small-balance term has 5-, 7- and 10-year options and a 30-year fixed option on properties up to 10 units or $3M per published wording. Up to 75% LTV. Stabilized and value-add bridge are separate programs. Mixed-use not verified. Mixed-use: Confirm with desk.",
    "sources": [
      {
        "label": "Multifamily programs",
        "url": "https://www.limaone.com/multifamily/"
      },
      {
        "label": "Mortgage broker program",
        "url": "https://www.limaone.com/brokers/"
      },
      {
        "label": "Independent Trustpilot feedback",
        "url": "https://www.trustpilot.com/review/limaone.com"
      },
      {
        "label": "Independent servicer evaluation",
        "url": "https://www.spglobal.com/ratings/en/research/articles/230905-servicer-evaluation-lima-one-capital-llc-12835647"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 10
    },
    "review": "A BiggerPockets investor reported a five-unit closing with flexible, quick service. The report is older.",
    "reviewSources": [
      {
        "label": "Independent Trustpilot feedback",
        "url": "https://www.trustpilot.com/review/limaone.com"
      },
      {
        "label": "BiggerPockets five-unit report",
        "url": "https://www.biggerpockets.com/forums/49/topics/394104-lima-one-capital-for-investors"
      }
    ]
  },
  {
    "id": "nubridge",
    "name": "NuBridge Commercial Lending",
    "role": "Direct lender",
    "group": "Private capital",
    "access": "Commercial broker access",
    "accessDetails": "Registered brokers required",
    "fundingEvidence": "Direct private lender (company-disclosed)",
    "coverage": "Nationwide except ND and SD per published page",
    "multifamily": "5+ CRE multifamily",
    "mixedUse": "Eligible",
    "loanSize": "$1M–$10M",
    "notes": "Bridge. Small-balance commercial bridge. Published standard bridge up to 75% LTV, with a registered broker required to submit. Program page and agreement are older, so verify the desk is taking new submissions. Program page shows 2% origination and $3,500–$5,000 documentation fee. Ask for live note rate.",
    "sources": [
      {
        "label": "Bridge programs",
        "url": "https://www.nubridge.com/nubridge.com/loan-programs/index.html"
      },
      {
        "label": "Broker application agreement",
        "url": "https://nubridge.com/wp-content/uploads/2023/05/NuBridge-Broker-Application-Package-2023.pdf"
      },
      {
        "label": "LinkedIn profile",
        "url": "https://www.linkedin.com/company/nubridge-commerical-lending"
      }
    ],
    "multifamilyRange": {
      "min": 5
    }
  },
  {
    "id": "rcn-capital",
    "name": "RCN Capital",
    "role": "Direct lender",
    "group": "Private capital",
    "access": "Wholesale / TPO",
    "accessDetails": "Wholesale and broker referral tracks",
    "fundingEvidence": "Direct private lender",
    "coverage": "Nationwide, subject to program state restrictions",
    "multifamily": "5–9 on 30-year DSCR",
    "mixedUse": "Bridge verified",
    "loanSize": "$150K–$1.5M on multifamily term",
    "notes": "DSCR term & bridge. The multifamily term FAQ lists 700 FICO, up to 70% purchase/refi and 65% cash-out, with adjustable prepay up to five years. Its 12- or 18-month bridge accepts mixed-use, with the detailed program page specifying at least 70% residential by square footage. Partner page distinguishes referral from wholesale qualifications. Multifamily FAQ advertises term from 6.25% and bridge from 9.49%, subject to live terms.",
    "sources": [
      {
        "label": "Property-specific terms and rates",
        "url": "https://rcncapital.com/faqs"
      },
      {
        "label": "Broker and wholesale partner options",
        "url": "https://rcncapital.com/partners"
      },
      {
        "label": "Reddit originator discussion",
        "url": "https://www.reddit.com/r/loanoriginators/comments/1qq02ha/struggling_to_close_dscr_deals/"
      },
      {
        "label": "Trustpilot company reviews",
        "url": "https://www.trustpilot.com/review/www.rcncapital.com"
      },
      {
        "label": "Detailed property guidelines",
        "url": "https://rcncapital.com/loan-programs"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 9
    },
    "review": "Trustpilot showed 1.7/5 from 194 companywide reviews, including complaints about last-minute changes and delays. An originator on Reddit criticized DSCR pricing. These sources do not provide a matched 5–9 unit quote.",
    "reviewSources": [
      {
        "label": "Reddit originator discussion",
        "url": "https://www.reddit.com/r/loanoriginators/comments/1qq02ha/struggling_to_close_dscr_deals/"
      },
      {
        "label": "Trustpilot company reviews",
        "url": "https://www.trustpilot.com/review/www.rcncapital.com"
      }
    ],
    "price": "6.25% from",
    "priceType": "Advertised multifamily term"
  },
  {
    "id": "sharestates",
    "name": "Sharestates",
    "role": "Lends and places deals",
    "group": "Private capital",
    "access": "Wholesale / TPO",
    "accessDetails": "Brokers, wholesale and conduit",
    "fundingEvidence": "Private lender with prefunding and loan marketplace",
    "coverage": "Multi-state; verify address",
    "multifamily": "5+ multifamily",
    "mixedUse": "Eligible",
    "loanSize": "$500K–$50M per published program page",
    "notes": "Bridge / ask about term. Borrower FAQ says it prefunds loans before offering them to crowdfunding investors. The separate wholesale/conduit offering also buys loans from lenders. General FAQ calls 12 months typical with extensions by approval; verify current availability and note lender. Program chart advertises 9.50% multifamily and 9.99% mixed-use base rates. Confirm vintage and fees.",
    "sources": [
      {
        "label": "Loan programs and rates",
        "url": "https://sharestates.com/loan-programs/"
      },
      {
        "label": "Prefunding FAQ",
        "url": "https://sharestates.com/faq-borrower/"
      },
      {
        "label": "Broker intake",
        "url": "https://sharestates.com/brokers/"
      },
      {
        "label": "Wholesale / conduit",
        "url": "https://sharestates.loancloser.com/shareline"
      },
      {
        "label": "Trustpilot company reviews",
        "url": "https://www.trustpilot.com/review/sharestates.com"
      }
    ],
    "multifamilyRange": {
      "min": 5
    },
    "review": "The Trustpilot profile had one review when checked, too few for a service comparison. Borrower, investor, and warehouse experiences are separate.",
    "reviewSources": [
      {
        "label": "Trustpilot company reviews",
        "url": "https://www.trustpilot.com/review/sharestates.com"
      }
    ]
  },
  {
    "id": "silt-capital",
    "name": "Silt Capital",
    "role": "Direct lender",
    "group": "Private capital",
    "access": "Commercial broker access",
    "accessDetails": "Broker program",
    "fundingEvidence": "Direct private lender",
    "coverage": "42 states per lender",
    "multifamily": "5+ units",
    "mixedUse": "Eligible",
    "loanSize": "$500K–$10M",
    "notes": "DSCR term. Silt Capital LLC's disclosures say it makes business-purpose loans. Commercial program offers 30-year fixed and 5/7/10 ARMs, up to 75% purchase and 70% cash-out. Bank-statement and full-documentation tracks are also available. Commercial DSCR advertised from 6.75%. Confirm cost, prepay and leverage. The separate general rates page labels its displayed grid illustrative.",
    "sources": [
      {
        "label": "Commercial DSCR program",
        "url": "https://siltcapital.com/commercial-dscr"
      },
      {
        "label": "Broker program",
        "url": "https://siltcapital.com/brokers"
      },
      {
        "label": "Lender disclosures",
        "url": "https://siltcapital.com/disclosures"
      }
    ],
    "multifamilyRange": {
      "min": 5
    },
    "price": "6.75% from",
    "priceType": "Advertised commercial DSCR"
  },
  {
    "id": "sla-capital",
    "name": "SLA Capital (Sir Lends A Lot)",
    "role": "Direct lender",
    "group": "Private capital",
    "access": "Wholesale / TPO",
    "accessDetails": "Wholesale broker agreement",
    "fundingEvidence": "Direct private mortgage lender (company-disclosed)",
    "coverage": "Nationwide, subject to state availability",
    "multifamily": "5–10 DSCR",
    "mixedUse": "Eligible on commercial DSCR",
    "loanSize": "$350K–$5M multifamily; commercial DSCR to $3M",
    "notes": "DSCR term & bridge. The broker portal lists the 5–10 unit product at up to 74.99% LTV and 700+ FICO. Separate stabilized commercial DSCR product includes mixed-use, with a 5-year hybrid or 15-, 25- or 30-year fixed option. Commercial bridge is a separate product up to $20M. The 5–10 broker product says ask the rep. The published 1–4 rate does not establish pricing for these properties.",
    "sources": [
      {
        "label": "Broker eligibility and pricing access",
        "url": "https://slacapital.com/brokers/"
      },
      {
        "label": "Commercial DSCR and bridge",
        "url": "https://www.slacapital.com/commercial/"
      },
      {
        "label": "Lender identity and NMLS",
        "url": "https://www.slacapital.com/"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 10
    }
  },
  {
    "id": "sphinx-capital",
    "name": "Sphinx Capital",
    "role": "Direct lender",
    "group": "Private capital",
    "access": "Commercial broker access",
    "accessDetails": "Broker and referral introductions",
    "fundingEvidence": "Direct private lender (company-disclosed)",
    "coverage": "Confirm property state",
    "multifamily": "5+ multifamily",
    "mixedUse": "Eligible",
    "loanSize": "$250K–$100M+",
    "notes": "Permanent CRE. Company reports direct private lending backed by family-office and institutional partners. Commercial permanent page lists 5-, 7-, 10- and 30-year terms with underwriting and nonrecourse options dependent on the asset. Confirm which entity funds the exact loan. 6.00%–10.00% and 1–2% origination are broad advertised commercial permanent ranges.",
    "sources": [
      {
        "label": "Commercial permanent program",
        "url": "https://www.sphinxcap.com/loan-programs/commercial-permanent"
      },
      {
        "label": "Broker partnerships",
        "url": "https://www.sphinxcap.com/brokers"
      },
      {
        "label": "Direct lender and capital description",
        "url": "https://www.sphinxcap.com/"
      }
    ],
    "multifamilyRange": {
      "min": 5
    }
  },
  {
    "id": "stormfield",
    "name": "Stormfield Capital",
    "role": "Direct lender",
    "group": "Private capital",
    "access": "Commercial broker access",
    "accessDetails": "Dedicated broker intake",
    "fundingEvidence": "Direct balance-sheet lender",
    "coverage": "Major markets; funded in NY and NJ",
    "multifamily": "5+ CRE multifamily",
    "mixedUse": "Eligible; documented NY/NJ deals",
    "loanSize": "$1M–$30M on bridge-to-perm lane",
    "notes": "Bridge to refinance. Its bridge-to-perm product is a 12–24 month interest-only bridge sized to pro forma DSCR and stabilized debt yield. Loans are funded and held in-house. A refinance or sale is the exit; confirm term takeout separately. Bridge-to-perm page advertises from 8.99%, up to 70% LTV.",
    "sources": [
      {
        "label": "Official bridge-to-perm terms and funding",
        "url": "https://stormfieldcapital.com/loan-programs/cre-bridge-to-perm/"
      },
      {
        "label": "Broker intake",
        "url": "https://stormfieldcapital.com/new-brokers/"
      },
      {
        "label": "Hoboken mixed-use funded deal",
        "url": "https://stormfieldcapital.com/funded-transactions/new-jersey/bridge-to-perm-loan/hoboken-mixed-use-acquisition-bridge-loan/"
      },
      {
        "label": "Public reviews",
        "url": "https://reviews.birdeye.com/stormfield-capital-llc-157321227969733"
      }
    ],
    "multifamilyRange": {
      "min": 5
    },
    "review": "Birdeye showed 4.3/5 across 29 companywide reviews, including a repeat borrower who reported efficient closings. Funded Brooklyn and Hoboken mixed-use deals are also documented by the lender.",
    "reviewSources": [
      {
        "label": "Public reviews",
        "url": "https://reviews.birdeye.com/stormfield-capital-llc-157321227969733"
      }
    ],
    "price": "8.99% from",
    "priceType": "Advertised bridge rate"
  },
  {
    "id": "trentium",
    "name": "Trentium Capital",
    "role": "Direct lender",
    "group": "Private capital",
    "access": "Commercial broker access",
    "accessDetails": "Broker partnership",
    "fundingEvidence": "Direct private capital (company-disclosed)",
    "coverage": "Confirm property state",
    "multifamily": "5–8 units",
    "mixedUse": "",
    "loanSize": "Ask for current 5–8 matrix",
    "notes": "DSCR term. Premium DSCR materials explicitly identify small-balance multifamily acquisition and refinance. The dedicated page now redirects to the broader premium DSCR page. Treat 5–8 sizing as confirmed by indexed program copy and request current terms in writing. Mixed-use: Unverified.",
    "sources": [
      {
        "label": "Multifamily DSCR program",
        "url": "https://trentiumcapital.com/products/premium-dscr"
      },
      {
        "label": "Broker partnership",
        "url": "https://trentiumcapital.com/broker-partnership"
      },
      {
        "label": "Broker contact",
        "url": "https://trentiumcapital.com/contact"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 8
    }
  },
  {
    "id": "818-capital",
    "name": "818 Capital Partners",
    "role": "Lends and places deals",
    "group": "Private capital",
    "access": "Broker access unverified",
    "accessDetails": "Confirm wholesale terms per deal",
    "fundingEvidence": "Hybrid: direct capital and broker/placement",
    "coverage": "Confirm property state",
    "multifamily": "5+ units",
    "mixedUse": "Eligible",
    "loanSize": "Typically $500K–$10M+",
    "notes": "DSCR / CRE term & bridge. 818 explicitly says it lends its own funds on some executions and places agency, bank, CMBS and life company loans with the other capital sources. Ask the term sheet to name the funding entity and whether broker compensation is available.",
    "sources": [
      {
        "label": "Product and funding distinction",
        "url": "https://www.818capitalpartners.com/multifamily"
      }
    ],
    "multifamilyRange": {
      "min": 5
    }
  },
  {
    "id": "a10",
    "name": "A10 Capital",
    "role": "Direct lender",
    "group": "Private capital",
    "access": "Broker access unverified",
    "accessDetails": "Ask for CRE broker economics",
    "fundingEvidence": "Direct CRE lender; permanent through managed accounts",
    "coverage": "Nationwide targeted markets",
    "multifamily": "Eligible multifamily",
    "mixedUse": "Eligible",
    "loanSize": "Permanent $10M–$50M; bridge $5M–$100M",
    "notes": "Permanent CRE & bridge. A10 originates, closes and services in-house. Select stabilized fixed-rate financing is funded through separate institutional managed accounts. Bridge generally uses 3–5 year interest-only floating structures. Larger-deal CRE rather than standard small-balance DSCR. Permanent page lists 1% origination. Bridge page lists 1% origination and 0.5–1% exit. Request live pricing.",
    "sources": [
      {
        "label": "Permanent programs and managed capital",
        "url": "https://a10capital.com/permanent-financing"
      },
      {
        "label": "Bridge programs",
        "url": "https://a10capital.com/bridge-loans"
      }
    ]
  },
  {
    "id": "cpc-capital",
    "name": "CPC Capital / Community Preservation Corporation",
    "role": "Direct lender",
    "group": "Private capital",
    "access": "Broker access unverified",
    "accessDetails": "Regional origination staff are public. Contact the project desk for broker submission and compensation.",
    "fundingEvidence": "Nonprofit capital provider. CPC publishes its own construction and bridge programs and transaction histories.",
    "coverage": "NY and NJ on the small lease-up program; additional regional programs.",
    "multifamily": "Multifamily",
    "mixedUse": "Mixed-use development and preservation",
    "loanSize": "Up to $8M on small lease-up",
    "notes": "Construction, rehab and lease-up bridge programs, with forward commitments in eligible programs. CPC Mortgage Company is its separate agency origination arm.",
    "sources": [
      {
        "label": "CPC capital programs",
        "url": "https://communityp.com/cpc-capital/"
      },
      {
        "label": "Construction and bridge",
        "url": "https://communityp.com/products-services/construction-and-bridge-financing/"
      },
      {
        "label": "Closed projects",
        "url": "https://communityp.com/products-services/construction-and-bridge-financing/financed/"
      }
    ]
  },
  {
    "id": "cressida-direct",
    "name": "Cressida Direct",
    "role": "Direct lender",
    "group": "Private capital",
    "access": "Placement / referral",
    "accessDetails": "Broker referral program",
    "fundingEvidence": "Direct private lender",
    "coverage": "44 states (excludes DE, HI, ND, SD, WV, WY)",
    "multifamily": "5+ units",
    "mixedUse": "Eligible",
    "loanSize": "$200K–$3M",
    "notes": "DSCR term. Commercial DSCR is underwritten and funded in-house. 1.00× on in-place rents, 550+ FICO, up to 80% purchase or 75% refi. Five- or 30-year fixed, full recourse. Its parent has a separate advisory/placement desk and it places SBA loans.",
    "sources": [
      {
        "label": "Commercial DSCR program",
        "url": "https://www.cressidadirect.com/programs/investor-commercial"
      },
      {
        "label": "Broker program",
        "url": "https://www.cressidadirect.com/brokers"
      },
      {
        "label": "Parent company funding distinction",
        "url": "https://www.cressidacapital.com/cressida-direct"
      },
      {
        "label": "Birdeye company reviews",
        "url": "https://reviews.birdeye.com/cressida-direct-166909240746225"
      }
    ],
    "multifamilyRange": {
      "min": 5
    },
    "review": "Birdeye showed 4.6/5 from nine companywide reviews. Broker program and Loan Factory partner listing corroborate the route.",
    "reviewSources": [
      {
        "label": "Birdeye company reviews",
        "url": "https://reviews.birdeye.com/cressida-direct-166909240746225"
      }
    ]
  },
  {
    "id": "fidelityres",
    "name": "Fidelity Residential",
    "role": "Lends and places deals",
    "group": "Private capital",
    "access": "Placement / referral",
    "accessDetails": "Direct / referral only verified",
    "fundingEvidence": "Direct nonbank lender with separate brokered programs",
    "coverage": "",
    "multifamily": "5–10 units",
    "mixedUse": "2–8 units",
    "loanSize": "",
    "notes": "DSCR term. PFN Lending Group, Inc. DBA Fidelity Residential. Partner materials describe referrals rather than paid wholesale submissions. Confirms direct mortgage banking generally, with a brokered lane for some other products.",
    "sources": [
      {
        "label": "Program",
        "url": "https://fidresi.com/5-to-10-unit-loans/"
      },
      {
        "label": "Broker program or channel",
        "url": "https://fidresi.com/partners/"
      },
      {
        "label": "Lender or guidelines",
        "url": "https://fidresi.com/aboutus/index.cfm"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 10
    },
    "mixedUseRange": {
      "min": 2,
      "max": 8
    },
    "dscr": "1.00× or above"
  },
  {
    "id": "inhouse",
    "name": "InHouse Lender / DSCRlender.com",
    "role": "Direct lender",
    "group": "Private capital",
    "access": "Borrower-direct",
    "accessDetails": "Direct to investor; broker channel unverified",
    "fundingEvidence": "Direct nonbank lender",
    "coverage": "",
    "multifamily": "5–8 units",
    "mixedUse": "2–8 units",
    "loanSize": "",
    "notes": "DSCR term. Direct website says in-house credit decisions, exceptions and funding. It lists availability by state. No dedicated broker channel verified for this brand.",
    "sources": [
      {
        "label": "Program",
        "url": "https://www.dscrlender.com/multifamily/"
      },
      {
        "label": "Broker program or channel",
        "url": "https://www.dscrlender.com/mixed-use/"
      },
      {
        "label": "Lender or guidelines",
        "url": "https://www.dscrlender.com/privacy-policy/"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 8
    },
    "mixedUseRange": {
      "min": 2,
      "max": 8
    },
    "dscr": "1.00× mixed-use"
  },
  {
    "id": "lendingone",
    "name": "LendingOne Commercial",
    "role": "Direct lender",
    "group": "Private capital",
    "access": "Broker access unverified",
    "accessDetails": "Wholesale desk exists; confirm CRE channel",
    "fundingEvidence": "Direct private lender / commercial originator",
    "coverage": "United States; confirm market",
    "multifamily": "Eligible multifamily",
    "mixedUse": "",
    "loanSize": "$5M–$30M on commercial bridge",
    "notes": "Bridge. Commercial desk publishes 1–3 year bridge, up to 80% LTC and optional case-by-case exceptions. Residential site has its own wholesale broker page. Confirm compensation and eligibility on the commercial execution explicitly. Commercial bridge page advertises a 4% floor, not a note rate, and 0.50% origination. Ask for the index and margin. Mixed-use: Unverified on CRE bridge.",
    "sources": [
      {
        "label": "Commercial bridge and terms",
        "url": "https://lendingonecre.com/bridge/"
      },
      {
        "label": "LendingOne broker desk",
        "url": "https://lendingone.com/brokers/"
      },
      {
        "label": "BiggerPockets partnership examples",
        "url": "https://lp.lendingone.com/biggerpockets-partner-landing-page"
      }
    ]
  },
  {
    "id": "lendingstreet",
    "name": "LendingStreet",
    "role": "Lends and places deals",
    "group": "Private capital",
    "access": "Placement / referral",
    "accessDetails": "Referral partner route published; wholesale status unverified",
    "fundingEvidence": "Terms say LendingStreet sometimes funds directly, and funding source varies with the loan.",
    "coverage": "",
    "multifamily": "5–8 rental DSCR; 5+ CRE",
    "mixedUse": "CRE through lender network",
    "loanSize": "",
    "notes": "Company employee reports an $850K 12-unit value-add cash-out refi. Funder and pricing not identified.",
    "sources": [
      {
        "label": "Funding disclosure",
        "url": "https://lendingstreet.io/terms.html"
      },
      {
        "label": "5–8 unit DSCR",
        "url": "https://lendingstreet.io/dscr-loans-5-8-units"
      },
      {
        "label": "CRE property fit",
        "url": "https://lendingstreet.io/commercial-property-types-financed"
      },
      {
        "label": "Referral contact",
        "url": "https://lendingstreet.io/contact.html"
      },
      {
        "label": "Company employee post",
        "url": "https://www.linkedin.com/posts/alyssalendingstreet_love-this-team-and-love-this-company-activity-7467241357779189761-EjDm"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 8
    },
    "review": "A company employee reported a $850K 12-unit cash-out refinance. The lender of record and rate were omitted.",
    "reviewSources": [
      {
        "label": "Employee LinkedIn post",
        "url": "https://www.linkedin.com/posts/alyssalendingstreet_love-this-team-and-love-this-company-activity-7467241357779189761-EjDm"
      }
    ]
  },
  {
    "id": "nirvana",
    "name": "Nirvana Capital Co.",
    "role": "Direct claim unverified",
    "group": "Private capital",
    "access": "Broker access unverified",
    "accessDetails": "Broker / funding role needs written confirmation",
    "fundingEvidence": "Marketed as private lender; AAPL lists broker",
    "coverage": "Based in Brooklyn; advertises nationwide reach",
    "multifamily": "5–20 units marketed",
    "mixedUse": "Eligible per program page",
    "loanSize": "Bridge marketing lists $300K–$8M",
    "notes": "Bridge & DSCR placement. The company markets multifamily, mixed-use, commercial and bridge programs as a private lender. The American Association of Private Lenders lists it as a bridge and multifamily loan broker. Ask for the note lender and funding role before relying on any direct claim. Bridge tables advertise from 9.50% on selected tiers. Verify the quote source.",
    "sources": [
      {
        "label": "Product marketing",
        "url": "https://www.nirvanacapitalco.com/multifamily-mixed-use-commerical"
      },
      {
        "label": "AAPL role listing",
        "url": "https://aaplonline.com/directory/nirvana-capital-co-llc/"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 20
    }
  },
  {
    "id": "parkview",
    "name": "Parkview Financial",
    "role": "Direct lender",
    "group": "Private capital",
    "access": "Broker access unverified",
    "accessDetails": "CRE originations; confirm broker terms",
    "fundingEvidence": "Direct private lending fund",
    "coverage": "Major U.S. markets",
    "multifamily": "Eligible multifamily",
    "mixedUse": "Eligible",
    "loanSize": "Ask current minimum for geography",
    "notes": "Construction & bridge. First-lien, short-term bridge and ground-up or mid-construction. Lender's site lists 12–36 month bridge terms, with documented Manhattan multifamily construction funding. Not a stabilized DSCR takeout program.",
    "sources": [
      {
        "label": "Bridge and construction program",
        "url": "https://www.parkviewfinancial.com/lending"
      },
      {
        "label": "Manhattan multifamily funded example",
        "url": "https://www.parkviewfinancial.com/post/parkview-financial-closes-30m-construction-loan-for-12-story-apartment-building-in-manhattan"
      },
      {
        "label": "Independent lender profile",
        "url": "https://elementix.com/lenders/parkview-financial"
      }
    ]
  },
  {
    "id": "pender",
    "name": "Pender Capital",
    "role": "Direct lender",
    "group": "Private capital",
    "access": "Broker access unverified",
    "accessDetails": "CRE originations; confirm broker terms",
    "fundingEvidence": "Direct private balance-sheet lender",
    "coverage": "Nationwide, non-rural; case by case",
    "multifamily": "Eligible multifamily",
    "mixedUse": "Eligible with residential mix overlay",
    "loanSize": "$10M–$30M target on current direct page",
    "notes": "Bridge. The direct desk says it originates and services loans. Published target is $10M–$30M, generally 12–36 months and up to 75% LTV. Bridge tear sheet lists mixed-use and no minimum DSCR for that bridge. Confirm separate smaller published lane if below target.",
    "sources": [
      {
        "label": "Direct loan criteria",
        "url": "https://www.pendercapital.com/direct-lending.php"
      },
      {
        "label": "Bridge loan tear sheet",
        "url": "https://www.pendercapital.com/uploads/home-content/direct-lending-Pender-Capital-Tear-Sheet-2024.pdf"
      }
    ]
  },
  {
    "id": "silver-arch",
    "name": "Silver Arch Capital Partners",
    "role": "Direct lender",
    "group": "Private capital",
    "access": "Broker access unverified",
    "accessDetails": "Direct CRE intake; confirm broker terms",
    "fundingEvidence": "Direct private lender (company-disclosed)",
    "coverage": "Confirm property state",
    "multifamily": "Eligible multifamily",
    "mixedUse": "Eligible",
    "loanSize": "$1M–$70M",
    "notes": "Bridge. Published 1–3 year bridge terms with extensions and uses including acquisitions, construction, renovations and refinance. Company explicitly presents separate multifamily and mixed-use products.",
    "sources": [
      {
        "label": "Current loan criteria",
        "url": "https://www.silverarchcp.com/loan-criteria/"
      },
      {
        "label": "Mixed-use program",
        "url": "https://www.silverarchcp.com/loan-programs/mixed-use-loans/"
      },
      {
        "label": "Multifamily program",
        "url": "https://www.silverarchcp.com/loan-programs/multifamily/"
      },
      {
        "label": "Scotsman Guide lender listing",
        "url": "https://s3.amazonaws.com/simplecirc-cdn/publications/2284/scotsman202308ce-dl.pdf"
      }
    ]
  },
  {
    "id": "trez",
    "name": "Trez Capital",
    "role": "Direct lender",
    "group": "Private capital",
    "access": "Broker access unverified",
    "accessDetails": "CRE originations; confirm broker terms",
    "fundingEvidence": "Direct private credit manager/lender",
    "coverage": "North America; ask market desk",
    "multifamily": "Eligible multifamily",
    "mixedUse": "Eligible",
    "loanSize": "$10M–$75M bridge",
    "notes": "Bridge and development. Bridge page lists up to 36 months initially, with extensions to a maximum of 60 months, interest-only initially and up to 85% LTC. Fund brochure includes a multifamily mixed-use bridge investment. 30-day term SOFR +350–450 bps and 1–2% fees, indicative bridge terms.",
    "sources": [
      {
        "label": "Bridge products and published ranges",
        "url": "https://www.trezcapital.com/financing/bridge-financing"
      },
      {
        "label": "Debt and equity lender",
        "url": "https://www.trezcapital.com/financing/debt-equity-solutions"
      },
      {
        "label": "Fund brochure",
        "url": "https://www.trezcapital.com/wp-content/uploads/2023/07/TCPT_FundBrochure_2025_EN.pdf"
      }
    ]
  },
  {
    "id": "turncap",
    "name": "TurnCap",
    "role": "Direct lender",
    "group": "Private capital",
    "access": "Broker access unverified",
    "accessDetails": "CRE originations; confirm broker terms",
    "fundingEvidence": "Direct private CRE bridge lender",
    "coverage": "Ask origination desk",
    "multifamily": "Eligible multifamily",
    "mixedUse": "Commercial desk; verify specific mix",
    "loanSize": "$10M–$45M multifamily; $5M–$30M commercial",
    "notes": "Bridge with third-party takeout option. TurnCap says it directly funds the bridge. Multifamily starts at 1.00× DSCR and targets at least 1.25× stabilized DSCR. Bellwether may provide the permanent execution, with a fee reduction if it does. Confirm exact mixed-use eligibility. Publishes 1% origination and 1% exit for multifamily, subject to takeout relationship. Request note rate.",
    "sources": [
      {
        "label": "Direct lending and bridge-to-perm terms",
        "url": "https://turncap.com/lending-programs/"
      }
    ]
  },
  {
    "id": "arbor",
    "name": "Arbor Realty Trust",
    "role": "Agency originator",
    "group": "Agency / institutional",
    "access": "Commercial broker access",
    "accessDetails": "Commercial mortgage broker relationships explicitly described by an originator. Wholesale rate sheet and broker compensation unverified.",
    "fundingEvidence": "Agency originator",
    "coverage": "National agency program; confirm address and execution",
    "multifamily": "5+ stabilized apartments",
    "mixedUse": "Limited commercial component subject to agency review",
    "loanSize": "$1M–$9M focus; some Fannie material says from $750K",
    "notes": "Agency permanent. Arbor is on Fannie Mae’s Small Loan list and Freddie Mac’s Optigo directory under different subsidiaries. Arbor’s own desk lists current Freddie Mac Conventional Small terms. Also offers proprietary private-label and bridge products. Ask which entity and program will close the loan.",
    "sources": [
      {
        "label": "Arbor Small Loans",
        "url": "https://arbor.com/small-loans/"
      },
      {
        "label": "Fannie Small Loan product sheet",
        "url": "https://arbor.com/wp-content/uploads/2025/04/Fannie-Mae-Small-Loan-041425.pdf"
      },
      {
        "label": "Fannie Mae approved Small Loan lenders",
        "url": "https://multifamily.fanniemae.com/about-multifamily/our-partners/small-loan-lenders"
      },
      {
        "label": "Freddie Mac approved Optigo originators",
        "url": "https://mf.freddiemac.com/borrowers/optigo-lenders"
      },
      {
        "label": "Reddit commercial mortgage discussion (2024)",
        "url": "https://www.reddit.com/r/CommercialRealEstate/comments/1dybqo4/who_do_you_recommend_for_fannie_mae_small_balance/"
      }
    ],
    "multifamilyRange": {
      "min": 5
    },
    "review": "In a 2024 Reddit refinancing discussion, a self-described broker who said they had done deals with several agency desks preferred Arbor, attributing the experience to the professional who handled the loan. Anecdote only.",
    "reviewSources": [
      {
        "label": "Reddit commercial mortgage discussion (2024)",
        "url": "https://www.reddit.com/r/CommercialRealEstate/comments/1dybqo4/who_do_you_recommend_for_fannie_mae_small_balance/"
      }
    ]
  },
  {
    "id": "ameritas",
    "name": "Ameritas Investment Partners",
    "role": "Direct lender",
    "group": "Agency / institutional",
    "access": "Placement / referral",
    "accessDetails": "Uses mortgage-banking correspondents; originator contact by state is published. No standard mortgage broker rate sheet verified.",
    "fundingEvidence": "Life-company portfolio lender",
    "coverage": "Core correspondent markets, generally MSA population 250K+",
    "multifamily": "Apartment collateral expressly accepted",
    "mixedUse": "",
    "loanSize": "$1M–$10M, larger considered",
    "notes": "Insurance capital / permanent. The portfolio term sheet lists fixed rates locked at application, 10–25 year terms, amortization up to 30 years, up to 75% LTV, and typically 1.50× debt coverage on 25-year amortization. Mixed-use: Other property types selectively; confirm mixed-use before submitting.",
    "sources": [
      {
        "label": "Life-company portfolio term sheet",
        "url": "https://www.ameritas.com/OCM/GetFile?doc=385996"
      },
      {
        "label": "Correspondent coverage and contacts",
        "url": "https://www.ameritas.com/industry-professionals/commercial-real-estate/coverage-map/"
      }
    ]
  },
  {
    "id": "argentic",
    "name": "Argentic Real Estate Finance",
    "role": "Direct lender",
    "group": "Agency / institutional",
    "access": "Broker access unverified",
    "accessDetails": "Direct origination desk. Broker compensation and wholesale enrollment unverified.",
    "fundingEvidence": "Direct conduit / private capital",
    "coverage": "National",
    "multifamily": "Published stabilized multifamily; bridge also available",
    "mixedUse": "NYC fixed-rate mixed-use closings published",
    "loanSize": "Fixed $5M–$300M+; transitional $15M–$150M+",
    "notes": "Fixed-rate permanent and transitional first mortgage. Public site expressly identifies direct lending; SEC filings name the originator/seller. Fixed terms 5, 7 and 10 years, up to 75% first-mortgage LTV. Published Brooklyn/LIC mixed-use fixed-rate transaction was $30.5M.",
    "sources": [
      {
        "label": "Direct funding and licensing",
        "url": "https://www.argentic.com/about"
      },
      {
        "label": "Lending criteria",
        "url": "https://www.argentic.com/program"
      },
      {
        "label": "Closed mixed-use example",
        "url": "https://www.argentic.com/transactions"
      }
    ]
  },
  {
    "id": "berkadia",
    "name": "Berkadia Commercial Mortgage",
    "role": "Agency originator",
    "group": "Agency / institutional",
    "access": "Broker access unverified",
    "accessDetails": "Direct agency desk. Broker compensation or formal wholesale access unverified.",
    "fundingEvidence": "Agency originator",
    "coverage": "National agency program; confirm address and execution",
    "multifamily": "5+ stabilized apartments",
    "mixedUse": "Limited commercial component subject to agency review",
    "loanSize": "Fannie up to $9M; Freddie generally $2M–$10M",
    "notes": "Agency permanent. Direct Fannie and Freddie originator. Small Loans page also references the older SBL track. Its mortgage banking team can additionally arrange third-party money. Obtain the dated product terms and proposed closing lender.",
    "sources": [
      {
        "label": "Berkadia small loans",
        "url": "https://www.berkadia.com/our-services/small-loans/"
      },
      {
        "label": "Mortgage banking",
        "url": "https://www.berkadia.com/our-services/mortgage-banking/"
      },
      {
        "label": "Fannie Mae approved Small Loan lenders",
        "url": "https://multifamily.fanniemae.com/about-multifamily/our-partners/small-loan-lenders"
      },
      {
        "label": "Freddie Mac approved Optigo originators",
        "url": "https://mf.freddiemac.com/borrowers/optigo-lenders"
      }
    ],
    "multifamilyRange": {
      "min": 5
    }
  },
  {
    "id": "bwe",
    "name": "BWE / Bellwether Enterprise",
    "role": "Agency originator",
    "group": "Agency / institutional",
    "access": "Broker access unverified",
    "accessDetails": "Direct agency desk. Broker compensation or formal wholesale access unverified.",
    "fundingEvidence": "Agency originator",
    "coverage": "National agency program; confirm address and execution",
    "multifamily": "5+ stabilized apartments",
    "mixedUse": "Limited commercial component subject to agency review",
    "loanSize": "Fannie Small up to $9M; Freddie generally $2M–$10M",
    "notes": "Agency permanent. Approved small-loan and Optigo originator with multifamily acquisition, refinance, construction and permanent options. Its capital markets team can also use other sources.",
    "sources": [
      {
        "label": "BWE multifamily financing",
        "url": "https://bwe.com/solutions/multifamily/"
      },
      {
        "label": "BWE Freddie Mac lending",
        "url": "https://bwe.com/solutions/freddie-mac/"
      },
      {
        "label": "Fannie Mae approved Small Loan lenders",
        "url": "https://multifamily.fanniemae.com/about-multifamily/our-partners/small-loan-lenders"
      },
      {
        "label": "Freddie Mac approved Optigo originators",
        "url": "https://mf.freddiemac.com/borrowers/optigo-lenders"
      }
    ],
    "multifamilyRange": {
      "min": 5
    }
  },
  {
    "id": "cbre",
    "name": "CBRE Multifamily Capital",
    "role": "Agency originator",
    "group": "Agency / institutional",
    "access": "Broker access unverified",
    "accessDetails": "Direct agency desk. Broker compensation or formal wholesale access unverified.",
    "fundingEvidence": "Agency originator",
    "coverage": "National agency program; confirm address and execution",
    "multifamily": "5+ stabilized apartments",
    "mixedUse": "Limited commercial component subject to agency review",
    "loanSize": "$1M–$9M Fannie; $2M–$10M Freddie; $4M–$30M Express",
    "notes": "Agency permanent. CBRE Private Client Lending says it originates, underwrites, closes and funds. The wider Debt & Structured Finance team also places outside money. Match the loan with the correct division.",
    "sources": [
      {
        "label": "CBRE Private Client Lending",
        "url": "https://www.cbre.com/services/invest-finance-and-value/capital-markets/debt-and-structured-finance/private-client-lending"
      },
      {
        "label": "Fannie Mae approved Small Loan lenders",
        "url": "https://multifamily.fanniemae.com/about-multifamily/our-partners/small-loan-lenders"
      },
      {
        "label": "Freddie Mac approved Optigo originators",
        "url": "https://mf.freddiemac.com/borrowers/optigo-lenders"
      },
      {
        "label": "Freddie Mac mixed-use FAQ",
        "url": "https://mf.freddiemac.com/docs/conventionalsmallfaqs.pdf"
      }
    ],
    "multifamilyRange": {
      "min": 5
    }
  },
  {
    "id": "cpc",
    "name": "CPC Mortgage Company",
    "role": "Agency originator",
    "group": "Agency / institutional",
    "access": "Broker access unverified",
    "accessDetails": "Direct agency desk. Broker compensation or formal wholesale access unverified.",
    "fundingEvidence": "Agency originator",
    "coverage": "National agency program; confirm address and execution",
    "multifamily": "5+ stabilized apartments",
    "mixedUse": "Limited commercial component subject to agency review",
    "loanSize": "Fannie Small program up to $9M",
    "notes": "Agency permanent. Nonprofit agency lender with a workforce and affordable housing focus. Approved Fannie Small Loan, Freddie Optigo and HUD/FHA MAP lender. Ask about both agency and parent CPC financing if a conventional file misses the box.",
    "sources": [
      {
        "label": "CPC multifamily mortgage products",
        "url": "https://communityp.com/products-services/mortgage-lending/"
      },
      {
        "label": "Fannie Mae approved Small Loan lenders",
        "url": "https://multifamily.fanniemae.com/about-multifamily/our-partners/small-loan-lenders"
      },
      {
        "label": "Freddie Mac approved Optigo originators",
        "url": "https://mf.freddiemac.com/borrowers/optigo-lenders"
      }
    ],
    "multifamilyRange": {
      "min": 5
    }
  },
  {
    "id": "greystone",
    "name": "Greystone Servicing",
    "role": "Agency originator",
    "group": "Agency / institutional",
    "access": "Broker access unverified",
    "accessDetails": "Direct agency desk. Broker compensation or formal wholesale access unverified.",
    "fundingEvidence": "Agency originator",
    "coverage": "National agency program; confirm address and execution",
    "multifamily": "5+ stabilized apartments",
    "mixedUse": "Limited commercial component subject to agency review",
    "loanSize": "$2M–$10M Freddie; Fannie program up to $9M",
    "notes": "Agency permanent. Approved Fannie and Freddie lender. Its Freddie term sheet explicitly cites eligible mixed-use, predominantly market-rate collateral of 50 units or less, with term-specific leverage. Fannie and Freddie program terms differ.",
    "sources": [
      {
        "label": "Greystone Freddie Conventional Small term sheet",
        "url": "https://www.greystone.com/wp-content/uploads/2026/04/Freddie-Mac-Conventional-Small-Loan-Term-Sheet.pdf"
      },
      {
        "label": "Fannie Mae approved Small Loan lenders",
        "url": "https://multifamily.fanniemae.com/about-multifamily/our-partners/small-loan-lenders"
      },
      {
        "label": "Freddie Mac approved Optigo originators",
        "url": "https://mf.freddiemac.com/borrowers/optigo-lenders"
      },
      {
        "label": "Reddit commercial mortgage discussion (2024)",
        "url": "https://www.reddit.com/r/CommercialRealEstate/comments/1dybqo4/who_do_you_recommend_for_fannie_mae_small_balance/"
      }
    ],
    "multifamilyRange": {
      "min": 5
    },
    "review": "In a 2024 Reddit refinancing discussion, one commenter described Greystone's process favorably. The commenter did not specify a closing, so treat this as a recommendation.",
    "reviewSources": [
      {
        "label": "Reddit commercial mortgage discussion (2024)",
        "url": "https://www.reddit.com/r/CommercialRealEstate/comments/1dybqo4/who_do_you_recommend_for_fannie_mae_small_balance/"
      }
    ]
  },
  {
    "id": "ladder-capital",
    "name": "Ladder Capital",
    "role": "Direct lender",
    "group": "Agency / institutional",
    "access": "Broker access unverified",
    "accessDetails": "Originations contact is public. Wholesale enrollment and compensation unverified.",
    "fundingEvidence": "Direct conduit / balance-sheet lender",
    "coverage": "Major U.S. markets",
    "multifamily": "Direct multifamily conduit and bridge",
    "mixedUse": "Documented NYC mixed-use bridge; conduit case by case",
    "loanSize": "Conduit $5M–$450M+; bridge $10M–$275M+",
    "notes": "CMBS permanent and bridge. Public conduit terms generally below 75% LTV and 1.25× DSCR for multifamily on lender-underwritten cash flow. Its Delancey Street bridge closed on apartments with retail. Conduit exit and transaction costs differ from 30-year investor DSCR.",
    "sources": [
      {
        "label": "Ladder lending parameters",
        "url": "https://www.laddercapital.com/lending-parameters/"
      },
      {
        "label": "NYC mixed-use bridge transaction",
        "url": "https://www.laddercapital.com/portfolio/55-61-delancey-street/"
      }
    ]
  },
  {
    "id": "lument",
    "name": "Lument",
    "role": "Agency originator",
    "group": "Agency / institutional",
    "access": "Broker access unverified",
    "accessDetails": "Direct agency desk. Broker compensation or formal wholesale access unverified.",
    "fundingEvidence": "Agency originator",
    "coverage": "National agency program; confirm address and execution",
    "multifamily": "5+ stabilized apartments",
    "mixedUse": "Limited commercial component subject to agency review",
    "loanSize": "Up to $9M Fannie Small; Freddie generally $2M–$10M",
    "notes": "Agency permanent. Approved agency originator and separate proprietary balance-sheet lender. The small-loan program does not automatically qualify higher commercial shares.",
    "sources": [
      {
        "label": "Lument term sheets",
        "url": "https://www.lument.com/insights-resources/term-sheets/"
      },
      {
        "label": "Proprietary balance-sheet lending",
        "url": "https://www.lument.com/financing-options/balance-sheet/"
      },
      {
        "label": "Fannie Mae approved Small Loan lenders",
        "url": "https://multifamily.fanniemae.com/about-multifamily/our-partners/small-loan-lenders"
      },
      {
        "label": "Freddie Mac approved Optigo originators",
        "url": "https://mf.freddiemac.com/borrowers/optigo-lenders"
      },
      {
        "label": "Reddit commercial mortgage discussion (2024)",
        "url": "https://www.reddit.com/r/CommercialRealEstate/comments/1dybqo4/who_do_you_recommend_for_fannie_mae_small_balance/"
      }
    ],
    "multifamilyRange": {
      "min": 5
    },
    "review": "In a 2024 Reddit refinancing discussion, one commenter described a negative firsthand servicing experience on an assumed loan. This is an unverified servicing anecdote.",
    "reviewSources": [
      {
        "label": "Reddit commercial mortgage discussion (2024)",
        "url": "https://www.reddit.com/r/CommercialRealEstate/comments/1dybqo4/who_do_you_recommend_for_fannie_mae_small_balance/"
      }
    ]
  },
  {
    "id": "newpoint",
    "name": "NewPoint Real Estate Capital",
    "role": "Agency originator",
    "group": "Agency / institutional",
    "access": "Broker access unverified",
    "accessDetails": "Direct agency desk. Broker compensation or formal wholesale access unverified.",
    "fundingEvidence": "Agency originator",
    "coverage": "National agency program; confirm address and execution",
    "multifamily": "5+ stabilized apartments",
    "mixedUse": "Limited commercial component subject to agency review",
    "loanSize": "Fannie Small up to $9M; Freddie generally $2M–$10M",
    "notes": "Agency permanent. Originates Fannie Mae, Freddie Mac and HUD/FHA loans. Also has proprietary balance-sheet and third-party capital strategies. Fannie Small web page specifically lists 5+ units.",
    "sources": [
      {
        "label": "NewPoint Fannie Small program",
        "url": "https://newpoint.com/node/223"
      },
      {
        "label": "Agency and proprietary role",
        "url": "https://newpoint.com/finance-solutions"
      },
      {
        "label": "Freddie Mac approved Optigo originators",
        "url": "https://mf.freddiemac.com/borrowers/optigo-lenders"
      },
      {
        "label": "Fannie Mae small-loan term sheet",
        "url": "https://multifamily.fanniemae.com/financing-options/small-loans/small-mortgage-loan-program-term-sheet"
      }
    ],
    "multifamilyRange": {
      "min": 5
    }
  },
  {
    "id": "northmarq",
    "name": "Northmarq Capital",
    "role": "Agency originator",
    "group": "Agency / institutional",
    "access": "Broker access unverified",
    "accessDetails": "Direct agency desk and correspondent relationships. Confirm financing party and any broker or referral agreement for the specific deal.",
    "fundingEvidence": "Agency originator",
    "coverage": "National agency program; confirm address and execution",
    "multifamily": "5+ stabilized apartments",
    "mixedUse": "Limited commercial component subject to agency review",
    "loanSize": "Freddie generally $2M–$10M; other structures vary",
    "notes": "Agency permanent. An approved agency originator for some executions and a correspondent or placement firm for others. Its capital markets team publishes dated indicative market grids for agency, life-company and CMBS structures.",
    "sources": [
      {
        "label": "Northmarq direct origination",
        "url": "https://www.northmarq.com/people/andrew-slaton"
      },
      {
        "label": "Northmarq dated market rate grids",
        "url": "https://www.northmarq.com/insights/rates-spreads"
      },
      {
        "label": "Freddie Mac approved Optigo originators",
        "url": "https://mf.freddiemac.com/borrowers/optigo-lenders"
      }
    ],
    "multifamilyRange": {
      "min": 5
    }
  },
  {
    "id": "principal",
    "name": "Principal Real Estate",
    "role": "Direct lender",
    "group": "Agency / institutional",
    "access": "Broker access unverified",
    "accessDetails": "Institutional direct origination contacts. Standard wholesale terms unverified.",
    "fundingEvidence": "Institutional portfolio lender",
    "coverage": "U.S. institutional markets; scenario review",
    "multifamily": "Published core collateral",
    "mixedUse": "",
    "loanSize": "Core program from $10M",
    "notes": "Core portfolio commercial mortgages. Principal publishes portfolio-lending terms and its statutory filings describe commercial mortgages held in its loan portfolio. In-house closing and servicing. Relevant to larger properties or portfolios. Mixed-use: Confirm specific mixed-use configuration with origination desk.",
    "sources": [
      {
        "label": "Principal core portfolio lending",
        "url": "https://brandassets.principal.com/m/23cad77f72f6c03/original/Private-debt-origination-Core-portfolio-lending.pdf"
      },
      {
        "label": "Commercial mortgage portfolio filing",
        "url": "https://investors.principal.com/static-files/486f3327-e408-4ec6-bc8d-d8bb0f9ed3f3"
      }
    ]
  },
  {
    "id": "readycapital",
    "name": "Ready Capital / ReadyCap Commercial",
    "role": "Lends and places deals",
    "group": "Agency / institutional",
    "access": "Broker access unverified",
    "accessDetails": "Direct CRE originator. Specific CRE wholesale intake and compensation unverified.",
    "fundingEvidence": "Hybrid lender",
    "coverage": "U.S.; program dependent",
    "multifamily": "5+ apartments",
    "mixedUse": "Published commercial permanent eligibility",
    "loanSize": "Permanent up to $25M; bridge up to $75M on program page",
    "notes": "Agency, commercial permanent and bridge. Public mortgage REIT with finance and servicing operations. Freddie lists it as Optigo. Its product page still references legacy SBL, so ask whether the current Freddie Conventional Small or proprietary fixed-rate desk is quoting today and confirm the legal lender.",
    "sources": [
      {
        "label": "Multifamily and commercial loan menu",
        "url": "https://readycapital.com/loan-programs/commercial-real-estate/multifamily/"
      },
      {
        "label": "Quarterly SEC report",
        "url": "https://www.sec.gov/Archives/edgar/data/1527590/000162828026071703/rc-20260930.htm"
      },
      {
        "label": "Freddie Mac approved Optigo originators",
        "url": "https://mf.freddiemac.com/borrowers/optigo-lenders"
      }
    ],
    "multifamilyRange": {
      "min": 5
    }
  },
  {
    "id": "regions",
    "name": "Regions Real Estate Capital Markets",
    "role": "Agency originator",
    "group": "Agency / institutional",
    "access": "Broker access unverified",
    "accessDetails": "Direct agency desk. Broker compensation or formal wholesale access unverified.",
    "fundingEvidence": "Agency originator",
    "coverage": "National agency program; confirm address and execution",
    "multifamily": "5+ stabilized apartments",
    "mixedUse": "Limited commercial component subject to agency review",
    "loanSize": "Fannie Small up to $9M; Freddie generally $2M–$10M",
    "notes": "Agency permanent. Regions Bank has both balance-sheet and capital markets capabilities. Its agency desk is specifically listed for Fannie Small Loans and Freddie Optigo. Nationwide market-rate and affordable multifamily are published.",
    "sources": [
      {
        "label": "Regions Freddie Mac lending desk",
        "url": "https://www.regions.com/commercial-banking/real-estate-banking/real-estate-capital-markets/freddie-mac-loans"
      },
      {
        "label": "Fannie Mae approved Small Loan lenders",
        "url": "https://multifamily.fanniemae.com/about-multifamily/our-partners/small-loan-lenders"
      },
      {
        "label": "Freddie Mac approved Optigo originators",
        "url": "https://mf.freddiemac.com/borrowers/optigo-lenders"
      }
    ],
    "multifamilyRange": {
      "min": 5
    }
  },
  {
    "id": "starwood",
    "name": "Starwood Mortgage Capital / Starwood Property Trust",
    "role": "Direct lender",
    "group": "Agency / institutional",
    "access": "Broker access unverified",
    "accessDetails": "Conduit offices and named originators are public. Broker compensation and wholesale enrollment unverified.",
    "fundingEvidence": "Direct conduit / balance-sheet lender",
    "coverage": "U.S. national originations desk",
    "multifamily": "Yes, institutional and conduit",
    "mixedUse": "Mixed-use transactions published",
    "loanSize": "Conduit $5M–$100M+; first mortgage and bridge $40M–$500M+",
    "notes": "CMBS permanent and institutional bridge. Originates and closes loans for its balance sheet or securitization. Published conduit first mortgages up to 75% LTV. Primarily a larger-balance option.",
    "sources": [
      {
        "label": "Commercial lending and conduit originators",
        "url": "https://www.starwoodpropertytrust.com/our-businesses/commercial-lending/"
      },
      {
        "label": "Selected financings",
        "url": "https://www.starwoodpropertytrust.com/our-company/transactions/"
      }
    ]
  },
  {
    "id": "walker-dunlop",
    "name": "Walker & Dunlop",
    "role": "Agency originator",
    "group": "Agency / institutional",
    "access": "Broker access unverified",
    "accessDetails": "Direct agency desk. Broker compensation or formal wholesale access unverified.",
    "fundingEvidence": "Agency originator",
    "coverage": "National agency program; confirm address and execution",
    "multifamily": "5+ stabilized apartments",
    "mixedUse": "Limited commercial component subject to agency review",
    "loanSize": "Up to $9M Fannie Small; Freddie generally $2M–$10M",
    "notes": "Agency permanent. Dedicated small balance desk. Verified direct agency origination via both lists. Stabilized apartment acquisitions/refinances may qualify. Commercial rent needs program underwriting.",
    "sources": [
      {
        "label": "Small balance lending desk",
        "url": "https://www.walkerdunlop.com/specialties-sectors/small-balance"
      },
      {
        "label": "Fannie Mae approved Small Loan lenders",
        "url": "https://multifamily.fanniemae.com/about-multifamily/our-partners/small-loan-lenders"
      },
      {
        "label": "Freddie Mac approved Optigo originators",
        "url": "https://mf.freddiemac.com/borrowers/optigo-lenders"
      },
      {
        "label": "Freddie Mac mixed-use FAQ",
        "url": "https://mf.freddiemac.com/docs/conventionalsmallfaqs.pdf"
      }
    ],
    "multifamilyRange": {
      "min": 5
    }
  },
  {
    "id": "ariel-property-advisors",
    "name": "Ariel Property Advisors",
    "role": "Broker / marketplace",
    "group": "Broker / marketplace",
    "access": "Placement / referral",
    "accessDetails": "Placement or introduction. The final lender and broker compensation are deal-specific.",
    "fundingEvidence": "Capital Services identifies independent network of capital sources and role arranging deals.",
    "coverage": "",
    "multifamily": "Placement",
    "mixedUse": "Placement",
    "loanSize": "",
    "notes": "Multifamily and mixed-use; reported placements include 5-unit buildings.",
    "sources": [
      {
        "label": "Capital Services",
        "url": "https://www.arielpa.nyc/what-we-do/capital-services"
      },
      {
        "label": "NY mixed-use placement",
        "url": "https://arielpa.nyc/news/press-releases/ariel-property-advisors-arranges-8-million-cash-out-refinance-loan-for-east-village-mixed-use-property"
      }
    ]
  },
  {
    "id": "clopton-capital",
    "name": "Clopton Capital",
    "role": "Broker / marketplace",
    "group": "Broker / marketplace",
    "access": "Placement / referral",
    "accessDetails": "Placement or introduction. The final lender and broker compensation are deal-specific.",
    "fundingEvidence": "Explicitly matches borrowers to lenders.",
    "coverage": "",
    "multifamily": "Placement",
    "mixedUse": "Placement",
    "loanSize": "",
    "notes": "Multifamily and mixed-use. Apartment page advertises $750K–$50M+ arranged financing.",
    "sources": [
      {
        "label": "Broker disclosure",
        "url": "https://cloptoncapital.com/"
      },
      {
        "label": "Apartment placement",
        "url": "https://cloptoncapital.com/apartment-building-loans/"
      }
    ]
  },
  {
    "id": "commercial-loan-direct",
    "name": "Commercial Loan Direct",
    "role": "Broker / marketplace",
    "group": "Broker / marketplace",
    "access": "Placement / referral",
    "accessDetails": "Placement or introduction. The final lender and broker compensation are deal-specific.",
    "fundingEvidence": "Terms state CLD is not the direct lender, creditor or issuer of products displayed on the site.",
    "coverage": "",
    "multifamily": "Placement",
    "mixedUse": "Placement",
    "loanSize": "",
    "notes": "Multifamily and mixed-use; also solicits broker referrals. Confirm legal funder for any quoted deal.",
    "sources": [
      {
        "label": "Funding disclosure",
        "url": "https://commercialloandirect.com/terms"
      },
      {
        "label": "Property programs",
        "url": "https://www.cldfinancial.com/services.html"
      },
      {
        "label": "Broker program",
        "url": "https://commercialloandirect.com/affiliates-referrals-commercial-loan-direct-website-brokers-program"
      }
    ]
  },
  {
    "id": "commloan",
    "name": "CommLoan",
    "role": "Broker / marketplace",
    "group": "Broker / marketplace",
    "access": "Placement / referral",
    "accessDetails": "Placement or introduction. The final lender and broker compensation are deal-specific.",
    "fundingEvidence": "Its CRE platform connects borrowers and brokers to third-party lenders.",
    "coverage": "",
    "multifamily": "Placement",
    "mixedUse": "",
    "loanSize": "",
    "notes": "Useful for discovering banks/funds and pricing leads; actual lender sets credit terms and fees.",
    "sources": [
      {
        "label": "Marketplace disclosure",
        "url": "https://www.commloan.com/about-us"
      },
      {
        "label": "Broker platform",
        "url": "https://www.commloan.com/mortgage-brokers"
      }
    ]
  },
  {
    "id": "eastern-union",
    "name": "Eastern Union",
    "role": "Broker / marketplace",
    "group": "Broker / marketplace",
    "access": "Placement / referral",
    "accessDetails": "Placement or introduction. The final lender and broker compensation are deal-specific.",
    "fundingEvidence": "Officially describes itself as a national brokerage with banking relationships.",
    "coverage": "",
    "multifamily": "Placement",
    "mixedUse": "Placement",
    "loanSize": "",
    "notes": "Multifamily and mixed-use. Ask for the actual lender, broker fee and permission before duplicate submissions.",
    "sources": [
      {
        "label": "Brokerage disclosure",
        "url": "https://easternunion.com/hiringbrokers/"
      },
      {
        "label": "CRE segments",
        "url": "https://easternunion.com/"
      }
    ]
  },
  {
    "id": "gparency",
    "name": "GPARENCY",
    "role": "Broker / marketplace",
    "group": "Broker / marketplace",
    "access": "Placement / referral",
    "accessDetails": "Placement or introduction. The final lender and broker compensation are deal-specific.",
    "fundingEvidence": "Connects borrowers to lenders through brokers or its marketplace.",
    "coverage": "",
    "multifamily": "Placement",
    "mixedUse": "Placement",
    "loanSize": "",
    "notes": "Lists multifamily and mixed-use executions; benchmark rates are indicative, provided by the marketplace.",
    "sources": [
      {
        "label": "CRE marketplace",
        "url": "https://marketplace.prod.gparency.com/"
      },
      {
        "label": "Brokerage",
        "url": "https://gparency.com/mortgage-assurance-broker/"
      }
    ]
  },
  {
    "id": "harpoon-capital",
    "name": "Harpoon Capital",
    "role": "Broker / marketplace",
    "group": "Broker / marketplace",
    "access": "Placement / referral",
    "accessDetails": "Placement or introduction. The final lender and broker compensation are deal-specific.",
    "fundingEvidence": "Identifies itself as a licensed mortgage brokerage, NMLS 2815329.",
    "coverage": "",
    "multifamily": "Placement",
    "mixedUse": "",
    "loanSize": "",
    "notes": "Small MF DSCR, including 5+; broker advertises some small loan sizes. Confirm property and partner restrictions.",
    "sources": [
      {
        "label": "Broker disclosure",
        "url": "https://harpooncapital.com/"
      },
      {
        "label": "Multifamily DSCR guide",
        "url": "https://harpooncapital.com/dscr-loans-guide/multifamily-dscr-loans-full-guide"
      }
    ]
  },
  {
    "id": "highcap-group",
    "name": "Highcap Group",
    "role": "Broker / marketplace",
    "group": "Broker / marketplace",
    "access": "Placement / referral",
    "accessDetails": "Placement or introduction. The final lender and broker compensation are deal-specific.",
    "fundingEvidence": "Third-party transaction explicitly identifies Highcap as arranging broker and Ponce as lender.",
    "coverage": "",
    "multifamily": "Placement",
    "mixedUse": "Placement",
    "loanSize": "",
    "notes": "NYC-focused CRE placement, including mixed-use and multifamily; some national work.",
    "sources": [
      {
        "label": "Financing desk",
        "url": "https://highcapgroup.com/financing"
      },
      {
        "label": "Broker and lender named separately",
        "url": "https://traded.co/deals/new-york/mixed-use/loan/12-36-31st-drive/"
      }
    ]
  },
  {
    "id": "janover-capital",
    "name": "Janover Capital",
    "role": "Broker / marketplace",
    "group": "Broker / marketplace",
    "access": "Placement / referral",
    "accessDetails": "Placement or introduction. The final lender and broker compensation are deal-specific.",
    "fundingEvidence": "Officially arranges debt through agency, banks, credit unions, CMBS, HUD, insurers and funds.",
    "coverage": "",
    "multifamily": "Placement",
    "mixedUse": "Placement",
    "loanSize": "",
    "notes": "5+ multifamily and mixed-use. Commercial placement page lists $1M–$100M+.",
    "sources": [
      {
        "label": "How Janover arranges loans",
        "url": "https://janover.co/about/"
      },
      {
        "label": "Commercial placements",
        "url": "https://janover.co/commercial-property-loans/"
      }
    ]
  },
  {
    "id": "lev",
    "name": "Lev",
    "role": "Broker / marketplace",
    "group": "Broker / marketplace",
    "access": "Placement / referral",
    "accessDetails": "Placement or introduction. The final lender and broker compensation are deal-specific.",
    "fundingEvidence": "Product helps financing teams find and reach third-party lenders.",
    "coverage": "",
    "multifamily": "Placement",
    "mixedUse": "",
    "loanSize": "",
    "notes": "CRE financing discovery and execution workflow. Identify the actual lender before counting an offer.",
    "sources": [
      {
        "label": "Lender matching workflow",
        "url": "https://www.lev.com/for/financing"
      },
      {
        "label": "Platform description",
        "url": "https://www.lev.com/docs/trust"
      }
    ]
  },
  {
    "id": "luxe",
    "name": "Luxe Private Investments",
    "role": "Broker / marketplace",
    "group": "Broker / marketplace",
    "access": "Broker access unverified",
    "accessDetails": "Broker placement; wholesale funder unverified",
    "fundingEvidence": "Broker / intermediary",
    "coverage": "",
    "multifamily": "5–10 per forum offer",
    "mixedUse": "",
    "loanSize": "$250K–$3M per forum offer",
    "notes": "DSCR term lead. A company representative calls the work brokering in a second BiggerPockets thread. Property and pricing figures cited in forums are unverified marketing. Mixed-use: Excluded in forum offer.",
    "sources": [
      {
        "label": "Program",
        "url": "https://www.biggerpockets.com/forums/517/topics/1317259-dscr-loans-for-5-10-unit-multifamily-purchase-and-refi"
      },
      {
        "label": "Broker program or channel",
        "url": "https://www.biggerpockets.com/forums/517/topics/1302663-multifamily-financing-purchase-or-cash-out-options-up-to-3m"
      }
    ],
    "multifamilyRange": {
      "min": 5,
      "max": 10
    }
  },
  {
    "id": "meridian-capital-group",
    "name": "Meridian Capital Group",
    "role": "Broker / marketplace",
    "group": "Broker / marketplace",
    "access": "Placement / referral",
    "accessDetails": "Placement or introduction. The final lender and broker compensation are deal-specific.",
    "fundingEvidence": "Official mortgage brokerage desk arranges debt.",
    "coverage": "",
    "multifamily": "Placement",
    "mixedUse": "Placement",
    "loanSize": "",
    "notes": "Multifamily and mixed-use nationwide; trade outlet lists Meridian as broker on a 6-unit Brooklyn refinance.",
    "sources": [
      {
        "label": "Mortgage brokerage",
        "url": "https://www.meridiancapital.com/mortgage-brokerage/"
      },
      {
        "label": "6-unit transaction",
        "url": "https://traded.co/deals/new-york/multifamily/loan/455-greene-avenue/"
      }
    ]
  },
  {
    "id": "park-hill-finance",
    "name": "Park Hill Finance",
    "role": "Broker / marketplace",
    "group": "Broker / marketplace",
    "access": "Placement / referral",
    "accessDetails": "Placement or introduction. The final lender and broker compensation are deal-specific.",
    "fundingEvidence": "Says it places debt with third-party institutions and funds.",
    "coverage": "",
    "multifamily": "Placement",
    "mixedUse": "",
    "loanSize": "",
    "notes": "Commercial real estate placement; broker described an 8-unit Lakewood acquisition closing, 6.02% five-year fixed, 30-year amortization and no prepay. Capital provider unnamed.",
    "sources": [
      {
        "label": "Financing network",
        "url": "https://parkhillfinance.com/"
      },
      {
        "label": "Broker-reported transaction",
        "url": "https://www.linkedin.com/in/brandon-rogers-955456a"
      }
    ]
  },
  {
    "id": "select-commercial-funding",
    "name": "Select Commercial Funding",
    "role": "Broker / marketplace",
    "group": "Broker / marketplace",
    "access": "Placement / referral",
    "accessDetails": "Placement or introduction. The final lender and broker compensation are deal-specific.",
    "fundingEvidence": "Says it arranges loan placement with lenders across programs.",
    "coverage": "",
    "multifamily": "Placement",
    "mixedUse": "Placement",
    "loanSize": "",
    "notes": "5+ apartments and mixed-use; national capital placement; FAQ gives $1.5M general floor.",
    "sources": [
      {
        "label": "Broker services",
        "url": "https://selectcommercial.com/about/services/"
      },
      {
        "label": "Program FAQ",
        "url": "https://selectcommercial.com/faqs/"
      }
    ]
  }
];

export const communityNotes: CommunityNote[] = [
  {
    "title": "Brokers First Funding / Velocity / LendSure / Deephaven",
    "kind": "Firsthand reports and sales replies",
    "text": "One commenter says BFF's AE closed their 8-unit deal quickly. The original poster says they previously used Velocity. LendSure's quoted range is from a company-affiliated reply and lacks a comparable scenario.",
    "source": {
      "label": "Read the original source",
      "url": "https://www.reddit.com/r/loanoriginators/comments/1r2jvlm/5_unit/"
    }
  },
  {
    "title": "NQM Funding / Champions Funding / LendSure / AAA Lendings / Deephaven",
    "kind": "Broker discussion",
    "text": "One originator reports a generally smooth NQM 6-family rate/term refinance after an appraisal dispute was resolved. Champions feedback was mixed, including a tough seller-financed file approved and another originator describing recent follow-up or file problems. Some users report poor LendSure turn times or late conditions. Other AAA and Deephaven anecdotes are broad DSCR or onboarding evidence; unit counts unknown.",
    "source": {
      "label": "Read the original source",
      "url": "https://www.reddit.com/r/loanoriginators/comments/1uy54ec/dscr_lender_love/"
    }
  },
  {
    "title": "Cake Mortgage / Easy Street Capital / RCN Capital",
    "kind": "Broker report and lead request",
    "text": "One respondent reports a few successful files with Cake when the property is a legal, conforming 6-unit and praises the process. Easy Street and RCN were named in the question, without a documented six-unit use in the replies.",
    "source": {
      "label": "Read the original source",
      "url": "https://www.biggerpockets.com/forums/22/topics/1271036-dscr-lender-for-6-unit-in-indianapolis-anyone-used-easy-street-or-rcn"
    }
  },
  {
    "title": "LendSure / LoanStream",
    "kind": "Referral leads and lender promotion",
    "text": "Originators suggested LendSure and LoanStream for apartments. A LendSure representative advertised pricing, without lock date, terms or points suitable for comparison.",
    "source": {
      "label": "Read the original source",
      "url": "https://www.reddit.com/r/loanoriginators/comments/1vgaku2/does_anybody_still_do_58_unit_dscr_loans/"
    }
  },
  {
    "title": "Velocity / Silver Hill Capital / Roc360",
    "kind": "Broker-reported experience",
    "text": "A BiggerPockets poster identifying as a broker reported good results with Velocity and Silver Hill in an older general DSCR discussion. Collateral type and transaction terms were absent. Other posts raised concerns about Roc360, but property and affiliate roles vary.",
    "source": {
      "label": "Read the original source",
      "url": "https://www.biggerpockets.com/forums/50/topics/1078106-looking-for-hard-money-dscr-lenders"
    }
  },
  {
    "title": "Easy Street Capital",
    "kind": "Independent review platform",
    "text": "Reviewers include an investor reporting delays on two DSCR applications and another praising responsiveness through an appraisal issue. The property counts are not given.",
    "source": {
      "label": "Read the original source",
      "url": "https://www.trustpilot.com/review/easystreetcap.com"
    }
  },
  {
    "title": "LendingStreet",
    "kind": "Employee-reported closing",
    "text": "Employee reported an $850K cash-out refinance of a 12-unit Midwest value-add property. The capital source and note rate are unstated.",
    "source": {
      "label": "Read the original source",
      "url": "https://www.linkedin.com/posts/alyssalendingstreet_love-this-team-and-love-this-company-activity-7467241357779189761-EjDm"
    }
  },
  {
    "title": "Brass Financial Group",
    "kind": "Lender-reported closing",
    "text": "Company LinkedIn reported an 8-unit mixed-use commercial refinance introduced by a broker and said it provided the funding.",
    "source": {
      "label": "Read the original source",
      "url": "https://www.linkedin.com/posts/brass-financial-group_commerciallending-realestate-investor-activity-7420531771387146240-cdR0"
    }
  },
  {
    "title": "American Heritage Lending",
    "kind": "Lender webinar",
    "text": "Official YouTube webinar covers wholesale 5–10-unit DSCR financing. Evidence of product marketing rather than third-party service or rates.",
    "source": {
      "label": "Read the original source",
      "url": "https://www.youtube.com/watch?v=jE4L1kbBtgw"
    }
  },
  {
    "title": "Avidbank",
    "kind": "Borrower-reported historical pricing",
    "text": "Anonymous investor reports a May 2025 commercial loan at 6.15% and 1.20× DSCR. No disclosed property type, fees, fixed period or prepay.",
    "source": {
      "label": "Read the original source",
      "url": "https://www.reddit.com/r/realestateinvesting/comments/1osb210/what_are_your_recent_dscr_rates_looking_like/"
    }
  },
  {
    "title": "Dominion Financial",
    "kind": "Firsthand investor reports",
    "text": "One BiggerPockets investor reported a smooth six-unit closing in Brooklyn with extra entity guaranties. Another reported delays on a construction-to-DSCR refinance.",
    "source": {
      "label": "BiggerPockets discussion",
      "url": "https://www.biggerpockets.com/forums/49/topics/1115034-dominion-financial-company"
    }
  }
];

export const priceNotes: PriceNote[] = [
  {
    "name": "RCN Capital",
    "rate": "From 6.25%",
    "terms": "Advertised for 5–9 unit 30-year multifamily, $150K–$1.5M. Confirm points, prepay and broker terms. RCN's cited mixed-use product is bridge.",
    "source": {
      "label": "Lender FAQ",
      "url": "https://rcncapital.com/faqs"
    }
  },
  {
    "name": "Silt Capital",
    "rate": "From 6.75%",
    "terms": "Advertised commercial DSCR starting rate for 5+ multifamily and mixed-use, $500K–$10M. Confirm leverage, fixed period, points and prepay.",
    "source": {
      "label": "Commercial DSCR terms",
      "url": "https://siltcapital.com/commercial-dscr"
    }
  },
  {
    "name": "Maverick Lending NYC",
    "rate": "From 6.99%",
    "terms": "Broker page advertises 5–10 apartments and 2–8 mixed-use, $350K–$4M. Funding entity independently unverified.",
    "source": {
      "label": "Broker program",
      "url": "https://www.mavericklendingnyc.com/broker-program"
    }
  },
  {
    "name": "IceCap / BluFin",
    "rate": "From 7.25%",
    "terms": "IceCap advertises this starting rate for 5–9 apartments and 2–8 mixed-use. Confirm that it applies through BluFin on the same terms.",
    "source": {
      "label": "IceCap program",
      "url": "https://icecapgroup.com/loan-products/dscr/"
    }
  },
  {
    "name": "Maspeth Federal Savings",
    "rate": "7.25% initial",
    "terms": "Nov. 23, 2026 apartment rate. 5/5/5 balloon, 25-year payout, up to 65% LTV, zero points and no prepay. 10-year balloon 7.625%, 15-year fully amortizing fixed 8.125%.",
    "source": {
      "label": "Bank CRE rates",
      "url": "https://www.maspethfederal.com/borrow/commercial-real-estate"
    }
  },
  {
    "name": "Self Reliance Financial FCU",
    "rate": "From 6.00%",
    "terms": "Published 12-year fixed, fully amortizing example. The six-year balloon starts at 6.40% with 30-year amortization. Membership applies.",
    "source": {
      "label": "Commercial lending program",
      "url": "https://srffcu.com/commercial-loans/"
    }
  },
  {
    "name": "Ponce Bank",
    "rate": "6.25%",
    "terms": "Reported September 2026 closing. $2.2M Astoria mixed-use refinance, five apartments plus one store, five-year term, 30-year amortization. Highcap arranged it.",
    "source": {
      "label": "Reported transaction",
      "url": "https://traded.co/deals/new-york/mixed-use/loan/12-36-31st-drive/"
    }
  },
  {
    "name": "Dime Community Bank",
    "rate": "Below 6%",
    "terms": "Reported October 2026 closing. $5M Brooklyn mixed-use refinance with a three-year term. Points and prepay terms were undisclosed.",
    "source": {
      "label": "Reported transaction",
      "url": "https://traded.co/deals/new-york/mixed-use/loan/185-bedford-avenue/"
    }
  },
  {
    "name": "Northmarq agency indications",
    "rate": "6.25%–6.75%",
    "terms": "Nov. 18, 2026 grid, 10-year terms at 80% LTV and 1.25× DSCR. Freddie 6.25%–6.45%; Fannie 6.45%–6.75%, with sub-$6M Fannie quotes by inquiry.",
    "source": {
      "label": "Dated indications",
      "url": "https://www.northmarq.com/insights/rates-spreads"
    }
  }
];

