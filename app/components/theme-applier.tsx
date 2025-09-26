import { useEffect } from "react";
import { useTheme } from "~/lib/use-theme";

export function ThemeApplier() {
  const theme = useTheme();

  useEffect(() => {
    const html = document.documentElement;

    if (theme === "dark") {
      html.classList.add("dark");
    } else if (theme === "light") {
      html.classList.remove("dark");
    } else if (theme === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      html.classList.toggle("dark", prefersDark);
    }
  }, [theme]);

  return null;
}