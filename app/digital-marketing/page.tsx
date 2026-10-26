import { digitalMarketingQuestions } from "../data/digital-marketing-content";
import { withSocialMetadata } from "../lib/social-metadata";
import { PageStructuredData } from "../components/structured-data";
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

export const metadata: Metadata = withSocialMetadata({ alternates: { canonical: "/digital-marketing" },
  title: "Digital Marketing | Growthys",
  description: "Welcome to a growth journey built on data, creativity, and consistency. Discover how strategy turns attention into customers — not just likes.",
}, "/digital-marketing");

export default function DigitalMarketingPage() {
  return (
    <>
      <main className="bg-[#f8f7f2]"><PageStructuredData path="/digital-marketing" metadata={metadata} />
        <DigitalMarketingHero />
        <DriverBenefits />
        <CreativeMarquee />
        <DigitalBlogShowcase />
        <TravelVideoShowcase />
        <PinnedProcess />
        <BenefitsCta digitalMarketing />
        <FaqSection items={digitalMarketingQuestions} eyebrow="Trusted by: Startups · D2C Brands · Clinics · Real Estate Firms · Manufacturers" />
      </main>
      <SiteFooter onHomePage={false} contactHref="/contact#contact-inquiry" faqHref="#faq" />
    </>
  );
}
