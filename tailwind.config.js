/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark", "cupcake",
      {
        mytheme: {
          "primary": "#81b29a",
          "secondary": "#f2cc8f",
          "accent": "#e07a5f",
          "neutral": "#3d405b",
          "base-100": "#f4f1de",
        },
      },
    ],
  },
};
