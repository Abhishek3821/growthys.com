import type { Metadata } from "next";
import CrmHero from "../components/crm-hero";
import CrmProcess from "../components/crm-process";
import CrmTeamCollage from "../components/crm-team-collage";
import CrmWhatWeOffer from "../components/crm-what-we-offer";
import CrmClientProfiles from "../components/crm-client-profiles";
import CrmCommitment from "../components/crm-commitment";
import CrmMarketDrivers from "../components/crm-market-drivers";
import BenefitsCta from "../components/benefits-cta";
import FaqSection from "../components/faq-section";
import SiteFooter from "../components/site-footer";

export const metadata: Metadata = {
  title: "CRM & Management Software | Growthys",
  description: "Explore CRM and management software solutions with Growthys. Start your journey with experiences built around your goals.",
};

export default function CrmManagementSoftwarePage() {
  return (
    <>
      <main>
        <CrmHero />
        <CrmProcess />
        <CrmTeamCollage />
        <CrmWhatWeOffer />
        <CrmClientProfiles />
        <CrmCommitment />
        <CrmMarketDrivers />
        <BenefitsCta />
        <FaqSection />
      </main>
      <SiteFooter onHomePage={false} contactHref="/contact#contact-inquiry" faqHref="#faq" />
    </>
  );
}
