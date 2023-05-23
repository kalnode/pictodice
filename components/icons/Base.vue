<template>
    <component
        :is="iconComponent"
        v-bind="componentProps"
        role="img"
    />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

// TODO: Apply typescript to this component
// TODO: Applied /* @vite-ignore */ early in dev, however, maybe no longer needed? Internet ppl use it suppress a warning in console, even tho import is succesful.

const icons = {
    //iconDynamic: defineAsyncComponent(() => import(/* @vite-ignore */`@/components/icons/icons/${props.name}.vue`)),
    home: defineAsyncComponent(() => import(/* @vite-ignore */'@/components/icons/icons/home.vue')),
    die: defineAsyncComponent(() => import(/* @vite-ignore */'@/components/icons/icons/die.vue')),
    pencil: defineAsyncComponent(() => import(/* @vite-ignore */'@/components/icons/icons/pencil.vue')),
    grid: defineAsyncComponent(() => import(/* @vite-ignore */'@/components/icons/icons/grid.vue')),
    help: defineAsyncComponent(() => import(/* @vite-ignore */'@/components/icons/icons/help.vue')),
    arrowBack: defineAsyncComponent(() => import(/* @vite-ignore */'@/components/icons/icons/arrowBack.vue')),
    gear: defineAsyncComponent(() => import(/* @vite-ignore */'@/components/icons/icons/gear.vue')),
    cart: defineAsyncComponent(() => import(/* @vite-ignore */'@/components/icons/icons/cart.vue')),
    fullscreen: defineAsyncComponent(() => import(/* @vite-ignore */'@/components/icons/icons/fullscreen.vue'))
}

const props = defineProps({
    name: {
        type: String,
        required: true,

        //TODO: From earlier project; do we need a validator of any sort? What's the purpose? If we use typescript, isn't this moot?
        //validator(value) {
        //    return Object.prototype.hasOwnProperty.call(icons, value)
        //}
    },
    componentProps: Object
})

const iconComponent = computed(() => {
    return icons[props.name]
})
</script>