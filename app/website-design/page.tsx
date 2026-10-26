import { websiteDesignQuestions } from "../data/website-design-content";
import { withSocialMetadata } from "../lib/social-metadata";
import { PageStructuredData } from "../components/structured-data";
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

export const metadata: Metadata = withSocialMetadata({ alternates: { canonical: "/website-design" },
  title: "Website Design | Growthys",
  description: "Websites built to look beautiful, load fast, and turn visitors into customers.",
}, "/website-design");

export default function WebsiteDesignPage() {
  return (
    <>
      <main className="bg-white"><PageStructuredData path="/website-design" metadata={metadata} />
        <WebsiteDesignHero />
        <DesignClasses />
        <DesignToolsShowcase />
        <WebsiteFeatures />
        <MindspaceSection />
        <TravelServiceShowcase />
        <LearningBenefits />
        <BenefitsCta websiteDesign />
        <FaqSection items={websiteDesignQuestions} eyebrow="Trusted by: Startups · D2C Brands · Clinics · Real Estate Firms · Manufacturers" />
      </main>
      <SiteFooter onHomePage={false} contactHref="/contact#contact-inquiry" faqHref="#faq" />
    </>
  );
}
