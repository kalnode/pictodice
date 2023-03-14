<script setup>
    // TODO: Double check if this is correct. Because <Nav> occurs outside of <NuxtPage />, we need this import to make useRoute() reactive, otherwise it never changes after initial landing.
    import { useRoute } from 'vue-router'
    const route = useRoute()
</script>
<template>
    <div class="w-screen h-screen noSelect noHighlight" :style="'padding-top:'+safeAreaInset+'px'">

        <header id="Header" class="absolute z-50 w-full flex justify-center p-2">
            <Logo />
        </header>

        <!-- {{ safeAreaInset }} -->

        <main class="w-full h-full">
            <!-- TODO: Look into page-key; why/what -->
            <NuxtPage id="Content" page-key="static" class="w-full h-full" />
            <!-- :page-key="'pagekey-'+route.name" -->
            <!--  page-key="static" -->
        </main>

        <nav class="z-50 absolute bottom-0 w-full">
            <Navigation id="Navigation" class="w-full" />
        </nav>

        <!-- TODO: Look into offline mode using:
        https://nuxt.com/docs/api/components/nuxt-client-fallback -->

        <NuxtErrorBoundary>
            <template #error="{ error }">
                <p>An error occurred: {{ error }}</p>
            </template>
        </NuxtErrorBoundary>

        <div id="bgGradient" class="absolute w-full h-full top-0" style="z-index: -1">
            <div id="gradientBackground" class="w-full h-full"></div>
            <div id="gradientMouse" class="absolute z-50 w-full h-full top-0"></div>
        </div>

    </div>
</template>
<script>

export default {

    data() {
        return {
            safeAreaInset: null,
        }

    },

    mounted() {


        let gradientBackground = document.getElementById("gradientBackground")
        let gradientMouse = document.getElementById("gradientMouse")

        document.addEventListener('mousemove', (event) => {
            // --------------------------------
            // BACKGROUND GRADIENT MOVEMENT
            // --------------------------------
            let windowWidth = window.innerWidth
            let windowHeight = window.innerHeight
            
            let mouseXpercentage = Math.round(100 - (event.pageX / windowWidth * 100))
            let mouseYpercentage = Math.round(100 - (event.pageY / windowHeight * 100))
            let mouseXpercentageM = Math.round(event.pageX / windowWidth * 100)
            let mouseYpercentageM = Math.round(event.pageY / windowHeight * 100)
            // console.log(mouseXpercentage, mouseYpercentage)

            gradientBackground.style.backgroundPosition = mouseXpercentage + '% ' + mouseYpercentage + '%'
            gradientMouse.style.background = 'radial-gradient(circle farthest-side at ' + mouseXpercentageM + '% ' + mouseYpercentageM + '%, rgba(38, 173, 166, .8), transparent)'

        })


        this.setHeaderPadding()




    },

    methods: {

        setHeaderPadding() {

            let topSafeAreaInsetTemp = getComputedStyle(document.documentElement).getPropertyValue("--safe-area-inset-top")

            this.safeAreaInset = parseInt(topSafeAreaInsetTemp.slice(0, -2))
            console.log("this.topSafeAreaInsetTemp: %O", this.topSafeAreaInsetTemp)

        }
    }
}
</script>

<style>
body {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: fixed;
}

.page-enter-active,
.page-leave-active {
    transition: filter 0.4s, opacity 0.4s;
     /* transition: all 33s;*/
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}

/* GRADIENT BG */
.gradientMouse {
    /*
    background: radial-gradient( circle farthest-side at bottom left, rgba(38, 173, 166, .8),  rgba(38, 173, 166, .0001) );
    */
    background: radial-gradient(circle farthest-side at 28% 99%, rgba(38, 173, 166, 0.24), transparent );

    transition: background .3s ease-in-out;
}

#gradientBackground {
    background: 
        radial-gradient(
            circle farthest-side at top left,
            rgba(86, 199, 181, .8), 
            rgba(86, 199, 181, .0001)
        ),
        radial-gradient(
            farthest-side at bottom left,
            rgba(133, 208, 213, .8), 
            rgba(133, 208, 213, .0001)
        ),
        radial-gradient(
            farthest-corner at 0% 50%,
            rgba(232, 241, 134, .8), 
            rgba(232, 241, 134, .0001)
        ),
        radial-gradient(
            closest-side at 100% 0%,
            rgba(153, 216, 208, .8), 
            rgba(153, 216, 208, .0001)
        ),
        radial-gradient(
            farthest-corner at top right, rgb(228, 114, 76), rgba(232, 241, 134, .9), rgba(232, 241, 134, .0001)
        ),
        radial-gradient(
            farthest-corner at bottom right, rgba(235, 195, 142, .4), rgba(235, 195, 142, .0001)
        );

    background-size: 150% 150%;
    background-position: center center;
    /* 	animation: gradient 15s ease infinite; */
    transition: background-position .3s ease-in-out;
}

@keyframes gradient {
    0% {
        background-position: left top;
    }
    25% {
        background-position: right top;
    }
    50% {
        background-position: right bottom;
    }
    75% {
        background-position: left bottom;
    }
    100% {
        background-position: left top;
    }
}

</style>
