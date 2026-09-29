export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  modules: ['@nuxtjs/tailwindcss'],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      title: 'Татевик Габриелян — Frontend-разработчик',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Портфолио frontend-разработчика Татевик Габриелян: Nuxt.js, Vue.js, адаптивная вёрстка, анимации, REST API.',
        },
        { name: 'theme-color', content: '#09090f' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Unbounded:wght@500;600;700&display=swap',
        },
      ],
    },
  },
})