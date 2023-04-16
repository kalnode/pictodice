<template>
    <div class=" w-full h-full flex justify-center items-center overflow-hidden">
        <div class="flex flex-col md:flex-row">

            <section class="card h-full flex flex-col justify-end items-center mb-4 sm:mb-0 sm:mr-4 p-8">
                <div @click="selectSet()" class="flex flex-col items-center">
                    <IconsBase name="die" class="mb-4 w-16 h-auto transition hover:scale-105" />
                    <div class="btn_picto large mb-3">Roll</div>
                </div>

                <div @click="selectSet()" class="flex flex-col items-center">
                    <IconsBase name="die" class="mb-4 w-16 h-auto transition hover:scale-105" />
                    <div class="btn_picto large mb-3">Set as Preset and Roll</div>
                </div>
            </section>

            <section class="flex overflow-auto">
                <div class="flex flex-col overflow-auto space-y-4">
                    <div v-for="(die, index) in store.diceSets[currentRoute.params.setid].dies" :key="'store-'+index"
                    class="card flex justify-center items-center">
                        <IconsBase name="die" class="mb-4 w-16 h-auto transition hover:scale-105" />
                        <NuxtLink :to="'/sets/'+currentRoute.params.setid + '/die' + die" class="inline-block p-3 text-lg bg-white hover:bg-gray-100 text-black rounded m-1 cursor-pointer">
                            {{ die }}
                        </NuxtLink>
                    </div>
                </div>
            </section>

        </div>

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

    const what = "hehjehe"

definePageMeta({
    // TODO: We want to load dynamic data
    // Tried this, no work
    //breadcrumbTitle: (currentRoute) => 'Set #' + currentRoute.params.setid,

    // FOR NOW:
    title: 'Set #',
    breadcrumb: 'Set #%setid%'
})

onMounted ( () => {
    //route.meta.breadcrumbTitle = "habadoo"
})

async function selectSet() {
    store.currentDiceSet = currentRoute.params.setid

    // TODO: Do we need await here? Does it a serve a purpose? Perhaps it stops user from doing other stuff just before link loads????
    await navigateTo('/roll') // TODO: Can we use proper named route here, instead of raw string with slash?

}
</script>