import type { MDXContent } from "mdx/types";

/**
 * Maps a post slug to its MDX body in /content/blog/<slug>/index.mdx.
 * Kept separate from data.ts so client components that list posts
 * never pull MDX into their bundle.
 */
export const postContent: Record<string, () => Promise<{ default: MDXContent }>> = {
  "gombe-revenue-platform": () =>
    import("@/content/blog/gombe-revenue-platform/index.mdx"),
  "ncair-assistive-eyewear": () =>
    import("@/content/blog/ncair-assistive-eyewear/index.mdx"),
  "fedora-week-of-diversity-2024": () =>
    import("@/content/blog/fedora-week-of-diversity-2024/index.mdx"),
  "outreachy-fedora-badges": () =>
    import("@/content/blog/outreachy-fedora-badges/index.mdx"),
};
