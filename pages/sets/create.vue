<template>
    <div class="w-full h-full flex flex-col justify-center items-center">

        <!-- CATEGORIES -->
        <div class="flex flex-wrap justify-center px-6 mb-4">
            <div v-for="(die, index) in store.dice" :key="'die-'+index"
            @click="store.currentDie = index;store.updateLocalStorage()"
            :class="store.currentDie == index ? 'border-orange-900' : 'border-transparent'" 
            class="flex items-center p-3 md:p-5 m-1 md:m-2 text-orange-900 bg-orange-100 hover:bg-orange-200 hover:scale-105 transition-transform border-2 rounded cursor-pointer">
                <span>{{ die.name }}</span>
                <div v-if="die.icon" v-html="die.icon" class="w-6 h-6" style="margin-right: -0.7em;"></div>
            </div>
        </div>

        <!-- LOADING MASK -->
        <!--
        Dimmed view + spinner animation telling user stuff is going on. This is to account for potential lag between prompts (native file picker to cropping experience).
        iOS is the main instigator for this; bad delays and flickering between user steps. NOTE: For web, we disable this because apparently it's very difficult knowing when a user cancels-out of a file picker, thus we're unable to hide this loading state!
        -->
        <transition name="fade">
            <div v-if="loading && store.app.type == 'native'" class="w-full h-full fixed z-50 top-0 bg-black bg-opacity-70 flex justify-center items-center">
                <Loading class="w-24 h-24" :color="'#ffffff'" />
            </div>
        </transition>

        <!-- THUMBNAIL VIEW -->
        <div class="overflow-auto px-10">
            <div class="flex justify-center items-center flex-wrap pb-48">
                <div v-for="(image, index) in store.dice[store.currentDie].images" :key="'slot-'+index"
                @click="store.dice[store.currentDie].type === 'custom' ? imageClicked(index) : ''"
                :class="[
                    store.dice[store.currentDie].type === 'custom' ? 'cursor-pointer hover:scale-105' : '',
                    image.type == 'text' ? 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-800 to-violet-900 text-white' : 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 to-gray-300 text-black'
                ]"
                class="relative w-28 sm:w-32 md:w-48 h-28 sm:h-32 md:h-48 border m-2 md:m-4 bg-white flex justify-center items-center overflow-hidden transition-transform">

                    <div v-if="image.type && image.src != '' && image.type == 'localStorage'"
                    @click.stop.self="deleteImage(index)" class="w-10 h-10 absolute top-1 right-1 z-50 flex justify-center items-center font-bold rounded-full shadow bg-white hover:bg-gray-100 p-2 hover:scale-110 transition">X</div>

                    <img v-if="image.type && image.src != '' && image.type != 'text'"
                    :src="image.type == 'localStorage' ? image.src : config.app.baseURL+'images/'+image.src"
                    class="relative w-full h-full object-cover object-center" />

                    <span v-else-if="image.type == 'text'" class="p-2 text-base md:text-2xl text-center font-bold italic uppercase">{{ image.src }}</span>

                    <div v-else class="flex justify-center items-center bg-white w-full h-full text-3xl font-bold">+</div>
                </div>
            </div>
        </div>

    </div>
</template>
<script setup>
import { Camera, CameraResultType } from '@capacitor/camera'
import useModal from "@/stores/modal"
import ImageCropper from "@/components/ImageCropper.vue"
import { usePhotodiceAppStore } from '~/stores/app'
import { ref } from 'vue'
const { $convertBlobToBase64, $writeFile, $deleteFile } = useNuxtApp()

const modal = useModal()
const store = usePhotodiceAppStore()
const config = useRuntimeConfig()
const loading = ref(false)

definePageMeta({
    title: 'Manage Dice'
})

async function imageClicked(index) {
    console.log("Image slot clicked %O", index)

    loading.value = true
    await chooseAnImage(index)
    .then( () => {
        console.log("after image work 111")

    })
    .catch( () => {
        console.log("after image work 222")

    })
    console.log("after image work 333")
    loading.value = false
}

async function chooseAnImage(index) {

    return new Promise ( async (resolve, reject) => {

        // Method 1: We show a custom modal with options
        /*
        modal.open(ImageSelector, [
            {
                label: "Save",
                callback: (dataFromView) => {
                    console.log(dataFromView)
                    modal.close()
                }
            }
        ])
        */

        // Method 2: We show a the native image picker right away.
        let images = await Camera.pickImages({ //getPhoto
            quality: 90,
            limit: 1 // TODO: Capacitor bug? This seems to have no affect on any device or PC. I'm always able to select multiple on all platforms.
        })
        .catch((e) => {
            reject(e)
        })

        if (images && images.photos && images.photos.length > 0) {

            let selectedImage = images.photos[0] // TODO: the above "limit:1" doesn't seem to work. We forcefully just choose the first in array for now. It's still a good user experience.

            // We use fetch as a convenient/efficient way to convert the file into a blob we can work with
            const response = await fetch(selectedImage.webPath)
            const blob = await response.blob()
            let base64Data = await $convertBlobToBase64(blob)

            // With base64 image data, we can perform transformations, like crop (based on user input), resize, filters, etc
            modal.open(ImageCropper,
                {
                    imageSrc: base64Data,
                    context_ui: 'modal'
                },
                [{
                    label: "Ok",
                    actionType: "primary",
                    callback: (transformedImage) => {
                        // Image has been transformed
                        saveImage(transformedImage, index)
                        modal.close()
                        resolve("Success")
                    }
                }]
            )
        } else {
            reject("No images selected")
        }
    })
}

async function saveImage(cropOutput, index) {

    // Simple date-based filename seems to be all we need, for now
    let filename = Date.now() + '.' + 'png' // We hardcode 'png' here because we know ImageCropper always spits out png's.
    const blobURI = URL.createObjectURL(cropOutput);

    // Directly update the global store, which will reflect into the app right away (thumbnails and dice)
    store.dice[store.currentDie].images[index].type = 'localStorage'
    store.dice[store.currentDie].images[index].src = blobURI
    store.dice[store.currentDie].images[index].filename = filename

    // Save image file
    // TODO: For now, we only do this for web version until we can iron-out issues on native mobile.
    if (store.app.subtype == 'web') {

        // Save the file (localStorage) so it can be used in the future (e.g. after an app restart)
        let savedFile = await $writeFile({
            filename: filename,
            data: cropOutput,
            directory: 'images'
        })

        store.setImage({ index: index, src: filename })
    }

    loading.value = false
}

async function deleteImage(index) {
    let deleteFile = await $deleteFile(store.dice[store.currentDie].images[index].filename, 'images')
    .then( () => {
        store.dice[store.currentDie].images[index].filename = ''
        store.dice[store.currentDie].images[index].src = ''
        store.updateLocalStorage()
    })
}
</script>