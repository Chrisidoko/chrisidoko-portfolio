"use client";

import { useState } from "react";
import Image from "next/image";
import { display, mono } from "./fonts";
import ExperienceSection from "./experience/ExperienceSection";
import CollectionsSection from "./collections/CollectionsSection";
import Footer from "./footer/Footer";

type Mode = "minimal" | "creative";

// Drop these SVGs into /public/stack/ (or swap for your own icons)
const stack = [
  { name: "React", src: "/stack/react.svg" },
  { name: "Next.js", src: "/stack/nextjs.svg" },
  { name: "TypeScript", src: "/stack/typescript.svg" },
  { name: "JavaScript", src: "/stack/javascript.svg" },
  { name: "Tailwind CSS", src: "/stack/tailwind.svg" },
  { name: "Figma", src: "/stack/figma.svg" },
  { name: "Inkscape", src: "/stack/inkscape.svg" },
  { name: "Claude Code", src: "/stack/claude.svg" },
];

function PixelCloud({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 12"
      shapeRendering="crispEdges"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M6 4h4V2h6v2h2v2h2v2h2v4H2V8h2V6h2z"
        fill="#d6e9f8"
        stroke="#7fb1dd"
        strokeWidth="1"
      />
    </svg>
  );
}

export default function Home() {
  const [mode, setMode] = useState<Mode>("creative");
  const creative = mode === "creative";

  return (
    <div className="relative flex flex-1 flex-col bg-white font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="relative mx-auto w-full max-w-5xl px-6 pb-24 pt-10 sm:px-10">
        {/* Mode toggle */}
        <div
          role="tablist"
          aria-label="Page style"
          className="inline-flex rounded-full bg-zinc-100 p-1 dark:bg-zinc-900"
        >
          {(["minimal", "creative"] as const).map((m) => (
            <button
              key={m}
              role="tab"
              aria-selected={mode === m}
              onClick={() => setMode(m)}
              className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3f5cf2] ${
                mode === m
                  ? "bg-white text-black shadow-sm dark:bg-zinc-700 dark:text-white"
                  : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Pixel clouds (creative mode only) */}
        {creative && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-6 top-6 hidden sm:block"
          >
            <PixelCloud className="h-16 w-32" />
            <PixelCloud className="-mt-6 ml-[-48px] h-10 w-20" />
          </div>
        )}

        {/* Status line */}
        <p
          className={`${mono.className} mt-10 text-sm leading-6 text-zinc-500`}
        >
          Creative FullStack Developer
          <br />
          2026 · open to work
        </p>

        {/* Hero: name + tagline beside square photo */}
        <section className="mt-14 flex flex-col-reverse items-start gap-10 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0">
            <h1
              className={`${display.className} text-6xl font-extrabold leading-[0.95] tracking-tight text-[#3f5cf2] sm:text-7xl lg:text-7xl`}
            >
              Chris Onoja Idoko
            </h1>
            <p
              className={`${display.className} mt-8 text-2xl font-medium tracking-tight sm:text-3xl`}
            >
              I design it, build it, and make it move.
            </p>
          </div>

          {/* Square profile photo with black & white overlay */}
          <div className="relative aspect-square w-40 shrink-0 overflow-hidden bg-zinc-200 sm:w-48 lg:w-56 rounded-2xl">
            <Image
              src="/me/profile.webp"
              alt="Portrait of Chris Onoja Idoko"
              fill
              priority
              sizes="(min-width: 1024px) 224px, (min-width: 640px) 192px, 160px"
              className="object-cover grayscale contrast-110"
            />
            {/* Dark wash to unify the black & white look */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent mix-blend-multiply"
            />
          </div>
        </section>

        <p className="mt-10 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Chris is full-stack developer with a keen interest in digital product
          design. Just like you do too, Chris likes when a digital product has
          great taste in it visual appeal and technical execution. He brings a
          diverse backgroud in cross-cultural collaboration and community
          Governance.
        </p>

        {/* Stack */}
        <section className="mt-32" aria-labelledby="stack-heading">
          <h2
            id="stack-heading"
            className={`${mono.className} text-sm tracking-[0.2em] text-zinc-500`}
          >
            STACK
          </h2>
          <ul className="mt-6 flex flex-wrap gap-4">
            {stack.map((tool) => (
              <li
                key={tool.name}
                title={tool.name}
                className="flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
              >
                <Image
                  src={tool.src}
                  alt={tool.name}
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
              </li>
            ))}
          </ul>
        </section>

        <ExperienceSection />
        <CollectionsSection />
        {/* More sections go below */}

        {/* More sections go below */}
      </main>
      <Footer />
    </div>
  );
}
