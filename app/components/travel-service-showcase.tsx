import Image from "next/image";

const services = [
  {
    title: "Comprehensive Travel Support",
    description: "24/7 customer service to assist you before, during, and after your trip.",
    image: "coast",
    alt: "Lush limestone cliffs above the turquoise waters of Kelingking Beach",
    layout: "md:row-span-2",
  },
  {
    title: "Expert Travel Advice",
    description: "Tips and guides to make every journey an unforgettable experience.",
    image: "volcano",
    alt: "Mount Bromo and volcanic peaks rising above a sea of clouds",
    layout: "",
  },
  {
    title: "Diverse Destinations",
    description: "Explore a wide range of destinations, from hidden gems to iconic international locations.",
    image: "temple",
    alt: "A tiered Balinese lakeside temple beneath misty mountains",
    layout: "",
  },
] as const;

export default function TravelServiceShowcase() {
  return (
    <section aria-labelledby="travel-service-showcase-heading" className="mx-auto max-w-[1800px] bg-[#fafafa] px-5 py-10 text-[#252525] sm:px-7 lg:px-10 lg:py-14">
      <header className="mb-7 lg:mb-9">
        <p className="mb-4 text-xs font-medium tracking-[-0.02em] text-[#3a8fa3] lg:text-sm">//OUR SERVICE</p>
        <h2 id="travel-service-showcase-heading" className="text-[clamp(30px,3.5vw,56px)] font-normal leading-[1.12] tracking-[-0.055em]">Explore endless options with our service</h2>
        <p className="mt-4 max-w-[650px] text-sm leading-relaxed tracking-[-0.025em] text-[#777] lg:text-base">Discover a myriad of choices available through our service, offering limitless possibilities for your exploration and enjoyment.</p>
      </header>

      <div className="grid gap-4 md:h-[clamp(380px,43vw,680px)] md:grid-cols-2 md:grid-rows-2 lg:gap-5">
        {services.map((service, index) => (
          <article key={service.image} className={`relative isolate flex min-h-[240px] flex-col justify-end overflow-hidden rounded-[18px] bg-[#c4d7da] p-5 text-white md:min-h-0 lg:rounded-[22px] lg:p-6 ${service.layout} ${index === 0 ? "min-h-[380px]" : ""}`}>
            <Image src={`/images/website-design/travel-services/${service.image}.webp`} alt={service.alt} fill sizes="(max-width: 767px) 95vw, 50vw" className="-z-20 object-cover" />
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent_35%,rgba(0,0,0,0.12)_55%,rgba(0,0,0,0.72)_100%)]" aria-hidden="true" />
            <h3 className="text-[clamp(22px,2.1vw,34px)] font-normal leading-tight tracking-[-0.035em]">{service.title}</h3>
            <p className="mt-2 max-w-[560px] text-xs leading-relaxed tracking-[-0.02em] text-white/85 lg:text-sm">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
