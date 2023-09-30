export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  layout: "default",
  ssr: false,
  generate: {
    fallback: true,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Natex",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        href: "/pagePiling/jquery.pagepiling.css",
        rel: "stylesheet",
        type: "text/css",
      },
    ],
    script: [
      { src: "https://code.jquery.com/jquery-3.6.0.min.js" },
      { src: "/pagePiling/jquery.pagepiling.min.js" },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery.ripples/0.5.3/jquery.ripples.min.js",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css", "swiper/css/swiper.min.css",],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/vue-cursor-fx",
      ssr: false,
    },
    {
      src: "~/plugins/VueAwesomeSwiper.js",
      ssr: false,
    },
    {
      src: "~/plugins/highcharts.js",
      ssr: false,
    },
    { src: "~/plugins/aos", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxt/postcss8",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    ["@openafg/nuxt-fullpage", {}],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.(mov)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
          esModule: false,
        },
      });
    },
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
};
