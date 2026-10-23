import { ecommerceContent } from "../data/ecommerce-content";
import Image from "next/image";

export default function SkincareStats({ ecommerce = false }: { ecommerce?: boolean } = {}) {
  return (
    <section aria-labelledby="skincare-stats-heading" className="mx-auto max-w-[1800px] bg-white px-5 pb-14 pt-10 text-[#111] sm:px-7 lg:px-12 lg:pb-20 lg:pt-14">
      <header className="mb-10 grid gap-5 md:grid-cols-3 lg:mb-16 lg:gap-6">
        <p className="pt-2 text-xs font-medium tracking-[-0.025em] text-[#73746d] lg:text-sm">{ecommerce ? ecommerceContent.purpose.eyebrow : <><span className="mr-1 font-semibold text-[#333]">02—</span>A purpose</>}</p>
        <h2 id="skincare-stats-heading" className="text-[clamp(32px,4.4vw,68px)] font-medium leading-[1.06] tracking-[-0.045em] md:col-span-2">{ecommerce ? ecommerceContent.purpose.title : <>An Evening of Reflection<br className="hidden lg:block" /> and Future Vision</>}</h2>
      </header>

      <div className="grid items-start gap-6 md:grid-cols-3 lg:gap-7">
        <article className="flex min-h-[320px] flex-col rounded-[28px] border border-[#e9ecdf] bg-white p-6 shadow-[0_22px_35px_-12px_rgba(173,239,106,0.25),0_0_5px_rgba(60,70,30,0.06)] lg:min-h-[420px] lg:rounded-[34px] lg:p-8">
          <h3 className="max-w-[350px] text-[clamp(25px,2.5vw,36px)] font-medium leading-[1.03] tracking-[-0.035em]">{ecommerce ? ecommerceContent.purpose.title : "Complete Skincare Collection"}</h3>
          <p className="mt-4 max-w-[390px] text-sm leading-[1.4] tracking-[-0.025em] text-[#74766c] lg:text-base">{ecommerce ? ecommerceContent.purpose.description : <>Unlock the power of skincare with a collection that meets your skin&apos;s unique needs.</>}</p>
          <p className="mt-auto pt-12 text-[clamp(64px,6.6vw,100px)] font-normal leading-none tracking-[-0.065em]">{ecommerce ? "01" : <>1398<span className="ml-3 align-middle text-[0.45em]">+</span></>}</p>
        </article>

        <article className="flex min-h-[430px] flex-col rounded-[28px] bg-[#cff6a6] p-4 shadow-[0_16px_35px_-20px_rgba(145,211,82,0.4)] lg:min-h-[560px] lg:rounded-[34px] lg:p-5">
          <p className="px-2 pb-6 pt-5 text-[clamp(64px,6.6vw,100px)] font-normal leading-none tracking-[-0.075em] lg:pt-7">{ecommerce ? "02" : <>180<span className="align-baseline text-[0.5em]">+</span></>}</p>
          <div className="relative aspect-[1.85] overflow-hidden rounded-[18px] lg:rounded-[22px]"><Image src={ecommerce ? "/images/services/ecommerce-solutions/operations.webp" : "/images/services/ecommerce-skincare-spa.png"} alt={ecommerce ? "Connected online store with secure payments, inventory and shipping parcels" : "A woman relaxing during a professional skincare treatment in a warm spa setting"} quality={ecommerce ? 95 : 75} fill sizes="(max-width: 767px) 90vw, 33vw" className="object-cover" /></div>
          <div className="px-2 pb-4 pt-5 lg:pt-6">
            <h3 className="text-[clamp(25px,2.5vw,36px)] font-medium leading-tight tracking-[-0.035em]">{ecommerce ? ecommerceContent.purpose.solutions.title : "Global brands"}</h3>
            <p className="mt-3 max-w-[390px] text-sm leading-[1.4] tracking-[-0.025em] text-[#65774f] lg:text-base">{ecommerce ? ecommerceContent.purpose.solutions.description : "Discover innovative skincare treatments from every corner of the globe."}</p>
          </div>
        </article>

        <article className="flex min-h-[320px] flex-col self-end rounded-[28px] bg-[#e5ff58] p-6 shadow-[0_24px_34px_-16px_rgba(184,234,52,0.3)] lg:min-h-[420px] lg:rounded-[34px] lg:p-8">
          <h3 className="text-[clamp(25px,2.5vw,36px)] font-medium leading-[1.03] tracking-[-0.035em]">{ecommerce ? ecommerceContent.purpose.reach.title : <>Total<br />Country</>}</h3>
          <p className="mt-4 max-w-[390px] text-sm leading-[1.4] tracking-[-0.025em] text-[#717c38] lg:text-base">{ecommerce ? ecommerceContent.purpose.reach.description : <>Delivering innovative skincare solutions that cater to your entire family&apos;s needs and desires.</>}</p>
          <p className="mt-auto pt-12 text-[clamp(64px,6.6vw,100px)] font-normal leading-none tracking-[-0.075em]">{ecommerce ? "03" : <>93<span className="align-baseline text-[0.5em]">+</span></>}</p>
        </article>
      </div>
    </section>
  );
}
