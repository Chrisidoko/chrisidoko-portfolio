import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Suspense } from "react";
import { display, mono } from "../../fonts";
import { formatPostDate, getPost, posts } from "../data";
import { postContent } from "../content";
import { getExperience } from "../../experience/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.filter((p) => postContent[p.slug]).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} · Chris Idoko`,
    description: post.summary,
  };
}

// Shared shell renders instantly; only the slug-specific post reads
// `params`, inside <Suspense>.
export default function PostPage({ params }: Props) {
  return (
    <div className="flex flex-1 flex-col bg-white font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="mx-auto w-full max-w-3xl px-6 pb-24 pt-10 sm:px-10">
        <Link
          href="/blogs"
          className="inline-flex rounded-full bg-zinc-100 px-5 py-2 text-sm font-semibold text-zinc-600 transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3f5cf2] dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-white"
        >
          ← All posts
        </Link>

        <Suspense fallback={<PostSkeleton />}>
          <Post params={params} />
        </Suspense>
      </main>
    </div>
  );
}

function PostSkeleton() {
  return (
    <div aria-hidden="true" className="mt-14 animate-pulse space-y-4">
      <div className="h-4 w-40 rounded bg-zinc-100 dark:bg-zinc-900" />
      <div className="h-12 w-3/4 rounded-lg bg-zinc-100 dark:bg-zinc-900" />
      <div className="h-8 w-full rounded bg-zinc-100 dark:bg-zinc-900" />
      <div className="h-8 w-2/3 rounded bg-zinc-100 dark:bg-zinc-900" />
    </div>
  );
}

async function Post({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  const load = postContent[slug];
  if (!post || !load) notFound();

  const { default: Content } = await load();
  const related = (post.experiences ?? [])
    .map(getExperience)
    .filter((e) => e !== undefined);

  return (
    <>
        <header className="mt-14">
          <p className={`${mono.className} text-sm text-zinc-500`}>
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            {post.tags && post.tags.length > 0 && <> · {post.tags.join(" · ")}</>}
          </p>
          <h1
            className={`${display.className} mt-4 text-4xl font-extrabold leading-tight tracking-tight text-[#3f5cf2] dark:text-[#8b9bff] sm:text-5xl`}
          >
            {post.title}
          </h1>
          <p
            className={`${display.className} mt-6 text-2xl font-medium leading-snug tracking-tight sm:text-3xl`}
          >
            {post.summary}
          </p>
          {related.length > 0 && (
            <p className={`${mono.className} mt-6 text-sm text-zinc-500`}>
              Part of{" "}
              {related.map((exp, i) => (
                <span key={exp.slug}>
                  {i > 0 && ", "}
                  <Link
                    href={`/experience/${exp.slug}`}
                    className="text-[#3f5cf2] underline decoration-current/30 underline-offset-4 hover:decoration-current dark:text-[#8b9bff]"
                  >
                    {exp.company}
                  </Link>
                </span>
              ))}
            </p>
          )}
        </header>

        <article className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          <Content />
        </article>
    </>
  );
}
