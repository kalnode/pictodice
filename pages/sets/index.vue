<script setup>
import { usePhotodiceAppStore } from '~/stores/app'
const store = usePhotodiceAppStore()
definePageMeta({
    title: 'Dice Sets',
    breadcrumb: 'Dice Sets',
    name: 'Sets'
})
</script>

<template>
    <div class="w-full h-full flex justify-center overflow-hidden">
        <div class="w-full gap-6 grid overflow-auto" style="grid-template-columns: repeat(auto-fit, minmax(14rem, auto))">
            <div v-for="(set, index) in store.diceSets" :key="'store-'+index" class="card flex justify-center items-center">
                <IconsBase name="die" class="mb-4 w-16 h-auto transition hover:scale-105" />
                <NuxtLink :to="'/sets/'+index" class="inline-block p-3 text-lg bg-white hover:bg-gray-100 text-black rounded m-1 cursor-pointer">
                    {{ set.name}}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>