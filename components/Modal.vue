<template>
    <transition name="fade">

        <div v-if="isOpen" class="modal modal-open">

            <!-- Because we maintain modal state externally (in modal store), we don't use the "hidden checkbox" trick used in DaisyUI.
                Since we're not using the checkbox-trick, that means we can't use labels-that-point-to-it to control state.
                Which means we can't use DaisyUI's background-click, and we have to make our own. -->

            <!-- BACKGROUND DIM -->
            <label class="fixed inset-0 bg-black opacity-5 cursor-pointer" @click="modal.close()"></label>

            <div class="modal-box w-full md:w-auto h-full md:h-auto max-h-screen rounded-none md:rounded-xl relative bg-white text-black">

                <!-- X to close -->
                <label class="btn btn-sm btn-circle absolute right-2 top-2 hover:bg-slate-500 hover:scale-105 transition" @click="modal.close()">✕</label>

                <!-- CONTENT -->
                <!-- TODO: Here we have a custom @close event that attempts to trigger modelAction 0. This isn't very resilient. What happens with
                multi-action modals? For now we keep going with "0", which is always the first action. Ideally we should mark what the primary action is and use it as the default.-->
                <component :is="modalContent" v-bind="{ ...modalContentProps }" v-model="model" @close="modalActions[0].callback(model);modal.close()"></component>

                <!-- ACTIONS, if any -->
                <!-- TODO: A flag whether we should show an actions toolbar separate from the modal content -->
                <!--
                <div class="modal-action absolute bottom bg-white p-1 w-full">
                    <button v-for="(action,index) in modalActions" :key="'action-'+index" class="btn" @click="action.callback(model)">
                        {{ action.label }}
                    </button>
                </div>
                -->

            </div>
        </div>

    </transition>

</template>
<script lang="ts" setup>
// Initially, based on tut here: https://dev.to/cloudx/reusable-dynamic-modal-on-vue-3-1k56

import { reactive } from "vue"
import { storeToRefs } from "pinia"
import { useModal } from "~/stores/modal"

const modal = useModal()

// Reactive holder to save the payload returned by the mounted modalContent
var model = reactive({})

// Convert all state properties to reactive references to be used on modalContent
const { isOpen, modalContent, modalContentProps, modalActions } = storeToRefs(modal)
</script>
