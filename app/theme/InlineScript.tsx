/**
 * Renders a script that runs during HTML parsing (before first paint).
 * The type swap on the client avoids React's dev warning about rendering
 * <script> tags; see node_modules/next/dist/docs/01-app/02-guides/
 * preventing-flash-before-hydration.md.
 */
export function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

/** Re-applies a saved theme choice to <html> before the page paints. */
export const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;
