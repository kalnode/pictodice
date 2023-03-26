<script setup>
    import { usePhotodiceAppStore } from '~/stores/app'
    const store = usePhotodiceAppStore()

    definePageMeta({
        title: 'About'
    })
</script>

<template>
    <div class="w-full h-full flex flex-col items-center p-4 overflow-auto">

        <div class="max-w-lg space-y-4 pb-48 text-black text-opacity-80">
            <section>
                <h2 class="font-bold">A technical demo by Kal</h2>
                <p>A <span class="italic">'universal'</span>&nbsp;app with one single codebase powering 3 clients:</p>
                <ul class="ml-4 mt-2 list-disc list-inside">
                    <li>web</li>
                    <li>iOS</li>
                    <li>Android</li>
                </ul>
            </section>

            <section>
                <h2 class="font-bold">Technical features</h2>
                <ul class="ml-4 list-disc list-inside">
                    <li>Uses Vue3/Nuxt3/Pinia/Capacitor</li>
                    <li>Motion, mouse and touch interactions</li>
                    <li>Pseudo-3d with CSS transforms</li>
                    <li>User image selection, crop, resize</li>
                    <li>Local storage file management (ie save, delete)</li>
                    <li>Versioning & app update functions</li>
                </ul>
            </section>

            <section>
                <h2 class="font-bold">Possible future upgrades:</h2>
                <ul class="ml-4 list-disc list-inside">
                    <li>Real-time 3d rendering with collision detection & lighting</li>
                    <li>Rolling multiple dice at once</li>
                    <li>Sharing of dice to other people</li>
                </ul>
            </section>

            <!--
            <div>
                <div>Sensors allowed? {{ store.allowMotionSensors }}</div>
                <button @click="store.togglePermission()" class="pointer-events-auto p-2 bg-gray-100 rounded">Toggle Sensor Permission</button>
            </div>
            -->

            <!-- -->

            <NuxtLink to="/privacy" class="inline-block p-3 text-lg bg-white text-black rounded m-1">
                Privacy Policy
            </NuxtLink>

            <div>
                App version: <span v-html="store.app.version"></span> ({{ store.app.type }})
            </div>

            <div v-if="store.app.subtype == 'android'">
                <div @click="$openAndroid('ApplicationDetails')" class="inline-block p-3 text-lg bg-white text-black rounded m-1">
                    Open App Details
                </div>

                <div @click="$openAppStore()" class="inline-block p-3 text-lg bg-white text-black rounded m-1">
                    Open App Store
                </div>
            </div>

            <div v-if="store.app.subtype == 'iOS'" class="inline-block p-3 text-lg bg-white text-black rounded m-1">
                <div @click="$openIOS('App') ">
                    Open App Details
                </div>

                <div @click="$openAppStore()" class="inline-block p-3 text-lg bg-white text-black rounded m-1">
                    Open App Store
                </div>
            </div>

        </div>

    </div>
</template>
<style scoped>
section {
    @apply text-sm;
}
</style>