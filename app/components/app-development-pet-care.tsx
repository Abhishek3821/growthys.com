import Image from "next/image";
import Link from "next/link";
import styles from "./app-development-pet-care.module.css";

function DogIllustration() {
  return <svg viewBox="0 0 150 125" fill="none" className={styles.dog} aria-hidden="true"><path d="M127 119V67c12-9 16-29 9-43-5-11-17-15-31-9L75 27H43C20 27 6 40 9 53c2 10 14 15 26 10l24-9c10 9 17 19 19 32v33" fill="#fff9e8" stroke="#3b7773" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" /><path d="M110 18c-6 17-5 35 6 44 8-4 14-17 13-31M79 86l29-6M44 28l-1 12" stroke="#3b7773" strokeWidth="5" strokeLinecap="round" /><circle cx="74" cy="39" r="3" fill="#3b7773" /><path d="M10 43h10v10H9" fill="#3b7773" /><path d="M27 111l7-5m-3 15 8-2m-15-18 2-7" stroke="#3b7773" strokeWidth="3" strokeLinecap="round" /></svg>;
}

export default function AppDevelopmentPetCare() {
  return (
    <section aria-labelledby="app-pet-care-heading" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.heading}>
          <h2 id="app-pet-care-heading">A pawsonal<br />approach to pet care</h2>
          <p>We treat every pet as part of the family, with thoughtful care<br className="hidden sm:block" /> and a personal approach to every visit.</p>
        </header>
        <div className={styles.cards}>
          <div className={styles.photo}>
            <Image src="/images/services/app-development-pet-care.webp" alt="A veterinarian in teal scrubs gently holding a fluffy border collie" fill sizes="(max-width: 767px) 90vw, 46vw" className="object-cover" />
          </div>
          <div className={styles.treatment}>
            <h3>Treatment plans designed around what’s best for your furry family member — not sales targets.</h3>
            <p>Whether your pet is here for a routine health check or needs a little extra care, we take time to listen, understand their needs, and explain every option. Our approach puts your pet’s wellbeing first, with clear guidance and a treatment plan tailored to them.</p>
            <Link href="/contact#contact-inquiry" className={styles.button}>Book Appointment</Link>
            <DogIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
