export type TeamMember = {
  id: string;
  name: string;
  role: string;
  department: string;
  photo: string | null;
  joined?: string;
};

// Names, designations, and photos follow the serial order supplied by the company.
export const teamMembers: TeamMember[] = [
  { id: "member-06", name: "Vijya Pathak", role: "Content & Marketing Manager", department: "CONTENT & MARKETING", photo: "/images/team/member-06-cutout.png" },
  { id: "member-01", name: "Nikita Sharma", role: "SEO Expert", department: "SEO", photo: "/images/team/member-01-cutout.png" },
  { id: "member-02", name: "Priya Baisoya", role: "GBM Expert", department: "GBM", photo: "/images/team/member-02-cutout.png" },
  { id: "member-03", name: "Vishakha Lamba", role: "SEO Specialist", department: "SEO", photo: "/images/team/member-03-cutout.png" },
  { id: "member-04", name: "Kundan Sharma", role: "Digital Marketing Manager", department: "DIGITAL MARKETING", photo: "/images/team/member-04-cutout.png" },
  { id: "member-05", name: "Ajeet Saini", role: "Performance Marketer", department: "PERFORMANCE MARKETING", photo: "/images/team/member-05-cutout.png" },
  { id: "member-07", name: "Muskan Lamba", role: "Team Leader", department: "TEAM LEADERSHIP", photo: "/images/team/member-07-cutout.png" },
];
