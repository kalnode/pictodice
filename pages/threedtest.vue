<script setup>
import { usePhotodiceAppStore } from '~/stores/app'
const store = usePhotodiceAppStore()

definePageMeta({
    title: '3d Test'
})
</script>
<template>
    <div class="w-full h-full flex justify-center items-center">
        <threeDcanvas :Dice="store.currentDice" />
    </div>
</template>