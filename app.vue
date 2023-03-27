<template>
    <div v-if="appReady" class="relative w-full h-full flex flex-col noSelect noHighlight" :style="[
        store.safeAreaInset.top ? 'padding-top:'+(store.safeAreaInset.top+store.safeAreaPadding)+'px' : '',
        store.safeAreaInset.bottom ? 'padding-bottom:'+(store.safeAreaInset.bottom+store.safeAreaPadding)+'px' : ''
    ]">

        <header id="Header"
        :class="currentRoute.name == 'index' ? 'absolute z-50' : ''"
        :style="currentRoute.name == 'index' ? 'top:'+ (store.safeAreaInset.top+store.safeAreaPadding) +'px' : ''"
        class="w-full flex justify-center p-2">
            <transition name="fade" mode="out-in">
                <NuxtLink :to="currentRoute.name == 'index' ? '/' : currentRoute.name" :key="'title-'+currentRoute.name">
                    <h1 class="p-1.5 text-3xl font-bold uppercase text-teal-900 hover:text-teal-200 hover:scale-110 transition-transform">{{ currentRoute.meta.title }}</h1>
                </NuxtLink>
            </transition>
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
        <nav class="z-40 absolute bottom-0 w-full pointer-events-none"
        :style="'bottom:'+ (store.safeAreaInset.bottom) +'px'">
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


<script setup>
import { ref } from 'vue'
import { Capacitor } from '@capacitor/core'
import { usePhotodiceAppStore } from '~/stores/app'

// TODO: Double check if this is correct. Because <Nav> occurs outside of <NuxtPage />, we need this import to make currentRoute reactive, otherwise it never changes after initial landing.
import { useRoute } from 'vue-router'

const currentRoute = useRoute()
const store = usePhotodiceAppStore()
const appReady = ref(false)


// ------------------------------------------
// APP VERSION & TYPE (web vs native)
// ------------------------------------------

const { $getAvailableAppVersion } = useNuxtApp()

// APP TYPE & VERSION
if (Capacitor.isNativePlatform()) {

    store.app.type = 'native'
    store.app.subtype = Capacitor.getPlatform()

    // We get actual version number from app store resource (a CapacitorJS resource)
    //store.app.version = $getAvailableAppVersion()
} else {

    // TODO:
    // THIS CRASHES!!!
    // Using the vite variable "APP_VERSION" in console.log text seems to be a problem!
    //console.log("app.vue APP_VERSION: %O", APP_VERSION)

    // THIS WORKS! We can't use the literal env, even inside a string!?
    console.log("APP VERSION: %O", APP_VERSION)

    store.app.type = 'web'
    store.app.subtype = Capacitor.getPlatform()

    // We get version from package.json, which is passed here within APP_VERSION
    store.app.version = APP_VERSION
}


// TODO: For web, we import Ionic PWA Elements which delivers some custom abstracted components.
// Right now we import this here via CDN, but the proper way is to import this as a plugin. Dunno how to do that.
// TODO2: Are we actually leveraging the features within?
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


onMounted (async () => {

    if (store.app.subtype == 'web') {
        await store.getLocalStorage_CustomDice()
        .catch( (error) => { })
    }

    let gradientBackground = document.getElementById("gradientBackground")
    let gradientMouse = document.getElementById("gradientMouse")

    document.addEventListener('mousemove', (event) => {
        // BACKGROUND GRADIENT MOVEMENT
        let windowWidth = window.innerWidth
        let windowHeight = window.innerHeight
        let mouseXpercentage = Math.round(100 - (event.pageX / windowWidth * 100))
        let mouseYpercentage = Math.round(100 - (event.pageY / windowHeight * 100))
        let mouseXpercentageM = Math.round(event.pageX / windowWidth * 100)
        let mouseYpercentageM = Math.round(event.pageY / windowHeight * 100)
    })

    if (store.app.subtype == 'ios') {

        // TODO: For only iOS native, we seem to need a small timeout before computedStyles are ready (why!?)
        // Without a timeout, we get "0" for safe-area no matter what, resulting in our title appearing underneath the notch.
        // Other deploys do not have this issue.
        setTimeout(() => {
            setHeaderPadding()
        }, 100)

    } else {
        setHeaderPadding()
    }

})

function setHeaderPadding() {
    // Get final computed values of safe-area from CSS property values (see main.css).
    // For convenient use throughout app.
    store.safeAreaInset.top = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--safe-area-inset-top"))
    store.safeAreaInset.bottom = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--safe-area-inset-bottom"))
    getComputedStyle(document.documentElement).getPropertyValue("--safe-area-inset-top")
    appReady.value = true
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
    /* background: radial-gradient(circle farthest-side at 28% 99%, rgba(38, 173, 166, 0.24), transparent ); */
    background: radial-gradient(circle farthest-side at 99% 78%, rgba(146, 225, 221, 0.8), transparent);

    transition: background .3s ease-in-out;
}

#gradientBackground {
    background: 
        radial-gradient(
            circle farthest-side at top left,
            rgba(108, 241, 219, 0.8), 
            rgba(101, 221, 201, 0)
        ),
        radial-gradient(
            farthest-side at bottom left,
            rgba(152, 221, 226, 0.8), 
            rgba(143, 219, 224, 0)
        ),
        radial-gradient(
            farthest-corner at 0% 50%,
            rgba(232, 241, 134, .8), 
            rgba(232, 241, 134, .0001)
        ),
        radial-gradient(
            closest-side at 100% 0%,
            rgba(166, 233, 224, 0.8), 
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