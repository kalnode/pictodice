<template>
    <transition name="fade">

        <div v-if="isOpen" class="modal modal-open">

            <!-- Because we maintain modal state externally (in modal store), we don't use the "hidden checkbox" trick used in DaisyUI.
                Since we're not using the checkbox-trick, that means we can't use labels-that-point-to-it to control state.
                Which means we can't use DaisyUI's background-click, and we have to make our own -->

            <!-- BACKGROUND DIM -->
            <label class="fixed inset-0 bg-black opacity-5 cursor-pointer" @click="modal.close()"></label>

            <div class="modal-box relative">

                <!-- X to close -->
                <label class="btn btn-sm btn-circle absolute right-2 top-2" @click="modal.close()">✕</label>

                <!-- CONTENT -->
                <component :is="modalContent" v-model="model"></component>

                <!-- ACTIONS, if any -->
                <div class="modal-action">
                    <button v-for="(action,index) in modalActions" :key="'action-'+index" class="btn" @click="action.callback(model)">
                        {{ action.label }}
                    </button>
                </div>

            </div>
        </div>

    </transition>

</template>

<script lang="ts" setup>
    import { reactive } from "vue"
    import { storeToRefs } from "pinia"
    import { useModal } from "@/stores/modal"

    const modal = useModal()

    // Reactive container to save the payload returned by the mounted modalContent
    // TODO: Where's this used? Why?
    //const model = reactive({})

    // Convert all state properties to reactive references to be used on modalContent
    const { isOpen, modalContent, modalActions } = storeToRefs(modal)
</script>
