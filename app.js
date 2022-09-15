console.log('connected!')

let originalLength;
let lengthType;
let originalWeight;
let weightType;
let displaySpan;

function calculateLengthPerWeight(length, weight) {
    // divide original length by weight
    // define result
    let result = length/weight
    return result;
    // return result
}

function updateDisplay(result) {
    // convert result that to a useful string
    if (originalLength === 'meter' && originalWeight === 'oz') {
        displaySpan = `meters/oz`
    } else if (originalLength === 'yard' && originalWeight === 'oz' ) {
        displaySpan = `yards/oz`
    } else if (originalLength === 'meter' && originalWeight === 'gram' ) {
        displaySpan = `meters/gram`
    } else {
        displaySpan = `yards/gram`
    }
}
