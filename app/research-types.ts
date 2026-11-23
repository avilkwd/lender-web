export const fundingRoles = [
  "Direct lender",
  "Bank / credit union",
  "Agency originator",
  "Lends and places deals",
  "Broker / marketplace",
  "Direct claim unverified",
] as const;

export const programGroups = [
  "Wholesale DSCR / Non-QM",
  "Bank / credit union",
  "Private capital",
  "Agency / institutional",
  "Broker / marketplace",
] as const;

export const accessTypes = [
  "Wholesale / TPO",
  "Commercial broker access",
  "Borrower-direct",
  "Placement / referral",
  "Broker access unverified",
] as const;

export type FundingRole = typeof fundingRoles[number];
export type ProgramGroup = typeof programGroups[number];
export type AccessType = typeof accessTypes[number];
export type EvidenceLink = { label: string; url: string };
export type UnitRange = { min: number; max?: number };

export type ResearchListing = {
  id: string;
  name: string;
  role: FundingRole;
  group: ProgramGroup;
  access: AccessType;
  accessDetails: string;
  fundingEvidence: string;
  coverage: string;
  multifamily: string;
  multifamilyRange?: UnitRange;
  mixedUse: string;
  mixedUseRange?: UnitRange;
  loanSize: string;
  notes: string;
  sources: EvidenceLink[];
  review?: string;
  reviewSources?: EvidenceLink[];
  price?: string;
  priceType?: string;
  fico?: string;
  dscr?: string;
};

export type CommunityNote = { title: string; kind: string; text: string; source: EvidenceLink };
export type PriceNote = { name: string; rate: string; terms: string; source: EvidenceLink };
