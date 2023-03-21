<script setup>
    const config = useRuntimeConfig()

    definePageMeta({
        title: 'Manage Dice'
    })
</script>

<template>
    <div class="w-full h-full flex flex-col justify-center items-center">

        <div class="flex flex-wrap justify-center px-6 mb-4">
            <div v-for="(die, index) in store.dice" :key="'die-'+index"
            @click="store.currentDie = index;store.updateLocalStorage()"
            :class="store.currentDie == index ? 'border-orange-900' : 'border-transparent'" 
            class="flex items-center p-3 md:p-5 m-1 md:m-2 text-orange-900 bg-orange-100 hover:bg-orange-200 hover:scale-105 transition-transform border-2 rounded cursor-pointer">
                <span>{{ die.name }}</span>
                <div v-if="die.icon" v-html="die.icon" class="w-6 h-6" style="margin-right: -0.7em;"></div>
            </div>
        </div>

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


<script>
import { Camera, CameraResultType } from '@capacitor/camera'
import useModal from "@/stores/modal"
import ImageCropper from "@/components/ImageCropper.vue"
const modal = useModal()

import { usePhotodiceAppStore } from '~/stores/app'
const store = usePhotodiceAppStore()

export default {
    name: "Upload",

    methods: {

        async imageClicked(index) {
            this.chooseAnImage(index)
        },

        async chooseAnImage(index) {

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

            // Method 2: We show a the native image picker right away. On web, this opens file selector.
            const images = await Camera.pickImages({
                quality: 90,
                limit: 1 // TODO: Capacitor bug? This seems to have no affect on any device or PC. I'm always able to select multiple on all platforms.
            })

            this.selectedImage = images.photos[0] // TODO: the above "limit:1" doesn't seem to work. We forcefully just choose the first in array for now. It's still a good user experience.

            // We use fetch as a convenient/efficient way to convert the file into a blob we can work with
            const response = await fetch(this.selectedImage.webPath)
            const blob = await response.blob()
            let base64Data = await this.$convertBlobToBase64(blob)

            // With base64 image data, we can perform transformations, like crop (based on user input), resize, filters, etc
            modal.open(ImageCropper,
                { imageSrc: base64Data },
                [{
                    label: "Ok",
                    actionType: "primary",
                    callback: (transformedImage) => {
                        // Image has been transformed
                        this.saveImage(transformedImage, index)
                        modal.close()
                    }
                }]
            )
        },


        async saveImage(cropOutput, index) {

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
                console.log("saveImage() cropOutput is %O", cropOutput)

                //const base64Response = await fetch(`data:image/png;base64,${cropOutput.data}`)
                //const blob = await base64Response.blob()
                // console.log("saveImage() blob is %O", blob)
                // Save the file (localStorage) so it can be used in the future (e.g. after an app restart)
                let savedFile = await this.$writeFile({
                    filename: filename,
                    data: cropOutput,
                    directory: 'images'
                })

                console.log("saveImage savedFile response %O", savedFile)

                store.setImage({ index: index, src: filename })
            }
        },


        async deleteImage(index) {
            let deleteFile = await this.$deleteFile(store.dice[store.currentDie].images[index].filename, 'images')
            .then( () => {
                store.dice[store.currentDie].images[index].filename = ''
                store.dice[store.currentDie].images[index].src = ''
                store.updateLocalStorage()
            })
        }

    }
}
</script>