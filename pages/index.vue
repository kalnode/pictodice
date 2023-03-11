<template>
    <div class="w-full h-full flex flex-col justify-center items-center">
        <h1 class="text-3xl font-bold underline">Welcome to the homepage</h1>

        <Alert>
            This is an auto-imported component.
        </Alert>

        <Dice />

    </div>
</template>
<script setup>
    const appConfig = useAppConfig()
</script>