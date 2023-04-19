<script setup>
const router = useRouter()
const currentRoute = useRoute()
import { usePhotodiceAppStore } from '~/stores/app'
const store = usePhotodiceAppStore()

definePageMeta({
    title: 'Die',
    breadcrumb: 'Die #%dieid%'
})
</script>

<template>
    <div class="w-full h-full relative flex flex-col items-center overflow-auto">

        <header class="app-width w-full my-8 flex items-end">
            <h1 class="text-3xl font-bold">Die #{{ currentRoute.params.dieid }}</h1>
        </header>

        <main class="app-width w-full flex flex-col md:flex-row">

            <!-- TODO: For sections below, we use a min-height:calc() on this to get nice looking height for whatever column is shorter in height.
            Is there a better way? Must we use calc()? If we must, then can we pass a number in inside of a hard 16em (equivalent of header height + some extra breathing space). -->

            <!--
            <div class="md:w-1/2 sm:mr-4">
                <section class="card card_padding flex flex-col justify-end items-center" style="min-height:calc(100vh - 16em)">
                    <div class="flex-1 flex flex-col items-center my-4 p-4">
                        <div class="flex-1 mb-4 flex transition hover:scale-105 space-x-4 p-12">
                            <IconsBase name="die" class="w-12 h-auto" />
                            <IconsBase name="die" class="w-12 h-auto" />
                        </div>
                    </div>
                </section>
            </div>
            -->

            <section class="flex-1 card card_padding flex justify-center items-center mb-24" style="min-height:calc(100vh - 16em)">
                <header class="flex flex-wrap items-center mb-8">
                    <h2 class="text-3xl font-bold">Faces</h2>
                    <h3 class="ml-4 opacity-70">({{ store.diceSets[currentRoute.params.setid].dies.length }})</h3>
                </header>

                <client-only>
                    <StaggeredTransition animType='slideUp' :duration="50" tag="div" class="w-full h-full gap-4 grid auto-rows-min justify-center" style="grid-template-columns: repeat(auto-fit, minmax(16rem, auto))">
                        <div v-for="(face, index) in store.dice[currentRoute.params.dieid].faces" :key="'face-'+index" :data-index="index"
                        class="flex justify-center">
                            <div class="w-48 py-8 pb-4 flex flex-col justify-center items-center">
                                <div
                                :style="[
                                    face.text_color ? 'color: '+face.text_color : 'color: black',
                                    face.bg_color ? 'background-color: '+face.bg_color : 'background-color: white'
                                ]"
                                class="rounded-lg border-2 border-teal-800 hover:bg-white hover:bg-opacity-60 transition w-48 h-48 flex justify-center items-center">
                                    {{ face.text_src }}
                                </div>
                                <div v-if="store.dice[currentRoute.params.dieid].type == 'custom'" class="w-full p-4 rounded text-lg text-black bg-gray-100">
                                    <div class="flex justify-between">Type: {{ face.type }}<div class="border border-black w-10 h-10 p-1 rounded-full">=</div></div>
                                    <div>BG Color: []</div>
                                </div>
                            </div>
                        </div>
                    </StaggeredTransition>
                </client-only>

                <div class="relative flex justify-end items-center my-3">
                    <NuxtLink :to="'/sets/' + currentRoute.params.setid" class="p-4">
                        <div class="btn_picto btn_large uppercase" v-motion-slide-bottom>Back to Set</div>
                    </NuxtLink>
                </div>

            </section>


        </main>

    </div>
</template>