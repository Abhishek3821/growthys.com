import { graphicDesignContent } from "../data/graphic-design-content";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";

function DesignNib({ className, green = false }: { className: string; green?: boolean }) {
  return (
    <svg viewBox="0 0 42 56" className={className} fill={green ? "#c8d68a" : "#ffb090"} stroke={green ? "#8b9c54" : "#b76f51"} strokeWidth="1.6" aria-hidden="true">
      <path d="M11 4h20v11l6 21-16 17L5 36l6-21V4Z" /><path d="M11 12h20M21 53V29" fill="none" /><circle cx="21" cy="26" r="4" fill="none" />
    </svg>
  );
}

export default function GraphicDesigningHero() {
  return (
    <div className="min-h-svh overflow-hidden bg-[#fcf9f1] bg-[linear-gradient(rgba(210,102,117,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(210,102,117,0.10)_1px,transparent_1px)] bg-[length:32px_32px] px-5 pb-6 pt-4 text-[#833044] sm:px-8 lg:px-12">
      <header className="relative mx-auto mb-4 flex min-h-16 max-w-[1700px] items-start justify-center min-[701px]:max-[1200px]:min-h-[110px]">

        <Navbar onHomePage={false} currentPage="/graphic-designing" />
      </header>

      <section aria-labelledby="graphic-designing-heading" className="relative isolate mx-auto flex max-w-[1600px] flex-col lg:block lg:h-[calc(100svh-120px)] lg:max-h-[900px] lg:min-h-[570px]">
        <div className="relative z-10 pt-8 sm:pt-10 lg:w-[55%] lg:pl-5 lg:pt-[clamp(30px,5.5svh,70px)]">
          <p className="mb-7 text-[10px] font-bold tracking-[0.06em] sm:text-xs">{graphicDesignContent.hero.eyebrow}</p>
          <h1 id="graphic-designing-heading" className="max-w-[800px] font-[Georgia,'Times_New_Roman',serif] text-[clamp(44px,6.6vw,80px)] font-normal leading-[0.95] tracking-[-0.055em] lg:text-[clamp(48px,min(5vw,9svh),88px)]">Design That Makes<br className="hidden sm:block" /> Your Brand Impossible<br />to Ignore</h1>
          <p className="mt-8 max-w-[335px] text-sm leading-[1.4] tracking-[-0.025em] text-[#a36372] lg:mt-9 lg:text-base">{graphicDesignContent.hero.description}</p>
          <Link href="/contact#contact-inquiry" className="mt-7 inline-flex min-h-11 items-center justify-center rounded-sm bg-[#c7c4f8] px-5 py-3 text-[10px] font-bold tracking-[0.065em] text-[#8a3b55] transition-colors hover:bg-[#b9b5f0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#833044] lg:text-xs">BOOK A DESIGN CONSULTATION</Link>
          <svg viewBox="0 0 180 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pointer-events-none absolute -bottom-8 left-[190px] hidden h-24 w-44 -rotate-6 text-[#8a3b55] sm:block lg:left-[220px]" aria-hidden="true"><path d="M8 16c30 40 70 9 39-8-30-15-34 58 10 67 29 6 70-2 112-14m-16-5 17 5-12 16" /></svg>
        </div>

        <div className="relative -mx-3 mt-4 h-[380px] sm:h-[480px] lg:absolute lg:bottom-[3%] lg:right-[-3%] lg:top-0 lg:m-0 lg:h-auto lg:w-[65%]">
          <Image src="/images/graphic-designing/graphics/hero.webp" alt="Creative design workspace with a pen tablet, brand stationery, colour swatches and packaging mockups" quality={95} fill preload sizes="(max-width: 1023px) 100vw, 65vw" className="object-contain" />
          <p className="absolute right-2 top-[42%] -rotate-6 font-[Georgia,'Times_New_Roman',serif] text-sm font-bold italic leading-tight sm:right-0 sm:text-lg lg:right-[1%] lg:top-[40%] lg:text-xl" aria-hidden="true">made for<br />your brand!</p>
        </div>

        <DesignNib className="pointer-events-none absolute right-[4%] top-[8%] h-10 w-8 rotate-12 sm:right-[42%] lg:top-[31%]" />
        <DesignNib green className="pointer-events-none absolute bottom-0 left-[55%] h-10 w-8 -rotate-[25deg]" />
        <svg viewBox="0 0 42 50" fill="none" className="pointer-events-none absolute -left-2 top-[50%] h-11 w-8 -rotate-12 lg:top-[62%]" aria-hidden="true"><path d="M21 4C1 4-3 31 10 41c9 7 22 5 25-3 2-6-7-5-7-11 0-5 12-2 12-10C40 9 30 4 21 4Z" fill="#d83543" stroke="#a02937" strokeWidth="1.5" /><circle cx="11" cy="18" r="3" fill="#fa8e8f" /><circle cx="20" cy="12" r="3" fill="#f5e4a2" /><circle cx="30" cy="15" r="3" fill="#c7c4f8" /><circle cx="10" cy="29" r="3" fill="#c8d68a" /></svg>
        <svg viewBox="0 0 50 60" fill="none" className="pointer-events-none absolute right-[2%] top-0 h-12 w-10 rotate-12 lg:top-[5%]" aria-hidden="true"><path d="m20 36 16-30 7 4-17 30-6-4Z" fill="#c8d68a" stroke="#648145" strokeWidth="2" /><path d="M20 35c-12 1-5 16-15 18 17 6 25-6 21-13l-6-5Z" fill="#be3342" /><path d="m20 35 7 5" stroke="#d84a50" strokeWidth="3" /></svg>
        <svg viewBox="0 0 44 44" fill="none" stroke="#bd8790" strokeWidth="1.5" className="pointer-events-none absolute bottom-[7%] right-[3%] size-9 rotate-12" aria-hidden="true"><circle cx="22" cy="22" r="15" /><path d="m22 7 2 14 12-6-11 9 8 10-12-8-8 10 6-13L7 19l13-1 2-11Z" /></svg>
      </section>
    </div>
  );
}
