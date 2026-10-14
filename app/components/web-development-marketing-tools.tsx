const tools = [
  { name: "Audio marketing", color: "#3067f2", kind: "audio" },
  { name: "Search marketing", color: "#f39731", kind: "search" },
  { name: "Video marketing", color: "#26278c", kind: "video" },
  { name: "Social marketing", color: "#ffd005", kind: "social" },
  { name: "Campaign management", color: "#3067f2", kind: "settings" },
] as const;

function ToolIcon({ kind }: { kind: (typeof tools)[number]["kind"] }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="size-[42px] sm:size-12 lg:size-14" aria-hidden="true">
      {kind === "audio" && <><path d="M8 18h7l10-8v28l-10-8H8V18ZM32 16c5 5 5 11 0 16m5-22c9 8 9 20 0 28" /></>}
      {kind === "search" && <><circle cx="21" cy="21" r="12" /><path d="m30 30 10 10M17 15a7 7 0 0 1 9 0" /></>}
      {kind === "video" && <><rect x="7" y="11" width="34" height="26" rx="8" /><path d="m20 17 11 7-11 7V17Z" /></>}
      {kind === "social" && <><rect x="9" y="9" width="30" height="30" rx="8" /><circle cx="24" cy="24" r="7" /><circle cx="33" cy="15" r="1.5" fill="currentColor" stroke="none" /></>}
      {kind === "settings" && <><rect x="11" y="9" width="27" height="30" rx="2" /><path d="M8 14V6h23M21 18l2-3h4l2 3 3 1v4l-2 2v3l-4 2h-3l-3-2v-3l-3-2v-4l4-1Z" /><circle cx="25" cy="23" r="3.5" /></>}
    </svg>
  );
}

export default function WebDevelopmentMarketingTools() {
  return (
    <section aria-labelledby="web-marketing-tools-heading" className="bg-[#fffae9] px-6 py-12 text-[#121713] sm:px-10 lg:px-[6%] lg:py-16">
      <div className="mx-auto max-w-[1400px]">
        <h2 id="web-marketing-tools-heading" className="text-[clamp(36px,3.8vw,56px)] font-normal leading-[1.13] tracking-[-0.04em]">Marketing Tools.</h2>
        <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:mt-14 lg:grid-cols-5 lg:gap-7">
          {tools.map((tool) => (
            <li key={tool.name} className="flex flex-col items-center text-center">
              <h3 className="text-sm font-medium leading-[1.1] tracking-[-0.025em] sm:text-base lg:text-lg">LOREM IPSUM<br />DOLOR SIT<br />AMET<span className="sr-only"> — {tool.name}</span></h3>
              <p className="mt-6 text-[10px] text-[#8f9681] lg:mt-7 lg:text-xs">Lorem ipsum</p>
              <div style={{ backgroundColor: tool.color }} className="mt-6 grid aspect-square w-full max-w-[185px] place-items-center rounded-full text-[#fff5d2]/80 lg:mt-7 lg:max-w-[230px]">
                <ToolIcon kind={tool.kind} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
