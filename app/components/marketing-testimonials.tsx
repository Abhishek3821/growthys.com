"use client";

import { performancePrinciples as testimonials } from "../data/performance-marketing-content";


import { useId, useRef, useState } from "react";



function Arrow({ left = false }: { left?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={`size-5 ${left ? "rotate-180" : ""}`} aria-hidden="true">
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

export default function MarketingTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const trackId = useId();

  function goTo(index: number) {
    const track = trackRef.current;
    if (!track) return;
    const nextIndex = (index + testimonials.length) % testimonials.length;
    track.scrollTo({
      left: nextIndex * track.clientWidth,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  return (
    <div role="region" aria-roledescription="carousel" aria-label="Our growth partnership" className="flex min-h-[440px] min-w-0 flex-col overflow-hidden rounded-[30px] bg-[#eaf5f7] text-[#103a50]">
      <div
        id={trackId}
        ref={trackRef}
        tabIndex={0}
        aria-label="Growth partnership cards. Use left and right arrow keys to navigate."
        className="flex min-w-0 flex-1 snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-[#447482]"
        onScroll={(event) => {
          const track = event.currentTarget;
          if (track.clientWidth > 0) {
            setActiveIndex(Math.max(0, Math.min(testimonials.length - 1, Math.round(track.scrollLeft / track.clientWidth))));
          }
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === "Home" || event.key === "End") {
            event.preventDefault();
            goTo(event.key === "Home" ? 0 : event.key === "End" ? testimonials.length - 1 : activeIndex + (event.key === "ArrowLeft" ? -1 : 1));
          }
        }}
      >
        {testimonials.map((testimonial, index) => (
          <figure key={testimonial.id} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${testimonials.length}`} className="w-full shrink-0 snap-start snap-always px-7 pb-4 pt-9 sm:px-9 lg:px-8">
            <span className="block h-12 font-serif text-[76px] leading-none" aria-hidden="true">“</span>
            <blockquote className="mt-4 text-[clamp(22px,2vw,28px)] leading-[1.43] tracking-[-0.035em]">
              {testimonial.quote}
            </blockquote>
            <figcaption className="mt-6 text-base text-[#587582]">— {testimonial.author}</figcaption>
          </figure>
        ))}
      </div>
      <div className="flex items-center justify-between gap-1 px-7 pb-8 pt-7 sm:px-9 lg:px-5">
        <button type="button" onClick={() => goTo(activeIndex - 1)} aria-label="Previous principle" aria-controls={trackId} className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-full bg-[#d6eff2] text-[#6c9aa5] transition-colors hover:bg-[#bde3e8] hover:text-[#103a50] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#447482]">
          <Arrow left />
        </button>
        <div className="flex items-center" aria-label="Choose a principle">
          {testimonials.map((testimonial, index) => (
            <button key={testimonial.id} type="button" onClick={() => goTo(index)} aria-label={`Go to principle ${index + 1}`} aria-current={activeIndex === index ? "true" : undefined} aria-controls={trackId} className="grid min-h-11 w-5 cursor-pointer place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-[#447482]">
              <span className={`size-2 rounded-full transition-colors ${activeIndex === index ? "bg-[#103a50]" : "bg-[#b8d9df]"}`} />
            </button>
          ))}
        </div>
        <button type="button" onClick={() => goTo(activeIndex + 1)} aria-label="Next principle" aria-controls={trackId} className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-full bg-[#d6eff2] text-[#6c9aa5] transition-colors hover:bg-[#bde3e8] hover:text-[#103a50] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#447482]">
          <Arrow />
        </button>
      </div>
      <p className="sr-only" aria-live="polite" aria-atomic="true">Principle {activeIndex + 1} of {testimonials.length}</p>
    </div>
  );
}
