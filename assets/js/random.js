export function generateRandomInteger(min, max) {
    // TODO: We want min to be able to be a negative number. e.g. want want to be able to get random inside -10 to 10, for instance.
    return Math.floor(min + Math.random()*(max - min + 1))
}

export function generateRandomFloat(min, max) {
    return (Math.random() * (min - max) + max)//.toFixed(4)
}

export function getRandomFloatWithExclusion(min, max, excludeRoot, excludeRange) {
    let randomNumber

    if (!excludeRoot || !excludeRange) {
        randomNumber = generateRandomFloat(min, max)
        return randomNumber
    }

    do {
        randomNumber = generateRandomFloat(min, max)
    } while (randomNumber < (excludeRoot - (excludeRange/2)) || randomNumber > (excludeRoot - (excludeRange/2)))

    return randomNumber
}