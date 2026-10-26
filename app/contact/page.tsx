import type { Metadata } from "next";
import { withSocialMetadata } from "../lib/social-metadata";
import { PageStructuredData } from "../components/structured-data";
import ContactHero from "../components/contact-hero";
import ContactDetails from "../components/contact-details";
import TeamCta from "../components/team-cta";
import SiteFooter from "../components/site-footer";

export const metadata: Metadata = withSocialMetadata({ alternates: { canonical: "/contact" },
  title: "Contact Us | Growthys",
  description: "Every project begins with a simple message. Tell us where you want your business to go, and we’ll help you plan the route.",
}, "/contact");

export default function ContactPage() {
  return (
    <>
      <main><PageStructuredData path="/contact" metadata={metadata} />
        <ContactHero />
        <ContactDetails />
        <TeamCta />
      </main>
      <SiteFooter onHomePage={false} />
    </>
  );
}
