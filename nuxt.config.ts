// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    app: {
        head: {
          meta: [
            { name: 'viewport', content: 'width=device-width, user-scalable=no, viewport-fit=cover' },
          ],
        },

        // TODO: Since we're using an "app.config.ts" (based on official recommendations), should we not put page transitions there too?
        pageTransition: { name: 'page', mode: 'out-in' },
        baseURL: process.env.NODE_ENV === 'production' ? '/photodice/' : '/'
    },

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
