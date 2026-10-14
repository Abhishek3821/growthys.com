const stats = [
  { value: "12+", label: "YEARS OF EXPERIENCE" },
  { value: "40+", label: "BRANDS BUILT" },
  { value: "25+", label: "AWARDS WON" },
  { value: "100+", label: "CAMPAIGNS LAUNCHED" },
];

const awards = [
  { name: "CANNES LIONS", detail: "2022 · Silver Lion", style: "font-sans tracking-[0.05em]" },
  { name: "THE ONE SHOW", detail: "2021 · Merit", style: "font-sans tracking-[0.01em]" },
  { name: "D&AD", detail: "2020 · Pencil", style: "font-sans tracking-[-0.035em]" },
  { name: "CLIO AWARDS", detail: "2023 · Bronze", style: "font-[Georgia,serif] tracking-[0.025em]" },
  { name: "ADWEEK 100", detail: "2024 · Honoree", style: "font-sans tracking-[-0.02em]" },
];

export default function HrmsAwards() {
  return (
    <section aria-labelledby="hrms-awards-heading" className="relative isolate overflow-hidden bg-[#131413] px-6 py-12 text-[#f6f0e6] sm:px-10 lg:px-[6%] lg:py-14">
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 -z-10 h-[380px] w-[650px] -rotate-[25deg] rounded-[50%] border-[55px] border-white/[0.015]" />
      <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.85fr_2.15fr] lg:gap-14">
        <header>
          <p className="text-[9px] font-semibold tracking-[0.12em] text-[#d65b3c] lg:text-[10px]">CERTIFICATES &amp; AWARDS</p>
          <h2 id="hrms-awards-heading" className="mt-4 font-[Georgia,'Times_New_Roman',serif] text-[clamp(30px,3vw,42px)] font-normal leading-[1.05] tracking-[-0.025em]">Recognition is<br />Great. Impact<br />is Better.</h2>
        </header>
        <div>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4 sm:gap-5">
            {stats.map((stat) => <div key={stat.label}><dd className="font-[Georgia,'Times_New_Roman',serif] text-[clamp(38px,3.8vw,52px)] leading-none tracking-[-0.05em] text-[#de5938]">{stat.value}</dd><dt className="mt-3 text-[8px] font-bold tracking-[0.025em] text-[#d5d2ca] lg:text-[9px]">{stat.label}</dt></div>)}
          </dl>
          <ul aria-label="Award recognitions" className="mt-10 grid grid-cols-2 gap-y-7 sm:grid-cols-5 sm:gap-y-0 lg:mt-11">
            {awards.map((award, index) => <li key={award.name} className={`flex flex-col items-center justify-between px-3 text-center ${index > 0 ? "sm:border-l sm:border-[#41413c]" : ""}`}><p className={`max-w-[110px] text-base font-semibold leading-[1.15] text-[#dedbd4] ${award.style}`}>{award.name}</p><p className="mt-3 whitespace-nowrap text-[8px] text-[#b1b0a8]">{award.detail}</p></li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
