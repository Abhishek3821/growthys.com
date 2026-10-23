import { crmContent } from "../data/crm-content";
// Keep the existing five market cards; retention and compliance share the final card.
const drivers = [
  ...crmContent.market.items.slice(0, 4).map((item) => [item]),
  crmContent.market.items.slice(4),
];

export default function CrmMarketDrivers() {
  return (
    <section aria-labelledby="crm-market-drivers-heading" className="mx-auto max-w-[1800px] bg-white px-5 py-10 text-[#171b18] sm:px-8 lg:px-14 lg:py-12">
      <div className="mx-auto max-w-[1500px]">
        <header className="mb-5 flex flex-wrap items-center justify-between gap-4 lg:mb-7">
          <p className="rounded-full bg-[#111611] px-4 py-2 text-[9px] font-semibold tracking-[0.15em] text-white lg:text-[10px]">MARKET TRENDS</p>
          <p className="flex items-center gap-3 text-[9px] font-semibold tracking-[0.18em] lg:text-[10px]"><span className="text-base" aria-hidden="true">↳</span>CRM MANAGEMENT SOFTWARE</p>
        </header>

        <div className="grid gap-px border-y border-[#bcbfbb] bg-[#bcbfbb] md:grid-cols-2">
          <div className="relative isolate flex min-h-[170px] items-center overflow-hidden bg-white p-6 lg:min-h-[180px] lg:px-8 lg:py-7">
            <svg viewBox="0 0 180 180" fill="#f1f2ef" className="pointer-events-none absolute -right-6 inset-y-0 -z-10 h-full w-[45%]" aria-hidden="true"><path d="M72 0h36v48l34-34 25 25-34 34h47v36h-47l34 34-25 25-34-34v46H72v-46l-34 34-25-25 34-34H0V73h47L13 39l25-25 34 34V0Z" /></svg>
            <h2 id="crm-market-drivers-heading" className="relative text-[clamp(28px,3vw,46px)] font-bold leading-[1.1] tracking-[-0.045em]">Why Businesses Are<br />Moving to CRM <span className="inline-block rounded-full bg-[#d5fa85] px-2 pb-1">Now</span></h2>
          </div>
          {drivers.map((group) => (
            <article key={group[0].title} className="flex min-h-[150px] flex-col justify-center bg-white p-6 lg:min-h-[180px] lg:px-8 lg:py-7">
              {group.map((driver) => <div key={driver.title}>
              <h3 className="max-w-[620px] text-base font-semibold leading-snug tracking-[-0.025em] lg:text-lg">{driver.title}</h3>
              <p className="mt-3 max-w-[620px] text-xs leading-[1.6] tracking-[-0.015em] text-[#777d76] lg:text-sm">{driver.description}</p>
              </div>)}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
