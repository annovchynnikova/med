export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'medsearch',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: '~/assets/sass/common.scss', lang: 'scss' }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/google-maps.js' },
    '@/plugins/firebase',
    '@/plugins/axios',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-i18n',
    '@nuxtjs/axios',
    '@nuxtjs/dayjs',
    'vue-toastification/nuxt',
    '~/modules/mongodb-setup.js',
    '@nuxtjs/auth',
  ],

  axios: {
    baseURL: 'http://localhost:4000/',
  },

  i18n: {
    locales: [
      {
        name: 'Eng',
        code: 'en',
        file: 'en.js',
      },
      // {
      //   name: 'Рус',
      //   code: 'ru',
      //   file: 'ru.js',
      // },
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    lazy: true,
    langDir: 'lang/',
  },

  auth: {
    strategies: {
      local: {
        scheme: 'local',
        token: {
          property: 'token',
          maxAge: 60 * 60 * 2,
        },
        user: {
          property: '',
        },
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: 'token' },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/auth/profile', method: 'get', propertyName: false },
        },
      },
    },
    redirect: {
      home: '/profile',
      login: '/login?auth_error=1',
      logout: '/login',
    },
  },
  // router: {
  //   middleware: ['auth'],
  // },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      preset: {
        browsers: [
          'last 4 versions',
          'last 1 ie version',
          'last 5 safari versions',
        ],
        autoprefixer: true,
      },
    },
    transpile: [/^vue2-google-maps($|\/)/],
  },

  styleResources: {
    scss: ['@/assets/sass/common.scss'],
  },

  loading: '~/components/Loading.vue',
}
