import { crmContent } from "../data/crm-content";
import { withSocialMetadata } from "../lib/social-metadata";
import { PageStructuredData } from "../components/structured-data";
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

export const metadata: Metadata = withSocialMetadata({ alternates: { canonical: "/crm-management-software" },
  title: "CRM Management Software | Growthys",
  description: crmContent.hero.description,
}, "/crm-management-software");

export default function CrmManagementSoftwarePage() {
  return (
    <>
      <main><PageStructuredData path="/crm-management-software" metadata={metadata} />
        <CrmHero />
        <CrmProcess />
        <CrmTeamCollage />
        <CrmWhatWeOffer />
        <CrmClientProfiles />
        <CrmCommitment />
        <CrmMarketDrivers />
        <BenefitsCta crm />
        <FaqSection items={crmContent.faqs} eyebrow={crmContent.cta.trusted} />
      </main>
      <SiteFooter onHomePage={false} contactHref="/contact#contact-inquiry" faqHref="#faq" />
    </>
  );
}
