<template>
    <TransitionGroup
        name="staggered-transition"
        :css="false"
        appear
        v-bind="$attrs"
        @enter="enter"
        @leave="leave"
        ref="tgroup"
    >
        <!-- List items require an 'index' attribue (ie :data-index="index") for staggering to function. Animations will still occur without it, however they occur all at once. -->
        <!-- e.g.
        <StaggeredTransition animType='slideUp' :duration="50">
            <div v-for="(set, index) in itemsToDisplay" :key="'set-'+index" :data-index="index">
        -->
        <slot></slot>
    </TransitionGroup>
</template>

<script>
export default {
    inheritAttrs: false // Stops external HTML attributes from being auto-applied to parent (<TransitionGroup>). If needed, we can still access these via v-bind="$attrs". Must be declared in regular <script> (Options API).
}
</script>

<script setup>
import Velocity from "velocity-animate"
import { useMotion } from '@vueuse/motion'
import { ref } from "vue"

const props = defineProps({
    duration: {
        type: Number,
        default: 200 // duration of each element transition
    },
    animType: String
})

let tgroup = ref(null) // We use this to ref the parent, for detecting rows/cols. Ultimately for smarter grid anims.

const motions = {

    slideUp: {
        enter: (target, transition) => {
            useMotion(target, {
                initial: {
                    opacity: 0,
                    y: 100
                },
                enter: {
                    opacity: 1,
                    y: 0,
                    transition: { ...transition }
                }
            })
        },
        leave: (target, transition) => {
            useMotion(target, {
                initial: {
                    opacity: 1,
                    y: 0
                },
                enter: {
                    opacity: 0,
                    y: 100,
                    transition: { ...transition }
                }
            })
        },
    },

    slideRight: {
        enter: (target, transition) => {
            useMotion(target, {
                initial: {
                    opacity: 0,
                    x: -50
                },
                enter: {
                    opacity: 1,
                    x: 0,
                    transition: { ...transition }
                }
            })
        },
        leave: (target, transition) => {
            useMotion(target, {
                initial: {
                    opacity: 1,
                    x: 0
                },
                enter: {
                    opacity: 0,
                    x: -50,
                    transition: { ...transition }
                }
            })
        }
    }
}

function enter(el, done) {
    // Each element requires a data-index attribute in order for the transition to work properly
    const index = el.dataset.index || 1
    var delay = index * props.duration

    el.dataset.animating = true

    //Velocity
    /*
        setTimeout(() => {
            Velocity(el, { opacity: 1, height: "100%" }, { complete: done })
        }, delay)
    */

    motions[props.animType].enter(
        el,
        {
            onComplete: () => {
                el.dataset.animating = false
                done()
            },
            delay: delay
        }
    )

    /*
    useMotion(el, {
        
        initial: {
            opacity: 0,
            y: 100
        },
        enter: {
            opacity: 1,
            y: 0,
            transition: {
                onStart: () => {
                    console.log("------ enter started ", index)
                },
                onComplete: () => {
                    el.dataset.animating = false
                    //done(),
                },
                delay: delay
            }
        }
    })
    */

}

function leave(el, done) {
    // Each element requires a data-index attribute in order for the transition to work properly
    const index = el.dataset.index || 1
    var delay = index * props.duration


    //Velocity
    /*
    setTimeout(() => {
        Velocity(el, { opacity: 0, height: 0 }, { complete: done })
    }, delay)
    */

    el.dataset.animating = true

    motions[props.animType].leave(
        el,
        {
            onComplete: () => {
                // TODO: This is happening more than once!!! WHY
                //this.animatingDone()
                el.dataset.animating = false
                //GetGridElementsPosition(index, el)
                done()
            }
        }
    )


    /*
    useMotion(el, {
        initial: {
            opacity: 1,
            y: 0
        },
        enter: {
            opacity: 0,
            y: 100,
            transition: {
                onComplete: () => {

                    // TODO: This is happening more than once!!! WHY
                    //this.animatingDone()
                    el.dataset.animating = false
                    console.log("------ leave index: ", index)

                    //GetGridElementsPosition(index, el)
                    done()
                }
                //delay: delay,
            },
            //transition: {
            //    delay: delay,
            //},
        }
    })
    */

}



function GetGridElementsPosition(index, element) {

    //Get the css attribute grid-template-columns from the css of class grid
    //split on whitespace and get the length, this will give you how many columns
    
    // TODO: Need to get number of columns. This suggested trick doesn't work. Using "3" for now.

    // TODO: This fails. How to get ref element? In Options API, this worked: this.$refs.tgroup.$el
    const gridComputedStyle = window.getComputedStyle(tgroup.el)
    // get number of grid rows
    const gridRowCount = gridComputedStyle.getPropertyValue("grid-template-rows").split(" ").length
    // get number of grid columns
    const gridColumnCount = gridComputedStyle.getPropertyValue("grid-template-columns").split(" ").length
    //console.log(gridRowCount, gridColumnCount)


    const colCount = gridColumnCount//3 //tgroup.css('grid-template-columns').split(' ').length
    const colPosition = index % colCount
    const rowPosition = Math.floor(index / colCount)
    
    /* determine if it is a last column */
    if (colPosition==(colCount-1)) {
        //$(element).html('row:'+rowPosition+'. col:'+colPosition+'. Last column');
        console.log( 'row:'+rowPosition+'. col:'+colPosition+'. Last column')
    } else {
        //$(element).html('row:'+rowPosition+'. col:'+colPosition+'. Not last column');
        console.log( 'row:'+rowPosition+'. col:'+colPosition+'. Not last column')
    }

}

function animatingDone() {
    // TODO: Run this any time an element finishes downloading
    // Check if all other items finished animating
    // If so, then delete all el's
    
    //console.log("Slots are: ", this.$slots.default.items)
    //this.$slots.default.forEach(item => {
    //    console.log(item.data.key)
    //})

    // See: https://stackoverflow.com/questions/52440368/how-to-get-refs-element-in-scoped-slot
}
</script>