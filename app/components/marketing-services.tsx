import Link from "next/link";

const services = [
  { title: "Strategy & Planning", description: "Custom strategies built for your business goals.", icon: "strategy" },
  { title: "Search Engine Optimization", description: "Rank higher and get found by the right audience.", icon: "search" },
  { title: "Social Media Marketing", description: "Engage your audience and build your brand online.", icon: "social" },
  { title: "Content Marketing", description: "Create content that attracts, educates & converts.", icon: "content" },
  { title: "Paid Advertising", description: "High-performing ads that drive leads and sales.", icon: "advertising" },
  { title: "Email Marketing", description: "Nurture leads and turn subscribers into customers.", icon: "email" },
] as const;

function ServiceIcon({ icon }: { icon: typeof services[number]["icon"] }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" className="size-12" aria-hidden="true">
      {icon === "strategy" && <>
        <circle cx="22" cy="26" r="17" /><circle cx="22" cy="26" r="12" /><circle cx="22" cy="26" r="7" />
        <path d="m22 26 16-16m-5 5 1-7 5-5 1 6 6 1-5 5-8 0M10 41l-3 3m27-3 3 3" />
      </>}
      {icon === "search" && <>
        <path d="M8 17h10L35 8v29l-17-9H8a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3Zm10 0v11m-7 0 3 14h7l-4-14M35 18a5 5 0 0 1 0 10m6-15 3-3m-2 12h4m-5 9 3 3M9 17v11" />
      </>}
      {icon === "social" && <>
        <path d="M25 5H10a3 3 0 0 0-3 3v32a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V28M15 5v4h8V5m-7 33h6" />
        <path d="M34 9c-5-8-16 1 0 11C50 10 39 1 34 9Z" />
        <path d="m15 17-3 3c1 7 5 11 12 12l3-3-5-4-3 2-3-3 2-3-3-4Z" />
      </>}
      {icon === "content" && <>
        <path d="m10 35 6-21L29 7l12 12-7 13-21 6-7 5 4-8Zm19-28 5-5 12 12-5 5M10 35l11-11" />
        <circle cx="24" cy="21" r="4" /><path d="m7 42 10-3" />
      </>}
      {icon === "advertising" && <>
        <rect x="4" y="8" width="37" height="28" rx="2" /><path d="M22 36v7m-7 1h14M10 30v-7h5v7m5 0V19h5v11m5 0V15h5v15M9 18l10-6 6 2L39 4m-6 0h6v6" />
      </>}
      {icon === "email" && <>
        <path d="m6 23 18-15 18 15v20H6V23Zm0 0 18 13 18-13M6 43l13-11m23 11L29 32" />
        <path d="M12 27V10h24v17M21 10V6h7v4" />
        <circle cx="24" cy="21" r="6" /><path d="M26 24v-6h-2a3 3 0 1 0 2 5c2 3 5 0 4-3" />
      </>}
    </svg>
  );
}

export default function MarketingServices() {
  return (
    <section id="marketing-services" aria-labelledby="marketing-services-heading" className="mx-auto mt-14 max-w-[1800px] rounded-[26px] bg-white px-6 py-10 sm:px-9 lg:mt-20 lg:px-10 lg:py-12">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
        <div>
          <p className="mb-2 text-xs font-bold tracking-[0.06em] text-[#8765c5]">WHAT WE DO</p>
          <h2 id="marketing-services-heading" className="text-[clamp(24px,2.5vw,36px)] font-semibold leading-tight tracking-[-0.035em] text-[#23232c]">
            Marketing Services That Make an <span className="text-[#7854bb]">Impact</span>
          </h2>
        </div>
        <Link href="/#services" className="inline-flex min-h-11 items-center gap-3 text-xs font-bold tracking-[0.025em] text-[#7854bb] transition-colors hover:text-[#51308c] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7854bb]">
          EXPLORE ALL SERVICES <span aria-hidden="true" className="text-lg">→</span>
        </Link>
      </div>
      <ul className="grid grid-cols-1 gap-4 min-[380px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
        {services.map((service) => (
          <li key={service.icon} className="flex h-full flex-col items-center rounded-xl border border-[#eeedf2] bg-white px-5 py-7 text-center shadow-[0_2px_10px_rgba(35,35,44,0.025)]">
            <span className="mb-5 text-[#9473cb]"><ServiceIcon icon={service.icon} /></span>
            <h3 className="flex min-h-10 max-w-[150px] items-center justify-center text-sm font-semibold leading-snug text-[#292833]">{service.title}</h3>
            <p className="mt-2 max-w-[160px] text-[13px] leading-[1.6] text-[#64616d]">{service.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
