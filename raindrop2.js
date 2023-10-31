function convert_to_raindrop_sound(number) {
    let raindrop_sound = ''

    if (number % 3 == 0) raindrop_sound += 'Pling'

    if (number % 5 == 0) raindrop_sound += 'Plang'

    if (number % 7 == 0) raindrop_sound += 'Plong'

    // # If none of the factors were found, use the number itself
    if (raindrop_sound == '') raindrop_sound = number

    return raindrop_sound
}
console.log(convert_to_raindrop_sound(1))
function convert_to_raindrop_sound(number) {
    const rain = []

    if (number % 3 === 0) {
        rain.push('Pling')
    }

    if (number % 5 === 0) {
        rain.push('Plang')
    }
    if (number % 7 === 0) {
        rain.push('Plong')
    }
    if (rain.length === 0) {
        return number
    }
    return rain.join('')
}

console.log(convert_to_raindrop_sound(30))
