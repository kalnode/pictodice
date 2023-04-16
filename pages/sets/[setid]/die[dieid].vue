<script setup>
const router = useRouter()
const currentRoute = useRoute()
import { usePhotodiceAppStore } from '~/stores/app'
const store = usePhotodiceAppStore()

definePageMeta({
    title: 'Die',
    breadcrumb: 'Die #%dieid%'
})
</script>

<template>
    <div class="w-full h-full flex flex-col items-center p-4 overflow-auto">


        <div class="flex flex-col md:flex-row">

            Die #{{ currentRoute.params.dieid }}

            <section class="card h-full flex flex-col justify-end items-center mb-4 sm:mb-0 sm:mr-4 p-8">
                <div class="flex flex-col items-center">
                    <IconsBase name="die" class="mb-4 w-16 h-auto transition hover:scale-105" />
                </div>
            </section>

            <section class="flex overflow-auto">
                <div class="flex flex-col overflow-auto space-y-4">
                    <div v-for="(face, index) in store.dice[currentRoute.params.dieid].faces" :key="'store-'+index"
                    class="card flex justify-center items-center">
                        {{ face  }}
                    </div>
                </div>
            </section>

        </div>
    </div>
</template>