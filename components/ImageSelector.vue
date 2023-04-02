<template>
    <div class="w-full h-full flex flex-col justify-center items-center">

        <h1>Image selector</h1>

        <div>
            <div @click="chooseImage()">Choose image</div>
            {{ selectedImage }}
        </div>

    </div>
</template>

<script setup>
import { Camera, CameraResultType } from '@capacitor/camera'
import { usePhotodiceAppStore } from '~/stores/app'

const store = usePhotodiceAppStore()
const selectedImage = ref('')

// TODO: Invesigate all this. Necessary?
/*
import { watch } from "vue"

// no need to import defineEmits
const emit = defineEmits(["update:modelValue"])

// when someVar changes, it will update the reference passed via v-model
watch(someVar, (value) => {
emit("update:modelValue", value)
})
*/

/*
takePhoto() {
    const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
    })
}
*/

async function chooseImage() {

    const image = await Camera.pickImages({
        quality: 90,
        limit: 6
    })

    console.log("Image is: %O", image)

    selectedImage = image

    console.log("chooseImage 555")
}
</script>