import { contentMarketingContent } from "../data/content-marketing-content";
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

export const metadata: Metadata = { title: "Content Marketing | Growthys", description: contentMarketingContent.hero.description };
export default function ContentMarketingPage() {
  return (
    <>
      <main>
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
