import { webDevelopmentContent } from "../data/web-development-content";
const offers = webDevelopmentContent.offers.items.map((offer, index) => ({
  ...offer,
  color: ["#3067f2", "#26278c", "#f39731"][index],
  kind: (["pin", "collaboration", "idea"] as const)[index],
}));

function OfferIcon({ kind }: { kind: (typeof offers)[number]["kind"] }) {
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="size-6" aria-hidden="true">
    {kind === "pin" && <><path d="M16 28S7 18 7 12a9 9 0 0 1 18 0c0 6-9 16-9 16Z" /><circle cx="16" cy="12" r="3" /></>}
    {kind === "collaboration" && <><path d="m3 11 7-3 6 3 5-3 8 4-4 10-5 4-11-5L3 11Zm13 0-4 4 3 3 4-3 6 7M4 10l-2 8 4 3m23-10 1 9-4 3M14 24l3-3" /></>}
    {kind === "idea" && <><path d="M11 21c0-4-4-5-4-10a9 9 0 0 1 18 0c0 5-4 6-4 10M11 22h10m-9 4h8m-6 3h4M13 12l3 3 3-3m-3 3v7" /></>}
  </svg>;
}

export default function WebDevelopmentOffers() {
  return (
    <section aria-labelledby="web-offers-heading" className="bg-[#fffae9] px-6 py-12 text-[#121713] sm:px-10 lg:px-[6%] lg:py-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid items-center gap-6 md:grid-cols-[0.9fr_0.1fr_1fr] lg:gap-12">
          <h2 id="web-offers-heading" className="text-[clamp(36px,3.8vw,56px)] font-normal leading-[1.13] tracking-[-0.04em]">What<br />We Offer.</h2>
          <span aria-hidden="true" className="hidden self-start pt-2 text-3xl font-light leading-none text-[#538bc8] md:block">+</span>
          <p className="max-w-[540px] text-xs leading-[1.5] md:justify-self-end lg:text-sm">{webDevelopmentContent.offers.intro}</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3 lg:mt-12 lg:gap-7">
          {offers.map((offer) => (
            <article key={offer.name} style={{ backgroundColor: offer.color }} className="min-h-[250px] rounded-t-[26px] px-6 py-7 text-[#fff6df] sm:px-8 lg:min-h-[350px] lg:px-9 lg:py-8">
              <div className="flex items-start gap-4 lg:gap-5">
                <span style={{ color: offer.color }} className="grid size-11 shrink-0 place-items-center rounded-full bg-[#fffdf4]"><OfferIcon kind={offer.kind} /></span>
                <div className="pt-2">
                  <h3 className="font-[Georgia,'Times_New_Roman',serif] text-base font-normal leading-[1.15] lg:text-xl">{offer.name}</h3>
                  <p className="mt-7 max-w-[240px] text-xs leading-[1.65] text-[#fff6df]/80 lg:mt-9 lg:text-sm">{offer.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
