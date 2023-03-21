<template>
    <div class="w-full h-full flex flex-col justify-center items-center pt-8">
        <!--
            Test controls
        <div @click="destroyCropper()">Destroy</div><div @click="openCropper()">openCropper</div>
        
        <img :src="imageSrc" class="w-8 h-8" />
        -->
        <div class="flex-1 overflow-hidden">
            <img v-show="cropperInstance" :src="imageSrc" id="imageToCrop" ref="imageToCrop" style="display: block; max-width: 100%;" />
        </div>

        <div class="w-full flex justify-center items-center space-x-4 my-2">
            <div @click="resetCropper()" class="px-2 py-1 rounded bg-blue-300 cursor-pointer">RESET</div>
            <div @click="cropTheImage()" class="px-2 py-1 rounded bg-blue-300 cursor-pointer">CROP</div>
        </div>
    </div>
</template>

<script>
import 'cropperjs/dist/cropper.css'
import Cropper from 'cropperjs'

export default {
    name: "ImageCropper",

    props: {
        imageSrc: String
    },

    data() {
        return {
            cropperInstance: null,
            imageSrc2: null
        }
    },

    watch: {

        imageSrc: function(e) {
            console.log("Cropper got new image %O", e)

            /*
            if (this.cropperInstance) {
                console.log("Destroying copperinstance")
                this.cropperInstance.destroy()
                this.cropperInstance = null
                //this.imageSrc2 = null
                //this.imageSrc2 = this.imageSrc
                this.openCropper()
            }
            */
            this.$nextTick( () => {
                this.destroyCropper()
                this.openCropper()
            })


        }
    },

    mounted() {
        if (this.imageSrc) {
            //this.imageSrc2 = this.imageSrc
            this.openCropper()
        }
    },

    methods: {
        openCropper() {
            let image = this.$refs.imageToCrop
            this.cropperInstance = new Cropper(image, {
                viewMode: 3,
                dragMode: 'move',
                aspectRatio: 1,
                guides: true,
                center: true,
                background: false,
                cropBoxMovable: true,
                cropBoxResizable: true,
                ready: function () {
                    //croppable = true
                }
            })
        },

        destroyCropper() {
            console.log("Destroying")
            if (this.cropperInstance) {
                this.cropperInstance.destroy()
                this.cropperInstance = null
            }
        },

        resetCropper() {
            console.log("Resetting")
            if (this.cropperInstance) {
                this.cropperInstance.reset()
            }
        },

        async cropTheImage() {

            /*
            cropper.getCroppedCanvas({
            width: 160,
            height: 90,
            minWidth: 256,
            minHeight: 256,
            maxWidth: 4096,
            maxHeight: 4096,
            fillColor: '#fff',
            imageSmoothingEnabled: false,
            imageSmoothingQuality: 'high',
            });
            */

            this.cropperInstance.getCroppedCanvas()
            .toBlob((blob) => {
                console.log("Image cropper crop work final: %O", blob)
                this.$emit("update:modelValue", blob)
                this.$emit('close')
                //this.$emit("croppedImage", blob)
            })

        }
    }
}
</script>