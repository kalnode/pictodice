export default defineAppConfig({
    title: 'Photodice',
    head:{
        meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' }
        ]
    },
    theme: {
        dark: false, // TODO: We want to support light&dark mode in this app. Need to invoke Tailwind in this regard.
        colors: {
            primary: '#ff0000'
        }
    }
})