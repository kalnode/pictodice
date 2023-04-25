<script setup>
import { onBeforeRouteUpdate } from "vue-router"
import { ref } from "vue"
import { usePictodiceAppStore } from '~/stores/app'
const store = usePictodiceAppStore()


const breadcrumbs = ref([])

const viewportWidth = ref('mobile')

onMounted(async () => {

    if (viewportWidth != 'mobile') {
        await setBreadcrumbs(useRoute())
    }
})

onBeforeRouteUpdate(async (newRoute) => {

    if (viewportWidth != 'mobile') {
        await setBreadcrumbs(newRoute)
    }
})

async function setBreadcrumbs(currentRoute) {

    // --------------------------
    // Assemble paths
    // --------------------------
    // Used to make working breadcrumb links (passed into <NuxtLink :to="">)
    let pathSegments = currentRoute.path
    let pathNamesFinal = []
    do {
        // Grab entire string
        pathNamesFinal.push(pathSegments)
        // Strip off last segment
        pathSegments = pathSegments.substring(0, pathSegments.lastIndexOf("/"))
    } while (pathSegments.includes("/"))
    // Grab remainder segment, if exists
    if (pathSegments.length) {
        pathNamesFinal.push(pathSegments)
    }
    // Flip the set
    pathNamesFinal = pathNamesFinal.reverse()

    // --------------------------
    // Assemble route names
    // --------------------------
    // Used to build breadcrumb text (used to look-up route meta data)
    let routeNames = currentRoute.name
    let routeNamesFinal = []
    do {
        // Grab entire string
        routeNamesFinal.push(routeNames)
        // Strip off last segment
        routeNames = routeNames.substring(0, routeNames.lastIndexOf("-"))
    } while (routeNames.includes("-"))
    // Grab remainder segment
    if (routeNames.length) {
        routeNamesFinal.push(routeNames)
    }
    // Flip the set
    routeNamesFinal = routeNamesFinal.reverse()

    // --------------------------
    // Build final breadcrumbs array for rendering
    // --------------------------
    let finalOutput = [
        {
            path: '/',
            title: 'Home',
            active: true
        }
    ]

    // Loop through route names and look for a matched route object
    for (let i = 0; i < routeNamesFinal.length; i++) {
        let name = routeNamesFinal[i]

        // Look for matched route object. We use "path" as a fallback in case there's no name match (which might happen if you're setting custom named routes).
        // Ultimately, all we want is a matched route object such that we can grab the correct meta data for breadcrumb text.
        await findRouteObject(currentRoute.matched, "name", "path", name)
        .then((result) => {
            let crumbTitle = result.meta.breadcrumb ?? result.meta.title ?? 'what'

            // Check if the text has any special string (e.g. %propid%)
            const regexVar = /\%.+\%/g // Looking for instance of %text% in string
            const foundVar = crumbTitle.match(regexVar)

            // Look for a route param that matches; use the value
            if (foundVar) {
                const cleanedVar = foundVar[0].substring(1, foundVar[0].length - 1)
                if (cleanedVar && crumbTitle && currentRoute.params[cleanedVar]) {
                    crumbTitle = crumbTitle.replace(regexVar,currentRoute.params[cleanedVar])
                }
            }

            // Assemble final breadcrumb segment
            finalOutput.push({
                path: pathNamesFinal[i],
                title: crumbTitle,
                active: currentRoute.name == name ? false : true, // We disable the last link in the breadcrumb, because... the user is already on that page.
            })
        })
        .catch((error) => {
            console.log("error %O", error)
        })
    }

    breadcrumbs.value = finalOutput
}

async function findRouteObject(array, key1, key2, value) {
    return new Promise(async (resolve, reject) => {
        let finalReturn
        for (var item of array) {
            if (item[key1] == value) {
                finalReturn = item
            }

            if (
                (item[key2].startsWith("/") ? item[key2].substr(1) : item[key2]) == value
            ) {
                finalReturn = item
            }

            if (item.children?.length) {
                var innerResult = await findRouteObject(item.children,key1,key2,value)
                if (innerResult) finalReturn = innerResult
            }
        }

        resolve(finalReturn)
    })
}
</script>

<template>
    <div class="flex items-center space-x-4 text-lg md:text-xl">
        <div v-if="store.device.viewport.context == 'narrow'">
            <NuxtLink v-if="breadcrumbs.at(-2)" :to="breadcrumbs.at(-2).path" class="link group" style="text-decoration: none !important">
                <span class="group-hover:opacity-50">&#60;&#60;</span> <span class="underline">{{ breadcrumbs.at(-2).title }}</span>
            </NuxtLink>
        </div>
        <div v-else>
            <client-only>
                <StaggeredTransition animType='slideRight' :duration="100" tag="div" class="flex flex-wrap space-x-1">
                    <div v-for="(crumb, index) in breadcrumbs" :key="'crumb-' + index" class="flex items-center space-x-1">
                        <!-- TODO: We want to know when breadcrumb animates, then after 100ms we fade in this slash -->
                        <div v-if="index > 0" class="text-xs">&#47;</div>
                        <NuxtLink :to="crumb.active ? crumb.path : null" :class="crumb.active ? '' : 'disabled'" class="link">
                            {{ crumb.title }}
                        </NuxtLink>
                    </div>
                </StaggeredTransition>
            </client-only>
        </div>
    </div>
</template>
<style scoped>
.link {
  @apply p-4 cursor-pointer underline;
}

.link.disabled {
  @apply pointer-events-none no-underline opacity-50;
}
</style>
