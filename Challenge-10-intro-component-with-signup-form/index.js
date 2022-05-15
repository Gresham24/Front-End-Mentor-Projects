// TO DO:
// 1. Create tags for error states
// 2. Create styling for error state tags
// 3. Store input values in variables
// 4. Create a function to detect if the email field is a valid email using regex 
// 5. Create an onsubmit event with a function to identify if each input field is not empty 
//      - nest another if statement for the email input to detect if the email value matches the regex
//      - add event.preventDefault() to restrict the form from submitting if none of the input field criterion are met
// 6. Display error message and error state styling for input fields that are empty 

const form = document.getElementById('signup-form')
const fname = document.getElementById('fName').value
const lname = document.getElementById('lName').value
const emailInput = document.getElementById('emailAddress').value
const passwordInput = document.getElementById('password').value

form.addEventListener('submit', function(event){
    event.preventDefault();


})