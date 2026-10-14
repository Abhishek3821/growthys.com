"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const cards = [
  { title: "Enjoy the moment", description: "Listen to your favorite music and relax anytime", action: "Start listening", image: "headphones", background: "bg-[#c6baf2]" },
  { title: "Celebrate your wins", description: "Track progress, achieve goals and celebrate success", action: "View progress", image: "trophy", background: "bg-[#f1efaa]" },
  { title: "Shop your favorites", description: "Discover great products and enjoy a smooth shopping experience", action: "Start shopping", image: "shopping", background: "bg-[#a3fa95]" },
  { title: "Find your passion", description: "Explore ideas and make work that inspires you", action: "Get inspired", image: "star", background: "bg-[#f0b9d9]" },
  { title: "Make yourself heard", description: "Record, share, and express your voice with confidence", action: "Speak up", image: "microphone", background: "bg-[#c5cad6]" },
  { title: "Enjoy special offers", description: "Discover great deals and enjoy exclusive discounts on your favorite products", action: "View offers", image: "offers", background: "bg-[#edb0be]" },
  { title: "Play your way", description: "Stay active, have fun and build your next adventure", action: "Explore more", image: "tennis", background: "bg-[#c1edf1]" },
  { title: "Share your ideas", description: "Spread the word and connect with a wider audience", action: "Share now", image: "megaphone", background: "bg-[#bdd0fa]" },
  { title: "Approval made simple", description: "Review your documents and get everything approved with ease", action: "Check status", image: "approval", background: "bg-[#b8e3dc]" },
] as const;

const rows = [[0, 1, 2, 7, 8], [3, 4, 5, 0, 1], [6, 7, 8, 2, 4]];

export default function CreativeMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <section aria-labelledby="creative-marquee-heading" data-paused={paused} className="group/marquee relative mx-auto max-w-[1800px] overflow-hidden bg-[#211e39] py-6 sm:py-8">
      <h2 id="creative-marquee-heading" className="sr-only">Creative experiences for every moment</h2>
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
                          <Image src={`/images/digital-marketing/marquee/${card.image}.webp`} alt="" fill sizes="280px" className="object-contain" />
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
