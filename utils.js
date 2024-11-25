export function calculateIMC(a, b) {

    return (a / ((b / 100) * 2)).toFixed(2)
}


export function notANumber(value) {
    return isNaN(value) || value == ""
}