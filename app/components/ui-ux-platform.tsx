import Image from "next/image";
import Link from "next/link";

export default function UiUxPlatform() {
  return (
    <section aria-labelledby="ui-ux-platform-heading" className="bg-white px-6 py-12 text-[#111312] sm:px-10 lg:px-[5%] lg:py-16">
      <div className="mx-auto grid max-w-[1400px] items-start gap-10 md:grid-cols-2 lg:gap-16">
        <div>
          <h2 id="ui-ux-platform-heading" className="text-[clamp(34px,3.8vw,55px)] font-bold leading-[1.05] tracking-[-0.035em]">A PLATFORM<br />DESIGNED FOR<br />SUCCESS</h2>
          <p className="mt-5 max-w-[580px] text-sm leading-[1.5] lg:text-base">Our platform is designed to support your learning journey and help you excel in your career with confidence.</p>
          <Link href="/contact#contact-inquiry" className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-[#f1f4f3] px-6 py-3 text-xs font-semibold transition-colors hover:bg-[#e2e8e4] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#26392d]">See all courses</Link>
        </div>
        <div className="relative rounded-[25px] bg-[#1b1c1e] p-5 pb-12 sm:p-7 sm:pb-14 lg:p-8 lg:pb-14">
          <div className="relative aspect-[1.35] overflow-hidden rounded-[28px] bg-[#d6dadd] sm:mr-8 lg:mr-12">
            <Image src="/images/services/ui-ux-platform-instructor.webp" alt="An instructor in a navy cap and overshirt facing the camera" fill sizes="(max-width: 767px) 85vw, 43vw" className="object-cover" />
          </div>
          <div role="img" aria-label="Learning progress preview: 2 out of 8, with four rising bars" className="absolute bottom-5 right-5 w-[36%] rounded-[20px] bg-white p-3 text-[#141613] shadow-[0_8px_20px_#00000012] sm:bottom-6 sm:right-6 sm:p-4 lg:w-[35%]">
            <p className="text-[clamp(24px,3vw,40px)] leading-none tracking-[-0.05em]"><strong className="font-semibold">2</strong><span className="ml-1 font-light text-[#81857e]">/8</span></p>
            <div className="mt-2 flex h-[85px] items-end gap-1 sm:h-[105px] lg:h-[125px]">
              {[18, 34, 52, 88].map((height, index) => <span key={height} style={{ height: `${height}%`, backgroundColor: index === 3 ? "#ff9700" : "#ffbc2d" }} className="block flex-1 rounded-[9px]" />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
