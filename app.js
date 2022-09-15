console.log('connected!')

let originalLength;
let lengthType;
let originalWeight;
let weightType;
let displaySpan;



function calculateLengthPerWeight() {
    // divide original length by weight

    let result = originalLength/originalWeight
    // return result
    return result;
}

function updateDisplay(result) {
    // convert result that to a useful string
    if (originalLength === 'meter' && originalWeight === 'ounce') {
        displaySpan = `meters/oz`
    } else if (originalLength === 'yard' && originalWeight === 'ounce' ) {
        displaySpan = `yards/oz`
    } else if (originalLength === 'meter' && originalWeight === 'gram' ) {
        displaySpan = `meters/gram`
    } else {
        displaySpan = `yards/gram`
    }
}

function onSubmit(e) {
    e.preventDefault();
    // weightType = document.getElementById("weight-type").value;
    originalWeight = document.getElementById("original-weight").value;
    // lengthType = document.getElementById("length-type").value;
    originalLength = document.getElementById("original-length").value;
    console.log('click')
    console.log(`original length: ${originalLength}`)
    console.log(`original weight: ${originalWeight}`)
}

document.getElementById("calculate-form").addEventListener("submit", onSubmit)
