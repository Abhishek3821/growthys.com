const steps = [
  { number: "01", title: "PROJECT", position: "md:order-1" },
  { number: "02", title: "ANALYSIS", position: "md:order-2" },
  { number: "03", title: "QUALITY", position: "md:order-4" },
  { number: "04", title: "FINANCE", position: "md:order-3" },
] as const;

export default function CrmProcess() {
  return (
    <section aria-labelledby="crm-process-heading" className="mx-auto max-w-[1800px] overflow-hidden bg-[#eefbff] px-6 py-10 text-[#72747b] sm:px-10 md:pt-14 lg:px-16">
      <h2 id="crm-process-heading" className="sr-only">Project, analysis, quality and finance</h2>
      <div className="relative isolate mx-auto max-w-[1200px]">
        <svg viewBox="0 0 1200 640" preserveAspectRatio="none" fill="none" className="pointer-events-none absolute -inset-y-5 inset-x-0 -z-10 hidden h-[calc(100%+40px)] w-full md:block" aria-hidden="true">
          <path d="M45 135v110q0 42 42 42h420q42 0 42-42V55q0-40 40-40M815 15h100q40 0 40 40v215q0 40-40 40H810M600 300q-40 0-40 40v245q0 40-40 40H85q-40 0-40-40V470" stroke="#51408c" strokeWidth="3" strokeDasharray="1 11" strokeLinecap="round" />
        </svg>
        <ol className="grid gap-x-12 gap-y-10 md:grid-cols-2 md:gap-y-14 lg:gap-x-16">
          {steps.map((step) => (
            <li key={step.number} className={`relative isolate h-[220px] md:h-[clamp(190px,29svh,260px)] ${step.position}`}>
              <div className="absolute left-0 top-0 grid size-[104px] place-items-start rounded-[32px] bg-[linear-gradient(135deg,#8524b1_0%,#5420bb_45%,#3026be_100%)] p-4 text-[32px] font-light leading-none tracking-[-0.035em] text-[#eeeaff] shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)] md:size-[clamp(90px,10vw,135px)] lg:p-5 lg:text-[clamp(30px,4.5svh,42px)]">{step.number}</div>
              <article className="absolute bottom-[9%] left-[12%] right-0 top-[21%] flex flex-col justify-center overflow-hidden rounded-[30px] border border-white/85 bg-[linear-gradient(105deg,rgba(255,255,255,0.92)_0%,rgba(244,243,251,0.80)_35%,rgba(207,205,227,0.78)_100%)] py-4 pl-[22%] pr-[7%] shadow-[12px_18px_20px_rgba(70,70,83,0.17),inset_1px_1px_3px_rgba(255,255,255,0.9)] backdrop-blur-[10px] lg:rounded-[34px]">
                <h3 className="text-[clamp(23px,2.7vw,38px)] font-normal leading-tight tracking-[0.035em] md:text-[clamp(22px,min(2.7vw,4.4svh),38px)]">{step.title}</h3>
                <p className="mt-2 max-w-[320px] text-[11px] leading-[1.25] text-[#9a9aa2] md:text-[clamp(10px,1.9svh,14px)]">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
