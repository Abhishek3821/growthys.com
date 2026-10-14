import Image from "next/image";

const features = [
  {
    title: "Seamless Lead Generation",
    description: "Effortlessly gather and manage leads with our lead collection tools. From capturing potential customers’ information to nurturing relationships, our platform simplifies the lead generation process for maximized conversions.",
    image: "lead-generation",
    alt: "A purple lead collection dashboard and funnel",
    background: "bg-[#f7e9fd]",
  },
  {
    title: "Targeted Campaign Excellence",
    description: "Amplify your brand’s online presence through our robust digital marketing solutions. Reach your target audience across various channels, engage with compelling content, and drive meaningful interactions that convert casual visitors into loyal customers.",
    image: "campaigns",
    alt: "A laptop with a megaphone and digital campaign tools",
    background: "bg-[#e9faff]",
  },
] as const;

function FeatureArtwork({ name, alt }: { name: string; alt: string }) {
  return (
    <div className="relative aspect-[3/2] overflow-hidden rounded-[24px] bg-white lg:rounded-[30px]">
      <Image src={`/images/website-design/features/${name}.webp`} alt={alt} fill sizes="(max-width: 767px) 90vw, (max-width: 1400px) 40vw, 550px" className="object-contain" />
    </div>
  );
}

export default function WebsiteFeatures() {
  return (
    <section aria-labelledby="website-features-heading" className="mx-auto max-w-[1400px] px-5 pb-14 pt-3 text-[#111111] sm:px-7 lg:px-8 lg:pb-20">
      <header className="mx-auto mb-9 max-w-[900px] text-center lg:mb-12">
        <h2 id="website-features-heading" className="text-[clamp(30px,3.5vw,52px)] font-semibold leading-[1.06] tracking-[-0.045em]">
          Discover Our Comprehensive<br className="hidden sm:block" /> Suite of Features
        </h2>
        <p className="mx-auto mt-4 max-w-[720px] text-sm leading-relaxed text-[#777571] sm:text-base">
          Our platform is designed to support your business with a comprehensive suite of features that streamline your marketing efforts and supercharge your growth.
        </p>
      </header>

      <div className="grid gap-5 lg:gap-6">
        <article className="grid items-center gap-7 rounded-[32px] bg-[#faf9f6] p-6 md:grid-cols-[1.25fr_1fr] sm:p-8 lg:gap-12 lg:rounded-[42px] lg:p-10">
          <div>
            <h3 className="max-w-[450px] text-[clamp(26px,2.6vw,38px)] font-semibold leading-[1.16] tracking-[-0.035em]">Harness Insights for Success</h3>
            <p className="mt-5 max-w-[540px] text-sm leading-[1.65] text-[#777571] lg:text-base">
              Uncover valuable insights and trends from your data with our advanced analytics tools. Make informed decisions, refine your strategies, and stay ahead of the competition by leveraging the wealth of information at your fingertips.
            </p>
          </div>
          <FeatureArtwork name="insights" alt="A colourful analytics report with charts, coins and a checkmark" />
        </article>

        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {features.map((feature) => (
            <article key={feature.image} className={`flex min-w-0 flex-col rounded-[32px] p-6 sm:p-8 lg:rounded-[42px] lg:p-10 ${feature.background}`}>
              <h3 className="max-w-[450px] text-[clamp(26px,2.6vw,38px)] font-semibold leading-[1.16] tracking-[-0.035em]">{feature.title}</h3>
              <p className="mb-7 mt-5 text-sm leading-[1.65] text-[#777571] lg:mb-8 lg:text-base">{feature.description}</p>
              <div className="mt-auto"><FeatureArtwork name={feature.image} alt={feature.alt} /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
