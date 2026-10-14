import Link from "next/link";

function Flower({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" className={className} aria-hidden="true">
      {[0, 60, 120, 180, 240, 300].map((angle) => <ellipse key={angle} cx="50" cy="29" rx="17" ry="29" transform={`rotate(${angle} 50 50)`} />)}
      <circle cx="50" cy="50" r="21" />
    </svg>
  );
}

export default function MindspaceSection() {
  return (
    <section aria-labelledby="mindspace-heading" className="relative isolate mx-auto mb-8 max-w-[1800px] overflow-hidden bg-[#fbf5eb] px-5 pb-8 pt-8 text-[#292929] sm:px-7 lg:px-10 lg:pb-12">
      <div className="pointer-events-none absolute -left-[20%] top-[51%] -z-10 h-20 w-[150%] rotate-[29deg] bg-[#ff811c] shadow-[0_-12px_0_#ffcb73]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-16 -top-12 -z-10 size-44 rounded-[45%] bg-[#f4ecdd]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-28 -top-8 -z-10 size-52 rounded-full border-[24px] border-[#f4ecdd]" aria-hidden="true" />
      <header className="mx-auto mb-11 max-w-[1500px] text-center lg:mb-14">
        <h2 id="mindspace-heading" className="text-[clamp(36px,5.7vw,88px)] font-semibold leading-none tracking-[-0.065em]">BE KIND TO YOUR MIND</h2>
        <p className="mt-3 text-xs leading-relaxed tracking-[-0.025em] sm:text-sm lg:text-base">Mindspace was started with one mission: to improve the health and happiness of the world.</p>
      </header>

      <div className="mx-auto grid max-w-[1400px] gap-3 md:grid-cols-3 lg:gap-4">
        <div className="grid gap-3 md:grid-rows-[1fr_auto] lg:gap-4">
          <figure className="flex min-h-[310px] flex-col rounded-[24px] bg-white p-6 lg:min-h-[370px] lg:p-7">
            <figcaption className="text-sm leading-tight lg:text-base">Davide, Moscow<span className="mt-1 block text-xs text-[#b4b4b4] lg:text-sm">On using meditation to turn his life around</span></figcaption>
            <span className="mb-1 mt-auto block h-16 pt-8 font-serif text-[100px] leading-none text-[#ff801b]" aria-hidden="true">“</span>
            <blockquote className="mt-8 max-w-[310px] text-[clamp(28px,2.9vw,42px)] leading-[1.02] tracking-[-0.045em]">Changing my thoughts has allowed me to change my life.</blockquote>
          </figure>
          <article className="relative isolate min-h-[150px] overflow-hidden rounded-[24px] bg-[#b7ec75] p-5 shadow-[inset_0_-5px_0_rgba(86,153,28,0.18)] lg:p-6">
            <div className="pointer-events-none absolute inset-x-5 top-3 h-1.5 bg-white/30" aria-hidden="true" />
            <h3 className="relative max-w-[300px] text-lg font-normal leading-tight tracking-[-0.025em] lg:text-xl">How getting outside can help you (and your mind) get fit</h3>
            <Link href="/insights" className="relative mt-4 inline-flex min-h-9 items-center gap-2 rounded-md bg-white px-3 py-1.5 text-xs text-[#292929] transition-colors hover:bg-[#f1fbe7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#292929]">Read more <span className="grid size-4 place-items-center rounded-full bg-[#292929] text-[10px] text-white" aria-hidden="true">→</span></Link>
            <Flower className="pointer-events-none absolute -bottom-10 -right-9 -z-10 size-32 rotate-12 text-white" />
          </article>
        </div>

        <div className="grid gap-3 md:grid-rows-[1fr_1fr] lg:gap-4">
          <article className="relative flex min-h-[230px] flex-col justify-end rounded-[24px] bg-[#ffda00] p-6 shadow-[inset_0_-5px_0_rgba(167,130,0,0.18)] lg:p-7">
            <div className="absolute -top-6 left-1/2 grid size-20 -translate-x-1/2 place-items-center rounded-full border-[6px] border-[#fbf5eb] bg-[#ffda00]" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none" stroke="#292929" strokeWidth="1.5" strokeLinecap="round" className="size-12"><path d="M12 17q4 7 8 0m8 0q4 7 8 0M11 26q13 20 26 0" /></svg>
            </div>
            <span className="mb-3 w-fit rounded-md bg-white px-2 py-1 text-xs">Mindfulness</span>
            <h3 className="text-2xl font-medium leading-tight tracking-[-0.035em] lg:text-3xl">Find more joy</h3>
            <p className="mt-2 text-sm leading-tight tracking-[-0.02em] lg:text-base">Catch your breath, relax your mind, and feel 14% less stressed in just 10 days.</p>
          </article>
          <article className="flex min-h-[250px] flex-col rounded-[24px] bg-[#20a2f4] p-5 text-white shadow-[inset_0_-5px_0_rgba(0,89,165,0.18)] lg:p-6">
            <h3 className="text-2xl font-medium leading-tight tracking-[-0.035em] lg:text-3xl">Make every day happier</h3>
            <p className="mt-2 max-w-[340px] text-sm leading-tight tracking-[-0.02em] lg:text-base">Do it for yourself, and everyone you love. It only takes a few minutes to find some mindspace.</p>
            <div className="mt-auto flex items-center gap-3 rounded-[18px] bg-white p-3 text-[#292929] lg:mt-8" aria-label="Alone time audio preview">
              <button type="button" disabled title="Audio preview coming soon" aria-label="Alone time audio preview coming soon" className="grid size-10 shrink-0 place-items-center rounded-full bg-[#ff801b] text-white disabled:cursor-default">
                <svg viewBox="0 0 20 20" fill="currentColor" className="size-5" aria-hidden="true"><path d="m7 4 9 6-9 6V4Z" /></svg>
              </button>
              <div className="min-w-0 flex-1">
                <p className="text-sm">Alone time</p>
                <div className="mt-1 flex items-center gap-1.5 text-[9px] text-[#aaa]" aria-hidden="true"><span className="text-[#e7832c]">4:23</span><span className="relative h-1 flex-1 rounded-full bg-[#eee]"><span className="absolute inset-y-0 left-0 w-[27%] rounded-full bg-[#ff801b]" /><span className="absolute -top-0.5 left-[27%] size-2 rounded-full border-2 border-[#ff801b] bg-white" /></span><span>16:20</span></div>
              </div>
            </div>
          </article>
        </div>

        <div className="grid gap-3 md:grid-rows-[auto_1fr] lg:gap-4">
          <article className="min-h-[175px] rounded-[24px] bg-[#ff811b] p-6 text-white shadow-[inset_0_-5px_0_rgba(182,76,0,0.18)] lg:p-7">
            <span className="mb-3 inline-block rounded-md bg-white px-2 py-1 text-xs text-[#292929]">Sleep</span>
            <h3 className="text-2xl font-medium leading-tight tracking-[-0.035em] lg:text-3xl">Get more goodnights</h3>
            <p className="mt-2 text-sm leading-tight tracking-[-0.02em] lg:text-base">Put your mind to bed, wake up refreshed, and make good days your new normal.</p>
          </article>
          <article aria-label="Mindspace in numbers" className="relative isolate flex min-h-[300px] items-end overflow-hidden rounded-[24px] bg-[#fa51a5] p-6 text-white shadow-[inset_0_-5px_0_rgba(181,21,104,0.2)] lg:p-7">
            <Flower className="pointer-events-none absolute -left-3 -top-14 -z-10 size-48 rotate-12 text-white" />
            <Flower className="pointer-events-none absolute -right-20 top-0 -z-10 size-44 rotate-12 text-white" />
            <dl className="relative mt-20 grid gap-5">
              {[{ value: "4.9 Stars", label: "Average rating" }, { value: "611.9K Ratings", label: "On iOS and Google Play" }, { value: "70M Downloads", label: "Across all platforms" }].map((metric) => (
                <div key={metric.label} className="flex flex-col"><dt className="order-2 text-xs text-[#ffd3e8] lg:text-sm">{metric.label}</dt><dd className="text-2xl leading-tight tracking-[-0.035em] lg:text-3xl">{metric.value}</dd></div>
              ))}
            </dl>
          </article>
        </div>
      </div>
    </section>
  );
}
