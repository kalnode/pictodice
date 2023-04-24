<template>
    <div class="w-full h-full relative flex flex-col items-center overflow-auto">

        <header class="app-width-max app-padding-x w-full my-8 flex flex-wrap items-center">
            <h1 class="text-3xl font-bold mr-4">{{ store.diceSets[currentRoute.params.setid].name }}</h1>
            <h3 class="opacity-70">Dice Set #{{currentRoute.params.setid}}</h3>
        </header>

        <main class="app-width-max app-padding-x w-full flex flex-col md:flex-row">

            <!-- TODO: For sections below, we use class diceSet_column on this to get nice looking height for whatever column is shorter in height.
            Is there a better way? Must we use calc()? If we must, then can we pass a number in inside of a hard 16em (equivalent of header height + some extra breathing space). -->

            <div class="md:w-1/2 sm:mr-4 mb-4 md:mb-0">
                <section class="diceSet_column card card_padding flex flex-col justify-end items-center">
                    <div class="flex-1 w-full flex flex-col justify-center mb-4">
                        <!-- focus:scale-105 active:scale-105 hover:scale-105 transition-transform -->
                        <!--
                        <div class="flex space-x-4 p-8 md:p-12">
                            <IconsBase name="die" class="w-12 h-auto" />
                            <IconsBase name="die" class="w-12 h-auto" />
                        </div>
                        -->
                        <!-- <nuxt-img :src="'images/dice_screenshots/test1.png'" class="object-contain p-8 md:p-12 drop-shadow-lg" /> -->

                        <client-only>
                            <threeDcanvas v-if="showPage" :Objects="store.diceSets[currentRoute.params.setid].dies.map(e => store.dice[e])" class="flex-1" />
                        </client-only>
                    </div>

                    <div class="relative flex flex-col md:flex-row md:justify-end items-center mb-3">
                        <!--
                        <NuxtLink to="/roll?classic" v-motion-slide-right class="mb-4 md:mb-0 md:mr-4 btnapp btn_large uppercase">
                            Roll
                        </NuxtLink>
                        -->
                        <div @click="throwDice()" tabindex=0 v-motion-slide-right class="mb-4 md:mb-0 md:mr-4 btnapp btn_large uppercase">
                            Roll
                        </div>
                        <div @click="selectSet()" tabindex=0 class="btnapp btn_small text-sm whitespace-nowrap uppercase" v-motion-slide-left>
                            Set Preset & Roll
                        </div>

                        <!--
                        <div @click="takeScreenshot()" tabindex=0 class="btnapp btn_small text-sm whitespace-nowrap uppercase" v-motion-slide-left>
                            Take Screenshot
                        </div>
                        -->
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

            <section class="flex-1 card card_padding flex justify-center items-center mb-24">
                <header class="flex items-center mb-8">
                    <h2 class="text-3xl font-bold mr-4">Dies</h2>
                    <h3 class="opacity-70">({{ store.diceSets[currentRoute.params.setid].dies.length }})</h3>
                </header>

                <client-only>
                    <StaggeredTransition animType='slideUp' :duration="50" tag="div" class="diceSet_column w-full h-full gap-6 grid auto-rows-min">
                        <div v-for="(die, index) in store.diceSets[currentRoute.params.setid].dies" :key="'die-'+index" :data-index="index"
                        class="rounded-lg border-2 border-[color:var(--color-primary)] focus:bg-white active:bg-white hover:bg-white focus:bg-opacity-60 active:bg-opacity-60 hover:bg-opacity-60 transition-colors group">
                            <NuxtLink :to="'/sets/'+currentRoute.params.setid + '/die' + die"
                             class="w-full h-full flex flex-col justify-center items-center overflow-hidden p-4 md:p-8">
                                <!--
                                <div class="mb-4 md:mb-8 flex-1 flex items-center">
                                    <IconsBase name="die" class="w-16 h-auto transition group-hover:scale-105" />
                                </div>
                                -->
                                <img :src="config.app.baseURL+'images/dice_screenshots/test1.png'" class="max-h-32 object-contain px-8 md:px-0 py-8 mb-8 group-focus:scale-105 group-active:scale-105 group-hover:scale-105 transition-transform drop-shadow-lg" />
                                <div class="absolute bottom-0 inline-block px-4 pb-4 text-lg">
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
import { usePhotodiceAppStore } from '~/stores/app'
const store = usePhotodiceAppStore()
import { ref } from 'vue'
const { $event } = useNuxtApp()
const config = useRuntimeConfig()
const showPage = ref(true)


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
    breadcrumb: 'Set #%setid%'
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