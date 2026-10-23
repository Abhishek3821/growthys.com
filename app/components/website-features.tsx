import { websiteDesignServices } from "../data/website-design-content";
import Image from "next/image";

const features = [
  {
    title: websiteDesignServices[1].title,
    description: websiteDesignServices[1].description,
    image: "speed-seo",
    alt: "Fast website performance, search visibility, and structured pages",
    background: "bg-[#f7e9fd]",
  },
  {
    title: websiteDesignServices[2].title,
    description: websiteDesignServices[2].description,
    image: "mobile-first",
    alt: "A mobile-first website adapted to phone, tablet, and desktop",
    background: "bg-[#e9faff]",
  },
] as const;

function FeatureArtwork({ name, alt }: { name: string; alt: string }) {
  return (
    <div className="relative aspect-[3/2] overflow-hidden rounded-[24px] bg-white lg:rounded-[30px]">
      <Image src={`/images/website-design/graphics/${name}.webp`} alt={alt} fill quality={95} sizes="(max-width: 767px) 90vw, (max-width: 1400px) 40vw, 550px" className="object-contain" />
    </div>
  );
}

export default function WebsiteFeatures() {
  return (
    <section aria-labelledby="website-features-heading" className="mx-auto max-w-[1400px] px-5 pb-14 pt-3 text-[#111111] sm:px-7 lg:px-8 lg:pb-20">
      <header className="mx-auto mb-9 max-w-[900px] text-center lg:mb-12">
        <h2 id="website-features-heading" className="text-[clamp(30px,3.5vw,52px)] font-semibold leading-[1.06] tracking-[-0.045em]">
          Discover Our Complete<br className="hidden sm:block" /> Website Design Services
        </h2>
        <p className="mx-auto mt-4 max-w-[720px] text-sm leading-relaxed text-[#777571] sm:text-base">
          Our service is built to support your business end to end — from first sketch to launch day and beyond.
        </p>
      </header>

      <div className="grid gap-5 lg:gap-6">
        <article className="grid items-center gap-7 rounded-[32px] bg-[#faf9f6] p-6 md:grid-cols-[1.25fr_1fr] sm:p-8 lg:gap-12 lg:rounded-[42px] lg:p-10">
          <div>
            <h3 className="max-w-[450px] text-[clamp(26px,2.6vw,38px)] font-semibold leading-[1.16] tracking-[-0.035em]">{websiteDesignServices[0].title}</h3>
            <p className="mt-5 max-w-[540px] text-sm leading-[1.65] text-[#777571] lg:text-base">
              {websiteDesignServices[0].description}
            </p>
          </div>
          <FeatureArtwork name="brand-identity" alt="A custom website with coordinated brand colours and visual identity materials" />
        </article>

        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {features.map((feature) => (
            <article key={feature.image} className={`flex min-w-0 flex-col rounded-[32px] p-6 sm:p-8 lg:rounded-[42px] lg:p-10 ${feature.background}`}>
              <h3 className="max-w-[450px] text-[clamp(26px,2.6vw,38px)] font-semibold leading-[1.16] tracking-[-0.035em]">{feature.title}</h3>
              <p className="mb-7 mt-5 text-sm leading-[1.65] text-[#777571] lg:mb-8 lg:text-base">{feature.description}</p>
              <div className="mt-auto"><FeatureArtwork name={feature.image} alt={feature.alt} /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
