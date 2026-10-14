import type { Metadata } from "next";
import DigitalMarketingHero from "../components/digital-marketing-hero";
import DriverBenefits from "../components/driver-benefits";
import CreativeMarquee from "../components/creative-marquee";
import DigitalBlogShowcase from "../components/digital-blog-showcase";
import TravelVideoShowcase from "../components/travel-video-showcase";
import PinnedProcess from "../components/pinned-process";
import BenefitsCta from "../components/benefits-cta";
import FaqSection from "../components/faq-section";
import SiteFooter from "../components/site-footer";

export const metadata: Metadata = {
  title: "Digital Marketing | Growthys",
  description: "Visual poetry. Discover creative digital marketing and compelling storytelling with Growthys.",
};

export default function DigitalMarketingPage() {
  return (
    <>
      <main className="bg-[#f8f7f2]">
        <DigitalMarketingHero />
        <DriverBenefits />
        <CreativeMarquee />
        <DigitalBlogShowcase />
        <TravelVideoShowcase />
        <PinnedProcess />
        <BenefitsCta />
        <FaqSection />
      </main>
      <SiteFooter onHomePage={false} contactHref="/contact#contact-inquiry" faqHref="#faq" />
    </>
  );
}
