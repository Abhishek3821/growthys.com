import { ecommerceContent } from "../data/ecommerce-content";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";

export default function EcommerceHero() {
  return (
    <div className="min-h-svh bg-[linear-gradient(130deg,#bcd5fc_0%,#d8d2ff_48%,#e0f3ff_100%)] px-5 pb-6 pt-4 text-white sm:px-7 lg:px-8">
      <header className="relative mx-auto mb-5 flex min-h-16 max-w-[1800px] items-start justify-center text-[#202337] min-[701px]:max-[1200px]:min-h-[110px]">

        <Navbar onHomePage={false} currentPage="/e-commerce-solutions" />
      </header>

      <section aria-labelledby="ecommerce-hero-heading" className="relative isolate mx-auto flex max-w-[1800px] flex-col lg:block lg:h-[calc(100svh-128px)] lg:max-h-[900px] lg:min-h-[590px]">
        <div className="pointer-events-none absolute inset-0 -z-20 rounded-[36px] bg-[#1b1c27] lg:rounded-[46px] lg:[clip-path:polygon(0_0,100%_0,100%_100%,61%_100%,50%_78%,0_78%)]" aria-hidden="true" />

        <div className="relative z-10 px-7 pb-4 pt-9 sm:px-10 sm:pt-12 lg:w-[53%] lg:px-[clamp(32px,4.4vw,80px)] lg:pt-[clamp(40px,6.5svh,80px)]">
          <h1 id="ecommerce-hero-heading" className="text-[clamp(38px,5vw,82px)] font-medium leading-[1.22] tracking-[0.015em] lg:text-[clamp(42px,min(4.6vw,8.3svh),82px)]">
            E-Commerce<br />Solutions
          </h1>
          <p className="mt-7 max-w-[450px] border-l-2 border-[#e65cb1] py-2 pl-4 text-sm leading-[1.45] tracking-[0.01em] text-[#e2e0e8] sm:text-base lg:mt-[clamp(24px,4svh,46px)] lg:text-lg">
            {ecommerceContent.hero.description}
          </p>
          <Link href="/contact#contact-inquiry" className="mt-7 inline-flex min-h-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#7abaff_0%,#91b9ff_50%,#d0a5f6_51%,#d0a5f6_100%)] px-9 py-3 text-base font-semibold tracking-[0.09em] text-[#252238] shadow-[0_12px_30px_rgba(167,131,246,0.18)] transition-shadow hover:shadow-[0_12px_36px_rgba(167,131,246,0.4)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d0a5f6] sm:min-h-16 sm:px-12 lg:mt-[clamp(24px,4svh,42px)] lg:text-xl">Explore More</Link>
        </div>

        <div className="relative mx-3 h-[400px] overflow-hidden rounded-b-[34px] sm:h-[500px] lg:absolute lg:bottom-0 lg:right-0 lg:top-[3%] lg:m-0 lg:h-auto lg:w-[63%] lg:rounded-b-none lg:rounded-br-[46px]">
          <Image src="/images/services/ecommerce-solutions/hero.webp" alt="Premium online storefront with a shopping cart, product catalogue, secure checkout and delivery parcels" fill preload quality={95} sizes="(max-width: 1023px) 95vw, 63vw" className="object-contain object-bottom lg:object-right-bottom" />
        </div>

        <div className="relative z-10 mx-5 mb-5 rounded-[20px] bg-[linear-gradient(100deg,#ec68bc,#81bdff)] p-[2px] lg:absolute lg:bottom-0 lg:left-0 lg:m-0 lg:h-[19%] lg:min-h-[98px] lg:w-[57%] lg:rounded-l-[18px] lg:[clip-path:polygon(0_0,86%_0,100%_100%,0_100%)]">
          <dl className="grid h-full grid-cols-2 items-center rounded-[18px] bg-[#1b1c27] px-3 py-5 text-center lg:pr-[15%]">
            <div className="flex flex-col px-2"><dt className="order-2 mt-2 text-xs tracking-[0.015em] text-[#90919d] sm:text-base lg:text-lg">Higher Conversion</dt><dd className="text-xl font-semibold sm:text-2xl">78%</dd></div>
            <div className="flex flex-col border-l-2 border-[#8ab7f6] px-2"><dt className="order-2 mt-2 text-xs tracking-[0.015em] text-[#90919d] sm:text-base lg:text-lg">Orders Processed</dt><dd className="text-xl font-semibold sm:text-2xl">45k+</dd></div>
          </dl>
        </div>
      </section>
    </div>
  );
}
