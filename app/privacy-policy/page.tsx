import type { Metadata } from "next";
import Navbar from "../components/navbar";
import SiteFooter from "../components/site-footer";
import shared from "../help-support/support.module.css";
import styles from "./privacy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Growthys",
  description: "Learn what information Growthys collects, how we use and protect it, and the choices you have about your personal information.",
};

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "information", title: "Information We Collect" },
  { id: "use", title: "How We Use Your Information" },
  { id: "cookies", title: "Cookies and Tracking" },
  { id: "sharing", title: "How We Share Information" },
  { id: "security", title: "Data Security" },
  { id: "retention", title: "Data Retention" },
  { id: "rights", title: "Your Rights" },
  { id: "children", title: "Children’s Privacy" },
  { id: "third-party", title: "Third-Party Links" },
  { id: "changes", title: "Changes to This Policy" },
  { id: "contact", title: "Contact Us" },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <main className={shared.page}>
        <div className={shared.hero}>
          <header className={shared.nav}><Navbar onHomePage={false} currentPage="/privacy-policy" /></header>
          <section className={shared.heroContent} aria-labelledby="privacy-heading">
            <p className={shared.eyebrow}>PRIVACY POLICY</p>
            <h1 id="privacy-heading">Privacy <span>Policy</span></h1>
            <p className={shared.lead}>Your privacy matters to us. This policy explains what information Growthys collects, how we use it, and the choices you have.</p>
            <p className={styles.updated}>Last Updated: <time dateTime="2026-10-24">24 October 2026</time></p>
          </section>
        </div>

        <div className={styles.layout}>
          <nav className={styles.contents} aria-label="Privacy policy contents">
            <p>IN THIS POLICY</p>
            <ol>{sections.map(section => <li key={section.id}><a href={`#privacy-${section.id}`}>{section.title}</a></li>)}</ol>
          </nav>
          <article className={styles.policy} aria-label="Growthys Privacy Policy">
            <section id="privacy-introduction" aria-labelledby="privacy-introduction-heading">
              <h2 id="privacy-introduction-heading">Introduction</h2>
              <p>Growthys (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;) is a digital marketing company based in Gurugram, Haryana, India. This Privacy Policy applies to our website, services, and communications. By using our website or services, you agree to this policy.</p>
            </section>
            <section id="privacy-information" aria-labelledby="privacy-information-heading">
              <h2 id="privacy-information-heading">Information We Collect</h2>
              <h3>Information You Give Us</h3>
              <ul><li>Name, email address, phone number</li><li>Company name and job title</li><li>Project details and messages</li><li>Billing and payment information</li></ul>
              <h3>Information We Collect Automatically</h3>
              <ul><li>IP address and browser type</li><li>Pages visited and time spent</li><li>Device type and operating system</li><li>Cookies and similar tracking technologies</li></ul>
              <h3>Information From Third Parties</h3>
              <ul><li>Analytics providers (such as Google Analytics)</li><li>Advertising platforms (such as Google Ads and Meta)</li><li>Publicly available business information</li></ul>
            </section>
            <section id="privacy-use" aria-labelledby="privacy-use-heading">
              <h2 id="privacy-use-heading">How We Use Your Information</h2>
              <ul><li>To respond to enquiries and provide our services</li><li>To manage projects, campaigns, and support requests</li><li>To process payments and send invoices</li><li>To improve our website and services</li><li>To send updates, reports, and marketing communications (with your consent)</li><li>To comply with legal obligations</li></ul>
            </section>
            <section id="privacy-cookies" aria-labelledby="privacy-cookies-heading">
              <h2 id="privacy-cookies-heading">Cookies and Tracking</h2>
              <p>Our website uses cookies to improve your experience and understand how visitors use our site. You can disable cookies in your browser settings, though some features may not work properly.</p>
            </section>
            <section id="privacy-sharing" aria-labelledby="privacy-sharing-heading">
              <h2 id="privacy-sharing-heading">How We Share Information</h2>
              <p>We do not sell your personal information. We may share it with:</p>
              <ul><li>Service providers — hosting, analytics, email, and payment processors</li><li>Team members — who need the information to deliver your project</li><li>Legal authorities — when required by law</li><li>Business transfers — in case of a merger or acquisition</li></ul>
              <p>All third parties are required to protect your data and use it only for the agreed purpose.</p>
            </section>
            <section id="privacy-security" aria-labelledby="privacy-security-heading">
              <h2 id="privacy-security-heading">Data Security</h2>
              <p>We use reasonable technical and organisational measures to protect your information, including secure servers, access controls, and encryption where appropriate. However, no method of transmission over the internet is completely secure.</p>
            </section>
            <section id="privacy-retention" aria-labelledby="privacy-retention-heading">
              <h2 id="privacy-retention-heading">Data Retention</h2>
              <p>We keep personal information only as long as needed for the purposes described in this policy, or as required by law. When no longer needed, data is securely deleted.</p>
            </section>
            <section id="privacy-rights" aria-labelledby="privacy-rights-heading">
              <h2 id="privacy-rights-heading">Your Rights</h2>
              <p>You have the right to:</p>
              <ul><li>Access the personal information we hold about you</li><li>Request correction of inaccurate information</li><li>Request deletion of your data (where legally permitted)</li><li>Withdraw consent for marketing communications</li><li>Object to certain processing activities</li></ul>
              <p>To exercise these rights, email us at <a href="mailto:growthysofficial@gmail.com">growthysofficial@gmail.com</a>.</p>
            </section>
            <section id="privacy-children" aria-labelledby="privacy-children-heading">
              <h2 id="privacy-children-heading">Children&apos;s Privacy</h2>
              <p>Our services are intended for businesses and adults. We do not knowingly collect personal information from children under 18.</p>
            </section>
            <section id="privacy-third-party" aria-labelledby="privacy-third-party-heading">
              <h2 id="privacy-third-party-heading">Third-Party Links</h2>
              <p>Our website may link to external sites. We are not responsible for their privacy practices. Please review their policies separately.</p>
            </section>
            <section id="privacy-changes" aria-labelledby="privacy-changes-heading">
              <h2 id="privacy-changes-heading">Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. The &quot;Last Updated&quot; date at the top shows when changes were made. Continued use of our website means you accept the updated policy.</p>
            </section>
            <section id="privacy-contact" className={styles.contact} aria-labelledby="privacy-contact-heading">
              <h2 id="privacy-contact-heading">Contact Us</h2>
              <p>For privacy-related questions:</p>
              <p>Email: <a href="mailto:growthysofficial@gmail.com">growthysofficial@gmail.com</a><br />Address: Gurugram, Haryana, India</p>
            </section>
          </article>
        </div>
      </main>
      <SiteFooter onHomePage={false} contactHref="/contact#contact-inquiry" />
    </>
  );
}
