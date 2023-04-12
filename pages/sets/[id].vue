<template>
    <div class="w-full h-full flex flex-col items-center p-4 overflow-auto">

        <div class="max-w-lg space-y-4 pb-48 text-black text-opacity-80">
            Set number is: {{ currentRoute.params.id }}

            <div @click="selectSet()">Select and Roll</div>

            <div @click="router.back()">Back to Set List</div>
        </div>

    </div>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const currentRoute = useRoute()
import { usePhotodiceAppStore } from '~/stores/app'
const store = usePhotodiceAppStore()

definePageMeta({
    title: 'Set'
})

async function selectSet() {
    store.currentDiceSet = currentRoute.params.id

    // TODO: Do we need await here? Does it a serve a purpose? Perhaps it stops user from doing other stuff just before link loads????
    await navigateTo('/roll') // TODO: Can we use proper named route here, instead of raw string with slash?

}
</script>