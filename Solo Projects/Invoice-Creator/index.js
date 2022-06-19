
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

let servicesRequested = [];

let availableItems = [
    { id: 'wash-car', desc: 'Wash Car', price: 10 },
    { id: 'mow-lawn', desc: 'Mow Lawn', price: 20 },
    { id: 'pull-weeds', desc: 'Pull Weeds', price: 30 },
];



/* ============================
 GLOBAL FUNCTIONS
=============================== */


/******** Generate invoice line items ************/
function renderServices() {
    let service = '';
// Would it be more efficient to have the loop go through the servicesRequested array and the compare it to the objects in the availableItems array? 
    for (let i = 0; i < servicesRequested.length; i++) {
        for (let j = 0; j < availableItems.length; j++) {
// How can I use the array method .includes() here instead of the comparison?
            if (servicesRequested[i] == availableItems[j].desc) {
                service += `
                <div class="line-item">
                    <p class="item"> ${availableItems[j].desc}</p>
                    <button id="${availableItems[j].id}" class="remove-button">Remove</button>
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
    totalAmt.innerText = '$0';
    lineItems.innerText = null;
    servicesRequested = [];
}



/* ============================
 EVENT LISTENERS
=============================== */


/******** Add invoice items buttons ************/
washBtn.addEventListener('click', function (event) {
    event.preventDefault;
    servicesRequested.push('Wash Car');
    renderServices();
    calcTotal();
// How else can prevent the buttons from adding items more than once apart from { once : true }? (right now i can't click them after removing items)
}, { once: true })

mowBtn.addEventListener('click', function (event) {
    event.preventDefault;
    servicesRequested.push('Mow Lawn');
    renderServices();
    calcTotal();
}, { once: true })

weedsBtn.addEventListener('click', function (event) {
    event.preventDefault;
    servicesRequested.push('Pull Weeds');
    renderServices();
    calcTotal();
}, { once: true })

/******** Remove buttons ************/
document.body.addEventListener('click', function (event) {
    if (event.target.id == 'wash-car') {
        let itemIndex = servicesRequested.indexOf('Wash Car');
        servicesRequested.splice(itemIndex, 1);
        calcTotal();
        renderServices();
    }
})

document.body.addEventListener('click', function (event) {
    if (event.target.id == 'mow-lawn') {
        let itemIndex = servicesRequested.indexOf('Mow Lawn');
        servicesRequested.splice(itemIndex, 1);
        calcTotal();
        renderServices();
    }
})

document.body.addEventListener('click', function (event) {
    if (event.target.id == 'pull-weeds') {
        let itemIndex = servicesRequested.indexOf('Pull weeds');
        servicesRequested.splice(itemIndex, 1);
        calcTotal();
        renderServices();
    }
})

/******** Reset invoice button ************/
resetBtn.addEventListener('click', function () {
    resetInvoice();
})