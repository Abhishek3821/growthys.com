export type BlogPost = {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  author: string;
  authorPortrait: number;
  publishedAt: string;
};

// Add approved articles here; the existing journal layout consumes this data.
export const blogPosts: BlogPost[] = [
  {
    id: "seo-for-small-businesses",
    title: "SEO for Small Businesses: A Complete Starting Guide",
    category: "SEO",
    excerpt: "Learn how small businesses can get found on Google with local SEO, a technically sound website and useful content that turns search visibility into real leads.",
    image: "/images/blogs/seo-for-small-businesses.webp",
    imageAlt: "Paper-cut illustration of a small storefront connected to a search bar, local map pin, search results, website speed, backlinks and growing organic traffic.",
    author: "Growthys",
    authorPortrait: 0,
    publishedAt: "2026-10-26",
  },
  {
    id: "google-ads-vs-seo",
    title: "Google Ads vs SEO: Which Should Your Business Choose?",
    category: "Digital Marketing",
    excerpt: "Compare Google Ads and SEO by speed, budget and long-term value, and learn how to choose the right mix for your business goals.",
    image: "/images/blogs/google-ads-vs-seo.webp",
    imageAlt: "Split-screen editorial illustration comparing Google Ads clicks, budget and fast results with SEO content, search visibility and steady growth, both supporting the same business.",
    author: "Growthys",
    authorPortrait: 0,
    publishedAt: "2026-10-26",
  },
  {
    id: "why-your-business-needs-custom-crm-software",
    title: "Why Your Business Needs Custom CRM Software",
    category: "Software Development",
    excerpt: "Bring leads, follow-ups and sales reporting into one connected system. Learn how custom CRM software fits your workflow and helps your team close more deals.",
    image: "/images/blogs/custom-crm-software.webp",
    imageAlt: "Isometric 3D CRM dashboard with lead pipeline cards, follow-up reminders and sales reports connected to email, messaging, accounting and role-based access modules.",
    author: "Growthys",
    authorPortrait: 0,
    publishedAt: "2026-10-26",
  },
  {
    id: "hrms-software-what-it-is-and-why-your-business-needs-it",
    title: "HRMS Software: What It Is and Why Your Business Needs It",
    category: "HR Technology",
    excerpt: "Simplify attendance, leave, payroll and employee records with a custom HRMS built around your policies. Discover how automation supports your HR team as your business grows.",
    image: "/images/blogs/hrms-software.webp",
    imageAlt: "Hand-painted illustration of an HR team around a laptop, linked to attendance, leave approvals, payroll, employee records, performance reviews and data security.",
    author: "Growthys",
    authorPortrait: 0,
    publishedAt: "2026-10-26",
  },
  {
    id: "web-design-that-converts-7-practical-rules",
    title: "Web Design That Converts: 7 Practical Rules",
    category: "Web Design",
    excerpt: "Turn website visits into calls, enquiries and sales with seven practical rules covering clarity, calls to action, mobile design, speed, trust and easy contact options.",
    image: "/images/blogs/web-design-that-converts.webp",
    imageAlt: "Technical blueprint of desktop and mobile website wireframes with seven numbered callouts highlighting clarity, primary action, mobile design, speed, trust, navigation and contact options.",
    author: "Growthys",
    authorPortrait: 0,
    publishedAt: "2026-10-26",
  },
  {
    id: "digital-marketing-for-startups-90-day-plan",
    title: "Digital Marketing for Startups: A Realistic 90-Day Plan",
    category: "Startup Marketing",
    excerpt: "Build your marketing foundation, bring in your first traffic and improve using real data. Follow a practical 90-day plan built for startups with focused channels and realistic budgets.",
    image: "/images/blogs/startup-marketing-90-day-plan.webp",
    imageAlt: "Risograph-style roadmap showing three startup marketing milestones: days 1–30 foundation, days 31–60 first traffic and days 61–90 measure and improve.",
    author: "Growthys",
    authorPortrait: 0,
    publishedAt: "2026-10-26",
  },
];
