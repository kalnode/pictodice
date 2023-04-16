<template>
    <div v-if="appReady" class="relative w-full h-full flex flex-col noHighlight" :style="[
        store.safeAreaInset.top ? 'padding-top:'+(store.safeAreaInset.top+store.safeAreaPadding)+'px' : '',
        store.safeAreaInset.bottom ? 'padding-bottom:'+(store.safeAreaInset.bottom+store.safeAreaPadding)+'px' : ''
    ]">

        <div class="absolute z-50 w-full flex justify-between items-center pointer-events-none">
            <div>
                <div v-if="currentRoute.name != 'index' && currentRoute.name != 'roll'" @click="router.back()"
                class="p-4 text-teal-900 hover:text-teal-200 hover:scale-105 transition cursor-pointer pointer-events-auto">
                    <IconsBase name="arrowBack" class="w-10 h-auto" />
                </div>
            </div>

            <div>
                <transition name="fade">
                    <!-- TODO: Support page meta here for class, instead of doing stupid route lookups -->
                    <header v-if="showTopTitle && !store.rolling" id="Header"
                    :class="currentRoute.name == 'roll' ? 'absolute z-50' : ''"
                    :style="currentRoute.name == 'index' ? 'top:'+ (store.safeAreaInset.top+store.safeAreaPadding) +'px' : ''"
                    class="w-full flex justify-center p-2 pointer-events-auto">
                        <transition name="fade" mode="out-in">
                            <NuxtLink :to="currentRoute.name == 'index' ? '/' : currentRoute.name" :key="'title-'+currentRoute.name">
                                <h1 class="p-1.5 text-3xl font-bold uppercase text-teal-900 hover:text-teal-200 hover:scale-110 transition-transform">{{ currentRoute.meta.title }}</h1>
                            </NuxtLink>
                        </transition>
                        <!-- <Logo /> -->
                    </header>
                </transition>
            </div>
            <div class="absolute right-2 top-1 pointer-events-auto">...</div>
        </div>

        <div v-if="store.showPromptMotionPermission"
        class="flex justify-center space-x-2 items-center absolute top-4 mt-12 mx-4 z-50 pointer-events-auto bg-yellow-200 text-xs p-2 text-orange-800"
        :style="'top:'+ (store.safeAreaInset.top+store.safeAreaPadding) +'px'">
            <div>It's better with motion sensors enabled</div>
            <div @click="checkMotionPermission()" class="p-2 bg-orange-600 text-white cursor-pointer pointer-events-auto">Allow</div>
            <div @click="store.showPromptMotionPermission = false" class="test-xl font-bold p-2 rounded-full cursor-pointer pointer-events-auto">X</div>
        </div>

        <!-- DEV TOOLS -->
        <div v-if="store.showDevTools" class="fixed w-full my-8 overflow-hidden pointer-events-auto">
            <div>mouseTouchCoords: {{ store.mouseTouchCoords }}</div>
            <div>currentInteraction: {{ store.currentInteraction }}</div>
        </div>

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
            <transition name="fade">
                <Navigation v-if="!store.rolling" id="Navigation" class="w-full" />
            </transition>
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
import { Motion } from '@capacitor/motion'
import { usePhotodiceAppStore } from '~/stores/app'

// ----- FOR DYNAMIC HEADER TITLE -----
// TODO: Double check if this is correct. Because <Nav> occurs outside of <NuxtPage />, we need this import to make currentRoute reactive, otherwise it never changes after initial landing.
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const currentRoute = useRoute()
// ------------------------------------

const { $event } = useNuxtApp()


// ==========================================
// GENERAL
// ==========================================
const store = usePhotodiceAppStore()
const appReady = ref(false)
const showTopTitle = ref(false)


// ==========================================
// INTERACTIONS
// ==========================================
const orientationHandler = ref()
const accelerationHandler = ref()



// ==========================================
// APP VERSION & APP TYPE (web vs native)
// ==========================================

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







// ==========================================
// PAGE HEAD
// ==========================================

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



// ==========================================
// MOUNTED
// ==========================================

onMounted (async () => {

    console.log("mounted")

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


    setMouseTouchListeners()
    await checkMotionPermission()

})



// ==========================================
// FUNCTIONS
// ==========================================


// ---------------------------------------------
// GENERAL
// ---------------------------------------------

function setHeaderPadding() {
    // Get final computed values of safe-area from CSS property values (see main.css).
    // For convenient use throughout app.
    store.safeAreaInset.top = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--safe-area-inset-top"))
    store.safeAreaInset.bottom = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--safe-area-inset-bottom"))
    getComputedStyle(document.documentElement).getPropertyValue("--safe-area-inset-top")
    appReady.value = true
}



// ---------------------------------------------
// MOTION LISTENERS
// ---------------------------------------------

function setMouseTouchListeners() {
    document.addEventListener('mousemove', (event) => {
        store.hasInteracted ? null : store.hasInteracted = true
        // Basic way of allowing sensors to take priority; basically we ignore this if sensors are firing
        // TODO: Why is there a ! at the start of the condition?
        if (!store.currentInteraction != 'sensor') {
            let x = (window.innerWidth / 2 - event.pageX) / -5
            let y = (window.innerHeight / 2 - event.pageY) / 5

            // TODO: Is this better?
            // let x = e.clientX;
            // let y = e.clientY;

            store.mouseTouchCoords[0] = x
            store.mouseTouchCoords[1] = y
            store.currentInteraction = 'mouse'
        }

    })

    document.addEventListener('touchmove', (e) => {
        store.hasInteracted ? null : store.hasInteracted = true
        // Basic way of allowing sensors to take priority; basically we ignore this if sensors are firing
        if (store.currentInteraction != 'sensor') {
            let evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent
            let touch = evt.touches[0] || evt.changedTouches[0]
            let x = touch.pageX
            let y = touch.pageY
            store.mouseTouchCoords[0] = x
            store.mouseTouchCoords[1] = y
            store.currentInteraction = 'touch'
        }
    })
}

async function checkMotionPermission() {

    // Any browser using requestPermission
    if (window.DeviceOrientationEvent && typeof window.DeviceOrientationEvent.requestPermission === 'function') {

        // Technically, this acts as "check permission" in the device.
        // If previously granted, user will see no prompts and listeners get setup.
        // If error, we show special UI to the user
        await window.DeviceOrientationEvent.requestPermission()
        .then(permissionState => {
            if (permissionState == 'granted') {
                store.showPromptMotionPermission = false
                setMotionListeners()
            } else {
                // TODO: Record in app that they didn't give permission; for future reference
            }
        })
        .catch( (error) => {
            store.showPromptMotionPermission = true
        })

    // All other browsers
    } else {
        setMotionListeners()
    }

}

async function setMotionListeners() {

    // NOTE: Firefox shows a deprecation warning with these Capacitor Motion addListener's,
    // however this may be in error on the part of Firefox (according to internet).
    // In any case, if there's a change to be made here, it needs to occur in the Capactior Motion plugin.

    orientationHandler.value = await Motion.addListener('orientation', event => {
        let tilt = event.beta
        let turn = event.alpha
        let rotate = event.gamma
        const x = tilt / 180 ?? 0
        const y = rotate / 90 ?? 0
        store.accelerometer = [x, y]
        store.hasInteracted ? null : store.hasInteracted = true
        store.currentInteraction = 'sensor'
    })

    accelerationHandler.value = await Motion.addListener('accel', event => {
        store.hasInteracted ? null : store.hasInteracted = true
        store.currentInteraction = 'sensor'
        if ((event.rotationRate.alpha > 256 || event.rotationRate.beta > 256 || event.rotationRate.gamma > 256)) {
            $event('deviceShaken')
        }
    })

}

function stopMotionListeners() {
    // Stop the acceleration listener
    // OLD CODE
    /*
    const stopAcceleration = () => {
    if (accelerationHandler.value) {
        accelerationHandler.value.remove()
    }
    }
    */
}

function destroyListeners() {
    // TODO: Make this proper. Also, prob want to trigger this in Vue's beforeDestroy state.

    /*
    // Old code:
    const removeListeners = () => {
    Motion.removeAllListeners()
    }
    */
}

function setMotionListenersEXPERIMENTAL() {

    // EARLIER CODE, very messy

    // Below may be more optimal in future, but there may be browser support issues.

    /*
    //navigator.permissions.query({ name: "geolocation" }).then((result) => {
    navigator.permissions.query({ name: 'gyroscope' })
    .then(result => {
    if (result.state === 'granted') { // <-- this returns true

        try {
            this.gyroscope = new Gyroscope({frequency: 60})
            this.gyroscope.addEventListener('reading', e => {
                console.log(e)
            })
            this.gyroscope.start()
        } catch(error) {
            // Handle construction errors.
            if (error.name === 'SecurityError') {
                // See the note above about feature policy.
                alert('Sensor construction was blocked by a feature policy.')
            } else if (error.name === 'ReferenceError') {
                alert('Sensor is not supported by the User Agent.')
            } else {
                alert(error)
            }
        }
    } else {
        alert('No gyroscope or denied, computer assumed, falling back to keyboard.')
        // fallback setup here
    }
    })

    //try {
    if (window.RelativeOrientationSensor) {
        const sensorOrientation = new window.RelativeOrientationSensor({ frequency: 60, referenceFrame: 'screen' })

        // console.log("Permissions granted %O", results)
        //sensorOrientation = new window.RelativeOrientationSensor({ frequency: 60, referenceFrame: 'screen' })
        this.sensors.orientation = true
        sensorOrientation.addEventListener('reading', () => {

            console.log("orientationSensor reading")
            if (!this.DiceState.spinning) {
                store.currentInteraction = 'sensor'
                DiceState.accelerometer = sensorOrientation.quaternion.map((x, i) => {
                    if (i < 2) {
                        return Math.round(x * 1000 * 1000) / (1000 * 1000)
                    }
                })
            }
        })
        sensorOrientation.start()
    } else {
        window.addEventListener('deviceorientation', (e) => {
            console.log("legacy deviceorientation reading")
            store.currentInteraction = 'sensor'

            let tilt = e.beta
            let turn = e.alpha
            let rotate = e.gamma

            if (!this.DiceState.spinning) {
                const x = tilt / 180 ?? 0
                const y = rotate / 90 ?? 0
                this.DiceState.accelerometer = [x, y]
            }


            //this.sensors.gyrocoords.tilt = tilt.toFixed(2)
            //this.sensors.gyrocoords.turn = turn.toFixed(2)
            //this.sensors.gyrocoords.rotate = rotate.toFixed(2)

            //if ((tilt > 60 || rotate > 50) && !this.DiceState.spinning) {
            //    this.getRandomDieFace()
            //}

        })
    }

    // } catch (e) {


    // }

    // try {
    if (window.Gyroscope) {
        const sensorGyroscope = new Gyroscope({ frequency: 60 })
        this.sensors.gyro = true
        sensorGyroscope.addEventListener('reading', () => {
            console.log("gyroscope reading")
            this.sensors.gyrocoords.x = sensorGyroscope.x
            this.sensors.gyrocoords.y = sensorGyroscope.z
            if ((sensorGyroscope.x > 9 || sensorGyroscope.z > 4) && !this.DiceState.spinning) {
                this.getRandomDieFace()
            }
        })
        sensorGyroscope.start()
    } else {

    }
    // } catch (e) {

    //}


    /*
    try {

    var sensorOrientation = null
    var sensorGyroscope = null
    Promise.all([
        navigator.permissions.query({ name: "accelerometer" }),
        navigator.permissions.query({ name: "gyroscope" })
    ])
    .then((results) => {
        if (results.every((result) => result.state === "granted")) {

        

        } else {
            console.log("No permissions to use RelativeOrientationSensor.")
        }
    })

    } catch (e) {
    console.log("try catch error on sensor reading: %O", e)
    // Try using legacy DeviceOrientationEvent API instead
    window.addEventListener('deviceorientation', (e) => {
        console.log("legacy deviceorientation reading")
        if (!this.DiceState.spinning) {
            const x = e.beta / 180 ?? 0
            const y = e.gamma / 90 ?? 0
            this.DiceState.accelerometer = [x, y]
        }
    })

    }
    */

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