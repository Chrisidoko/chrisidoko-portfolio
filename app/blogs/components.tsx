import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { mono } from "../fonts";

/* Reusable building blocks for MDX posts. Registered globally in
   /mdx-components.tsx, so posts can use them without importing. */

type FigureProps = {
  src: StaticImageData;
  alt: string;
  caption?: ReactNode;
  /**
   * wide = full column, badge = small centered artwork,
   * logo = transparent artwork on a white card (stays legible in dark mode)
   */
  size?: "wide" | "badge" | "logo";
};

export function Figure({ src, alt, caption, size = "wide" }: FigureProps) {
  const badge = size === "badge";
  const logo = size === "logo";
  const image = (
    <Image
      src={src}
      alt={alt}
      placeholder="blur"
      sizes={badge ? "160px" : logo ? "400px" : "(min-width: 768px) 720px, 100vw"}
      className={
        badge
          ? "h-auto w-40"
          : logo
            ? "h-auto w-full max-w-sm"
            : "h-auto w-full rounded-2xl border border-zinc-200 dark:border-zinc-800"
      }
    />
  );
  return (
    <figure className={badge ? "my-10 flex flex-col items-center" : "my-10"}>
      {logo ? (
        <div className="flex justify-center rounded-2xl border border-zinc-200 bg-white px-8 py-10 dark:border-zinc-800">
          {image}
        </div>
      ) : (
        image
      )}
      {caption && (
        <figcaption
          className={`${mono.className} mt-3 text-center text-xs leading-5 text-zinc-500`}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/** Two-up grid of images (e.g. before/after samples) */
export function Gallery({
  images,
  caption,
}: {
  images: { src: StaticImageData; alt: string }[];
  caption?: ReactNode;
}) {
  return (
    <figure className="my-10">
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {images.map((img) => (
          <Image
            key={img.src.src}
            src={img.src}
            alt={img.alt}
            placeholder="blur"
            sizes="(min-width: 768px) 360px, 50vw"
            className="h-auto w-full rounded-2xl border border-zinc-200 dark:border-zinc-800"
          />
        ))}
      </div>
      {caption && (
        <figcaption
          className={`${mono.className} mt-3 text-center text-xs leading-5 text-zinc-500`}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/** `vertical` for YouTube Shorts (9:16) */
export function YouTube({
  id,
  title,
  vertical = false,
}: {
  id: string;
  title: string;
  vertical?: boolean;
}) {
  return (
    <div
      className={`my-10 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 ${
        vertical ? "mx-auto aspect-[9/16] w-full max-w-xs" : "aspect-video"
      }`}
    >
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
  );
}

/** Key/value project facts (role, timeline, tools…) */
export function Facts({
  items,
}: {
  items: { label: string; value: ReactNode }[];
}) {
  return (
    <dl className="my-10 grid gap-x-8 gap-y-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-950 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.label} className="min-w-0">
          <dt
            className={`${mono.className} text-xs tracking-[0.2em] text-zinc-500 uppercase`}
          >
            {item.label}
          </dt>
          <dd className="mt-1 text-base leading-7 text-zinc-800 dark:text-zinc-200">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function People({
  people,
}: {
  people: { name: string; href?: string; image: StaticImageData; role?: string }[];
}) {
  return (
    <ul className="my-8 flex flex-wrap gap-8">
      {people.map((p) => {
        const name = p.href ? (
          <a
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline decoration-zinc-300 underline-offset-4 hover:decoration-current dark:decoration-zinc-700"
          >
            {p.name}
          </a>
        ) : (
          <span className="font-semibold">{p.name}</span>
        );
        return (
          <li key={p.name} className="flex items-center gap-4">
            <Image
              src={p.image}
              alt={`Portrait of ${p.name}`}
              sizes="64px"
              className="h-16 w-16 rounded-full object-cover"
            />
            <div>
              {name}
              {p.role && (
                <p className={`${mono.className} text-xs text-zinc-500`}>
                  {p.role}
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
