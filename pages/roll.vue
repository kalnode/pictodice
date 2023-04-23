<script setup>
import { useRoute } from 'vue-router'
const currentRoute = useRoute()

import { usePhotodiceAppStore } from '~/stores/app'
const store = usePhotodiceAppStore()

definePageMeta({
    name: 'Roll',
    title: 'Rolling Dice'
})

const { $event } = useNuxtApp()

function throwDice() {
    $event('rollDice')
}


</script>
<template>
    <div class="w-full h-full flex justify-center items-center">
        <!-- 'classic' in currentRoute.query -->
        <client-only>
            <threeDcanvas :rollOnMount="true" :Objects="currentRoute.query['set'] && currentRoute.query['set'] == 'classic' ? store.diceSets[0].dies.map(e => store.dice[e]) : store.currentDice" />
        </client-only>

        <!-- TODO: Support old style 2d dice, displayed as a grid -->
        <!-- <Dice /> -->

        <!-- BUTTON: ROLL -->
        <transition name="fade">
            <div v-if="!store.rolling" class="absolute mb-6 pointer-events-auto z-50 flex justify-center"
            :style="'bottom:'+ (store.safeAreaInset.bottom+store.safeAreaPadding) +'px'">
                <div @click="throwDice()" class="p-4 px-8 rounded-full bg-white hover:bg-gray-100 hover:scale-105 transition cursor-pointer">ROLL</div>
                <!-- <div class="absolute text-black text-center" style="top:-50%">Score: {{scoreResult}}</div> -->
            </div>
        </transition>
    </div>
</template>