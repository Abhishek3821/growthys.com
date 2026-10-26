import type { Metadata } from "next";
import "./globals.css";
import siteStyles from "./site-styles";
import SitePreloader from "./components/site-preloader";
import { withSocialMetadata } from "./lib/social-metadata";
import { JsonLd } from "./components/structured-data";
import { businessGraph } from "./lib/structured-data";

export const metadata: Metadata = withSocialMetadata({
  metadataBase: new URL("https://www.growthys.com"),
  title: "Growthys | Digital Marketing & IT Solutions",
  description: "Growthys brings digital marketing, design, and software development together to help businesses grow.",
}, "/");

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={siteStyles.document}><body><JsonLd data={businessGraph} /><SitePreloader /><div id="site-content">{children}</div></body></html>;
}
