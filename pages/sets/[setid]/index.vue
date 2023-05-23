<template>
    <div id="PageDiceSet" class="w-full h-full relative flex flex-col items-center scrollable">

        <header class="app-width-max app-padding-x w-full my-6 flex flex-wrap items-baseline">
            <h1 class="text-3xl font-bold mr-4">{{ store.diceSets[currentRoute.params.setid].name }}</h1>
            <h3 class="opacity-70">Dice Set #{{currentRoute.params.setid}}</h3>
        </header>

        <main class="app-width-max app-padding-x w-full flex flex-col md:flex-row">

            <!-- LEFT SIDE / ROLLING AREA -->
            <div class="md:w-2/3 md:mr-4 mb-8 md:mb-0" style="min-height: 10rem">
                <section class="h-full sm:h-auto column_height card flex flex-col justify-end items-center overflow-hidden">
                    <div class="flex-1 w-full h-full flex flex-col justify-center">
                        <!-- focus:scale-105 active:scale-105 hover:scale-105 transition-transform -->
                        <!--
                        <div class="flex space-x-4 p-8 md:p-12">
                            <IconsBase name="die" class="w-12 h-auto" />
                            <IconsBase name="die" class="w-12 h-auto" />
                        </div>
                        -->
                        <!-- <nuxt-img :src="'images/dice_screenshots/test1.png'" class="object-contain p-8 md:p-12 drop-shadow-lg" /> -->

                        <client-only>
                            <threeDcanvas :rollOnMount="true" :Objects="store.diceSets[currentRoute.params.setid].dies.map(e => store.dice[e])" class="flex-1 w-full h-full" />
                        </client-only>
                    </div>

                    <div class="relative w-full flex flex-col md:flex-row justify-center md:items-center p-4 sm:p-6">
                        
                        <div class="flex items-center">
                            <div @click="throwDice()" tabindex=0 class="z-50 btnapp btn_large uppercase hover:scale-105 transition cursor-pointer textInGroupTransitionFix">
                                Roll
                            </div>
                            <NuxtLink :to="'/roll/'+currentRoute.params.setid"
                            class="hover:scale-105 transition cursor-pointer p-2">
                                <IconsBase name="fullscreen" class="w-5 sm:w-6 h-auto transform scale-125 group-hover:scale-150 transition-transform mr-1" />
                            </NuxtLink>
                        </div>

                        <!--
                        <div v-motion-slide-left class="btn_small w-full -right-10 sm:-right-18 absolute z-0" style="padding-right: 1em">
                            <NuxtLink :to="{ name: 'Sets'}"
                            class="w-full flex-1 ml-4 flex justify-end rounded-full bg-[color:var(--color-primary)] bg-opacity-10 group hover:translate-x-2 transition-transform"
                            style="padding: 0.8em">
                                <span class="invisible">-</span>
                                <IconsBase name="gear" class="w-5 sm:w-6 h-auto text-white transform scale-125 group-hover:scale-150 transition-transform" />
                            </NuxtLink>
                        </div>
                        -->
                        <!-- 
                        <div v-motion-slide-right>
                            <div @click="throwDice()" tabindex=0 class="mb-4 md:mb-0 md:mr-4 btnapp btn_large uppercase transition hover:scale-105 ">
                                Roll
                            </div>
                        </div>
                        <div v-motion-slide-left>
                            <button @click="selectSet()" tabindex=0 class="btnapp btn_small text-sm whitespace-nowrap uppercase transition hover:scale-105 ">
                                Set Preset & Roll
                            </button>
                        </div>
                        -->
                        <!--
                        <div @click="takeScreenshot()" tabindex=0 class="btnapp btn_small text-sm whitespace-nowrap uppercase" v-motion-slide-left>
                            Take Screenshot
                        </div>
                        -->
                        <div @click="addToCart()" tabindex=0 class="btnapp-Inverted btn_small flex items-center text-white absolute right-2 uppercase hover:scale-105 transition cursor-pointer textInGroupTransitionFix">
                            <span class="text-lg font-bold mr-1">+</span><IconsBase name="cart" class="w-5 sm:w-6 h-auto transform scale-125 group-hover:scale-150 transition-transform mr-1" />
                        </div>
                    </div>

                    <!--
                    <nav class="relative flex justify-end items-center">
                        <div @click="selectSet()" class="z-50">
                            <div class="btnapp btn_large mb-3" v-motion-pop>Roll</div>
                        </div>
                        <div @click="selectSet()" class="absolute z-0 ml-4" style="left:100%">
                            <div class="btnapp btn_small mb-3 text-sm whitespace-nowrap" v-motion-slide-left>Set Preset & Roll</div>
                        </div>
                    </nav>
                    -->
                </section>
            </div>

            <!-- RIGHT-SIDE, DIE LIST -->
            <div class="md:w-1/3" style="min-height: 10rem">
                <section class="column_height flex-1 card card_padding flex justify-center items-center mb-24">
                    <header class="flex items-center mb-8">
                        <h2 class="mr-4">Set Dies</h2>
                        <h3 class="opacity-70">({{ store.diceSets[currentRoute.params.setid].dies.length }})</h3>
                    </header>

                    <client-only>
                        <StaggeredTransition animType='slideUp' :duration="50" tag="div" class="w-full h-full grid auto-rows-min justify-center">
                            <div v-for="(die, index) in store.diceSets[currentRoute.params.setid].dies" :key="'die-'+index" :data-index="index"
                            :class="(index+1) < store.diceSets[currentRoute.params.setid].dies.length ? 'border-b border-gray-300' : ''">
                            <!-- bg-white bg-opacity-10 focus:bg-white active:bg-white hover:bg-white focus:bg-opacity-60 active:bg-opacity-60 hover:bg-opacity-60 transition-colors -->
                            <!-- border-2 border-[color:var(--color-primary)] -->
                                <NuxtLink :to="'/sets/'+currentRoute.params.setid + '/die' + die"
                                class="noHoverOpacity w-full h-full flex flex-col justify-center items-center overflow-hidden p-8 pt-11 pb-7 group">
                                    <!--
                                    <div class="mb-4 md:mb-8 flex-1 flex items-center">
                                        <IconsBase name="die" class="w-16 h-auto transition group-hover:scale-105" />
                                    </div>
                                    -->
                                    <img :src="config.app.baseURL+'images/dice_screenshots/dies/'+die+'.png'" style="max-width: 8rem;" class="dice_preview object-contain mb-8 group-focus:scale-105 group-active:scale-105 group-hover:scale-105 transition-transform" />
                                    <div class="text-lg textInGroupTransitionFix group-hover:underline whitespace-nowrap">
                                        {{ store.dice[die].name }}
                                    </div>
                                </NuxtLink>
                            </div>
                        </StaggeredTransition>
                    </client-only>

                    <!--
                    <div class="flex flex-col overflow-auto space-y-4">
                        <div v-for="(die, index) in store.diceSets[currentRoute.params.setid].dies" :key="'store-'+index"
                        class="card flex justify-center items-center">
                            <IconsBase name="die" class="mb-4 w-16 h-auto transition hover:scale-105" />
                            <NuxtLink :to="'/sets/'+currentRoute.params.setid + '/die' + die" class="inline-block p-3 text-lg bg-white hover:bg-gray-100 text-black rounded m-1 cursor-pointer">
                                {{ die }}
                            </NuxtLink>
                        </div>
                    </div>
                    -->
                </section>
            </div>
        </main>

        <!--
        <nav class="relative flex justify-end items-center">
            <div @click="selectSet()" class="z-50 btnapp btn_large mb-3" v-motion-pop>Roll</div>
            <div @click="selectSet()" class="absolute z-0 ml-4" style="left:100%">
                <div class="btnapp btn_small mb-3 text-sm whitespace-nowrap" v-motion-slide-left>Set Preset & Roll</div>
            </div>
        </nav>
        -->

    </div>
</template>
<script setup>

// DICE SET HOME VIEW

import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const currentRoute = useRoute()
import { usePictodiceAppStore } from '~/stores/app'
const store = usePictodiceAppStore()
import { ref } from 'vue'
const { $event } = useNuxtApp()
const config = useRuntimeConfig()
const showPage = ref(false)


function throwDice() {
    $event('rollDice')
}

/*
useHead({
    title: "Dice Set #" + currentRoute.params.setid,
    meta: [
        {
            name: 'description',
            content: 'blalala'
        }
    ],
})
*/

definePageMeta({
    // TODO: We want to load dynamic data
    // Tried this, no work
    //breadcrumbTitle: (currentRoute) => 'Set #' + currentRoute.params.setid,

    // FOR NOW:
    title: 'Set #',
    breadcrumb: 'Set #%setid%',
    scrollableArea: 'PageDiceSet'
})

onMounted ( () => {

    // TODO: We have a timeout here as a bandaid fix for loading the 3d canvas.
    // Scrutinize this and eliminate timeout.
    setTimeout(() => {
        showPage.value = true
    }, 500)
})

async function selectSet() {
    showPage.value = false
    store.currentDiceSet = currentRoute.params.setid
    // TODO: Do we need await here? Does it a serve a purpose? Perhaps it stops user from doing other stuff just before link loads????
    navigateTo('/roll') // TODO: Can we use proper named route here, instead of raw string with slash?

}

async function takeScreenshot() {


}
</script>
<style scoped>
@media screen and (min-width: 768px) {
    .diceSet_column {
        min-height:calc(100vh - 16em)
    }
}
</style>