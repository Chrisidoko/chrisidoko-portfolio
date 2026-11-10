import Link from "next/link";
import { mono } from "../fonts";
import { formatPostDate, isExternal, postHref, type Post } from "./data";

/** Divided list of post links, used on /blogs and on experience pages */
export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <ul className="mt-6 divide-y divide-zinc-200 border-t border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
      {posts.map((post) => {
        const external = isExternal(post);
        return (
          <li key={post.slug}>
            <Link
              href={postHref(post)}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group block py-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3f5cf2]"
            >
              <p className={`${mono.className} text-sm text-zinc-500`}>
                <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                {external && ` · ${post.source ?? "external"}`}
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight">
                <span className="border-b border-transparent transition-colors group-hover:border-current">
                  {post.title}
                </span>
                <span
                  aria-hidden="true"
                  className="ml-2 inline-block transition-transform group-hover:translate-x-1"
                >
                  {external ? "↗" : "→"}
                </span>
                {external && (
                  <span className="sr-only"> (opens in a new tab)</span>
                )}
              </h3>
              <p className="mt-2 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                {post.summary}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
