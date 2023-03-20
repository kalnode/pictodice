<script setup>
    import { Capacitor } from '@capacitor/core'

    // TODO: Double check if this is correct. Because <Nav> occurs outside of <NuxtPage />, we need this import to make currentRoute reactive, otherwise it never changes after initial landing.
    import { useRoute } from 'vue-router'
    const currentRoute = useRoute()

    import { usePhotodiceAppStore } from '~/stores/app'
    const store = usePhotodiceAppStore()

    onMounted (async () => {
        store.getLocalStorage_CustomDice()
    })


    // ------------------------------------------
    // APP VERSION & TYPE (web vs native)
    // ------------------------------------------

    const { $getAvailableAppVersion } = useNuxtApp()

    // APP TYPE & VERSION
    if (Capacitor.isNativePlatform()) {

        store.app.type = 'native'
        store.app.subtype = Capacitor.getPlatform()

        // We get actual version number from app store resource (a CapacitorJS resource)
        //store.app.version = $getCurrentAppVersion()
    } else {

        // TODO:
        // THIS CRASHES THE SITE!!!
        // Using the vite variable "APP_VERSION" in console.log text seems to be a problem!
        //console.log("app.vue APP_VERSION: %O", APP_VERSION)

        // THIS WORKS! We can't use the literal env, even inside a string!?
        console.log("app.vue APP VERSION: %O", APP_VERSION)

        store.app.type = 'web'
        store.app.subtype = Capacitor.getPlatform()

        // We get version from package.json, which is passed here within APP_VERSION
        store.app.version = APP_VERSION
    }
</script>

<template>
    <div class="w-full h-full flex flex-col noSelect noHighlight" :style="[
        safeAreaInset.top ? 'padding-top:'+safeAreaInset.top+'px' : '',
        safeAreaInset.bottom ? 'padding-bottom:'+safeAreaInset.bottom+'px' : ''
    ]">

        <header id="Header"
        :class="currentRoute.name == 'index' ? 'absolute z-50' : ''"
        class="w-full flex justify-center p-2">
            <h1 class="text-3xl font-bold uppercase text-teal-700 hover:text-teal-200 hover:scale-110 transition-transform">
                <transition name="fade" mode="out-in">
                    <NuxtLink :to="currentRoute.name == 'index' ? '/' : currentRoute.name" :key="'title-'+currentRoute.name">
                        {{ currentRoute.meta.title }}
                    </NuxtLink>
                </transition>
            </h1>
            <!-- <Logo /> -->
        </header>

        <!-- CONTENT -->
        <main class="w-full h-full flex-1">
            <!-- TODO: Look into page-key; why static? -->
            <NuxtPage id="Content" page-key="static" />
            <!-- :page-key="'pagekey-'+currentRoute.name" -->
            <!--  page-key="static" -->
        </main>

        <!-- NAVIGATION -->
        <nav class="z-50 absolute bottom-0 w-full pointer-events-none">
            <Navigation id="Navigation" class="w-full" />
        </nav>

        <!-- OFFLINE EXPERIENCE -->
        <!-- TODO: Look into offline mode using:
        https://nuxt.com/docs/api/components/nuxt-client-fallback
        We don't really need it since this app is entirely offline anyways,
        however in future we may involve a remote db or server. -->

        <!-- ERROR EXPERIENCE -->
        <!-- TODO: Look into Nuxt3's ways to handle errors. So far this is just a baseline: -->
        <NuxtErrorBoundary>
            <template #error="{ error }">
                <p>An error occurred: {{ error }}</p>
            </template>
        </NuxtErrorBoundary>

        <!-- BACKGROUND -->
        <div id="bgGradient" class="absolute w-full h-full top-0" style="z-index: -1">
            <div id="gradientBackground" class="w-full h-full"></div>
            <div id="gradientMouse" class="absolute z-50 w-full h-full top-0"></div>
        </div>

        <!-- MODAL -->
        <Modal />

    </div>
</template>

<script>
export default {

    setup () {

        // TODO: This is currently how we add Ionic PWA Elements to the app.
        // Seemingly this adds some features equivalent to native. Added this on presumption it would help the select-a-file experience for end-users on web.
        // We import this CDN script here, but the more proper way is to import this as a plugin. Dunno how to do that.
        // TODO: I don't think we're actually leveraging this in any way.
        // See: https://capacitorjs.com/docs/web/pwa-elements
        useHead({
            script: [
                {
                    async: true,
                    crossorigin: "anonymous",
                    type: "module",
                    src: "https://unpkg.com/@ionic/pwa-elements@latest/dist/ionicpwaelements/ionicpwaelements.esm.js"
                }
            ]
        })
    },

    data() {
        return {
            safeAreaInset: { }, // TODO: Perhaps keep this in global store?
        }
    },

    mounted() {

        let gradientBackground = document.getElementById("gradientBackground")
        let gradientMouse = document.getElementById("gradientMouse")

        document.addEventListener('mousemove', (event) => {
            // --------------------------------
            // BACKGROUND GRADIENT MOVEMENT
            // --------------------------------
            let windowWidth = window.innerWidth
            let windowHeight = window.innerHeight
            let mouseXpercentage = Math.round(100 - (event.pageX / windowWidth * 100))
            let mouseYpercentage = Math.round(100 - (event.pageY / windowHeight * 100))
            let mouseXpercentageM = Math.round(event.pageX / windowWidth * 100)
            let mouseYpercentageM = Math.round(event.pageY / windowHeight * 100)
            gradientBackground.style.backgroundPosition = mouseXpercentage + '% ' + mouseYpercentage + '%'
            gradientMouse.style.background = 'radial-gradient(circle farthest-side at ' + mouseXpercentageM + '% ' + mouseYpercentageM + '%, rgba(38, 173, 166, .8), transparent)'
        })

        this.setHeaderPadding()

    },

    methods: {
        setHeaderPadding() {
            let safeAreaInsetTemp = {
                top: getComputedStyle(document.documentElement).getPropertyValue("--safe-area-inset-top"),
                bottom: getComputedStyle(document.documentElement).getPropertyValue("--safe-area-inset-bottom")
            }
            this.safeAreaInset.top = parseInt(safeAreaInsetTemp.top.slice(0, -2))
            this.safeAreaInset.bottom = parseInt(safeAreaInsetTemp.bottom.slice(0, -2))
        }
    }
}
</script>

<style>
body {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: fixed;
}

html,body, #__nuxt, #__layout{
  height:100%!important;
  width: 100%!important;
}

.page-enter-active,
.page-leave-active {
    transition: filter 0.4s, opacity 0.4s;
     /* transition: all 33s;*/
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}

/* GRADIENT BG */
.gradientMouse {
    /*
    background: radial-gradient( circle farthest-side at bottom left, rgba(38, 173, 166, .8),  rgba(38, 173, 166, .0001) );
    */
    background: radial-gradient(circle farthest-side at 28% 99%, rgba(38, 173, 166, 0.24), transparent );

    transition: background .3s ease-in-out;
}

#gradientBackground {
    background: 
        radial-gradient(
            circle farthest-side at top left,
            rgba(86, 199, 181, .8), 
            rgba(86, 199, 181, .0001)
        ),
        radial-gradient(
            farthest-side at bottom left,
            rgba(133, 208, 213, .8), 
            rgba(133, 208, 213, .0001)
        ),
        radial-gradient(
            farthest-corner at 0% 50%,
            rgba(232, 241, 134, .8), 
            rgba(232, 241, 134, .0001)
        ),
        radial-gradient(
            closest-side at 100% 0%,
            rgba(153, 216, 208, .8), 
            rgba(153, 216, 208, .0001)
        ),
        radial-gradient(
            farthest-corner at top right, rgb(228, 114, 76), rgba(232, 241, 134, .9), rgba(232, 241, 134, .0001)
        ),
        radial-gradient(
            farthest-corner at bottom right, rgba(235, 195, 142, .4), rgba(235, 195, 142, .0001)
        );

    background-size: 150% 150%;
    background-position: center center;
    /* 	animation: gradient 15s ease infinite; */
    transition: background-position .3s ease-in-out;
}

@keyframes gradient {
    0% {
        background-position: left top;
    }
    25% {
        background-position: right top;
    }
    50% {
        background-position: right bottom;
    }
    75% {
        background-position: left bottom;
    }
    100% {
        background-position: left top;
    }
}

</style>