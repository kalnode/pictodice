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

<script setup>
import 'cropperjs/dist/cropper.css'
import Cropper from 'cropperjs'
import { nextTick, ref } from "vue"

const emit = defineEmits() // Event bus emit

const props = defineProps({
    imageSrc: String,
    context_ui: String
})

// TODO: The below const works, but we have to use cropperInstance.value  all over the place, which seems stupid. Is there a better way to store an instance?
//var cropperInstance = null // Simple var, this works, however is it safe/secure/recommended? Also, when cropper opens, looks like width/height aren't proper.
const cropperInstance = ref(null)

const imageToCrop = ref(null)

// TODO: Do we need this? Early on, presumed required to expose template ref in script setup
//defineExpose({ imageToCrop })

/*
watch(imageSrc, (first, second) => {
    console.log("Watch ImageCropper imageSrc:", first, second)
    nextTick( () => {
        destroyCropper()
        openCropper()
    })
})
*/

onMounted (() => {

    if (props.imageSrc) {
        openCropper()
    }
})


function openCropper() {

    console.log("imageToCrop is %O", imageToCrop.value)
    let image = imageToCrop.value
    cropperInstance.value = new Cropper(image, {
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
}

function destroyCropper() {
    console.log("Destroying")
    if (cropperInstance.value) {
        cropperInstance.value.destroy()
        cropperInstance.value = null
    }
}

function resetCropper() {
    console.log("Resetting")
    if (cropperInstance.value) {
        cropperInstance.value.reset()
    }
}

async function cropTheImage() {

    cropperInstance.value.getCroppedCanvas({
        imageSmoothingEnabled: false,
        imageSmoothingQuality: 'high'
    })
    .toBlob((blob) => {
        console.log("Image cropper crop work final: %O", blob)

        if (props.context_ui == 'modal') {
            emit("update:modelValue", blob) // Modal emit
        } else {
            this.$emit("croppedImage", blob)
        }

        emit('close')
    })

}

</script>