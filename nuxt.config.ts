// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    /*
    env: {
        baseURL: process.env.BASE_URL
      },
      */
    ssr: true,
    app: {
        head: {
          meta: [
            { name: 'viewport', content: 'width=device-width, user-scalable=no, viewport-fit=cover' },
          ],
        },

        // TODO: Since we're using an "app.config.ts" (based on official recommendations), should we not put page transitions there too?
        pageTransition: { name: 'page', mode: 'out-in' },
        //baseURL: process.env.NUXT_BASE_URL, 
        baseURL: process.env.NODE_ENV === 'production' ? '/photodice/' : '/'
        //baseURL: process.env.NODE_ENV === 'productionweb' ? process.env.NUXT_APP_BASE_URL_WEB :  process.env.NUXT_BASE_URL
        //        baseURL: process.env.NODE_ENV === 'production' ? process.env.NUXT_APP_BASE_URL_WEB : process.env.NUXT_BASE_URL

        // We want '/' for deploys to native mobile or a full blown .com hosted situation.
        // If deploying to a gh-pages, we want '/photodice/'
    },

/*
    runtimeConfig: {
        public: {
            baseURL: '/photodice2/'
        }
    },
    */
    



    /*
    generate: {
        routes: ['/']
    },
    */

    css: ['@/assets/css/main.css'],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },

    modules: [
        [
          '@pinia/nuxt',
          { autoImports: ['defineStore', 'acceptHMRUpdate'] }
        ],
    ],

    /*
    imports: {
        dirs: ['stores'],
    },
    */


    //modules: ['@pinia/nuxt'],
/*
    pinia: {
        autoImports: [
        // automatically imports `defineStore`
        'defineStore', // import { defineStore } from 'pinia'
        ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },
    */


})
