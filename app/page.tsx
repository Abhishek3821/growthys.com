import CabinHero from "./components/cabin-hero";

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

export default function Home() {
  return (
    <>
    <main className="home-stage">
      <CabinHero />
      <IntelligentExperiences />
      <PackagesSection />
      <TestimonialsSection />
      <ManagementSection />
      <BankingSection />
      <TravelCardCarousel />
      <ProcessSection />
      <InvestorInformation />
      <BenefitsCta />
      <FaqSection />
    </main>
    <SiteFooter />
    </>
  );
}
