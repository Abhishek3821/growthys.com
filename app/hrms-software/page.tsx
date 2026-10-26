import type { Metadata } from "next";
import { withSocialMetadata } from "../lib/social-metadata";
import { PageStructuredData } from "../components/structured-data";
import { hrmsContent } from "../data/hrms-content";
import HrmsHero from "../components/hrms-hero";
import HrmsServices from "../components/hrms-services";
import HrmsPortfolio from "../components/hrms-portfolio";
import HrmsDesignerProfile from "../components/hrms-designer-profile";
import HrmsStrategy from "../components/hrms-strategy";
import HrmsSelectedProjects from "../components/hrms-selected-projects";
import HrmsJennyAbout from "../components/hrms-jenny-about";
import HrmsEditorialAbout from "../components/hrms-editorial-about";
import HrmsAwards from "../components/hrms-awards";
import BenefitsCta from "../components/benefits-cta";
import FaqSection from "../components/faq-section";
import SiteFooter from "../components/site-footer";

export const metadata: Metadata = withSocialMetadata({ alternates: { canonical: "/hrms-software" },
  title: "HRMS Software | Growthys",
  description: hrmsContent.hero.description,
}, "/hrms-software");

export default function HrmsSoftwarePage() {
  return (
    <>
      <main><PageStructuredData path="/hrms-software" metadata={metadata} />
        <HrmsHero />
        <HrmsServices />
        <HrmsPortfolio />
        <HrmsDesignerProfile />
        <HrmsStrategy />
        <HrmsSelectedProjects />
        <HrmsJennyAbout />
        <HrmsEditorialAbout />
        <HrmsAwards />
        <BenefitsCta hrms />
        <FaqSection items={hrmsContent.faqs} eyebrow={hrmsContent.cta.trusted} />
      </main>
      <SiteFooter onHomePage={false} contactHref="/contact#contact-inquiry" faqHref="#faq" />
    </>
  );
}
