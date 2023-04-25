<script setup>

// ROUTER
// TODO: Double check if this is correct. Because <Nav> occurs outside of <NuxtPage />, we need this import to make useRoute() reactive, otherwise it never changes after initial landing.
import { useRoute } from 'vue-router'
const route = useRoute()

</script>

<template>
    <div class="pointer-events-none flex justify-between items-center m-2">
        <!-- LEFT -->
        <div class="pointer-events-auto">
            <transition name="fade" mode="out-in">
                <!--
                <div v-if="route.name == 'index'" :key="'LinkUpload'" v-motion-pop>
                    <NuxtLink to="/upload" class="block p-1.5 rounded-full hover:scale-110 transition-transform">
                        <IconsBase name="grid" class="w-16 h-auto" />
                    </NuxtLink>
                </div>-->
                <div v-if="route.name != 'index'" :key="'LinkHome'" v-motion-pop>
                    <NuxtLink to="/" class="block p-1.5 rounded-full hover:scale-110 transition-transform">
                        <IconsBase name="home" class="w-16 h-auto" />
                    </NuxtLink>
                </div>
            </transition>
        </div>

        <!-- RIGHT -->
        <div class="pointer-events-auto">
            <transition name="fade" mode="out-in">
                <div v-if="route.name != 'settings'" :key="'LinkSettings'" v-motion-pop>
                    <!-- TODO: Use a proper named link here instead of to="" -->
                    <NuxtLink to="/settings" class="block p-1.5 rounded-full hover:scale-110 transition-transform">
                        <IconsBase name="gear" class="w-16 h-auto" />
                    </NuxtLink>
                </div>
            </transition>
        </div>
    </div>
</template>