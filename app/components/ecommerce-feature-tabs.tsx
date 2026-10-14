"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useRef, useState } from "react";

const tabs = [
  [
    { title: "Discover products with confidence.", description: "Bring your catalogue to life with clear product information and immersive visuals. Help customers explore the details that matter before they make a decision." },
    { title: "Create a connected shopping journey.", description: "Keep browsing simple with thoughtful navigation and a consistent experience across devices, from the first product view to the final checkout." },
    { title: "Build around your customers.", description: "Give shoppers a clear path forward with useful recommendations and an experience designed around their needs." },
  ],
  [
    { title: "Make your brand memorable.", description: "Connect your product story with a distinctive visual identity. Use consistent layouts and carefully considered details to make every page feel like your brand." },
    { title: "Turn attention into engagement.", description: "Present the right information at the right moment. Support product discovery with compelling content and a clear hierarchy that encourages exploration." },
    { title: "Keep your next step simple.", description: "Guide customers with clear calls to action and a shopping experience that feels natural from start to finish." },
  ],
  [
    { title: "Aliquam et leo eget diam.", description: "Nunc et nulla erat. Nam eget pellentesque nisi, porta scelerisque erat. Nulla ut pellentesque dui. Aenean tristique lacus ut odio fermentum rutrum sit amet et dui. Fusce eget nunc dictum, congue mauris et, vestibulum lacus. Nunc condimentum purus eu erat." },
    { title: "Aliquam et leo eget diam elementum.", description: "Pellentesque risus odio, vulputate ac bibendum id, condimentum id velit. Integer ultricies, orci sed porttitor placerat, risus lorem tincidunt dolor, ac scelerisque dui eros sit amet felis." },
    { title: "Integer mollis metus eget.", description: "Curabitur porttitor elit ac imperdiet eleifend. Suspendisse quis urna in est facilisis malesuada sit amet ut sem. Proin lacus magna, elementum eget finibus." },
  ],
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
      <h2 id="ecommerce-feature-tabs-heading" className="sr-only">Explore our features</h2>
      <div className="grid gap-6 md:grid-cols-[200px_minmax(0,1fr)] lg:gap-7 xl:grid-cols-[260px_minmax(0,1fr)]">
        <div role="tablist" aria-label="Feature categories" aria-orientation="vertical" className="flex flex-col gap-4 self-start">
          {tabs.map((_, index) => (
            <button key={index} ref={(element) => { buttons.current[index] = element; }} type="button" role="tab" id={`${id}-tab-${index}`} aria-label={`Feature Tab ${index + 1}`} aria-selected={active === index} aria-controls={`${id}-panel-${index}`} tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={(event) => {
              if (["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
                event.preventDefault();
                select(event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : (index + (event.key === "ArrowDown" ? 1 : -1) + tabs.length) % tabs.length);
              }
            }} className={`min-h-14 rounded-full px-7 py-4 text-left text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4874f6] lg:min-h-16 lg:text-base ${active === index ? "bg-[#d3dfff] font-semibold text-[#4874f6]" : "bg-[#f3f5fd] hover:bg-[#e7ecfb]"}`}>Feature Tab</button>
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
                <Link href="/contact#contact-inquiry" aria-label="Discuss these features with Growthys" className="ml-13 mt-8 inline-flex min-h-12 w-fit items-center justify-center rounded-lg bg-[#426cf5] px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-[#3157db] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#426cf5] lg:ml-15">Button Text</Link>
              </div>
              <div className="relative mx-auto aspect-[2/3] w-full max-w-[420px] overflow-hidden rounded-[14px] bg-[#a7d9f2] lg:aspect-auto lg:min-h-[490px]">
                <Image src="/images/services/ecommerce-feature-spheres.png" alt="Glossy pastel spheres stacked among coral forms above reflective pink water beneath a blue sky" fill sizes="(max-width: 767px) 90vw, (max-width: 1023px) 50vw, 420px" className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
