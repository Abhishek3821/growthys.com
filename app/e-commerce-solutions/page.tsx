import { ecommerceContent } from "../data/ecommerce-content";
import { withSocialMetadata } from "../lib/social-metadata";
import { PageStructuredData } from "../components/structured-data";
import type { Metadata } from "next";
import EcommerceHero from "../components/ecommerce-hero";
import FitnessServiceCards from "../components/fitness-service-cards";
import GymAmenities from "../components/gym-amenities";
import SkincareStats from "../components/skincare-stats";
import BrandingSteps from "../components/branding-steps";
import EcommerceFeatureTabs from "../components/ecommerce-feature-tabs";
import BlueInfographic from "../components/blue-infographic";
import BenefitsCta from "../components/benefits-cta";
import FaqSection from "../components/faq-section";
import SiteFooter from "../components/site-footer";

export const metadata: Metadata = withSocialMetadata({ alternates: { canonical: "/e-commerce-solutions" },
  title: "E-Commerce Solutions | Growthys",
  description: ecommerceContent.hero.description,
}, "/e-commerce-solutions");

export default function EcommerceSolutionsPage() {
  return (
    <>
      <main className="bg-[#fffcf8]"><PageStructuredData path="/e-commerce-solutions" metadata={metadata} />
        <EcommerceHero />
        <FitnessServiceCards ecommerce />
        <GymAmenities ecommerce />
        <SkincareStats ecommerce />
        <BrandingSteps ecommerce />
        <EcommerceFeatureTabs />
        <BlueInfographic ecommerce />
        <BenefitsCta ecommerce />
        <FaqSection items={ecommerceContent.faqs} eyebrow={ecommerceContent.cta.trusted} />
      </main>
      <SiteFooter onHomePage={false} contactHref="/contact#contact-inquiry" faqHref="#faq" />
    </>
  );
}
