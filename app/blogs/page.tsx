import type { Metadata } from "next";
import BlogHero from "../components/blog-hero";
import BlogFeed from "../components/blog-feed";
import BenefitsCta from "../components/benefits-cta";
import SiteFooter from "../components/site-footer";

export const metadata: Metadata = {
  title: "Blogs | Growthys — Digital Marketing & Business Growth",
  description: "Practical guides from Growthys on SEO, digital marketing, website development and growing your business online.",
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
