<script setup>

// ROUTER
// TODO: Double check if this is correct. Because <Nav> occurs outside of <NuxtPage />, we need this import to make useRoute() reactive, otherwise it never changes after initial landing.
import { useRoute } from 'vue-router'
const route = useRoute()

</script>

<template>
    <div class="pointer-events-none flex justify-between items-center p-2">
        <!-- LEFT -->
        <div class="pointer-events-auto flex items-center">
            <transition name="fade" mode="out-in">
                <!--
                <div v-if="route.name == 'index'" :key="'LinkUpload'" v-motion-pop>
                    <NuxtLink to="/upload" class="block p-1.5 rounded-full hover:scale-110 transition-transform">
                        <IconsBase name="grid" class="w-16 h-auto" />
                    </NuxtLink>
                </div>-->
                <div :key="'LinkHome'" v-motion-pop>
                    <!-- TODO: For native mobile, use p-1.5 w-16 -->
                    <NuxtLink to="/" class="block p-1 rounded-full hover:scale-110 transition-transform">
                        <IconsBase name="home" class="w-12 h-auto" />
                    </NuxtLink>
                </div>
            </transition>

            <NuxtLink to="/sets" class="block p-1">
                Browse
            </NuxtLink>
        </div>

        <!-- RIGHT -->
        <div class="pointer-events-auto flex items-center">
            <!-- TODO: Use a proper named link here instead of to="" -->
            <!-- TODO: For native mobile, use p-1.5 w-16 -->
            <NuxtLink to="/settings" class="block p-2 rounded-full hover:scale-110 transition-transform">
                <IconsBase name="gear" class="w-8 h-auto" />
            </NuxtLink>
            <NuxtLink to="/cart" class="block p-2 rounded-full hover:scale-110 transition-transform">
                <IconsBase name="cart" class="w-8 h-auto" />
            </NuxtLink>
        </div>
    </div>
</template>