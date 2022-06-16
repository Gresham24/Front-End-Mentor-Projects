

// TO DO LIST:
//      - when a specific button (invoice item) is clicked, fetch the price (value) attached to it
//      - display the line item in the invoice [add it to an array]
//      - add the price (value) to the total amount 
//      - if the remove button is clicked, remove the line item from the array
//      - check if a line item is already added/clicked/present in the array.
//          - if it is, it should not be added
//      - when the send invoice button is clicked, reset the invoice


/* ============================
 Variables
=============================== */

// price calculation variables
const washValue = 10;
const mowValue = 20;
const weedsValue = 30;

const totalAmt = document.getElementById('total-amount');
const emailBtn = document.getElementById('email-invoice');
const addButtons = document.querySelectorAll('.item-button');

// Get description items
const wash = document.getElementById('wash');
const mow = document.getElementById('mow');
const weeds = document.getElementById('weeds');

// Get item prices
const washPrice = document.getElementById('wash-price');
const mowPrice = document.getElementById('mow-price');
const weedsPrice = document.getElementById('weeds-price');

// Add invoice item buttons 
const washBtn = document.getElementById('wash-btn');
const mowBtn = document.getElementById('mow-btn');
const weedsBtn = document.getElementById('weeds-btn');

// Remove invoice item buttons
const removeWash = document.getElementById('remove-wash');
const removeMow = document.getElementById('remove-mow');
const removeWeeds = document.getElementById('remove-weeds');




/* ============================
 GLOBAL FUNCTIONS
=============================== */

function addWashItem() {
    wash.innerText = 'Wash Car';
    removeWash.innerText = 'Remove';
    washPrice.innerHTML = `<span class="currency">$</span>${washValue}`;
}

function addMowItem() {
    mow.innerText = 'Mow Lawn';
    removeMow.innerText = 'Remove';
    mowPrice.innerHTML = `<span class="currency">$</span>${mowValue}`;
}

function addWeedsItem() {
    weeds.innerText = 'Pull Weeds';
    removeMow.innerText = 'Remove';
    weedsPrice.innerHTML = `<span class="currency">$</span>${weedsValue}`;
}

function calcTotal() {
    
}


/* ============================
 EVENT LISTENERS
=============================== */



washBtn.addEventListener('click', function () {
    addWashItem()
    totalAmt.innerText = `$${washValue}`;
})

mowBtn.addEventListener('click', function () {
    addMowItem()
    totalAmt.innerText = `$${mowValue}`;
})

weedsBtn.addEventListener('click', function () {
    addWeedsItem()
    totalAmt.innerText = `$${weedsValue}`;
})

/* ============================
 TEST CONSOLES
=============================== */

