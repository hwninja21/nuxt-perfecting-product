export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Perfecting Product | Customer Research and Product Strategy for SaaS Companies',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Find product-market fit and create product-led growth with deep customer research and product strategy' },
      { hid: 'og:title', name: 'og:title', content: 'Perfecting Product | Customer Research and Product Strategy for SaaS Companies' },
      { hid: 'og:image', property:"og:image", content:"https://www.perfectingproduct.com/opengraph-homepage.webp" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/Favicon_32.png' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://content.nuxtjs.org/installation
    '@nuxt/content'
  ],

  // add tailwind settings
  tailwindcss: {
    jit: true
  },

  content: {
    // My custom configuration of the Nuxt content module
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
