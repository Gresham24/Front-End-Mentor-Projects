
/* ============================
 Variables
=============================== */


const totalAmt = document.getElementById('total-amount');
const resetBtn = document.getElementById('email-invoice');
// Section to add items
const lineItems = document.getElementById('list-of-items');
// ADD invoice item
const washBtn = document.getElementById('wash-btn');
const mowBtn = document.getElementById('mow-btn');
const weedsBtn = document.getElementById('weeds-btn');
// REMOVE invoice item
// const removeWash = document.getElementById('remove-wash');
// const removeMow = document.getElementById('remove-mow');
// const removeWeeds = document.getElementById('remove-weeds');

let availableItems = [
    { desc: 'Wash Car', price: 10 },
    { desc: 'Mow Lawn', price: 20 },
    { desc: 'Pull Weeds', price: 30 },
];

let servicesRequested = ['Wash Car', 'Mow Lawn', 'Pull Weeds'];
let finalTotal = 0;

/* ============================
 GLOBAL FUNCTIONS
=============================== */

function renderServices() {
    let service = '';
    // Would it be more efficient to have the loop go through the servicesRequested array and the compare it to the
    //      objects in the availableItems array?
    for (let i = 0; i < availableItems.length; i++) {
        if (availableItems[i].desc == servicesRequested[i]) {
            service += `
                <div class="line-item">
                    <p class="item"> ${availableItems[i].desc}</p>
                    <button class="remove-button">Remove</button>
                    <p class="price"><span class="currency">$</span> ${availableItems[i].price}</p>
                </div>
                `;
        }
    }
    lineItems.innerHTML = service;
}


/* ============================
 EVENT LISTENERS
=============================== */

// washBtn.addEventListener('click', function () {
//     servicesRequested.push('Wash Car');   // Problem: displays all items
//     console.log(servicesRequested);
// })



/* ============================
 TEST CONSOLES
=============================== */

renderServices() 