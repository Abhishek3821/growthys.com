import Image from "next/image";
import Link from "next/link";

const projects = [
  { image: "packaging", category: "GRAPHIC DESIGN", alt: "Navy product packaging with a cream paper band and matching stationery" },
  { image: "identity", category: "BRAND IDENTITY", alt: "A person in a black sweatshirt holding a sky blue design book" },
  { image: "shopping-bag", category: "GRAPHIC DESIGN", alt: "A matte black boutique shopping bag on a pale studio surface" },
];

export default function HrmsSelectedProjects() {
  return (
    <section aria-labelledby="hrms-selected-projects-heading" className="bg-[#f8faf6] px-6 py-12 text-[#181917] sm:px-10 lg:px-[7%] lg:py-16">
      <div className="mx-auto max-w-[1250px]">
        <header>
          <p className="text-xs font-bold tracking-[-0.015em] text-[#d88059] lg:text-sm">FEATURED WORK</p>
          <h2 id="hrms-selected-projects-heading" className="mt-2 text-[clamp(36px,4.7vw,62px)] font-bold leading-[1.06] tracking-[-0.04em]">Selected Projects<span className="text-[#f36b32]">.</span></h2>
        </header>
        <div className="mt-10 grid gap-6 sm:grid-cols-3 lg:mt-12 lg:gap-7">
          {projects.map((project, index) => (
            <article key={project.image} className="overflow-hidden rounded-[24px] border-[5px] border-[#252421] bg-[#252121]">
              <div className="relative aspect-[1.35] overflow-hidden bg-[#d8d7d0]">
                <Image src={`/images/hrms-selected-projects/${project.image}.webp`} alt={project.alt} fill sizes="(max-width: 639px) 85vw, 30vw" className="object-cover" />
              </div>
              <div className="relative min-h-[138px] px-4 pb-5 pt-4 text-[#fffaf1] lg:min-h-[155px] lg:px-5">
                <p className="text-[9px] font-semibold tracking-[0.015em] text-[#ed834e] lg:text-[11px]">{project.category}</p>
                <h3 className="mt-3 pr-12 text-2xl font-semibold leading-[1.1] tracking-[-0.025em] lg:text-3xl">Demo<br />Project</h3>
                <Link href="/contact#contact-inquiry" aria-label={`Enquire about demo project ${index + 1}: ${project.category.toLowerCase()}`} className="absolute bottom-4 right-3 grid size-11 place-items-center rounded-full bg-[#f86d2d] text-2xl text-white transition-colors hover:bg-[#e65315] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:bottom-5 lg:right-4"><span aria-hidden="true">→</span></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
