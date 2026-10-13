"use client";

import { useState } from "react";
import Image from "next/image";
import { display, mono } from "../fonts";

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

export default function Blogs() {
  return (
    <div className="relative flex flex-1 flex-col bg-white font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <main className="relative mx-auto w-full max-w-5xl px-6 pb-24 pt-10 sm:px-10">
        {/* Mode toggle */}

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
              Coming Soon
            </h1>
            <p
              className={`${display.className} mt-8 text-2xl font-medium tracking-tight sm:text-3xl`}
            >
              Blog Posts
            </p>
          </div>
        </section>

        <p className="mt-10 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Blogs are coming soon. I am currently working on building a blog
          section where I will share my thoughts, experiences, and insights on
          various topics related to web development, design, and technology.
          Stay tuned for updates!
        </p>
      </main>
    </div>
  );
}
