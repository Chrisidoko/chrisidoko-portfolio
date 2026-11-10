import Image from "next/image";
import Link from "next/link";
import { display, mono } from "../fonts";
import { experiences } from "./data";
import { getPostsForExperience, isExternal, postHref } from "../blogs/data";

const accent = "text-[#3f5cf2] dark:text-[#8b9bff]";

export default function ExperienceSection() {
  return (
    <section className="mt-32" aria-labelledby="experience-heading">
      <h2
        id="experience-heading"
        className={`${mono.className} text-sm tracking-[0.2em] text-zinc-500`}
      >
        EXPERIENCE
      </h2>

      <ul className="mt-8 divide-y divide-zinc-200 border-t border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
        {experiences.map((exp) => {
          const related = getPostsForExperience(exp.slug);
          return (
            // The whole card is clickable via the title link's ::after overlay,
            // so post links below can sit on top (links can't be nested).
            <li
              key={exp.slug}
              className="group relative grid gap-6 rounded-2xl py-8 sm:grid-cols-[200px_1fr] sm:gap-10"
            >
              {/* Logo card: only the centered SVG */}
              <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 transition-colors group-hover:border-[#3f5cf2] dark:border-zinc-800 dark:bg-zinc-950 dark:group-hover:border-[#8b9bff] sm:w-[200px]">
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

              {/* Text */}
              <div className="min-w-0 self-center">
                <h3
                  className={`${display.className} text-2xl font-medium tracking-tight sm:text-3xl`}
                >
                  <Link
                    href={`/experience/${exp.slug}`}
                    className="outline-none after:absolute after:inset-0 after:rounded-2xl focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-[#3f5cf2]"
                  >
                    <span className="border-b border-transparent transition-colors group-hover:border-current">
                      {exp.company}
                    </span>
                    <span
                      aria-hidden="true"
                      className="ml-2 inline-block transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </h3>
                <p className={`${mono.className} mt-2 text-sm text-zinc-500`}>
                  {exp.role} · {exp.period}
                </p>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                  {exp.summary}
                </p>
                <p className={`mt-4 font-medium ${accent}`} aria-hidden="true">
                  Read more →
                </p>

                {related.length > 0 && (
                  <div className="relative z-10 mt-5">
                    <p
                      className={`${mono.className} text-xs tracking-[0.2em] text-zinc-500`}
                    >
                      WRITING
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {related.map((post) => {
                        const external = isExternal(post);
                        return (
                          <li key={post.slug}>
                            <Link
                              href={postHref(post)}
                              {...(external
                                ? { target: "_blank", rel: "noopener noreferrer" }
                                : {})}
                              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:border-[#3f5cf2] hover:text-[#3f5cf2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3f5cf2] dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-[#8b9bff] dark:hover:text-[#8b9bff]"
                            >
                              {post.title}
                              <span aria-hidden="true">{external ? "↗" : "→"}</span>
                              {external && (
                                <span className="sr-only">
                                  {` (on ${post.source ?? "an external site"}, opens in a new tab)`}
                                </span>
                              )}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
