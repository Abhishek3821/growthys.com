import Link from "next/link";

const metrics = [
  { value: "250+", label: "Projects Completed", icon: "rocket" },
  { value: "98%", label: "Client Satisfaction", icon: "smile" },
  { value: "3.5X", label: "Average ROI Growth", icon: "growth" },
  { value: "120%", label: "Revenue Growth", icon: "revenue" },
] as const;

function ResultIcon({ icon }: { icon: typeof metrics[number]["icon"] }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="size-11" aria-hidden="true">
      {icon === "rocket" && <>
        <path d="M19 31 12 24C18 12 27 6 42 5c-1 15-7 24-19 30l-4-4Zm-4-13-8 1-4 10 9-1m18-1-1 10-10 4 1-9M12 34l-5 5m9-2-5 7M9 30l-6 5" />
        <circle cx="30" cy="17" r="4" />
      </>}
      {icon === "smile" && <>
        <circle cx="24" cy="24" r="17" /><path d="M16 28c4 7 12 7 16 0m-16-9h2m12 0h2" />
      </>}
      {icon === "growth" && <>
        <path d="M7 39V29h6v10H7Zm13 0V21h6v18h-6Zm13 0V14h6v25h-6ZM6 20l12-10 9 5L40 5m-9 0h9v9" />
      </>}
      {icon === "revenue" && <>
        <circle cx="24" cy="24" r="17" /><path d="M29 17h-7a4 4 0 0 0 0 8h4a4 4 0 0 1 0 8h-7m5-20v24" />
      </>}
    </svg>
  );
}

export default function MarketingResults() {
  return (
    <section aria-labelledby="marketing-results-heading" className="mx-auto mb-6 grid max-w-[1800px] gap-9 bg-[linear-gradient(105deg,#1c193e_0%,#252052_52%,#393080_100%)] px-6 py-8 text-white sm:px-9 lg:grid-cols-[minmax(240px,1.5fr)_minmax(0,3.5fr)] lg:items-center lg:gap-8 lg:px-10 lg:py-9">
      <div>
        <p className="mb-3 text-[10px] font-semibold tracking-[0.08em] text-[#c0b3de]">REAL STRATEGIES.</p>
        <h2 id="marketing-results-heading" className="text-[clamp(28px,2.8vw,42px)] font-semibold leading-[1.08] tracking-[-0.025em]">
          Real Results<br />for Real Growth
        </h2>
        <p className="mt-3 max-w-[310px] text-xs leading-relaxed text-[#e1dcef] sm:text-sm">
          We combine creativity, data, and technology to deliver measurable growth for your business.
        </p>
        <Link href="/contact#contact-inquiry" aria-label="Request our case studies through the contact form" className="mt-4 inline-flex min-h-11 items-center gap-3 rounded-sm border border-[#a89acb] px-5 py-2 text-[11px] font-semibold tracking-[0.025em] transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#eed49b]">
          SEE OUR CASE STUDIES <span aria-hidden="true" className="text-base">→</span>
        </Link>
      </div>
      <dl className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-y-0">
        {metrics.map((metric, index) => (
          <div key={metric.icon} className={`relative flex min-w-0 flex-col items-center px-3 text-center ${index > 0 ? "sm:before:absolute sm:before:bottom-1 sm:before:left-0 sm:before:h-[68px] sm:before:w-px sm:before:bg-[#a99cc6]/60" : ""}`}>
            <span className="mb-4 text-[#b6a0dc]"><ResultIcon icon={metric.icon} /></span>
            <dt className="order-2 mt-2 text-[11px] font-medium leading-snug text-[#ddd5ee] sm:text-xs xl:text-sm">{metric.label}</dt>
            <dd className={`text-[clamp(28px,2.7vw,42px)] font-semibold leading-tight tracking-[-0.025em] ${index < 2 ? "text-[#efd7a1]" : "text-white"}`}>{metric.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
