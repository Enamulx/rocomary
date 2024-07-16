// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/image", "@nuxtjs/google-fonts"], // Installed Modules.
  colorMode: {
    preference: "light",
  },
  googleFonts: {
    families: {
      Roboto: true,
      Lato: true,
      SiyamRupali: true,
    },
    display: "swap", // Optional: This is a good practice to improve performance
  },
});
