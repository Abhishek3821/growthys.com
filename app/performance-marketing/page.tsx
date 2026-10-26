import { performanceQuestions } from "../data/performance-marketing-content";
import { withSocialMetadata } from "../lib/social-metadata";
import { PageStructuredData } from "../components/structured-data";
import { performanceFeatures as features } from "../data/performance-marketing-content";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import MarketingServices from "../components/marketing-services";
import MarketingPartner from "../components/marketing-partner";
import MarketingResults from "../components/marketing-results";
import CapitalGrowth from "../components/capital-growth";
import ProductShowcase from "../components/product-showcase";
import EmotionalStrain from "../components/emotional-strain";
import BenefitsCta from "../components/benefits-cta";
import FaqSection from "../components/faq-section";
import SiteFooter from "../components/site-footer";
import campaignGrowth from "../../public/images/services/performance-marketing/campaign-growth-hero.webp";

export const metadata: Metadata = withSocialMetadata({ alternates: { canonical: "/performance-marketing" },
  title: "Performance Marketing | Growthys",
  description: "We plan, launch, and optimize paid campaigns that bring you leads and sales — not just traffic. Every rupee you spend is tracked, tested, and pushed toward a result you can measure.",
}, "/performance-marketing");



function FeatureIcon({ icon }: { icon: typeof features[number]["icon"] }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5" aria-hidden="true">
      {icon === "target" ? <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><path d="M12 2v3m0 14v3M2 12h3m14 0h3" /></> : icon === "spark" ? <><path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z" /><path d="m19 2 .8 2.2L22 5l-2.2.8L19 8l-.8-2.2L16 5l2.2-.8L19 2Z" /></> : <><path d="M4 19V13m6 6V9m6 10V5M3 8l6-4 5 2 7-4m-4 0h4v4" /><path d="M2 21h20" /></>}
    </svg>
  );
}

export default function PerformanceMarketingPage() {
  return (
    <>
    <main className="min-h-svh bg-[#fffefa] p-2 text-[#252823] sm:p-3 lg:p-4"><PageStructuredData path="/performance-marketing" metadata={metadata} />
      <section className="relative mx-auto max-w-[1800px] lg:h-[calc(100svh-32px)] lg:[--feature-height:clamp(210px,30svh,264px)]" aria-labelledby="performance-heading">
        <div className="relative isolate flex min-h-[620px] flex-col overflow-hidden rounded-[26px] bg-[#626954] px-6 pb-7 pt-5 sm:px-9 lg:h-[calc(100%-100px)] lg:min-h-0 lg:px-10 lg:pb-7 lg:[clip-path:polygon(0_0,100%_0,100%_calc(100%_-_var(--feature-height)_+_84px),44%_calc(100%_-_var(--feature-height)_+_84px),34%_100%,0_100%)]">
          <Image src={campaignGrowth} alt="Performance marketing workspace with paid campaign analytics, conversion funnels, and ad creatives" fill quality={95} preload placeholder="blur" sizes="100vw" className="-z-30 object-cover object-bottom" />
          <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(105deg,rgba(51,62,48,0.68)_0%,rgba(152,103,43,0.22)_48%,rgba(28,35,45,0.25)_100%)]" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_65%_32%,rgba(255,227,140,0.8),rgba(238,167,90,0.38)_35%,transparent_75%)] mix-blend-screen" />

          <header className="relative flex min-h-[50px] items-center justify-center">
            <Navbar onHomePage={false} currentPage="/performance-marketing" />
          </header>

          <div className="mt-20 max-w-[940px] text-white sm:mt-24 lg:mt-[clamp(24px,6svh,72px)] lg:max-w-[80%] lg:max-[1200px]:mt-20">
            <span className="inline-flex rounded-full bg-[#fffefa] px-4 py-2 text-xs font-medium tracking-[-0.02em] text-[#53574d]">Performance Marketing</span>
            <h1 id="performance-heading" className="mt-6 text-[clamp(42px,6.1vw,98px)] font-normal leading-[1.04] tracking-[-0.065em] lg:mt-4 lg:text-[clamp(36px,min(5vw,8svh),84px)]">
              Turn Ad Spend Into<br className="hidden sm:block" /> Real Business<br className="hidden sm:block" /> Growth
            </h1>
          </div>

          <p className="mt-7 max-w-[220px] text-sm leading-relaxed text-white/90 lg:absolute lg:right-10 lg:bottom-[calc(var(--feature-height)-60px)] lg:max-w-[190px]">Smart campaigns. Clear numbers. Better returns.</p>
          <Link href="/contact#contact-inquiry" className="mt-8 inline-flex min-h-12 w-fit items-center gap-9 rounded-xl bg-[#fffefa] px-6 py-3 text-sm font-medium text-[#b97938] transition-colors hover:bg-[#f8ebd9] focus-visible:outline-2 focus-visible:outline-offset-4 lg:mt-auto">
            Let&apos;s grow <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="relative mt-5 grid gap-5 lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0 lg:grid-cols-[44%_minmax(0,1fr)] lg:items-end lg:gap-x-0">
          <p className="order-2 max-w-[380px] px-2 text-sm leading-relaxed text-[#808278] sm:px-5 lg:order-1 lg:pr-10 lg:text-xs lg:leading-[1.5]">We plan, launch, and optimize paid campaigns that bring you leads and sales — not just traffic. Every rupee you spend is tracked, tested, and pushed toward a result you can measure.</p>
          <div className="order-1 grid min-w-0 gap-3 sm:grid-cols-3 lg:order-2 lg:h-[var(--feature-height)] lg:pl-4">
            {features.map((feature, index) => (
              <article key={feature.title} className="relative isolate flex min-h-[238px] flex-col overflow-hidden rounded-[23px] bg-[#484b47] p-6 text-white before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:bg-[repeating-linear-gradient(47deg,transparent_0_58px,rgba(255,255,255,0.035)_58px_112px)] lg:min-h-0 lg:p-4 xl:p-5">
                <div className="mb-9 flex items-center justify-between lg:mb-4">
                  <span className="grid size-10 place-items-center rounded-full bg-[#fffefa] text-[#343a31] lg:size-8"><FeatureIcon icon={feature.icon} /></span>
                  {index === 0 && <Link href="/contact#contact-inquiry" aria-label="Discuss your performance marketing strategy" className="grid size-10 place-items-center rounded-full bg-[#e6a05b] text-xl text-white outline-[6px] outline-[#fffefa] transition-colors hover:bg-[#d78e49] lg:size-8 lg:outline-4">↗</Link>}
                </div>
                <h2 className="mt-auto text-[15px] font-medium leading-snug tracking-[-0.025em] lg:text-[13px] xl:text-[15px]">{feature.title}</h2>
                <p className="mt-3 text-xs leading-[1.5] text-[#d0d2c9] lg:mt-2 lg:text-[11px] xl:text-xs">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <MarketingServices />
      <MarketingPartner />
      <MarketingResults />
      <CapitalGrowth />
      <ProductShowcase />
      <EmotionalStrain />
      <div className="mx-auto max-w-[1800px] overflow-hidden">
        <BenefitsCta performanceMarketing />
        <FaqSection items={performanceQuestions} eyebrow="Trusted by: Startups · D2C Brands · Clinics · Real Estate Firms · Service Businesses" />
      </div>
    </main>
    <SiteFooter onHomePage={false} contactHref="/contact#contact-inquiry" faqHref="#faq" />
    </>
  );
}
