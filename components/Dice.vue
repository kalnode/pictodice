<template>
    <div class="w-full h-full flex flex-col justify-center items-center">

        <!-- DEV TOOLS -->
        <div v-if="showDevTools" class="w-full my-8 overflow-hidden">
            <div>Dice face: {{ DieState.face }}</div>
            <div>Dice spinning: {{ DieState.spinning }}</div>
        </div>

        <!-- BUTTON: ROLL -->
        <transition name="fade">
            <div v-if="!store.rolling" id="buttonRoll" class="absolute mb-6"
            :style="'bottom:'+ (store.safeAreaInset.bottom+store.safeAreaPadding) +'px'">
                <div @click="getRandomDieFace()" class="p-4 px-8 rounded-full bg-white hover:bg-gray-100 hover:scale-105 transition cursor-pointer">ROLL</div>
            </div>
        </transition>

        <!-- DIE -->
        <Die :Die="store.dice[store.currentDie]" :DieState="DieState" @click="getRandomDieFace()" />
        <!-- {{ DieState }} -->

    </div>
</template>

<script setup>
import { usePictodiceAppStore } from '~/stores/app'

const { $listen } = useNuxtApp()

// ==========================================
// GENERAL
// ==========================================
const store = usePictodiceAppStore()
const showDevTools = ref(false)

// TODO: This must be reactive() in order for changes to pass to Die component. Somehow, ref() doesn't do the trick! Why?
const DieState = reactive({
    face: 1, // TODO: If we start with any face other than 1, on page load the cube transform to that face doesn't apply, we just see face 1 (default cube non-transformed orientation). As soon as you move the mouse, the cube spins to the correct face we specify here in config.
    spinning: false,
    hasRolled: false // TODO: For very first roll after page load, let's try to make the random function NOT land on "1" right away.
})

// TODO: This watcher doesn't work; why? Something about ref() vs reactive(), .value, depth, etc
/*
watch(DieState, (first, second) => {
    console.log("Watch Dice.vue DieState function called with args:", first, second)
})
*/



// ==========================================
// MOUNTED
// ==========================================

onMounted ( () => {

    // BUS EVENTS
    $listen('deviceShaken', (e) => {
        if (!DieState.spinning) {
            getRandomDieFace()
        }
    })

    document.addEventListener('keydown', (event) => {
        handleKeyDown(event)
    })

})


// ==========================================
// FUNCTIONS
// ==========================================

function handleKeyDown(e) {
    if (e.code === 'Space') {
        getRandomDieFace()
    }
}

function getRandomDieFace() {
    // TODO: Ideally we use faces here, and not images. For now we use images.
    let totalFaces = store.dice[store.currentDie].images.length
    rollToFace(Math.floor(Math.random() * totalFaces + 1))
}

function rollToFace(face) {
    // TODO: Which is better? Manual or object.assign?
    //Object.assign(DieState, {face: face, spinning: true, hasRolled: true })
    DieState.face = face
    DieState.spinning = true
    DieState.hasRolled = true

    // NOTE: Spin is finished via trigger of animationend; see code.
}

</script>