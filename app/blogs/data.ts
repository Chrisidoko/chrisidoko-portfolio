export type Post = {
  slug: string;
  title: string;
  /** One or two sentences shown on cards and in link previews */
  summary: string;
  /** ISO date (YYYY-MM-DD), used for sorting and display */
  date: string;
  tags?: string[];
  /** Experience slugs (see app/experience/data.ts) this post belongs under */
  experiences?: string[];
  /**
   * Set for posts still hosted elsewhere (Notion, Medium…). The card links
   * out instead of to /blogs/[slug], and no MDX file is needed.
   */
  externalUrl?: string;
  /** Where an external post is published, shown on its card (e.g. "Fedora Community Blog") */
  source?: string;
};

const allPosts: Post[] = [
  {
    slug: "gombe-revenue-platform",
    title: "Building Gombe State's Revenue Platform for Private Higher Institutions",
    summary:
      "How I designed and built three services on one ledger to register, bill and collect taxes from private tertiary institutions, with payments that can't get lost or be charged twice.",
    date: "2026-11-10",
    tags: ["GovTech", "Payments", "System design"],
    experiences: ["paypro"],
  },
  {
    slug: "ncair-assistive-eyewear",
    title: "NCAIR: Building Assistive Eyewear for the Visually Impaired",
    summary:
      "My graduate engineering internship at NITDA's AI & Robotics centre: from programming an Arduino to packaging a wearable that speaks to its user in my own voice.",
    date: "2026-11-10",
    tags: ["Embedded systems", "Arduino", "Hardware prototyping"],
    experiences: ["national-center-for-artificial-intelligence-and-robotics"],
  },
  {
    slug: "oscafest-chaoss-lagos-2025",
    title: "OSCAFest'25 & CHAOSScon Africa'25, Lagos",
    summary:
      "Representing Fedora as an ambassador at Africa's biggest open-source festival: onboarding new contributors, and what the questions they asked reveal about growing Fedora's community in Africa.",
    date: "2025-10-16",
    tags: ["Open source", "Community", "Events"],
    experiences: ["fedora"],
    externalUrl:
      "https://communityblog.fedoraproject.org/oscafest25-chaoss25-lagos-nigeria/",
    source: "Fedora Community Blog",
  },
  {
    slug: "fedora-week-of-diversity-2024",
    title: "Fedora Week of Diversity 2024: F40 Release Party",
    summary:
      "Presenting the Fedora DEI Team's work to the global community at the F40 Release Party, and helping organise, promote and design for Fedora Week of Diversity 2024.",
    date: "2024-05-31",
    tags: ["Open source", "Speaking", "Community"],
    experiences: ["fedora"],
  },
  {
    slug: "outreachy-fedora-badges",
    title: "Outreachy: Fedora Badges",
    summary:
      "How I was selected from 3,600+ applicants for Outreachy and spent a summer revamping 300+ Fedora badge illustrations with a global open-source community.",
    date: "2025-04-10",
    tags: ["Design", "Illustration", "Open source"],
    experiences: ["fedora"],
  },
];

/** Newest first */
export const posts = [...allPosts].sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getPostsForExperience(experienceSlug: string) {
  return posts.filter((p) => p.experiences?.includes(experienceSlug));
}

export function postHref(post: Post) {
  return post.externalUrl ?? `/blogs/${post.slug}`;
}

export function isExternal(post: Post) {
  return Boolean(post.externalUrl);
}

export function formatPostDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
