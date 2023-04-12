<script setup>
    import { usePhotodiceAppStore } from '~/stores/app'
    const store = usePhotodiceAppStore()

    definePageMeta({
        title: 'Dice'
    })
</script>

<template>
    <div class="w-full h-full flex flex-col items-center p-4 overflow-auto">

        <div class="max-w-lg space-y-4 pb-48 text-black text-opacity-80">
            Dice
        </div>

    </div>
</template>