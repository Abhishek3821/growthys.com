import { digitalMarketingOutcomes } from "../data/digital-marketing-content";
import Image from "next/image";

function Mascot({ blue = false }: { blue?: boolean }) {
  return (
    <Image src={blue ? "/images/digital-marketing/graphics/lasting-growth.webp" : "/images/digital-marketing/graphics/adaptive-strategy.webp"} alt="" width={3840} height={2880} quality={95} sizes="(max-width: 1023px) 45vw, 360px" className="h-full w-full object-contain" />
  );
}

function Avatar({ index, className = "size-11" }: { index: number; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-full border-2 border-white bg-[#ffdb71] ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="absolute inset-0 size-full p-[20%] text-[#5a4b27]" aria-hidden="true">
        {index % 3 === 0 ? <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><path d="m12 12 7-7" /></> : index % 3 === 1 ? <path d="M4 19V9m8 10V5m8 14V12M2 21h20" /> : <><path d="M20 8a8 8 0 1 0 0 8M20 3v5h-5" /><path d="m8 12 3 3 5-6" /></>}
      </svg>
    </div>
  );
}

export default function DriverBenefits() {
  return (
    <section aria-label="Digital marketing outcomes and reporting" className="mx-auto max-w-[1800px] px-5 py-10 text-[#38352e] sm:px-7 lg:px-8 lg:py-14">
      <div className="grid gap-5 sm:grid-cols-2 lg:h-[clamp(660px,58vw,940px)] lg:grid-cols-[1fr_1fr_1.18fr] lg:grid-rows-[0.62fr_1fr] lg:gap-6">
        <article className="relative isolate min-h-[300px] overflow-hidden rounded-[28px] bg-[#ffe9df] p-6 sm:col-span-2 lg:col-span-2 lg:min-h-0 lg:p-8">
          <div className="relative z-10 max-w-[45%]">
            <h2 className="text-[clamp(24px,2.4vw,38px)] font-semibold leading-[1.12] tracking-[-0.035em] text-[#753921]">{digitalMarketingOutcomes[0].title}</h2>
            <p className="mt-3 text-sm leading-snug text-[#79716c] lg:text-base">{digitalMarketingOutcomes[0].description}</p>
          </div>
          <div className="absolute bottom-0 right-[8%] top-0 w-[48%]"><Image src="/images/digital-marketing/graphics/business-results.webp" alt="A small-business owner checking customer orders and holding a parcel" fill quality={95} sizes="(max-width: 1023px) 45vw, 35vw" className="object-contain object-bottom" /></div>
          <div className="absolute right-[36%] top-[9%] w-[19%] min-w-[95px] -rotate-2 rounded-lg bg-white p-2 shadow-md">
            <p className="mb-2 text-[9px] font-semibold lg:text-xs">What We Track</p>
            {["Cost Per Lead", "Conversion Rate", "Customer Retention"].map((name, index) => <div key={name} className="mt-1.5 flex items-center gap-1.5"><Avatar index={index} className="size-4 shrink-0 lg:size-5" /><span className="truncate text-[6px] lg:text-[8px]">{name}</span><span className="ml-auto text-[6px]">{index + 1}</span></div>)}
          </div>
          <div className="absolute bottom-[23%] right-[3%] flex items-center gap-2 rounded-xl bg-white p-2.5 shadow-sm lg:p-3"><Avatar index={1} className="size-7" /><div><p className="text-[9px] font-semibold lg:text-xs">Performance</p><p className="mt-1 text-[8px] text-[#8d8d8d] lg:text-[10px]">Fully tracked</p></div></div>
          <span className="absolute right-[7%] top-[12%] grid size-9 place-items-center rounded-full bg-white text-xl" aria-hidden="true">♡</span>
          <svg viewBox="0 0 600 180" fill="none" className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 w-full" aria-hidden="true"><path d="M-20 100c80 160 40-100 120 30s90 20 100 80M350-100c200-30 30 180 220 80" stroke="#ffd6c3" strokeWidth="13" /></svg>
        </article>

        <article className="relative flex min-h-[430px] flex-col overflow-hidden rounded-[28px] bg-[#f8edff] p-6 text-[#622791] lg:col-start-1 lg:row-start-2 lg:min-h-0 lg:p-8">
          <span className="absolute left-5 top-6 rounded-md bg-white px-3 py-2 text-xs text-[#9d6cb8]">New Update!</span>
          <div className="relative mb-5 flex-1 min-h-[200px] pt-6 lg:min-h-0"><Mascot /><div className="absolute bottom-2 right-0 -rotate-3 rounded-xl bg-white px-3 py-4 text-center shadow-sm"><p className="text-[8px] text-[#aaa]">Weekly improvements</p><span className="mt-2 block text-4xl" aria-hidden="true">🏅</span></div></div>
          <h2 className="text-[clamp(25px,2.3vw,38px)] font-semibold leading-[1.12] tracking-[-0.035em]">{digitalMarketingOutcomes[1].title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#716779] lg:text-base">{digitalMarketingOutcomes[1].description}</p>
        </article>

        <article className="relative flex min-h-[430px] flex-col overflow-hidden rounded-[28px] bg-[#eaf3ff] p-6 text-[#205885] lg:col-start-2 lg:row-start-2 lg:min-h-0 lg:p-8">
          <div className="relative mb-5 flex-1 min-h-[200px] lg:min-h-0">
            <div className="absolute left-0 right-2 top-3 -rotate-6 rounded-xl border-[6px] border-[#dceaff] bg-white p-4 text-[#343943] shadow-sm"><p className="text-sm font-semibold">New Update!</p><div className="mt-3 rounded-lg bg-[#edf5ff] p-2"><p className="text-[10px] text-[#9b9fa8]">Weekly campaign reviews</p><p className="mt-1 text-xs font-semibold">Test → Improve</p></div><p className="mt-2 text-[9px] text-[#9b9fa8]">▧ Campaign optimization</p></div>
            <div className="absolute -bottom-3 -right-5 h-[68%] w-[83%]"><Mascot blue /></div>
          </div>
          <h2 className="text-[clamp(25px,2.3vw,38px)] font-semibold leading-[1.12] tracking-[-0.035em]">{digitalMarketingOutcomes[2].title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#687887] lg:text-base">{digitalMarketingOutcomes[2].description}</p>
        </article>

        <article className="relative isolate min-h-[720px] overflow-hidden rounded-[28px] bg-[#fffae5] p-6 sm:col-span-2 lg:col-span-1 lg:col-start-3 lg:row-span-2 lg:row-start-1 lg:min-h-0 lg:p-8">
          <h2 className="text-[clamp(25px,2.4vw,38px)] font-semibold leading-tight tracking-[-0.035em] text-[#aa920a]">{digitalMarketingOutcomes[3].title}</h2>
          <p className="mt-3 text-sm lg:text-base">Know where every rupee goes.</p>
          <div className="absolute -bottom-12 left-[9%] right-[9%] top-[150px] rounded-t-[32px] border-[5px] border-[#e9e5ce] bg-[#fafafa] px-3 pt-3 shadow-sm lg:top-[160px]">
            <div className="flex justify-between px-2 text-[10px] font-semibold"><span>9:41</span><span aria-hidden="true">▮▮▮ ▰</span></div>
            <p className="mt-6 text-center text-sm font-semibold">{digitalMarketingOutcomes[3].description}</p>
            <div className="mt-4 flex justify-between text-[9px] text-[#818181]"><span className="rounded-full bg-[#ffdd27] px-3 py-1.5 font-semibold text-[#554b13]">This Week</span><span className="px-1 py-1.5">This Month</span><span className="px-1 py-1.5">All Time</span></div>
            <div className="relative mt-3 flex h-[46%] min-h-[200px] items-end justify-center gap-2 overflow-hidden rounded-[20px] bg-[#ffda26] px-4 pb-2">
              <span className="absolute left-3 top-4 text-3xl text-white/80" aria-hidden="true">✦</span><span className="absolute right-4 top-8 text-xl text-white/80" aria-hidden="true">✦</span>
              {[{ rank: 2, index: 0, height: "h-[56%]" }, { rank: 1, index: 1, height: "h-[76%]" }, { rank: 3, index: 3, height: "h-[46%]" }].map((person) => <div key={person.rank} className={`relative w-[28%] rounded-t-full bg-[#ffe988] text-center ${person.height}`}><div className="absolute -top-5 left-1/2 -translate-x-1/2"><Avatar index={person.index} className="size-12 lg:size-14" /><span className="relative -mt-2 inline-block rounded-full bg-white px-1.5 text-[10px]">{person.rank}</span></div></div>)}
            </div>
            <div className="ml-auto mt-7 w-[42%] text-center text-[9px] text-[#999]">Clear reporting<p className="mt-4 text-xl font-semibold text-[#6e6e6e]">ROI</p></div>
          </div>
          <div className="absolute bottom-[12%] left-[2%] z-10 w-[62%] rounded-xl border border-[#efeadb] bg-white p-3 shadow-md lg:p-4"><p className="text-[10px] font-semibold lg:text-xs">Campaign performance</p><div className="mt-3 flex justify-between text-[8px] text-[#a2a2a2]"><span>Leads</span><span>Sales</span></div><svg viewBox="0 0 180 100" className="mt-2 w-full" aria-hidden="true"><defs><linearGradient id="driver-hours-gradient" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#ffdb28" /><stop offset="1" stopColor="#fffdf0" /></linearGradient></defs><path d="M0 75Q10 60 20 72T40 65T60 52T80 25T100 35T120 50T140 65T160 48T180 28V100H0Z" fill="url(#driver-hours-gradient)" /></svg><p className="mt-1 text-[7px] text-[#bbb]">Feb　Mar　Apr　May　Jun　Jul　Aug</p></div>
          <svg viewBox="0 0 450 170" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[18%] w-full" aria-hidden="true"><path d="M0 150Q70 40 140 50T270 20T450 65V170H0Z" fill="#ffe875" /><path d="M-30 130Q40 40 125 110T280 95T480 100" stroke="#ffda43" strokeWidth="24" fill="none" /><path d="M50 180Q120 50 220 140T470 130" stroke="#ffda43" strokeWidth="23" fill="none" /></svg>
        </article>
      </div>
    </section>
  );
}
