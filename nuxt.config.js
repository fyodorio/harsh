const authorTwitter = '@fyodorio'
const siteTitle = 'Harsh Code Review Rehab'
const siteDescription =
  'The only place where you code reviews will never be harsh'
const previewImg =
  'https://res.cloudinary.com/fyodorio/image/upload/v1611592969/meta-img/harsh-code-review-rehab.png'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: siteTitle,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: siteDescription,
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'Code,Review,HTML,CSS,JavaScript,TypeScript,ADHD,Vue,Nuxt,Tailwind',
      },
      {
        hid: 'author',
        name: 'author',
        content: 'Fyodor',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: previewImg,
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: siteTitle,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: siteDescription,
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: authorTwitter,
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: authorTwitter,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: siteTitle,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: siteDescription,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: previewImg,
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://harshcodereviewrehab.netlify.app',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxt/content'],

  content: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
