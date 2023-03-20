<script setup>
// STORE
import { usePhotodiceAppStore } from '~/stores/app'
const store = usePhotodiceAppStore()
</script>
<template>
    <div class="w-full h-full flex flex-col justify-center items-center">

        <!--
        position: absolute;
        top: -150px;
        width: 100%;
        text-align: center;
        opacity: 0;
        transition: opacity .6s ease-out;
        <div :class="!DiceState.hasRolled ? 'enabled' : '' " class="helper">
            <h1>Shake your phone!</h1>
            <p>Or touch the dice</p>
        </div>
        -->

        <div v-if="showSensorPermissionExperience" class="flex justify-center space-x-2 items-center absolute top-4 mt-12 mx-4 z-50 pointer-events-auto bg-yellow-200 text-xs p-2 text-orange-800">
            <div>It's better with motion sensors enabled</div>
            <div @click="checkMotionPermission()" class="p-2 bg-orange-600 text-white cursor-pointer pointer-events-auto">Allow</div>
            <div @click="showSensorPermissionExperience = false" class="test-xl font-bold p-2 rounded-full cursor-pointer pointer-events-auto">X</div>
        </div>

        <!-- DEV TOOLS -->
        <div v-if="showDevTools" class="w-full my-8 overflow-hidden">
            <div>{{ DiceState.spinning }}</div>
            <div>{{ devOutput_motionEvent }}</div>
            <div>Dice face: {{ DiceState.face }}</div>
            <div>currentInteraction: {{ currentInteraction }}</div>
            <div>Dice face: {{ DiceState.face }}</div>
            <div>Dice spinning: {{ DiceState.spinning }}</div>
            <div>Use bg map: {{ useBGmap }}</div>
            <div class="whitespace-nowrap">sensors: {{ sensors.gyrocoords }}</div>
            <!-- <div>accel: {{ DiceState.accelerometer }}</div> -->
            <!-- <div class="absolute whitespace-nowrap">mouseTouchCoords: {{ mouseTouchCoords }}</div> -->
        </div>

        <div class="absolute bottom-4">
            <div @click="getRandomDieFace()" class="p-4 px-8 rounded-full bg-white hover:bg-gray-100 text-teal-800 hover:scale-105 transition cursor-pointer">ROLL</div>
        </div>

        <!-- DIE -->
        <div id="dieParent" ref="dieParent"  @click="handleClick()" class="die cursor-pointer" :class="[
            DiceState.spinning ? 'spinning' : DiceState.hasRolled ? 'standing' : '',
            {'useBGmap' : useBGmap}
        ]
        ">
            <div id="dieInner" class="cube">
                <div v-for="(image, index) in store.dice[store.currentDie].images" :key="'face-'+index"
                :class="[
                    Die.faces[index].name,
                    (DiceState.face === index+1 || DiceState.spinning) ? 'lightFacing' : ''
                ]"
                :style="!useBGmap ? 'background-image: url(' + (image.type == 'localStorage' ? image.src : 'images/' + image.src) + ')' : ''">
                </div>
            </div>
        </div>

    </div>
</template>

<script>

import { Motion } from '@capacitor/motion'

export default {
    name: "Dice",

    props: {

    },

    components: {

    },

    data() {
        return {
            showDevTools:false,
            showSensorPermissionExperience: false,
            hasInteracted: false,

            useBGmap: false,

            DiceState: {
                face: 1, // TODO: If we start with any face other than 1, on page load the cube transform to that face doesn't apply, we just see face 1 (default cube non-transformed orientation). As soon as you move the mouse, the cube spins to the correct face we specify here in config.
                spinning: false,
                accelerometer: [0, 0], // old: [0.3, 0.25],
                hasRolled: false // TODO: For very first roll after page load, let's try to make the random function NOT land on "1" right away.
            },

            Die: {
                faces: [
                    {
                        name: 'front',
                        orientation: [0, 0, 0],
                        image: null //this.dummyImages[0]
                    },
                    {
                        name:'back',
                        orientation: [90, 0, 0],
                        image: null //this.dummyImages[1]
                    },
                    {
                        name: 'top',
                        orientation: [0, 90, 0],
                        image: null //this.dummyImages[2]
                    },
                    {
                        name: 'bottom',
                        orientation: [0, -90, 0],
                        image: null //this.dummyImages[3]
                    },
                    {
                        name: 'left',
                        orientation: [-90, 0, 0],
                        image: null //this.dummyImages[4]
                    },
                    {
                        name: 'right',
                        orientation: [-180, 0, 0],
                        image: null //this.dummyImages[5]
                    }
                ]

                /*
                faces: {
                    'front': {
                        orientation: [0, 0, 0],
                        image: null //this.dummyImages[0]
                    },
                    'back': {
                        orientation: [90, 0, 0],
                        image: null //this.dummyImages[1]
                    },
                    'top': {
                        orientation: [0, 90, 0],
                        image: null //this.dummyImages[2]
                    },
                    'bottom': {
                        orientation: [0, -90, 0],
                        image: null //this.dummyImages[3]
                    },
                    'left': {
                        orientation: [-90, 0, 0],
                        image: null //this.dummyImages[4]
                    },
                    'right': {
                        orientation: [-180, 0, 0],
                        image: null //this.dummyImages[5]
                    }
                }
                */
            },

            dummyImages: [
                'dummy-400x400-BodyLanguage.jpg',
                'dummy-400x400-CharlesBaudelaire.jpg',
                'dummy-400x400-Eye.jpg',
                'dummy-400x400-HappyBoy.jpg',
                'dummy-400x400-Headphone.jpg',
                'dummy-400x400-TShirt.jpg'
            ],


            // FOR OLD-WAY of rendering faces
            faceViews: [
                [0, 0, 0],
                [90, 0, 0],
                [0, 90, 0],
                [0, -90, 0],
                [-90, 0, 0],
                [-180, 0, 0]
            ],


            // INTERACTIONS

            accelerationHandler: null,
            orientationHandler: null,
            currentInteraction: null, // mouse, touch, sensor
            mouseTouchCoords: [ 1, 1 ],

            sensors: {
                permission: false,
                gyro: false,
                orientation: false,
                gyrocoords: {
                    tilt: null,
                    turn: null,
                    rotate: null
                }
            },

            devOutput_motionEvent: null

        }

    },

    // TODO: Affirm that async on mounted() is ok
    async mounted() {

        // Directly listen for cube animation events (e.g. spin),
        // this way browser animation events dictate everything; more natural.
        let dieParent = document.getElementById("dieParent")
        //let dieParent = this.$refs.dieParent //document.getElementById("dieParent")
        //cubeDiv.addEventListener("animationstart", myStartFunction)
        dieParent.addEventListener("animationend", () => {
            this.DiceState.spinning = false
        })

        document.addEventListener('keydown', (event) => {
            this.handleKeyDown(event)
        })

        document.addEventListener('mousemove', (event) => {
            this.hasInteracted ? null : this.hasInteracted = true
            // Basic way of allowing sensors to take priority; basically we ignore this if sensors are firing
            if (!this.currentInteraction != 'sensor') {
                let x = (window.innerWidth / 2 - event.pageX) / -5
                let y = (window.innerHeight / 2 - event.pageY) / 5

                // TODO: Is this better?
                // let x = e.clientX;
                // let y = e.clientY;

                this.mouseTouchCoords = [ x, y ]
                this.currentInteraction = 'mouse'
            }

        })

        document.addEventListener('touchmove', (e) => {
            this.hasInteracted ? null : this.hasInteracted = true
            // Basic way of allowing sensors to take priority; basically we ignore this if sensors are firing
            if (this.currentInteraction != 'sensor') {
                let evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent
                let touch = evt.touches[0] || evt.changedTouches[0]
                let x = touch.pageX
                let y = touch.pageY
                this.mouseTouchCoords = [ x, y ]
                this.currentInteraction = 'touch'
            }
        })

        await this.checkMotionPermission()

    },


    methods: {

        handleKeyDown(e) {
            console.log("func handleKeyDown %O", e)
            if (e.code === 'Space') {
                this.getRandomDieFace()
            }
        },

        handleClick() {
            console.log("func handleClick()")
            this.getRandomDieFace()
        },

        getRandomDieFace() {
            // Todo: integrate this.Die.faces length here
            this.rollToFace(Math.floor(Math.random() * 6 + 1))
        },

        rollToFace(face) {
            console.log("func roll(), face: %O", face)

            /*
            // TODO: Return to original shortform, like this:
            this.setState({
                face: 1,
                spinning: true,
                hasRolled: true
            })
            */
            this.DiceState.face = face
            this.DiceState.spinning = true
            this.DiceState.hasRolled = true

            // NOTE: Spin is finished via trigger of animationend; see code.

        },



        // ---------------------------------------------
        // MOTION LISTENERS
        // ---------------------------------------------

        async checkMotionPermission() {

            // Any browser using requestPermission
            if (window.DeviceOrientationEvent && typeof window.DeviceOrientationEvent.requestPermission === 'function') {

                // Technically, this acts as "check permission" in the device.
                // If previously granted, user will see no prompts and listeners get setup.
                // If error, we show special UI to the user
                await window.DeviceOrientationEvent.requestPermission()
                .then(permissionState => {
                    if (permissionState == 'granted') {
                        this.showSensorPermissionExperience = false
                        this.setMotionListeners()
                    } else {
                        // TODO: Record in app that they didn't give permission; for future reference
                    }
                })
                .catch( (error) => {
                    console.log("Error getting sensor permission: %O", error)
                    this.showSensorPermissionExperience = true
                })

            // All other browsers
            } else {
                this.setMotionListeners()
            }

        },

        async setMotionListeners() {

            this.orientationHandler = await Motion.addListener('orientation', event => {

                this.hasInteracted ? null :  this.hasInteracted = true
                //console.log('Device orientation event: %O', event)

                this.devOutput_motionEvent = {
                    x: event.alpha.toFixed(2),
                    y: event.beta.toFixed(2),
                    z: event.gamma.toFixed(2)
                }

                this.currentInteraction = 'sensor'

                if (!this.DiceState.spinning) {
                    let tilt = event.beta
                    let turn = event.alpha
                    let rotate = event.gamma

                    const x = tilt / 180 ?? 0
                    const y = rotate / 90 ?? 0
                    this.DiceState.accelerometer = [x, y]
                }
                
            })
            
            
            this.accelerationHandler = await Motion.addListener('accel', event => {

                this.hasInteracted ? null :  this.hasInteracted = true
                //console.log('Device acceleration event: %O', event)

                this.devOutput_motionEvent = {
                    x: event.rotationRate.alpha.toFixed(2),
                    y: event.rotationRate.beta.toFixed(2),
                    z: event.rotationRate.gamma.toFixed(2)
                }

                this.currentInteraction = 'sensor'

                if ((event.rotationRate.alpha > 256 || event.rotationRate.beta > 256 || event.rotationRate.gamma > 256) && !this.DiceState.spinning) {
                    this.getRandomDieFace()
                }
            })

        },

        stopMotionListeners() {
            // Stop the acceleration listener
            // OLD CODE
            /*
            const stopAcceleration = () => {
                if (accelerationHandler) {
                    accelerationHandler.remove()
                }
            }
            */
        },

        destroyListeners() {
            // TODO: Make this proper. Also, prob want to trigger this in Vue's beforeDestroy state.

            /*
            // Old code:
            const removeListeners = () => {
                Motion.removeAllListeners()
            }
            */
        },

        setMotionListenersEXPERIMENTAL() {

            // EARLIER CODE, very messy

            // Below may be more optimal in future, but there may be browser support issues.

            /*
            //navigator.permissions.query({ name: "geolocation" }).then((result) => {
            navigator.permissions.query({ name: 'gyroscope' })
            .then(result => {
                if (result.state === 'granted') { // <-- this returns true

                    try {
                        this.gyroscope = new Gyroscope({frequency: 60})
                        this.gyroscope.addEventListener('reading', e => {
                            console.log(e)
                        })
                        this.gyroscope.start()
                    } catch(error) {
                        // Handle construction errors.
                        if (error.name === 'SecurityError') {
                            // See the note above about feature policy.
                            alert('Sensor construction was blocked by a feature policy.')
                        } else if (error.name === 'ReferenceError') {
                            alert('Sensor is not supported by the User Agent.')
                        } else {
                            alert(error)
                        }
                    }
                } else {
                    alert('No gyroscope or denied, computer assumed, falling back to keyboard.')
                    // fallback setup here
                }
            })

            //try {
                if (window.RelativeOrientationSensor) {
                    const sensorOrientation = new window.RelativeOrientationSensor({ frequency: 60, referenceFrame: 'screen' })

                    // console.log("Permissions granted %O", results)
                    //sensorOrientation = new window.RelativeOrientationSensor({ frequency: 60, referenceFrame: 'screen' })
                    this.sensors.orientation = true
                    sensorOrientation.addEventListener('reading', () => {

                        console.log("orientationSensor reading")
                        if (!this.DiceState.spinning) {
                            this.currentInteraction = 'sensor'
                            this.DiceState.accelerometer = sensorOrientation.quaternion.map((x, i) => {
                                if (i < 2) {
                                    return Math.round(x * 1000 * 1000) / (1000 * 1000)
                                }
                            })
                        }
                    })
                    sensorOrientation.start()
                } else {
                    window.addEventListener('deviceorientation', (e) => {
                        console.log("legacy deviceorientation reading")
                        this.currentInteraction = 'sensor'

                        let tilt = e.beta
                        let turn = e.alpha
                        let rotate = e.gamma

                        if (!this.DiceState.spinning) {
                            const x = tilt / 180 ?? 0
                            const y = rotate / 90 ?? 0
                            this.DiceState.accelerometer = [x, y]
                        }


                        //this.sensors.gyrocoords.tilt = tilt.toFixed(2)
                        //this.sensors.gyrocoords.turn = turn.toFixed(2)
                        //this.sensors.gyrocoords.rotate = rotate.toFixed(2)

                        //if ((tilt > 60 || rotate > 50) && !this.DiceState.spinning) {
                        //    this.getRandomDieFace()
                        //}

                    })
                }

           // } catch (e) {


           // }

           // try {
                if (window.Gyroscope) {
                    const sensorGyroscope = new Gyroscope({ frequency: 60 })
                    this.sensors.gyro = true
                    sensorGyroscope.addEventListener('reading', () => {
                        console.log("gyroscope reading")
                        this.sensors.gyrocoords.x = sensorGyroscope.x
                        this.sensors.gyrocoords.y = sensorGyroscope.z
                        if ((sensorGyroscope.x > 9 || sensorGyroscope.z > 4) && !this.DiceState.spinning) {
                            this.getRandomDieFace()
                        }
                    })
                    sensorGyroscope.start()
                } else {

                }
           // } catch (e) {

            //}


            /*
            try {

                var sensorOrientation = null
                var sensorGyroscope = null
                Promise.all([
                    navigator.permissions.query({ name: "accelerometer" }),
                    navigator.permissions.query({ name: "gyroscope" })
                ])
                .then((results) => {
                    if (results.every((result) => result.state === "granted")) {

                    

                    } else {
                        console.log("No permissions to use RelativeOrientationSensor.")
                    }
                })

            } catch (e) {
                console.log("try catch error on sensor reading: %O", e)
                // Try using legacy DeviceOrientationEvent API instead
                window.addEventListener('deviceorientation', (e) => {
                    console.log("legacy deviceorientation reading")
                    if (!this.DiceState.spinning) {
                        const x = e.beta / 180 ?? 0
                        const y = e.gamma / 90 ?? 0
                        this.DiceState.accelerometer = [x, y]
                    }
                })

            }
            */

        },

    },


    computed: {

        css_dieShadow_BorderRadius() {
            return this.DiceState.spinning ? '50%' : '10px'
        },

        css_dieShadow_Blur() {
            return this.DiceState.spinning ? 'blur(80px)' : 'blur(20px)'
        },

        css_dieShadow_Transform() {
            return 'translateZ(' + (this.DiceState.spinning ? '-50' : '0') + 'px) translate3d( 0, 0, 0)'
        },

        css_cubeTransformSpinning() {
            const [x, y, z] = this.Die.faces[this.DiceState.face - 1].orientation
            return 'rotateX(' + x + 'deg) rotateY(' + y + 'deg) rotateZ(' + z + 'deg) translate3d( 0, 0, 0)'
        },

        css_cubeTransformStanding() {

            // FOR REGULAR DIE STATE
            
            // Calculates die 3d perspective

            // Desktop: Mousing user will see cube follow the mouse
            // Mobile: If sensors allowed, cube will follow rotation of device
            // Worse-cast: Cube has no perspective transform

            const [x, y, z] = this.Die.faces[this.DiceState.face - 1].orientation

            let [ax, ay] = [0,0]
            if (this.currentInteraction == 'sensor') {
                ax = this.DiceState.accelerometer[0]
                ay = this.DiceState.accelerometer[1]
            } else if (this.currentInteraction == 'mouse' || this.currentInteraction == 'touch') {
                ax = this.mouseTouchCoords[0]
                ay = this.mouseTouchCoords[1]
            } 

            if (!this.hasInteracted) {
                ax = 40
                ay = 40
            }

            // TODO: We need a scale modifier for mouse (and probably touch) coords such that, depending on the size of the viewport, we change the 
            // angle modifier.
            // EXAMPLE: Make PC browser narrow, and observe mouse hardly has an effect on perspective.
            // Now, make viewport super large, and observe mouse movement nicely changes cube perspective.

            let angleModifier = 40
            let speedModifier = 0.002
            let rx = 0
            let ry = 0
            let rz = 0

            // BELOW are modifiers per-face
            // TODO: Make a nice algorithm for this, instead of so many lines.
            // Also, now it's confusing because a lot of flipping of x,y,z occurs.

            // FACE 1
            if (this.DiceState.face === 1) {

                if (!this.currentInteraction || this.currentInteraction == 'mouse' || this.currentInteraction == 'touch') {
                    ry = x + (speedModifier * (ax * angleModifier))
                    rx = y + (speedModifier * (ay * angleModifier))
                    rz = z
                } else if (this.currentInteraction == 'sensor') {
                    rx = x + (ax * angleModifier)
                    ry = y + (-ay * angleModifier)
                    rz = z
                }

            // FACE 2
            } else if (this.DiceState.face === 2) {

                if (this.currentInteraction == 'mouse' || this.currentInteraction == 'touch') {
                    ry = x + (speedModifier * (ax * angleModifier))
                    rx = y
                    rz = z + (speedModifier * (ay * angleModifier))
                } else if (this.currentInteraction == 'sensor') {
                    rx = x + (ax * angleModifier)
                    ry = y
                    rz = z + (ay * angleModifier)
                }

            
            // FACE 3
            } else if (this.DiceState.face === 3) {

                if (this.currentInteraction == 'mouse' || this.currentInteraction == 'touch') {
                    rx = y + (speedModifier * (ay * angleModifier))
                    ry = z
                    rz = x + (speedModifier * (-ax * angleModifier))
                } else if (this.currentInteraction == 'sensor') {
                    rx = x + (ax * angleModifier)
                    ry = y + (-ay * angleModifier)
                    rz = z
                }

            // FACE 4
            } else if (this.DiceState.face === 4) {

                if (this.currentInteraction == 'mouse' || this.currentInteraction == 'touch') {
                    rx = y + (speedModifier * (ay * angleModifier))
                    ry = z
                    rz = x + (speedModifier * (ax * angleModifier))

                } else if (this.currentInteraction == 'sensor') {
                    rx = x + (ax * angleModifier)
                    ry = y + (-ay * angleModifier)
                    rz = z
                }


            // FACE 5
            } else if (this.DiceState.face === 5) {

                if (this.currentInteraction == 'mouse' || this.currentInteraction == 'touch') {
                    rx = y
                    ry = x + (speedModifier * (ax * angleModifier))
                    rz = z + (speedModifier * (-ay * angleModifier))
                } else if (this.currentInteraction == 'sensor') {
                    rx = x + (ax * 40)
                    ry = y
                    rz = z + (speedModifier * (-ay * angleModifier))
                }

            // FACE 6
            } else if (this.DiceState.face === 6) {

                if (this.currentInteraction == 'mouse' || this.currentInteraction == 'touch') {
                    rx = y + (speedModifier * (ay * angleModifier))
                    ry = x + (speedModifier * (ax * angleModifier))
                    rz = z
                } else if (this.currentInteraction == 'sensor') {
                    rx = x + (ax * angleModifier)
                    ry = y + (ay * angleModifier)
                    rz = z
                }
            }

            // FINALLY, we pass values, and perform flipping if we need to (based on input method)
            // TODO: We use translate3d throughout app as a trick to fight anti-aliasing. Does it work? Do we need it?
            if (!this.currentInteraction || this.currentInteraction == 'mouse' || this.currentInteraction == 'sensor') {
                return 'rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) rotateZ(' + rz + 'deg) translate3d( 0, 0, 0)'
            } else if (this.currentInteraction == 'touch') {
                return 'rotateX(' + (-rx) + 'deg) rotateY(' + (-ry) + 'deg) rotateZ(' + rz + 'deg) translate3d( 0, 0, 0)'
            }
        }

    }

}

</script>

<style scoped>


/* -------------------------------- */
/* DIE FOUNDATION                   */
/* -------------------------------- */

/* MAIN PARENT */
.die {
    /* perspective: 800px; */
    perspective-origin: 50% 100px;
    background-color: transparent;
}

/* DIE SHADOW */
.die::before {
    content: "";
    display: block;
    position: absolute;
    width: 200px;
    height: 200px;
    background: rgba(0, 0, 0, 1);
    transition: filter 0.05s ease-in-out, border-radius 0.05s ease-in-out, transform 0.05s ease-in-out;
    /* todo: What;'s the best way to do dynamic variables? Should we do it in the template? Or, if this way, is computed() the best, or not? */
    filter: v-bind('css_dieShadow_Blur');
    border-radius: v-bind('css_dieShadow_BorderRadius');
    transform: v-bind('css_dieShadow_Transform');
}

/* DIE BOUNCE */
.die.standing {

    /* Bounce effect. Occurs on page render and any time cube stops spinning.
    We do the bounce here on the entire die, as opposed to the inner cube,
    because the inner cube already has complex rotation transformation. This way is cleaner. */

    /* TODO: Ideally this line lives plainly in .dice, but for some reason it's not reactive that way.
    The bounce would only occur once, on page load. Having a reactive class "standing" with the rule here, makes
    bounce occur on page load AND after every spin, as desired.
    */

    animation: bounce 0.4s linear;
}

/* DIE FLYING IN AIR */
.die.spinning {
    animation: grow 2s linear;
}


/* INNER CUBE */
.cube {
    position: relative;
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;

    /* When not spinning, we dynamically adjust perspective according to input (mouse, touch, device rotation, etc) */
    transform: v-bind('css_cubeTransformStanding');

    /* TODO: Earlier in dev, this seems to help smooth out the ending of a spin, however on iOS Safari it fuck's with the spin animation that's already occurring. */
    /*
    transition: transform 2s cubic-bezier(0, .82, .47, 1);
    */

    /* Stuff that may help anti-aliasing, according to internet */
    will-change: transform;
    box-shadow: 0 0 0 1px transparent;
    border: 1px solid rgba(0, 0, 0, 0.1);
    outline: 1px solid transparent;
}

.spinning .cube {

    /* This time (e.g. 2s) needs to closely match the timeout for when spinner ends in code */
    animation: spin 2s linear;

    /* TODO: Look into timing function, any improvements to be had?*/
    /* animation-timing-function: cubic-bezier(0.280, 0.840, 0.420, 1); */

    /* TODO: Is this needed? Do we want to allow dynamic perspective transform during a spin? */
    /* transform: v-bind('css_cubeTransformSpinning'); */
}


/* -------------------------------- */
/* ANIMATIONS                       */
/* -------------------------------- */

/* SPIN ANIMATION */
@keyframes spin {
    from { transform: rotateX(0deg)             rotateY(30deg)             rotateZ(0deg); }
    to   { transform: rotateX(calc(360deg * 3)) rotateY(calc(360deg * 2))  rotateZ(calc(360deg * 0.5)); }
    /* TODO: Check this calc; is it the best? Shall we make a computed so we can make a more sophisticated thing with randomization? */
}

@keyframes grow {
    0%   { transform: scale(1) }
    50%  { transform: scale(1.4) }
    100% { transform: scale(1) }
}

@keyframes bounce {
    0%   { transform: scale(1.03) }
    20%  { transform: scale(1) }
    40%  { transform: scale(1.02) }
    60%  { transform: scale(1) }
    80%  { transform: scale(1.01) }
    100% { transform: scale(1) }
}



/* -------------------------------- */
/* CUBE FACES                       */
/* -------------------------------- */

.cube div {
    position: absolute;
    width: 200px;
    height: 200px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
    transform-origin: center;
    background-position: center;
    /* Smooth out anti-aliasing a little; works */
    filter: blur(0.01px);
}

/* In the case of using a mapped image, we apply that here */
.useBGmap .cube div {
    background-image: url("/dice_texture.svg");
    background-size: 415%;
    border-radius: 30px;
}

/* Old code, attempt to lighten up faces that were visible to the user. This was before we make picture faces */
.cube div.lightFacing {
    background-color: hsl(0, 0%, 95%);
}

.cube div:not(.lightFacing) {
    background-color: hsl(0, 0%, 80%);
}

/* TODO: Possibly don't need this? Is it just a backup if no image faces are loaded? */
.cube .filler {
    /* background-color: red; */
    border-radius: 5px;
}

.front {
    transform: translateZ(100px) scale(0.998);
}
.front.filler {
    transform: translateZ(70px) scale(0.998);
}

.back {
    transform: translateZ(-100px) rotateY(180deg) scale(0.998);
}
.back.filler {
    transform: translateZ(-70px) scale(0.998);
}

.top {
    transform: rotateX(90deg) translateZ(100px) scale(0.998);
}
.top.filler {
    transform: rotateX(90deg) translateZ(70px) scale(0.998);
}

.bottom {
    transform: rotateX(-90deg) translateZ(100px) scale(0.998);
}
.bottom.filler {
    transform: rotateX(-90deg) translateZ(70px) scale(0.998);
}

.left {
    transform: rotateY(-90deg) translateZ(100px) scale(0.998);
}
.left.filler {
    transform: rotateY(-90deg) translateZ(70px) scale(0.998);
}

.right {
    transform: rotateY(90deg) translateZ(100px) scale(0.998);
}
.right.filler {
    transform: rotateY(90deg) translateZ(70px) scale(0.998);
}

.useBGmap .front {
    background-position: 66.2% 50%;
}
.useBGmap .back {
    background-position: 1% 50%;
}
.useBGmap .top {
    background-position: 66.2% 0.9%;
}
.useBGmap .bottom {
    background-position: 66.2% 98.3%;
}
.useBGmap .left {
    background-position: 33.4% 50%;
}
.useBGmap .right {
    background-position: 99% 50%;
}


</style>