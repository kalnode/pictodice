<script setup>
    import { usePictodiceAppStore } from '~/stores/app'
    const store = usePictodiceAppStore()

    definePageMeta({
        title: 'Die'
    })
</script>

<template>
    <div class="w-full h-full flex flex-col items-center p-4 overflow-auto">

        <div class="max-w-lg space-y-4 pb-48 text-black text-opacity-80">
          Dice number is: {{ $route.params.id }}
        </div>

    </div>
</template>