/* ============================
            Variables
=============================== */

const colSchemeBtn = document.getElementById('col-scheme-generator');
let seedColVal = '';
let colSchemeVal = '';


/* ============================
            Event Listeners
=============================== */

colSchemeBtn.addEventListener('click', displayHTML);


/* ============================
            Functions
=============================== */

displayHTML();

function displayHTML() {

    fetch(`https://www.thecolorapi.com/scheme?hex=${getSeedCol()}&mode=${getColScheme()}&count=5`)
        .then(res => res.json())
        .then(data => {
            // Suggested improvement: loop through the values to avoid repetition
            document.querySelector('.hex-value-wrapper').innerHTML = `
        <p>${data.colors[0].hex.value}</p>
        <p>${data.colors[1].hex.value}</p>
        <p>${data.colors[2].hex.value}</p>
        <p>${data.colors[3].hex.value}</p>
        <p>${data.colors[4].hex.value}</p>
        `
            document.getElementById("col-1").style.backgroundColor = data.colors[0].hex.value;
            document.getElementById("col-2").style.backgroundColor = data.colors[1].hex.value;
            document.getElementById("col-3").style.backgroundColor = data.colors[2].hex.value;
            document.getElementById("col-4").style.backgroundColor = data.colors[3].hex.value;
            document.getElementById("col-5").style.backgroundColor = data.colors[4].hex.value;
        })
}

function getColScheme() {
    return colSchemeVal = document.getElementById('col-scheme').value;
}

function getSeedCol() {
    return seedColVal = document.getElementById('seed-col').value.slice(1);
}

 

/* ============================
            Fetch Requests
=============================== */

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