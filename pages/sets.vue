<script setup>
const currentRoute = useRoute()

definePageMeta({
    title: 'Dice Sets',
    breadcrumb: 'Dice Sets',
    name: 'SetsRoot'
})
</script>

<template>
    <div class="w-full h-full flex justify-center">
        <div class="w-full flex flex-col items-center">
            <Breadcrumbs class="app-width-max sticky top-0 w-full my-4 z-40 bg-[color:var(--bg)]" />
            <NuxtPage :key="'subview-'+currentRoute.name" />
        </div>
    </div>
</template>