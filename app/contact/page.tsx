import type { Metadata } from "next";
import ContactHero from "../components/contact-hero";
import ContactDetails from "../components/contact-details";
import TeamCta from "../components/team-cta";
import SiteFooter from "../components/site-footer";

export const metadata: Metadata = {
  title: "Contact Us | Growthys",
  description: "Have an idea or a project in mind? Start a conversation with Growthys.",
};

export default function ContactPage() {
  return (
    <>
      <main>
        <ContactHero />
        <ContactDetails />
        <TeamCta />
      </main>
      <SiteFooter onHomePage={false} />
    </>
  );
}
