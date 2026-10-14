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

export const metadata: Metadata = { title: "Search Engine Optimization | Growthys", description: "Explore SEO and digital marketing services with Growthys." };
export default function SeoPage() {
  return (
    <>
      <main>
        <SeoHero />
        <SeoServices />
        <SeoMarketing />
        <SeoHealthNeeds />
        <SeoCareServices />
        <SeoEducation />
        <SeoReasons />
        <BenefitsCta />
        <FaqSection />
      </main>
      <SiteFooter onHomePage={false} contactHref="/contact#contact-inquiry" faqHref="#faq" />
    </>
  );
}
