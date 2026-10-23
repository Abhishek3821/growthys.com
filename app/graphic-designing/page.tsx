import { graphicDesignContent } from "../data/graphic-design-content";
import type { Metadata } from "next";
import GraphicDesigningHero from "../components/graphic-designing-hero";
import CandyEvents from "../components/candy-events";
import GraphicContentSections from "../components/graphic-content-sections";
import BenefitsCta from "../components/benefits-cta";
import FaqSection from "../components/faq-section";
import SiteFooter from "../components/site-footer";

export const metadata: Metadata = {
  title: "Graphic Designing | Growthys",
  description: graphicDesignContent.hero.description,
};

export default function GraphicDesigningPage() {
  return (
    <>
      <main>
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
