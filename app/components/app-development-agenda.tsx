import { appDevelopmentContent } from "../data/app-development-content";
import Image from "next/image";

const items = appDevelopmentContent.features.items.map((item, index) => ({
  ...item,
  image: ["accounts", "payments", "tracking", "offline", "analytics"][index],
  alt: ["Secure mobile accounts and sign-in", "Mobile checkout and payment confirmation", "Live location tracking and delivery routes", "Offline storage with cloud synchronisation", "App analytics and connected workflows"][index],
}));

export default function AppDevelopmentAgenda() {
  return (
    <section aria-labelledby="app-agenda-heading" className="bg-white px-6 py-12 text-[#1d211f] sm:px-10 lg:px-[5%] lg:py-16">
      <div className="mx-auto max-w-[1400px]">
        <h2 id="app-agenda-heading" className="text-center text-[clamp(42px,5vw,70px)] font-normal leading-[1.1] tracking-[-0.045em]">{appDevelopmentContent.features.title}</h2>
        <ol className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:mt-14 lg:grid-cols-5 lg:gap-8">
          {items.map((item, index) => (
            <li key={item.title} className="text-center">
              <p aria-hidden="true" className="mb-5 text-[42px] font-normal italic leading-none tracking-[-0.045em] lg:text-5xl">{String(index + 1).padStart(2, "0")}</p>
              <div className="relative aspect-[1.3] overflow-hidden bg-[#e9e9e4]">
                <Image quality={95} src={`/images/app-development/graphics/${item.image}.webp`} alt={item.alt} fill sizes="(max-width: 639px) 43vw, (max-width: 1023px) 28vw, 18vw" className="object-cover" />
              </div>
              <h3 className="mt-6 text-lg font-medium leading-tight tracking-[-0.03em] lg:text-xl">{item.title}</h3>
              <p className="mx-auto mt-3 max-w-[230px] text-xs leading-[1.5] text-[#757b77] lg:text-[13px]">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
