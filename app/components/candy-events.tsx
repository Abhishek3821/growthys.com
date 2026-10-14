import Image from "next/image";
import Link from "next/link";

function PriceBadge({ price, lines, flower = false, color, ink }: { price: string; lines: string[]; flower?: boolean; color: string; ink: string }) {
  return (
    <div className="relative grid size-[108px] shrink-0 place-items-center sm:size-[124px] lg:size-[138px]" style={{ color: ink }}>
      <svg viewBox="0 0 120 120" fill={color} className="absolute inset-0 size-full" aria-hidden="true">
        {flower ? <>{[0, 60, 120, 180, 240, 300].map((angle) => <ellipse key={angle} cx="60" cy="34" rx="23" ry="32" transform={`rotate(${angle} 60 60)`} />)}<circle cx="60" cy="60" r="34" /></> : <><rect x="12" y="12" width="96" height="96" rx="5" />{[15, 38, 61, 84, 105].map((position) => <g key={position}><circle cx={position} cy="14" r="13" /><circle cx={position} cy="106" r="13" /><circle cx="14" cy={position} r="13" /><circle cx="106" cy={position} r="13" /></g>)}</>}
      </svg>
      <div className="relative px-2 text-center">
        <p className="font-[Georgia,'Times_New_Roman',serif] text-[36px] leading-none tracking-[-0.07em] lg:text-[44px]">{price}</p>
        <p className="mt-2 text-[9px] font-bold leading-[1.05] tracking-[0.025em] lg:text-[10px]">{lines.map((line) => <span key={line} className="block">{line}</span>)}</p>
      </div>
    </div>
  );
}

export default function CandyEvents() {
  return (
    <section aria-labelledby="candy-events-heading" className="mx-auto grid max-w-[1800px] bg-[#fcf9f2] text-[#823044] md:grid-cols-2">
      <div className="flex flex-col items-start px-5 py-12 sm:px-10 lg:px-[clamp(40px,5.5vw,90px)] lg:py-16">
        <p className="mb-7 text-[10px] font-bold tracking-[0.035em] text-[#9a5969] sm:text-xs">WEDDINGS · BIRTHDAYS · POP-UPS &amp; MORE</p>
        <h2 id="candy-events-heading" className="font-[Georgia,'Times_New_Roman',serif] text-[clamp(38px,4.5vw,72px)] font-normal leading-[0.98] tracking-[-0.055em]">Your event called.<br />It wants candy!</h2>
        <p className="mt-7 max-w-[500px] text-sm leading-[1.4] tracking-[-0.025em] text-[#a46573] lg:text-base">Candy concierge—guided tastings, a mix-your-own candy bag for every guest, and a candy cart that doubles as a conversation piece.</p>
        <ul aria-label="Event pricing" className="mt-9 flex flex-wrap gap-4 lg:mt-12 lg:gap-5">
          <li><PriceBadge price="$399" lines={["CART FEE", "(3HRS)"]} color="#ffb38f" ink="#8d3545" /></li>
          <li><PriceBadge price="$8" lines={["PER", "GUEST"]} flower color="#8f1938" ink="#fff0e9" /></li>
          <li><PriceBadge price="$99" lines={["PER", "ADDED HR"]} color="#facdd9" ink="#8d3545" /></li>
        </ul>
        <Link href="/contact#contact-inquiry" className="mt-10 inline-flex min-h-11 items-center justify-center rounded-sm bg-[#b72c3d] px-5 py-3 text-[10px] font-bold tracking-[0.045em] text-[#fff3eb] transition-colors hover:bg-[#982237] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#823044] lg:mt-14 lg:text-xs">PLAN YOUR EVENT</Link>
      </div>

      <div className="relative isolate flex min-h-[570px] items-center justify-center overflow-hidden bg-[repeating-linear-gradient(90deg,#fbd1dc_0_16px,#fff9ee_16px_30px)] px-10 py-16 sm:min-h-[640px] lg:min-h-[680px]">
        <div className="relative h-[410px] w-[76%] max-w-[460px] rotate-[2deg] border-[6px] border-[#803b45] bg-[#898b7e] shadow-[8px_12px_20px_rgba(109,45,60,0.15)] sm:h-[480px] lg:h-[520px]">
          <Image src="/images/services/graphic-designing-candy-cart.png" alt="A burgundy candy cart stocked with jars of colourful sweets and fresh flowers" fill sizes="(max-width: 767px) 70vw, 500px" className="object-cover object-center" />
          <span className="pointer-events-none absolute -right-10 -top-2 h-6 w-28 rotate-[30deg] bg-[#bd2a39] opacity-95" aria-hidden="true" />
          <span className="pointer-events-none absolute -bottom-3 -left-9 h-6 w-28 rotate-[14deg] bg-[#bd2a39] opacity-95" aria-hidden="true" />
          <span className="absolute -left-1 -top-16 rounded-[50%] border-[3px] border-[#b54c40] bg-[#ffb28c] px-6 py-3 text-center font-[Georgia,'Times_New_Roman',serif] text-xl font-bold italic leading-[0.95] shadow-[inset_0_0_0_3px_#ffd5b3] -rotate-[12deg] lg:text-2xl" aria-hidden="true">designed<br />to delight!</span>
          <span className="absolute -left-14 top-2 grid size-24 -rotate-[14deg] place-items-center rounded-full border-[3px] border-[#882d42] bg-[#a6b5f6] text-center text-white shadow-[inset_0_0_0_4px_#fac8d6]" aria-hidden="true"><span className="absolute top-2 text-3xl">🍑</span><span className="relative mt-6 text-xl font-black tracking-[-0.055em]">nectar</span></span>
          <div className="absolute -bottom-10 -right-14 z-10 w-[185px] rotate-[12deg] rounded-sm border border-[#a97682] bg-[#fffaf4] p-4 text-center font-[Georgia,'Times_New_Roman',serif] text-sm italic leading-[1.5] shadow-sm sm:w-[205px] lg:text-base">
            <span className="absolute left-2 top-1/2 size-2 -translate-y-1/2 rounded-full border border-[#b88996]" aria-hidden="true" />
            Candy Curated For:<br /><span className="font-bold underline decoration-dotted underline-offset-4">Your Tastebuds</span>
          </div>
          <svg viewBox="0 0 100 120" fill="none" stroke="#9e81b5" strokeWidth="3" strokeLinecap="round" className="pointer-events-none absolute -bottom-20 right-[12%] h-32 w-24 -rotate-12" aria-hidden="true"><path d="M61 34C1-5 0 50 61 34 44-7 96 0 61 34m0 0C17 55 15 73 35 85s-8 24-9 26m35-77c29 36-31 57-14 72" /></svg>
        </div>
      </div>
    </section>
  );
}
