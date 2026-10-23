import { ecommerceContent } from "../data/ecommerce-content";
import Image from "next/image";

function AmenityIcon({ name }: { name: "coach" | "medical" | "wifi" | "tracker" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={name === "wifi" ? "5" : "2.3"} strokeLinecap="round" strokeLinejoin="round" className="size-14 shrink-0 lg:size-16" aria-hidden="true">
      {name === "coach" && <path d="M32 3v58M3 32h58M11 11l42 42m0-42L11 53M7 22l50 20M22 7l20 50" />}
      {name === "medical" && <path d="M25 3h14v22h22v14H39v22H25V39H3V25h22V3Z" fill="currentColor" stroke="none" />}
      {name === "wifi" && <><path d="M5 19a43 43 0 0 1 54 0M13 30a30 30 0 0 1 38 0M22 41a16 16 0 0 1 20 0" /><circle cx="32" cy="52" r="4" fill="currentColor" stroke="none" /></>}
      {name === "tracker" && <><path d="M23 5c-7 7-12 14-12 27s5 20 12 27h17c8-7 13-14 13-27S48 12 40 5H23Z" /><rect x="8" y="14" width="27" height="37" rx="12" /><path d="M37 9c9 3 12 12 12 23S46 52 37 56M40 18h2m-1 6h3m-2 6h3m-3 6h3m-4 6h3m-4 6h2M18 23v16l7-7-7-9Z" /></>}
    </svg>
  );
}

export default function GymAmenities({ ecommerce = false }: { ecommerce?: boolean } = {}) {
  const tile = "flex min-w-0 items-center rounded-[18px] bg-[#232323] p-5 text-base leading-[1.2] tracking-[-0.035em] lg:p-5 xl:p-7 xl:text-xl";

  return (
    <section aria-labelledby="gym-amenities-heading" className="mx-auto max-w-[1800px] bg-[#fffcf8] px-5 pb-14 sm:px-7 lg:px-8 lg:pb-20">
      <h2 id="gym-amenities-heading" className="sr-only">{ecommerce ? `${ecommerceContent.amenities.title}. ${ecommerceContent.amenities.description}` : "Gym facilities and amenities"}</h2>
      <div className="grid gap-4 rounded-[28px] bg-[#0c0c0c] p-4 text-white sm:grid-cols-2 lg:h-[clamp(480px,43vw,680px)] lg:grid-cols-3 lg:gap-5 lg:rounded-[34px] lg:p-5">
        <div className="order-2 grid min-h-[420px] grid-rows-3 gap-4 sm:order-1 lg:min-h-0 lg:gap-5">
          <div className={`${tile} gap-4`}><AmenityIcon name="coach" /><p>{ecommerce ? ecommerceContent.amenities.items[0] : "Professional coaches each with at least 5 years of experience."}</p></div>
          <div className={`${tile} gap-4`}><AmenityIcon name="medical" /><p>{ecommerce ? ecommerceContent.amenities.items[1] : "The medical professional’s office"}</p></div>
          <div className="grid grid-cols-[0.9fr_1.2fr] gap-4 lg:gap-5">
            <div className={`${tile} gap-2 px-3!`}><span className="text-[clamp(48px,4.8vw,76px)] font-semibold leading-none tracking-[-0.06em]">{ecommerce ? "" : "4"}</span><p>{ecommerce ? ecommerceContent.amenities.items[2] : <>sports<br />zones</>}</p></div>
            <div className={tile}><p>{ecommerce ? ecommerceContent.amenities.items[3] : "A bar serving wholesome drinks."}</p></div>
          </div>
        </div>

        <div className="relative order-1 isolate flex min-h-[450px] items-center justify-center overflow-hidden rounded-[20px] bg-[#38392e] sm:order-2 lg:min-h-0">
          <Image src={ecommerce ? "/images/services/ecommerce-solutions/catalogue.webp" : "/images/services/ecommerce-gym-interior.png"} alt={ecommerce ? "Product catalogue with clothing, footwear and electronics connected to inventory and delivery" : "An industrial gym with a weight bench, exercise equipment and warm window light"} quality={ecommerce ? 95 : 75} fill sizes="(max-width: 639px) 95vw, (max-width: 1023px) 45vw, 33vw" className="-z-20 object-cover" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-black/15" aria-hidden="true" />
          <span className="-translate-x-2 font-[Impact,Haettenschweiler,'Arial_Narrow',sans-serif] text-[clamp(200px,21vw,340px)] font-black leading-none tracking-[-0.09em] text-[#baff00]" aria-hidden="true">{ecommerce ? "G." : ".T"}</span>
        </div>

        <div className="order-3 grid min-h-[420px] grid-rows-3 gap-4 sm:col-span-2 lg:col-span-1 lg:min-h-0 lg:gap-5">
          <div className="grid grid-cols-2 gap-4 lg:gap-5">
            <div className={`${tile} flex-col justify-center gap-3 text-center`}><AmenityIcon name="wifi" /><p>{ecommerce ? "Fast, reliable hosting" : "WI-FI Free"}</p></div>
            <div className={`${tile} justify-center`}><p>{ecommerce ? ecommerceContent.amenities.items[5] : <>Tanning<br />bed</>}</p></div>
          </div>
          <div className={`${tile} gap-4`}><AmenityIcon name="tracker" /><p>{ecommerce ? ecommerceContent.amenities.items[6] : "Fitness trackers and smart analysis."}</p></div>
          <div className="grid grid-cols-2 gap-4 lg:gap-5">
            <div className={tile}><p>{ecommerce ? ecommerceContent.amenities.items[8] : "Various kinds of massage"}</p></div>
            <div className={`${tile} justify-center px-2!`}><p aria-label={ecommerce ? ecommerceContent.amenities.items[7] : undefined} className="whitespace-nowrap text-[clamp(32px,3vw,52px)] font-medium leading-none tracking-[-0.05em]">{ecommerce ? <>500<sup className="text-[0.55em]">+</sup><span className="block whitespace-normal text-base leading-[1.2]">product variants supported</span></> : <>500M<sup className="text-[0.55em]">2</sup></>}</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
