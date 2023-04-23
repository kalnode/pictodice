/** @type {import('tailwindcss').Config} */

const { screens } = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue"
    ],
    theme: {
        extend: {},
        screens: {
            'xs': '320px', // We specify a custom width
            ...screens, // Append core TW widths
        }
    },
    plugins: [require('daisyui')],
    future: {

        // Disables hover on mobile
        hoverOnlyWhenSupported: true,
    },
    darkMode: 'class'
}
