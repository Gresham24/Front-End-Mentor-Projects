
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

let invoiceItems = [
    { desc: 'Wash Car', price: 10 },
    { service: mowBtn, desc: 'Mow Lawn', price: 20 }, // remove service btn
    { service: weedsBtn, desc: 'Pull Weeds', price: 30 }, // remove service btn
];

let service = '';
let ServicesRequested = [];
let finalTotal = 0;


/* ============================
 GLOBAL FUNCTIONS
=============================== */

function renderServices() {
    let service = '';
    for (let i = 0; i < invoiceItems.length; i++) {
        service += `
            <div class="line-item">
                <p id="wash" class="item"> ${invoiceItems[i].desc}</p>
		        <button id="remove-wash" class="remove-button">Remove</button>
		        <p id="wash-price" class="price"><span class="currency">$</span> ${invoiceItems[i].price}</p>
            </div>
            `;
    }
    lineItems.innerHTML = service;
}

// function getServices() {
//     service = `
//         <div class="line-item">
//             <p id="wash" class="item"> ${invoiceItems[0].desc}</p>
//     		<button id="remove-wash" class="remove-button">Remove</button>
//     		<p id="wash-price" class="price"><span class="currency">$</span> ${invoiceItems[0].price}</p>
//         </div>
//             `;
//     lineItems.innerHTML = service;
// }



/* ============================
 EVENT LISTENERS
=============================== */

washBtn.addEventListener('click', function () {
    ServicesRequested.push(renderServices())
})



/* ============================
 TEST CONSOLES
=============================== */

// renderServices() 