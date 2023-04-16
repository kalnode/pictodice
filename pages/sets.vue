<script setup>
const currentRoute = useRoute()

definePageMeta({
    title: 'Dice Sets',
    breadcrumb: 'Dice Sets',
    name: 'SetsRoot'
})
</script>

<template>
    <div class="w-full h-full flex justify-center p-4 overflow-hidden">
        <div class="w-full max-w-5xl flex flex-col">
            <Breadcrumbs />
            <NuxtPage :key="'subview-'+currentRoute.name" />
        </div>
    </div>
</template>