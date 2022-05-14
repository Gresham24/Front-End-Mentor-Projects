const submit = document.getElementById('submitBtn');
const error = document.getElementById('error-text');
const email = document.getElementById('email-input');

let getText = document.querySelector('emailAddress').value;


submit.addEventListener('click', function (event) {
    event.preventDefault();

    if (email.value === '') {
        console.log("no email")
    } else {
        console.log("email added")
    }
})