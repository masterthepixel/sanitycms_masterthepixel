import type { Config } from "tailwindcss";

// In Tailwind v4, theme and plugins are configured in globals.css via @theme and @plugin.
// This file is retained only for any tooling that still reads a JS config.
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
};

export default config;