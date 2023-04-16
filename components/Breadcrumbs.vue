<script setup>
import { onBeforeRouteUpdate } from "vue-router"
import { ref } from "vue"

const breadcrumbs = ref()

onMounted(async () => {
    await setBreadcrumbs(useRoute())
})

onBeforeRouteUpdate(async (newRoute) => {
    await setBreadcrumbs(newRoute)
})

async function setBreadcrumbs(currentRoute) {
    // Reset breadcrumbs
    breadcrumbs.value = []

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
    let finalOutput = []

    // Loop through route names and look for a matched route object
    for (let i = 0; i < routeNamesFinal.length; i++) {
        let name = routeNamesFinal[i]

        // Look for matched route object. We use "path" as a fallback in case there's no name match (which might happen if you're setting custom named routes).
        // Ultimately, all we want is a matched route object such that we can grab the correct meta data for breadcrumb text.
        await findRouteObject(currentRoute.matched, "name", "path", name)
        .then((result) => {
            let crumbTitle = result.meta.breadcrumb ?? result.meta.title ?? 'what'

            console.log("result.meta.breadcrumb is: %O", result.meta.breadcrumb)
            //console.log("result.meta is: %O", result.meta)



            console.log("crumbTitle is: %O", crumbTitle)

            // Check if the text has any special string (e.g. %propid%)
            //if (rawcrumb) {
                const regexVar = /\%.+\%/g // Looking for instance of %text% in string
                const foundVar = crumbTitle.match(regexVar)

                // Look for a route param that matches; use the value
                if (foundVar) {
                    const cleanedVar = foundVar[0].substring(1, foundVar[0].length - 1)
                    if (cleanedVar && crumbTitle && currentRoute.params[cleanedVar]) {
                        crumbTitle = crumbTitle.replace(regexVar,currentRoute.params[cleanedVar])
                    }
                }
            //}

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
    <div class="flex space-x-4">
        <div v-for="(crumb, index) in breadcrumbs" :key="'crumb-' + index" class="flex space-x-4">
            <div v-if="index > 0">/</div>
            <NuxtLink :to="crumb.active ? crumb.path : null">
                <div :class="crumb.active ? '' : 'disabled'" class="link">
                    {{ crumb.title }}
                </div>
            </NuxtLink>
        </div>
    </div>
</template>
<style scoped>
.link {
  @apply cursor-pointer underline text-teal-600 hover:text-white;
}

.link.disabled {
  @apply pointer-events-none no-underline text-black;
}
</style>