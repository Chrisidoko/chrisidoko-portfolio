export type Experience = {
  slug: string;
  company: string;
  role: string;
  period: string;
  /** Short blurb shown on the home page card */
  summary: string;
  /** Paragraphs shown on the dedicated page */
  details: string[];
  /** Bullet points shown on the dedicated page */
  bullets: string[];
  /** Bullet points shown on the dedicated page */
  highlights: string[];
  /** SVG in /public/experience/ */
  logo: string;
  /** Set true for single-colour black logos so they flip to white in dark mode */
  invertOnDark?: boolean;
};

// Placeholder content: replace with your real experience.
export const experiences: Experience[] = [
  {
    slug: "paypro",
    company: "Paypro Solutions Ltd.",
    role: "Full Stack Developer",
    period: "2024 – Present",
    summary:
      "As Software Developer at Paypro Solutions, I architect and built enterprise GovTech platforms and financial infrastructure that modernize revenue collection",
    details: [
      "My role focuses on architecting multi-gateway payment infrastructure (integrating Remita, Interswitch, and etransact(Credo), developing multi-state transaction analytics dashboards, and managing high-availability production Linux environments. I also oversee product launches and API integration standards across our ecosystem.",
      "My primary areas of focus include: ",
    ],

    bullets: [
      "GovTech Architecture: Designed and built an end-to-end higher education regulatory and tax platform deployed across Kaduna and Gombe state governments.",
      "Payment Infrastructure: Built high-availability payment checkouts integrating Remita, Interswitch, and Credo (eTransact) with split-settlement and multi-trigger reconciliation.",
      "Financial Analytics: Created executive transaction ledgers and real-time reporting dashboards aggregating analytics across state networks.",
      "DevOps & Reliability: Maintain production Linux server environments (Nginx, PM2 clustering, Cloudflare) ensuring operational uptime and API integration standards.",
    ],
    highlights: [
      "GovTech platform deployed statewide across 3 states",
      "Integrated 4 major payment gateways into unified microservices",
      "Shipped readies.ng and manamprofessionals.com",
    ],
    logo: "/company/paypro.svg",
    invertOnDark: true,
  },
  {
    slug: "fedora",
    company: "Fedora",
    role: "Contributor",
    period: "2023 – Present",
    summary:
      "From an Outreachy design internship with The Fedora Project to community member and contributor to open-source.",
    details: [
      "In May 2023, I was selected from over 3,600 applicants as an Outreachy intern for the Fedora Badges Design project. This opportunity marked the beginning of my journey into the cross-cultural space of open source, where I learned to collaborate with a global community. Since completing the internship, I have continued to deepen my involvement within the Fedora Project across several key areas:",
    ],
    bullets: [
      "Code of Conduct Committee: Help maintain a safe, welcoming, and inclusive environment for the global community.",
      "Fedora Badges: Co-lead the revamp and design of digital badges to boost contributor rewards and community engagement.",
      "Diversity, Equity, and Inclusion (DEI) Team: Actively contribute to global initiatives and events that promote diversity.",
      "Fedora West Africa Chapter: Serve as an ambassador to scale the Fedora Project's reach and support contributors across West Africa.",
    ],
    highlights: [
      "Revamped and improved 300+ Fedora badge illustrations",
      "Product Management & Communication ",
    ],
    logo: "/company/logo_color.svg",
  },
  {
    slug: "national-center-for-artificial-intelligence-and-robotics",
    company: "NITDA — National Center for Artificial Intelligence and Robotics",
    role: "Graduate Engineering Intern",
    period: "2024 – 2025",
    summary:
      "As a Graduate Engineering Intern, I built capacities in research, python development, data science and Embedded systems - applying these experiences to real-world projects.",
    details: [
      "The National Centre for Artificial Intelligence and Robotics (NCAIR) is one of NITDA’s special purpose vehicles created to promote research and development on emerging technologies and their practical application in areas of Nigerian national interest.",
    ],
    bullets: [
      "Collaborated with a team of interns to design and build a Solar Tracker System, gaining hands-on experience with microcontrollers and embedded systems.",
      "Built a movie-recommendation system from a public dataset.",
      "Developed a smart assistive eyewear prototype for visually impaired users.",
    ],
    highlights: [
      "2 projects deployed in the NITDA Innovation Lab",
      "Gained Certifications in Mutltple Emerging Technologies (AI, IoT, Embedded Systems)",
    ],
    logo: "/company/nitda.png",
    invertOnDark: true,
  },
];

export function getExperience(slug: string) {
  return experiences.find((e) => e.slug === slug);
}
