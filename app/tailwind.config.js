module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./app.css"],
  safelist: [
  "bg-chip-primary",
  "text-chip-primary-foreground",
  "bg-chip-secondary",
  "text-chip-secondary-foreground",
],
  theme: {
  extend: {
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
    },
  },
},
  plugins: [],
};
