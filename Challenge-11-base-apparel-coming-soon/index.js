// how can I make the input text change to red when an invalid email address is added?
// I tried it at line 25 but this class doesn't change anything

const getForm = document.getElementById('signup');    // get the form 

const email = getForm.elements['Email'];    // get the email input by the name value

const submit = document.getElementById('submitBtn');     // get the submit button

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;     // valid email format regex 

const error = document.getElementById('error-text');    // error message to display

// email validation function
function validate() {
    const emailValue = email.value;
    if (emailRegex.test(emailValue)) {
        alert('Submitted successfully!')
        getForm.reset();
        clearErrors();
    } else {
        error.innerHTML = 'Please provide a valid email';
        email.classList.add('email-error');
//  NEED HELP: the email field does not change to red when an incorrect input is added
        email.classList.add('field-error-text');
    }
}

submit.addEventListener('click', function (event) {
    event.preventDefault();
    validate();
})
// clears error messages
function clearErrors() {
    error.innerHTML = '';
    email.classList.remove('email-error');
}
