// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  // base: "",
  site: "psigledsonmartins.github.io",

  integrations: [tailwind(), icon()],
});
