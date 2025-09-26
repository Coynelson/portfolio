import { useFetcher } from "react-router";
import { useTheme } from "~/lib/use-theme";
import { useEffect, useState } from "react";
import { GiSun, GiMoon, GiSolarSystem } from "react-icons/gi";

export function ThemeSwitcher() {
  const fetcher = useFetcher();
  const initialTheme = useTheme();
  const [theme, setTheme] = useState(initialTheme ?? "system");

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function applyTheme(newTheme: string) {
    if (typeof document === "undefined") return;

    const html = document.documentElement;

    if (newTheme === "dark") {
      html.classList.add("dark");
    } else if (newTheme === "light") {
      html.classList.remove("dark");
    } else if (newTheme === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      html.classList.toggle("dark", prefersDark);
    }
  }

  function animateThemeChange(newTheme: string) {
    if (typeof document === "undefined") return;

    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.background = getComputedStyle(document.body).backgroundColor;
    overlay.style.zIndex = "9999";
    overlay.style.opacity = "0";
    overlay.style.transition = "opacity 0.4s ease";

    document.body.appendChild(overlay);

    requestAnimationFrame(() => {
      overlay.style.opacity = "1";

      setTimeout(() => {
        applyTheme(newTheme);
        overlay.style.opacity = "0";
        setTimeout(() => overlay.remove(), 400);
      }, 300);
    });
  }

  function handleChange(newTheme: string) {
    setTheme(newTheme);
    animateThemeChange(newTheme);
    fetcher.submit(
      { "color-scheme": newTheme },
      { method: "post", action: "/theme-selector" }
    );
  }

  return (
    <div className="fixed top-0 right-0 p-2 z-50 bg-zinc-300 rounded-full shadow-lg border-border flex gap-2 m-4">
      <button
        type="button"
        onClick={() => handleChange("light")}
        className={`p-2 rounded-full transition cursor-pointer ${
          theme === "light"
            ? "bg-zinc-400 border border-border hover:scale-110 shadow-lg text-white"
            : "bg-background text-foreground hover:bg-zinc-200"
        }`}
        aria-label="Light theme"
      >
        <GiSun />
      </button>

      <button
        type="button"
        onClick={() => handleChange("dark")}
        className={`p-2 rounded-full transition cursor-pointer ${
          theme === "dark"
            ? "bg-zinc-400  border border-border hover:scale-110 shadow-lg text-white"
            : "bg-background hover:bg-zinc-200 text-foreground"
        }`}
        aria-label="Dark theme"
      >
        <GiMoon />
      </button>

      <button
        type="button"
        onClick={() => handleChange("system")}
        className={`p-2 rounded-full transition cursor-pointer ${
          theme === "system"
            ? "bg-zinc-400 border border-border hover:scale-110 shadow-lg text-white"
            : "bg-background text-foreground hover:bg-zinc-200"
        }`}
        aria-label="System theme"
      >
        <GiSolarSystem />
      </button>
    </div>
  );
}
