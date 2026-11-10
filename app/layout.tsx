import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { InlineScript, themeScript } from "./theme/InlineScript";
import ThemeToggle from "./theme/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chris Onoja Idoko",
  description: "Personal portfolio and blog site.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      // The theme script may set data-theme before React hydrates.
      suppressHydrationWarning
    >
      <head>
        <InlineScript html={themeScript} />
      </head>
      <body className="relative min-h-full flex flex-col">
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
