import { markRaw } from "vue"
import { defineStore } from "pinia"

export type Modal = {
    isOpen: boolean,
    modalContent: object,
    modalContentProps: object,
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
        modalActions: [],
        modalContentProps: {}
    }),

    actions: {
        open(modalContent: object, modalContentProps: object, modalActions?: ModalAction[]) {
            this.isOpen = true
            this.modalActions = modalActions
            this.modalContentProps = modalContentProps
            // using markRaw to avoid over performance as reactive is not required
            this.modalContent = markRaw(modalContent)
        },
        close() {
            this.isOpen = false
            this.modalContent = {}
            this.modalContentProps = {}
            this.modalActions = []
        }
    }
})

export default useModal