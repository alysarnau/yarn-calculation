console.log('connected!')

let originalLength;
let measurement;
let originalWeight;
let displaySpan;
let calculatorResult = 0;
let lengthType;

// define top display
let topDisplayDiv = document.getElementById("yarnPerLength")
// define bottom display
let bottomDisplayDiv = document.getElementById("remainingYarn")


function calculateLengthPerWeight() {
    // divide original length by weight
    calculatorResult = originalLength/originalWeight
    console.log('original length:', originalLength)
    console.log('original weight:', originalWeight)
    // return result
    return calculatorResult;
}

function updateDisplay(result) {
    // convert result that to a useful string
    if (measurement === 'imperial') {
        displaySpan = `yards/oz`
        lengthType = 'yards'
    } else if (measurement === 'mixed') {
        displaySpan = `yards/gram`
        lengthType = 'yards'
    } else {
        displaySpan = `meters/gram`
        lengthType = 'meters'
    }
}

function onCalculatorSubmit(e) {
    e.preventDefault();
    updateDisplay()
    calculateLengthPerWeight()
    // weightType = document.getElementById("weight-type").value;
    originalWeight = document.getElementById("original-weight").value;
    // lengthType = document.getElementById("length-type").value;
    originalLength = document.getElementById("original-length").value;
    if (originalLength <= 0 || originalWeight <= 0) {
        alert('Please enter in length and weight before submitting.')
        return
    }
    calculatorResult = originalLength/originalWeight
    topDisplayDiv.innerHTML = `${calculatorResult} ${displaySpan}`
}

function onYarnChickenSubmit(e) {
    e.preventDefault();
    console.log('clicked yarn chicken submit')
    remainingLength = document.getElementById("remaining-yarn").value;
    console.log(remainingLength)
    let yarnChickenAmount = calculatorResult * remainingLength
    if (yarnChickenAmount < 10) {
        bottomDisplayDiv.innerHTML = `${yarnChickenAmount} total ${lengthType} remaining... good luck with yarn chicken! 😱`
    } else {
        bottomDisplayDiv.innerHTML = `${yarnChickenAmount} total ${lengthType} remaining!`
    }
    
}


document.getElementById("calculate-form").addEventListener("submit", onCalculatorSubmit)
document.getElementById("yarn-chicken-form").addEventListener("submit", onYarnChickenSubmit)
