import { digitalMarketingPosts } from "../data/digital-marketing-content";
import Image from "next/image";
import Link from "next/link";

const description = digitalMarketingPosts[0].description;

export default function DigitalBlogShowcase() {
  return (
    <section aria-labelledby="digital-blog-heading" className="mx-auto max-w-[1800px] bg-[#f4f4f4] px-5 py-12 text-[#2a2a2a] sm:px-7 lg:px-10 lg:py-16">
      <header className="mx-auto mb-10 max-w-[1050px] text-center lg:mb-16">
        <h2 id="digital-blog-heading" className="text-[clamp(30px,3.3vw,48px)] font-bold leading-tight tracking-[-0.04em]">From the Growthys Blog</h2>
        <p className="mx-auto mt-6 max-w-[1000px] text-base leading-[1.3] tracking-[-0.025em] text-[#777] sm:text-lg lg:text-2xl">A blog card shows your latest posts with date, title, content, images, and category.</p>
      </header>

      <div className="mx-auto grid max-w-[1200px] gap-6 md:grid-cols-2 lg:gap-9">
        <article className="overflow-hidden rounded-[24px] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.025)]">
          <div className="relative aspect-[1.6]"><Image src="/images/digital-marketing/graphics/blog-seo.webp" alt="Search optimization research with website structure and search-result printouts" fill quality={95} sizes="(max-width: 767px) 90vw, 600px" className="object-cover" /></div>
          <div className="p-5 lg:p-7">
            <h3 className="text-xl font-semibold tracking-[-0.035em] lg:text-2xl">{digitalMarketingPosts[0].title}</h3>
            <p className="mt-3 max-w-[500px] text-sm leading-[1.35] tracking-[-0.025em] text-[#808080] lg:text-lg">{description}</p>
            <Link href="/blogs" className="mt-4 inline-flex min-h-10 items-center text-sm text-[#6b6695] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6b6695]">Read more on the Growthys blog →</Link>
          </div>
        </article>

        <div className="grid gap-6 lg:gap-9">
          <article className="grid min-h-[180px] grid-cols-[40%_1fr] overflow-hidden rounded-[24px] bg-white lg:min-h-[210px]">
            <div className="relative"><Image src="/images/digital-marketing/graphics/blog-ad-spend.webp" alt="Reviewing campaign printouts to diagnose wasted advertising spend" fill quality={95} sizes="(max-width: 767px) 36vw, 230px" className="object-cover object-[35%_center]" /></div>
            <div className="flex flex-col justify-center p-4 lg:p-6">
              <h3 className="text-base font-semibold tracking-[-0.035em] lg:text-xl">{digitalMarketingPosts[1].title}</h3>
              <p className="mt-2 text-xs leading-[1.3] tracking-[-0.025em] text-[#808080] lg:text-sm">{digitalMarketingPosts[1].description}</p>
              <Link href="/blogs" className="mt-2 inline-flex min-h-9 w-fit items-center text-xs text-[#6b6695] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6b6695] lg:text-sm">Read more on the Growthys blog →</Link>
            </div>
          </article>

          <article className="relative isolate flex min-h-[270px] flex-col justify-end overflow-hidden rounded-[24px] bg-[#30a4b0] p-5 text-white lg:min-h-[320px] lg:p-7">
            <Image src="/images/digital-marketing/graphics/blog-social-trends.webp" alt="A brand creator recording a product reel in a studio" fill quality={95} sizes="(max-width: 767px) 90vw, 600px" className="-z-20 object-cover" />
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent_35%,rgba(0,0,0,0.65)_100%)]" aria-hidden="true" />
            <h3 className="text-base font-medium tracking-[-0.025em] lg:text-xl">{digitalMarketingPosts[2].title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-white/85 lg:text-sm">{digitalMarketingPosts[2].description}</p>
            <Link href="/blogs" className="inline-flex min-h-9 w-fit items-center text-xs text-white/85 hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:text-sm">Read more on the Growthys blog →</Link>
          </article>
        </div>
      </div>
    </section>
  );
}
