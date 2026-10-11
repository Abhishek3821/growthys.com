import type { Metadata } from "next";
import InsightsHero from "../components/insights-hero";
import InsightsArticles from "../components/insights-articles";
import InsightsExperiences from "../components/insights-experiences";
import InsightsWhyChoose from "../components/insights-why-choose";
import BenefitsCta from "../components/benefits-cta";
import FaqSection from "../components/faq-section";
import SiteFooter from "../components/site-footer";

const insightsQuestions = [
  {
    id: 0,
    question: "What can I find on the Growthys Insights page?",
    answer: "Explore ideas, practical reads and fresh perspectives on design, technology and meaningful experiences. Our insights are here to spark your next idea and help you move forward with confidence.",
  },
  {
    id: 1,
    question: "Can Growthys help bring my idea to life?",
    answer: "Yes. Whether you have a clear brief or an early idea, we can help you explore the possibilities, shape a plan and create a digital experience around your goals. Tell us what you have in mind through our contact form.",
  },
  {
    id: 2,
    question: "How do we get started on a project?",
    answer: "Start by sharing a little about your project, your goals and your preferred timeline. We will discuss your needs, answer your questions and work with you to define the next steps.",
  },
  {
    id: 3,
    question: "Can I discuss an idea before committing to a project?",
    answer: "Absolutely. A first conversation is a chance to explore your idea and see how we can help. You do not need a finished brief to reach out—just a starting point and a little curiosity.",
  },
];

export const metadata: Metadata = {
  title: "Insights | Growthys",
  description: "Explore mindfulness, meaningful moments, and a calmer way forward with Growthys.",
};

export default function InsightsPage() {
  return (
    <>
      <main>
        <InsightsHero />
        <InsightsArticles />
        <InsightsWhyChoose />
        <InsightsExperiences />
        <BenefitsCta />
        <FaqSection items={insightsQuestions} eyebrow="A little more clarity" />
      </main>
      <SiteFooter onHomePage={false} contactHref="/contact#contact-inquiry" faqHref="#faq" />
    </>
  );
}
