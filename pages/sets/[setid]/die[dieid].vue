<script setup>
const router = useRouter()
const currentRoute = useRoute()
import { usePictodiceAppStore } from '~/stores/app'
const store = usePictodiceAppStore()
const config = useRuntimeConfig()
definePageMeta({
    title: 'Die',
    breadcrumb: 'Die #%dieid%',
    scrollableArea: 'PageDie'
})
</script>

<template>
    <div id="PageDie" class="w-full h-full relative flex flex-col items-center overflow-auto scrollable">

        <header class="app-width-max app-padding-x app-padding-x w-full my-8 flex items-end">
            <h1 class="text-3xl font-bold">Die #{{ currentRoute.params.dieid }}</h1>
        </header>

        <main class="app-width-max app-padding-x w-full flex flex-col md:flex-row">

            <section class="flex-1 column_height card card_padding flex justify-center items-center mb-24">
                <header class="flex items-center mb-2 md:mb-8">
                    <h2 class="mr-4 ">Die Faces</h2>
                    <h3 class="opacity-70">({{ store.diceSets[currentRoute.params.setid].dies.length }})</h3>
                </header>

                <client-only>
                    <StaggeredTransition animType='slideUp' :duration="50" tag="div" class="w-full h-full gap-4 grid auto-rows-min justify-center" style="grid-template-columns: repeat(auto-fit, minmax(16rem, auto))">
                        <div v-for="(face, index) in store.dice[currentRoute.params.dieid].faces" :key="'face-'+index" :data-index="index"
                        class="flex justify-center">
                            <div class="w-48 py-8 pb-4 flex flex-col justify-center items-center">

                                <div class="rounded-lg border-2 border-[color:var(--color-primary)] hover:bg-white hover:bg-opacity-60 transition w-48 h-48 overflow-hidden"
                                :style="[
                                        face.text_color ? 'color: '+face.text_color : 'color: black',
                                        face.bg_color ? 'background-color: '+face.bg_color : 'background-color: white'
                                    ]">
                                    <div v-if="face.type == 'text'"
                                    class="w-full h-full flex justify-center items-center">
                                        {{ face.text_src }}
                                    </div>
                                    <div v-else-if="face.type == 'image'" class="w-full h-full flex justify-center items-center">
                                        <img :src="config.app.baseURL+'images/'+face.image_src" class="dice_preview" />
                                    </div>
                                </div>

                                <!-- DETAILS BOX -->
                                <div v-if="store.dice[currentRoute.params.dieid].type == 'custom'" class="w-full p-4 rounded text-lg bg-gray-100">
                                    <div class="flex justify-between">Type: {{ face.type }}<div class="border border-black w-10 h-10 p-1 rounded-full">=</div></div>
                                    <div>BG Color: []</div>
                                </div>
                            </div>
                        </div>
                    </StaggeredTransition>
                </client-only>

                <!--
                <client-only>
                    <threeDcanvas :Objects="[store.dice[currentRoute.params.dieid]]" :showDevTools="true" :screenshotMode="true" class="flex-1" />
                </client-only>
                -->

                <div class="relative flex justify-end items-center my-3">
                    <NuxtLink :to="'/sets/' + currentRoute.params.setid" class="btnapp btn_large uppercase" v-motion-slide-bottom>
                        Back to Set
                    </NuxtLink>
                </div>

            </section>


        </main>

    </div>
</template>