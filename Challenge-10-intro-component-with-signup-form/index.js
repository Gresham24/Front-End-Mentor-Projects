// TO DO:
// 1. Create tags for error states
// 2. Create styling for error state tags
// 3. Store input values in variables:
//      - valid email identifier (regex expression) = let validEmail;
//      - ID name for each input
//      - class name for each input
//      - class name for error states
// 4. Initiate a function inputChecker() to encompass everything
// 5. Create a for loop to iterate through each input field
//      - get each instance and store it in a variable: let input;
// 6. Create the logic to determine if each input is empty (input === '')
//      - when true, print error text: "... cannot be empty" 
//      - call the error state string
//      - when false do nothing
// 7. For email, create else if statement for email
//      - if the email is != validEmail OR matches(validEmail) 
//      - do nothing
//      - else print "looks like this is not an email"
// 8. Create an onsubmit event with a function to identify if each input field is not empty 
//      - add event.preventDefault() to restrict the form from submitting if none of the input field criterion are met 

const form = document.getElementById('signup-form')

// Individual input values
const fname = document.getElementById('fName')
const lname = document.getElementById('lName')
const emailInput = document.getElementById('emailAddress')
const passwordInput = document.getElementById('password')
// 
const emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/




form.addEventListener('submit', function(event){
    event.preventDefault();

})









// First Name cannot be empty





// on signup form run a for each on keyup
// key press on any input on signup form, define an array of error messages