import type { Metadata } from "next";
import Navbar from "../components/navbar";
import SiteFooter from "../components/site-footer";
import shared from "../help-support/support.module.css";
import styles from "../privacy-policy/privacy.module.css";

export const metadata: Metadata = {
  title: "Terms & Conditions | Growthys",
  description: "Read the terms for using the Growthys website and services, including project scope, payments, intellectual property and client responsibilities.",
};

const sections = [
  { id: "acceptance", title: "Acceptance of Terms", paragraphs: ["By accessing our website or using our services, you agree to these Terms & Conditions. If you do not agree, please do not use our website or services."] },
  { id: "about", title: "About Growthys", paragraphs: ["Growthys is a digital marketing company and IT solutions company in India, providing web design, SEO, social media marketing, performance marketing, software development, CRM & management software, and HRMS software development services."] },
  { id: "services", title: "Services", items: ["All services are provided based on a written proposal, quotation, or agreement.", "Project scope, timelines, and deliverables are confirmed before work begins.", "Changes to scope may affect timelines and cost.", "We reserve the right to refuse or discontinue services at our discretion."] },
  { id: "responsibilities", title: "Client Responsibilities", paragraphs: ["You agree to:"], items: ["Provide accurate and complete information", "Supply required content, access, and approvals on time", "Ensure you have rights to any materials you provide", "Use our services only for lawful purposes"] },
  { id: "payments", title: "Payments", items: ["Invoices are payable as per the agreed schedule", "Late payments may result in work suspension", "All fees are exclusive of applicable taxes unless stated otherwise", "Refunds are provided only as specified in the project agreement"] },
  { id: "intellectual-property", title: "Intellectual Property", items: ["Upon full payment, you receive ownership of final deliverables as agreed", "Growthys retains rights to its own tools, frameworks, and pre-existing materials", "We may showcase completed work in our portfolio unless you request otherwise in writing"] },
  { id: "confidentiality", title: "Confidentiality", paragraphs: ["Both parties agree to keep confidential information private and use it only for the purpose of the project. This obligation continues after the project ends."] },
  { id: "liability", title: "Limitation of Liability", paragraphs: ["Growthys is not liable for indirect, incidental, or consequential damages. Our total liability is limited to the fees paid for the specific service in question. We do not guarantee specific business results from marketing or software services."] },
  { id: "third-party", title: "Third-Party Services", paragraphs: ["We may use third-party tools, platforms, or hosting providers. We are not responsible for outages, policy changes, or issues caused by those third parties."] },
  { id: "website-use", title: "Website Use", paragraphs: ["You agree not to:"], items: ["Copy, resell, or redistribute our content without permission", "Attempt to gain unauthorised access to our systems", "Use our website in any way that harms others or violates the law"] },
  { id: "termination", title: "Termination", paragraphs: ["Either party may terminate a service agreement with written notice as per the agreed terms. Outstanding payments remain due for work completed."] },
  { id: "governing-law", title: "Governing Law", paragraphs: ["These terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of courts in Gurugram, Haryana."] },
  { id: "changes", title: "Changes to Terms", paragraphs: ["We may update these Terms & Conditions at any time. Continued use of our website or services means you accept the updated terms."] },
];

export default function TermsConditionsPage() {
  return (
    <>
      <main className={shared.page}>
        <div className={shared.hero}>
          <header className={shared.nav}><Navbar onHomePage={false} currentPage="/terms-conditions" /></header>
          <section className={shared.heroContent} aria-labelledby="terms-heading">
            <p className={shared.eyebrow}>TERMS &amp; CONDITIONS</p>
            <h1 id="terms-heading">Terms &amp;<br /><span>Conditions</span></h1>
            <p className={shared.lead}>These terms explain the rules for using the Growthys website and services. Please read them carefully before engaging with us.</p>
            <p className={styles.updated}>Last Updated: <time dateTime="2026-10-24">24 October 2026</time></p>
          </section>
        </div>
        <div className={styles.layout}>
          <nav className={styles.contents} aria-label="Terms and conditions contents">
            <p>IN THESE TERMS</p>
            <ol>{sections.map(section => <li key={section.id}><a href={`#terms-${section.id}`}>{section.title}</a></li>)}<li><a href="#terms-contact">Contact Us</a></li></ol>
          </nav>
          <article className={styles.policy} aria-label="Growthys Terms and Conditions">
            {sections.map(section => <section key={section.id} id={`terms-${section.id}`} aria-labelledby={`terms-${section.id}-heading`}>
              <h2 id={`terms-${section.id}-heading`}>{section.title}</h2>
              {section.paragraphs?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              {section.items && <ul>{section.items.map(item => <li key={item}>{item}</li>)}</ul>}
            </section>)}
            <section id="terms-contact" className={styles.contact} aria-labelledby="terms-contact-heading">
              <h2 id="terms-contact-heading">Contact Us</h2>
              <p>For questions about these terms:</p>
              <p>Email: <a href="mailto:growthysofficial@gmail.com">growthysofficial@gmail.com</a><br />Address: Gurugram, Haryana, India</p>
            </section>
          </article>
        </div>
      </main>
      <SiteFooter onHomePage={false} contactHref="/contact#contact-inquiry" />
    </>
  );
}
