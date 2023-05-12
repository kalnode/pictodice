<template>
    <div id="threeDcanvas" class="w-full h-full relative flex justify-center" style="background: rgb(241 241 241)">

        <div class="w-full h-full" style="background: radial-gradient(circle, rgba(238, 238, 238, 0) 30%, rgba(0, 0, 0, 0.18) 180%)">
            <!-- :style="screenshotMode ? 'position:absolute; left:-200%;':''" -->

            <!-- TODO: Need to scrutinize multiple webgl contexts and garbage collection:
            Basically as we create/destroy canvas instances, how can we ensure the browser is not bogged-down by other elements?
            We have destroy logic inside our canvas script, but is it enough? THe browser does manage webgl cotnexts, at some threshold
            it gets rid of the oldest context (like after loading 10 <canvas>'s)

            Do we even care about all this? Already done some effective optimizations (mainly, stopping requestAnimationFrame when no motion is occurring.)
                
            This one thread has interesting solutions... perhaps an A and B channel
            https://stackoverflow.com/questions/17382321/requestanimationframe-garbage-collection

            and this:
            https://stackoverflow.com/questions/10823408/performance-drops-when-trying-to-reset-whole-scene-with-three-js
            -->
            <transition name="fade">

                <div v-if="showCanvas" class="w-full h-full relative flex justify-center items-center">
                    <canvas id="canvas" class="w-full h-full relative z-10"></canvas>
                    <!--  style="width: 4000px; height: 4000px" -->

                    <canvas id="canvasScreenshot" class="absolute w-full h-full z-50 pointer-events-none invisible"></canvas>
                    <!--
                    <div class="absolute top-1 left-1 z-50">
                        <div @click="throwObjects()" class="inline-block cursor-pointer p-2 bg-white rounded-full hover:bg-gray-100">Roll</div>
                        <div>Score: <span id="score-result"></span></div>
                    </div>
                    -->
                </div>
            </transition>

            <!-- :style="'bottom:'+ (store.safeAreaInset.bottom+store.safeAreaPadding) +'px'" -->
        </div>

        <transition name="fade">
            <div v-if="showDevTools" class="absolute left-8 top-1 mb-6 pointer-events-auto z-50 flex flex-col items-center justify-center space-y-4">
                <div @click="setupFormation()" class="p-4 px-8 text-sm rounded-full bg-white hover:bg-gray-100 hover:scale-105 transition cursor-pointer">Formation</div>
                <div @click="rotateObject()" class="p-4 px-8 text-sm rounded-full bg-white hover:bg-gray-100 hover:scale-105 transition cursor-pointer">Rotate</div>
                <div @click="groupObjects()" class="p-4 px-8 text-sm rounded-full bg-white hover:bg-gray-100 hover:scale-105 transition cursor-pointer">Group Objects for Shot</div>
                <div @click="createScreenshot()" class="p-4 px-8 text-sm rounded-full bg-white hover:bg-gray-100 hover:scale-105 transition cursor-pointer">Screenshot</div>
                <div @click="stopAnimation()" class="p-4 px-8 text-sm rounded-full bg-white hover:bg-gray-100 hover:scale-105 transition cursor-pointer">Stop Anim</div>
                <div @click="throwObjects()" class="p-4 px-8 text-sm rounded-full bg-white hover:bg-gray-100 hover:scale-105 transition cursor-pointer">Roll</div>
                <div @click="resetOrbitControls()" class="p-4 px-8 text-sm rounded-full bg-white hover:bg-gray-100 hover:scale-105 transition cursor-pointer">Reset Orbit</div>
            </div>
        </transition>

        <transition name="fade">
            <div v-if="showDevTools" class="absolute right-8 top-1 mb-6 pointer-events-auto z-50 flex flex-col items-center justify-center space-y-4">
                <div @click="nudge('x', -5)" class="p-4 px-8 text-sm rounded-full bg-white hover:bg-gray-100 hover:scale-105 transition cursor-pointer">X -5</div>
                <div @click="nudge('x', 5)" class="p-4 px-8 text-sm rounded-full bg-white hover:bg-gray-100 hover:scale-105 transition cursor-pointer">X 5</div>
                <div @click="nudge('y', -5)" class="p-4 px-8 text-sm rounded-full bg-white hover:bg-gray-100 hover:scale-105 transition cursor-pointer">Y -5</div>
                <div @click="nudge('y', 5)" class="p-4 px-8 text-sm rounded-full bg-white hover:bg-gray-100 hover:scale-105 transition cursor-pointer">Y 5</div>
                <div @click="nudge('z', -5)" class="p-4 px-8 text-sm rounded-full bg-white hover:bg-gray-100 hover:scale-105 transition cursor-pointer">Z -5</div>
                <div @click="nudge('z', 5)" class="p-4 px-8 text-sm rounded-full bg-white hover:bg-gray-100 hover:scale-105 transition cursor-pointer">Z 5</div>
            </div>
        </transition>


    </div>
</template>

<script setup>
import { usePictodiceAppStore } from '~/stores/app'
import DiceCanvas from '~/assets/js/canvas.js'

const config = useRuntimeConfig()

const { $event, $listen, $debounce } = useNuxtApp()

const store = usePictodiceAppStore()

const showCanvas = ref(true)

const props = defineProps({
    Objects: Object,
    rollOnMount: Boolean,
    screenshotMode: Boolean,
    showDevTools: Boolean
})

let canvasInstance

onMounted ( () => {

    // TODO: Scrutinize this timeout. We shouldn't have it.
    setTimeout(() => {
        // showCanvas.value = true
        canvasInstance = new DiceCanvas(props.Objects, 'threeDcanvas', 'canvas', config.app.baseURL, props.rollOnMount, props.screenshotMode)

        canvasInstance.init()

        /*
        setTimeout(async () => {
            await canvasInstance.init()
            .then( () => {
                        //setTimeout(() => {
                canvasInstance.throwObjects()
            //}, 1500)
            })

            //setTimeout(() => {
            // canvasInstance.throwObjects()
            //}, 1500)
        }, 500)
        */

        window.addEventListener("resize", $debounce( () => {
            console.log("threeDcanvas got Resize event")
            canvasInstance.resizeEvent()
            canvasInstance.throwObjects()
        }, 300)) //.bind(this) //.bind(this) needed to keep context of class instance

        $listen('deviceShaken', () => {
            canvasInstance.throwObjects()
        })

        $listen('rollDice', () => {
            canvasInstance.throwObjects()
        })

    }, 500)


})



onBeforeUnmount( async () => {
    console.log("CANVAS VUE UN-MOUNTED")

    await canvasInstance.disposeEverything()

    console.log("CANVAS VUE scene cleared")

    showCanvas.value = false

})

function setupFormation() {
    canvasInstance.setupFormation()
}

function rotateObject() {
    canvasInstance.rotateObject()
}

function groupObjects() {
    canvasInstance.groupObjects()
}

function stopAnimation() {
    canvasInstance.stopAnimation()
}

function createScreenshot() {
    canvasInstance.createScreenshot()
}

function throwObjects() {
    canvasInstance.throwObjects()
}

function resetOrbitControls() {
    canvasInstance.resetOrbitControls()
}

function nudge(mode, value) {
    canvasInstance.nudgeRotation(mode, value)
}


</script>