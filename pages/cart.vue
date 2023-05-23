<script setup>
    import { usePictodiceAppStore } from '~/stores/app'
    const store = usePictodiceAppStore()

    definePageMeta({
        title: 'Cart Page'
    })
</script>

<template>
    <div class="w-full h-full flex flex-col items-center p-4 overflow-auto">

        <main class="max-w-lg space-y-4 pb-48">

            <header></header>

            <section class="card card_padding">

                <h2>Cart Stuff</h2>

            </section>

        </main>

    </div>
</template>
<style scoped>
section {
    @apply text-sm;
}
</style>