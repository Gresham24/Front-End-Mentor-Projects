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

// Email format validation
const emailFormat =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function formValidity() {
    // get input values by name element
    const fname = getForm.elements['Name'];
    const lname = getForm.elements['Surname'];
    const email = getForm.elements['emailAddress'];
    const password = getForm.elements['Password'];

    // get trimmed values of inputs
    const fnameValue = fname.value.trim()
    const lnameValue = lname.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()

    // get error state strings
    let nameErr = document.getElementById('fName-error');
    let surnameErr = document.getElementById('lName-error');
    let emailErr = document.getElementById('email-error');
    let passwordErr = document.getElementById('password-error');

    // adds an error message if the input is empty, if not, changes the border color and removes error message
    if (fnameValue === '') {
        nameErr.innerHTML = 'First name cannot be empty';
        fname.className = 'error-state';
    } else {
        fname.className = 'success-state';
        nameErr.innerHTML = '';
    }

    if (lnameValue === '') {
        surnameErr.innerHTML = 'Last Name cannot be empty';
        lname.className = 'error-state';
    } else {
        lname.className = 'success-state';
        surnameErr.innerHTML = '';
    }

    if (emailValue === '') {
        emailErr.innerHTML = 'Email cannot be empty';
        email.className = 'error-state';
        // checks email format matches regex expression
    } else if (!emailValue.match(emailFormat)) {
        emailErr.innerHTML = 'Looks like this is not an email';
        email.className = 'error-state';
    } else {
        email.className = 'success-state';
        emailErr.innerHTML = '';
    }

    if (passwordValue === '') {
        passwordErr.innerHTML = 'Password cannot be empty';
        password.className = 'error-state';
    } else {
        password.className = 'success-state';
        passwordErr.innerHTML = '';
    }
}

getForm.addEventListener('submit', function (event) {
    event.preventDefault();
    formValidity();
});

