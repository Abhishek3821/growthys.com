import Image from "next/image";

const services = [
  { title: "Service One", color: "#25b995" },
  { title: "Service Two", color: "#1374c8" },
  { title: "Service Three", color: "#152136" },
];

export default function CmsServices() {
  return (
    <section aria-labelledby="cms-services-heading" className="bg-white px-6 py-12 text-[#1c2024] sm:px-10 lg:px-[6%] lg:py-16">
      <div className="mx-auto max-w-[1250px]">
        <div className="grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="mb-4 inline-block bg-[#fff9db] px-2 py-1 text-[10px] font-bold tracking-[0.08em] text-[#aca044]">OUR SERVICES</p>
            <h2 id="cms-services-heading" className="max-w-[500px] text-[clamp(32px,3.7vw,50px)] font-extrabold leading-[1.08] tracking-[-0.035em]">We provide the best<br className="hidden lg:block" /> service for you.</h2>
            <p className="mt-5 max-w-[440px] text-sm leading-[1.75] text-[#969c9e]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
          </div>
          <div className="relative aspect-[1.65] overflow-hidden rounded-[28px] rounded-tl-[110px] bg-[#e7e8e1] sm:rounded-tl-[150px]">
            <Image src="/images/crm-management/team/planning.webp" alt="A team working together on a laptop in a bright office" fill sizes="(max-width: 767px) 90vw, 52vw" className="object-cover object-[center_40%]" />
          </div>
        </div>
        <div className="mt-9 grid gap-4 sm:grid-cols-3 lg:mt-12 lg:gap-6">
          {services.map((service) => (
            <article key={service.title} style={{ backgroundColor: service.color }} className="rounded-lg px-6 py-7 text-white lg:px-8 lg:py-8">
              <h3 className="text-lg font-bold tracking-[-0.02em]">{service.title}</h3>
              <p className="mt-3 max-w-[300px] text-xs leading-[1.7] text-white/80 sm:text-[13px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
