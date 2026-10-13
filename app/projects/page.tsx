import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { display, mono } from "../fonts";
import { projects } from "./data";

export const metadata: Metadata = {
  title: "Projects · Chris Idoko",
  description: "Tools I designed and shipped.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-1 flex-col bg-white font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="mx-auto w-full max-w-4xl px-6 pb-24 pt-10 sm:px-10">
        <Link
          href="/#collections-heading"
          className="inline-flex rounded-full bg-zinc-100 px-5 py-2 text-sm font-semibold text-zinc-600 transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3f5cf2] dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-white"
        >
          ← Back
        </Link>

        <h1
          className={`${display.className} mt-14 text-5xl font-extrabold tracking-tight sm:text-6xl`}
        >
          Projects
        </h1>
        <p className="mt-6 text-xl leading-8 text-zinc-600 dark:text-zinc-400">
          Recent projects i designed and shipped.
        </p>

        <ul className="mt-12 space-y-4">
          {projects.map((p) => (
            <li key={p.name}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-5 rounded-3xl border border-zinc-200 bg-zinc-50 p-5 transition-colors hover:border-[#3f5cf2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3f5cf2] dark:border-zinc-800 dark:bg-[#1c1c1f] dark:hover:border-[#8b9bff] sm:items-center sm:p-6"
              >
                {/* Logo tile */}
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-zinc-200 bg-white sm:h-16 sm:w-16 dark:border-transparent">
                  <Image
                    src={p.logo}
                    alt=""
                    width={64}
                    height={64}
                    className="h-full w-full rounded-2xl object-contain p-2"
                  />
                </span>

                {/* Text */}
                <span className="min-w-0 flex-1">
                  <span
                    className={`${display.className} block text-xl font-medium tracking-tight sm:text-2xl`}
                  >
                    {p.name}
                  </span>
                  <span className="mt-2 block text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg sm:leading-8">
                    {p.description}
                  </span>
                  <span
                    className={`${mono.className} mt-3 block text-sm text-zinc-500`}
                  >
                    {p.meta}
                  </span>
                </span>

                {/* External arrow */}
                <span
                  aria-hidden="true"
                  className="text-xl text-zinc-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#3f5cf2] dark:group-hover:text-[#8b9bff] sm:self-center"
                >
                  ↗
                </span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
