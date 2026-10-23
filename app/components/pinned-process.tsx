import { digitalMarketingReasons } from "../data/digital-marketing-content";
import type { CSSProperties } from "react";

const notes = [
  { title: digitalMarketingReasons[0].title, description: digitalMarketingReasons[0].description, paper: "#fff0e5", ink: "#b77e3f", pin: "#ff8750", pinLight: "#ffb58d", pinDark: "#ce5428", angle: "10deg" },
  { title: digitalMarketingReasons[1].title, description: digitalMarketingReasons[1].description, paper: "#e8edff", ink: "#6c87ad", pin: "#447dff", pinLight: "#8cb7ff", pinDark: "#2548ce", angle: "-10deg" },
  { title: digitalMarketingReasons[2].title, description: digitalMarketingReasons[2].description, paper: "#f5e5fc", ink: "#895296", pin: "#9a4ff5", pinLight: "#c08bff", pinDark: "#6d2bc7", angle: "11deg" },
  { title: digitalMarketingReasons[3].title, description: digitalMarketingReasons[3].description, paper: "#fff0e5", ink: "#b77e3f", pin: "#ff8750", pinLight: "#ffb58d", pinDark: "#ce5428", angle: "-8deg" },
  { title: digitalMarketingReasons[4].title, description: digitalMarketingReasons[4].description, paper: "#e8edff", ink: "#6c87ad", pin: "#447dff", pinLight: "#8cb7ff", pinDark: "#2548ce", angle: "15deg" },
  { title: digitalMarketingReasons[5].title, description: digitalMarketingReasons[5].description, paper: "#f5e5fc", ink: "#895296", pin: "#9a4ff5", pinLight: "#c08bff", pinDark: "#6d2bc7", angle: "-13deg" },
] as const;

function Pushpin() {
  return (
    <span aria-hidden="true" className="absolute -top-2 left-1/2 z-10 h-10 w-9 -translate-x-1/2 sm:-top-3 sm:h-14 sm:w-12">
      <span className="absolute bottom-0 left-1/2 h-3 w-7 -translate-x-1/2 rounded-full bg-black/15 blur-[3px] sm:h-4 sm:w-10" />
      <span className="absolute bottom-1 left-1/2 h-4 w-7 -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_35%_20%,var(--pin-light),var(--pin)_50%,var(--pin-dark)_85%)] shadow-[0_3px_3px_rgba(0,0,0,0.2)] sm:h-5 sm:w-10" />
      <span className="absolute bottom-3 left-1/2 h-5 w-4 -translate-x-1/2 rounded-[40%] bg-[linear-gradient(90deg,var(--pin-dark),var(--pin-light)_40%,var(--pin)_80%)] sm:bottom-4 sm:h-7 sm:w-6" />
      <span className="absolute left-1/2 top-0 h-5 w-6 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_30%_25%,var(--pin-light),var(--pin)_60%,var(--pin-dark))] shadow-[0_2px_2px_rgba(0,0,0,0.15)] sm:h-7 sm:w-8" />
    </span>
  );
}

export default function PinnedProcess() {
  return (
    <section aria-labelledby="pinned-process-heading" className="mx-auto max-w-[1800px] overflow-hidden bg-[#f5f5f4] px-4 py-12 sm:px-8 lg:py-16">
      <h2 id="pinned-process-heading" className="sr-only">Six Reasons Businesses Choose Growthys</h2>
      <div className="relative isolate mx-auto max-w-[1000px] px-2 pb-24 pt-4 sm:px-10 sm:pb-36">
        <div className="pointer-events-none absolute inset-0 -z-20 bg-[repeating-linear-gradient(180deg,transparent_0_46px,rgba(126,126,126,0.09)_47px,transparent_48px)] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]" aria-hidden="true" />
        <svg viewBox="0 0 1000 1300" preserveAspectRatio="none" fill="none" className="pointer-events-none absolute inset-0 -z-10 size-full" aria-hidden="true">
          <path d="M230 170C420 130 580 200 770 260S340 430 230 560 600 570 770 690 380 830 230 970 620 980 770 1100 630 1210 420 1290" stroke="#c4c4c4" strokeWidth="1.4" strokeDasharray="6 7" />
        </svg>
        <ol className="relative grid grid-cols-2 items-start gap-x-5 gap-y-14 sm:gap-x-24 sm:gap-y-20 lg:gap-x-36">
          {notes.map((note, index) => (
            <li key={note.title} style={{ "--note-paper": note.paper, "--note-ink": note.ink, "--pin": note.pin, "--pin-light": note.pinLight, "--pin-dark": note.pinDark, "--note-angle": note.angle } as CSSProperties} className={`relative mx-auto flex aspect-[0.94] min-h-[190px] w-full max-w-[350px] rotate-[var(--note-angle)] flex-col rounded-[18px] border border-white bg-[linear-gradient(145deg,#fff,#fafaf9)] p-2.5 pt-9 shadow-[0_14px_18px_rgba(55,48,40,0.12),0_4px_5px_rgba(55,48,40,0.04)] sm:min-h-[290px] sm:rounded-[26px] sm:p-4 sm:pt-14 lg:min-h-[340px] ${index % 2 === 1 ? "translate-y-16 sm:translate-y-24" : ""}`}>
              <Pushpin />
              <div className="flex-1 rounded-lg bg-[var(--note-paper)] p-3 sm:rounded-xl sm:p-5">
                <span className="font-serif text-xl italic leading-none text-[var(--note-ink)] sm:text-3xl">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-[15px] font-medium leading-tight tracking-[-0.035em] sm:mt-5 sm:text-2xl lg:text-[28px]">{note.title}</h3>
                <p className="mt-2 text-[10px] leading-[1.4] tracking-[-0.025em] text-[#85817f] sm:mt-3 sm:text-sm lg:text-base">{note.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
