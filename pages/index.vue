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
            <section v-motion-slide-left :delay="500" class="card card_padding h-full flex flex-col justify-end items-center mb-4 sm:mb-0 sm:mr-4 p-8">
                <NuxtLink :to="{ name: 'Roll'}" tabindex=-1 class="flex flex-col items-center">
                    <IconsBase name="die" class="mb-4 w-16 h-auto transition hover:scale-105" />
                    <div class="btn_picto large mb-3">Roll Dice</div>
                </NuxtLink>
                <NuxtLink :to="{ name: 'Sets'}" tabindex=-1>
                    <div class="p-2 px-4 inline rounded-full text-teal-800 hover:scale-105 hover:underline transition cursor-pointer">Change Set</div>
                </NuxtLink>


            </section>
            <!-- RIGHT -->
            <div>
                <section v-motion-slide-right :delay="700" class="card card_padding mb-4 pt-8 flex justify-center">
                    <!-- TODO: Ideally we want to use a named route with params, but apparently that is ill-advised, and now throws an error (from VueRouter) -->
                    <!-- <NuxtLink :to="{ name: 'Roll', params: { 'set': 'classic' } }" tabindex=-1 class="flex flex-col items-center"> -->
                    <!-- SEE: https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 -->
                    <!-- FOR NOW: This works, we go to a raw path: -->
                    <NuxtLink to="/roll?classic" tabindex=-1 class="flex flex-col items-center">
                        <div class="mb-4 flex transition hover:scale-105 space-x-4">
                            <IconsBase name="die" class="w-12 h-auto" />
                            <IconsBase name="die" class="w-12 h-auto" />
                        </div>
                        <div class="btn_picto small">Roll Classic Dice</div>
                    </NuxtLink>
                </section>
                <section v-motion-slide-right :delay="1900" class="card card_padding pt-8 flex justify-center">
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
    @apply w-full xs:w-auto;
}

@media screen and (max-height: 500px) {

    #indexWrapper {
        flex-direction: row;
        /*@apply flex-row;*/
    }
}
</style>