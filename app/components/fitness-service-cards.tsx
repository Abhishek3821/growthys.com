import Link from "next/link";

const services = [
  { title: "Gain Muscle", description: "Focused approach will guide you towards greater muscle gain & enhanced endurance.", icon: "strength", card: "border-[#c6ef3f] bg-[#c6ef3f] text-[#151515]", button: "bg-[#fffdf8] text-[#151515] hover:bg-white" },
  { title: "Lose Weight", description: "Our approach to fat loss goes beyond simply shedding pounds; it’s about a mindset of empowerment.", icon: "weight", card: "border-black bg-black text-[#fffdf8]", button: "bg-[#fffdf8] text-[#151515] hover:bg-white" },
  { title: "Nutrition", description: "We’ll empower you with balanced meals, healthy snacks & smart eating strategies.", icon: "nutrition", card: "border-[#252525] bg-transparent text-[#151515]", button: "bg-[#242424] text-white hover:bg-black" },
] as const;

function ServiceIcon({ icon }: { icon: typeof services[number]["icon"] }) {
  return (
    <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="size-9" aria-hidden="true">
      {icon === "strength" && <><path d="M12 13V8a6 6 0 0 1 12 0v5m-8 0V8a2 2 0 0 1 4 0v5M10 16c-3 3-5 7-5 11 0 5 4 7 13 7s13-2 13-7c0-4-2-8-5-11-5-3-11-3-16 0Z" /><path d="M11 3h14" /></>}
      {icon === "weight" && <><rect x="4" y="5" width="28" height="27" rx="5" /><path d="M10 16a8 8 0 0 1 16 0H10Zm8-2 4-5M9 27h18" /><circle cx="18" cy="14" r="1" /></>}
      {icon === "nutrition" && <><path d="M18 11c-10-7-17 1-13 12 4 12 10 11 13 9 4 2 10 3 13-9 4-11-4-19-13-12ZM18 11c-2-4-1-7 2-10m0 8c6 0 9-3 10-7-6-1-10 2-10 7Z" /><path d="m11 19 2 3 4-5" /></>}
    </svg>
  );
}

export default function FitnessServiceCards() {
  return (
    <section aria-labelledby="fitness-service-cards-heading" className="mx-auto max-w-[1800px] bg-[#fffcf8] px-5 py-14 sm:px-9 lg:px-16 lg:py-20">
      <h2 id="fitness-service-cards-heading" className="sr-only">Fitness and nutrition services</h2>
      <div className="mx-auto grid max-w-[1400px] gap-6 md:grid-cols-3 lg:gap-[clamp(32px,5vw,90px)]">
        {services.map((service) => (
          <article key={service.icon} className={`flex min-h-[340px] flex-col rounded-[16px] border p-6 lg:min-h-[410px] lg:p-7 xl:min-h-[440px] xl:p-8 ${service.card}`}>
            <ServiceIcon icon={service.icon} />
            <h3 className="mt-7 font-[Impact,Haettenschweiler,'Arial_Narrow',sans-serif] text-[28px] font-normal leading-tight tracking-[-0.015em] lg:mt-8 lg:text-[32px]">{service.title}</h3>
            <p className="mb-8 mt-4 max-w-[280px] text-base leading-[1.45] tracking-[-0.025em] lg:text-lg">{service.description}</p>
            <Link href="/contact#contact-inquiry" aria-label={`Book a ${service.title.toLowerCase()} consultation`} className={`mt-auto inline-flex min-h-11 w-fit items-center gap-4 rounded-lg px-4 py-2 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current lg:text-sm ${service.button}`}>
              Book Now <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden="true"><path d="M5 15 15 5M5 5h10v10" /></svg>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
