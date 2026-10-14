import type { Metadata } from "next";
import CmsDesignHero from "../components/cms-design-hero";
import CmsAgenda from "../components/cms-agenda";
import CmsTeamSection from "../components/cms-team-section";
import CmsTeamHighlight from "../components/cms-team-highlight";
import CmsEducation from "../components/cms-education";
import CmsServices from "../components/cms-services";
import CmsLearningCollage from "../components/cms-learning-collage";
import BenefitsCta from "../components/benefits-cta";
import FaqSection from "../components/faq-section";
import SiteFooter from "../components/site-footer";

export const metadata: Metadata = {
  title: "CMS Design | Growthys",
  description: "Explore bold visual experiences and expressive CMS design with Growthys.",
};

export default function CmsDesignPage() {
  return (
    <>
      <main>
        <CmsDesignHero />
        <CmsAgenda />
        <CmsTeamSection />
        <CmsTeamHighlight />
        <CmsEducation />
        <CmsServices />
        <CmsLearningCollage />
        <BenefitsCta />
        <FaqSection />
      </main>
      <SiteFooter onHomePage={false} contactHref="/contact#contact-inquiry" faqHref="#faq" />
    </>
  );
}
