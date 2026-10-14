import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";

export default function CrmHero() {
  return (
    <div className="min-h-svh bg-[#0c0c0c] p-3 text-[#101010] sm:p-4 lg:p-5">
      <header className="relative mx-auto mb-4 flex min-h-16 max-w-[1800px] items-start justify-center text-white min-[701px]:max-[1200px]:min-h-[110px]">
        <Link href="/" aria-label="Growthys home" className="absolute left-3 top-2 text-2xl font-semibold tracking-[-0.055em] min-[701px]:max-[1200px]:top-[70px] max-[700px]:hidden">Growthys<span className="ml-1 align-top text-xs">®</span></Link>
        <Navbar onHomePage={false} currentPage="/crm-management-software" />
      </header>

      <section aria-labelledby="crm-hero-heading" className="mx-auto grid max-w-[1800px] gap-3 lg:h-[calc(100svh-120px)] lg:max-h-[1050px] lg:min-h-[660px] lg:grid-cols-[1.46fr_1fr] lg:grid-rows-[minmax(0,2.6fr)_minmax(190px,1fr)]">
        <div className="flex min-h-[520px] flex-col rounded-[24px] bg-white p-7 sm:p-10 lg:min-h-0 lg:p-[clamp(28px,3.2vw,56px)]">
          <p className="flex items-center gap-4 text-[10px] font-bold tracking-[-0.035em] sm:text-xs">
            <span className="flex gap-1" aria-hidden="true"><span className="h-6 w-3 bg-[#111]" /><span className="h-6 w-3 bg-[#ebdf00]" /></span>
            TIME FOR FITNESS — 23
          </p>
          <h1 id="crm-hero-heading" className="mt-8 text-[clamp(52px,8.5vw,94px)] font-black leading-[0.98] tracking-[-0.075em] lg:mt-[clamp(24px,4svh,46px)] lg:text-[clamp(62px,min(6.6vw,10.2svh),116px)]">
            OWN YOUR<br />STRENGTH,<br />OWN YOU
          </h1>
          <div className="mt-auto flex flex-wrap items-center gap-x-7 gap-y-5 pt-8 lg:gap-x-8 lg:pt-5">
            <Link href="/contact#contact-inquiry" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#0e0e0e] px-7 py-3 text-[10px] font-bold tracking-[-0.025em] text-white transition-colors hover:bg-[#333] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:px-10 sm:text-xs">START YOUR JOURNEY</Link>
            <div className="flex items-center gap-4">
              <svg viewBox="0 0 46 28" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" className="h-7 w-10" aria-hidden="true"><path d="M3 11v6m6-8v10m6-13v16m6-18v20m6-23v26m6-25v24m6-26v28" /></svg>
              <p className="text-[9px] font-semibold leading-tight tracking-[-0.02em] sm:text-[10px]">LUXURY FITNESS<br />EXPERIENCE</p>
            </div>
          </div>
        </div>

        <div className="relative isolate flex min-h-[460px] flex-col justify-end overflow-hidden rounded-[24px] bg-[#bba6ad] p-7 text-white lg:min-h-0 lg:p-8">
          <Image src="/images/services/crm-fitness-portrait.png" alt="A man with sunglasses and an orange jacket adjusting his collar" fill preload sizes="(max-width: 1023px) 95vw, 40vw" className="-z-20 object-cover object-[center_35%]" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-black/35 via-transparent to-transparent" aria-hidden="true" />
          <span className="absolute left-6 top-6 grid size-12 place-items-center rounded-full bg-[#111]" aria-hidden="true"><svg viewBox="0 0 30 30" fill="white" className="size-7"><path d="M5 5 15 10 25 5 20 15 25 25 15 20 5 25 10 15 5 5Z" /></svg></span>
          <p className="text-[clamp(24px,2.5vw,40px)] font-bold leading-[1.12] tracking-[-0.035em]">TRAIN ON YOUR<br />OWN TIME</p>
        </div>

        <div className="grid min-h-[210px] grid-cols-[0.8fr_1.6fr] items-stretch gap-5 rounded-[24px] bg-[#e9b4aa] p-5 lg:min-h-0 lg:gap-7 lg:p-6">
          <div className="relative isolate min-h-[170px] lg:min-h-0">
            <span className="absolute bottom-3 left-3 right-0 top-3 -z-10 rounded-[20px] bg-black" aria-hidden="true" />
            <div className="relative mr-4 h-full min-h-[170px] overflow-hidden rounded-[20px] bg-[#f5de00] lg:min-h-0"><Image src="/images/services/crm-contact-portrait.png" alt="A woman with a short dark bob against a yellow background" fill sizes="(max-width: 1023px) 30vw, 220px" className="object-cover" /></div>
          </div>
          <div className="flex flex-col justify-between py-2">
            <div className="flex items-start justify-between gap-3 text-[9px] font-semibold tracking-[-0.025em] xl:text-[11px]"><span>24/7 SUPPORT</span><span className="flex items-center gap-2 text-right">12834 FITNESS LN<br />BROOKLYN, NY<span className="grid size-7 shrink-0 place-items-center rounded-full bg-black text-[#e8e200]" aria-hidden="true"><svg viewBox="0 0 20 20" fill="currentColor" className="size-4"><path d="M10 1a6 6 0 0 0-6 6c0 5 6 12 6 12s6-7 6-12a6 6 0 0 0-6-6Zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" /></svg></span></span></div>
            <Link href="/contact#contact-inquiry" className="mt-7 w-fit text-[clamp(22px,2.1vw,34px)] font-bold leading-[1.08] tracking-[-0.045em] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">CONTACT US &amp; RISE<br />STRONGER</Link>
          </div>
        </div>

        <div className="flex min-h-[210px] flex-col justify-between rounded-[24px] bg-white p-6 lg:min-h-0 lg:p-6">
          <div className="flex items-center gap-4">
            <p className="text-[clamp(44px,4vw,64px)] font-semibold leading-none tracking-[-0.06em]">4.98</p>
            <div><p aria-label="5 stars" className="text-lg tracking-[0.08em] text-[#e2cb00]">★★★★★</p><p className="mt-1 text-[8px] text-[#656565] xl:text-[9px]">BASED ON 619 REVIEWS</p></div>
            <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="ml-auto size-9 shrink-0" aria-hidden="true"><path d="M10 6h10a10 10 0 0 1 0 20h-6m-7-9h17M9 26l8-17" /></svg>
          </div>
          <ul aria-label="Fitness facilities" className="mt-5 flex flex-wrap gap-1.5 text-[8px] font-medium tracking-[-0.025em] xl:gap-2 xl:text-[10px]">
            {["BOXING RING", "BASKETBALL COURTS", "↔", "JUICE BAR", "PERSONAL TRAINERS", "◉", "LOCKERS", "FREE PARKING"].map((facility) => <li key={facility} className="rounded-full border border-[#e1e1e1] px-3 py-2">{facility}</li>)}
          </ul>
        </div>
      </section>
    </div>
  );
}
