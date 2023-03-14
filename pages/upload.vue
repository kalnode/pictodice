<script setup>
// STORE
import { useMyAlertsStore } from '~/stores/myStore'
const store = useMyAlertsStore()
</script>
<template>
    <div class="w-full h-full flex flex-col justify-center items-center">
        <h1>Faces</h1>

        <div class="flex justify-center space-x-4">
            <div>Yours</div>
            <div>Preset 1</div>
            <div>Preset 2</div>
            <div>Preset 3</div>
        </div>

        <div>
            <div class="flex justify-center items-center flex-wrap">
                <div v-for="(face, index) in store.dice[0].images" :key="'slot-'+index"
                class="w-40 md:w-48 h-auto border m-2 md:m-4 bg-white flex justify-center items-center cursor-pointer overflow-hidden hover:scale-105 transition-transform">
                    <img :src="'images/'+face" />
                </div>
            </div>
        </div>

    </div>
</template>


<script>
export default {
    name: "Upload",

    props: {

    },

      data() {
        return {
            images: 6


        }

    },

    mounted() {


    },


    methods: {

        handleKeyDown(e) {
            console.log("func handleKeyDown %O", e)
            if (e.code === 'Space') {
                this.getRandomDieFace()
            }
        },
    }
}
</script>