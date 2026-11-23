import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wholesale DSCR Desk",
  description: "Compare wholesale, bank, private capital and institutional financing for multifamily or mixed-use, and track broker quotes.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
