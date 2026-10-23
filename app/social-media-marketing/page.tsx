import { socialMediaContent } from "../data/social-media-content";
import type { Metadata } from "next";
import SocialMediaHero from "../components/social-media-hero";
import SocialMediaCurriculum from "../components/social-media-curriculum";
import SocialMediaHighImpact from "../components/social-media-high-impact";
import SocialMediaInstructor from "../components/social-media-instructor";
import SocialMediaServiceTiles from "../components/social-media-service-tiles";
import SocialMediaAboutCare from "../components/social-media-about-care";
import SocialMediaTravelArticles from "../components/social-media-travel-articles";
import BenefitsCta from "../components/benefits-cta";
import FaqSection from "../components/faq-section";
import SiteFooter from "../components/site-footer";

export const metadata: Metadata = {
  title: "Social Media Marketing | Growthys",
  description: socialMediaContent.hero.description,
};

export default function SocialMediaMarketingPage() {
  return (
    <>
      <main>
        <SocialMediaHero />
        <SocialMediaCurriculum />
        <SocialMediaHighImpact />
        <SocialMediaInstructor />
        <SocialMediaServiceTiles />
        <SocialMediaAboutCare />
        <SocialMediaTravelArticles />
        <BenefitsCta socialMedia />
        <FaqSection items={socialMediaContent.faqs} eyebrow={socialMediaContent.cta.trusted} />
      </main>
      <SiteFooter onHomePage={false} contactHref="/contact#contact-inquiry" faqHref="#faq" />
    </>
  );
}
