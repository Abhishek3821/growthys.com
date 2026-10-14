import Image from "next/image";

const items = [
  { title: "Introduction", image: "introduction", alt: "An airy white living room with large windows" },
  { title: "Our Team", image: "team", alt: "A bright minimalist office with a conference table" },
  { title: "Project", image: "project", alt: "A light wood desk and computer in a Scandinavian workspace" },
  { title: "Awards", image: "awards", alt: "A warm modern apartment with a charcoal wall and tan sofa" },
  { title: "Contact Us", image: "contact", alt: "A contemporary grey living room with framed artwork" },
];

export default function AppDevelopmentAgenda() {
  return (
    <section aria-labelledby="app-agenda-heading" className="bg-white px-6 py-12 text-[#1d211f] sm:px-10 lg:px-[5%] lg:py-16">
      <div className="mx-auto max-w-[1400px]">
        <h2 id="app-agenda-heading" className="text-center text-[clamp(42px,5vw,70px)] font-normal leading-[1.1] tracking-[-0.045em]">Agenda</h2>
        <ol className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:mt-14 lg:grid-cols-5 lg:gap-8">
          {items.map((item, index) => (
            <li key={item.title} className="text-center">
              <p aria-hidden="true" className="mb-5 text-[42px] font-normal italic leading-none tracking-[-0.045em] lg:text-5xl">{String(index + 1).padStart(2, "0")}</p>
              <div className="relative aspect-[1.3] overflow-hidden bg-[#e9e9e4]">
                <Image src={`/images/app-development/agenda/${item.image}.webp`} alt={item.alt} fill sizes="(max-width: 639px) 43vw, (max-width: 1023px) 28vw, 18vw" className="object-cover" />
              </div>
              <h3 className="mt-6 text-lg font-medium leading-tight tracking-[-0.03em] lg:text-xl">{item.title}</h3>
              <p className="mx-auto mt-3 max-w-[230px] text-xs leading-[1.5] text-[#757b77] lg:text-[13px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
