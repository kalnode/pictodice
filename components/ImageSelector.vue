<script setup>
// STORE
import { usePhotodiceAppStore } from '~/stores/app'
const store = usePhotodiceAppStore()

import { watch } from "vue"

// no need to import defineEmits
const emit = defineEmits(["update:modelValue"])

// when someVar changes, it will update the reference passed via v-model
/*
watch(someVar, (value) => {
emit("update:modelValue", value)
})
*/
</script>
<template>
    <div class="w-full h-full flex flex-col justify-center items-center">

        <h1>Image selector</h1>
        ---

        <div>
            <div @click="chooseImage()">Choose image</div>
            {{ selectedImage }}
        </div>

    </div>
</template>

<script>
import { Camera, CameraResultType } from '@capacitor/camera'

export default {
    name: "ImageSelector",

    props: {

    },

    components: {

    },

    data() {
        return {
            selectedImage: ''
        }

    },

    mounted() {


    },


    methods: {

        takePhoto() {
            const takePicture = async () => {
                const image = await Camera.getPhoto({
                    quality: 90,
                    allowEditing: true,
                    resultType: CameraResultType.Uri
                });

                // image.webPath will contain a path that can be set as an image src.
                // You can access the original file using image.path, which can be
                // passed to the Filesystem API to read the raw data of the image,
                // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
                //var imageUrl = image.webPath;

                // Can be set to the src of an image now
                //imageElement.src = imageUrl;
            }
        },

        async chooseImage() {

            console.log("chooseImage 222")
            const image = await Camera.pickImages({
                quality: 90,
                limit: 6
            })

            // image.webPath will contain a path that can be set as an image src.
            // You can access the original file using image.path, which can be
            // passed to the Filesystem API to read the raw data of the image,
            // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
            //var imageUrl = image.webPath

            console.log("Image is: %O", image)

            // Can be set to the src of an image now
            //imageElement.src = imageUrl

            this.selectedImage = image


            console.log("chooseImage 555")
        }

    }

}

</script>

<style scoped>



</style>