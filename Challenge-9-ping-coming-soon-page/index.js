const form = document.getElementById('form');
const submit = document.getElementById('submitBtn');
const email = document.getElementById('email-input');

// Variables used to print the messages
const blankEmail = document.querySelector('.error-text');
const correctEmail = document.querySelector('.success-text');
const invalidEmail = document.querySelector('.error-text');

// Valid email format identifier
const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validInput() {
    if (email.value === '') {
        blankEmail.innerHTML = "Please enter an email address"
        blankEmail.className = 'error-text'
        email.id = 'error-email-border'
        
    } else if (email.value.match(validEmail)) {
        correctEmail.innerHTML = "Email submitted!"
        correctEmail.className = 'success-text'

    } else {
        invalidEmail.innerHTML = "Please provide a valid email address"
        invalidEmail.className = 'error-text'
        email.id = 'error-email-border'
    }
    return
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    validInput()
})