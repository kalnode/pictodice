// ========================================
// GENERIC UTILITY FUNCTIONS
// ========================================

import { generateRandomInteger, generateRandomFloat, getRandomFloatWithExclusion } from '~/assets/js/random.js'

export default defineNuxtPlugin(() => {

    return {
        provide: {
            generateRandomInteger: (min, max) => generateRandomInteger(min, max),
            generateRandomFloat: (min, max) => generateRandomFloat(min, max),
            getRandomFloatWithExclusion: (min, max, excludeRoot, excludeRange) => getRandomFloatWithExclusion(min, max, excludeRoot, excludeRange),
        }
      }

})