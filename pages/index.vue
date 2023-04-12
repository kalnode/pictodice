<script setup>
definePageMeta({
    title: 'Pictodice'
})
</script>
<template>
    <div id="indexWrapper" class="w-full h-full p-4 flex flex-col items-center text-teal-800 overflow-hidden">

        <div class="h-1/3 flex justify-center items-center">
            <Logo />
        </div>

        <nav class="w-full flex flex-col sm:flex-row sm:justify-center overflow-auto">

            <!-- LEFT --> 
            <section class="h-full flex flex-col justify-end items-center mb-4 sm:mb-0 sm:mr-4 p-8">
                <NuxtLink to="/roll" tabindex=-1 class="flex flex-col items-center">
                    <svg class="mb-4 w-16 h-auto transition hover:scale-105" fill="currentColor" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="m0 119.11h392.89v392.89h-392.89zm25.387-25.387 93.726-93.726h374.93l-93.726 93.726zm486.61-75.769v374.93l-93.726 93.726v-374.93z" />
                    </svg>
                    <div class="btn_picto large mb-3">Roll Dice</div>
                </NuxtLink>

                <NuxtLink to="/sets" tabindex=-1>
                    <div class="p-2 px-4 inline rounded-full text-teal-800 hover:scale-105 hover:underline transition cursor-pointer">Change Set</div>
                </NuxtLink>
            </section>

            <!-- RIGHT -->
            <div>

                <section class="mb-4 pt-8 flex justify-center">
                    <NuxtLink to="/roll?classic" tabindex=-1 class="flex flex-col items-center">
                        <div class="mb-4 flex transition hover:scale-105 space-x-4">
                            <svg class="w-12 h-auto" fill="currentColor" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="m0 119.11h392.89v392.89h-392.89zm25.387-25.387 93.726-93.726h374.93l-93.726 93.726zm486.61-75.769v374.93l-93.726 93.726v-374.93z" />
                            </svg>
                            <svg class="w-12 h-auto " fill="currentColor" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="m0 119.11h392.89v392.89h-392.89zm25.387-25.387 93.726-93.726h374.93l-93.726 93.726zm486.61-75.769v374.93l-93.726 93.726v-374.93z" />
                            </svg>
                        </div>
                        <div class="btn_picto small">Roll Classic Dice</div>
                    </NuxtLink>
                </section>

                <section class="pt-8 flex justify-center">
                    <NuxtLink to="/roll?classic" tabindex=-1>
                        <div class="btn_picto small">Create Custom Dice</div>
                    </NuxtLink>
                </section>
            </div>
        </nav>
    </div>
</template>
<style scoped>
section {
    @apply w-full xs:w-auto bg-white bg-opacity-40 rounded-lg p-4 xs:p-6 md:p-10;
}

.btn_picto {
    @apply rounded-full bg-teal-800 hover:bg-teal-700 text-white hover:scale-105 transition cursor-pointer;
}

.btn_picto.small {
    @apply p-2 px-4 text-xs xs:text-sm md:text-lg;
}

.btn_picto.large {
    @apply p-4 px-8 text-sm xs:text-base md:text-xl;
}

@media screen and (max-height: 500px) {

    #indexWrapper {
        flex-direction: row;
        /*@apply flex-row;*/
    }
}
</style>