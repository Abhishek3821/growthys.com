import Image from "next/image";
import Link from "next/link";

export default function CrmCommitment() {
  return (
    <section lang="fr" aria-labelledby="crm-commitment-heading" className="mx-auto max-w-[1800px] bg-white px-5 py-12 text-[#151c20] sm:px-8 lg:px-14 lg:py-14">
      <div className="mx-auto grid max-w-[1600px] gap-5 lg:grid-cols-[1.3fr_1fr_0.58fr] lg:gap-5">
        <div className="flex flex-col items-start pb-5 lg:pr-12">
          <p className="mb-9 rounded-full bg-[#1b242b] px-5 py-3 text-xs font-semibold tracking-[0.16em] text-white lg:mb-12">NOTRE ENGAGEMENT</p>
          <h2 id="crm-commitment-heading" className="text-[clamp(30px,3.1vw,48px)] font-bold leading-[1.2] tracking-[-0.045em]">Construire aujourd’hui<br />la banque <span className="inline-block whitespace-nowrap rounded-full bg-[#d5fa85] px-3 pb-1">de demain</span></h2>
          <p className="mt-6 max-w-[560px] text-lg leading-[1.4] tracking-[-0.025em] text-[#686b6d] lg:text-[clamp(18px,1.85vw,27px)]">Des services innovants, un haut niveau de sécurité et une approche responsable pour vous aider à avancer sereinement dans tous vos projets.</p>
          <Link href="/contact#contact-inquiry" aria-label="Contacter Growthys pour ouvrir un compte" className="mt-8 inline-flex min-h-14 items-center justify-between gap-8 rounded-full bg-[#151f26] px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-[#2b3841] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#151f26] lg:mt-auto lg:text-lg">Ouvrir un compte<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-6" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg></Link>
        </div>

        <div className="relative min-h-[430px] lg:h-[clamp(420px,56svh,580px)] lg:min-h-0">
          <div className="absolute inset-0 overflow-hidden rounded-[32px] bg-[#c8d6dc] lg:rounded-[40px]"><Image src="/images/crm-management/commitment-mountains.png" alt="Un randonneur assis sur un sommet rocheux face au coucher de soleil sur les montagnes" fill sizes="(max-width: 1023px) 90vw, 35vw" className="object-cover" /></div>
          <div className="absolute bottom-5 left-4 flex max-w-[290px] items-center gap-5 rounded-[26px] border border-white bg-white px-6 py-5 text-xl leading-[1.3] tracking-[-0.03em] shadow-[0_10px_25px_rgba(20,35,45,0.12)] sm:bottom-7 lg:-left-20 lg:bottom-6 lg:max-w-[300px] lg:px-7 lg:py-6 lg:text-2xl">
            <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="size-12 shrink-0" aria-hidden="true"><rect x="4" y="23" width="6" height="13" rx="2" /><rect x="16" y="15" width="6" height="21" rx="2" /><rect x="28" y="5" width="6" height="31" rx="2" /></svg>
            <p>Des projets<br />qui avancent<br />avec vous</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-1 lg:grid-rows-2">
          <article className="flex min-h-[210px] flex-col justify-between rounded-[30px] bg-[#d9fa91] p-5 sm:p-7 lg:min-h-0 lg:rounded-[36px]">
            <svg viewBox="0 0 72 72" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mb-5 size-16 sm:size-20" aria-hidden="true"><path d="M13 63c4-20 17-36 38-47M18 49C2 25 27 9 63 7 61 43 46 66 18 49Z" /></svg>
            <h3 className="text-lg font-normal leading-[1.3] tracking-[-0.035em] sm:text-xl lg:text-[clamp(19px,1.9vw,28px)]">Une finance<br />plus responsable</h3>
          </article>
          <article className="flex min-h-[210px] flex-col justify-between rounded-[30px] bg-[#d4e0ff] p-5 sm:p-7 lg:min-h-0 lg:rounded-[36px]">
            <svg viewBox="0 0 72 72" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mb-5 size-16 sm:size-20" aria-hidden="true"><path d="M36 7 60 17v17c0 16-12 26-24 33C24 60 12 50 12 34V17L36 7Z" /><path d="m25 34 8 8 15-18" /></svg>
            <h3 className="text-lg font-normal leading-[1.3] tracking-[-0.035em] sm:text-xl lg:text-[clamp(19px,1.9vw,28px)]">Vos données<br />en toute sécurité</h3>
          </article>
        </div>
      </div>
    </section>
  );
}
