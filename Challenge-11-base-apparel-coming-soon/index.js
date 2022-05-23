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
