// FOR NATIVE MOBILE APP instances only

import { AppUpdate, AppUpdateInfo } from '@capawesome/capacitor-app-update'
import { Capacitor } from '@capacitor/core'

// We check whether there's a new version of the app on relative app store
// and take appropriate logic (e.g. force user to do immediate update)

const isNativePlatform = async () => {
    return await Capacitor.isNativePlatform()
}

// UTILITIES
const getCurrentAppVersion = () => {

    // TODO: Figure out why AppUpdate.getAppUpdateInfo() never works.
    // However, below, getAvailableAppVersion() does work!!!

    // FAILS
    // return await AppUpdate.getAppUpdateInfo()

    // WORKS
    return "DummyOutputFrom_getCurrentAppVersion"

    //return await AppUpdate.getAppUpdateInfo()

    // FAILS
    /*
    return new Promise( async(resolve, reject) => {
        await AppUpdate.getAppUpdateInfo()
        .then( (response) => {
            console.log("appUpdate getCurrentAppVersion RESPONSE %O", response)
            resolve(response)
        })
        .catch( (error) => {
            console.log("appUpdate getCurrentAppVersion ERROR %O", error)
            //reject(error)
        })
    })
    */

}

const getAvailableAppVersion = async () => {
    const result = await AppUpdate.getAppUpdateInfo()
    return result.availableVersion
}
  
const openAppStore = async () => {
    await AppUpdate.openAppStore()
}

/*
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
*/

/*
const completeFlexibleUpdate = async () => {
    await AppUpdate.completeFlexibleUpdate()
}
*/



export default defineNuxtPlugin(() => {

    return {
        provide: {
            isNativePlatform: () => isNativePlatform(),
            getCurrentAppVersion: () => getCurrentAppVersion(),
            getAvailableAppVersion: () => getAvailableAppVersion(),
            openAppStore: () => openAppStore(),
        }
      }

})