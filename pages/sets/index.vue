<script setup>
import { usePictodiceAppStore } from '~/stores/app'
import { nextTick, ref } from "vue"
const config = useRuntimeConfig()
const store = usePictodiceAppStore()
definePageMeta({
    title: 'Dice Sets',
    breadcrumb: 'Dice Sets',
    name: 'Sets',
    scrollableArea: 'PageDiceSets'
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
    <div id="PageDiceSets" v-if="itemsToDisplay" class="w-full h-full flex flex-col items-center pt-1">

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
                <StaggeredTransition animType='slideUp' :duration="50" tag="div" class="w-full h-full grid gap-6 auto-rows-min" style="grid-template-columns: repeat(auto-fit, minmax(14rem, auto))">
                    <div v-for="(set, index) in itemsToDisplay" :key="'diceset-'+index" :data-index="index">
                        <NuxtLink :to="'/sets/'+index" class="noHoverOpacity w-full h-full flex flex-col justify-end items-center card group py-8">
                            <!--
                            <div class="mt-4 mb-4 md:mb-8 flex-1 flex items-center">
                                <IconsBase name="die" class="w-16 h-auto transition group-hover:scale-105" />
                            </div>
                            -->
                            <img :src="config.app.baseURL+'images/dice_screenshots/sets/' + index +'.png'" class="dice_preview flex-1 object-contain px-4 pt-4 pb-8 group-focus:scale-105 group-active:scale-105 group-hover:scale-105 transition-transform" />
                            <div class="px-2 text-lg textInGroupTransitionFix group-hover:underline line-clamp-2 text-center">
                                {{ set.name}}
                            </div>
                        </NuxtLink>
                    </div>
                </StaggeredTransition>
            </client-only>
        </div>
    </div>
</template>