<template>
    <div>

        <div :class="!DiceState.hasRolled ? 'enabled' : '' " class="helper">
            <!-- TODO: Maybe use fade transition here instead of class? -->
            <h1>Shake your phone!</h1>
            <p>Or touch the dice</p>
        </div>

        <div class="my-8">
            <div>Dice face: {{ DiceState.face }}</div>
            <div>Dice spinning: {{ DiceState.spinning }}</div>
            <div>Use bg map: {{ useBGmap }}</div>
        </div>

        <div class="dice" @click="handleClick()"
        :class="{'useBGmap' : useBGmap}">
            <div :class="DiceState.spinning ? 'spin' : 'perspective'" class="cube">
                <div :class="(DiceState.face === 1 || DiceState.spinning) ? 'lightFacing' : ''"
                :style="!useBGmap ? 'background-image: url(/images/' + dummyImages[1 - 1] + ')' : ''"
                class="front"></div>
                <div class="front filler"></div>

                <div :class="(DiceState.face === 6 || DiceState.spinning) ? 'lightFacing' : '' "
                :style="!useBGmap ? 'background-image: url(/images/' + dummyImages[6 - 1] + ')' : ''"
                class="back"></div>
                <div class="back filler"></div>

                <div :class="(DiceState.face === 5 || DiceState.spinning) ? 'lightFacing' : '' "
                :style="!useBGmap ? 'background-image: url(/images/' + dummyImages[5 - 1] + ')' : ''"
                class="top"></div>
                <div class="top filler"></div>

                <div :class="(DiceState.face === 2 || DiceState.spinning) ? 'lightFacing' : '' "
                :style="!useBGmap ? 'background-image: url(/images/' + dummyImages[2 - 1] + ')' : ''"
                class="bottom"></div>
                <div class="bottom filler"></div>

                <div :class="(DiceState.face === 3 || DiceState.spinning) ? 'lightFacing' : '' "
                :style="!useBGmap ? 'background-image: url(/images/' + dummyImages[3 - 1] + ')' : ''"
                class="left"></div>
                <div class="left filler"></div>

                <div :class="(DiceState.face === 4 || DiceState.spinning) ? 'lightFacing' : '' "
                :style="!useBGmap ? 'background-image: url(/images/' + dummyImages[4 - 1] + ')' : ''"
                class="right"></div>
                <div class="right filler"></div>
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

            DiceState: {
                face: 1,
                spinning: false,
                accelerometer: [0.3, 0.25],
                hasRolled: false
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
            ]

        }

    },

    mounted() {
        document.addEventListener('keydown', (e) => {
            this.handleKeyDown(e)
        })





        try {


            const sensorOrientation = new RelativeOrientationSensor({ frequency: 60, referenceFrame: 'screen' })
            const sensorGyroscope = new Gyroscope({ frequency: 60 })
            Promise.all([
                navigator.permissions.query({ name: "accelerometer" }),
                navigator.permissions.query({ name: "gyroscope" })
            ])
            .then((results) => {
                if (results.every((result) => result.state === "granted")) {

                    console.log("Permissions granted %O", results)

                    sensorOrientation.addEventListener('reading', () => {

                        console.log("orientationSensor reading")
                        if (!this.DiceState.spinning) {
                            this.DiceState.accelerometer = sensorOrientation.quaternion.map((x, i) => {
                                if (i < 2) {
                                    return Math.round(x * 1000 * 1000) / (1000 * 1000)
                                }
                            })
                        }
                    })
                    sensorOrientation.start()

                    sensorGyroscope.addEventListener('reading', () => {
                        console.log("gyroscope reading")
                        if ((sensorGyroscope.x > 9 || sensorGyroscope.z > 4) && !this.DiceState.spinning) {
                            this.random()
                        }
                    })
                    sensorGyroscope.start()

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
    },


    methods: {

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
            const [ax, ay] = this.DiceState.accelerometer
            let rx = x + (ax * 40)
            let ry = 0
            let rz = 0

            if (this.DiceState.face === 5) {
                ry = y
                rz = z + (-ay * 40)
            } else if (this.DiceState.face === 2) {
                ry = y
                rz = z + (ay * 40)
            } else if (this.DiceState.face === 6) {
                ry = y + (ay * 40)
                rz = z
            } else {
                ry = y + (-ay * 40)
                rz = z
            }

            return 'rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) rotateZ(' + rz + 'deg) translate3d( 0, 0, 0)'
        }

    },

}

</script>

<style scoped>

.dice {
    perspective: 800px;
    perspective-origin: 50% 100px;
    background-color: transparent;
}

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

.helper {
    position: absolute;
    top: -150px;
    width: 100%;
    text-align: center;
    opacity: 0;
    transition: opacity .6s ease-out;
}

.helper.enabled {
    opacity: 1;
}

.helper * {
    margin: 0;
}

@keyframes softBlink {
    0%   { opacity: 0.5; }
    50%  { opacity: 1;   }
    100% { opacity: 0.5; }
}

h1 {
    line-height: 1.3;
    font-size: 1.2rem;
    opacity: 0.8;
    animation: softBlink 1s linear 3s infinite;
}

p {
    opacity: 0.5;
}

@keyframes spin {
    from { transform: rotateX(0deg)           rotateY(30deg) rotateZ(0deg); }
    to   { transform: rotateX(calc(360deg * 4)) rotateY(calc(360deg * 2))  rotateZ(calc(360deg * 1.2)); }
    /* TODO: Check this calc, correct? */
}

.cube {
    position: relative;
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;

    /* Is this needed? */
    transition: transform 3s cubic-bezier(0, .82, .47, 1);
    will-change: transform;
    box-shadow: 0 0 0 1px transparent;
    border: 1px solid rgba(0, 0, 0, 0.1);
    outline: 1px solid transparent;
}

.cube.spin {

    /* This time (e.g. 2s) needs to match the timeout for when spinner ends in code */
    animation: spin 1.97s linear;
    transform: v-bind('cubeTransformSpinning');
}

.cube.perspective {
    transform: v-bind('cubeTransformPerspective');
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