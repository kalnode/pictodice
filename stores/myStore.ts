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
export const useMyAlertsStore = defineStore('myAlerts', {
    state: () => ({

        allowMotionSensors: true,
        userInteractedWithPermissionPrompt: false,

        /*
        allowMotionSensors44: async () => {
            let { value } = await Preferences.get({ key: 'allowMotionSensors' })
            return value
        },
        */
        //allowMotionSensors44: Preferences.get({ key: 'allowMotionSensors' })

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

        // WORKS
        //doubleCount: (state) => state.count * 2,

        // TODO: Why does this return "object promise" ???
        permissionSetting: () => Preferences.get({ key: 'allowMotionSensors' }),

        //WORKS:
        //permissionSetting2: () => "ferfef",

        // OITHER TEST
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

        async initiliazeLocalStorage() {

            console.log("initiliazeLocalStorage init value is: %O", this.allowMotionSensors )

            let { value } = await Preferences.get({ key: 'allowMotionSensors' })

            console.log("initiliazeLocalStorage value is: %O", value )

            this.allowMotionSensors = value === "1" ? true : false

        },

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


    },
})