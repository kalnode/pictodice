<script setup>
const currentRoute = useRoute()

definePageMeta({
    title: 'Dice Sets',
    breadcrumb: 'Dice Sets',
    name: 'SetsRoot'
})
</script>

<template>
    <div class="w-full h-full flex justify-center overflow-hidden">
        <div class="w-full flex flex-col items-center">
            <Breadcrumbs class="app-width w-full my-4" />
            <NuxtPage :key="'subview-'+currentRoute.name" />
        </div>
    </div>
</template>