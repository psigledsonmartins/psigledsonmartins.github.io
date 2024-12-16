/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Condensed", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark", "cupcake", {
      mytheme: {
        "primary": "#a5a58d",
        "secondary": "#cb997e",
        "accent": "#bb8588",
        "neutral": "#3d405b",
        "base-100": "#fff1e6",
      },
    }],
  },
};
