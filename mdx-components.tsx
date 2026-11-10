import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";
import { display } from "./app/fonts";
import { Facts, Figure, Gallery, People, YouTube } from "./app/blogs/components";

// Required by @next/mdx in the App Router. Maps markdown elements to
// site-styled components, and exposes post components to every MDX file.

const accent = "text-[#3f5cf2] dark:text-[#8b9bff]";

function Anchor({ href = "", ...props }: ComponentPropsWithoutRef<"a">) {
  const external = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${accent} underline decoration-current/30 underline-offset-4 transition-colors hover:decoration-current`}
      {...props}
    />
  );
}

const components: MDXComponents = {
  h2: (props) => (
    <h2
      className={`${display.className} mt-16 text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50`}
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className={`${display.className} mt-10 text-xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50`}
      {...props}
    />
  ),
  p: (props) => <p className="mt-6" {...props} />,
  a: Anchor,
  strong: (props) => (
    <strong className="font-semibold text-zinc-900 dark:text-zinc-50" {...props} />
  ),
  ul: (props) => <ul className="mt-6 list-disc space-y-2 pl-6" {...props} />,
  ol: (props) => <ol className="mt-6 list-decimal space-y-2 pl-6" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-6 border-l-2 border-[#3f5cf2] pl-5 italic dark:border-[#8b9bff]"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded-md bg-zinc-100 px-1.5 py-0.5 font-mono text-[0.85em] text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
      {...props}
    />
  ),
  hr: () => (
    <hr className="mt-16 border-zinc-200 dark:border-zinc-800" />
  ),
  Figure,
  Gallery,
  YouTube,
  Facts,
  People,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
