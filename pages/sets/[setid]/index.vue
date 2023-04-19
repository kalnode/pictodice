<template>
    <div class="w-full h-full relative flex flex-col items-center overflow-auto">

        <header class="app-width w-full my-8 flex items-center">
            <h1 class="text-3xl font-bold">{{ store.diceSets[currentRoute.params.setid].name }}</h1>
            <h3 class="ml-8 opacity-70">Dice Set #{{currentRoute.params.setid}}</h3>
        </header>

        <main class="app-width w-full flex flex-col md:flex-row">

            <!-- TODO: For sections below, we use a min-height:calc() on this to get nice looking height for whatever column is shorter in height.
            Is there a better way? Must we use calc()? If we must, then can we pass a number in inside of a hard 16em (equivalent of header height + some extra breathing space). -->

            <div class="md:w-1/2 sm:mr-4">
                <section class="card card_padding flex flex-col justify-end items-center" style="min-height:calc(100vh - 16em)">
                    <NuxtLink to="/roll?classic" tabindex=-1 class="flex-1 flex flex-col items-center my-4 p-4">
                        <div class="flex-1 mb-4 flex transition hover:scale-105 space-x-4 p-12">
                            <IconsBase name="die" class="w-12 h-auto" />
                            <IconsBase name="die" class="w-12 h-auto" />
                        </div>
                    </NuxtLink>

                    <div class="relative flex justify-end items-center mb-3">
                        <NuxtLink to="/roll?classic" class="p-4">
                            <div class="btn_picto btn_large uppercase" v-motion-slide-right>Roll</div>
                        </NuxtLink>
                        <div @click="selectSet()" tabindex=0 class="p-4">
                            <div class="btn_picto btn_small text-sm whitespace-nowrap uppercase" v-motion-slide-left>Set Preset & Roll</div>
                        </div>
                    </div>

                    <!--
                    <nav class="relative flex justify-end items-center">
                        <div @click="selectSet()" class="z-50">
                            <div class="btn_picto btn_large mb-3" v-motion-pop>Roll</div>
                        </div>
                        <div @click="selectSet()" class="absolute z-0 ml-4" style="left:100%">
                            <div class="btn_picto btn_small mb-3 text-sm whitespace-nowrap" v-motion-slide-left>Set Preset & Roll</div>
                        </div>
                    </nav>
                    -->
                </section>
            </div>

            <section class="flex-1 card card_padding flex justify-center items-center mb-24" style="min-height:calc(100vh - 16em)">
                <header class="flex flex-wrap items-center mb-8">
                    <h2 class="text-3xl font-bold">Dies</h2>
                    <h3 class="ml-4 opacity-70">({{ store.diceSets[currentRoute.params.setid].dies.length }})</h3>
                </header>

                <client-only>
                    <StaggeredTransition animType='slideUp' :duration="50" tag="div" class="w-full h-full gap-6 grid auto-rows-min" style="grid-template-columns: repeat(auto-fit, minmax(14rem, auto))">
                        <div v-for="(die, index) in store.diceSets[currentRoute.params.setid].dies" :key="'die-'+index" :data-index="index"
                        class="max-h-48 rounded-lg border-2 border-teal-800 hover:bg-white hover:bg-opacity-60 transition group">
                            <NuxtLink :to="'/sets/'+currentRoute.params.setid + '/die' + die" class="w-full h-full py-8 pb-4 flex flex-col justify-center items-center">
                                <div class="mt-4 mb-8 flex-1 flex items-center">
                                    <IconsBase name="die" class="w-16 h-auto transition group-hover:scale-105" />
                                </div>
                                <div class="inline-block px-4 pb-4 text-lg text-black">
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
            <div @click="selectSet()" class="z-50">
                <div class="btn_picto btn_large mb-3" v-motion-pop>Roll</div>
            </div>
            <div @click="selectSet()" class="absolute z-0 ml-4" style="left:100%">
                <div class="btn_picto btn_small mb-3 text-sm whitespace-nowrap" v-motion-slide-left>Set Preset & Roll</div>
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

useHead({
    title: "Dice Set #" + currentRoute.params.setid,
    meta: [
        {
            name: 'description',
            content: 'blalala'
        }
    ],
})

definePageMeta({
    // TODO: We want to load dynamic data
    // Tried this, no work
    //breadcrumbTitle: (currentRoute) => 'Set #' + currentRoute.params.setid,

    // FOR NOW:
    title: 'Set #',
    breadcrumb: 'Set #%setid%'
})

async function selectSet() {
    store.currentDiceSet = currentRoute.params.setid

    // TODO: Do we need await here? Does it a serve a purpose? Perhaps it stops user from doing other stuff just before link loads????
    await navigateTo('/roll') // TODO: Can we use proper named route here, instead of raw string with slash?

}
</script>