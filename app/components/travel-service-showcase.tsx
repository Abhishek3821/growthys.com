import { websiteDesignMoreServices } from "../data/website-design-content";
import Image from "next/image";

const services = [
  {
    title: websiteDesignMoreServices[0].title,
    description: websiteDesignMoreServices[0].description,
    image: "website-redesign",
    alt: "An outdated website wireframe transformed into a clean modern website",
    layout: "md:row-span-2",
  },
  {
    title: websiteDesignMoreServices[1].title,
    description: websiteDesignMoreServices[1].description,
    image: "ecommerce-design",
    alt: "A coordinated ecommerce store with product discovery and mobile checkout",
    layout: "",
  },
  {
    title: websiteDesignMoreServices[2].title,
    description: websiteDesignMoreServices[2].description,
    image: "landing-page-design",
    alt: "A focused campaign landing page with a clear enquiry form",
    layout: "",
  },
] as const;

export default function TravelServiceShowcase() {
  return (
    <section aria-labelledby="travel-service-showcase-heading" className="mx-auto max-w-[1800px] bg-[#fafafa] px-5 py-10 text-[#252525] sm:px-7 lg:px-10 lg:py-14">
      <header className="mb-7 lg:mb-9">
        <p className="mb-4 text-xs font-medium tracking-[-0.02em] text-[#3a8fa3] lg:text-sm">{"//OUR SERVICE"}</p>
        <h2 id="travel-service-showcase-heading" className="text-[clamp(30px,3.5vw,56px)] font-normal leading-[1.12] tracking-[-0.055em]">Explore More Ways We Can Help</h2>
        <p className="mt-4 max-w-[650px] text-sm leading-relaxed tracking-[-0.025em] text-[#777] lg:text-base">Our team supports your business beyond design — from marketing to development.</p>
      </header>

      <div className="grid gap-4 md:h-[clamp(380px,43vw,680px)] md:grid-cols-2 md:grid-rows-2 lg:gap-5">
        {services.map((service, index) => (
          <article key={service.image} className={`relative isolate flex min-h-[240px] flex-col justify-end overflow-hidden rounded-[18px] bg-[#c4d7da] p-5 text-white md:min-h-0 lg:rounded-[22px] lg:p-6 ${service.layout} ${index === 0 ? "min-h-[380px]" : ""}`}>
            <Image src={`/images/website-design/graphics/${service.image}.webp`} alt={service.alt} fill quality={95} sizes="(max-width: 767px) 95vw, 50vw" className="-z-20 object-cover" />
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent_35%,rgba(0,0,0,0.12)_55%,rgba(0,0,0,0.72)_100%)]" aria-hidden="true" />
            <h3 className="text-[clamp(22px,2.1vw,34px)] font-normal leading-tight tracking-[-0.035em]">{service.title}</h3>
            <p className="mt-2 max-w-[560px] text-xs leading-relaxed tracking-[-0.02em] text-white/85 lg:text-sm">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
