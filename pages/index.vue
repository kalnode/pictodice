<script setup>
import { usePhotodiceAppStore } from '@/stores/app'
const store = usePhotodiceAppStore()
definePageMeta({
    title: 'Pictodice'
})
</script>
<template>
    <div id="indexWrapper" class="w-full h-full app-padding-x flex flex-col items-center text-teal-800 overflow-auto">

        <div class="h-1/3 p-8 flex justify-center items-center">
            <Logo />
        </div>

        <nav class="w-full max-w-4xl pb-48">
            <div class="w-full flex flex-col sm:flex-row sm:justify-center">
                <!-- LEFT -->
                <section v-motion-slide-left :delay="700" class="card card_padding flex-1 flex justify-end items-center mb-4 sm:mr-4">
                    <!-- TODO: Ideally we want to use a named route with params, but apparently that is ill-advised, and now throws an error (from VueRouter) -->
                    <!-- <NuxtLink :to="{ name: 'Roll', params: { 'set': 'classic' } }" class="flex flex-col items-center"> -->
                    <!-- SEE: https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 -->
                    <!-- FOR NOW: This works, we go to a raw path: -->
                    <NuxtLink to="/roll?classic" class="flex-1 flex flex-col items-center" tabindex=-1>
                        <div class="flex-1 mb-4 flex transition hover:scale-105 space-x-4 p-4 pb-8 sm:p-12">
                            <IconsBase name="die" class="w-12 h-auto" />
                            <IconsBase name="die" class="w-12 h-auto" />
                        </div>
                    </NuxtLink>
                    <NuxtLink to="/roll?classic">
                        <div class="btn_picto btn_large uppercase whitespace-nowrap">Roll Classic</div>
                    </NuxtLink>
                </section>
                <!-- RIGHT -->
                <section v-motion-slide-right :delay="500" class="card card_padding flex-1 flex justify-end items-center mb-4">
                    <div class="flex-1 relative flex items-end">
                        
                        <!-- PRESET EXISTS -->
                        <div v-if="store.currentDiceSet != 0">
                            <NuxtLink :to="{ name: 'Roll'}" class="flex flex-col items-center z-50" tabindex=-1>
                                <div class="mb-4 p-6 md:p-12 transition hover:scale-105">
                                    <IconsBase name="die" class="w-16 h-auto" />
                                </div>
                            </NuxtLink>

                            <div class="relative flex items-center">
                                <NuxtLink :to="{ name: 'Roll'}" class="z-50">
                                    <div class="btn_picto btn_large uppercase">Roll Preset</div>
                                </NuxtLink>
                                <!-- TODO: v-motion conflicts with hover transform... we want both. How to make it work? -->
                                <!-- v-motion-slide-left :delay="700" -->
                                <NuxtLink v-if="store.currentDiceSet != 0" :to="{ name: 'Sets'}"
                                class="w-3/4 -right-12 sm:-right-14 absolute z-0 btn_large flex justify-end rounded-full bg-white group hover:translate-x-2 transition-transform"
                                style="padding-right: 1em">
                                    <!-- ml-16 sm:ml-24 -->
                                    <span class="invisible">-</span>
                                    <IconsBase name="gear" class="w-5 sm:w-6 h-auto transform scale-125 text-teal-800 group-hover:scale-150 transition-transform" />
                                </NuxtLink>
                            </div>
                        </div>

                        <div v-else>
                            <NuxtLink :to="{ name: 'Sets'}" class="flex flex-col items-center z-50" tabindex=-1>
                                <div class="border-2 border-teal-800 hover:bg-white hover:scale-105 transition-all border-dashed mb-8 p-10 flex-1 flex flex-col justify-center items-center">
                                    <div class="text-7xl font-bold">?</div>
                                    <div class="whitespace-nowrap">Select a Preset</div>
                                </div>
                            </NuxtLink>

                            <NuxtLink :to="{ name: 'Sets'}">
                                <div class="btn_picto btn_large uppercase whitespace-nowrap">Roll Preset</div>
                            </NuxtLink>
                        </div>
                    </div>

                    <!-- 
                    <NuxtLink :to="{ name: 'Sets'}" tabindex=-1>
                        <div class="mt-4 p-2 text-teal-800 hover:scale-105 hover:underline transition cursor-pointer">Select new preset</div>
                    </NuxtLink>
                    -->
                </section>
            </div>



            <div class="w-full flex flex-col sm:flex-row sm:justify-center">
                <!-- LEFT --> 
                <section v-motion-slide-bottom :delay="700" class="flex-1 card card_padding mb-4 sm:mb-0 sm:mr-4 flex justify-center items-center overflow-hidden">
                    <!-- TODO: Ideally we want to use a named route with params, but apparently that is ill-advised, and now throws an error (from VueRouter) -->
                    <!-- <NuxtLink :to="{ name: 'Roll', params: { 'set': 'classic' } }" tabindex=-1 class="flex flex-col items-center"> -->
                    <!-- SEE: https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 -->
                    <!-- FOR NOW: This works, we go to a raw path: -->
                    <NuxtLink :to="{ name: 'Sets'}" class="flex-1 flex flex-col justify-end items-center" tabindex=-1>
                        <div class="mb-4 flex transition hover:scale-105 space-x-6 p-6">

                            <div class="flex items-end pr-6 border-r border-teal-600">
                                <div>
                                    <IconsBase name="die" class="w-6 h-auto" />
                                    <IconsBase name="die" class="w-6 h-auto" />
                                </div>
                                <div>
                                    <IconsBase name="die" class="w-6 h-auto" />
                                    <IconsBase name="die" class="w-6 h-auto" />
                                </div>
                            </div>

                            <div class="flex items-end pr-6 border-r border-teal-600">
                                <IconsBase name="die" class="w-10 h-auto" />
                                <IconsBase name="die" class="w-10 h-auto" />
                            </div>

                            <div class="flex items-end">
                                <div>
                                    <IconsBase name="die" class="w-6 h-auto" />
                                    <IconsBase name="die" class="w-6 h-auto" />
                                </div>
                                <div>
                                    <IconsBase name="die" class="w-6 h-auto" />
                                    <IconsBase name="die" class="w-6 h-auto" />
                                </div>
                                <IconsBase name="die" class="w-6 h-auto" />
                            </div>
                        </div>
                    </NuxtLink>
                    <NuxtLink :to="{ name: 'Sets'}">
                        <div class="btn_picto btn_small whitespace-nowrap uppercase">Browse Dice Sets</div>
                    </NuxtLink>
                </section>
                <!-- RIGHT -->
                <section v-motion-slide-bottom :delay="1900" class="flex-1 card card_padding flex justify-center items-center">
                    <NuxtLink :to="{ name: 'Sets'}" class="flex-1 flex flex-col justify-end items-center" tabindex=-1>
                        <div class="mb-2 flex justify-center transition hover:scale-105 space-x-4 p-4">
                            <IconsBase name="pencil" class="w-20 h-auto" />
                        </div>
                    </NuxtLink>
                    <NuxtLink :to="{ name: 'Sets'}">
                        <div class="btn_picto btn_small whitespace-nowrap uppercase">Create Custom Dice</div>
                    </NuxtLink>
                </section>
            </div>


        </nav>
    </div>
</template>
<style scoped>
section {
    @apply w-full xs:w-auto;
}

@media screen and (max-height: 500px) {

    #indexWrapper {
        flex-direction: row;
        /*@apply flex-row;*/
    }
}
</style>