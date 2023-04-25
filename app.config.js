export default defineAppConfig({
    title: 'Pictodice',
    head:{
        meta: [
            { name: "viewport", content: "viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" }
        ]
    },
    /*
    theme: {
        dark: false, // TODO: We want to support light&dark mode in this app. Need to invoke Tailwind in this regard.
        colors: {
            primary: '#ff0000'
        }
    }
    */
})