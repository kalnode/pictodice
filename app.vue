<template>
    <div>

        <Navigation />

        <!-- TODO: Look into page-key; why/what -->
        <NuxtPage page-key="static" />

        <!-- TODO: Look into offline mode using:
        https://nuxt.com/docs/api/components/nuxt-client-fallback -->

        <NuxtErrorBoundary>
            <template #error="{ error }">
                <p>An error occurred: {{ error }}</p>
            </template>
        </NuxtErrorBoundary>
    </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
