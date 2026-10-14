import Image from "next/image";

const benefits = [
  { title: "Online Degrees", description: "Earn accredited degrees from the comfort of your home, opening doors to a world of possibilities.", icon: "degree", color: "bg-[#bd72ee]" },
  { title: "Short Courses", description: "Enhance your skills with our concise and focused short courses, designed for quick and effective learning.", icon: "book", color: "bg-[#f58da9]" },
  { title: "Training From Experts", description: "Immerse yourself in knowledge with industry experts guiding you through hands-on experiences.", icon: "expert", color: "bg-[#bd72ee]" },
  { title: "1.5k+ Video Courses", description: "Dive into a vast library of over 1.5k video courses covering various subjects, offering a visual learning experience.", icon: "video", color: "bg-[#f58da9]" },
] as const;

function BenefitIcon({ icon }: { icon: typeof benefits[number]["icon"] }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="size-7 lg:size-8" aria-hidden="true">
      {icon === "degree" && <><path d="m3 11 13-7 13 7-13 7-13-7Zm5 3v8c5 5 11 5 16 0v-8m5-3v12" /></>}
      {icon === "book" && <><path d="M16 8c-4-3-8-3-12-2v19c4-1 8-1 12 2 4-3 8-3 12-2V6c-4-1-8-1-12 2Zm0 0v19" /></>}
      {icon === "expert" && <><circle cx="16" cy="10" r="5" fill="currentColor" stroke="none" /><path d="M6 27v-3a10 10 0 0 1 20 0v3H6Z" fill="currentColor" stroke="none" /></>}
      {icon === "video" && <path d="m12 7 14 9-14 9V7Z" fill="currentColor" stroke="none" />}
    </svg>
  );
}

export default function LearningBenefits() {
  return (
    <section aria-labelledby="learning-benefits-heading" className="mx-auto max-w-[1800px] bg-[#faf5ff] px-5 py-12 text-[#34313c] sm:px-7 lg:px-12 lg:py-16">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 md:grid-cols-[1fr_1.05fr] md:gap-12 lg:gap-20">
        <div className="mx-auto w-full max-w-[570px] rounded-[30%] border-2 border-dashed border-[#d8c4df] p-2.5 sm:p-3.5">
          <div className="relative aspect-square overflow-hidden rounded-[29%] bg-[#e1c6f6]">
            <Image src="/images/website-design/learning-students.png" alt="Four smiling students holding notebooks and textbooks against pink and purple backgrounds" fill sizes="(max-width: 767px) 90vw, (max-width: 1400px) 45vw, 570px" className="object-cover" />
          </div>
        </div>

        <div>
          <h2 id="learning-benefits-heading" className="max-w-[570px] text-[clamp(28px,2.9vw,44px)] font-semibold leading-[1.15] tracking-[-0.035em]"><span className="text-[#be81ba]">Benefits</span> From Our Online Learning</h2>
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
