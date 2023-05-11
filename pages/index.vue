<script setup>
import { usePictodiceAppStore } from '@/stores/app'
const store = usePictodiceAppStore()
const config = useRuntimeConfig()
definePageMeta({
    title: 'Pictodice'
})
</script>
<template>
    <div id="indexWrapper" class="w-full h-full app-padding-x flex flex-col items-center overflow-auto">

        <div class="h-1/3 p-8 flex justify-center items-center">
            <Logo tabindex=0 />
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
                        <div class="flex-1 mb-4 flex transition hover:scale-105 space-x-4 p-8 pb-8 sm:p-12">
                            <!--
                            <IconsBase name="die" class="w-12 h-auto" />
                            <IconsBase name="die" class="w-12 h-auto" />
                            -->
                            <img :src="config.app.baseURL+'images/dice_screenshots/test1.png'" class="dice_preview object-contain group-focus:scale-105 group-active:scale-105 group-hover:scale-105 transition-transform" />
                        </div>
                    </NuxtLink>
                        <NuxtLink to="/roll?classic" class="btnapp btn_large hover:scale-105 transition cursor-pointer uppercase whitespace-nowrap textInGroupTransitionFix">
                            Roll Classic
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
                                <NuxtLink :to="{ name: 'Roll'}" class="z-50 btnapp btn_large uppercase hover:scale-105 transition cursor-pointer textInGroupTransitionFix">
                                    Roll Preset
                                </NuxtLink>
                                <!-- TODO: v-motion conflicts with hover transform... we want both. How to make it work? -->
                                <!-- v-motion-slide-left :delay="700" -->
                                <div v-motion-slide-left class="btn_large w-full -right-10 sm:-right-18 absolute z-0" style="padding-right: 1em">
                                    <NuxtLink v-if="store.currentDiceSet != 0" :to="{ name: 'Sets'}"
                                    class="w-full flex-1 ml-4 flex justify-end rounded-full bg-[color:var(--color-primary)] bg-opacity-10 group hover:translate-x-2 transition-transform"
                                    style="padding: 0.8em">
                                        <!-- ml-16 sm:ml-24 -->
                                        <span class="invisible">-</span>
                                        <IconsBase name="gear" class="w-5 sm:w-6 h-auto transform scale-125 group-hover:scale-150 transition-transform" />
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>

                        <div v-else class="flex flex-col">
                            <NuxtLink :to="{ name: 'Sets'}" class="flex flex-col items-center z-50" tabindex=-1>
                                <div class="border-2 border-[color:var(--color-primary)] hover:bg-white hover:scale-105 transition-all border-dashed mb-8 p-10 flex-1 flex flex-col justify-center items-center">
                                    <div class="text-7xl font-bold">?</div>
                                    <div class="whitespace-nowrap textInGroupTransitionFix">Select a Preset</div>
                                </div>
                            </NuxtLink>

                            <NuxtLink :to="{ name: 'Sets'}" class="btnapp btn_large text-center hover:scale-105 transition cursor-pointer uppercase whitespace-nowrap textInGroupTransitionFix">
                                Roll Preset
                            </NuxtLink>
                        </div>
                    </div>

                    <!-- 
                    <NuxtLink :to="{ name: 'Sets'}" tabindex=-1 class="mt-4 p-2 hover:scale-105 hover:underline transition cursor-pointer">
                        Select new preset
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

                            <div class="flex items-end pr-6 border-r border-[color:var(--color-primary)]">
                                <div>
                                    <IconsBase name="die" class="w-6 h-auto" />
                                    <IconsBase name="die" class="w-6 h-auto" />
                                </div>
                                <div>
                                    <IconsBase name="die" class="w-6 h-auto" />
                                    <IconsBase name="die" class="w-6 h-auto" />
                                </div>
                            </div>

                            <div class="flex items-end pr-6 border-r border-[color:var(--color-primary)]">
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
                    <NuxtLink :to="{ name: 'Sets'}" class="btnapp btn_small hover:scale-105 transition cursor-pointer uppercase whitespace-nowrap textInGroupTransitionFix">
                        Browse Dice Sets
                    </NuxtLink>
                </section>
                <!-- RIGHT -->
                <section v-motion-slide-bottom :delay="1900" class="flex-1 card card_padding flex justify-center items-center">
                    <NuxtLink :to="{ name: 'Sets'}" class="flex-1 flex flex-col justify-end items-center" tabindex=-1>
                        <div class="mb-2 flex justify-center transition hover:scale-105 space-x-4 p-4">
                            <IconsBase name="pencil" class="w-20 h-auto" />
                        </div>
                    </NuxtLink>
                    <NuxtLink :to="{ name: 'Sets'}" class="btnapp btn_small hover:scale-105 transition cursor-pointer uppercase whitespace-nowrap textInGroupTransitionFix">
                        Create Custom Dice
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