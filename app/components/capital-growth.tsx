import Image from "next/image";

export default function CapitalGrowth() {
  return (
    <section aria-label="Performance marketing benefits" className="mx-auto mb-6 grid max-w-[1800px] gap-4 sm:grid-cols-2 lg:grid-cols-[2.05fr_1fr_1fr] lg:gap-5">
      <article className="relative isolate flex min-h-[280px] flex-col justify-between overflow-hidden rounded-[26px] bg-[#d1d0e7] p-6 text-[#302c46] sm:col-span-2 sm:min-h-[310px] lg:col-span-1 lg:min-h-[290px] xl:min-h-[330px] xl:p-7">
        <Image src="/images/services/performance-marketing/budget-optimization.webp" alt="A glass funnel allocating advertising budget to growing performance channels" fill quality={95} sizes="(max-width: 1023px) 100vw, 50vw" className="-z-10 object-cover object-right" />
        <h2 className="max-w-[70%] text-[clamp(23px,2.1vw,32px)] font-medium leading-tight tracking-[-0.035em]">Better Budget Use</h2>
        <p className="mt-20 max-w-[56%] text-[13px] leading-[1.4] tracking-[-0.02em] sm:text-sm xl:text-base">
          We cut wasted spend by pausing weak keywords, audiences, and placements — so more of your budget goes to what actually converts.
        </p>
      </article>

      <article className="flex min-h-[250px] flex-col justify-between rounded-[26px] bg-[#2c263f] p-6 text-[#f1edf9] sm:min-h-[280px] lg:min-h-[290px] xl:min-h-[330px] xl:p-7">
        <h2 className="text-[clamp(23px,2.1vw,32px)] font-medium leading-[1.15] tracking-[-0.035em]">Continuous Optimization</h2>
        <p className="mt-16 text-[13px] leading-[1.4] tracking-[-0.02em] text-[#ccc5da] sm:text-sm xl:text-base">
          Bids, creatives, audiences, and landing pages are tested every week. Small improvements add up to big results over time.
        </p>
      </article>

      <article className="flex min-h-[250px] flex-col justify-between rounded-[26px] bg-[#2c263f] p-6 text-[#f1edf9] sm:min-h-[280px] lg:min-h-[290px] xl:min-h-[330px] xl:p-7">
        <h2 className="text-[clamp(23px,2.1vw,32px)] font-medium leading-[1.15] tracking-[-0.035em]">Honest, Plain-Language Reporting</h2>
        <p className="mt-16 text-[13px] leading-[1.4] tracking-[-0.02em] text-[#ccc5da] sm:text-sm xl:text-base">
          You see the same numbers we see. If a campaign underperforms, we tell you — and explain what we&apos;re changing.
        </p>
      </article>
    </section>
  );
}
