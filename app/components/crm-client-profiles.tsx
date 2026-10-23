import { crmContent } from "../data/crm-content";
import Image from "next/image";
import Link from "next/link";

const profiles = [
  { title: crmContent.profiles.items[0].title, description: crmContent.profiles.items[0].description, label: crmContent.profiles.items[0].label, image: "startups", alt: "Startup founder managing new customer leads on a laptop", button: "bg-[#566bff] text-white hover:bg-[#4055eb]" },
  { title: crmContent.profiles.items[1].title, description: crmContent.profiles.items[1].description, label: crmContent.profiles.items[1].label, image: "smes", alt: "Small business owner coordinating customer enquiries on a tablet", button: "bg-[#d2fb70] text-[#1c2913] hover:bg-[#c5f254]" },
  { title: crmContent.profiles.items[2].title, description: crmContent.profiles.items[2].description, label: crmContent.profiles.items[2].label, image: "enterprises", alt: "Enterprise operations leader reviewing customer records in a secure CRM", button: "bg-[#dce6fa] text-[#202735] hover:bg-[#cbdaf5]" },
] as const;

function Arrow({ className = "size-5" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>;
}

export default function CrmClientProfiles() {
  return (
    <section lang="en" aria-labelledby="crm-client-profiles-heading" className="mx-auto max-w-[1800px] bg-white px-5 py-12 text-[#171c23] sm:px-8 lg:px-14 lg:py-14">
      <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[0.92fr_2.08fr] lg:items-end lg:gap-10">
        <div className="flex h-full flex-col items-start">
          <p className="mb-8 inline-flex rounded-full bg-[#202830] px-4 py-2 text-[10px] font-semibold tracking-[0.18em] text-white shadow-sm lg:mb-12">OUR CLIENTS</p>
          <h2 id="crm-client-profiles-heading" className="max-w-[430px] text-[clamp(28px,2.7vw,42px)] font-bold leading-[1.17] tracking-[-0.04em]">Different Needs,<br />One Trusted<br />Partner</h2>
          <p className="mt-5 max-w-[410px] text-base leading-[1.4] tracking-[-0.025em] text-[#6f7075] lg:text-lg">{crmContent.profiles.description}</p>
          <Link href="/contact#contact-inquiry" className="mt-8 inline-flex items-center gap-5 rounded-full text-base font-medium leading-snug tracking-[-0.025em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#566bff] lg:mt-auto lg:pt-6 lg:text-lg">
            <span className="grid size-16 shrink-0 place-items-center rounded-full bg-[#edf0f3] transition-colors hover:bg-[#dde3eb]"><Arrow className="size-8" /></span>
            Find Your<br />CRM Fit
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-3 lg:gap-5">
          {profiles.map((profile, index) => (
            <article key={profile.image} className="relative isolate flex min-h-[440px] min-w-0 flex-col justify-end overflow-hidden rounded-[26px] bg-[#b4b6b1] p-4 text-white sm:min-h-[390px] lg:h-[clamp(410px,57svh,560px)] lg:min-h-0 xl:p-5">
              <Image src={`/images/crm-management/graphics/${profile.image}.webp`} alt={profile.alt} quality={95} fill sizes="(max-width: 639px) 90vw, (max-width: 1023px) 30vw, 24vw" className="-z-20 object-cover object-top" />
              <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent_25%,rgba(20,26,31,0.25)_40%,rgba(20,26,31,0.92)_65%,#141a1f_100%)]" aria-hidden="true" />
              <span className="absolute left-5 top-5 grid size-10 place-items-center rounded-full bg-white text-sm font-semibold text-[#202830]">{index + 1}</span>
              <h3 className="text-xl font-semibold leading-tight tracking-[-0.025em] xl:text-2xl">{profile.title}</h3>
              <p className="mb-6 mt-3 min-h-[5.6em] max-w-[250px] text-sm leading-[1.4] tracking-[-0.02em] text-white/90 xl:text-base">{profile.description}</p>
              <Link href="/contact#contact-inquiry" aria-label={`Explore CRM solutions for ${profile.title.toLowerCase()}`} className={`flex min-h-12 items-center justify-between gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white xl:text-sm ${profile.button}`}>
                {profile.label}<Arrow className="size-5 shrink-0" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
