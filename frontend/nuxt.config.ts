// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/main.css"],
  app: {
    head: {
      link: [{ rel: "stylesheet", href: "/fonts/Siyamrupali.ttf" }],
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/image", "@nuxtjs/google-fonts"],

  colorMode: {
    preference: "light",
  },

  googleFonts: {
    families: {
      Lato: true,
    },
    display: "swap", // Optional: This is a good practice to improve performance
  },
});
