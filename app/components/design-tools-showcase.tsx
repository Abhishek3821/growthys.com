import Image from "next/image";

export default function DesignToolsShowcase() {
  return (
    <section aria-labelledby="design-tools-heading" className="mx-auto max-w-[1800px] px-5 pb-12 sm:px-7 lg:px-8 lg:pb-20">
      <h2 id="design-tools-heading" className="sr-only">Creative design tools</h2>
      <div className="overflow-x-auto rounded-[28px] bg-[#f8fafb]">
        <div className="relative aspect-[2.55] min-w-[640px]">
          <Image
            src="/images/website-design/design-tools-showcase.png"
            alt="Five purple and navy panels featuring a design dashboard, colour wheel, designer with an oversized pen, creative toolbar, and digital design tools"
            fill
            sizes="(max-width: 679px) 640px, (max-width: 1800px) 100vw, 1800px"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
