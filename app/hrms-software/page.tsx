import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "HRMS Software | Growthys",
  description: hrmsContent.hero.description,
};

export default function HrmsSoftwarePage() {
  return (
    <>
      <main>
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
