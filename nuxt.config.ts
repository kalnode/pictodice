// APP VERSION

// FILE METHOD
//const fs = require('fs')
//const packageJson = fs.readFileSync('./package.json')
//const version = JSON.parse(packageJson).version || 0

// PASSING THROUGH NPM SCRIPT (may have OS issues)
//"generateWeb": "NUXT_WTF=productionweb APP_VERSION=$npm_package_version nuxt generate",
//const version = process.env.APP_VERSION

// DIRECT (seems to work? it's the best)
//const version = JSON.stringify(process.env.npm_package_version)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vite: {
        define: {
            // TODO:
            // FAILS
            //APP_VERSION: process.env.npm_package_version

            // WORKS
            APP_VERSION: JSON.stringify(process.env.npm_package_version)
        }
    },

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

        // WORKS, but package.json no effect
        //baseURL: process.env.NUXT_WTF === 'productionweb' ? '/photodice/' : '/'

        baseURL: process.env.NUXT_WTF === 'productionweb' ? '/photodice/' : '/'

        // FAILS Doesn't produce html files for routes!
        //baseURL: process.env.NUXT_WTF === 'productionweb' ? process.env.NUXT_APP_BASE_URL_WEB :  process.env.NUXT_BASE_URL

        //        baseURL: process.env.NODE_ENV === 'production' ? process.env.NUXT_APP_BASE_URL_WEB : process.env.NUXT_BASE_URL

        // We want '/' for deploys to native mobile or a full blown .com hosted situation.
        // If deploying to a gh-pages, we want '/photodice/'
    },




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
