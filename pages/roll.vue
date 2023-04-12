<script setup>
import { useRoute } from 'vue-router'
const currentRoute = useRoute()

import { usePhotodiceAppStore } from '~/stores/app'
const store = usePhotodiceAppStore()

definePageMeta({
    title: 'Rolling Dice',
    absoluteTitle: 'rtyhh'
})

/*
// TODO: Attempting to set arbitrary data for page; how? This is page meta, sure, but nothing to do with HTML meta tag.
useMeta({
    absoluteTitle: true
})
useHead({
    absoluteTitle: true
    //meta: [{ absoluteTitle: true }]
})
*/

</script>
<template>
    <div class="w-full h-full flex justify-center items-center">

        <threeDcanvas :Dice="'classic' in currentRoute.query ? store.diceSets[0].dies.map(e => store.dice[e]) : store.currentDice" />

        <!-- TODO: Support old style 2d dice, displayed as a grid -->
        <!-- <Dice /> -->
    </div>
</template>