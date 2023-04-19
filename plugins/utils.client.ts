import { Filesystem, Directory, Encoding } from '@capacitor/filesystem'
//import { Directory, Filesystem, ReaddirResult, ReadFileResult } from '@capacitor/filesystem';


const getViewportDimensions = () => {

    // -----------------------
    // TODO: Below is old logic, for some good reason regarding iPhone. Need better high-level explanation here
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    // -----------------------

    // TODO: Make typescript support here. Can we not do inline typing?
    let finalOutput = {
        value: window.innerWidth,
        context: '' //'Narrow' | 'Wide'
    }

    if (window.innerWidth < 640) {
        finalOutput.context = "narrow"
    } else if (window.innerWidth < 1024) {
        finalOutput.context = "medium"
    } else {
        finalOutput.context = "wide"
    }

    return finalOutput
}


// TODO: Check if all this typing is proper. So far this seems to function ok.
const debounce = (func:Function, time:number) => {
    var time = time || 100
    var timer:number
    return function (event:object) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(func, time, event)
    }
}



export default defineNuxtPlugin(() => {

    return {
        provide: {
            getViewportDimensions: () => getViewportDimensions(),
            debounce: (func:Function, time:number) => debounce(func, time)
        }
      }

})
