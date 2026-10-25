import { blogPosts, type BlogPost } from "./blog-posts";

type Section = {
  heading: string;
  paragraphs: string[];
  items?: { label?: string; text: string }[];
  groups?: { heading: string; items: string[] }[];
  after?: string[];
  questions?: { question: string; answer: string }[];
};
export type BlogArticle = BlogPost & { introduction: string[]; sections: Section[] };

const content: Record<string, Pick<BlogArticle, "introduction" | "sections">> = {
  "digital-marketing-for-startups-90-day-plan": {
    introduction: [
      "Startups often ask where marketing should begin. The answer is straightforward: start small, focus on one or two channels and measure everything.",
      "We’re Growthys, a digital marketing company in Gurugram, and we’ve helped startups build their first marketing systems. This 90-day plan is realistic, practical and based on what actually works for early-stage businesses.",
    ],
    sections: [
      {
        heading: "Days 1–30: Build the Foundation",
        paragraphs: ["Month one is about getting the basics right. Without a solid foundation, campaigns waste money."],
        items: [
          { text: "Set up a clear business website design that explains what you do and who it’s for" },
          { text: "Create and complete a Google Business Profile" },
          { text: "Set up Google Analytics and Search Console" },
          { text: "Define your target audience and one core offer" },
          { text: "Start basic SEO services with keyword research and on-page fixes" },
          { text: "Set up a simple CRM or lead tracking system" },
        ],
        after: ["Don’t try to have everything ready on day one. Focus on what lets you launch campaigns cleanly."],
      },
      {
        heading: "Days 31–60: Drive First Traffic",
        paragraphs: ["With the foundation in place, start bringing visitors in."],
        items: [
          { text: "Launch small performance marketing campaigns on Google or Meta" },
          { text: "Post consistently on one social platform" },
          { text: "Collect early reviews and testimonials" },
          { text: "Build 2–3 landing pages for specific offers" },
          { text: "Track every lead source carefully" },
        ],
        after: ["Keep budgets small. The aim is to learn what works, not to spend big."],
      },
      {
        heading: "Days 61–90: Measure and Improve",
        paragraphs: ["Month three is for learning from data."],
        items: [
          { text: "Review traffic, leads and conversion rates" },
          { text: "Cut campaigns that don’t convert" },
          { text: "Scale what works" },
          { text: "Add content marketing, such as blog posts and guides" },
          { text: "Plan the next quarter using real numbers" },
        ],
        after: ["Many startups go wrong at this stage. They keep funding campaigns that don’t work because they never review the data. Don’t repeat that mistake."],
      },
      {
        heading: "Why Startups Need the Right Partner",
        paragraphs: [
          "Plenty of startups waste money on scattered tactics. A good IT consulting company partner helps you avoid that. Growthys works as both a marketing partner and a technology advisor, so your website, systems and campaigns move together.",
          "We help startups pick the right channels, set realistic budgets and measure honestly.",
        ],
      },
      {
        heading: "Common Startup Marketing Mistakes",
        paragraphs: [],
        items: [
          { text: "Trying to be on every platform at once" },
          { text: "Spending on ads before the website is ready" },
          { text: "Ignoring lead tracking" },
          { text: "Chasing vanity metrics instead of revenue" },
          { text: "Changing strategy every few weeks" },
        ],
        after: ["Avoid these and you’ll be ahead of most early-stage businesses."],
      },
      {
        heading: "Conclusion",
        paragraphs: ["Digital marketing for startups isn’t about doing everything. It’s about doing the right things first. Follow this 90-day plan, measure honestly and adjust as you learn."],
      },
      {
        heading: "FAQs",
        paragraphs: [],
        questions: [
          { question: "How much should a startup spend on marketing?", answer: "Start small, with a modest monthly budget focused on one or two channels." },
          { question: "Should startups focus on SEO or Ads first?", answer: "Usually Ads first for quick feedback, then SEO for long-term growth." },
          { question: "How long before I see results?", answer: "Ads can bring traffic within days. SEO usually takes 3–6 months." },
          { question: "Do I need a website before marketing?", answer: "Yes. A clear, fast website is the foundation of every campaign." },
          { question: "Can Growthys help with limited budgets?", answer: "Yes. We offer flexible plans for startups and early-stage businesses." },
          { question: "What industries does Growthys serve?", answer: "Finance, healthcare, retail, education, manufacturing and startups." },
        ],
      },
    ],
  },
  "web-design-that-converts-7-practical-rules": {
    introduction: [
      "A beautiful website isn’t automatically a successful one. What counts is whether visitors act: filling in forms, calling or buying.",
      "At Growthys, our best design agency-level team follows seven practical rules for business website design. They apply whether you run a service business, an online store or a B2B company, and they’re based on real user behavior rather than looks alone.",
    ],
    sections: [
      {
        heading: "Rule 1: Clarity Beats Creativity",
        paragraphs: [
          "Visitors should grasp what you do within five seconds. A clear headline and a simple layout beat clever design that confuses.",
          "Ask yourself: if a stranger lands on this page, will they know what I offer and who it’s for? If not, the design needs work.",
        ],
      },
      {
        heading: "Rule 2: One Main Action Per Page",
        paragraphs: [
          "Give every page one clear goal, whether that’s booking a call, downloading a guide or buying a product. Several competing buttons lower conversions because visitors aren’t sure what to do next.",
          "Pick one primary action per page and make it stand out. Secondary actions can stay visible but less prominent.",
        ],
      },
      {
        heading: "Rule 3: Mobile-First Design",
        paragraphs: [
          "Most visitors arrive on phones, and a site that isn’t mobile-friendly loses them. Our web design services start with mobile layouts and then expand to desktop.",
          "Mobile-first means:",
        ],
        items: [
          { text: "Large, easy-to-tap buttons" },
          { text: "Readable text without zooming" },
          { text: "Short forms" },
          { text: "Fast loading on mobile networks" },
        ],
      },
      {
        heading: "Rule 4: Fast Loading Speed",
        paragraphs: [
          "Each extra second of load time cuts conversions. Compress images, use clean code and test speed regularly.",
          "One simple rule: if your homepage takes more than three seconds to load on mobile, fix that before adding any new features.",
        ],
      },
      {
        heading: "Rule 5: Trust Signals",
        paragraphs: [
          "Show reviews, client logos, certifications and contact details. Visitors trust businesses that prove they’re real and reliable.",
          "Trust signals include:",
        ],
        items: [
          { text: "Customer testimonials with names and photos" },
          { text: "Client logos" },
          { text: "Certifications or awards" },
          { text: "A clear physical address and phone number" },
        ],
      },
      {
        heading: "Rule 6: Simple Navigation",
        paragraphs: [
          "Keep menus short and put important pages within two clicks. Use clear labels, not clever ones.",
          "Visitors who can’t find what they need quickly will leave. Build your menu around what customers want, not around how your business is organized internally.",
        ],
      },
      {
        heading: "Rule 7: Clear Contact Options",
        paragraphs: [
          "Offer a way to reach you on every page, whether that’s phone, WhatsApp or a short form. Keep it easy and visible.",
          "A sticky contact button, a short form and a clickable phone number all help conversion rates.",
        ],
      },
      {
        heading: "How Growthys Builds Converting Websites",
        paragraphs: [
          "We’re a digital marketing company with a design and development team, so our websites look good and convert well. Our process starts with your business goals, not just aesthetics.",
          "We also link design with SEO and marketing, so your website is attractive, easy to find and built to convert.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: ["Great design isn’t decoration. It’s about guiding visitors toward action. Follow these seven rules and your website will do its job."],
      },
      {
        heading: "FAQs",
        paragraphs: [],
        questions: [
          { question: "How long does a business website take to build?", answer: "Usually 4–8 weeks, depending on pages and features." },
          { question: "Do I need a mobile-friendly website?", answer: "Yes. Most traffic is mobile, and Google ranks mobile-friendly sites higher." },
          { question: "How much does a business website cost?", answer: "It depends on pages, features and design complexity. Growthys offers flexible packages." },
          { question: "Can you redesign my existing website?", answer: "Yes. We audit your current site and recommend improvements." },
          { question: "Do you provide content writing too?", answer: "Yes. We write clear, SEO-friendly content for your site." },
          { question: "Does Growthys provide maintenance?", answer: "Yes. We offer ongoing support and updates." },
        ],
      },
    ],
  },
  "hrms-software-what-it-is-and-why-your-business-needs-it": {
    introduction: [
      "Managing people is among the hardest parts of running a business. Attendance, leaves, payroll and performance reviews can swallow hours every month, and mistakes cost both money and trust.",
      "HRMS software development puts all HR tasks into a single system. We’re Growthys, an IT solutions company in Gurugram, and we build HRMS platforms for businesses ranging from 20-person teams to 500+ employees.",
    ],
    sections: [
      {
        heading: "What Is an HRMS?",
        paragraphs: ["HRMS stands for Human Resource Management System. It’s software that handles:"],
        items: [
          { text: "Attendance and leave tracking" },
          { text: "Payroll processing" },
          { text: "Employee records and documents" },
          { text: "Recruitment and onboarding" },
          { text: "Performance reviews" },
          { text: "Reports for management" },
        ],
        after: ["Spreadsheets and WhatsApp approvals give way to one place with a clear audit trail."],
      },
      {
        heading: "Why Custom HRMS Beats Generic Tools",
        paragraphs: [
          "Generic HRMS tools handle standard processes well. But every business has its own rules: different leave policies, payroll structures, approval chains and compliance needs.",
          "Custom HRMS software development is built around your exact policies. Errors drop, processing speeds up and compliance with local labor rules improves.",
          "A custom system also grows with you. Add locations or employees and it keeps up, with no need to switch platforms.",
        ],
      },
      {
        heading: "Automation Saves Time",
        paragraphs: ["Business automation tools inside an HRMS can take over repetitive tasks:"],
        items: [
          { text: "Auto-calculating payroll from attendance data" },
          { text: "Sending leave approval requests to the right manager" },
          { text: "Generating monthly reports automatically" },
          { text: "Alerting HR about missing documents or expiring contracts" },
        ],
        after: ["Work that took days now takes minutes, with fewer errors."],
      },
      {
        heading: "How Growthys Builds HRMS Platforms",
        paragraphs: [
          "Our custom software development team starts with a workflow audit and then designs a system around your HR process. We connect payroll, biometric attendance and accounting tools so data flows without manual entry.",
          "We’re an IT solutions company, so we also provide training and ongoing support. Your HR team gets full value from the system.",
          "During design and testing, we work closely with your HR team, which keeps the final system true to how people actually work.",
        ],
      },
      {
        heading: "Security and Compliance",
        paragraphs: ["HR data is sensitive. A good HRMS protects it with:"],
        items: [
          { text: "Encryption for employee data" },
          { text: "Role-based access control" },
          { text: "Audit logs of every change" },
          { text: "Secure backup and recovery" },
        ],
        after: ["Compliance with local labor laws is built into the payroll and leave modules."],
      },
      {
        heading: "Conclusion",
        paragraphs: ["An HRMS isn’t only for large companies. Even a 30-person business saves hours each month with the right system. If your HR tasks are still manual, it’s time to automate."],
      },
      {
        heading: "FAQs",
        paragraphs: [],
        questions: [
          { question: "What is the difference between HRMS and HR software?", answer: "They’re often the same thing. HRMS is the broader term that covers all HR functions." },
          { question: "How long does HRMS development take?", answer: "Usually 8–16 weeks, depending on modules and integrations." },
          { question: "Can HRMS handle payroll for multiple locations?", answer: "Yes. Custom systems can handle multi-state and multi-country payroll rules." },
          { question: "Does it integrate with biometric attendance?", answer: "Yes. We integrate with common biometric devices." },
          { question: "Is HRMS secure?", answer: "Yes. We use encryption and role-based access to protect employee data." },
          { question: "Does Growthys provide HRMS support after launch?", answer: "Yes. Ongoing support and updates are included." },
        ],
      },
    ],
  },
  "why-your-business-needs-custom-crm-software": {
    introduction: [
      "Tracking leads across spreadsheets, WhatsApp chats and email threads costs your sales team money every single day. Leads get forgotten, follow-ups slip and managers can’t see what’s going on.",
      "Custom CRM & management software fixes this by keeping every lead, call and deal in one place, built around how your team really works. We’re Growthys, a software development company in Gurugram, and we build CRMs for businesses of every size.",
    ],
    sections: [
      {
        heading: "What a CRM Does",
        paragraphs: [
          "A CRM (Customer Relationship Management) system keeps all customer data and interactions in one place. A custom CRM goes a step further. It’s built around your exact sales process rather than a generic template.",
          "Typical features include:",
        ],
        items: [
          { text: "Lead tracking with clear status stages" },
          { text: "Call and email logs" },
          { text: "Follow-up reminders and alerts" },
          { text: "Reports and dashboards for managers" },
          { text: "Role-based access for team members" },
          { text: "Integration with WhatsApp, email and accounting tools" },
        ],
      },
      {
        heading: "Why Not Buy an Off-the-Shelf CRM?",
        paragraphs: [
          "Off-the-shelf tools cost less upfront, but they make your team change how they work. Adoption usually suffers, and people drift back to spreadsheets because the system doesn’t fit their process.",
          "Custom CRM & management software adapts to your workflow instead. You get higher adoption, cleaner data and better visibility for managers.",
          "Custom systems also connect to the tools you already use. Rather than juggling five apps, your team works in one connected system.",
        ],
      },
      {
        heading: "The Role of Business Automation Tools",
        paragraphs: ["Pair a CRM with business automation tools and it becomes far more powerful. Simple automations can save hours each week:"],
        items: [
          { text: "Auto-assigning leads to the right salesperson" },
          { text: "Sending follow-up emails after a call" },
          { text: "Alerting managers when a deal is stuck" },
          { text: "Generating daily sales reports automatically" },
        ],
        after: ["Automation doesn’t replace people. It clears the repetitive work so your team can concentrate on selling."],
      },
      {
        heading: "How Growthys Builds CRMs",
        paragraphs: [
          "Growthys handles the whole process: requirement gathering, design, development, testing and ongoing support. Our custom software development team builds systems that are fast, secure and easy to use.",
          "We’re a reliable IT solutions company in India, so we also connect CRMs with HRMS, accounting and marketing tools. Your systems talk to each other and data moves without manual entry.",
          "We work in phases, so you can launch with core features and add more as the business grows.",
        ],
      },
      {
        heading: "What to Expect During the Project",
        paragraphs: ["A typical CRM project includes:"],
        items: [
          { text: "Discovery and requirement workshops" },
          { text: "Wireframes and UI design" },
          { text: "Development in stages" },
          { text: "Testing with real users" },
          { text: "Training for your team" },
          { text: "Launch and post-launch support" },
        ],
        after: ["Most projects take 6–12 weeks, depending on features and integrations."],
      },
      {
        heading: "Conclusion",
        paragraphs: ["A custom CRM isn’t a luxury. It’s a practical tool that saves time, cuts errors and helps your team close more deals. If spreadsheets are slowing you down, it’s time to upgrade."],
      },
      {
        heading: "FAQs",
        paragraphs: [],
        questions: [
          { question: "How long does a custom CRM take to build?", answer: "Usually 6–12 weeks, depending on features and integrations." },
          { question: "Is a custom CRM more expensive than off-the-shelf?", answer: "Upfront, yes. Long-term costs are often lower because it fits your process." },
          { question: "Can a custom CRM integrate with WhatsApp?", answer: "Yes. We connect CRMs with WhatsApp, email and other tools." },
          { question: "Will my team need training?", answer: "Yes, though a CRM built around your workflow needs less of it." },
          { question: "Can I start small and add features later?", answer: "Yes. We build in phases so you can start quickly and grow." },
          { question: "Does Growthys provide support after launch?", answer: "Yes. Ongoing support and maintenance come with every project." },
        ],
      },
    ],
  },
  "google-ads-vs-seo": {
    introduction: [
      "Sooner or later, every business owner wonders whether to pay for Google Ads or invest in SEO. Both work. They just work for different reasons and on different timelines.",
      "At Growthys, a digital marketing company in Gurugram, we run both for clients across industries. We’ve watched businesses burn money on the wrong channel and succeed with the right mix. This article lays out the difference clearly so you can choose with confidence.",
    ],
    sections: [
      {
        heading: "What Google Ads Actually Do",
        paragraphs: ["Google Ads put your business at the top of search results almost immediately. You pay per click, and a campaign can go live within a day of setup."],
        groups: [
          { heading: "The upside:", items: ["Fast results", "Highly targeted traffic", "Full control over budget", "Easy to measure return per rupee"] },
          { heading: "The downside:", items: ["Traffic stops the moment you stop paying", "Competition can push click prices up", "Poorly managed campaigns waste money quickly"] },
        ],
        after: ["Google Ads services work best when you need leads now: a new clinic, a seasonal sale, a product launch or a service area you want to test."],
      },
      {
        heading: "What SEO Actually Does",
        paragraphs: ["SEO services build traffic over time. There’s no cost per click, and a page that ranks well can bring visitors for years with little ongoing spend."],
        groups: [
          { heading: "The upside:", items: ["Long-term compounding returns", "Lower cost per lead over time", "Stronger brand credibility", "Traffic that continues even when ads pause"] },
          { heading: "The downside:", items: ["Slower results, usually 3–6 months", "Needs consistent content and technical care", "Rankings can fluctuate with Google updates"] },
        ],
      },
      {
        heading: "Which One Should You Choose?",
        paragraphs: ["Three practical questions can settle it."],
        questions: [
          { question: "How fast do you need results?", answer: "Need leads this month? Start with Ads. If you can wait a quarter, SEO may be the better first investment." },
          { question: "What is your budget?", answer: "Ads need ongoing spend. SEO needs upfront investment in content and technical work. Pick whichever you can keep up." },
          { question: "How competitive is your industry?", answer: "Highly competitive industries often need both. Less competitive niches can win with SEO alone." },
        ],
        after: ["Most successful businesses use both. Ads bring traffic now while SEO quietly builds a long-term asset."],
      },
      {
        heading: "How the Two Work Together",
        paragraphs: ["A strong performance marketing setup often runs like this:"],
        items: [
          { text: "Ads capture high-intent traffic right away" },
          { text: "SEO builds organic visibility over time" },
          { text: "Ads data shows which keywords actually convert" },
          { text: "SEO then targets those proven keywords for long-term gain" },
        ],
        after: ["Together, each channel makes the other stronger."],
      },
      {
        heading: "How Growthys Approaches This",
        paragraphs: [
          "Growthys doesn’t push one service over the other. We first learn your goals, timeline and budget, then recommend the mix that makes sense. Many clients start with Ads for quick wins and add SEO once revenue is stable.",
          "We’re also an IT solutions company in India, so we make sure your website is technically ready for both: fast, mobile-friendly and built to convert.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: ["Google Ads and SEO aren’t rivals. They’re tools for different jobs. The right mix depends on your goals, timeline and budget, and a good digital marketing company will tell you so honestly."],
      },
      {
        heading: "FAQs",
        paragraphs: [],
        questions: [
          { question: "Can I run Google Ads without SEO?", answer: "Yes, but you may pay more per lead over time. SEO lowers long-term acquisition costs." },
          { question: "Can I do SEO without Google Ads?", answer: "Yes. Many businesses grow on SEO alone, though it takes patience." },
          { question: "Which gives better ROI?", answer: "SEO usually has the higher long-term ROI. Ads give faster returns." },
          { question: "How much should I spend on Ads?", answer: "Start small, measure results and then scale. Growthys helps set budgets based on your goals." },
          { question: "Do I need a landing page for Ads?", answer: "Yes. A dedicated page improves conversion rates and lowers cost per lead." },
          { question: "Does Growthys manage both?", answer: "Yes. We run Google Ads and SEO as one connected strategy." },
        ],
      },
    ],
  },
  "seo-for-small-businesses": {
    introduction: [
      "When customers search for your services on Google and you don’t show up, a big chunk of your market never sees you. SEO, short for search engine optimization, fixes that. It isn’t magic, and it isn’t only for big brands with deep pockets. Small businesses can win at SEO too, often faster than larger rivals, because they can zero in on a specific local audience.",
      "We’re Growthys, a digital marketing company based in Gurugram, Haryana. We’ve helped dozens of small businesses move up the search results and turn that visibility into real leads. This guide covers what SEO is, how it works and how to begin without wasting money.",
    ],
    sections: [
      {
        heading: "What SEO Actually Means",
        paragraphs: ["SEO is the work of getting your website to rank higher for the terms your customers type into search. It has three main parts:"],
        items: [
          { label: "On-page SEO", text: "the content, titles, headings and internal links on your pages" },
          { label: "Technical SEO", text: "site speed, mobile-friendliness, clean code and proper indexing" },
          { label: "Off-page SEO", text: "links and brand mentions from other trustworthy websites" },
        ],
        after: ["A solid SEO strategy ties all three together. Fix content but ignore technical problems and your rankings stall. Build links on slow pages and Google holds you back."],
      },
      {
        heading: "Why SEO Matters More Than Ever",
        paragraphs: [
          "Millions of people search Google for products and services every day, and most of them click one of the top results. Land on page two or three and you’re practically invisible.",
          "SEO brings free traffic that keeps coming. Ads stop delivering the moment you stop paying, but a page that ranks well can bring visitors for years. That makes SEO one of the best-return investments a small business can make.",
        ],
      },
      {
        heading: "Start With Local SEO",
        paragraphs: [
          "Serving customers in a particular city or area? Make local SEO your first focus. Local searches often carry the strongest buying intent. Someone typing “best web design near me” is ready to hire.",
          "The basics of local SEO:",
        ],
        items: [
          { text: "Create a Google Business Profile and fill it in completely" },
          { text: "List your correct address, phone number and hours" },
          { text: "Collect reviews from real customers" },
          { text: "Use location-based keywords naturally on your site" },
          { text: "Get listed in relevant local directories" },
        ],
        after: ["Good business website design helps local SEO directly. Fast loading, clean navigation and mobile-friendly pages let Google crawl and understand your site more quickly."],
      },
      {
        heading: "Technical SEO for Small Businesses",
        paragraphs: ["You don’t need a developer for every technical fix, but a few basics matter a great deal:"],
        items: [
          { label: "Page speed", text: "compress images and remove unnecessary scripts" },
          { label: "Mobile-friendliness", text: "most searches happen on phones" },
          { label: "Clean URLs", text: "short, readable page addresses" },
          { label: "SSL certificate", text: "the padlock icon in the browser" },
          { label: "Sitemap and robots.txt", text: "they help Google find your pages" },
        ],
        after: ["These fixes alone can lift rankings within weeks."],
      },
      {
        heading: "Content That Ranks",
        paragraphs: ["Content tells Google what your site is about. Good SEO content:"],
        items: [
          { text: "Answers real questions your customers ask" },
          { text: "Uses keywords naturally instead of stuffing them in" },
          { text: "Has clear headings and short paragraphs" },
          { text: "Links to related pages on your site" },
          { text: "Gets updated when information changes" },
        ],
        after: ["A blog is one of the best ways to keep adding fresh, keyword-rich content over time."],
      },
      {
        heading: "How Growthys Helps Small Businesses",
        paragraphs: [
          "Growthys offers complete SEO services for small and mid-sized businesses. We begin with a full site audit and then build a plan around your market, competitors and goals. As a reliable IT solutions company in India, we also fix the technical problems that block rankings: slow pages, broken links, messy code and poor structure.",
          "Marketing and technology sit under one roof in our team, so your SEO plan doesn’t stop at advice. It gets fully implemented.",
        ],
      },
      {
        heading: "Common SEO Mistakes to Avoid",
        paragraphs: [],
        items: [
          { text: "Targeting keywords that are too broad or too competitive" },
          { text: "Ignoring local SEO while chasing national keywords" },
          { text: "Stuffing keywords into content instead of writing naturally" },
          { text: "Buying cheap backlinks that damage trust" },
          { text: "Skipping analytics and guessing at results" },
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: ["SEO isn’t a quick fix. It’s steady, structured work that compounds over time. Start with local SEO, get your website basics right and add useful content regularly. If you’d like a team to handle it end to end, Growthys is here to help."],
      },
      {
        heading: "FAQs",
        paragraphs: [],
        questions: [
          { question: "How long does SEO take to show results?", answer: "Meaningful ranking movement usually takes 3–6 months. Competitive keywords can take longer." },
          { question: "Is SEO expensive for small businesses?", answer: "Not necessarily. Small business packages are affordable and scale with your needs." },
          { question: "Can I do SEO myself?", answer: "For basic local SEO, yes. Advanced technical SEO usually calls for expert help." },
          { question: "Does social media help SEO?", answer: "Indirectly. Social signals and traffic can support rankings, but they aren’t a direct ranking factor." },
          { question: "Do I need a blog for SEO?", answer: "It helps a lot. Fresh content aimed at the right keywords brings steady traffic." },
          { question: "How does Growthys measure SEO results?", answer: "We track rankings, traffic, leads and conversions, the same numbers you see." },
        ],
      },
    ],
  },
};

export const blogArticles: BlogArticle[] = blogPosts.map(post => ({ ...post, ...content[post.id] }));
export function getBlogArticle(slug: string) { return blogArticles.find(post => post.id === slug); }
export function getReadingTime(post: BlogArticle) {
  const words = [post.title, ...post.introduction, ...post.sections.flatMap(section => [
    section.heading, ...section.paragraphs,
    ...(section.items ?? []).map(item => `${item.label ?? ""} ${item.text}`),
    ...(section.groups ?? []).flatMap(group => [group.heading, ...group.items]),
    ...(section.after ?? []),
    ...(section.questions ?? []).map(item => `${item.question} ${item.answer}`),
  ])].join(" ").split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}
