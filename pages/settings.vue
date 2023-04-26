<script setup>
import { ref } from "vue"
import { usePictodiceAppStore } from '~/stores/app'
import useModal from "@/stores/modal"
const modal = useModal()
const store = usePictodiceAppStore()
import ColorModePicker from "@/components/ColorModePicker.vue"

const { $colorMode } = useNuxtApp()

definePageMeta({
    title: 'Settings'
})

const toggleValue = ref(false)


function openColorPicker(mode) {

    return new Promise ( async (resolve, reject) => {
        modal.open(ColorModePicker,
            {
                mode: mode,
                context_ui: 'modal'
            },
            [{
                callback: (selectedColorMode) => {
                    console.log("color modal callback selectedColorMode: %O", selectedColorMode)

                    if (mode == 'global') {
                        store.globalColorModeSelected = selectedColorMode
                        //setColor(selectedColorMode)
                        $colorMode.preference = selectedColorMode
                    } else {

                        store.systemColorModePreference[mode] = selectedColorMode

                        // Set it right away, if conditions are met
                        if (store.useSystemColorMode) {
                            checkColorMode()
                        }
                    }

                    modal.close()
                    resolve("Success")
                }
            }]
        )
    })
}

function getTheme() {
    if(window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)").matches) {
        return "dark"
    } else {
        return "light"
    }
}

function checkColorMode() {
    let testTheme = getTheme()
    if (testTheme && store.useSystemColorMode) {
        //setColor(selectedColorMode)
        //if ($colorMode.preference === 'system')
        $colorMode.preference = store.systemColorModePreference[testTheme]
    }
    //$colorMode.preference = store.systemColorModePreference[testTheme]
}

function toggleSystemMode() {

    if (store.useSystemColorMode) {
        checkColorMode()
    } else {
        $colorMode.preference = store.globalColorModeSelected
    }


}

</script>

<template>
    <div class="w-full h-full flex flex-col items-center p-4 overflow-auto">

        <main class="max-w-lg space-y-4 pb-48">

            <header><h1 class="font-bold">Settings</h1></header>

            <section class="card card_padding">

                <h2>General</h2>

                <Toggle v-model="store.useMotionSensors" :label="'Use Motion Sensors'" />
                <Toggle v-model="store.antialiasing" :label="'Anti-aliasing'" />
                <Toggle v-model="store.showStats" :label="'Show stats'" />
                <Toggle v-model="store.simulateSlowServer" :label="'Simulate Slow Server'" />
                <!--
                <div>
                    <div>Sensors allowed? {{ store.allowMotionSensors }}</div>
                    <button @click="store.toggleMotionPermission()" class="pointer-events-auto p-2 bg-gray-100 rounded">Toggle Sensor Permission</button>
                </div>
                -->
            </section>

            <section class="card card_padding">

                <h2>Color Modes</h2>

                <Toggle v-model="store.useSystemColorMode" @update="toggleSystemMode()" :label="'Sync with System Color Mode'" class="p-2 rounded-full bg-white bg-opacity-10" />

                <div v-if="store.useSystemColorMode">
                    <div class="p-2 rounded-full bg-white bg-opacity-25">
                        Current System Color Mode: 
                        <ColorScheme placeholder="..." tag="span">
                            (<i>{{ getTheme() }}</i> mode detected)
                        </ColorScheme>
                    </div>

                    <div>
                        System "Dark" Preferred Color Mode:
                        <div @click="openColorPicker('dark')" class="btnapp btn_small text-center hover:scale-105 transition cursor-pointer uppercase whitespace-nowrap">{{ store.systemColorModePreference.dark }}</div>
                    </div>

                    <div>
                        System "Light" Preferred Color Mode:
                        <div @click="openColorPicker('light')" class="btnapp btn_small text-center hover:scale-105 transition cursor-pointer uppercase whitespace-nowrap">{{ store.systemColorModePreference.light }}</div>
                    </div>
                </div>
                <div v-else>
                    Preferred Global Color Mode:
                    <div @click="openColorPicker('global')" class="btnapp btn_small text-center hover:scale-105 transition cursor-pointer uppercase whitespace-nowrap">{{ store.globalColorModeSelected }}</div>
                </div>

            </section>

            <section class="card card_padding">

                <h2>App Details</h2>

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
            </section>

        </main>

    </div>
</template>
<style scoped>
section {
    @apply text-sm;
}
</style>