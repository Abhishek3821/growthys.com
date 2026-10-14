import Image from "next/image";
import type { CSSProperties } from "react";

const challenges = [
  { title: "Anxiety without time", color: "#5658fa", left: "2%", top: "11cqw", rotation: "5deg", tile: 0 },
  { title: "Fear of in-person therapy", color: "#3ca72f", left: "16%", top: "17cqw", rotation: "-15deg", tile: 1 },
  { title: "Isolation and support", color: "#ff9c49", left: "28%", top: "3cqw", rotation: "-5deg", tile: 2 },
  { title: "Relationship difficulties", color: "#58a6f8", left: "40%", top: "17cqw", rotation: "10deg", tile: 3 },
  { title: "Stressful life transitions", color: "#7946fb", left: "56%", top: "7cqw", rotation: "0deg", tile: 4 },
  { title: "Urgent emotional crisis", color: "#ffba51", left: "67%", top: "18cqw", rotation: "-10deg", tile: 5 },
  { title: "Work challenges", color: "#d64af2", left: "81%", top: "8cqw", rotation: "5deg", tile: 6 },
] as const;

export default function EmotionalStrain() {
  return (
    <section aria-labelledby="emotional-strain-heading" className="mx-auto mb-6 max-w-[1800px] overflow-hidden rounded-[26px] bg-white px-5 pb-6 pt-9 text-[#10121b] sm:px-9 lg:px-6 lg:pt-10 lg:[container-type:inline-size]">
      <div className="relative flex flex-wrap items-start justify-between gap-x-8 gap-y-6 lg:px-2">
        <h2 id="emotional-strain-heading" className="max-w-[720px] text-[clamp(30px,3.6vw,58px)] font-semibold leading-[1.04] tracking-[-0.055em]">
          Overcoming Emotional<br className="hidden sm:block" /> Strain with Online Therapy
        </h2>
        <div className="relative flex max-w-[300px] items-start gap-2 text-[11px] leading-tight tracking-[-0.025em] text-[#68686b] lg:mt-12 xl:text-sm">
          <span className="mt-0.5 size-2 shrink-0 rounded-full bg-[#6555ef] shadow-[0_0_0_3px_#eeebff]" aria-hidden="true" />
          <p>Based on competitor research:<br />BetterHelp, Zigmund.online, TalkSpace</p>
          <svg viewBox="0 0 150 140" fill="none" className="pointer-events-none absolute right-[calc(100%-5px)] top-1 hidden h-[140px] w-[150px] lg:block" aria-hidden="true">
            <path d="M149 1h-23a20 20 0 0 0-20 20v90a20 20 0 0 1-20 20H8" stroke="#bcb5d9" strokeWidth="1.2" strokeDasharray="1 2" />
            <circle cx="8" cy="131" r="6" fill="#eeeaff" /><circle cx="8" cy="131" r="3.5" fill="#6555ef" />
          </svg>
        </div>
      </div>

      <ol aria-label="Emotional challenges" className="relative -mx-5 mt-9 flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain px-7 pb-9 pt-5 sm:-mx-9 sm:px-12 lg:mx-0 lg:mt-3 lg:block lg:h-[49cqw] lg:overflow-visible lg:p-0 lg:[container-type:inline-size]">
        {challenges.map((challenge, index) => (
          <li key={challenge.title} style={{ "--card-color": challenge.color, "--card-left": challenge.left, "--card-top": challenge.top, "--card-rotation": challenge.rotation } as CSSProperties} className="relative flex h-[350px] w-[240px] shrink-0 snap-center flex-col rounded-[24px] bg-[var(--card-color)] p-4 text-white lg:absolute lg:left-[var(--card-left)] lg:top-[var(--card-top)] lg:h-[26cqw] lg:w-[18%] lg:rotate-[var(--card-rotation)] lg:rounded-[2.2cqw] lg:p-[1.2cqw]">
            <span className="grid size-8 place-items-center self-start rounded-full bg-white/15 text-sm lg:size-[3cqw] lg:text-[1.3cqw]">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="mt-5 max-w-[180px] text-[27px] font-normal leading-[1.05] tracking-[-0.035em] lg:mt-[2cqw] lg:max-w-none lg:text-[2.15cqw]">{challenge.title}</h3>
            <div className="relative mt-auto h-[30%] shrink-0 overflow-hidden rounded-xl bg-white/20 lg:rounded-[1cqw]">
              <div className="absolute h-[200%] w-[400%]" style={{ left: `${-(challenge.tile % 4) * 100}%`, top: `${-Math.floor(challenge.tile / 4) * 100}%` }}>
                <Image src="/images/services/therapy-challenges-atlas.png" alt="" fill sizes="(max-width: 1023px) 1200px, 1600px" className="object-fill" />
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
