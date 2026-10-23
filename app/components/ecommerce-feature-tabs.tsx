"use client";

import { ecommerceContent } from "../data/ecommerce-content";
import Image from "next/image";
import Link from "next/link";
import { useId, useRef, useState } from "react";

const tabs = ecommerceContent.tabs.map((tab) => tab.points);
const artwork = [
  { image: "features", alt: "Mobile storefront with product browsing, secure checkout and order tracking" },
  { image: "growth", alt: "Online boutique connected to sales analytics, search and marketing growth" },
  { image: "optimization", alt: "Fast mobile checkout with payment confirmation and synchronized inventory" },
] as const;

function FeatureIcon({ index }: { index: number }) {
  return (
    <span className={`grid size-9 shrink-0 place-items-center rounded-full text-white lg:size-10 ${["bg-[#6bb479]", "bg-[#a05dcc]", "bg-[#4874f6]"][index]}`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6" aria-hidden="true">
        {index === 0 && <><circle cx="12" cy="7" r="3" fill="currentColor" stroke="none" /><path d="M6 20v-3a6 6 0 0 1 12 0v3H6Z" fill="currentColor" stroke="none" /></>}
        {index === 1 && <><circle cx="12" cy="14" r="6" /><circle cx="12" cy="14" r="2" /><path d="m7 2 3 5m7-5-3 5M12 1v4" /></>}
        {index === 2 && <path d="m14 2-9 12h6l-1 8 9-13h-6l1-7Z" fill="currentColor" stroke="none" />}
      </svg>
    </span>
  );
}

export default function EcommerceFeatureTabs() {
  const [active, setActive] = useState(2);
  const id = useId();
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  function select(index: number) {
    setActive(index);
    buttons.current[index]?.focus();
  }

  return (
    <section aria-labelledby="ecommerce-feature-tabs-heading" className="mx-auto max-w-[1800px] bg-white px-5 py-12 text-[#464954] sm:px-7 lg:px-10 lg:py-16">
      <h2 id="ecommerce-feature-tabs-heading" className="sr-only">E-Commerce features, benefits, and solutions</h2>
      <div className="grid gap-6 md:grid-cols-[200px_minmax(0,1fr)] lg:gap-7 xl:grid-cols-[260px_minmax(0,1fr)]">
        <div role="tablist" aria-label="Feature categories" aria-orientation="vertical" className="flex flex-col gap-4 self-start">
          {tabs.map((_, index) => (
            <button key={index} ref={(element) => { buttons.current[index] = element; }} type="button" role="tab" id={`${id}-tab-${index}`} aria-label={ecommerceContent.tabs[index].label} aria-selected={active === index} aria-controls={`${id}-panel-${index}`} tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={(event) => {
              if (["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
                event.preventDefault();
                select(event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : (index + (event.key === "ArrowDown" ? 1 : -1) + tabs.length) % tabs.length);
              }
            }} className={`min-h-14 rounded-full px-7 py-4 text-left text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4874f6] lg:min-h-16 lg:text-base ${active === index ? "bg-[#d3dfff] font-semibold text-[#4874f6]" : "bg-[#f3f5fd] hover:bg-[#e7ecfb]"}`}>{ecommerceContent.tabs[index].label}</button>
          ))}
        </div>
        <div className="min-w-0">
          {tabs.map((points, tabIndex) => (
            <div key={tabIndex} id={`${id}-panel-${tabIndex}`} role="tabpanel" aria-labelledby={`${id}-tab-${tabIndex}`} tabIndex={0} hidden={active !== tabIndex} className={active === tabIndex ? "grid gap-8 rounded-[30px] bg-[#f3f5fe] p-6 focus-visible:outline-2 focus-visible:outline-[#4874f6] sm:p-8 lg:grid-cols-[1.55fr_1fr] lg:gap-12 lg:p-12" : "hidden"}>
              <div className="flex flex-col">
                <ul className="grid gap-7 lg:gap-8">
                  {points.map((point, index) => (
                    <li key={point.title} className="flex items-start gap-4 lg:gap-5">
                      <FeatureIcon index={index} />
                      <div>
                        <h3 className="text-base font-semibold leading-snug tracking-[-0.02em] lg:text-lg">{point.title}</h3>
                        <p className="mt-3 max-w-[620px] text-sm leading-[1.5] tracking-[-0.015em] text-[#858791] lg:text-base">{point.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <Link href="/contact#contact-inquiry" aria-label="Discuss these features with Growthys" className="ml-13 mt-8 inline-flex min-h-12 w-fit items-center justify-center rounded-lg bg-[#426cf5] px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-[#3157db] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#426cf5] lg:ml-15">Discuss Your Store</Link>
              </div>
              <div className="relative mx-auto aspect-[2/3] w-full max-w-[420px] overflow-hidden rounded-[14px] bg-[#a7d9f2] lg:aspect-auto lg:min-h-[490px]">
                <Image src={`/images/services/ecommerce-solutions/${artwork[tabIndex].image}.webp`} alt={artwork[tabIndex].alt} quality={95} fill sizes="(max-width: 767px) 90vw, (max-width: 1023px) 50vw, 420px" className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
