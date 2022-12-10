/* ============================
            Variables
=============================== */

const colSchemeBtn = document.getElementById('col-scheme-generator');


/* ============================
            Event Listeners
=============================== */

colSchemeBtn.addEventListener('click', getSeedCol)


/* ============================
            Functions
=============================== */

function getSeedCol() {
    const seedColValue = document.getElementById('seed-col').value;
    // console.log(seedColValue);
    return seedColValue;
}