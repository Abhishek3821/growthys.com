import type { Metadata } from "next";
import UiUxHero from "../components/ui-ux-hero";
import UiUxBenefits from "../components/ui-ux-benefits";
import UiUxPlatform from "../components/ui-ux-platform";
import UiUxLearningBenefits from "../components/ui-ux-learning-benefits";
import UiUxTeamFeatures from "../components/ui-ux-team-features";
import UiUxBusinessSolutions from "../components/ui-ux-business-solutions";
import UiUxEveryday from "../components/ui-ux-everyday";
import UiUxTennisCommunity from "../components/ui-ux-tennis-community";
import UiUxTestimonials from "../components/ui-ux-testimonials";
import BenefitsCta from "../components/benefits-cta";
import FaqSection from "../components/faq-section";
import SiteFooter from "../components/site-footer";

export const metadata: Metadata = { title: "UI/UX Design | Growthys", description: "Explore expressive UI/UX design and imaginative digital experiences with Growthys." };
export default function UiUxDesignPage() {
  return (
    <>
      <main>
        <UiUxHero />
        <UiUxBenefits />
        <UiUxPlatform />
        <UiUxLearningBenefits />
        <UiUxTeamFeatures />
        <UiUxBusinessSolutions />
        <UiUxEveryday />
        <UiUxTennisCommunity />
        <UiUxTestimonials />
        <BenefitsCta />
        <FaqSection />
      </main>
      <SiteFooter onHomePage={false} contactHref="/contact#contact-inquiry" faqHref="#faq" />
    </>
  );
}
