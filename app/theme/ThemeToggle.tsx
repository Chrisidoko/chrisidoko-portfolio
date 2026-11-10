"use client";

const STORAGE_KEY = "theme";

function systemPrefersDark() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function isDarkNow() {
  const chosen = document.documentElement.getAttribute("data-theme");
  if (chosen === "dark") return true;
  if (chosen === "light") return false;
  return systemPrefersDark();
}

function toggleTheme() {
  const next = isDarkNow() ? "light" : "dark";
  const root = document.documentElement;
  // Choosing what the device already prefers clears the override, so the
  // site goes back to following the device setting.
  const matchesSystem = (next === "dark") === systemPrefersDark();
  try {
    if (matchesSystem) localStorage.removeItem(STORAGE_KEY);
    else localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Storage unavailable (private mode etc.): the switch still works for this page view.
  }
  if (matchesSystem) root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", next);
}

/**
 * Icon and label are swapped purely with `dark:` classes, so the server HTML
 * is always correct for the visitor's theme and nothing needs hydrating.
 */
export default function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="absolute right-6 top-10 z-50 inline-flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3f5cf2] dark:bg-zinc-900 dark:text-zinc-400 dark:hover:text-white sm:right-10"
    >
      <span className="sr-only dark:hidden">Switch to dark theme</span>
      <span className="sr-only hidden dark:inline">Switch to light theme</span>

      {/* Moon (shown in light mode) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-[18px] w-[18px] dark:hidden"
      >
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>

      {/* Sun (shown in dark mode) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="hidden h-[18px] w-[18px] dark:block"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    </button>
  );
}
