// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [process.env.NUXT_UI_PRO_PATH || "@nuxt/ui-pro"],
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/fonts",
    "@nuxthq/studio",
    "@vueuse/nuxt",
    "@nuxthub/core",
    "@nuxtjs/seo"
  ],
  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    "components:extend": (components) => {
      const globals = components.filter((c) =>
        ["UButton"].includes(c.pascalName)
      );

      globals.forEach((c) => (c.global = true));
    },
  },
  ui: {
    icons: ["heroicons", "simple-icons", "mdi", "line-md"],
  },
  routeRules: {
    "/api/search.json": { prerender: true },
  },
  devtools: {
    enabled: true,
  },
  typescript: {
    strict: false,
  },
  ogImage: {
    enabled: false,
  },
  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
});