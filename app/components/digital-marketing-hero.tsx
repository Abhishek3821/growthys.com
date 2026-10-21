import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";

function Arrow() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="size-6" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg>;
}

export default function DigitalMarketingHero() {
  return (
    <div className="min-h-svh bg-[#f8f7f2] px-5 pb-5 pt-4 text-black sm:px-7 lg:px-8">
      <header className="relative mx-auto mb-5 flex min-h-16 max-w-[1800px] items-start justify-center min-[701px]:max-[1200px]:min-h-[110px]">

        <Navbar onHomePage={false} currentPage="/digital-marketing" />
      </header>

      <section aria-labelledby="digital-marketing-heading" className="mx-auto grid max-w-[1800px] gap-8 lg:min-h-[600px] lg:grid-cols-[1fr_1fr] lg:gap-5 xl:h-[calc(100svh-120px)] xl:max-h-[1000px] xl:min-h-[580px]">
        <div className="flex min-w-0 flex-col pb-3 pt-4 lg:pr-3">
          <h1 id="digital-marketing-heading" className="text-[clamp(84px,16vw,180px)] font-black leading-[0.78] tracking-[-0.085em] lg:text-[clamp(110px,min(12.8vw,22svh),230px)]">
            <span className="block text-right">visual</span><span className="block">poetry</span>
          </h1>
          <p className="ml-auto mt-9 max-w-[320px] text-right text-sm font-medium leading-[1.2] tracking-[-0.025em] lg:mt-10 lg:max-w-[340px] lg:text-base">
            Welcome to a visual journey that transcends time and space. Discover the artistry of moments captured in motion
          </p>
          <ul aria-label="Creative channels" className="mt-5 flex -space-x-1 lg:mt-6">
            {["yt", "ig", "fb", "x"].map((channel) => <li key={channel} className="grid size-9 place-items-center rounded-full border border-black bg-[#f8f7f2] text-xs">{channel}</li>)}
          </ul>
          <dl className="mt-10 grid grid-cols-2 gap-5 lg:mt-auto lg:pt-8">
            <div className="flex flex-col text-center">
              <dt className="order-2 mx-auto mt-3 max-w-[250px] text-xs leading-tight tracking-[-0.025em] lg:text-sm">Videos that reach a wide audience and give lasting impression</dt>
              <dd className="text-[clamp(38px,4.7vw,70px)] font-bold italic leading-none tracking-[-0.065em]"><span className="align-top text-[0.55em]">+</span>250k</dd>
            </div>
            <div className="flex flex-col text-center">
              <dt className="order-2 mx-auto mt-3 max-w-[250px] text-xs leading-tight tracking-[-0.025em] lg:text-sm">Hours watched, engaging storytelling that captivates viewers</dt>
              <dd className="text-[clamp(38px,4.7vw,70px)] font-bold italic leading-none tracking-[-0.065em]"><span className="align-top text-[0.55em]">+</span>800k</dd>
            </div>
          </dl>
        </div>

        <div className="relative isolate min-h-[480px] overflow-hidden rounded-[44px] bg-[#ffb43e] sm:min-h-[580px] lg:min-h-0 lg:rounded-[54px]">
          <Image src="/images/services/digital-marketing-photographer.png" alt="A photographer in black holding a vintage camera against a golden orange background" fill preload sizes="(max-width: 1023px) 95vw, 50vw" className="-z-10 object-cover object-center" />
          <div className="pointer-events-none absolute left-7 top-8 w-[40%] text-white sm:left-9 sm:top-10" aria-hidden="true">
            <svg viewBox="0 0 230 125" fill="none" stroke="currentColor" strokeWidth="1.1" className="w-full"><path d="M21 67C-8 34 59-7 101 18c24 15-7 57-55 63-62 7-49-34 16-15s146 4 141 23c-6 18-66 7-69-18-3-25 12-35 7-23l-17 67M28 62l-9 58m36-55c-12 18 30 12 39-5m25-21c-15 28-24 48-22 57" /></svg>
            <span className="absolute left-[12%] top-[42%] -rotate-6 font-serif text-[clamp(15px,2.1vw,30px)] italic">Creativity</span>
          </div>
          <div className="absolute right-0 top-0 rounded-bl-[30px] bg-[#f8f7f2] pb-3 pl-3">
            <span className="grid size-14 place-items-center rounded-full bg-black text-white" aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" className="size-9"><circle cx="16" cy="16" r="11" /><ellipse cx="16" cy="16" rx="5" ry="11" /><path d="M5 16h22M7 10h18M7 22h18" /></svg>
            </span>
          </div>
          <div className="absolute bottom-0 left-0 flex flex-col items-center gap-2 rounded-tr-[30px] bg-[#f8f7f2] pr-3 pt-3">
            <span className="grid size-12 place-items-center rounded-full border-4 border-white bg-[#ffb43e]" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-6"><rect x="3" y="6" width="18" height="13" rx="3" /><circle cx="12" cy="12" r="4" /><path d="M6 6 8 3h5l2 3" /></svg></span>
            <div className="relative size-12 overflow-hidden rounded-full border-4 border-white bg-[#ffb43e]"><Image src="/images/services/digital-marketing-photographer.png" alt="" fill sizes="48px" className="object-cover object-[70%_35%]" /></div>
            <Link href="/contact#contact-inquiry" aria-label="Start your digital marketing project" className="grid size-12 place-items-center rounded-full bg-black text-white transition-colors hover:bg-[#333] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"><Arrow /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
