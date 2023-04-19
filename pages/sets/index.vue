<script setup>
import { usePhotodiceAppStore } from '~/stores/app'
import { nextTick, ref } from "vue"
const store = usePhotodiceAppStore()
definePageMeta({
    title: 'Dice Sets',
    breadcrumb: 'Dice Sets',
    name: 'Sets'
})

const showItems = ref(false)
const limit = ref(10)
const itemsToDisplay = ref([])

onMounted ( () => {

    // TODO: For some reason, when going from Home to Sets, the grid shows 100% with zero animation,
    // then going from Sets to Set, there's full stagger animation.
    // Adding a timeout of say 300ms, solves this so there's always stagger animation, however, WHY?
    setTimeout(() => {
        itemsToDisplay.value = store.diceSets.slice(0, limit.value)
    }, 300)

    // IDEALLY: We simply use a nextTick (if at all), and then toggle showItems
    // itemsToDisplay.value = store.diceSets.slice(0, limit.value)
    nextTick(()=>{
        //itemsToDisplay.value = store.diceSets.slice(0, limit.value)
    })
})

function setLimit(newLimit) {
    limit.value = newLimit
}

</script>

<template>
    <div v-if="itemsToDisplay" class="w-full h-full flex flex-col items-center overflow-auto">

        <!--
        <div class="flex space-x-4">
            <div @click="itemsToDisplay = null" class="cursor-pointer">Clear items</div>
            <div @click="itemsToDisplay = store.diceSets.slice(0, limit.value)" class="cursor-pointer">Set items</div>
            <div @click="setLimit(3)" class="cursor-pointer">Set Limit 3</div>
            <div @click="setLimit(8)" class="cursor-pointer">Set Limit 8</div>
            <div @click="setLimit(12)" class="cursor-pointer">Set Limit 12</div>
        </div>
        -->

        <div class="app-width-max app-padding-x w-full flex-1 flex justify-center items-center">
            <client-only>
                <StaggeredTransition animType='slideUp' :duration="50" tag="div" class="w-full h-full gap-6 grid auto-rows-min" style="grid-template-columns: repeat(auto-fit, minmax(14rem, auto))">
                    <div v-for="(set, index) in itemsToDisplay" :key="'diceset-'+index" :data-index="index">
                        <div class="max-h-48 card hover:bg-opacity-60 transition group">
                            <NuxtLink :to="'/sets/'+index" class="w-full h-full flex flex-col justify-center items-center py-8 pb-4">
                                <div class="mt-4 mb-4 md:mb-8 flex-1 flex items-center">
                                    <IconsBase name="die" class="w-16 h-auto transition group-hover:scale-105" />
                                </div>
                                <div class="inline-block px-4 pb-4 text-lg text-black">
                                    {{ set.name}}
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </StaggeredTransition>
            </client-only>
        </div>
    </div>
</template>