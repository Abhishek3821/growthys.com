export const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/growthysofficial" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/growthys" },
  { name: "Facebook", href: "https://www.facebook.com/growthys/" },
] as const;

export type SocialPlatform = (typeof socialLinks)[number]["name"];
