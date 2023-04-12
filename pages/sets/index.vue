<script setup>
    import { usePhotodiceAppStore } from '~/stores/app'
    const store = usePhotodiceAppStore()

    definePageMeta({
        title: 'Sets'
    })
</script>

<template>
    <div class="w-full h-full flex flex-col items-center p-4 overflow-auto">

        <div class="w-full max-w-1xl gap-6 pb-48 text-black text-opacity-80 grid grid-cols-3">

            <div v-for="(set, index) in store.diceSets" :key="'store-'+index" class="flex justify-center items-center">
                <NuxtLink :to="'/sets/'+index" class="inline-block p-3 text-lg bg-white hover:bg-gray-100 text-black rounded m-1 cursor-pointer">
                    {{ set.name}}
                </NuxtLink>
            </div>

        </div>

    </div>
</template>