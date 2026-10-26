import { graphicDesignContent } from "../data/graphic-design-content";
import { withSocialMetadata } from "../lib/social-metadata";
import { PageStructuredData } from "../components/structured-data";
import type { Metadata } from "next";
import GraphicDesigningHero from "../components/graphic-designing-hero";
import CandyEvents from "../components/candy-events";
import GraphicContentSections from "../components/graphic-content-sections";
import BenefitsCta from "../components/benefits-cta";
import FaqSection from "../components/faq-section";
import SiteFooter from "../components/site-footer";

export const metadata: Metadata = withSocialMetadata({ alternates: { canonical: "/graphic-designing" },
  title: "Graphic Designing | Growthys",
  description: graphicDesignContent.hero.description,
}, "/graphic-designing");

export default function GraphicDesigningPage() {
  return (
    <>
      <main><PageStructuredData path="/graphic-designing" metadata={metadata} />
        <GraphicDesigningHero />
        <CandyEvents />
        <GraphicContentSections />
        <BenefitsCta graphicDesign />
        <FaqSection items={graphicDesignContent.faqs} eyebrow={graphicDesignContent.cta.trusted} />
      </main>
      <SiteFooter onHomePage={false} contactHref="/contact#contact-inquiry" faqHref="#faq" />
    </>
  );
}
