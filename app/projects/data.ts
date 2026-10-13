export type Project = {
  name: string;
  description: string;
  /** Small mono line under the description */
  meta: string;
  /** External link, opens in a new tab */
  href: string;
  /** Logo in /public/projects/ (svg or png) */
  logo: string;
};

// Replace each href with the real project URL.
export const projects: Project[] = [
  {
    name: "Neroo: Paid Group Manager",
    description:
      "A playful interactive experience for community monetisation on Telegram and Whatsapp. Neroo is powered by paystack for payments and it available on web, andriod and ios.",
    meta: "Fintech · Modern Design",
    href: "https://neroobot.com/",
    logo: "/projects/neroo.png",
  },
  {
    name: "Readies",
    description:
      "An all in one bussiness platform. Accept payments, send money, and manage your finances — all from a single, powerful platform built for modern African businesses.",
    meta: "Payment Gateway · Fintech · Mobile Banking",
    href: "https://readies.ng/",
    logo: "/projects/readies.png",
  },
  {
    name: "Kaduna State GovTech Platform",
    description:
      "A digital platform for the Kaduna State Government to provide realiable and transperent revenue management in tax assessment, payments and adminstration in tetiary education across the state.",
    meta: "GovTech · Payment Processing · Aggregation Analytics",
    href: "https://kadtertiary.payprosolutionsltd.com/",
    logo: "/projects/statelogo.png",
  },
  {
    name: "Gombe Electronic School Management System",
    description:
      "A platform for every sector of education in Gombe State. Brings Higher Education, basic-education administration, and quality assurance together into a single digital transperent platform.",
    meta: "GovTech · Payment Processing · Aggregation Analytics",
    href: "https://gesms.payprosolutionsltd.com/",
    logo: "/projects/gombe.png",
  },
  {
    name: "Manam Professional Services",
    description:
      "A consulting firm providing professional services to businesses and individuals. Guiding businesses through tax complexities, growth decisions, and effective team building",
    meta: "Consulting · Professional Services",
    href: "https://manamprofessionals.com/",
    logo: "/projects/manam.png",
  },
];
