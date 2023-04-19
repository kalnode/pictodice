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
        pageTransition: {
            name: 'page',
            //mode: 'out-in' // Disabled this mode because it brings up errors especially when running animations on pages. However, looks like pages are cross-fading just fine without this???
        },

        baseURL: process.env.NUXT_WTF === 'productionweb' ? '/photodice/' : '/'

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
        '@vite-pwa/nuxt',
        '@vueuse/motion/nuxt',
        '@nuxt/image-edge',
    ],

    //modules: ['@pinia/nuxt'],

    pwa: {
      /* PWA options */
    }

    /*
    imports: {
        dirs: ['stores'],
    },
    */
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
