import type { Metadata } from "next";
import BlogHero from "../components/blog-hero";
import BlogFeed from "../components/blog-feed";
import BenefitsCta from "../components/benefits-cta";
import SiteFooter from "../components/site-footer";

export const metadata: Metadata = {
  title: "Blogs | Growthys — Quietly Thinking",
  description: "A calm space for thoughtful reads on nature, design, technology and the ideas in between. Explore the Growthys journal.",
};

export default function BlogsPage() {
  return (
    <>
      <main>
        <BlogHero />
        <BlogFeed />
        <BenefitsCta />
      </main>
      <SiteFooter onHomePage={false} contactHref="/contact#contact-inquiry" faqHref="/insights#faq" />
    </>
  );
}
