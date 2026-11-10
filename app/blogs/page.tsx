import Link from "next/link";
import type { Metadata } from "next";
import { display, mono } from "../fonts";
import { posts } from "./data";
import PostList from "./PostList";

export const metadata: Metadata = {
  title: "Blog · Chris Idoko",
  description:
    "Writing on web development, design, open source and the work behind my projects.",
};

export default function Blogs() {
  return (
    <div className="relative flex flex-1 flex-col bg-white font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="relative mx-auto w-full max-w-5xl px-6 pb-24 pt-10 sm:px-10">
        <Link
          href="/"
          className="inline-flex rounded-full bg-zinc-100 px-5 py-2 text-sm font-semibold text-zinc-600 transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3f5cf2] dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-white"
        >
          ← Home
        </Link>

        <section className="mt-14">
          <h1
            className={`${display.className} text-6xl font-extrabold leading-[0.95] tracking-tight text-[#3f5cf2] sm:text-7xl`}
          >
            Blog
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Thoughts, experiences and the stories behind my work, across web
            development, design and open source.
          </p>
        </section>

        <section className="mt-20" aria-labelledby="posts-heading">
          <h2
            id="posts-heading"
            className={`${mono.className} text-sm tracking-[0.2em] text-zinc-500`}
          >
            ALL POSTS
          </h2>
          <PostList posts={posts} />
        </section>
      </main>
    </div>
  );
}
