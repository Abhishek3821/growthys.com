"use client";

import { digitalMarketingServices } from "../data/digital-marketing-content";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const cards = [
  { title: digitalMarketingServices[0].title, description: digitalMarketingServices[0].description, action: "Discuss your goals", image: "service-seo", background: "bg-[#c6baf2]" },
  { title: digitalMarketingServices[1].title, description: digitalMarketingServices[1].description, action: "Discuss your goals", image: "service-conversion", background: "bg-[#f1efaa]" },
  { title: digitalMarketingServices[2].title, description: digitalMarketingServices[2].description, action: "Discuss your goals", image: "service-social", background: "bg-[#a3fa95]" },
  { title: digitalMarketingServices[3].title, description: digitalMarketingServices[3].description, action: "Discuss your goals", image: "service-paid-ads", background: "bg-[#f0b9d9]" },
  { title: digitalMarketingServices[6].title, description: digitalMarketingServices[6].description, action: "Discuss your goals", image: "service-pr", background: "bg-[#c5cad6]" },
  { title: digitalMarketingServices[7].title, description: digitalMarketingServices[7].description, action: "Discuss your goals", image: "service-promotions", background: "bg-[#edb0be]" },
  { title: digitalMarketingServices[4].title, description: digitalMarketingServices[4].description, action: "Discuss your goals", image: "service-analytics", background: "bg-[#c1edf1]" },
  { title: digitalMarketingServices[5].title, description: digitalMarketingServices[5].description, action: "Discuss your goals", image: "service-brand-trust", background: "bg-[#bdd0fa]" },
  { title: digitalMarketingServices[0].title, description: digitalMarketingServices[0].description, action: "Discuss your goals", image: "service-seo", background: "bg-[#b8e3dc]" },
] as const;

const rows = [[0, 1, 2, 7, 8], [3, 4, 5, 0, 1], [6, 7, 8, 2, 4]];

export default function CreativeMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <section aria-labelledby="creative-marquee-heading" data-paused={paused} className="group/marquee relative mx-auto max-w-[1800px] overflow-hidden bg-[#211e39] py-6 sm:py-8">
      <h2 id="creative-marquee-heading" className="sr-only">Marketing Solutions for Every Business Moment</h2>
      <div className="grid gap-5 sm:gap-6">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="overflow-hidden motion-reduce:overflow-x-auto">
            <div className={`flex w-max animate-creative-marquee motion-reduce:animate-none group-data-[paused=true]/marquee:[animation-play-state:paused] ${rowIndex === 1 ? "[animation-direction:reverse] [animation-duration:48s]" : rowIndex === 2 ? "[animation-duration:46s]" : ""}`} style={{ animationDelay: `${-rowIndex * 9 - 4}s` }}>
              {[false, true].map((duplicate) => (
                <ul key={String(duplicate)} aria-hidden={duplicate ? true : undefined} className={`flex shrink-0 gap-5 pr-5 sm:gap-6 sm:pr-6 ${duplicate ? "motion-reduce:hidden" : ""}`}>
                  {row.map((cardIndex) => {
                    const card = cards[cardIndex];
                    return (
                      <li key={cardIndex} className={`relative isolate flex h-[205px] w-[320px] shrink-0 flex-col justify-center overflow-hidden rounded-[24px] p-6 text-[#101017] sm:h-[240px] sm:w-[390px] lg:h-[260px] lg:w-[440px] lg:p-7 ${card.background}`}>
                        <div className="relative z-10 w-[52%]">
                          <h3 className="text-[26px] font-bold leading-[1.05] tracking-[-0.035em] lg:text-[32px]">{card.title}</h3>
                          <p className="mt-3 text-[10px] leading-tight text-[#484753] lg:text-xs">{card.description}</p>
                          <Link href="/contact#contact-inquiry" tabIndex={duplicate ? -1 : undefined} aria-label={`${card.action}: discuss ${card.title.toLowerCase()} with Growthys`} className="mt-4 inline-flex min-h-9 items-center rounded-full bg-white/65 px-4 py-1.5 text-[10px] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#211e39] lg:text-xs">{card.action}</Link>
                        </div>
                        <div className="pointer-events-none absolute -right-5 inset-y-1 -z-10 w-[64%]">
                          <Image src={`/images/digital-marketing/graphics/${card.image}.webp`} alt="" fill quality={95} sizes="280px" className="object-contain" />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button type="button" onClick={() => setPaused((value) => !value)} aria-pressed={paused} aria-label={paused ? "Resume scrolling cards" : "Pause scrolling cards"} className="absolute bottom-3 right-4 z-20 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/30 bg-white/90 px-4 py-2 text-sm font-medium text-[#211e39] shadow-md backdrop-blur-sm hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:hidden">
        <span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span>{paused ? "Resume" : "Pause"}
      </button>
    </section>
  );
}
