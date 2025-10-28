import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  runtimeConfig: {
    bpsApiKey: process.env.BPS_API_KEY,
    public: {},
  },
  css: ["./app/assets/css/main.css"],
  modules: ["@nuxt/ui"],

  vite: {
    plugins: [tailwindcss()],
  },
  ui: {
    colorMode: false,
    theme: {
      colors: [
        "primary",
        "primary-foreground",
        "secondary",
        "tertiary",
        "info",
        "success",
        "warning",
        "error",
        "light",
      ],
    },
  },
});
