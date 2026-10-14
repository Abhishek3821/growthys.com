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

export const metadata: Metadata = {
  title: "E-Commerce Solutions | Growthys",
  description: "Augmented reality and product visualisation solutions for your business. Explore immersive e-commerce experiences with Growthys.",
};

export default function EcommerceSolutionsPage() {
  return (
    <>
      <main className="bg-[#fffcf8]">
        <EcommerceHero />
        <FitnessServiceCards />
        <GymAmenities />
        <SkincareStats />
        <BrandingSteps />
        <EcommerceFeatureTabs />
        <BlueInfographic />
        <BenefitsCta />
        <FaqSection />
      </main>
      <SiteFooter onHomePage={false} contactHref="/contact#contact-inquiry" faqHref="#faq" />
    </>
  );
}
