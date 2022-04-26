
// Declared price variables
let basicPriceGet = 19.99
let professionalPriceGet = 24.99
let masterPriceGet = 39.99

// convert the variables to into prices with currency for display on HTML
let basicPriceDisplay = "$" + basicPriceGet
let professionalPriceDisplay = "$" + professionalPriceGet
let masterPriceDisplay = "$" + masterPriceGet

// Function to display the prices with $ in the HTML
function displayMonthlyPrices(){
    document.getElementById("basicPrice").textContent = basicPriceDisplay
    document.getElementById("professionalPrice").textContent = professionalPriceDisplay
    document.getElementById("masterPrice").textContent = masterPriceDisplay
}

displayMonthlyPrices()


// Annual price multiplier
let multiplier = 10

// function to calculate the Annual price
function annualPriceSwitch() {
    let basicAnnual = basicPriceGet * multiplier
    let professionalAnnual = professionalPriceGet * multiplier
    let masterAnnual = masterPriceGet * multiplier

    // remove the decimal places and add $ to the prices
    basicPrice.textContent = "$" + basicAnnual.toFixed(2)
    professionalPrice.textContent = "$" + professionalAnnual.toFixed(2)
    masterPrice.textContent = "$" + masterAnnual.toFixed(2)
}

// to grab a reference of the checkbox(via id="toggleSwitch") and assign it to a constant 
const switchPrice = document.querySelector("#toggleSwitch")

// Change event for the check and uncheck status of the toggle
switchPrice.addEventListener("change", function () {
    if (switchPrice.checked) {
        annualPriceSwitch()
    } else {
        // Display the prices with $ in the HTML
        displayMonthlyPrices()
    }
});