import type { Metadata } from "next";
import { withSocialMetadata } from "../lib/social-metadata";
import { PageStructuredData } from "../components/structured-data";
import BlogHero from "../components/blog-hero";
import BlogFeed from "../components/blog-feed";
import BenefitsCta from "../components/benefits-cta";
import SiteFooter from "../components/site-footer";

export const metadata: Metadata = withSocialMetadata({ alternates: { canonical: "/blogs" },
  title: "Blogs | Growthys — Digital Marketing & Business Growth",
  description: "Practical guides from Growthys on SEO, digital marketing, website development and growing your business online.",
}, "/blogs");

export default function BlogsPage() {
  return (
    <>
      <main><PageStructuredData path="/blogs" metadata={metadata} />
        <BlogHero />
        <BlogFeed />
        <BenefitsCta />
      </main>
      <SiteFooter onHomePage={false} contactHref="/contact#contact-inquiry" faqHref="/insights#faq" />
    </>
  );
}
