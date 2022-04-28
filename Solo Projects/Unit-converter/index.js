let measurement = document.getElementById("metricUnit").textContent

// Meters to feet conversion
let feet = measurement * 3.28084
// Feet to meters conversion
let meters = measurement * 0.3048

// liters to gallons conversion
let gallons = measurement * 0.264172
// gallons to liters conversion
let liters = measurement * 3.78541

// kilograms to pounds conversion 
let kilograms = measurement * 0.453592 
// pounds to kilograms conversion
let pounds = measurement * 2.20462

// display Length strings
let meterUnit = measurement + " meters = " + feet.toFixed(3) + " feet | " + measurement + " feet = " + meters.toFixed(3) + " meters" 
let volumeUnit = measurement + " litres = " + gallons.toFixed(3) + " gallons | " + measurement + " gallons = " + liters.toFixed(3) + " litres" 
let massUnit = measurement + " kilograms = " + pounds.toFixed(3) + " pounds | " + measurement + " pounds = " + kilograms.toFixed(3) + " kilograms" 

function unitConversion() {
    document.getElementById("lengthResult").textContent = meterUnit
    document.getElementById("volumeResult").textContent = volumeUnit
    document.getElementById("massResult").textContent = massUnit
}

unitConversion()
