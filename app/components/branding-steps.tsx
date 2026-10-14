import Image from "next/image";
import type { CSSProperties } from "react";

const steps = [
  { title: "Discovery", description: "Understanding your brand and goals.", image: "discovery", alt: "A friendly discovery video call on a tilted tablet", paper: "#fff0e9", ink: "#ec6719", note: "Getting to know each other", angle: "9deg" },
  { title: "Conceptualization", description: "Sketching ideas and building foundation.", image: "concepts", alt: "Yellow sticky notes with hand-drawn logo concepts", paper: "#e5f6ff", ink: "#049ed5", note: "Multiple concepts for you", angle: "-12deg" },
  { title: "Refinement", description: "Iterating for perfection.", image: "refinement", alt: "Pink and purple app icons with geometric design grids", paper: "#f4e9fd", ink: "#7625bc", note: "Until we hit the sweet spot", angle: "10deg" },
  { title: "Delivery", description: "Providing a complete scalable identity.", image: "delivery", alt: "Three finished colourful app icons with distinct abstract brand marks", paper: "#fff0e9", ink: "#ec6719", note: "Complete file with all necessary formats", angle: "-12deg" },
] as const;

export default function BrandingSteps() {
  return (
    <section aria-labelledby="branding-steps-heading" className="mx-auto max-w-[1800px] overflow-hidden bg-[#f5f5f5] px-5 py-12 text-[#242424] sm:px-7 lg:px-10 lg:py-16">
      <h2 id="branding-steps-heading" className="sr-only">Our design process, from discovery to delivery</h2>
      <div className="mx-auto max-w-[1500px]">
        <ol className="mx-auto grid max-w-[1100px] gap-6 md:grid-cols-2 lg:gap-10 xl:w-[calc(100%-260px)]">
          {steps.map((step, index) => (
            <li key={step.title} style={{ "--step-paper": step.paper, "--step-ink": step.ink, "--note-angle": step.angle } as CSSProperties} className="relative flex min-w-0 flex-col rounded-[26px] bg-white p-4 lg:rounded-[30px] lg:p-5">
              <p className="relative z-10 text-xs text-[#898989] lg:text-sm">Step {index + 1}</p>
              <div className="relative -mb-4 mt-1 aspect-[1.75] overflow-hidden rounded-xl">
                <Image src={`/images/services/branding-steps/${step.image}.webp`} alt={step.alt} fill sizes="(max-width: 767px) 90vw, (max-width: 1279px) 45vw, 550px" className="object-contain" />
              </div>
              <div className="relative isolate mt-auto rounded-[12px] bg-[var(--step-paper)] px-5 pb-5 pt-4 lg:px-6 lg:pb-6">
                <span className="absolute -top-7 left-0 -z-10 h-9 w-[65%] rounded-tl-[12px] bg-[var(--step-paper)] [clip-path:polygon(0_0,78%_0,100%_100%,0_100%)]" aria-hidden="true" />
                <h3 className="text-[clamp(23px,2.2vw,32px)] font-medium leading-tight tracking-[-0.035em] text-[var(--step-ink)]">{step.title}</h3>
                <hr className="mb-4 mt-4 border-0 border-t border-black/10" />
                <p className="max-w-[260px] text-sm leading-[1.3] tracking-[-0.025em] text-[#77736e] lg:min-h-[2.6em] lg:text-lg">{step.description}</p>
              </div>
              <aside className={`pointer-events-none absolute top-[30%] hidden w-[110px] rotate-[var(--note-angle)] text-center font-[cursive] text-sm font-normal leading-[1.25] text-[#aaa] xl:block ${index % 2 === 0 ? "-left-[130px]" : "-right-[130px]"}`}>
                <svg viewBox="0 0 70 30" fill="none" stroke="var(--step-ink)" strokeWidth="1.1" strokeLinecap="round" className={`mb-2 h-7 w-full ${index % 2 === 1 ? "-scale-x-100" : ""}`} aria-hidden="true"><path d="M14 24C9 7 32 4 56 13m-7-7 8 7-9 4" /></svg>
                <p>{step.note}</p>
              </aside>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
