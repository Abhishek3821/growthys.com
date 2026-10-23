import Image from "next/image";
import Link from "next/link";
import MarketingTestimonials from "./marketing-testimonials";

function Arrow({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={`size-5 ${direction === "left" ? "rotate-180" : ""}`} aria-hidden="true">
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

export default function MarketingPartner() {
  return (
    <section aria-labelledby="marketing-partner-heading" className="mx-auto mb-6 mt-6 grid max-w-[1800px] gap-4 lg:grid-cols-[minmax(0,3.65fr)_minmax(240px,1fr)] lg:gap-5">
      <div className="relative isolate flex min-h-[420px] flex-col overflow-hidden rounded-[24px] bg-[#062d43] px-6 py-8 text-white sm:px-9 sm:py-10 lg:min-h-[400px] lg:px-10 xl:min-h-[440px]">
        <Image src="/images/services/performance-marketing/growth-partner.webp" alt="Growth strategists reviewing campaign performance and planning improvements together" fill quality={95} sizes="(max-width: 1023px) 100vw, 78vw" className="-z-20 object-cover object-[65%_center]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,39,59,0.98)_0%,rgba(3,44,65,0.88)_30%,rgba(3,44,65,0.30)_62%,rgba(3,44,65,0.04)_100%)]" />
        <p className="mb-4 max-w-[75%] text-[10px] font-medium tracking-[0.25em] text-[#92c8d4] sm:text-xs">YOUR GROWTH PARTNER</p>
        <h2 id="marketing-partner-heading" className="max-w-[500px] text-[clamp(36px,4.3vw,64px)] font-semibold leading-[1.02] tracking-[-0.035em]">
          A Growth Partner,<br />Not Just an Agency.
        </h2>
        <p className="mt-5 max-w-[390px] text-base leading-[1.45] text-[#e3edf1] sm:text-lg">
          We don&apos;t disappear after setting up a campaign. We stay involved — testing, adjusting, and reporting — because performance marketing is a continuous process, not a one-time task.
        </p>
        <Link href="/contact#contact-inquiry" className="mt-6 inline-flex min-h-12 w-fit items-center gap-6 rounded-full bg-[#b2edf0] px-7 py-3 text-sm font-semibold text-[#103b4b] shadow-[0_0_24px_rgba(131,230,235,0.2)] transition-colors hover:bg-[#d0f8fa] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b2edf0] sm:min-h-14 sm:text-base">
          Book a Call <Arrow />
        </Link>
        <div className="absolute right-6 top-8 hidden text-sm font-medium leading-tight text-[#143443] sm:block lg:right-8 lg:top-10 lg:text-base">
          Test<br />Adjust<br />Grow
          <span className="mt-4 block h-0.5 w-8 bg-[#4f8b8d]" />
        </div>
      </div>

      <MarketingTestimonials />
    </section>
  );
}
