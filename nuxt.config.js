import colors from 'vuetify/es5/util/colors'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: 'Sushil - %s',
    title: '',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'I am a computer engineer, who is filled with enthusiasm about web development, building projects & learning new technologies. I love developing ideas that come to my mind. Learning new technologies is my hobby along with playing games and watching movies. I keep myself up-to-date with the new trends going around the world. Passionate about project planning and development. I have plesant knowledge about frontend and backend technologies as I have developed few interesting projects using them.'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com'
      },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Goldman&family=Work+Sans&display=swap',
        rel: 'stylesheet'
      },
      {
        href: 'https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css',
        rel: 'stylesheet'
      }
    ]
  },

  loading: true,

  pageTransition: 'page',

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/style.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '~/plugins/vueTyper.js', mode: 'client' }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    defaultAssets: false
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: []
  }
}
