<script setup>

// ROUTER
// TODO: Double check if this is correct. Because <Nav> occurs outside of <NuxtPage />, we need this import to make useRoute() reactive, otherwise it never changes after initial landing.
import { useRoute } from 'vue-router'
const route = useRoute()

</script>

<template>

    <div class="w-full flex justify-between items-center px-2 pt-0.5"><!-- pt-0.5 is a tiny cheat so focus ring is in fully visible (ie when tabbing through nav items)-->
        <!-- LEFT -->
        <div class="flex items-center space-x-4 md:space-x-8">
            <!-- BACK ARROW -->
            <!--
            <div v-if="currentRoute.name != 'index' && currentRoute.name != 'roll'" @click="router.back()"
            class="p-4 hover:text-[color:var(--color-primary)] hover:scale-105 transition cursor-pointer pointer-events-auto">
                <IconsBase name="arrowBack" class="w-6 h-auto" />
            </div>
            -->
            <div v-motion-pop>
                <!-- TODO: For native mobile, use p-1.5 w-16 -->
                <NuxtLink to="/" class="block p-2 hover:scale-110 transition-transform">
                    <!-- <IconsBase name="home" class="w-12 h-auto" /> -->
                    <LogoIconOnly class="w-10 block" />
                </NuxtLink>
            </div>

            <NuxtLink to="/roll" class="block p-1">
                Roll Dice
            </NuxtLink>

            <NuxtLink to="/sets" class="block p-1">
                Browse Sets
            </NuxtLink>

            <NuxtLink to="/custom" class="block p-1">
                Design Dice
            </NuxtLink>

            <!-- TODO: Support page meta here for class, instead of doing stupid route lookups -->
            <!-- TODO: Is this even necessary? -->
            
            <!--
            <div v-if="showTopTitle" id="Header"
            :class="currentRoute.name == 'roll' ? 'absolute z-50' : ''"
            :style="currentRoute.name == 'index' ? 'top:'+ (store.safeAreaInset.top+store.safeAreaPadding) +'px' : ''"
            class="w-full flex justify-center p-2 pointer-events-auto">
                <NuxtLink :to="currentRoute.name == 'index' ? '/' : currentRoute.name" :key="'title-'+currentRoute.name">
                    <h1 class="p-1.5 text-3xl font-bold uppercase hover:scale-110 transition-transform">{{ currentRoute.meta.title }}</h1>
                </NuxtLink>
            </div>
            -->
        </div>

        <!-- RIGHT -->
        <div class="flex items-center space-x-2">
            <div v-motion-pop>
                <!-- TODO: Use a proper named link here instead of to="" -->
                <!-- TODO: For native mobile, use p-1.5 w-16 -->
                <NuxtLink to="/settings" class="block p-2 rounded-full hover:scale-110 transition-transform">
                    <IconsBase name="gear" class="w-6 h-auto" />
                </NuxtLink>
            </div>

            <NuxtLink to="/cart" class="block p-2 rounded-full hover:scale-110 transition-transform">
                <IconsBase name="cart" class="w-6 h-auto" />
            </NuxtLink>

            <!--OVERFLOW (triple dots) -->
            <!-- <div class="absolute right-2 top-1 pointer-events-auto">...</div> -->
        </div>

    </div>
</template>