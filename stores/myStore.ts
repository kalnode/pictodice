import { resolveDirective } from 'nuxt/dist/app/compat/capi'
import { defineStore } from 'pinia'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application


// DEFINE STORE
export const useMyAlertsStore = defineStore('myAlerts', {
    state: () => ({
        count: 0,
        name: false,

        dice: [
            {
                active: true,
                images: [
                    'dummy-400x400-BodyLanguage.jpg',
                    'dummy-400x400-CharlesBaudelaire.jpg',
                    'dummy-400x400-Eye.jpg',
                    'dummy-400x400-HappyBoy.jpg',
                    'dummy-400x400-Headphone.jpg',
                    'dummy-400x400-TShirt.jpg'
                ]
            },
            {
                active: false,
                color: 'red',
                images: null
            }
        ],
        
    }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++
        },
        toggleName() {
            this.name = !this.name
        },
    },
})