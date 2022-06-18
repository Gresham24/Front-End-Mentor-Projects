
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

let finalTotal = 0;
//   'Wash Car', 'Mow Lawn', 'Pull Weeds'
let servicesRequested = [];

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

/* ============================
 EVENT LISTENERS
=============================== */

washBtn.addEventListener('click', function () {
    servicesRequested.push('Wash Car');
    renderServices();

    console.log(servicesRequested);
})

mowBtn.addEventListener('click', function () {
    servicesRequested.push('Mow Lawn');
    renderServices();

    console.log(servicesRequested);
})

weedsBtn.addEventListener('click', function () {
    servicesRequested.push('Pull Weeds');
    renderServices();

    console.log(servicesRequested);
})


/* ============================
 TEST CONSOLES
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