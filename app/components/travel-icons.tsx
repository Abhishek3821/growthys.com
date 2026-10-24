type IconName = "map" | "calendar" | "headset" | "smile" | "badge" | "pin";

export default function TravelIcon({ name, title }: { name: IconName; title?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" role={title ? "img" : undefined} aria-label={title} aria-hidden={title ? undefined : true}>
      {name === "map" && <g fill="currentColor"><path d="m6 16 13-8v43L6 58zM23 8l17 10v40L23 49zM44 18l10-7c3-2 5 0 5 3v35l-15 9z" /></g>}
      {name === "calendar" && <>
        <path d="M10 12h36a5 5 0 0 1 5 5v9H5v-9a5 5 0 0 1 5-5Zm-5 19h46v22a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5Z" fill="currentColor" />
        <path d="M16 8v10M40 8v10" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <g fill="#edf1f4"><circle cx="15" cy="39" r="2.3" /><circle cx="26" cy="39" r="2.3" /><circle cx="15" cy="49" r="2.3" /></g>
        <circle cx="47" cy="47" r="13" fill="currentColor" stroke="#edf1f4" strokeWidth="4" />
        <path d="m41 47 4 4 8-9" stroke="#edf1f4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </>}
      {name === "headset" && <>
        <path d="M7 36v-6a25 25 0 0 1 50 0v6" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <rect x="5" y="33" width="17" height="26" rx="8" fill="currentColor" /><rect x="42" y="33" width="17" height="26" rx="8" fill="currentColor" />
      </>}
      {name === "smile" && <g stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"><circle cx="32" cy="32" r="20" /><path d="M22 35c3 10 17 10 20 0M23 25h1M40 25h1" /></g>}
      {name === "badge" && <><path d="m32 7 5 5 7-1 2 7 7 3-1 7 5 5-5 5 1 7-7 3-2 7-7-1-5 5-5-5-7 1-2-7-7-3 1-7-5-5 5-5-1-7 7-3 2-7 7 1z" fill="currentColor" /><path d="m23 32 6 6 13-14" stroke="#364641" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></>}
      {name === "pin" && <g stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round"><path d="M46 24c0 11-14 24-14 24S18 35 18 24a14 14 0 0 1 28 0Z" /><circle cx="32" cy="24" r="4.5" /><path d="m19 39-8 14h42l-8-14" /></g>}
    </svg>
  );
}
