import { webDevelopmentContent } from "../data/web-development-content";
import { withSocialMetadata } from "../lib/social-metadata";
import { PageStructuredData } from "../components/structured-data";
import type { Metadata } from "next";
import WebDevelopmentHero from "../components/web-development-hero";
import WebDevelopmentWelcome from "../components/web-development-welcome";
import WebDevelopmentCurrentWork from "../components/web-development-current-work";
import WebDevelopmentMarketingTools from "../components/web-development-marketing-tools";
import WebDevelopmentSuccess from "../components/web-development-success";
import WebDevelopmentStrategy from "../components/web-development-strategy";
import WebDevelopmentReviews from "../components/web-development-reviews";
import WebDevelopmentOffers from "../components/web-development-offers";
import BenefitsCta from "../components/benefits-cta";
import FaqSection from "../components/faq-section";
import SiteFooter from "../components/site-footer";

export const metadata: Metadata = withSocialMetadata({ alternates: { canonical: "/web-development" },
  title: "Web Development | Growthys",
  description: webDevelopmentContent.hero.description,
}, "/web-development");

export default function WebDevelopmentPage() {
  return (
    <>
      <main><PageStructuredData path="/web-development" metadata={metadata} />
        <WebDevelopmentHero />
        <WebDevelopmentWelcome />
        <WebDevelopmentCurrentWork />
        <WebDevelopmentMarketingTools />
        <WebDevelopmentSuccess />
        <WebDevelopmentStrategy />
        <WebDevelopmentReviews />
        <WebDevelopmentOffers />
        <BenefitsCta webDevelopment />
        <FaqSection items={webDevelopmentContent.faqs} eyebrow={webDevelopmentContent.cta.trusted} />
      </main>
      <SiteFooter onHomePage={false} contactHref="/contact#contact-inquiry" faqHref="#faq" />
    </>
  );
}
