import Image from "next/image";

export default function ContentMarketingDesigner() {
  return (
    <section aria-labelledby="content-designer-heading" className="bg-[#f5faf7] px-6 py-12 text-[#34383a] sm:px-10 lg:px-[7%] lg:py-16">
      <div className="mx-auto grid max-w-[1250px] items-center gap-8 md:grid-cols-[0.8fr_1.2fr_1.5fr] lg:gap-12">
        <div className="relative mx-auto aspect-[0.8] w-full max-w-[330px] overflow-hidden rounded-[30px] border-[3px] border-white bg-[#dde6da] md:max-w-none">
          <Image src="/images/content-marketing/designer/portrait.webp" alt="A designer in a sage blouse working on a laptop" fill sizes="(max-width: 767px) 75vw, 24vw" className="object-cover" />
        </div>
        <div>
          <h2 id="content-designer-heading" className="text-[32px] font-bold leading-tight tracking-[-0.025em] lg:text-4xl">About Me</h2>
          <svg viewBox="0 0 60 15" fill="none" className="mt-2 h-4 w-16 text-[#8acabb]" aria-hidden="true"><path d="M1 11c10 0 9-8 14-8s4 8 12 7h30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          <p className="mt-5 max-w-[390px] text-sm leading-[1.65] text-[#788581]">I’m a UI/UX designer who loves turning complex problems into simple, engaging and user-friendly designs. With a strong eye for detail and a passion for creating meaningful experiences, I help brands connect with their users.</p>
          <dl className="mt-6 grid gap-4">
            <div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-xl bg-[#d8f1e9] text-[#72b4a3]" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5"><rect x="5" y="5" width="14" height="16" rx="2" /><path d="M8 3v4m8-4v4M5 10h14m-10 4h6m-6 3h4" /></svg></span><dt className="text-xs font-semibold lg:text-sm"><strong>4+</strong> Years of Experience</dt></div>
            <div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-xl bg-[#ffe9e1] text-[#db9a86]" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5"><rect x="3" y="6" width="18" height="15" rx="2" /><path d="M8 6V3h8v3M3 12h18m-11 0v3h4v-3" /></svg></span><dt className="text-xs font-semibold lg:text-sm"><strong>30+</strong> Projects Completed</dt></div>
          </dl>
        </div>
        <div className="relative aspect-square w-full max-w-[480px] justify-self-center md:max-w-none"><Image src="/images/content-marketing/designer/illustration.webp" alt="Illustration of a designer at a teal laptop with a floating browser window, paper airplane and houseplant" fill sizes="(max-width: 767px) 90vw, 42vw" className="object-contain" /></div>
      </div>
    </section>
  );
}
