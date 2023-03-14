<script setup>

// STORE
import { useMyAlertsStore } from '~/stores/myStore'
const store = useMyAlertsStore()

</script>

<template>
    <div class="w-full h-full flex flex-col justify-center items-center">
        <h1>Settings</h1>

        <div>
            <div>Sensors allowed? {{ store.allowMotionSensors }}</div>
            <button @click="store.togglePermission()" class="pointer-events-auto p-2 bg-gray-100 rounded">Toggle Sensor Permission</button>
        </div>


    </div>
</template>