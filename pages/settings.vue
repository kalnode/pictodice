<script setup>
    import { usePhotodiceAppStore } from '~/stores/app'
    const store = usePhotodiceAppStore()

    definePageMeta({
        title: 'Settings'
    })
</script>

<template>
    <div class="w-full h-full flex flex-col justify-center items-center">

        <div>
            <div>Sensors allowed? {{ store.allowMotionSensors }}</div>
            <button @click="store.togglePermission()" class="pointer-events-auto p-2 bg-gray-100 rounded">Toggle Sensor Permission</button>
        </div>

        <div>
            App version: <span v-html="store.app.version"></span>
        </div>

        <div v-if="store.app.type == 'native'" @click="$openAppStore()">
            Open App Store
        </div>

    </div>
</template>