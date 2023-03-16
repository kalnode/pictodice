// TODO: What's this for?
import { resolveDirective } from 'nuxt/dist/app/compat/capi'

import { defineStore } from 'pinia'

// LOCAL STORAGE
import { Preferences } from '@capacitor/preferences'
// For native mobile (iOS, Android), this uses storage made available to any app, and is protected.
// For web, this plugin uses localStorage (which is volatile, in that it may be cleared by the browser or user)


// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application


// DEFINE STORE
export const usePhotodiceAppStore = defineStore('myAlerts', {
    state: () => ({

        allowMotionSensors: true,
        userInteractedWithPermissionPrompt: false,
        currentDie: 0,

        dice: [
            {
                name: 'Classic Dice',
                type: 'preset', // 'preset' die, or 'custom' for user-made die
                active: true,
                images: [
                    // type: static, remote, localStorage
                    { type: 'static', url: 'images/dummy-400x400-BodyLanguage.jpg' },
                    { type: 'static', url: 'images/dummy-400x400-CharlesBaudelaire.jpg' },
                    { type: 'static', url: 'images/dummy-400x400-Eye.jpg' },
                    { type: 'static', url: 'images/dummy-400x400-HappyBoy.jpg' },
                    { type: 'static', url: 'images/dummy-400x400-Headphone.jpg' },
                    { type: 'static', url: 'images/dummy-400x400-Headphone.jpg' }
                ]
            },
            {
                name: 'Exercises',
                type: 'preset', // 'preset' die, or 'custom' for user-made die
                active: true,
                images: [
                    // type: static, remote, localStorage
                    { type: 'static', url: 'images/dummy-400x400-BodyLanguage.jpg' },
                    { type: 'static', url: 'images/dummy-400x400-CharlesBaudelaire.jpg' },
                    { type: 'static', url: 'images/dummy-400x400-Eye.jpg' },
                    { type: 'static', url: 'images/dummy-400x400-HappyBoy.jpg' },
                    { type: 'static', url: 'images/dummy-400x400-Headphone.jpg' },
                    { type: 'static', url: 'images/dummy-400x400-Headphone.jpg' }
                ]
            },
            {
                name: 'Stock Photos',
                type: 'preset', // 'preset' die, or 'custom' for user-made die
                active: true,
                images: [
                    // type: static, remote, localStorage
                    { type: 'static', url: 'images/dummy-400x400-BodyLanguage.jpg' },
                    { type: 'static', url: 'images/dummy-400x400-CharlesBaudelaire.jpg' },
                    { type: 'static', url: 'images/dummy-400x400-Eye.jpg' },
                    { type: 'static', url: 'images/dummy-400x400-HappyBoy.jpg' },
                    { type: 'static', url: 'images/dummy-400x400-Headphone.jpg' },
                    { type: 'static', url: 'images/dummy-400x400-Headphone.jpg' }
                ]
            },
            {
                name: "Emoji's",
                type: 'preset', // 'preset' die, or 'custom' for user-made die
                active: true,
                images: [
                    // type: static, remote, localStorage
                    { type: 'static', url: 'images/dummy-400x400-BodyLanguage.jpg' },
                    { type: 'static', url: 'images/dummy-400x400-CharlesBaudelaire.jpg' },
                    { type: 'static', url: 'images/dummy-400x400-Eye.jpg' },
                    { type: 'static', url: 'images/dummy-400x400-HappyBoy.jpg' },
                    { type: 'static', url: 'images/dummy-400x400-Headphone.jpg' },
                    { type: 'static', url: 'images/dummy-400x400-Headphone.jpg' }
                ]
            },
            {
                name: "Custom",
                icon: `<svg width="100%" height="100%" fill="currentColor" version="1.1" viewBox="0 0 752 752" xmlns="http://www.w3.org/2000/svg">
                        <path d="m561.64 220.19-30.309-30.309c-10.891-10.891-28.887-10.891-40.254 0l-19.418 20.367-194.17 194.17c-0.47266 0.47266-0.94531 1.4219-1.4219 1.8945 0 0 0 0.47266-0.47266 0.47266-0.47266 0.47266-0.47266 0.94531-0.47266 1.8945v0.47266l-18.469 75.301c-0.94531 3.3164 0 6.6289 2.3672 8.9961 1.8945 1.8945 4.2617 2.8398 6.6289 2.8398 0.94531 0 1.4219 0 2.3672-0.47266l74.828-18.469h0.47266c0.47266 0 1.4219-0.47266 1.8945-0.47266 0 0 0.47266 0 0.47266-0.47266 0.47266-0.47266 1.4219-0.94531 1.8945-1.4219l214.06-214.06c5.2109-5.2109 8.5234-12.312 8.5234-19.891 0-8.0508-2.8398-15.156-8.5234-20.84zm-266.15 249.11-12.785-12.785 6.6289-26.992 33.152 33.152zm28.414-31.258-26.992-26.992 180.91-180.91 26.992 26.992zm224.48-190.85-13.262 13.262-43.57-43.57 13.262-13.262c3.7891-3.7891 9.4727-3.7891 13.262 0l30.309 30.309c1.8945 1.8945 2.8398 4.2617 2.8398 6.6289 0 2.3711-0.94922 4.7383-2.8398 6.6328zm-39.781 86.191c-5.2109 0-9.4727 4.2617-9.4727 9.4727v173.8c0 20.836-17.051 39.309-37.887 39.309l-225.9-0.003906c-20.836 0-39.309-18.469-39.309-39.309v-225.89c0-20.836 18.469-37.887 39.309-37.887h173.8c5.2109 0 9.4727-4.2617 9.4727-9.4727 0-5.2109-4.2617-9.4727-9.4727-9.4727h-173.8c-31.73 0-58.25 25.574-58.25 56.832v225.9c0 31.73 26.52 58.25 58.25 58.25h225.9c31.258 0 56.828-26.52 56.828-58.25v-173.8c0-5.2109-4.2617-9.4727-9.4688-9.4727z" />
                    </svg>`,
                type: 'custom', // 'preset' die, or 'custom' for user-made die
                active: true,
                images: [
                    // type: static, remote, localStorage
                    { type: 'localStorage', url: '' },
                    { type: 'localStorage', url: '' },
                    { type: 'localStorage', url: '' },
                    { type: 'localStorage', url: '' },
                    { type: 'localStorage', url: '' },
                    { type: 'localStorage', url: '' }
                ]
            }

        ],

    }),

    getters: {

        //WORKS:
        //getterTest: () => 23 + 'dfdfdf'",

        // TODO: Why does this return "object promise" ???
        //permissionSetting: () => Preferences.get({ key: 'allowMotionSensors' }),

        // or try this:
        /*
        permissionSetting3: () => {

            "sdfv43e"

            const checkName = async () => {
                const { value } = await Preferences.get({ key: 'allowMotionSensors' })
                console.log(`Hello ${value}!`)
            }
        }
        */
        
    },

    actions: {


        setPermission(value:boolean) {
            this.allowMotionSensors = value
        },

        async togglePermission() {

            console.log("togglePermission existing value is: %O", this.allowMotionSensors )

            this.allowMotionSensors = !this.allowMotionSensors

            // localStorage only allows string values, so we use 1=true, 0=false.
            let newValue = this.allowMotionSensors === true ? "1" : "0"

            console.log("togglePermission newValue is: %O", newValue )

            await Preferences.set({
                key: 'allowMotionSensors',
                value: newValue,
            })

            console.log("togglePermission DONE SETTING VALUE")

        },

        setImage(payload: {index: number; src: string}) {
            if (this.dice[0] != null && this.dice[0].images != null) {
                console.log("setImage 111 payload.index %O", payload.index)
                console.log("setImage 222 payload.src %O", payload.src)
                this.dice[0].images[payload.index].type = 'localStorage'
                this.dice[0].images[payload.index].url = payload.src
                console.log("setImage 333 this.dice[0].images[payload.index] %O", this.dice[0].images[payload.index])

                this.updateLocalStorage()
            }
        },

        async getLocalStorage() {

            console.log("getLocalStorage init value is: %O", this.allowMotionSensors )
            let allowMotionSensors = await Preferences.get({ key: 'allowMotionSensors' })
            this.allowMotionSensors = allowMotionSensors.value === "1" ? true : false

            let customDie = await Preferences.get({ key: 'customDie' })
            this.dice[4] = JSON.parse(customDie.value as string)

        },

        async getLocalStorageCustomDice() {

            console.log("getLocalStorageCustomDice 111 this.dice is: %O", this.dice )

            return new Promise ( async (resolve, reject) => {
                let { value } = await Preferences.get({ key: 'customDie' })

                console.log("getLocalStorageCustomDice value is: %O", value )
                console.log("getLocalStorageCustomDice this.dice is: %O", JSON.parse(value as string) )
    
                if (this.dice != null && this.dice[0] != null) {
                    this.dice[0] = JSON.parse(value as string)
                }
                resolve(JSON.parse(value as string))
            })
        },

        async updateLocalStorage() {
            return new Promise ( async (resolve, reject) => {

                console.log("updateLocalStorage this.dice[0]  %O", this.dice[0])

                await Preferences.set({ key: 'customDie', value: JSON.stringify(this.dice[0]) })
                .then( () => {
                    resolve
                })
            })
        }



    }
})