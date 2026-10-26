export const projects = [
  {
    slug: "foodly", name: "Foodly", category: "Food & Delivery", color: "#dcebcf",
    description: "A food delivery app with real-time tracking and secure payments.",
    overview: "A mobile app concept that brings restaurant discovery, ordering, and delivery updates into one simple experience.",
    challenge: "Ordering food can become frustrating when menus are hard to browse, checkout feels complicated, or delivery updates are unclear. The concept focuses on making each step feel connected and easy to follow.",
    approach: "Put discovery first, keep menu choices clear, and bring the cart, checkout, and order status into a predictable flow. A fresh green palette and generous food imagery give the experience an approachable character.",
    features: [
      { title: "Discover your next favourite", description: "Browse restaurants, explore food categories, and compare menu options in a visual discovery experience." },
      { title: "A simpler path to checkout", description: "Review an order, adjust items, and follow a clear checkout journey with delivery and payment information together." },
      { title: "Follow every order", description: "The concept includes order status and delivery updates to help people understand what happens after checkout." },
    ],
    journey: ["Explore restaurants", "Choose a meal", "Review & order", "Follow delivery"],
  },
  {
    slug: "shopio", name: "Shopio", category: "E-Commerce", color: "#ffdce5",
    description: "A cross-platform shopping app with a smooth checkout flow.",
    overview: "A shopping app concept focused on helping customers discover products, save favourites, and move easily from browsing to checkout.",
    challenge: "A shopping experience needs to balance inspiration with practical decisions. Customers should be able to explore a collection while still finding prices, product options, and cart information quickly.",
    approach: "Combine editorial product imagery with a clear catalogue structure. Pink accents highlight actions, while simple product cards keep the focus on the items and the next step in the shopping journey.",
    features: [
      { title: "Browse with intention", description: "Discover collections and categories through a visual storefront that gives products room to stand out." },
      { title: "Find the right fit", description: "Explore product imagery, compare options, and review the information needed before adding an item to the cart." },
      { title: "Keep checkout moving", description: "A streamlined cart concept brings selected items and the next checkout step into a clear, focused view." },
    ],
    journey: ["Explore collections", "View a product", "Choose options", "Cart & checkout"],
  },
  {
    slug: "walletwise", name: "WalletWise", category: "Finance", color: "#fff0bc",
    description: "A personal finance tracker with insights and budget planning.",
    overview: "A personal finance concept that makes everyday spending easier to understand through clear summaries and approachable budget tools.",
    challenge: "Financial information can feel overwhelming when balances, expenses, and goals are spread across disconnected views. The concept aims to turn that information into a useful daily overview.",
    approach: "Build the interface around a clear balance summary, visual spending categories, and readable charts. Warm yellow accents make the experience feel welcoming without competing with the numbers.",
    features: [
      { title: "See the bigger picture", description: "A dashboard concept brings balances and spending summaries together for a quick overview." },
      { title: "Understand everyday spending", description: "Category breakdowns and simple charts help people explore how their expenses are distributed." },
      { title: "Plan the next step", description: "Budget and savings concepts connect everyday activity with longer-term financial goals." },
    ],
    journey: ["View the overview", "Explore expenses", "Review insights", "Plan a budget"],
  },
  {
    slug: "fittrack", name: "FitTrack", category: "Health & Fitness", color: "#e8defa",
    description: "A workout tracker and health companion for everyday goals.",
    overview: "A fitness app concept designed to make daily activity, workout planning, and progress tracking feel simple and motivating.",
    challenge: "Staying consistent is easier when daily goals and workout options feel approachable. The concept focuses on bringing activity, exercise discovery, and progress into one encouraging experience.",
    approach: "Lead with visible daily progress, keep workout information easy to scan, and use purple accents to create a consistent visual rhythm across the app.",
    features: [
      { title: "Make daily progress visible", description: "Activity summaries and goal indicators give people a quick picture of their day." },
      { title: "Find a workout that fits", description: "Workout cards introduce exercise options with clear imagery and useful session details." },
      { title: "Build a consistent routine", description: "Workout logs and progress summaries form a concept for tracking habits over time." },
    ],
    journey: ["Check daily goals", "Choose a workout", "Record activity", "Review progress"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
