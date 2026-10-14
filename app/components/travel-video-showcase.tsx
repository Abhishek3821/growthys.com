import Image from "next/image";

const featured = [
  { image: "backpacker", alt: "A traveler with a red backpack looking across an alpine lake", author: "Albert Smith", views: "33K", time: "3 minutes ago", duration: "3 min", portrait: 0 },
  { image: "balloons", alt: "A traveler photographing hot air balloons in Cappadocia", author: "Aaron Brown", views: "43K", time: "5 minutes ago", duration: "5 min", portrait: 1 },
] as const;

const mostWatched = [
  { image: "overlook", alt: "A traveler standing on a rocky overlook above clouds", author: "Anthony Thomas", title: "Basics on how to track your travel low budget", views: "43K", time: "5 minutes ago", duration: "5 min", portrait: 2 },
  { image: "hiking", alt: "Hiking boots above a green mountain valley", author: "Bonaventura Wilson", title: "Prepare for your first traveling with family", views: "57K", time: "2 minutes ago", duration: "7 min", portrait: 3 },
  { image: "boats", alt: "A solo traveler beside rowboats on a mountain lake", author: "Calvin Harris", title: "Tips to traveling solo and stay safe", views: "32K", time: "3 minutes ago", duration: "9 min", portrait: 4 },
  { image: "paris", alt: "A smiling traveler in front of the Eiffel Tower", author: "Christian King", title: "Basic equipment for traveling camp", views: "75K", time: "7 minutes ago", duration: "11 min", portrait: 5 },
] as const;

function AuthorPortrait({ index, className = "size-10" }: { index: number; className?: string }) {
  return (
    <span className={`relative block shrink-0 overflow-hidden rounded-full border-2 border-white bg-[#e6d8c7] ${className}`}>
      <span className="absolute h-[200%] w-[400%]" style={{ left: `${-(index % 4) * 100}%`, top: `${-Math.floor(index / 4) * 100}%` }}><Image src="/images/testimonial-portraits.webp" alt="" fill sizes="180px" className="object-fill" /></span>
    </span>
  );
}

function Duration({ children, className = "" }: { children: string; className?: string }) {
  return <span className={`absolute rounded-full border border-white/40 bg-white/70 px-3 py-1 text-xs text-[#353535] shadow-sm backdrop-blur-sm ${className}`}>{children}</span>;
}

export default function TravelVideoShowcase() {
  return (
    <section aria-labelledby="travel-video-heading" className="mx-auto max-w-[1800px] bg-[#f4f4f4] px-5 py-10 text-[#151515] sm:px-7 lg:px-10 lg:py-14">
      <h2 id="travel-video-heading" className="sr-only">Travel video collection</h2>
      <div className="grid gap-6 md:grid-cols-[1.15fr_1fr] lg:gap-10">
        {featured.map((video, index) => (
          <article key={video.image} className="relative isolate flex min-h-[280px] flex-col justify-center overflow-hidden rounded-[36px] bg-[#c1d6d9] p-6 sm:min-h-[310px] lg:min-h-[360px] lg:rounded-[54px] lg:p-9">
            <Image src={`/images/digital-marketing/travel-videos/${video.image}.webp`} alt={video.alt} fill sizes="(max-width: 767px) 95vw, 50vw" className="-z-20 object-cover object-[center_45%]" />
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0.45)_38%,transparent_85%)]" aria-hidden="true" />
            <h3 className="max-w-[65%] text-[clamp(24px,2.5vw,38px)] font-bold leading-[1.13] tracking-[-0.035em]">How to do Basic Traveling and to Safety Track</h3>
            <div className="mt-5 flex items-center gap-3">
              {index === 0 && <AuthorPortrait index={video.portrait} />}
              <div className="text-xs font-semibold leading-relaxed lg:text-sm"><p>{video.author}</p><p className="mt-0.5">{video.views} views <span className="mx-2" aria-hidden="true">•</span>{video.time}</p></div>
            </div>
            {index === 1 && <div className="mt-3"><AuthorPortrait index={video.portrait} /></div>}
            <Duration className="bottom-5 right-5 lg:bottom-7 lg:right-7">{video.duration}</Duration>
          </article>
        ))}
      </div>

      <h3 className="mb-6 mt-9 text-2xl font-semibold tracking-[-0.03em] lg:mb-8 lg:mt-11 lg:text-3xl">Most Watched</h3>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {mostWatched.map((video) => (
          <article key={video.image} className="flex min-w-0 flex-col overflow-hidden rounded-[32px] border border-[#d9d9d9] bg-[#f2f0f3] shadow-[0_3px_2px_rgba(0,0,0,0.12)] lg:rounded-[48px]">
            <div className="relative aspect-[1.12] bg-[#d4e1e5]">
              <Image src={`/images/digital-marketing/travel-videos/${video.image}.webp`} alt={video.alt} fill sizes="(max-width: 639px) 95vw, (max-width: 1023px) 45vw, 25vw" className="object-cover" />
              <Duration className="right-4 top-4">{video.duration}</Duration>
            </div>
            <div className="relative flex flex-1 flex-col px-4 pb-5 lg:px-5 lg:pb-6">
              <div className="relative -mt-5 mb-3 flex min-h-12 items-end justify-between gap-2">
                <p className="min-w-0 pb-1 text-xs font-semibold tracking-[-0.025em] lg:text-sm">{video.author}</p><AuthorPortrait index={video.portrait} className="size-11" />
              </div>
              <h4 className="text-lg font-semibold leading-[1.15] tracking-[-0.03em] lg:text-xl">{video.title}</h4>
              <p className="mt-auto pt-5 text-xs font-medium tracking-[-0.025em] lg:text-sm">{video.views} views <span className="mx-2" aria-hidden="true">•</span>{video.time}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
