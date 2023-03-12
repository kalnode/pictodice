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

        <div class="w-full my-8 overflow-hidden">
            <div @click="reqPermissionMotion" class="p-2 bg-gray-200 cursor-pointer">Sensor Permission</div>
            <div>Dice face: {{ DiceState.face }}</div>
            <div>Dice spinning: {{ DiceState.spinning }}</div>
            <div>Use bg map: {{ useBGmap }}</div>
            <div>currentInteraction: {{ currentInteraction }}</div>
            <div class="whitespace-nowrap">sensors: {{ sensors.gyrocoords }}</div>
            <!-- <div>accel: {{ DiceState.accelerometer }}</div> -->
            <!-- <div class="absolute whitespace-nowrap">mouseTouchCoords: {{ mouseTouchCoords }}</div> -->
        </div>

        <div @click="handleClick()" class="dice cursor-pointer" :class="[
            DiceState.spinning ? 'spin' : 'perspective',
            {'useBGmap' : useBGmap}
        ]
        ">
            <div :class="DiceState.spinning ? 'spin' : 'perspective'" class="cube">

                <div v-for="(face, facename, index) in Die.faces" :key="'face-'+index"
                :class="[
                    facename,
                    (DiceState.face === index+1 || DiceState.spinning) ? 'lightFacing' : ''
                ]"
                :style="!useBGmap ? 'background-image: url(images/' + dummyImages[index] + ')' : ''">
                </div>

                <!--
                <div
                :class="(DiceState.face === 1 || DiceState.spinning) ? 'lightFacing' : ''"
                :style="!useBGmap ? 'background-image: url(images/' + dummyImages[1 - 1] + ')' : ''"
                class="front"></div>
                <div v-if="useBGmap" class="front filler"></div>

                <div :class="(DiceState.face === 6 || DiceState.spinning) ? 'lightFacing' : '' "
                :style="!useBGmap ? 'background-image: url(images/' + dummyImages[6 - 1] + ')' : ''"
                class="back"></div>
                <div v-if="useBGmap" class="back filler"></div>

                <div :class="(DiceState.face === 5 || DiceState.spinning) ? 'lightFacing' : '' "
                :style="!useBGmap ? 'background-image: url(images/' + dummyImages[5 - 1] + ')' : ''"
                class="top"></div>
                <div v-if="useBGmap" class="top filler"></div>

                <div :class="(DiceState.face === 2 || DiceState.spinning) ? 'lightFacing' : '' "
                :style="!useBGmap ? 'background-image: url(images/' + dummyImages[2 - 1] + ')' : ''"
                class="bottom"></div>
                <div v-if="useBGmap" class="bottom filler"></div>

                <div :class="(DiceState.face === 3 || DiceState.spinning) ? 'lightFacing' : '' "
                :style="!useBGmap ? 'background-image: url(images/' + dummyImages[3 - 1] + ')' : ''"
                class="left"></div>
                <div v-if="useBGmap" class="left filler"></div>

                <div :class="(DiceState.face === 4 || DiceState.spinning) ? 'lightFacing' : '' "
                :style="!useBGmap ? 'background-image: url(images/' + dummyImages[4 - 1] + ')' : ''"
                class="right"></div>
                <div v-if="useBGmap" class="right filler"></div>
                -->
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Dice",

    props: {

    },

    components: {

    },

    data() {
        return {

            useBGmap: false,

            currentInteraction: null, // mouse, touch, sensor

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

            DiceState: {
                face: 6,
                spinning: false,
                accelerometer: [0.3, 0.25],
                hasRolled: false
            },

            Die: {
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
            },

            faceViews: [
                [0, 0, 0],
                [90, 0, 0],
                [0, 90, 0],
                [0, -90, 0],
                [-90, 0, 0],
                [-180, 0, 0]
            ],

            dummyImages: [
                'dummy-400x400-BodyLanguage.jpg',
                'dummy-400x400-CharlesBaudelaire.jpg',
                'dummy-400x400-Eye.jpg',
                'dummy-400x400-HappyBoy.jpg',
                'dummy-400x400-Headphone.jpg',
                'dummy-400x400-TShirt.jpg'
            ],

            mouseTouchCoords: [ 0, 0 ]

        }

    },

    mounted() {
        document.addEventListener('keydown', (e) => {
            this.handleKeyDown(e)
        })

        document.addEventListener('mousemove', (e) => {
            let x = (window.innerWidth / 2 - e.pageX) / -5
            let y = (window.innerHeight / 2 - e.pageY) / 5

            // TODO: Is this better?
            // let x = e.clientX;
            // let y = e.clientY;

            this.mouseTouchCoords = [ x, y ]
            this.currentInteraction = 'mouse'
        })

        document.addEventListener('touchmove', (e) => {
            let evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent
            let touch = evt.touches[0] || evt.changedTouches[0]
            let x = touch.pageX
            let y = touch.pageY
            this.mouseTouchCoords = [ x, y ]
            this.currentInteraction = 'touch'
        })

        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
            this.reqPermissionMotion()
        } else {
            this.setMotionListeners()
        }

    },


    methods: {

        setMotionListeners() {

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
            */
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

                        /*
                        this.sensors.gyrocoords.tilt = tilt.toFixed(2)
                        this.sensors.gyrocoords.turn = turn.toFixed(2)
                        this.sensors.gyrocoords.rotate = rotate.toFixed(2)

                        if ((tilt > 60 || rotate > 50) && !this.DiceState.spinning) {
                            this.random()
                        }
                        */
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
                            this.random()
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

        handleKeyDown(e) {
            console.log("func handleKeyDown %O", e)
            if (e.code === 'Space') {
                this.random()
            }
        },

        handleClick() {
            console.log("func handleClick()")
            this.random()
        },

        random() {
            console.log("func random()")

            // Todo: integrate dicefaces length here
            this.roll(Math.floor(Math.random() * 6 + 1))
        },



        roll(face) {
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

            // After X seconds, set the face and stop spinning
            setTimeout(() => {
                //this.DiceState.face = face
                this.DiceState.spinning = false
            }, 2000)
        },

        getRandom(max, min) {
            return (Math.floor(Math.random() * (max-min)) + min) * 90;
        },

        reqPermissionMotion() {

            if (typeof DeviceOrientationEvent.requestPermission === 'function') {
                DeviceOrientationEvent.requestPermission()
                .then(permissionState => {
                    if (permissionState === 'granted') {
                        this.sensors.permission = true
                        this.setMotionListeners()
                    } else {
                        this.sensors.permission = "noooo"
                    }
                })
                .catch( (error) => {
                    console.log("Error getting sensor permission: %O", error)
                })
            }


        }

    },


    computed: {

        diceBG_BorderRadius() {
            return this.DiceState.spinning ? '50%' : '10px'
        },

        diceBG_Shadow() {
            return this.DiceState.spinning ? 'blur(80px)' : 'blur(20px)'
        },

        diceBG_transform() {
            return 'translateZ(' + (this.DiceState.spinning ? '-50' : '0') + 'px) translate3d( 0, 0, 0)'
        },

        cubeTransformSpinning() {
            const [x, y, z] = this.faceViews[this.DiceState.face - 1]
            return 'rotateX(' + x + 'deg) rotateY(' + y + 'deg) rotateZ(' + z + 'deg) translate3d( 0, 0, 0)'
        },

        cubeTransformPerspective() {

            // Calculate perspective rotation with device orientation effect
            const [x, y, z] = this.faceViews[this.DiceState.face - 1]

            const [ax, ay] = this.currentInteraction == 'sensor' ? this.DiceState.accelerometer : this.mouseTouchCoords
            
            let speedModifier = 0.002
            let rx = 0
            let ry = 0
            let rz = 0

            // FACE 1
            if (this.DiceState.face === 1) {

                if (this.currentInteraction == 'mouse' || this.currentInteraction == 'touch') {
                    ry = x + (speedModifier * (ax * 40))
                    rx = y + (speedModifier * (ay * 40))
                    rz = z
                } else if (this.currentInteraction == 'sensor') {
                    rx = x + (ax * 40)
                    ry = y + (-ay * 40)
                    rz = z
                }

            // FACE 2
            } else if (this.DiceState.face === 2) {

                if (this.currentInteraction == 'mouse' || this.currentInteraction == 'touch') {
                    ry = x + (speedModifier * (ax * 40))
                    rx = y
                    rz = z + (speedModifier * (ay * 40))
                } else if (this.currentInteraction == 'sensor') {
                    rx = x + (ax * 40)
                    ry = y
                    rz = z + (ay * 40)
                }

            
            // FACE 3
            } else if (this.DiceState.face === 3) {

                if (this.currentInteraction == 'mouse' || this.currentInteraction == 'touch') {
                    rx = y + (speedModifier * (ay * 40))
                    ry = z
                    rz = x + (speedModifier * (-ax * 40))
                } else if (this.currentInteraction == 'sensor') {
                    rx = x + (ax * 40)
                    ry = y + (-ay * 40)
                    rz = z
                }

            // FACE 4
            } else if (this.DiceState.face === 4) {

                if (this.currentInteraction == 'mouse' || this.currentInteraction == 'touch') {
                    rx = y + (speedModifier * (ay * 40))
                    ry = z
                    rz = x + (speedModifier * (ax * 40))

                } else if (this.currentInteraction == 'sensor') {
                    rx = x + (ax * 40)
                    ry = y + (-ay * 40)
                    rz = z
                }


            // FACE 5
            } else if (this.DiceState.face === 5) {

                if (this.currentInteraction == 'mouse' || this.currentInteraction == 'touch') {
                    rx = y
                    ry = x + (speedModifier * (ax * 40))
                    rz = z + (speedModifier * (-ay * 40))
                } else if (this.currentInteraction == 'sensor') {
                    rx = x + (ax * 40)
                    ry = y
                    rz = z + (speedModifier * (-ay * 40))
                }

            // FACE 6
            } else if (this.DiceState.face === 6) {

                if (this.currentInteraction == 'mouse' || this.currentInteraction == 'touch') {
                    rx = y + (speedModifier * (ay * 40))
                    ry = x + (speedModifier * (ax * 40))
                    rz = z
                } else if (this.currentInteraction == 'sensor') {
                    rx = x + (ax * 40)
                    ry = y + (ay * 40)
                    rz = z
                }
            }

            // TODO: We use translate3d throughout app as a trick to fight anti-aliasing. Does it work? Do we need it?
            if (this.currentInteraction == 'mouse' || this.currentInteraction == 'sensor') {
                return 'rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) rotateZ(' + rz + 'deg) translate3d( 0, 0, 0)'
            } else if (this.currentInteraction == 'touch') {
                return 'rotateX(' + (-rx) + 'deg) rotateY(' + (-ry) + 'deg) rotateZ(' + rz + 'deg) translate3d( 0, 0, 0)'
            }
        }

    },

}

</script>

<style scoped>

/* DIE FOUNDATION */
.dice {
    perspective: 800px;
    perspective-origin: 50% 100px;
    background-color: transparent;
}

/* DIE SHADOW */
.dice::before {
    content: "";
    display: block;
    position: absolute;
    width: 200px;
    height: 200px;
    background: rgba(0, 0, 0, 1);
    transition: filter 0.05s ease-in-out, border-radius 0.05s ease-in-out, transform 0.05s ease-in-out;
    /* todo: What;'s the best way to do dynamic variables? Should we do it in the template? Or, if this way, is computed() the best, or not? */
    filter: v-bind('diceBG_Shadow');
    border-radius: v-bind('diceBG_BorderRadius');
    transform: v-bind('diceBG_transform');
}

/* SPIN ANIMATION */
@keyframes spin {
    from { transform: rotateX(0deg)             rotateY(30deg)             rotateZ(0deg); }
    to   { transform: rotateX(calc(360deg * 3)) rotateY(calc(360deg * 2))  rotateZ(calc(360deg * 0.5)); }
    /* TODO: Check this calc, correct? */
}



@keyframes bounce {

    /*
    from { transform: scale(2); }
    to   { transform: scale(1); }
    */



    0% {
        transform: scale(0.5) rotateY(20deg)
    }
    40% {
        transform: scale(1.1)
    }
    50% {
        transform: scale(0.9)
    }
    60% {
        transform: scale(1.05)
    }
    70% {
        transform: scale(0.95)
    }
    80% {
        transform: scale(1.02)
    }
    90% {
        transform: scale(0.98) rotateY(0)
    }
    100% {
        transform: scale(1)
    }



}




/* DIE ACTUAL */
.cube {
    position: relative;
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;

    /* This helps smooth out the ending of a spin */
    transition: transform 2s cubic-bezier(0, .82, .47, 1);

    /* stuff that may help anti-aliasing */
    will-change: transform;
    box-shadow: 0 0 0 1px transparent;
    border: 1px solid rgba(0, 0, 0, 0.1);
    outline: 1px solid transparent;
}

.cube.spin {

    /* This time (e.g. 2s) needs to match the timeout for when spinner ends in code */
    /* animation: spin 1s linear, bounce 1s cubic-bezier(0, .82, .47, 1) 1s; */
    animation: spin 1.99s linear;
    /*     animation: spin 1.97s linear; */

    /* TODO: Look into timing function, any improvements to be had?*/
    /* animation-timing-function: cubic-bezier(0.280, 0.840, 0.420, 1); */

    /* TODO: Is this needed? */
    /* transform: v-bind('cubeTransformSpinning'); */
}

.dice.perspective {
    animation: bounce 0.4s linear;
}
.cube.perspective {
    transform: v-bind('cubeTransformPerspective');
    /* animation: bounce 1s cubic-bezier(0, .82, .47, 1) 2s; */
}


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
    /* opacity: 0.35; */
    /* Helps smooth out anti-aliasing */
    filter: blur(0.01px);
}

.useBGmap .cube div {
    background-image: url("/dice_texture.svg");
    background-size: 415%;
    border-radius: 30px;
}

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