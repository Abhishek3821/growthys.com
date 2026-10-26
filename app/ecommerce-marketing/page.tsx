import { ecommerceMarketingContent } from "../data/ecommerce-marketing-content";
import { withSocialMetadata } from "../lib/social-metadata";
import { PageStructuredData } from "../components/structured-data";
import type { Metadata } from "next";
import EcommerceMarketingHero from "../components/ecommerce-marketing-hero";
import EcommerceMarketingAbout from "../components/ecommerce-marketing-about";
import EcommerceMarketingPosition from "../components/ecommerce-marketing-position";
import EcommerceMarketingInstitution from "../components/ecommerce-marketing-institution";
import EcommerceMarketingHobbies from "../components/ecommerce-marketing-hobbies";
import EcommerceMarketingEducation from "../components/ecommerce-marketing-education";
import EcommerceMarketingVolunteer from "../components/ecommerce-marketing-volunteer";
import BenefitsCta from "../components/benefits-cta";
import FaqSection from "../components/faq-section";
import SiteFooter from "../components/site-footer";

export const metadata: Metadata = withSocialMetadata({ alternates: { canonical: "/ecommerce-marketing" },
  title: "Ecommerce Marketing | Growthys",
  description: ecommerceMarketingContent.about.paragraphs[0],
}, "/ecommerce-marketing");

export default function EcommerceMarketingPage() {
  return (
    <>
      <main><PageStructuredData path="/ecommerce-marketing" metadata={metadata} />
        <EcommerceMarketingHero />
        <EcommerceMarketingAbout />
        <EcommerceMarketingPosition />
        <EcommerceMarketingInstitution />
        <EcommerceMarketingHobbies />
        <EcommerceMarketingEducation />
        <EcommerceMarketingVolunteer />
        <BenefitsCta ecommerceMarketing />
        <FaqSection items={ecommerceMarketingContent.faqs} eyebrow={ecommerceMarketingContent.cta.trusted} />
      </main>
      <SiteFooter onHomePage={false} contactHref="/contact#contact-inquiry" faqHref="#faq" />
    </>
  );
}
