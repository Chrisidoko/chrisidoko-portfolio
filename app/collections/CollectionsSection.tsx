import Image from "next/image";
import Link from "next/link";
import { display } from "../fonts";

/* ---------- Data (placeholder copy: edit freely) ---------- */

type IconName = "pen" | "book" | "code" | "layers";

type Collection = {
  href: string;
  title: string;
  description: string;
  meta: string;
  /** Two icons shown in the folder tab */
  icons: [IconName, IconName];
  /** Optional screenshots (in /public) peeking out behind the folder. Up to 3. */
  previews?: string[];
};

// To use real ones, uncomment the previews lines in the collections array at
// the top of the file and put up to three images in /public/collections/.

const collections: Collection[] = [
  {
    href: "/blogs",
    title: "Blogs",
    description: "Notes on design, code, and building in public.",
    meta: "12 posts",
    icons: ["pen", "book"],
    // previews: ["/collections/blog-1.png", "/collections/blog-2.png", "/collections/blog-3.png"],
  },
  {
    href: "/projects",
    title: "Projects",
    description:
      "Things I've built, from small experiments to full products with a backend.",
    meta: "8 builds",
    icons: ["code", "layers"],
    previews: [
      "/collections/kaduna.png",
      "/collections/readies.png",
      "/collections/neroo.png",
    ],
  },
];

/* ---------- Icons ---------- */

const iconPaths: Record<IconName, string[]> = {
  pen: ["M12 20h9", "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"],
  book: [
    "M4 19.5A2.5 2.5 0 0 1 6.5 17H20",
    "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z",
  ],
  code: ["m16 18 6-6-6-6", "m8 6-6 6 6 6"],
  layers: ["m12 2 10 5-10 5L2 7l10-5z", "m2 17 10 5 10-5", "m2 12 10 5 10-5"],
};

function Icon({ name }: { name: IconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-7 w-7"
    >
      {iconPaths[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

/* ---------- Preview cards that peek out behind the folder ---------- */

// Position + tilt for the three stacked previews (back to front)
const previewSlots = [
  "left-0 top-[34px] w-[60%] -rotate-[5deg]",
  "left-[22%] top-[10px] w-[60%] rotate-[3deg]",
  "left-[8%] top-[22px] w-[66%] rotate-0",
];

const skeletonTints = ["bg-sky-100", "bg-rose-100", "bg-indigo-100"];

function Skeleton({ tint }: { tint: string }) {
  return (
    <div className="h-full w-full p-3" aria-hidden="true">
      <div className="flex items-center gap-2">
        <span className="h-4 w-4 rounded bg-[#3f5cf2]" />
        <span className="h-2 w-14 rounded-full bg-zinc-200" />
        <span className="ml-auto h-2 w-8 rounded-full bg-zinc-200" />
      </div>
      <div className={`mt-3 h-20 rounded-lg ${tint}`} />
      <div className="mt-3 space-y-2">
        <span className="block h-2 w-3/4 rounded-full bg-zinc-200" />
        <span className="block h-2 w-1/2 rounded-full bg-zinc-200" />
      </div>
    </div>
  );
}

function Previews({ images = [] }: { images?: string[] }) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-x-6 top-0 z-0 h-56 transition-transform duration-300 ease-out group-hover:-translate-y-2 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
    >
      {previewSlots.map((slot, i) => (
        <div
          key={slot}
          className={`absolute h-44 overflow-hidden rounded-2xl border-[3px] border-white bg-white shadow-lg ring-1 ring-black/5 ${slot}`}
        >
          {images[i] ? (
            <Image
              src={images[i]}
              alt=""
              fill
              sizes="(min-width: 768px) 30vw, 60vw"
              className="object-cover object-top"
            />
          ) : (
            <Skeleton tint={skeletonTints[i]} />
          )}
        </div>
      ))}
    </div>
  );
}

/* ---------- Section ---------- */

export default function CollectionsSection() {
  return (
    <section className="mt-32" aria-labelledby="collections-heading">
      <h2 id="collections-heading" className="sr-only">
        Blogs and projects
      </h2>

      <ul className="grid items-start gap-x-8 gap-y-12 md:grid-cols-2">
        {collections.map((c) => (
          <li key={c.href}>
            <Link
              href={c.href}
              className="group relative block rounded-3xl pt-[76px] [--folder:#f4f4f5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3f5cf2] dark:[--folder:#1c1c1f]"
            >
              <Previews images={c.previews} />

              {/* Folder: tab + body share one silhouette and one shadow */}
              <div className="relative z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.08)] dark:drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)]">
                {/* Tab with the icon tiles */}
                <div className="relative flex w-fit gap-3 rounded-t-3xl bg-[var(--folder)] p-4 pr-8">
                  {c.icons.map((name) => (
                    <span
                      key={name}
                      className="flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-zinc-700 dark:border-zinc-800 dark:bg-[#121214] dark:text-zinc-300"
                    >
                      <Icon name={name} />
                    </span>
                  ))}

                  {/* Concave corner joining the tab to the body */}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-full h-6 w-6"
                    style={{
                      background:
                        "radial-gradient(circle at 100% 0, transparent 24px, var(--folder) 24.5px)",
                    }}
                  />
                </div>

                {/* Body */}
                <div className="rounded-3xl rounded-tl-none bg-[var(--folder)] px-8 pb-8 pt-8">
                  <h3
                    className={`${display.className} text-3xl font-medium tracking-tight`}
                  >
                    {c.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                    {c.description}
                  </p>
                  <p className="mt-4 text-base text-zinc-500">{c.meta}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
