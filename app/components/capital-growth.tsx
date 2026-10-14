import Image from "next/image";

export default function CapitalGrowth() {
  return (
    <section aria-label="Capital growth benefits" className="mx-auto mb-6 grid max-w-[1800px] gap-4 sm:grid-cols-2 lg:grid-cols-[2.05fr_1fr_1fr] lg:gap-5">
      <article className="relative isolate flex min-h-[280px] flex-col justify-between overflow-hidden rounded-[26px] bg-[#d1d0e7] p-6 text-[#302c46] sm:col-span-2 sm:min-h-[310px] lg:col-span-1 lg:min-h-[290px] xl:min-h-[330px] xl:p-7">
        <Image src="/images/services/capital-growth-flower.png" alt="" fill sizes="(max-width: 1023px) 100vw, 50vw" className="-z-10 object-cover object-right" />
        <h2 className="max-w-[70%] text-[clamp(23px,2.1vw,32px)] font-medium leading-tight tracking-[-0.035em]">Capital that grows</h2>
        <p className="mt-20 max-w-[56%] text-[13px] leading-[1.4] tracking-[-0.02em] sm:text-sm xl:text-base">
          Earn passive income as your stablecoins are deployed into high-performing DeFi protocols.
        </p>
      </article>

      <article className="flex min-h-[250px] flex-col justify-between rounded-[26px] bg-[#2c263f] p-6 text-[#f1edf9] sm:min-h-[280px] lg:min-h-[290px] xl:min-h-[330px] xl:p-7">
        <h2 className="text-[clamp(23px,2.1vw,32px)] font-medium leading-[1.15] tracking-[-0.035em]">Always liquid,<br />always stable</h2>
        <p className="mt-16 text-[13px] leading-[1.4] tracking-[-0.02em] text-[#ccc5da] sm:text-sm xl:text-base">
          Stay fully dollar-pegged with instant access to your funds — no lockups or delays.
        </p>
      </article>

      <article className="flex min-h-[250px] flex-col justify-between rounded-[26px] bg-[#2c263f] p-6 text-[#f1edf9] sm:min-h-[280px] lg:min-h-[290px] xl:min-h-[330px] xl:p-7">
        <h2 className="text-[clamp(23px,2.1vw,32px)] font-medium leading-[1.15] tracking-[-0.035em]">100%<br />hands-free</h2>
        <p className="mt-16 text-[13px] leading-[1.4] tracking-[-0.02em] text-[#ccc5da] sm:text-sm xl:text-base">
          No need to manage strategies manually. USD Bloom works in the background for you.
        </p>
      </article>
    </section>
  );
}
