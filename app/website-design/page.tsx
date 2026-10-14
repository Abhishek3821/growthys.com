import type { Metadata } from "next";
import WebsiteDesignHero from "../components/website-design-hero";
import DesignClasses from "../components/design-classes";
import DesignToolsShowcase from "../components/design-tools-showcase";
import WebsiteFeatures from "../components/website-features";
import MindspaceSection from "../components/mindspace-section";
import TravelServiceShowcase from "../components/travel-service-showcase";
import LearningBenefits from "../components/learning-benefits";
import BenefitsCta from "../components/benefits-cta";
import FaqSection from "../components/faq-section";
import SiteFooter from "../components/site-footer";

export const metadata: Metadata = {
  title: "Website Design | Growthys",
  description: "Beyond color. Pure emotion. Discover thoughtful website design and timeless visual storytelling with Growthys.",
};

export default function WebsiteDesignPage() {
  return (
    <>
      <main className="bg-white">
        <WebsiteDesignHero />
        <DesignClasses />
        <DesignToolsShowcase />
        <WebsiteFeatures />
        <MindspaceSection />
        <TravelServiceShowcase />
        <LearningBenefits />
        <BenefitsCta />
        <FaqSection />
      </main>
      <SiteFooter onHomePage={false} contactHref="/contact#contact-inquiry" faqHref="#faq" />
    </>
  );
}
