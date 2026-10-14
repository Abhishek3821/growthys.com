import Image from "next/image";
import travelPhoto from "../../public/images/travel-partner.webp";
import styles from "./travel-partner.styles";

const benefits = [
  { icon: "price", lines: ["Best Price", "Guarantee"] },
  { icon: "support", lines: ["24/7", "Support"] },
  { icon: "secure", lines: ["Secure", "Booking"] },
  { icon: "trusted", lines: ["Trusted", "by Millions"] },
] as const;

function TrustIcon({ name }: { name: (typeof benefits)[number]["icon"] }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {name === "price" && <>
        <circle cx="32" cy="32" r="23" />
        <path d="M40 23c-2-4-16-5-16 2 0 8 16 5 16 13 0 7-14 7-17 2M32 17v30" />
      </>}
      {name === "support" && <>
        <path d="M11 34v-5a21 21 0 0 1 42 0v5M43 53h-9M53 43c0 7-4 10-10 10" />
        <rect x="7" y="30" width="12" height="18" rx="5" />
        <rect x="45" y="30" width="12" height="18" rx="5" />
        <path d="M32 18v13l8 5" />
      </>}
      {name === "secure" && <>
        <path d="M32 7c7 5 14 7 21 8v17c0 13-9 21-21 26-12-5-21-13-21-26V15c7-1 14-3 21-8Z" />
        <path d="m22 32 7 7 14-15" />
      </>}
      {name === "trusted" && <>
        <path d="m32 7 8 7 10 2 2 10 7 6-7 8-2 10-10 2-8 7-8-7-10-2-2-10-7-8 7-6 2-10 10-2Z" />
        <path d="m32 20 4 8 9 1-7 7 2 9-8-5-8 5 2-9-7-7 9-1Z" />
      </>}
    </svg>
  );
}

export default function TravelPartner() {
  return (
    <section className={styles.section} aria-labelledby="travel-partner-heading">
      <div className={styles.banner}>
        <div className={styles.photograph}>
          <Image src={travelPhoto} alt="A traveler with a straw hat and backpack looking out over a sunny coastal bay, with a plane flying above the mountains." fill placeholder="blur" sizes="(max-width: 700px) 100vw, (max-width: 1500px) 58vw, 820px" className={styles.image} />
          <div className={styles.photoShade} aria-hidden="true" />
        </div>

        <div className={styles.panel} aria-hidden="true" />
        <svg className={styles.brushEdge} viewBox="0 0 100 400" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 0H68l-5 8 14 4-17 8 9 6-12 8 19 5-10 7 17 7-19 6 9 9-8 7 18 5-12 9 15 8-12 4 17 10-14 9 6 9-17 8 11 8-18 6 8 11-20 7 8 9-16 6 12 11-17 7 9 10-20 8 10 9-21 8 9 10-16 8 7 10-16 7 9 9-17 8 6 10-11 9 7 10-16 8 10 10-13 7 8 10-10 8 7 10-14 8 7 9-9 10 6 8-10 9 8 9-10 8 5 9-9 10 7 8-10 10 6 12H0Z" fill="#002d34" />
        </svg>

        <div className={styles.content}>
          <p className={styles.eyebrow}><span aria-hidden="true" />Why choose us</p>
          <h2 id="travel-partner-heading">Your Trusted Travel<br />Partner</h2>
          <p className={styles.description}>
            We make travel simple, safe and memorable.<br className={styles.desktopBreak} />
            {" "}With expert planning, 24/7 support and exclusive deals,
            your dream trip is always within reach.
          </p>

          <ul className={styles.benefits} aria-label="Travel with confidence">
            {benefits.map((benefit) => (
              <li key={benefit.icon}>
                <TrustIcon name={benefit.icon} />
                <p>{benefit.lines.map((line) => <span key={line}>{line}</span>)}</p>
              </li>
            ))}
          </ul>
        </div>

        <svg className={styles.arrow} viewBox="0 0 200 120" fill="none" aria-hidden="true">
          <path d="M12 103C83 112 93 29 173 22" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <path d="M17 111C88 111 102 39 169 29M7 94C70 100 87 36 139 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".65" />
          <path d="m151 12 26 9-18 20M159 14l19 7-13 14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
