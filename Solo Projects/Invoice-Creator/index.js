/***************** 

High-level summary to do list: 
When a button is clicked, it should be added asa line item to the invoice and the total should update.
Each item can only be added once. 
When the send invoice button is clicked, the invoice (form) is submitted 

*****************/

// TO DO LIST:
//      - when a specific button is clicked, fetch the price (value) attached to it
//      - display the line item in the invoice [add it to an array]
//      - add the price (value) to the total amount 
//      - if the remove button is clicked, remove the line item from the array
//      - when the send invoice button is clicked, reset the invoice

const washPrice = 10;
const mowPrice = 20;
const weedsPrice = 30;

let total = null;

const washBtn = document.getElementById('wash');
const mowBtn = document.getElementById('mow');
const weedsBtn = document.getElementById('weeds');

const removeWash = document.getElementById('remove-wash');
const removeMow = document.getElementById('remove-mow');
const removeWeeds = document.getElementById('remove-weeds');


const emailBtn = document.getElementById('email-invoice');