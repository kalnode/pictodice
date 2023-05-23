<script setup>
import { useRoute } from 'vue-router'
const currentRoute = useRoute()

import { usePictodiceAppStore } from '~/stores/app'
const store = usePictodiceAppStore()
const showCanvas = ref(false)

definePageMeta({
    name: 'Roll',
    title: 'Rolling Dice'
})

const { $event } = useNuxtApp()

onMounted ( () => {

    // TODO: We have a timeout here as a bandaid fix for loading the 3d canvas.
    // Scrutinize this and eliminate timeout.
    setTimeout(() => {
        showCanvas.value = true
    }, 500)
})

function throwDice() {
    $event('rollDice')
}


</script>
<template>
    <div class="relative w-full h-full flex justify-center items-center">
        <!-- 'classic' in currentRoute.query -->
        <client-only>
            <threeDcanvas :rollOnMount="true" :Objects="!$route.params.id || ($route.params.id == 'classic') ? store.diceSets[0].dies.map(e => store.dice[e]) : store.diceSets[$route.params.id].dies.map(e => store.dice[e])" />
                <!-- store.currentDice -->
        </client-only>

        <!-- TODO: Bring back support for the old-style pseudo-3d css dice??? -->
        <!-- <Dice /> -->

        <transition name="fade">
            <div v-if="!store.rolling" class="absolute z-50 bottom-0 w-full mb-6 flex justify-center" :style="'bottom:'+ (store.safeAreaInset.bottom+store.safeAreaPadding) +'px'">

                <div class="flex flex-col justify-center">
                    <div class="flex flex-col items-center pb-2 mb-2 border-b border-gray-500 border-opacity-50">
                        <div @click="throwDice()" class="btnapp btn_large hover:scale-105 transition cursor-pointer uppercase whitespace-nowrap">ROLL</div>
                        <!-- <div class="absolute text-black text-center" style="top:-50%">Score: {{scoreResult}}</div> -->
                    </div>

                    <!-- BUTTON: ROLL -->
                    <div class="relative flex justify-center items-center">

                        <div class="text-lg">{{ store.diceSets[$route.params.id && $route.params.id != 'classic' ? $route.params.id : 0].name }}</div>

                        <div class="absolute right-full z-50 flex justify-center">
                            <NuxtLink :to="'/roll/'+($route.params.id && $route.params.id > 0 && !isNaN(Number($route.params.id)) && store.diceSets[$route.params.id] ? Number($route.params.id)-1 : 0)"
                            class="text-sm p-2 hover:scale-110 transition-transform whitespace-nowrap" style="padding-top: 0.25rem !important; padding-bottom: 0.25rem !important">
                                &lsaquo; Prev
                            </NuxtLink>
                        </div>
                        <div class="absolute left-full z-50 flex justify-center">
                            <NuxtLink :to="'/roll/'+($route.params.id && !isNaN(Number($route.params.id)) && store.diceSets[$route.params.id] ? Number($route.params.id)+1 : 1)"
                            class="text-sm p-2 hover:scale-110 transition-transform whitespace-nowrap" style="padding-top: 0.25rem !important; padding-bottom: 0.25rem !important">
                                Next &rsaquo;
                            </NuxtLink>
                        </div>
                    </div>

                    <div class="relative flex justify-center items-center m-auto">
                        <NuxtLink :to="'/sets/'+($route.params.id && !isNaN(Number($route.params.id) && store.diceSets[$route.params.id]) ? $route.params.id : 0)"
                        class="text-sm btnapp-Inverted hover:scale-110 transition-transform whitespace-nowrap" style="padding-top: 0.25rem !important; padding-bottom: 0.25rem !important">
                            Dice Details
                        </NuxtLink>

                        <div @click="addToCart()" tabindex=0 class="btnapp-Inverted flex items-center text-white uppercase hover:scale-105 transition cursor-pointer textInGroupTransitionFix" style="padding-top: 0.25rem !important; padding-bottom: 0.25rem !important">
                            <span class="text-lg font-bold mr-1">+</span><IconsBase name="cart" class="w-3 sm:w-4 h-auto transform scale-125 group-hover:scale-150 transition-transform mr-1" />
                        </div>
                    </div>

                </div>
            </div>
        </transition>
    </div>
</template>