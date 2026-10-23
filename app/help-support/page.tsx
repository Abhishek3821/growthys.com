import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/navbar";
import SiteFooter from "../components/site-footer";
import styles from "./support.module.css";

export const metadata: Metadata = {
  title: "Help & Support | Growthys",
  description: "Find quick answers and reach the Growthys support team for website, marketing, software, billing and account queries.",
};

const topics = [
  { title: "Website & Design", description: "Issues with your website, design changes, or hosting queries." },
  { title: "Marketing Campaigns", description: "Questions about SEO, ads, social media, or campaign performance reports." },
  { title: "Software & CRM", description: "Support for CRM & management software, HRMS software development projects, and custom applications." },
  { title: "Billing & Invoices", description: "Payment queries, invoice copies, and subscription details." },
  { title: "Account Access", description: "Login issues, password resets, or team member access changes." },
];
const steps = [
  { title: "Raise a Request", description: "Email us or use the contact form with your project details and the issue." },
  { title: "Get a Ticket Number", description: "We confirm your request and share a ticket number for tracking." },
  { title: "We Investigate", description: "Our team reviews the issue and assigns the right specialist." },
  { title: "Resolution & Follow-Up", description: "We fix the issue, confirm with you, and follow up to make sure it stays fixed." },
];
const responseTimes = [
  { topic: "General queries", time: "Within 1 working day" },
  { topic: "Technical issues", time: "Within 4–8 working hours" },
  { topic: "Urgent website downtime", time: "Within 2 hours (business hours)" },
  { topic: "Billing queries", time: "Within 2 working days" },
];

export default function HelpSupportPage() {
  return (
    <>
      <main className={styles.page}>
        <div className={styles.hero}>
          <header className={styles.nav}><Navbar onHomePage={false} currentPage="/help-support" /></header>
          <section className={styles.heroContent} aria-labelledby="support-heading">
            <p className={styles.eyebrow}>HELP &amp; SUPPORT</p>
            <h1 id="support-heading">How Can We<br /><span>Help You?</span></h1>
            <p className={styles.lead}>Find quick answers or reach our support team — all in one place. Growthys is here to make sure your experience stays smooth from start to finish.</p>
            <div className={styles.actions}><a className={styles.primary} href="mailto:growthysofficial@gmail.com">Email Support <span aria-hidden="true">↗</span></a><a className={styles.secondary} href="#support-topics">Explore Support Topics <span aria-hidden="true">↓</span></a></div>
          </section>
        </div>

        <section className={styles.section} aria-labelledby="quick-support-heading">
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>LET’S TALK</p><h2 id="quick-support-heading">Quick Support Options</h2></div>
          <div className={styles.supportGrid}>
            <article className={styles.supportCard}>
              <span className={styles.symbol} aria-hidden="true">↗</span><h3>Talk to Our Team</h3>
              <p>Have a question about your project, campaign, or invoice? Our support team replies within one working day.</p>
              <div className={styles.contactLinks}><a href="mailto:growthysofficial@gmail.com">growthysofficial@gmail.com</a><a href="tel:+919625663269">+91 9625663269</a></div>
            </article>
            <article className={`${styles.supportCard} ${styles.greenCard}`}>
              <span className={styles.symbol} aria-hidden="true">↗</span><h3>WhatsApp Support</h3>
              <p>For quick questions and updates, message us on WhatsApp during working hours.</p>
              <div className={styles.contactLinks}><a href="https://wa.me/919625663269" target="_blank" rel="noopener noreferrer">WhatsApp: +91 9625663269 <span aria-hidden="true">↗</span></a></div>
            </article>
          </div>
        </section>

        <section className={`${styles.section} ${styles.topics}`} id="support-topics" aria-labelledby="topics-heading">
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>FIND YOUR ANSWER</p><h2 id="topics-heading">Common Support Topics</h2></div>
          <div className={styles.topicGrid}>{topics.map((topic, index) => <article key={topic.title} className={styles.topicCard}><span className={styles.number}>{String(index + 1).padStart(2, "0")}</span><h3>{topic.title}</h3><p>{topic.description}</p><a href={`mailto:growthysofficial@gmail.com?subject=${encodeURIComponent(`Support: ${topic.title}`)}`} aria-label={`Get support for ${topic.title}`}>Get support <span aria-hidden="true">↗</span></a></article>)}</div>
        </section>

        <section className={styles.section} aria-labelledby="process-heading">
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>WHAT HAPPENS NEXT</p><h2 id="process-heading">Support Process</h2></div>
          <ol className={styles.process}>{steps.map((step, index) => <li key={step.title}><span className={styles.stepNumber}>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol>
        </section>

        <section className={`${styles.section} ${styles.response}`} aria-labelledby="response-heading">
          <div><p className={styles.eyebrow}>CLEAR EXPECTATIONS</p><h2 id="response-heading">Response Times</h2></div>
          <dl className={styles.responseList}>{responseTimes.map(item => <div key={item.topic}><dt>{item.topic}</dt><dd>{item.time}</dd></div>)}</dl>
        </section>

        <section className={styles.finalSection} aria-labelledby="still-help-heading">
          <p className={styles.eyebrow}>STILL NEED HELP?</p><h2 id="still-help-heading">Didn&apos;t Find What<br />You Needed?</h2>
          <p>Our team is one message away. Tell us what&apos;s going on and we&apos;ll point you in the right direction.</p>
          <Link href="/contact#contact-inquiry" className={styles.primary}>Contact Our Team <span aria-hidden="true">↗</span></Link>
        </section>
      </main>
      <SiteFooter onHomePage={false} contactHref="/contact#contact-inquiry" />
    </>
  );
}
