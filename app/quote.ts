import { z } from "zod";
import { lenders } from "./lenders";

const optionalText = (max: number) => z.string().trim().max(max).default("");
const optionalNumber = (max: number, min = 0) => z.string().trim().max(18)
  .refine((value) => value === "" || (/^-?\d+(\.\d+)?$/.test(value) && Number(value) >= min && Number(value) <= max), "Enter a number within the indicated range.")
  .default("");
const optionalDate = z.string().trim().refine((value) => {
  if (value === "") return true;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(value + "T00:00:00Z");
  return !isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}, "Enter a valid date.").default("");

export const quoteFields = z.object({
  lenderId: z.string().refine((id) => lenders.some((lender) => lender.id === id), "Choose a lender."),
  scenario: z.string().trim().min(1, "Enter a scenario name.").max(100),
  property: z.enum(["", "Multifamily", "Mixed-use"]).default(""),
  units: optionalNumber(10000, 1).refine((value) => value === "" || Number.isInteger(Number(value)), "Enter a whole unit count."),
  date: optionalDate,
  expiration: optionalDate,
  amount: optionalNumber(1e9, 1),
  ltv: optionalNumber(100),
  fico: optionalNumber(850, 300).refine((value) => value === "" || Number.isInteger(Number(value)), "Enter a whole FICO score."),
  dscr: optionalNumber(100),
  rate: optionalNumber(100),
  points: optionalNumber(100, -100),
  fees: optionalNumber(1e8),
  compType: z.enum(["", "Borrower-paid", "Lender-paid", "Split"]).default(""),
  brokerComp: optionalNumber(100),
  term: optionalText(90),
  prepay: optionalText(180),
  notes: optionalText(1400),
});

export type QuoteFields = z.infer<typeof quoteFields>;
export type Quote = QuoteFields & { id: string; updatedAt: string };

export const blankQuote: QuoteFields = {
  lenderId: "", scenario: "", property: "", units: "", date: "", expiration: "",
  amount: "", ltv: "", fico: "", dscr: "", rate: "", points: "", fees: "",
  compType: "", brokerComp: "", term: "", prepay: "", notes: "",
};
