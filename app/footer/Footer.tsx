import { display } from "../fonts";

/* ---------- Links (placeholders: replace with yours) ---------- */

const links = [
  { label: "Email", href: "mailto:chrisidoko0017@gmail.com" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chris-idoko-56907b207/",
  },
  { label: "Github", href: "https://github.com/Chrisidoko/" },
];

/* ---------- Pixel art trees ---------- */

const palette: Record<string, string> = {
  l: "#8fbf6e", // light leaf
  m: "#5f9a4f", // mid leaf
  d: "#3f7040", // dark leaf
  t: "#6b4a2f", // trunk
  b: "#e8dfc8", // base block
};

const bigTree = [
  "....mmmmmm....",
  "..mmllllllmm..",
  ".mllllmllllmm.",
  ".mlllmmmllllm.",
  "mllllmddmlllmm",
  "mlllllmmmllllm",
  "mlmllllllmlllm",
  "mlllllllllmlmm",
  ".mmlllmllllmm.",
  ".mmmlllllmmmd.",
  "..dmmmmmmmmd..",
  "....dddddd....",
  "......tt......",
  "......tt......",
  "......tt......",
  "......tt......",
  "....bbbbbb....",
];

const smallTree = [
  "...mmmm...",
  ".mmllllmm.",
  "mllllmllm.",
  "mlllmmlllm",
  "mllllllllm",
  "mmllmllllm",
  ".mmllllmm.",
  "..dmmmmd..",
  "...dddd...",
  "....tt....",
  "....tt....",
  "....tt....",
  "...bbbb...",
];

function PixelArt({ rows, scale }: { rows: string[]; scale: number }) {
  const cols = rows[0].length;
  return (
    <svg
      viewBox={`0 0 ${cols} ${rows.length}`}
      width={cols * scale}
      height={rows.length * scale}
      shapeRendering="crispEdges"
      aria-hidden="true"
      className="block"
    >
      {rows.flatMap((row, y) =>
        [...row].map((ch, x) =>
          palette[ch] ? (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width="1"
              height="1"
              fill={palette[ch]}
            />
          ) : null,
        ),
      )}
    </svg>
  );
}

/* ---------- Footer ---------- */

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-zinc-200 bg-zinc-50 dark:border-zinc-900 dark:bg-[#0c0c0f]">
      <div className="relative mx-auto w-full max-w-5xl px-6 pb-40 pt-16 sm:px-10 sm:pb-44">
        {/* Status */}
        <p className="inline-flex items-center gap-2.5 text-base text-zinc-500">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
          Open to work · Remote or on-site in Nigeria
        </p>

        {/* CTA */}
        <h2
          className={`${display.className} mt-6 text-6xl font-extrabold leading-[0.92] tracking-tighter sm:text-8xl`}
        >
          Let&rsquo;s build
          <br />
          something real.
        </h2>

        {/* Links */}
        <nav aria-label="Contact" className="mt-10">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((l) => {
              const external = !l.href.startsWith("mailto:");
              return (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="rounded text-lg font-semibold text-zinc-500 transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3f5cf2] dark:hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Pixel trees, bases clipped by the footer's bottom edge */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-3 right-6 flex items-end gap-1 sm:right-[14%]"
        >
          <PixelArt rows={smallTree} scale={6} />
          <PixelArt rows={bigTree} scale={7} />
        </div>
      </div>
    </footer>
  );
}
