<script setup>

// STORE
import { usePhotodiceAppStore } from '~/stores/app'
const store = usePhotodiceAppStore()

definePageMeta({
    title: 'Settings'
})

//const title = ref('Settings')
/*
useHead({
    title: title,
})
*/

</script>


<template>
    <div class="w-full h-full flex flex-col justify-center items-center">

        <!--
        <Head>
            <Title>{{ title }}</Title>
            <Meta name="description" :content="title" />
            <Style type="text/css" children="body { background-color: green; }" />
        </Head>
        -->

        <div>
            <div>Sensors allowed? {{ store.allowMotionSensors }}</div>
            <button @click="store.togglePermission()" class="pointer-events-auto p-2 bg-gray-100 rounded">Toggle Sensor Permission</button>
        </div>


    </div>
</template>