import { seoContent } from "../data/seo-content";
import { withSocialMetadata } from "../lib/social-metadata";
import { PageStructuredData } from "../components/structured-data";
import type { Metadata } from "next";
import SeoHero from "../components/seo-hero";
import SeoServices from "../components/seo-services";
import SeoMarketing from "../components/seo-marketing";
import SeoHealthNeeds from "../components/seo-health-needs";
import SeoCareServices from "../components/seo-care-services";
import SeoEducation from "../components/seo-education";
import SeoReasons from "../components/seo-reasons";
import BenefitsCta from "../components/benefits-cta";
import FaqSection from "../components/faq-section";
import SiteFooter from "../components/site-footer";

export const metadata: Metadata = withSocialMetadata({ alternates: { canonical: "/search-engine-optimization" }, title: "Search Engine Optimization | Growthys", description: seoContent.hero.description }, "/search-engine-optimization");
export default function SeoPage() {
  return (
    <>
      <main><PageStructuredData path="/search-engine-optimization" metadata={metadata} />
        <SeoHero />
        <SeoServices />
        <SeoMarketing />
        <SeoHealthNeeds />
        <SeoCareServices />
        <SeoEducation />
        <SeoReasons />
        <BenefitsCta seo />
        <FaqSection items={seoContent.faqs} eyebrow={seoContent.cta.trusted} />
      </main>
      <SiteFooter onHomePage={false} contactHref="/contact#contact-inquiry" faqHref="#faq" />
    </>
  );
}
