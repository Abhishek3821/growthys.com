const items = [
  { icon: "person", corner: "-left-4 -top-4 rounded-tl-[54px] border-l-[18px] border-t-[18px]" },
  { icon: "briefcase", corner: "-right-4 -top-4 rounded-tr-[54px] border-r-[18px] border-t-[18px]" },
  { icon: "cart", corner: "-bottom-4 -left-4 rounded-bl-[54px] border-b-[18px] border-l-[18px]" },
  { icon: "growth", corner: "-bottom-4 -right-4 rounded-br-[54px] border-b-[18px] border-r-[18px]" },
] as const;

function InfographicIcon({ icon }: { icon: typeof items[number]["icon"] }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-7 sm:size-8" aria-hidden="true">
      {icon === "person" && <><circle cx="16" cy="10" r="6" fill="currentColor" stroke="none" /><path d="M5 29v-4c0-6 4-10 11-10s11 4 11 10v4H5Z" fill="currentColor" stroke="none" /></>}
      {icon === "briefcase" && <><rect x="3" y="10" width="26" height="18" rx="4" fill="currentColor" stroke="none" /><path d="M11 10V7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3" /><path d="M3 17c9 5 17 5 26 0M16 18v4" stroke="#4269e7" /></>}
      {icon === "cart" && <><path d="M3 5h4l5 18h13l4-13H9m5 0 1 8m7-8-1 8M10 20h16" /><circle cx="13" cy="28" r="2" fill="currentColor" /><circle cx="24" cy="28" r="2" fill="currentColor" /></>}
      {icon === "growth" && <><path d="M5 28v-6m6 6V17m6 11V12m6 16V8m6 20V4M3 17l10-6 7 1L29 3m-7 0h7v7" /></>}
    </svg>
  );
}

export default function BlueInfographic() {
  return (
    <section aria-labelledby="blue-infographic-heading" className="mx-auto max-w-[1800px] overflow-hidden bg-white px-8 py-10 text-[#414141] sm:px-12 md:pb-10 md:pt-12 lg:px-16">
      <h2 id="blue-infographic-heading" className="sr-only">Four-part infographic</h2>
      <ol className="mx-auto grid max-w-[1200px] gap-x-10 gap-y-8 md:grid-cols-2 lg:gap-x-12 lg:gap-y-10">
        {items.map((item, index) => (
          <li key={item.icon} className="relative isolate">
            <span className={`pointer-events-none absolute -z-10 h-[62%] w-[55%] border-[#3b80ee] ${item.corner}`} aria-hidden="true" />
            <article className="relative flex min-h-[220px] items-center overflow-hidden rounded-[30px] border-2 border-[#efefef] bg-[linear-gradient(145deg,#fafafa,#f6f6f6)] px-5 py-6 shadow-[0_18px_26px_-12px_rgba(0,0,0,0.12),8px_12px_0_-2px_#fafafa] md:h-[clamp(200px,30svh,290px)] md:min-h-0 lg:px-6">
              <span className={`pointer-events-none absolute -bottom-[13%] select-none font-[Arial,Helvetica,sans-serif] text-[clamp(170px,min(22vw,28svh),280px)] font-bold italic leading-none tracking-[-0.09em] text-transparent [-webkit-text-stroke:1.2px_#4386bd] ${index % 2 === 0 ? "-left-[5%]" : "-right-[3%]"}`} aria-hidden="true">{index + 1}</span>
              <span className={`absolute top-4 grid size-13 place-items-center rounded-full border-[3px] border-white bg-[linear-gradient(140deg,#3d69e5,#4261d9)] text-white shadow-[0_3px_6px_rgba(0,0,0,0.17)] ${index % 2 === 0 ? "right-4" : "left-4"}`}><InfographicIcon icon={item.icon} /></span>
              <div className={`relative z-10 mt-6 w-[68%] text-center ${index % 2 === 0 ? "ml-auto" : "mr-auto"}`}>
                <h3 className="text-sm font-bold tracking-[0.025em] lg:text-lg">INFOGRAPHIC<span className="sr-only"> {index + 1}</span></h3>
                <p className="mx-auto mt-3 max-w-[280px] text-xs leading-[1.3] text-[#999] lg:text-[15px]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed nibh euismod tincidunt ut laoreet.</p>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
