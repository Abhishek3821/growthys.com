import { appDevelopmentContent } from "../data/app-development-content";
import { withSocialMetadata } from "../lib/social-metadata";
import { PageStructuredData } from "../components/structured-data";
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

export const metadata: Metadata = withSocialMetadata({ alternates: { canonical: "/app-development" },
  title: "App Development | Growthys",
  description: appDevelopmentContent.hero.description,
}, "/app-development");

export default function AppDevelopmentPage() {
  return (
    <><main><PageStructuredData path="/app-development" metadata={metadata} />
      <AppDevelopmentHero />
      <AppDevelopmentApproach />
      <AppDevelopmentPark />
      <AppDevelopmentAgenda />
      <AppDevelopmentParkAbout />
      <AppDevelopmentPetCare />
      <AppDevelopmentGallery />
      <BenefitsCta appDevelopment />
      <FaqSection items={appDevelopmentContent.faqs} eyebrow={appDevelopmentContent.cta.trusted} />
    </main>
    <SiteFooter onHomePage={false} contactHref="/contact#contact-inquiry" faqHref="#faq" /></>
  );
}
