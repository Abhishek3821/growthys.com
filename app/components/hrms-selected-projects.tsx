import Image from "next/image";
import Link from "next/link";
import { hrmsContent } from "../data/hrms-content";

const projects = [
  { image: "manufacturing-attendance", ...hrmsContent.projects.items[0], alt: "A manufacturing floor, attendance terminal, clock and shift timelines illustrating plant-level attendance and overtime tracking." },
  { image: "healthcare-payroll", ...hrmsContent.projects.items[1], alt: "A medical cross, healthcare building, payroll dashboard and compliance shield illustrating a healthcare payroll system." },
  { image: "retail-self-service", ...hrmsContent.projects.items[2], alt: "An employee self-service phone, leave calendar and retail storefront illustrating staff requests and seasonal leave." },
];

export default function HrmsSelectedProjects() {
  return (
    <section aria-labelledby="hrms-selected-projects-heading" className="bg-[#f8faf6] px-6 py-12 text-[#181917] sm:px-10 lg:px-[7%] lg:py-16">
      <div className="mx-auto max-w-[1250px]">
        <header>
          <p className="text-xs font-bold tracking-[-0.015em] text-[#d88059] lg:text-sm">FEATURED WORK</p>
          <h2 id="hrms-selected-projects-heading" className="mt-2 text-[clamp(36px,4.7vw,62px)] font-bold leading-[1.06] tracking-[-0.04em]">Selected HRMS Projects<span className="text-[#f36b32]">.</span></h2>
        </header>
        <div className="mt-10 grid gap-6 sm:grid-cols-3 lg:mt-12 lg:gap-7">
          {projects.map((project) => (
            <article key={project.image} className="overflow-hidden rounded-[24px] border-[5px] border-[#252421] bg-[#252121]">
              <div className="relative aspect-[1.35] overflow-hidden bg-[#d8d7d0]">
                <Image src={`/images/hrms/graphics/${project.image}.webp`} quality={95} alt={project.alt} fill sizes="(max-width: 639px) 85vw, 30vw" className="object-cover" />
              </div>
              <div className="relative min-h-[138px] px-4 pb-5 pt-4 text-[#fffaf1] lg:min-h-[155px] lg:px-5">
                <p className="text-[9px] font-semibold tracking-[0.015em] text-[#ed834e] lg:text-[11px]">{project.category} · {project.description}</p>
                <h3 className="mt-3 pr-12 text-2xl font-semibold leading-[1.1] tracking-[-0.025em] lg:text-3xl">{project.title}</h3>
                <Link href="/contact#contact-inquiry" aria-label={`Enquire about ${project.title}`} className="absolute bottom-4 right-3 grid size-11 place-items-center rounded-full bg-[#f86d2d] text-2xl text-white transition-colors hover:bg-[#e65315] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:bottom-5 lg:right-4"><span aria-hidden="true">→</span></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
