<script setup>
// STORE
//import { usePhotodiceAppStore } from '~/stores/myStore'
import ImageSelectorVue from '~/components/ImageSelector.vue'
//const store = usePhotodiceAppStore()

definePageMeta({
    title: 'Manage Dice'
})
</script>
<template>
    <div class="w-full h-full flex flex-col justify-center items-center">

        <div class="flex flex-wrap justify-center px-6 mb-4">
            <div v-for="(die, index) in store.dice" :key="'die-'+index"
            @click="store.currentDie = index"
            :class="store.currentDie == index ? 'border-orange-700' : 'border-transparent'" 
            class="flex items-center p-2 md:p-4 m-1 md:m-2 text-orange-700 bg-orange-200 hover:bg-orange-100 hover:scale-105 transition-transform border-2 rounded cursor-pointer">
                <span>{{ die.name }}</span>
                <div v-if="die.icon" v-html="die.icon" class="w-8 h-8" style="margin-right: -0.7em;"></div>
            </div>
        </div>

        <div class="overflow-auto px-10">
            <div class="flex justify-center items-center flex-wrap pb-48">
                <div v-for="(image, index) in store.dice[store.currentDie].images" :key="'slot-'+index"
                @click="store.dice[store.currentDie].type === 'custom' ? imageClicked(index) : ''"
                :class="store.dice[store.currentDie].type === 'custom' ? 'cursor-pointer hover:scale-105' : ''"
                class="w-28 sm:w-32 md:w-48 h-28 sm:h-32 md:h-48 border m-2 md:m-4 bg-white flex justify-center items-center overflow-hidden transition-transform">
                    <img v-if="image.url != ''" :src="'./'+image.url" class="w-full h-full object-cover object-center" />
                    <div v-else class="flex justify-center items-center bg-white w-full h-full">Add</div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
import { Capacitor } from '@capacitor/core'
import { Camera, CameraResultType } from '@capacitor/camera'
import useModal from "@/stores/modal"
import ImageSelector from "@/components/ImageSelector.vue"
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

const modal = useModal()


import { usePhotodiceAppStore } from '~/stores/app'
const store = usePhotodiceAppStore()


export default {
    name: "Upload",

    props: {

    },

      data() {
        return {
            //images: null,
            showImageSelector: false,
            currentDie: 0
        }

    },

    mounted() {

        //this.getImages()

    },

    methods: {


        async getImages() {

            let images = store.dice[store.currentDie].images

            // TODO: Loop through images, and check whether they need file processing. If it's plain URL, then ignore.

            this.images = images

        },

        async imageClicked(index) {

            // TODO: Check if current die view is custom. If not, it shouldn't even be clickable.
            console.log("Custom image slot index: %O", index)
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

            // image.webPath will contain a path that can be set as an image src.
            // You can access the original file using image.path, which can be
            // passed to the Filesystem API to read the raw data of the image,
            // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
            //var imageUrl = image.webPath

            this.selectedImage = images.photos[0] // TODO: the above "limit:1" doesn't seem to work. We forcefully just choose the first in array for now. It's still a good user experience.

            // Convert selected image file into base64 data we can use in the image element right away
            const response = await fetch(this.selectedImage.webPath)
            const blob = await response.blob()
            let base64Data = await this.$convertBlobToBase64(blob)

            // Apply the data to the image
            //this.images[index].url = base64Data
            store.dice[store.currentDie].images[index].url = base64Data

            // SAVE FILE in LOCAL STORAGE for future use

            // TODO: Shall we save the blob, and not the base64 data????

            let filename = Date.now() + '.' + this.selectedImage.format

            let savedFile = await this.$writeFile({
                filename: filename,
                data: base64Data,
                directory: 'images/' // directory: Directory.Data,
            })


            // Get final URI and put that into our die storage, for future use

            //let finalFileSrc = Capacitor.convertFileSrc(savedFile.uri)
            //let finalFileSrc = this.sanitizer.bypassSecurityTrustUrl(Capacitor.convertFileSrc(savedFile.uri))
            //let readFile = await this.$readFile(savedFile.uri)
            //console.log("imageClicked 777: %O", readFile)
            //'blob:https://localhost:3000'+savedFile.uri 
            //store.dice[0].images[index] = savedFile.uri

            //store.setImage({ index: index, src: finalFileSrc })

        },

        processImageFile() {

            // Used for when we grab saved files from localStorage.
            // In order to use the grabbed file we have to do stuff (probably) to make it usable in our image elements.

            // One working way: Base64 data, raw, applied to img src. That is fine, but is very inefficient. As well, does it mean we have to process base64 data every time the user changes views? Best to get a URI to the localStorage file that is valid for the entire current session.

            /*
            let localStorage = await store.getLocalStorageCustomDice()

            console.log("images are %O", localStorage)

            // LOOP THROUGH localStorage.images
            // Check the image type, whether it's static, remote or localStorage.
            // If localStorage, then we run the readFile procedure.


            let readFile = await this.$readFile(localStorage.images[0])
            console.log("readFile 666 readFile: %O", readFile.data)

            let newBlob = new Blob(["data:image/gif;base64,R0lGODlhDwAPAKECAAAAzMzM/////wAAACwAAAAADwAPAAACIISPeQHsrZ5ModrLlN48CXF8m2iQ3YmmKqVlRtW4MLwWACH+H09wdGltaXplZCBieSBVbGVhZCBTbWFydFNhdmVyIQAAOw=="], { type: 'image/gif'})

            console.log("newBlob is: %O", newBlob)
            //let finalURI = URL.createObjectURL( new Blob([readFile.data], { type: 'image/png'}))
            let finalURI = URL.createObjectURL(newBlob)
            console.log("readFile 777 finalURI: %O", finalURI)


            localStorage.images[0] = finalURI //readFile.data
            this.images = localStorage.images

            //let getImage = await this.$readFile({
            //    path: images[0].image
            //})

            //console.log("getImage 111 %O", getImage)
            */
        }



    }
}
</script>