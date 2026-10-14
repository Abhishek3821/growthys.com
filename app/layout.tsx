import type { Metadata } from "next";
import "./globals.css";
import siteStyles from "./site-styles";

export const metadata: Metadata = {
  title: "CABIN&WILD — Lost in the Woods",
  description: "A collection of one of a kind stays in the woods. From the simple and understated to unexpected grandeur.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={siteStyles.document}><body>{children}</body></html>;
}
