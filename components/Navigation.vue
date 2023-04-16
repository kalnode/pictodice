<script setup>

// ROUTER
// TODO: Double check if this is correct. Because <Nav> occurs outside of <NuxtPage />, we need this import to make useRoute() reactive, otherwise it never changes after initial landing.
import { useRoute } from 'vue-router'
const route = useRoute()

</script>

<template>
    <div class="pointer-events-none">
        <header>
            <nav>

                <div class="flex justify-between items-center m-2">

                    <!-- LEFT -->
                    <div class="relative pointer-events-auto">
                        <transition name="fade" mode="out-in">
                            <!--
                            <div v-if="route.name == 'index'" :key="'LinkUpload'" class="p-2 rounded text-teal-700 hover:text-teal-200 hover:scale-110 transition-transform">
                                <NuxtLink to="/upload" class="block p-1.5">
                                    <IconsBase name="grid" class="w-16 h-auto" />
                                </NuxtLink>
                            </div>-->
                            <div v-if="route.name != 'index'" :key="'LinkHome'" class="p-2 rounded text-teal-700 hover:text-teal-200 hover:scale-110 transition-transform">
                                <NuxtLink to="/" class="block p-1.5">
                                    <IconsBase name="home" class="w-16 h-auto" />
                                </NuxtLink>
                            </div>
                        </transition>
                    </div>

                    <!-- RIGHT -->
                    <div class="pointer-events-auto">
                        <transition name="fade" mode="out-in">
                            <div v-if="route.name != 'about'" class="p-2 rounded text-teal-700 hover:text-teal-200 hover:scale-110 transition-transform">
                                <!-- TODO: Use a proper named link here instead of to="" -->
                                <NuxtLink to="/about" class="block p-1.5">
                                    <IconsBase name="gear" class="w-16 h-auto" />
                                </NuxtLink>
                            </div>
                            <!-- <div class="p-2 rounded bg-orange-700 text-white"><NuxtLink to="/about">About</NuxtLink></div> -->
                        </transition>
                    </div>
                </div>
            </nav>
        </header>
    </div>
</template>