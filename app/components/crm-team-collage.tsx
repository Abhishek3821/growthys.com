import { crmContent } from "../data/crm-content";
import Image from "next/image";

const photos = [
  { image: "capture", alt: "Sales colleagues reviewing new customer enquiries in a shared CRM inbox", layout: "lg:col-start-1 lg:col-span-6 lg:row-start-8 lg:row-span-10" },
  { image: "qualify", alt: "Sales analysts prioritizing customer segments and qualified leads", layout: "lg:col-start-7 lg:col-span-6 lg:row-start-8 lg:row-span-7" },
  { image: "pipeline", alt: "Business development professional managing customer deals in a CRM sales pipeline", layout: "lg:col-start-13 lg:col-span-6 lg:row-start-3 lg:row-span-12" },
  { image: "retain", alt: "Customer success specialist using service history to support a client", layout: "lg:col-start-19 lg:col-span-5 lg:row-start-6 lg:row-span-9" },
  { image: "collaboration", alt: "Sales and support colleagues collaborating around a shared customer record", layout: "lg:col-start-7 lg:col-span-8 lg:row-start-16 lg:row-span-7" },
  { image: "analytics", alt: "Business team reviewing CRM pipeline analytics and sales performance", layout: "lg:col-start-15 lg:col-span-6 lg:row-start-16 lg:row-span-6" },
] as const;

export default function CrmTeamCollage() {
  return (
    <section aria-labelledby="crm-team-collage-heading" className="mx-auto max-w-[1800px] bg-white px-5 py-12 text-[#25473f] sm:px-8 lg:px-14 lg:py-14">
      <h2 id="crm-team-collage-heading" className="sr-only">{crmContent.team.title}</h2>
      <div className="mx-auto grid max-w-[1500px] grid-cols-2 gap-4 sm:gap-5 lg:aspect-[1.6] lg:grid-cols-[repeat(24,minmax(0,1fr))] lg:grid-rows-[repeat(22,minmax(0,1fr))] lg:gap-x-[clamp(12px,1.5vw,24px)] lg:gap-y-0">
        <p className="col-span-2 mb-4 max-w-[650px] text-[clamp(22px,2.2vw,34px)] font-medium leading-[1.45] tracking-[-0.035em] lg:col-start-1 lg:col-span-12 lg:row-start-1 lg:row-span-7 lg:mb-0 lg:pr-8">
          {crmContent.team.description}
        </p>
        {photos.map((photo) => (
          <div key={photo.image} className={`relative aspect-[4/5] min-h-0 min-w-0 overflow-hidden bg-[#e6e6e1] sm:aspect-square lg:aspect-auto ${photo.layout}`}>
            <Image src={`/images/crm-management/graphics/${photo.image}.webp`} alt={photo.alt} quality={95} fill sizes="(max-width: 1023px) 45vw, (max-width: 1500px) 25vw, 450px" className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
