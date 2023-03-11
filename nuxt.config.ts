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
    }
})
