// FOR NATIVE MOBILE APP instances only


import { AppUpdate, AppUpdateInfo } from '@capawesome/capacitor-app-update'
import { Capacitor } from '@capacitor/core'

// We check whether there's a new version of the app on relative app store
// and take appropriate logic (e.g. force user to do immediate update)


// UTILITIES
const getCurrentAppVersion = async () => {
    const result = await AppUpdate.getAppUpdateInfo()
    return result.currentVersion
}

/*
const getAvailableAppVersion = async () => {
    const result = await AppUpdate.getAppUpdateInfo()
    return result.availableVersion
}
  
const openAppStore = async () => {
    await AppUpdate.openAppStore()
}
  
const performImmediateUpdate = async () => {
    const result = await AppUpdate.getAppUpdateInfo()
    if (result.updateAvailability !== AppUpdateAvailability.UPDATE_AVAILABLE) {
        return
    }
    if (result.immediateUpdateAllowed) {
        await AppUpdate.performImmediateUpdate()
    }
}

const startFlexibleUpdate = async () => {
    const result = await AppUpdate.getAppUpdateInfo()
    if (result.updateAvailability !== AppUpdateAvailability.UPDATE_AVAILABLE) {
        return;
    }
    if (result.flexibleUpdateAllowed) {
        await AppUpdate.startFlexibleUpdate()
    }
}
  
const completeFlexibleUpdate = async () => {
    await AppUpdate.completeFlexibleUpdate()
}
*/

export default defineNuxtRouteMiddleware((to, from) => {

    console.log("getCurrentAppVersion is: %O", getCurrentAppVersion)

    if (Capacitor.isNativePlatform()) {

        console.log("AppUpdate: user is a native mobile app!")
        
        // TODO: Is await a good thing here or not?

        // TODO: This fails on iOS. Disabling for now.
        /*

        await AppUpdate.getAppUpdateInfo().then( (appUpdateInfo) => {
            if (appUpdateInfo) {
                console.log("appUpdateInfo is: %O", appUpdateInfo)

                // TODO: Check existance of available update
                // If exists, then we bar user from the app temporarily, and force them to update

                // 1. initiate update:

                // 2. Do we also redirect them, in case they are able to exit out of updating and use the app?

                // TODO: Do we set in global store a flag along the lines of "allowedToUseApp" ?

            }
        })
        */
        


    } else {

        //console.log("AppUpdate: user is a web app!")
        // This is a web app user; and they inherently get auto-updates
        
        // TODO: Do we set in global store a flag along the lines of "allowedToUseApp" ?
    }


    //if (to.params.id === '1') {
    //    return abortNavigation()
    //}
    //return navigateTo('/')
    //next()
    return

})
