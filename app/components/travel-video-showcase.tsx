import { digitalMarketingInsights, digitalMarketingProcess } from "../data/digital-marketing-content";
import Image from "next/image";

const featured = [
  { image: "insight-foundations", alt: "Campaign cards illustrating the importance of a clear marketing foundation", author: "Common Mistakes", title: digitalMarketingInsights[0].title, description: digitalMarketingInsights[0].description, views: "Targeting everyone", time: "No clear offer · Zero tracking", duration: "01", portrait: 0 },
  { image: "insight-what-works", alt: "Clear messaging, consistent content, and measurement represented by aligned planning cards", author: "What We Focus On", title: digitalMarketingInsights[1].title, description: digitalMarketingInsights[1].description, views: "Message clarity", time: "Content consistency · Data-backed decisions", duration: "02", portrait: 1 },
] as const;

const mostWatched = [
  { image: "process-research", alt: "A marketing strategist auditing competitor content and audience research", author: "01", title: digitalMarketingProcess[0].title, views: digitalMarketingProcess[0].description, time: "", duration: "01", portrait: 2 },
  { image: "process-planning", alt: "Planning marketing channels, target audiences, and campaign goals", author: "02", title: digitalMarketingProcess[1].title, views: digitalMarketingProcess[1].description, time: "", duration: "02", portrait: 3 },
  { image: "process-optimization", alt: "Marketers comparing ad creatives and optimizing a campaign", author: "03", title: digitalMarketingProcess[2].title, views: digitalMarketingProcess[2].description, time: "", duration: "03", portrait: 4 },
  { image: "process-reporting", alt: "Reviewing campaign reports and deciding how to scale results", author: "04", title: digitalMarketingProcess[3].title, views: digitalMarketingProcess[3].description, time: "", duration: "04", portrait: 5 },
] as const;

function AuthorPortrait({ index, className = "size-10" }: { index: number; className?: string }) {
  return (
    <span className={`relative block shrink-0 overflow-hidden rounded-full border-2 border-white bg-[#e6d8c7] ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="absolute inset-0 size-full p-2 text-[#695842]" aria-hidden="true">
        {index % 3 === 0 ? <><circle cx="10" cy="10" r="6" /><path d="m15 15 6 6" /></> : index % 3 === 1 ? <path d="M4 18 10 12l4 3 6-10m-6 0h6v6" /> : <><path d="M6 3h12v18H6zM9 8h6m-6 4h6m-6 4h4" /></>}
      </svg>
    </span>
  );
}

function Duration({ children, className = "" }: { children: string; className?: string }) {
  return <span className={`absolute rounded-full border border-white/40 bg-white/70 px-3 py-1 text-xs text-[#353535] shadow-sm backdrop-blur-sm ${className}`}>{children}</span>;
}

export default function TravelVideoShowcase() {
  return (
    <section aria-labelledby="travel-video-heading" className="mx-auto max-w-[1800px] bg-[#f4f4f4] px-5 py-10 text-[#151515] sm:px-7 lg:px-10 lg:py-14">
      <h2 id="travel-video-heading" className="sr-only">Digital marketing insights and process</h2>
      <div className="grid gap-6 md:grid-cols-[1.15fr_1fr] lg:gap-10">
        {featured.map((video, index) => (
          <article key={video.image} className="relative isolate flex min-h-[280px] flex-col justify-center overflow-hidden rounded-[36px] bg-[#c1d6d9] p-6 sm:min-h-[310px] lg:min-h-[360px] lg:rounded-[54px] lg:p-9">
            <Image src={`/images/digital-marketing/graphics/${video.image}.webp`} alt={video.alt} fill quality={95} sizes="(max-width: 767px) 95vw, 50vw" className="-z-20 object-cover object-[center_45%]" />
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0.45)_38%,transparent_85%)]" aria-hidden="true" />
            <h3 className="max-w-[65%] text-[clamp(24px,2.5vw,38px)] font-bold leading-[1.13] tracking-[-0.035em]">{video.title}</h3>
            <div className="mt-5 flex items-center gap-3">
              {index === 0 && <AuthorPortrait index={video.portrait} />}
              <div className="text-xs font-semibold leading-relaxed lg:text-sm"><p className="font-normal">{video.description}</p><p className="mt-0.5">{video.author}</p><p className="mt-0.5">{video.views} <span className="mx-2" aria-hidden="true">•</span>{video.time}</p></div>
            </div>
            {index === 1 && <div className="mt-3"><AuthorPortrait index={video.portrait} /></div>}
            <Duration className="bottom-5 right-5 lg:bottom-7 lg:right-7">{video.duration}</Duration>
          </article>
        ))}
      </div>

      <h3 className="mb-6 mt-9 text-2xl font-semibold tracking-[-0.03em] lg:mb-8 lg:mt-11 lg:text-3xl">OUR PROCESS</h3>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {mostWatched.map((video) => (
          <article key={video.image} className="flex min-w-0 flex-col overflow-hidden rounded-[32px] border border-[#d9d9d9] bg-[#f2f0f3] shadow-[0_3px_2px_rgba(0,0,0,0.12)] lg:rounded-[48px]">
            <div className="relative aspect-[1.12] bg-[#d4e1e5]">
              <Image src={`/images/digital-marketing/graphics/${video.image}.webp`} alt={video.alt} fill quality={95} sizes="(max-width: 639px) 95vw, (max-width: 1023px) 45vw, 25vw" className="object-cover" />
              <Duration className="right-4 top-4">{video.duration}</Duration>
            </div>
            <div className="relative flex flex-1 flex-col px-4 pb-5 lg:px-5 lg:pb-6">
              <div className="relative -mt-5 mb-3 flex min-h-12 items-end justify-between gap-2">
                <p className="min-w-0 pb-1 text-xs font-semibold tracking-[-0.025em] lg:text-sm">{video.author}</p><AuthorPortrait index={video.portrait} className="size-11" />
              </div>
              <h4 className="text-lg font-semibold leading-[1.15] tracking-[-0.03em] lg:text-xl">{video.title}</h4>
              <p className="mt-auto pt-5 text-xs font-medium tracking-[-0.025em] lg:text-sm">{video.views}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
