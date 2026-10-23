import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";

const photos = [
  { name: "hero-brand-website", alt: "A custom brand website displayed on a desktop monitor", layout: "lg:col-start-1 lg:row-start-9 lg:row-span-4" },
  { name: "hero-wireframes", alt: "Website wireframes and content structure being planned", layout: "lg:col-start-2 lg:row-start-6 lg:row-span-5" },
  { name: "hero-typography", alt: "Typography grids and precise visual design details", layout: "lg:col-start-2 lg:row-start-11 lg:row-span-2" },
  { name: "hero-mobile-design", alt: "A mobile-first website displayed on a smartphone", layout: "lg:col-start-3 lg:row-start-5 lg:row-span-4" },
  { name: "hero-components", alt: "Reusable website interface components and controls", layout: "lg:col-start-3 lg:row-start-9 lg:row-span-4" },
  { name: "hero-responsive", alt: "A responsive website across desktop, tablet and phone", layout: "lg:col-start-4 lg:row-start-7 lg:row-span-6" },
  { name: "hero-color-system", alt: "Brand swatches and coordinated website layout cards", layout: "lg:col-start-5 lg:row-start-1 lg:row-span-3" },
  { name: "hero-design-studio", alt: "A website designer working on a custom page layout", layout: "lg:col-start-5 lg:row-start-4 lg:row-span-6" },
  { name: "hero-launch", alt: "A website launch represented by a browser and completion check", layout: "lg:col-start-5 lg:row-start-10 lg:row-span-3" },
] as const;

export default function WebsiteDesignHero() {
  return (
    <div className="min-h-svh bg-white px-5 pb-5 pt-4 text-black sm:px-7 lg:px-8">
      <header className="relative mx-auto mb-5 flex min-h-16 max-w-[1800px] items-start justify-center min-[701px]:max-[1200px]:min-h-[110px]">

        <Navbar onHomePage={false} currentPage="/website-design" />
      </header>

      <section aria-labelledby="website-design-heading" className="mx-auto grid max-w-[1800px] grid-cols-2 gap-4 sm:grid-cols-3 lg:h-[max(620px,calc(100svh-120px))] lg:max-h-[1000px] lg:grid-cols-5 lg:grid-rows-[repeat(12,minmax(0,1fr))] lg:gap-[clamp(12px,1.3vw,24px)]">
        <div className="col-span-2 pb-4 pt-3 sm:col-span-3 lg:col-start-1 lg:row-start-1 lg:row-span-5 lg:pt-[clamp(16px,3svh,40px)]">
          <h1 id="website-design-heading" className="text-[clamp(40px,5vw,84px)] font-medium leading-[1.13] tracking-[-0.055em] lg:text-[clamp(44px,min(5vw,8.5svh),84px)]">
            Design That Speaks.<br />Growth That Lasts.
          </h1>
          <p className="mt-5 max-w-[420px] text-lg font-medium leading-[1.45] tracking-[-0.035em] sm:text-xl lg:mt-[clamp(16px,2.8svh,30px)] lg:text-[clamp(16px,1.6vw,23px)]">
            Websites built to look beautiful, load fast, and turn visitors into customers.
          </p>
          <Link href="/contact#contact-inquiry" className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-black px-6 py-2.5 text-sm text-white transition-colors hover:bg-[#303030] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black lg:mt-[clamp(16px,2.5svh,28px)]">Discuss Your Website</Link>
        </div>

        <ul className="col-span-2 mb-2 grid grid-cols-2 gap-x-4 gap-y-3 text-base font-medium tracking-[-0.035em] sm:col-span-3 sm:grid-cols-4 lg:col-span-1 lg:col-start-4 lg:row-start-4 lg:row-span-3 lg:mb-0 lg:flex lg:flex-col lg:justify-end lg:gap-3 lg:pb-2 lg:pl-3 lg:text-[clamp(16px,1.55vw,23px)]">
          {["Clean layouts.","Clear messaging.","Real results.","Built to convert."].map((line) => (
            <li key={line} className="flex items-center gap-3"><span aria-hidden="true">↗</span>{line}</li>
          ))}
        </ul>

        {photos.map((photo, index) => (
          <div key={photo.name} className={`relative aspect-[3/4] min-h-0 min-w-0 overflow-hidden rounded-[22px] bg-[#e7e7e7] lg:aspect-auto ${photo.layout}`}>
            <Image src={`/images/website-design/graphics/${photo.name}.webp`} alt={photo.alt} fill quality={95} sizes="(max-width: 639px) 45vw, (max-width: 1023px) 30vw, 20vw" preload={index === 6} className="object-cover grayscale" />
          </div>
        ))}
      </section>
    </div>
  );
}
