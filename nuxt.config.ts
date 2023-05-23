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
            mode: 'out-in' // Disabled this mode because it brings up errors especially when running animations on pages. However, looks like pages are cross-fading just fine without this???
        },

        baseURL: process.env.NUXT_WTF === 'productionweb' ? '/pictodice/' : '/'

    },

    css: ['@/assets/css/main.css'],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
            //'tailwindcss/nesting': {}, // For nesting CSS classes. More info: https://tailwindcss.com/docs/using-with-preprocessors#nesting
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
        '@nuxtjs/color-mode'
    ],


    runtimeConfig: {
        ipx: {
            //dir: path.resolve('./public'),
            dir: '../../public/images',

            //domains: [
            //    'assets.mycompany.com',
            //]
        }
    },

    image: {
        image: {
            provider: 'ipx'
        },
        dir: 'public/images',
        // Generate images to `/_nuxt/images/file.png`
        //staticFilename: 'images/[name]-[hash][ext]'
      },

    colorMode: {
        //preference: 'system',// default value of $colorMode.preference
        //fallback: 'light', // fallback value if not system preference found
        //hid: 'nuxt-color-mode-script',
        //globalName: '__NUXT_COLOR_MODE__',
        //componentName: 'ColorScheme',
        classPrefix: 'ColorMode-',
        classSuffix: '',
        //storageKey: 'nuxt-color-mode'
    },
    //colorMode: {
    //    classSuffix: ''
    //}, // FOR DARK MODE. Doing this allows Tailwind dark mode class to take effect.
    // See: https://color-mode.nuxtjs.org/#tailwindcss

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
