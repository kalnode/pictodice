<script setup>
    // TODO: Double check if this is correct. Because <Nav> occurs outside of <NuxtPage />, we need this import to make useRoute() reactive, otherwise it never changes after initial landing.
    import { useRoute } from 'vue-router'
    const route = useRoute()
</script>

<template>
    <h1 class="text-3xl font-bold uppercase text-teal-700 hover:text-teal-200 hover:scale-110 transition-transform">
        <NuxtLink to="/">
            Pictodice
        </NuxtLink>
    </h1>
</template>

<style scoped></style>
