
/* ============================
 Variables
=============================== */


const totalAmt = document.getElementById('total-amount');
const resetBtn = document.getElementById('email-invoice');
const lineItems = document.getElementById('list-of-items');
/******** Add buttons ************/ 
const washBtn = document.getElementById('wash-btn');
const mowBtn = document.getElementById('mow-btn');
const weedsBtn = document.getElementById('weeds-btn');
/******** Remove buttons ************/ 
const removeWash = document.getElementById('remove-wash');
const removeMow = document.getElementById('remove-mow');
const removeWeeds = document.getElementById('remove-weeds');

let servicesRequested = [];

let availableItems = [
    { desc: 'Wash Car', price: 10 },
    { desc: 'Mow Lawn', price: 20 },
    { desc: 'Pull Weeds', price: 30 },
];


/* ============================
 GLOBAL FUNCTIONS
=============================== */

function renderServices() {
    let service = '';
    //  Would it be more efficient to have the loop go through the servicesRequested array and the compare it to the
    //      objects in the availableItems array?
    for (let i = 0; i < servicesRequested.length; i++) {
        for (let j = 0; j < availableItems.length; j++) {
            // How can I use the array method .includes() here instead of the comparison? I tried using the code on line 90 but it rendered things incrementally when clicked     
            if (servicesRequested[i] == availableItems[j].desc) {
                service += `
                <div class="line-item">
                    <p class="item"> ${availableItems[j].desc}</p>
                    <button class="remove-button">Remove</button>
                    <p class="price"><span class="currency">$</span> ${availableItems[j].price}</p>
                </div>
                `;
            }
        }
    }
    lineItems.innerHTML = service;
}

/******** Total amount calculator ************/ 
function calcTotal() {
    let finalTotal = 0;
    for (let i = 0; i < servicesRequested.length; i++) {
        for (let j = 0; j < availableItems.length; j++) {
            if (servicesRequested[i] == availableItems[j].desc) {
                finalTotal += Number(availableItems[j].price);
            }
        }
    }
    totalAmt.innerHTML = `$${finalTotal}`;
}

/******** Send/reset invoice ************/ 
function resetInvoice() {
    totalAmt.innerText = "$0";
}

/******** Remove invoice items ************/ 


/* ============================
 EVENT LISTENERS
=============================== */


/******** Add invoice items buttons ************/ 
washBtn.addEventListener('click', function (event) {
    event.preventDefault;
    servicesRequested.push('Wash Car');
    renderServices();
    calcTotal();
}, {once : true})

mowBtn.addEventListener('click', function (event) {
    event.preventDefault;
    servicesRequested.push('Mow Lawn');
    renderServices();
    calcTotal();
}, {once : true})

weedsBtn.addEventListener('click', function (event) {
    event.preventDefault;
    servicesRequested.push('Pull Weeds');
    renderServices();
    calcTotal();
}, {once : true})


/******** Reset invoice button ************/ 
resetBtn.addEventListener('click', function () {
    resetInvoice();
})


/* ============================
 Questions 
=============================== */

            // if (servicesRequested.includes(availableItems[i].desc)) {
            //     service += `
            //         <div class="line-item">
            //             <p class="item"> ${availableItems[i].desc}</p>
            //             <button class="remove-button">Remove</button>
            //             <p class="price"><span class="currency">$</span> ${availableItems[i].price}</p>
            //         </div>
            //         `;
            // }