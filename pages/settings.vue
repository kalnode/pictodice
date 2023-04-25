<script setup>
    import { usePictodiceAppStore } from '~/stores/app'
    const store = usePictodiceAppStore()

    definePageMeta({
        title: 'Settings'
    })
</script>

<template>
    <div class="w-full h-full flex flex-col items-center p-4 overflow-auto">

        <div class="max-w-lg space-y-4 pb-48">

            <ColorModePicker />

            <section>
                <h2 class="font-bold">Settings</h2>

                <div class="flex flex-col">
                <div class="form-control w-52">
                    <label class="cursor-pointer label">
                    <span class="label-text">Remember me</span> 
                    <input type="checkbox" class="toggle toggle-primary" checked />
                    </label>
                </div>
                <div class="form-control w-52">
                    <label class="cursor-pointer label">
                    <span class="label-text">Remember me</span> 
                    <input type="checkbox" class="toggle toggle-secondary" checked />
                    </label>
                </div>
                <div class="form-control w-52">
                    <label class="cursor-pointer label">
                    <span class="label-text">Remember me</span> 
                    <input type="checkbox" class="toggle toggle-accent" checked />
                    </label>
                </div>
                </div>

                <input type="checkbox" class="toggle toggle-success" checked />
                <input type="checkbox" class="toggle toggle-warning" checked />
                <input type="checkbox" class="toggle toggle-info" checked />
                <input type="checkbox" class="toggle toggle-error" checked />
            </section>

            <!--
            <div>
                <div>Sensors allowed? {{ store.allowMotionSensors }}</div>
                <button @click="store.toggleMotionPermission()" class="pointer-events-auto p-2 bg-gray-100 rounded">Toggle Sensor Permission</button>
            </div>
            -->

            <!-- -->

            <NuxtLink to="/privacy" class="btnapp">Privacy Policy</NuxtLink>

            <div>
                App version: <span v-html="store.app.version"></span> ({{ store.app.type }})
            </div>

            <div v-if="store.app.subtype == 'android'">
                <button @click="$openAndroid('ApplicationDetails')" class="inline-block p-3 text-lg bg-white hover:bg-gray-100 text-black rounded m-1 cursor-pointer">
                    Open App Details
                </button>

                <button @click="$openAppStore()" class="inline-block p-3 text-lg bg-white hover:bg-gray-100 text-black rounded m-1 cursor-pointer">
                    Open App Store
                </button>
            </div>

            <div v-if="store.app.subtype == 'iOS'" class="inline-block p-3 text-lg bg-white hover:bg-gray-100 text-black rounded m-1 cursor-pointer">
                <button @click="$openIOS('App') ">
                    Open App Details
                </button>

                <button @click="$openAppStore()" class="inline-block p-3 text-lg bg-white hover:bg-gray-100 text-black rounded m-1 cursor-pointer">
                    Open App Store
                </button>
            </div>

        </div>

    </div>
</template>
<style scoped>
section {
    @apply text-sm;
}
</style>