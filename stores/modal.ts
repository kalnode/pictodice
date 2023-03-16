import { markRaw } from "vue"
import { defineStore } from "pinia"

export type Modal = {
    isOpen: boolean,
    modalContent: object,
    modalActions?: ModalAction[]
}

export type ModalAction = {
    label: string,
    callback: (props?: any) => void
}

export const useModal = defineStore("modal", {

    state: (): Modal => ({
        isOpen: false,
        modalContent: {},
        modalActions: []
    }),

    actions: {
        open(modalContent: object, modalActions?: ModalAction[]) {
            this.isOpen = true
            this.modalActions = modalActions
            // using markRaw to avoid over performance as reactive is not required
            this.modalContent = markRaw(modalContent)
        },
        close() {
            this.isOpen = false
            this.modalContent = {}
            this.modalActions = []
        }
    }
})

export default useModal