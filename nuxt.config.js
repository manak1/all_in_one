// eslint-disable-next-line nuxt/no-cjs-in-config
const Sass = require('sass')
// eslint-disable-next-line nuxt/no-cjs-in-config
const Fiber = require('fibers')

require('dotenv').config()
const { WEATHER_API_KEY, NEWS_API_KEY } = process.env

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~assets/scss/common.scss'],
  styleResources: {
    scss: './assets/scss/mixins.scss'
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '@/plugins/vue2-touch-events',
      ssr: false
    },
    {
      src: '@/plugins/localStorage',
      ssr: false
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},

  manifest: {
    name: 'AllInOne',
    lang: 'ja',
    title: 'AllInOne',
    theme_color: '#22222',
    background_color: '#fffff',
    'og:title': 'AllInOne',
    description: '自分のための自分によるwebアプリ',
    'og:description': '自分のための自分によるwebアプリ'
  },

  env: {
    WEATHER_API_KEY,
    NEWS_API_KEY
  },
  /*
   ** Build configuration
   */
  build: {
    loaders: {
      implementation: Sass,
      sassOptions: {
        fiber: Fiber
      }
    }
  }
}
