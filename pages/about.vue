<script setup>
    import { usePictodiceAppStore } from '~/stores/app'
    const store = usePictodiceAppStore()

    definePageMeta({
        title: 'About'
    })
</script>

<template>
    <div class="w-full h-full flex flex-col items-center p-4 overflow-auto">

        <div class="max-w-lg space-y-4 pb-48">

            <ColorModePicker />

            <section>
                <h2>A technical demo by Kal</h2>
                <p>A <span class="italic">'universal'</span>&nbsp;app with one single codebase powering 3 clients:</p>
                <ul class="ml-4 mt-2 list-disc list-inside">
                    <li>web</li>
                    <li>iOS</li>
                    <li>Android</li>
                </ul>
            </section>

            <section>
                <h2>Technical features</h2>
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
                <h2>Possible future upgrades:</h2>
                <ul class="ml-4 list-disc list-inside">
                    <li>Real-time 3d rendering with collision detection & lighting</li>
                    <li>Rolling multiple dice at once</li>
                    <li>Sharing of dice to other people</li>
                </ul>
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


            <button>hello</button>

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