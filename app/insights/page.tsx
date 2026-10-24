import type { Metadata } from "next";
import InsightsHero from "../components/insights-hero";
import InsightsArticles from "../components/insights-articles";
import InsightsExperiences from "../components/insights-experiences";
import CompanyTeam from "../components/company-team";
import InsightsWhyChoose from "../components/insights-why-choose";
import BenefitsCta from "../components/benefits-cta";
import FaqSection from "../components/faq-section";
import SiteFooter from "../components/site-footer";

const insightsQuestions = [
  {
    "id": 0,
    "question": "What does Growthys do?",
    "answer": "Growthys is a digital marketing company and IT solutions company in India. We handle SEO, social media, paid ads, web design, custom software development, CRM & management software, and HRMS software development."
  },
  {
    "id": 1,
    "question": "Where is Growthys based?",
    "answer": "We are based in Gurugram, Haryana, and serve clients across India and internationally."
  },
  {
    "id": 2,
    "question": "Who do you work with?",
    "answer": "Startups, SMEs, and large enterprises. We also work as a professional IT solutions provider in India for businesses that need both marketing and technology support."
  },
  {
    "id": 3,
    "question": "What makes Growthys different?",
    "answer": "Most businesses hire separate agencies for marketing and development. We combine both as an IT services company in India and a marketing partner — one team, one plan, one report."
  },
  {
    "id": 4,
    "question": "How long has Growthys been operating?",
    "answer": "Our team brings 10+ years of combined experience across marketing, design, and software development."
  },
  {
    "id": 5,
    "question": "How do I get started?",
    "answer": "Fill in the form above or book a call. We review your goals, suggest a plan, and share a clear scope — no obligation."
  }
];

export const metadata: Metadata = {
  title: "Company Overview | Growthys",
  description: "Growthys is a digital marketing company and IT solutions company in Gurugram, Haryana. Discover our approach to marketing, software development, and consulting.",
};

export default function InsightsPage() {
  return (
    <>
      <main>
        <InsightsHero />
        <InsightsArticles />
        <InsightsWhyChoose />
        <InsightsExperiences />
        <CompanyTeam />
        <BenefitsCta companyOverview />
        <FaqSection items={insightsQuestions} eyebrow="About Growthys" />
      </main>
      <SiteFooter onHomePage={false} contactHref="/contact#contact-inquiry" faqHref="#faq" />
    </>
  );
}
