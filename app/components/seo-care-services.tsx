import Image from "next/image";
import Link from "next/link";

const services = [
  { title: "Virtual Consultation", image: "consultation", description: "Virtual consultation services are increasingly popular in the health industry, especially given recent technological advances." },
  { title: "Make Appointment", image: "appointment", description: "Whether you’re seeking medical advice, follow-up care, or simply have questions about your health." },
  { title: "Online Pharmacy", image: "pharmacy", description: "Our comprehensive selection of medicine, supplements, and healthcare products is just a click away, ensuring convenient care." },
];

export default function SeoCareServices() {
  return (
    <section aria-labelledby="seo-care-services-heading" className="bg-[#f4f0e7] px-6 py-12 text-[#171b18] sm:px-10 lg:px-[5%] lg:py-16">
      <div className="mx-auto max-w-[1300px]">
        <header className="grid items-start gap-6 md:grid-cols-[1.5fr_1fr] lg:gap-24">
          <h2 id="seo-care-services-heading" className="text-[clamp(30px,3.3vw,46px)] font-bold leading-[1.12] tracking-[-0.035em]">We Offer a Wide Range of<br className="hidden lg:block" /> Unique Services</h2>
          <p className="max-w-[370px] text-sm leading-[1.65] text-[#95958a] md:justify-self-end">Journey to better health and wellbeing. Treatment for specific conditions, simple ways to improve, and advice. The care you want to receive is yours.</p>
        </header>
        <div className="mt-10 grid gap-5 md:grid-cols-3 lg:mt-12 lg:gap-6">
          {services.map((service) => (
            <article key={service.image} className="flex flex-col rounded-[20px] border border-transparent bg-white p-6 transition-colors hover:border-[#f0cb7b] lg:p-8">
              <h3 className="text-xl font-bold leading-tight tracking-[-0.025em]">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-[1.6] text-[#91958e]">{service.description}</p>
              <div className="relative mt-7">
                <div className="relative aspect-[1.9] overflow-hidden rounded-[18px] bg-[#e6e8df]">
                  <Image src={`/images/seo-care-services/${service.image}.webp`} alt={service.title === "Virtual Consultation" ? "A person speaking to a doctor through a video consultation" : service.title === "Make Appointment" ? "A laptop displaying an appointment calendar" : "A shopping cart containing medicine boxes in a pharmacy"} fill sizes="(max-width: 767px) 85vw, 30vw" className="object-cover" />
                </div>
                <Link href="/contact#contact-inquiry" aria-label={`Enquire about ${service.title}`} className="absolute -bottom-1 -right-1 grid size-10 place-items-center rounded-full border-[4px] border-white bg-[#ffbd26] text-xl text-white transition-colors hover:bg-[#e8a40f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b37c00]">↗</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
