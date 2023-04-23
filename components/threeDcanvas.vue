<template>
    <div id="threeDcanvas" class="w-full h-full relative flex justify-center">

        <div :style="screenshotMode ? 'position:absolute; left:-200%;':''" class="w-full h-full">

            <canvas id="canvas" class="h-full w-full relative z-10"></canvas>
            <!--  style="width: 4000px; height: 4000px" -->

            <canvas id="canvasScreenshot" class="absolute top-0 left-0 w-full h-full z-50 pointer-events-none"></canvas>
            <!--
            <div class="absolute top-1 left-1 z-50">
                <div @click="throwObjects()" class="inline-block cursor-pointer p-2 bg-white rounded-full hover:bg-gray-100">Roll</div>
                <div>Score: <span id="score-result"></span></div>
            </div>
            -->

            <!-- :style="'bottom:'+ (store.safeAreaInset.bottom+store.safeAreaPadding) +'px'" -->
        </div>

        <transition name="fade">
            <div v-if="showDevTools" class="absolute left-8 bottom-20 mb-6 pointer-events-auto z-50 flex flex-col items-center justify-center space-y-4">
                <div @click="setupFormation()" class="p-4 px-8 text-sm rounded-full bg-white hover:bg-gray-100 text-teal-800 hover:scale-105 transition cursor-pointer">Formation</div>
                <div @click="rotateObject()" class="p-4 px-8 text-sm rounded-full bg-white hover:bg-gray-100 text-teal-800 hover:scale-105 transition cursor-pointer">Rotate</div>
                <div @click="createScreenshot()" class="p-4 px-8 text-sm rounded-full bg-white hover:bg-gray-100 text-teal-800 hover:scale-105 transition cursor-pointer">Screenshot</div>
                <div @click="stopAnimation()" class="p-4 px-8 text-sm rounded-full bg-white hover:bg-gray-100 text-teal-800 hover:scale-105 transition cursor-pointer">Stop Anim</div>
                <div @click="throwObjects()" class="p-4 px-8 text-sm rounded-full bg-white hover:bg-gray-100 text-teal-800 hover:scale-105 transition cursor-pointer">Roll</div>
            </div>
        </transition>


    </div>
</template>

<script setup>
import { usePhotodiceAppStore } from '~/stores/app'
import DiceCanvas from '~/assets/js/canvas.js'

const config = useRuntimeConfig()

const { $event, $listen, $debounce } = useNuxtApp()

const store = usePhotodiceAppStore()

const props = defineProps({
    Objects: Object,
    rollOnMount: Boolean,
    screenshotMode: Boolean,
    showDevTools: Boolean
})

let canvasInstance

onMounted ( () => {

    canvasInstance = new DiceCanvas(props.Objects, 'threeDcanvas', 'canvas', config.app.baseURL, true)



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
})



function setupFormation() {
    canvasInstance.setupFormation()
}

function rotateObject() {
    canvasInstance.rotateObject()
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


</script>