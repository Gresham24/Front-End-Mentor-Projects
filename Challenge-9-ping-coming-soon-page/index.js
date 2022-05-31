const form = document.getElementById('form');
const submit = document.getElementById('submitBtn');
// const email = document.getElementById('email-input');
const email = form.elements["email"];

// Variables used to print the messages
const error = document.querySelector('.error-text');
const correctEmail = document.querySelector('.success-text');
// const invalidEmail = document.querySelector('.error-text');

// email Regex
const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validInput() {

    if (validEmail.test(email.value)) {
        // alert('submitted successfully');
        clearErrors();
        form.reset();
    } else if (email.value === '') {
        error.innerHTML = 'Please enter an email address';
        email.classList.add('error-text');
        email.classList.add('error-email-border');
    } else {
        error.innerHTML = 'Please provide a valid email address';
    }

    // if (email.value === '') {
    //     blankEmail.innerHTML = "Please enter an email address"
    //     blankEmail.className = 'error-text'
    //     email.id = 'error-email-border'
        
    // } else if (email.value.match(validEmail)) {
    //     correctEmail.innerHTML = "Email submitted!"
    //     correctEmail.className = 'success-text'

    // } else {
    //     invalidEmail.innerHTML = "Please provide a valid email address"
    //     invalidEmail.className = 'error-text'
    //     email.id = 'error-email-border'
    // }
    return
}
form.addEventListener('submit', function (event) {
    event.preventDefault();
    validInput()
})

function clearErrors() {
    error.innerHTML = '';
    email.classList.remove('error-text');
    email.classList.remove('error-email-border');
}