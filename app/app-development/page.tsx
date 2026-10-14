import type { Metadata } from "next";
import AppDevelopmentHero from "../components/app-development-hero";
import AppDevelopmentApproach from "../components/app-development-approach";
import AppDevelopmentPark from "../components/app-development-park";
import AppDevelopmentAgenda from "../components/app-development-agenda";
import AppDevelopmentParkAbout from "../components/app-development-park-about";
import AppDevelopmentPetCare from "../components/app-development-pet-care";
import AppDevelopmentGallery from "../components/app-development-gallery";
import BenefitsCta from "../components/benefits-cta";
import FaqSection from "../components/faq-section";
import SiteFooter from "../components/site-footer";

export const metadata: Metadata = {
  title: "App Development | Growthys",
  description: "Build impactful digital experiences with Growthys app development, strategy, and design.",
};

export default function AppDevelopmentPage() {
  return (
    <><main>
      <AppDevelopmentHero />
      <AppDevelopmentApproach />
      <AppDevelopmentPark />
      <AppDevelopmentAgenda />
      <AppDevelopmentParkAbout />
      <AppDevelopmentPetCare />
      <AppDevelopmentGallery />
      <BenefitsCta />
      <FaqSection />
    </main>
    <SiteFooter onHomePage={false} contactHref="/contact#contact-inquiry" faqHref="#faq" /></>
  );
}
