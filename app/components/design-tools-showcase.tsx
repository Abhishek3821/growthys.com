import Image from "next/image";

export default function DesignToolsShowcase() {
  return (
    <section aria-labelledby="design-tools-heading" className="mx-auto max-w-[1800px] px-5 pb-12 sm:px-7 lg:px-8 lg:pb-20">
      <h2 id="design-tools-heading" className="sr-only">Creative Design Tools We Work With</h2>
      <div className="overflow-x-auto rounded-[28px] bg-[#f8fafb]">
        <div className="relative aspect-[2.55] min-w-[640px]">
          <Image
            src="/images/website-design/graphics/design-toolkit.webp"
            alt="Five coordinated creative workspaces representing interface design, Adobe creative tools, Webflow, WordPress, and React with Next.js"
            fill
            quality={95}
            sizes="(max-width: 679px) 640px, (max-width: 1800px) 100vw, 1800px"
            className="object-contain"
          />
        </div>
      </div>
      <p className="mt-4 text-center text-sm leading-relaxed text-[#555158]">Creative Design Tools We Work With: Figma · Adobe Photoshop and Illustrator · Webflow · WordPress · React and Next.js</p>
    </section>
  );
}
