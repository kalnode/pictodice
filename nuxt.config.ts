// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    app: {
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
