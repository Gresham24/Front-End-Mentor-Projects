/* ============================
            Variables
=============================== */

const colSchemeBtn = document.getElementById('col-scheme-generator');
let seedColVal = '';
let colSchemeVal = '';

// console.log(colSchemeVal)
// console.log(seedColVal)




/* ============================
            Event Listeners
=============================== */

colSchemeBtn.addEventListener('click', displayHexVal);



/* ============================
            Functions
=============================== */

// function getSeedCol() {
//     seedColVal = document.getElementById('seed-col').value.slice(1);
//     return console.log(seedColVal);
// }

// function getSchemeCol() {
//     colSchemeVal = document.getElementById('col-scheme').value;
//     return console.log(colSchemeVal);

// }



/* ============================
            Fetch Requests
=============================== */


function displayHexVal() {
    seedColVal = document.getElementById('seed-col').value.slice(1);
    colSchemeVal = document.getElementById('col-scheme').value;

    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColVal}&mode=${colSchemeVal}&count=5`)
        .then(res => res.json())
        .then(data => {
            // Suggested improvement: loop through the values to avoid repetition
            // display the hex values
            document.querySelector('.hex-value-wrapper').innerHTML = `
        <p>${data.colors[0].hex.value}</p>
        <p>${data.colors[1].hex.value}</p>
        <p>${data.colors[2].hex.value}</p>
        <p>${data.colors[3].hex.value}</p>
        <p>${data.colors[4].hex.value}</p>
        `
            // change the color blocks here
            document.getElementById("col-1").style.backgroundColor = data.colors[0].hex.value;
            document.getElementById("col-2").style.backgroundColor = data.colors[1].hex.value;
            document.getElementById("col-3").style.backgroundColor = data.colors[2].hex.value;
            document.getElementById("col-4").style.backgroundColor = data.colors[3].hex.value;
            document.getElementById("col-5").style.backgroundColor = data.colors[4].hex.value;
        })
}




    // fetch(`https://www.thecolorapi.com/id?hex=${seedColVal}`)
    //     .then(res => res.json())
    //     .then(data => console.log(data));

    // fetch(`https://www.thecolorapi.com/scheme?hex=${seedColVal}&mode=${colSchemeVal}&count=5`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data.colors[0].hex.value)

    //         document.querySelector('.hex-value-wrapper').innerHTML = `
    //         <p>${data.colors[0].hex.value}</p>
    //         <p>${data.colors[1].hex.value}</p>
    //         <p>${data.colors[2].hex.value}</p>
    //         <p>${data.colors[3].hex.value}</p>
    //         <p>${data.colors[4].hex.value}</p>
    //         `
    //     })