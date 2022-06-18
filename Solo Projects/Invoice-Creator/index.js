
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
let selectedId = '';

let servicesRequested = [];
let removedLineItems = [];

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
    //  QST: Would it be more efficient to have the loop go through the servicesRequested array and the compare it to the objects in the availableItems array?
    for (let i = 0; i < servicesRequested.length; i++) {
        for (let j = 0; j < availableItems.length; j++) {
            // How can I use the array method .includes() here instead of the comparison? I tried using the code on line 90 but it rendered things incrementally when clicked     
            if (servicesRequested[i] == availableItems[j].desc) {
                selectedId = availableItems[j].id;
                service += `
                <div class="line-item">
                    <p class="item"> ${availableItems[j].desc}</p>
                    <button onclick="removeItem()" id="${availableItems[j].id}" class="remove-button">Remove</button>
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
    finalTotal = 0;
    totalAmt.innerText = '$0';
    lineItems.innerText = '';
}


/******** Remove invoice items ************/

function removeItem() {
    let idList = '';
    for (let i = 0; i < availableItems.length; i++) {
        idList += availableItems[i].id+', ';
    }
    // removedLineItems.push(idList);

    // if (selectedId == availableItems[i].id) {
    //     console.log(availableItems[i].desc);
    // }
    console.log(idList);

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



/******** Reset invoice button ************/
resetBtn.addEventListener('click', function () {
    resetInvoice();
})


/* ============================
 Questions
=============================== */

// 1. What else can I use to prevent the buttons from adding items more than once apart from { once: true }?
//      - After resetting the invoice, I can't add more any items   

            // if (servicesRequested.includes(availableItems[i].desc)) {
            //     service += `
            //         <div class="line-item">
            //             <p class="item"> ${availableItems[i].desc}</p>
            //             <button class="remove-button">Remove</button>
            //             <p class="price"><span class="currency">$</span> ${availableItems[i].price}</p>
            //         </div>
            //         `;
            // }