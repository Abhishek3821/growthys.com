import Image from "next/image";
import Link from "next/link";

const classes = [
  { title: ["Discovery","Strategy"], description: "We understand your business, audience, and goals before designing a single pixel.", image: "process-discovery", alt: "Website discovery research, audience planning, and sitemap", featured: false },
  { title: ["Design","Structure"], description: "Clean layouts, brand-aligned visuals, and page flows that guide visitors to the right action on every device.", image: "process-structure", alt: "Website layout structure, interface components, and brand palette", featured: true },
  { title: ["Development","Launch"], description: "Clean code, fast loading, and a smooth handover — so your site is ready to grow from day one.", image: "process-launch", alt: "A completed website ready for development handover and launch", featured: false },
] as const;

export default function DesignClasses() {
  return (
    <section id="design-classes" aria-labelledby="design-classes-heading" className="mx-auto max-w-[1800px] px-5 pb-12 pt-14 text-[#28262a] sm:px-7 lg:px-8 lg:pb-20 lg:pt-20">
      <div className="mb-9 flex flex-wrap items-center justify-between gap-x-10 gap-y-4 px-2 sm:mb-12 lg:px-5">
        <h2 id="design-classes-heading" className="text-[clamp(32px,3.4vw,52px)] font-semibold leading-tight tracking-[-0.045em]"><span className="block text-xs font-medium tracking-[0.06em]">OUR PROCESS</span>What You&apos;ll Get With Every Design</h2>
        <p className="max-w-[410px] text-base leading-snug tracking-[-0.025em] text-[#555158] sm:text-right sm:text-lg">
          This is what goes into every website we build for our clients.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
        {classes.map((item) => (
          <article key={item.image} className={`flex min-w-0 flex-col rounded-[34px] border-2 p-4 sm:p-5 lg:rounded-[42px] ${item.featured ? "border-[#8a719f] bg-[#8a719f] text-white" : "border-[#a499aa] bg-white text-[#343038]"}`}>
            <div className="px-3 pb-6 pt-4 lg:px-5 lg:pt-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-[clamp(24px,2.1vw,34px)] font-medium leading-[1.1] tracking-[-0.035em]">{item.title[0]} &amp;<br />{item.title[1]}</h3>
                <Link href="/contact#contact-inquiry" aria-label={`Discuss ${item.title.join(" & ")}`} className={`grid size-12 shrink-0 place-items-center rounded-full text-white transition-transform motion-safe:hover:rotate-45 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current lg:size-14 ${item.featured ? "bg-[#ffb653]" : "bg-[#8a719f]"}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 lg:size-7" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg>
                </Link>
              </div>
              <hr className={`my-5 border-0 border-t-2 ${item.featured ? "border-white/60" : "border-[#a49ba9]"}`} />
              <p className={`max-w-[290px] text-base leading-[1.25] tracking-[-0.025em] lg:min-h-[3.75em] lg:text-lg ${item.featured ? "text-[#f2eaf7]" : "text-[#625b64]"}`}>{item.description}</p>
            </div>
            <div className="relative mt-auto aspect-[16/9] overflow-hidden rounded-[24px] bg-[#8a719f] lg:rounded-[28px]">
              <Image src={`/images/website-design/graphics/${item.image}.webp`} alt={item.alt} fill quality={95} sizes="(max-width: 767px) 90vw, 33vw" className="object-cover" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
