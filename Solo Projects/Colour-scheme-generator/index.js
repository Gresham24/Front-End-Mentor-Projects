/* ============================
            Variables
=============================== */

const colSchemeBtn = document.getElementById('col-scheme-generator');
const seedColValue = document.getElementById('seed-col').value.slice(1);


/* ============================
            Event Listeners
=============================== */

colSchemeBtn.addEventListener('click', getSeedCol)


/* ============================
            Functions
=============================== */

function getSeedCol() {
    return seedColValue;
}

fetch(`https://www.thecolorapi.com/id?hex=${seedColValue}`)
    .then(res => res.json())
    .then(data => console.log(data))


