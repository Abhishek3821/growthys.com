import Image from "next/image";
import Link from "next/link";

const products = [
  { name: "Lead Generation", description: "For clinics, real estate, education, and service businesses that need enquiries, not clicks.", image: "lead-generation", layout: "lg:col-start-1 lg:row-start-3 lg:row-span-8" },
  { name: "E-Commerce Sales", description: "Shopping campaigns, product ads, and remarketing that push revenue and repeat orders.", image: "ecommerce-sales", layout: "lg:col-start-2 lg:row-start-1 lg:row-span-7" },
  { name: "App Installs & Sign-Ups", description: "Campaigns that drive downloads and registrations at a controlled cost per install.", image: "app-signups", layout: "lg:col-start-2 lg:row-start-8 lg:row-span-5" },
  { name: "Brand Awareness", description: "Reach and frequency campaigns that put your brand in front of the right audience.", image: "brand-awareness", layout: "lg:col-start-3 lg:row-start-6 lg:row-span-7" },
] as const;

export default function ProductShowcase() {
  return (
    <section aria-labelledby="product-showcase-heading" className="mx-auto mb-6 max-w-[1800px] rounded-[26px] bg-white px-5 py-10 sm:px-9 lg:px-10 lg:py-14">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-4 sm:gap-6 lg:aspect-[1.38] lg:grid-cols-[1.08fr_1fr_1fr] lg:grid-rows-[repeat(12,minmax(0,1fr))] lg:gap-x-9 lg:gap-y-6">
        <div className="col-span-2 mb-3 self-center text-[#292929] lg:col-span-1 lg:col-start-3 lg:row-start-1 lg:row-span-5 lg:mb-0 lg:px-1">
          <h2 id="product-showcase-heading" className="max-w-[340px] text-[clamp(28px,3.2vw,48px)] font-medium leading-[1.18] tracking-[-0.055em]">Campaigns We Run<br />Every Day</h2>
          <p className="mt-4 max-w-[310px] text-xs leading-relaxed tracking-[-0.02em] text-[#777773] sm:text-sm">
            Paid campaigns built for leads, e-commerce sales, app installs, and brand awareness.
          </p>
        </div>
        {products.map((product) => (
          <article key={product.image} aria-label={product.name} className={`group relative isolate aspect-[3/4] min-h-0 min-w-0 overflow-hidden rounded-[24px] bg-[#d9e5e6] sm:rounded-[32px] lg:aspect-auto ${product.layout}`}>
            <Image src={`/images/services/performance-marketing/${product.image}.webp`} alt={product.name} fill quality={95} sizes="(max-width: 1023px) 45vw, (max-width: 1300px) 30vw, 390px" className="-z-20 object-cover transition-transform duration-500 motion-safe:group-hover:scale-105" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute inset-x-3 bottom-3 flex min-h-11 items-center justify-between gap-2 rounded-full border border-white/50 bg-white/55 py-1 pl-4 pr-1 text-[#242333] backdrop-blur-md sm:inset-x-5 sm:bottom-5 sm:min-h-14 sm:pl-6">
              <p className="text-xs font-bold sm:text-sm">{product.name}<span className="block font-normal">{product.description}</span></p>
              <Link href="/contact#contact-inquiry" aria-label={`Inquire about ${product.name}`} className="grid size-9 shrink-0 place-items-center rounded-full bg-[#242238] text-white transition-colors hover:bg-[#45415f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:size-11">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 sm:size-5" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
