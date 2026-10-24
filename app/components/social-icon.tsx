import type { SocialPlatform } from "../data/social-links";

export default function SocialIcon({ name }: { name: SocialPlatform }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
      {name === "Instagram" && <><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" /><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" /></>}
      {name === "LinkedIn" && <><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" /><circle cx="7.5" cy="7.5" r="1.2" fill="currentColor" /><path d="M7.5 10.5v7M11.5 17.5v-7m0 3a3 3 0 0 1 6 0v4" stroke="currentColor" strokeWidth="1.8" /></>}
      {name === "Facebook" && <path d="M14 21v-8h3l.5-3H14V8c0-1 .3-1.5 1.7-1.5H18V3.3c-.7-.1-1.7-.3-3-.3-3 0-4.7 1.8-4.7 4.8V10H7v3h3.3v8H14Z" fill="currentColor" />}
    </svg>
  );
}
