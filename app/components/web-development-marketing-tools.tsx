import { webDevelopmentContent } from "../data/web-development-content";
const tools = webDevelopmentContent.tools.items.map((tool, index) => ({
  ...tool,
  color: ["#3067f2", "#f39731", "#26278c", "#ffd005", "#3067f2"][index],
  kind: (["cms", "frontend", "backend", "store", "cloud"] as const)[index],
}));

function ToolIcon({ kind }: { kind: (typeof tools)[number]["kind"] }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="size-[42px] sm:size-12 lg:size-14" aria-hidden="true">
      {kind === "cms" && <><path d="M12 5h18l8 8v30H12V5Zm18 0v9h8M18 22h14M18 29h14M18 36h9" /></>}
      {kind === "frontend" && <><rect x="5" y="8" width="38" height="28" rx="3" /><path d="M1 41h46M18 18l-6 5 6 5m12-10 6 5-6 5m-7-12-3 15" /></>}
      {kind === "backend" && <><ellipse cx="24" cy="10" rx="16" ry="6" /><path d="M8 10v28c0 8 32 8 32 0V10M8 23c0 8 32 8 32 0M8 34c0 8 32 8 32 0" /></>}
      {kind === "store" && <><path d="M3 7h6l7 26h23l6-18H12m4 12h25" /><circle cx="19" cy="41" r="3" /><circle cx="36" cy="41" r="3" /></>}
      {kind === "cloud" && <><path d="M12 34a10 10 0 0 1-1-20 14 14 0 0 1 27-1 11 11 0 0 1-1 21M24 43V21m-7 7 7-7 7 7" /></>}
    </svg>
  );
}

export default function WebDevelopmentMarketingTools() {
  return (
    <section aria-labelledby="web-marketing-tools-heading" className="bg-[#fffae9] px-6 py-12 text-[#121713] sm:px-10 lg:px-[6%] lg:py-16">
      <div className="mx-auto max-w-[1400px]">
        <h2 id="web-marketing-tools-heading" className="text-[clamp(36px,3.8vw,56px)] font-normal leading-[1.13] tracking-[-0.04em]">{webDevelopmentContent.tools.title}</h2>
        <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:mt-14 lg:grid-cols-5 lg:gap-7">
          {tools.map((tool) => (
            <li key={tool.name} className="flex flex-col items-center text-center">
              <h3 className="text-sm font-medium leading-[1.1] tracking-[-0.025em] sm:text-base lg:text-lg">{tool.name}<br />{tool.tagline}</h3>
              <p className="mt-6 text-[10px] text-[#8f9681] lg:mt-7 lg:text-xs">{tool.description}</p>
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
