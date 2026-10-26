import { contentMarketingContent } from "../data/content-marketing-content";
import { withSocialMetadata } from "../lib/social-metadata";
import { PageStructuredData } from "../components/structured-data";
import type { Metadata } from "next";
import ContentMarketingHero from "../components/content-marketing-hero";
import ContentMarketingAbout from "../components/content-marketing-about";
import ContentMarketingExperience from "../components/content-marketing-experience";
import ContentMarketingDesigner from "../components/content-marketing-designer";
import ContentMarketingParentTrust from "../components/content-marketing-parent-trust";
import ContentMarketingCareSafety from "../components/content-marketing-care-safety";
import ContentMarketingSelectedWork from "../components/content-marketing-selected-work";
import ContentMarketingProducts from "../components/content-marketing-products";
import BenefitsCta from "../components/benefits-cta";
import FaqSection from "../components/faq-section";
import SiteFooter from "../components/site-footer";

export const metadata: Metadata = withSocialMetadata({ alternates: { canonical: "/content-marketing" }, title: "Content Marketing | Growthys", description: contentMarketingContent.hero.description }, "/content-marketing");
export default function ContentMarketingPage() {
  return (
    <>
      <main><PageStructuredData path="/content-marketing" metadata={metadata} />
        <ContentMarketingHero />
        <ContentMarketingAbout />
        <ContentMarketingExperience />
        <ContentMarketingDesigner />
        <ContentMarketingParentTrust />
        <ContentMarketingCareSafety />
        <ContentMarketingSelectedWork />
        <ContentMarketingProducts />
        <BenefitsCta contentMarketing />
        <FaqSection items={contentMarketingContent.faqs} eyebrow={contentMarketingContent.cta.trusted} />
      </main>
      <SiteFooter onHomePage={false} contactHref="/contact#contact-inquiry" faqHref="#faq" />
    </>
  );
}
