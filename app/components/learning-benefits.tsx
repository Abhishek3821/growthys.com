import { websiteDesignBenefits } from "../data/website-design-content";
import Image from "next/image";

const benefits = [
  { title: websiteDesignBenefits[0].title, description: websiteDesignBenefits[0].description, icon: "degree", color: "bg-[#bd72ee]" },
  { title: websiteDesignBenefits[1].title, description: websiteDesignBenefits[1].description, icon: "book", color: "bg-[#f58da9]" },
  { title: websiteDesignBenefits[2].title, description: websiteDesignBenefits[2].description, icon: "expert", color: "bg-[#bd72ee]" },
  { title: websiteDesignBenefits[3].title, description: websiteDesignBenefits[3].description, icon: "video", color: "bg-[#f58da9]" },
] as const;

function BenefitIcon({ icon }: { icon: typeof benefits[number]["icon"] }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="size-7 lg:size-8" aria-hidden="true">
      {icon === "degree" && <><circle cx="12" cy="10" r="4" /><path d="M4 27v-3a8 8 0 0 1 16 0v3H4Zm18-20a4 4 0 0 1 0 8m2 5a7 7 0 0 1 4 7" /></>}
      {icon === "book" && <><rect x="4" y="7" width="24" height="21" rx="3" /><path d="M10 4v6m12-6v6M4 14h24m-17 7 4 4 7-7" /></>}
      {icon === "expert" && <><path d="M5 5v22h23M10 21l6-6 5 3 7-10m-7 0h7v7" /></>}
      {icon === "video" && <><path d="M5 18v-3a11 11 0 0 1 22 0v7a6 6 0 0 1-6 6h-4" /><rect x="3" y="15" width="6" height="9" rx="2" /><rect x="23" y="15" width="6" height="9" rx="2" /></>}
    </svg>
  );
}

export default function LearningBenefits() {
  return (
    <section aria-labelledby="learning-benefits-heading" className="mx-auto max-w-[1800px] bg-[#faf5ff] px-5 py-12 text-[#34313c] sm:px-7 lg:px-12 lg:py-16">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 md:grid-cols-[1fr_1.05fr] md:gap-12 lg:gap-20">
        <div className="mx-auto w-full max-w-[570px] rounded-[30%] border-2 border-dashed border-[#d8c4df] p-2.5 sm:p-3.5">
          <div className="relative aspect-square overflow-hidden rounded-[29%] bg-[#e1c6f6]">
            <Image src="/images/website-design/graphics/design-development-team.webp" alt="An illustrative website design and development team collaborating on a project" fill quality={95} sizes="(max-width: 767px) 90vw, (max-width: 1400px) 45vw, 570px" className="object-cover" />
          </div>
        </div>

        <div>
          <h2 id="learning-benefits-heading" className="max-w-[570px] text-[clamp(28px,2.9vw,44px)] font-semibold leading-[1.15] tracking-[-0.035em]"><span className="text-[#be81ba]">Benefits</span> of Working With Growthys</h2>
          <ul className="mt-7 grid gap-6 lg:mt-8 lg:gap-7">
            {benefits.map((benefit) => (
              <li key={benefit.icon} className="flex items-start gap-4 lg:gap-5">
                <span className={`grid size-12 shrink-0 place-items-center rounded-full border-[3px] border-white/40 text-white lg:size-14 ${benefit.color}`}><BenefitIcon icon={benefit.icon} /></span>
                <div>
                  <h3 className="text-lg font-semibold leading-snug tracking-[-0.025em] lg:text-xl">{benefit.title}</h3>
                  <p className="mt-2 max-w-[490px] text-sm leading-[1.5] text-[#8a8290] lg:text-base">{benefit.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
