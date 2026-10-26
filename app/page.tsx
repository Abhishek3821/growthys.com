
import { withSocialMetadata } from "./lib/social-metadata";
import { PageStructuredData } from "./components/structured-data";
import siteStyles from "./site-styles";
﻿import CabinHero from "./components/cabin-hero";

import IntelligentExperiences from "./components/intelligent-experiences";
import PackagesSection from "./components/packages-section";
import TestimonialsSection from "./components/testimonials-section";
import ManagementSection from "./components/management-section";
import BankingSection from "./components/banking-section";
import TravelCardCarousel from "./components/travel-card-carousel";
import ProcessSection from "./components/process-section";
import InvestorInformation from "./components/investor-information";
import FaqSection from "./components/faq-section";
import BenefitsCta from "./components/benefits-cta";
import SiteFooter from "./components/site-footer";

import { homepageQuestions } from "./data/homepage-content";

export const metadata = withSocialMetadata({ alternates: { canonical: "/" },
  title: "Best IT Company That Grow Your Business | Growthys",
  description: "A complete digital marketing company built for one purpose — turning attention into revenue. From SEO to software development, from CRM & management software to HRMS software development, Growthys connects marketing and technology so your business grows without friction.",
}, "/");

export default function Home() {
  return (
    <>
    <main className={siteStyles["home-stage"]}><PageStructuredData path="/" metadata={metadata} />
      <CabinHero />
      <IntelligentExperiences />
      <PackagesSection />
      <TestimonialsSection />
      <ManagementSection />
      <BankingSection />
      <TravelCardCarousel />
      <ProcessSection />
      <InvestorInformation />
      <BenefitsCta homepage />
      <FaqSection items={homepageQuestions} eyebrow="Trusted by: Startups · D2C Brands · Clinics · Real Estate Firms · Manufacturers" />
    </main>
    <SiteFooter />
    </>
  );
}
