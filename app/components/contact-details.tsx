"use client";

import { useState, type FormEvent } from "react";
import styles from "./contact-details.styles";

// Contact values follow the supplied design and remain placeholders.
const contactCards = [
  { icon: "phone", title: "(+654) 764 7654", description: "Have a question or an idea? Let's talk about your goals and find the right way forward.", target: "#contact-inquiry" },
  { icon: "email", title: "mail@lawnc.com", description: "Tell us what you have in mind. Share a few details and start a conversation with our team.", target: "#contact-inquiry" },
  { icon: "location", title: "London Eye, UK", description: "Great ideas can start anywhere. Find our location and plan your next conversation with us.", target: "#contact-location" },
] as const;

function ContactIcon({ name }: { name: (typeof contactCards)[number]["icon"] }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {name === "phone" && <><path d="m11 5 4 6-3 3c2 3 4 5 7 7l3-3 5 4c-1 4-3 6-6 5C12 24 6 18 4 10c-1-3 2-5 7-5Z" /><path d="M21 5a8 8 0 0 1 6 7M21 9a4 4 0 0 1 3 3" /></>}
      {name === "email" && <><rect x="5" y="12" width="22" height="15" rx="3" /><path d="m5 14 11 7 11-7M10 15V5h12v10M13 9h6M13 12h6M5 12l5-4m17 4-5-4" /></>}
      {name === "location" && <><path d="M23 11c0 5-7 12-7 12S9 16 9 11a7 7 0 1 1 14 0Z" /><circle cx="16" cy="11" r="2.5" /><path d="m9 20-5 2v6l8-2 8 2 8-2v-6l-5-2M12 23v3m8-3v5" /></>}
    </svg>
  );
}

function HoursIcon({ closed = false }: { closed?: boolean }) {
  return <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">{closed ? <path d="m6 6 8 8m0-8-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /> : <><circle cx="10" cy="10" r="8" fill="currentColor" /><path d="M10 5v5l3 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" /></>}</svg>;
}

export default function ContactDetails() {
  const [showNotice, setShowNotice] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowNotice(true);
  }

  return (
    <section className={styles.section} id="contact-details" aria-label="Contact details and inquiry form">
      <div className={styles.container}>
        <div className={styles.cards}>
          {contactCards.map((card) => (
            <article className={styles.card} data-kind={card.icon} key={card.icon}>
              <div className={styles.icon}><ContactIcon name={card.icon} /></div>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              <a className={styles.learnMore} href={card.target}><span aria-hidden="true">↗</span> Learn More</a>
            </article>
          ))}
        </div>
        <div className={styles.lower}>
          <div className={styles.information}>
            <div className={styles.hours}>
              <h2>Our Working Time</h2>
              <p>Planning a conversation? Take a look at our working hours and choose a time that works for you.</p>
              <ul>
                <li><HoursIcon /><span>Monday–Friday: <strong>7AM–5PM</strong></span></li>
                <li><HoursIcon /><span>Saturday: <strong>9AM–4PM</strong></span></li>
                <li><HoursIcon closed /><span>Sunday: <strong>Holiday</strong></span></li>
              </ul>
            </div>
            <div className={styles.location} id="contact-location">
              <h2>Location :</h2>
              <div className={styles.map}>
                <iframe title="Map showing London Eye, UK" src="https://maps.google.com/maps?q=London%20Eye%2C%20UK&z=13&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
              </div>
            </div>
          </div>
          <div className={styles.inquiry} id="contact-inquiry">
            <span className={styles.badge}>Contact Us</span>
            <h2>Get In Touch !</h2>
            <form className={styles.form} onSubmit={handleSubmit} onChange={() => setShowNotice(false)}>
              <label htmlFor="inquiry-email">Email<input id="inquiry-email" name="email" type="email" autoComplete="email" placeholder="Email" required /></label>
              <label htmlFor="inquiry-name">Name<input id="inquiry-name" name="name" autoComplete="name" placeholder="Name" required maxLength={100} /></label>
              <label htmlFor="inquiry-message">Message<textarea id="inquiry-message" name="message" placeholder="Message" rows={5} required maxLength={3000} /></label>
              <button className={styles.submitButton} type="submit">Submit <span aria-hidden="true">↗</span></button>
              {showNotice && <p className={styles.notice} role="status">Message sending will be available soon. Your message has not been sent.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
