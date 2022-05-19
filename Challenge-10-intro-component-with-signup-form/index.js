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
// 8. Create an onsubmit event with main function 
//      - add event.preventDefault() to restrict the form from submitting if none of the input is entered

// RESEARCH TO DO:
// how to get all the input values from a form
// how to add specific error messages for different input values
// 

/*********** Instructions above *********/

const getForm = document.getElementById('signupForm');



const emailFormat =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



function formValidity() {
    // get input values by Name
    const fname = getForm.elements['Name'];
    const lname = getForm.elements['Surname'];
    const email = getForm.elements['emailAddress'];
    const password = getForm.elements['Password'];

    // get error state string
    let nameErr = document.getElementById('fName-error');
    let surnameErr = document.getElementById('lName-error');
    let emailErr = document.getElementById('email-error');
    let passwordErr = document.getElementById('password-error');

// put input fields logic in a function
// check if the function is true and then remove the error messages if so

    if (fname.value.length === 0) {
        nameErr.innerHTML = 'First name cannot be empty';
        fname.className = 'error-state'
    } else {
        fname.className = ('success-state');
    }

    if (lname.value.length === 0) {
        surnameErr.innerHTML = 'Last Name cannot be empty';
        lname.className = 'error-state'
    } else {
        lname.className = ('success-state');
    }

    if (email.value.length === 0) {
        emailErr.innerHTML = 'Email cannot be empty';
        email.className = 'error-state'
    } else if (!email.value.match(emailFormat)) {
        emailErr.innerHTML = 'Looks like this is not an email';
    } else {
        email.className = ('success-state');
    }
    
    if (password.value.length === 0) {
        passwordErr.innerHTML = 'Password cannot be empty';
        password.className = 'error-state'
    } else {
        password.className = ('success-state');
    }
}

// onsubmit event listener
getForm.addEventListener('submit', function (event) {
    event.preventDefault();
    formValidity();
});


// First Name cannot be empty





// on signup form run a for each on keyup
// key press on any input on signup form, define an array of error messages