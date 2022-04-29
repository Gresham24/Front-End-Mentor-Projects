const measurement = document.getElementById("metricUnit").textContent

// Meters to feet conversion
let feet = (measurement * 3.28084).toFixed(3)
// Feet to meters conversion
let meters = (measurement * 0.3048).toFixed(3)

// liters to gallons conversion
let gallons = (measurement * 0.264172).toFixed(3)
// gallons to liters conversion
let liters = (measurement * 3.78541).toFixed(3)

// kilograms to pounds conversion 
let kilograms = (measurement * 0.453592).toFixed(3)
// pounds to kilograms conversion
let pounds = (measurement * 2.20462).toFixed(3)

// display Length strings
let meterUnit = measurement + " meters = " + feet + " feet | " + measurement + " feet = " + meters + " meters" 
let volumeUnit = measurement + " litres = " + gallons + " gallons | " + measurement + " gallons = " + liters + " litres" 
let massUnit = measurement + " kilograms = " + pounds + " pounds | " + measurement + " pounds = " + kilograms + " kilograms" 

function unitConversion() {
    document.getElementById("lengthResult").textContent = meterUnit
    document.getElementById("volumeResult").textContent = volumeUnit
    document.getElementById("massResult").textContent = massUnit
}

unitConversion()
