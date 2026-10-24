import { hrmsContent } from "../data/hrms-content";

const details = hrmsContent.expertise.details;

const stats = [
  { value: "People", label: "First. Always." },
  { value: "Clear", label: "Processes" },
  { value: "Data", label: "Reliable HR Systems" },
];

export default function HrmsDesignerProfile() {
  return (
    <section aria-labelledby="hrms-designer-profile-heading" className="bg-[#f2f0ef] px-6 py-14 text-[#181917] sm:px-10 lg:px-[7%] lg:py-20">
      <div className="mx-auto max-w-[1150px]">
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-14 lg:gap-20">
          <header>
            <p className="text-xs font-bold tracking-[-0.02em] sm:text-sm">GROWTHYS <span aria-hidden="true" className="mx-1 text-[#d77e68]">✦</span> HRMS</p>
            <h2 id="hrms-designer-profile-heading" className="mt-5 max-w-[400px] text-[clamp(32px,3.5vw,48px)] font-bold leading-[1.14] tracking-[-0.035em]">Built by HR and<br className="hidden lg:block" /> Technology<br className="hidden lg:block" /> Experts</h2>
          </header>
          <div>
            <h3 className="max-w-[570px] text-xl font-bold leading-[1.3] tracking-[-0.025em] lg:text-2xl">{hrmsContent.expertise.subtitle}</h3>
            <p className="mt-6 max-w-[570px] text-xs leading-[1.8] text-[#535650] lg:text-sm">{hrmsContent.expertise.description}{" "}{hrmsContent.people.description}</p>
            <dl className="mt-7 grid grid-cols-3 gap-4 lg:mt-8 lg:gap-7">
              {details.map((detail) => <div key={detail.label}><dt className="text-[8px] font-bold tracking-[0.12em] text-[#d0826e] lg:text-[9px]">{detail.label}</dt><dd className="mt-2 text-xs font-semibold lg:text-sm">{detail.value}</dd></div>)}
            </dl>
          </div>
        </div>
        <dl className="mt-12 grid border border-[#777970] sm:grid-cols-3 lg:mt-20">
          {stats.map((stat, index) => <div key={stat.label} className={`flex flex-col items-center justify-center px-5 py-7 text-center lg:py-8 ${index === 1 ? "bg-[#181917] text-[#fffdf4]" : ""}`}><dd className="text-4xl font-bold leading-none tracking-[-0.04em] lg:text-5xl">{stat.value}</dd><dt className="mt-4 text-[9px] font-semibold tracking-[0.045em] lg:text-[10px]">{stat.label}</dt></div>)}
        </dl>
      </div>
    </section>
  );
}
