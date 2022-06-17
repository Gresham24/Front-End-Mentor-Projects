// Import stylesheets
import './index.css';

/* ============================
 Variables
=============================== */

// price calculation variables
// const washPrice = 10;
// const mowPrice = 20;
// const weedsPrice = 30;

let total = '';

const totalAmt = document.getElementById('total-amount');
const resetBtn = document.getElementById('email-invoice');
const addButtons = document.querySelectorAll('.item-button');

// ADD invoice item
const washBtn = document.getElementById('wash-btn');
const mowBtn = document.getElementById('mow-btn');
// const weedsBtn = document.getElementById('weeds-btn');

// REMOVE invoice item
const removeWash = document.getElementById('remove-wash');
// const removeMow = document.getElementById('remove-mow');
// const removeWeeds = document.getElementById('remove-weeds');

let itemsDisplay = [];

let invoiceItems = [
    { desc: 'Wash Car', price: 10 },
    { desc: 'Mow Lawn', price: 20 },
    { desc: 'Pull Weeds', price: 30 },
];

/* ============================
 GLOBAL FUNCTIONS
=============================== */

for (let i = 0; i < addButtons.length; i++) {
    for (let j = 0; j < invoiceItems.length; j++) {
        if (addButtons[i].id && invoiceItems[j].id == washBtn.id) {
            total = `$${invoiceItems[j].price}`
            totalAmt.innerText = total;


        }
    }
}

/* ============================
 EVENT LISTENERS
=============================== */

washBtn.addEventListener('click', function (event) {
    event.preventDefault;
    totalAmt.innerText = `$${washPrice}`;
});

/* ============================
 TEST CONSOLES
=============================== */

// console.log(washBtn.id)

/*
get the object description:
invoiceItems[i].desc

get the object price:
invoiceItems[i].price

*/

//   console.log(addButtons[i]);

// console.log(invoiceItems[j]);
