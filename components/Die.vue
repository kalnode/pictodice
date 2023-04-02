<template>
    <div class="w-full h-full flex flex-col justify-center items-center">

        <div id="dieParent" ref="dieParent" class="die cursor-pointer" :class="[
            DieState.spinning ? 'spinning' : DieState.hasRolled ? 'standing' : '',
            {'useBGmap' : useBGmap}
        ]
        ">
            <div id="dieInner" class="cube">
                <div v-for="(image, index) in Die.images" :key="'face-'+index"
                :class="[
                    faceOrientations[index].name,
                    (DieState.face === index+1 || DieState.spinning) ? 'lightFacing' : '',
                    image.type == 'text' ? 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-800 to-violet-900 text-white' : 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 to-gray-300 text-black'
                ]"
                class="border-2 border-white">
                <!-- :style="!image.type == 'text' && !useBGmap ? 'background-image: url(' + (image.type == 'localStorage' ? image.src : 'images/' + image.src) + ')' : ''"> -->
                <!-- bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 to-gray-300 -->

                    <img v-if="image.type && image.src != '' && image.type != 'text'"
                    :src="image.type == 'localStorage' ? image.src : config.app.baseURL+'images/'+image.src"
                    class="relative w-full h-full object-cover object-center" />

                    <span v-if="image.type == 'text'" class="p-2 text-2xl text-center font-bold italic uppercase">{{ image.src }}</span>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { usePhotodiceAppStore, Die, DieState } from '~/stores/app'


// ==========================================
// GENERAL
// ==========================================
const store = usePhotodiceAppStore()
const config = useRuntimeConfig()
const useBGmap = ref(false)

/*
interface DieType {
    name: string
    type: 'preset' | 'custom' | null
    active: boolean
    images: Array<{ type: string; src: string }>
}

interface DieStateType {
    face: number,
    spinning: boolean,
    hasRolled: boolean
}
*/

const props = defineProps<{
    Die: Die
    DieState: DieState

    // TODO: Look into bring all this in from global store
    //currentInteraction: 'sensor' | 'mouse' | 'touch' | null
    //mouseTouchCoords
    //accelerometer
    //currentInteraction
    //hasInteracted
}>()

const Die = reactive(props.Die)
const DieState = reactive(props.DieState)

const faceOrientations = [
    { name: 'front', orientation: [0, 0, 0] },
    { name: 'back', orientation: [90, 0, 0] },
    { name: 'top', orientation: [0, 90, 0] },
    { name: 'bottom', orientation: [0, -90, 0] },
    { name: 'left', orientation: [-90, 0, 0] },
    { name: 'right', orientation: [-180, 0, 0] }
]


// ==========================================
// MOUNTED
// ==========================================

onMounted ( () => {

    // Directly listen for cube animation events (e.g. spin start, spin end),
    // this way browser animation events dictate everything; more natural.
    let dieParent = document.getElementById("dieParent")
    dieParent?.addEventListener("animationend", () => {
        DieState.spinning = false
    })

})




// ==========================================
// COMPUTEDS
// ==========================================
const css_dieShadow_BorderRadius = computed(() => {
    return DieState.spinning ? '50%' : '10px'
})

const css_dieShadow_Blur = computed(() => {
    return DieState.spinning ? 'blur(80px)' : 'blur(20px)'
})

const css_dieShadow_Transform = computed(() => {
    return 'translateZ(' + (DieState.spinning ? '-50' : '0') + 'px) translate3d( 0, 0, 0)'
})

const css_cubeTransformSpinning = computed(() => {
    const [x, y, z] = faceOrientations[DieState.face - 1].orientation
    return 'rotateX(' + x + 'deg) rotateY(' + y + 'deg) rotateZ(' + z + 'deg) translate3d( 0, 0, 0)'
})

const css_cubeTransformStanding = computed(() => {

    // FOR REGULAR DIE STATE (ie not spinning)

    // Desktop: Mousing user will see cube follow the mouse
    // Mobile: If sensors allowed, cube will follow rotation of device
    // Worse-cast: Cube has no perspective transform

    // INITIAL FACE ORIENTATIONS
    const [x, y, z] = faceOrientations[DieState.face - 1].orientation

    // DEVICE MOVEMENT & ACCELERATION
    let ax = store.accelerationComputed.ax || 0
    let ay = store.accelerationComputed.ay || 0
    let speedModifier = store.speedModifier
    let angleModifier = store.angleModifier

    // FINAL AXIAL DEGREES
    let rx = 0
    let ry = 0
    let rz = 0


    // PER-FACE CALCULATIONS
    // TODO: Perhaps make a nice algorithm for this, instead of so many lines?
    // Also, it's confusing because a lot of flipping of x,y,z occurs. Perhaps the flipping can occur earlier, maybe in global store.

    // FACE 1
    if (DieState.face === 1) {

        if (!store.currentInteraction || store.currentInteraction == 'mouse' || store.currentInteraction == 'touch') {
            ry = x + (speedModifier * (ax * angleModifier))
            rx = y + (speedModifier * (ay * angleModifier))
            rz = z
        } else if (store.currentInteraction == 'sensor') {
            rx = x + (ax * angleModifier)
            ry = y + (-ay * angleModifier)
            rz = z
        }

    // FACE 2
    } else if (DieState.face === 2) {

        if (store.currentInteraction == 'mouse' || store.currentInteraction == 'touch') {
            ry = x + (speedModifier * (ax * angleModifier))
            rx = y
            rz = z + (speedModifier * (ay * angleModifier))
        } else if (store.currentInteraction == 'sensor') {
            rx = x + (ax * angleModifier)
            ry = y
            rz = z + (ay * angleModifier)
        }

    
    // FACE 3
    } else if (DieState.face === 3) {

        if (store.currentInteraction == 'mouse' || store.currentInteraction == 'touch') {
            rx = y + (speedModifier * (ay * angleModifier))
            ry = z
            rz = x + (speedModifier * (-ax * angleModifier))
        } else if (store.currentInteraction == 'sensor') {
            rx = x + (ax * angleModifier)
            ry = y + (-ay * angleModifier)
            rz = z
        }

    // FACE 4
    } else if (DieState.face === 4) {

        if (store.currentInteraction == 'mouse' || store.currentInteraction == 'touch') {
            rx = y + (speedModifier * (ay * angleModifier))
            ry = z
            rz = x + (speedModifier * (ax * angleModifier))

        } else if (store.currentInteraction == 'sensor') {
            rx = x + (ax * angleModifier)
            ry = y + (-ay * angleModifier)
            rz = z
        }


    // FACE 5
    } else if (DieState.face === 5) {

        if (store.currentInteraction == 'mouse' || store.currentInteraction == 'touch') {
            rx = y
            ry = x + (speedModifier * (ax * angleModifier))
            rz = z + (speedModifier * (-ay * angleModifier))
        } else if (store.currentInteraction == 'sensor') {
            rx = x + (ax * 40)
            ry = y
            rz = z + (speedModifier * (-ay * angleModifier))
        }

    // FACE 6
    } else if (DieState.face === 6) {

        if (store.currentInteraction == 'mouse' || store.currentInteraction == 'touch') {
            rx = y + (speedModifier * (ay * angleModifier))
            ry = x + (speedModifier * (ax * angleModifier))
            rz = z
        } else if (store.currentInteraction == 'sensor') {
            rx = x + (ax * angleModifier)
            ry = y + (ay * angleModifier)
            rz = z
        }
    }

    // FINALLY, we pass values, and perform yet more flipping if we need to (based on input method)
    // TODO: We use translate3d throughout app as a trick to fight anti-aliasing. Does it work? Do we need it? It only applies to this original pseudo-CSS-3d die component.
    if (!store.currentInteraction || store.currentInteraction == 'mouse' || store.currentInteraction == 'sensor') {
        return 'rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) rotateZ(' + rz + 'deg) translate3d( 0, 0, 0)'
    } else if (store.currentInteraction == 'touch') {
        return 'rotateX(' + (-rx) + 'deg) rotateY(' + (-ry) + 'deg) rotateZ(' + rz + 'deg) translate3d( 0, 0, 0)'
    }
})

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
/*
.cube div.lightFacing {
    background-color: hsl(0, 0%, 95%);
}

.cube div:not(.lightFacing) {
    background-color: hsl(0, 0%, 80%);
}
*/

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