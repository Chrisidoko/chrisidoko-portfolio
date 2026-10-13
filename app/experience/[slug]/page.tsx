import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { display, mono } from "../../fonts";
import { experiences, getExperience } from "../data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const exp = getExperience(slug);
  if (!exp) return {};
  return {
    title: `${exp.company} · Chris Idoko`,
    description: exp.summary,
  };
}

export default async function ExperiencePage({ params }: Props) {
  const { slug } = await params;
  const exp = getExperience(slug);
  if (!exp) notFound();

  return (
    <div className="flex flex-1 flex-col bg-white font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="mx-auto w-full max-w-3xl px-6 pb-24 pt-10 sm:px-10">
        <Link
          href="/#experience-heading"
          className="inline-flex rounded-full bg-zinc-100 px-5 py-2 text-sm font-semibold text-zinc-600 transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3f5cf2] dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-white"
        >
          ← Back
        </Link>

        <header className="mt-14 flex flex-col gap-8 sm:flex-row sm:items-center">
          <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 sm:w-[200px] sm:shrink-0">
            <Image
              src={exp.logo}
              alt={`${exp.company} logo`}
              width={96}
              height={96}
              className={`h-16 w-16 object-contain sm:h-20 sm:w-20 ${
                exp.invertOnDark ? "dark:invert" : ""
              }`}
            />
          </div>
          <div className="min-w-0">
            <h1
              className={`${display.className} text-4xl font-extrabold leading-tight tracking-tight text-[#3f5cf2] dark:text-[#8b9bff] sm:text-5xl`}
            >
              {exp.company}
            </h1>
            <p className={`${mono.className} mt-3 text-sm text-zinc-500`}>
              {exp.role} · {exp.period}
            </p>
          </div>
        </header>

        <p
          className={`${display.className} mt-12 text-2xl font-medium leading-snug tracking-tight sm:text-3xl`}
        >
          {exp.summary}
        </p>

        <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          {exp.details.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          {exp.bullets.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </div>

        {exp.highlights.length > 0 && (
          <section className="mt-14" aria-labelledby="highlights-heading">
            <h2
              id="highlights-heading"
              className={`${mono.className} text-sm tracking-[0.2em] text-zinc-500`}
            >
              HIGHLIGHTS
            </h2>
            <ul className="mt-6 divide-y divide-zinc-200 border-t border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
              {exp.highlights.map((h) => (
                <li key={h} className="py-4 text-lg">
                  {h}
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </div>
  );
}
