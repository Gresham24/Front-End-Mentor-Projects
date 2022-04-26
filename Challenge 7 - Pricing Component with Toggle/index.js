
// Declared price variables
let basicPriceGet = 19.99
let professionalPriceGet = 24.99
let masterPriceGet = 39.99

// convert the variables to into prices for display on HTML
let basicPriceDisplay = "$"+basicPriceGet
let professionalPriceDisplay = "$"+professionalPriceGet
let masterPriceDisplay = "$"+masterPriceGet

// Display the prices with $ in the HTML
document.getElementById("basicPrice").textContent = basicPriceDisplay
document.getElementById("professionalPrice").textContent = professionalPriceDisplay
document.getElementById("masterPrice").textContent = masterPriceDisplay

// Got the prices from the HTML 
// let basicPriceGet = document.getElementById("basicPrice").textContent
// let professionalPriceGet = document.getElementById("professionalPrice").textContent
// let masterPriceGet = document.getElementById("masterPrice").textContent


// Multiplier/discount price
let multiplier = 10

function annualPriceSwitch() {
    let basicAnnual = basicPriceGet * multiplier
    let professionalAnnual = professionalPriceGet * multiplier
    let masterAnnual = masterPriceGet * multiplier

    // remove the decimal places and add $ to the prices
    basicPrice.textContent = "$" + basicAnnual.toFixed(2)
    professionalPrice.textContent = "$" + professionalAnnual.toFixed(2)
    masterPrice.textContent = "$" + masterAnnual.toFixed(2)
}


// NOTE: This part was meant to display the original (monthly) price when clicked again
// if (basicPriceDisplay == basicPrice.textContent){
//     console.log(basicPriceDisplay)
// }



// NOTE: this function below is meant to mimic the <<this.classList.toggle('annual')>> function in the HTML priceToggleBtn onclick

// let toggleStateClass = document.getElementsByClassName("priceToggleBg.annual")
// function toggle(toggleStateClass) {
// }



// NOTE: Writing this down for future use - the method below converts numbers into an international format

// const numberFormatter = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
// })
// console.log(numberFormatter.format(multiplier))
