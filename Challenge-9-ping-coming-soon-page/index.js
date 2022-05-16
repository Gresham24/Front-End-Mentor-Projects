// TO DO LIST
// 1. style the native error message
// 2. declare variables for: button submit, email value, error text, valid email checker (regex)
// 3. add an onsubmit event to check if the email is empty
// 4. add if statement to check if the email matches the regex function
// 5. display the error message whe criteria not met

const form = document.getElementById('form');
const submit = document.getElementById('submitBtn');
const error = document.getElementById('error-text');
const email = document.getElementById('email-input');

// let getText = document.querySelector('emailAddress').value;



form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (email.value === '') {
        let blankString = "Please enter an email address"
        error.textContent = blankString
        return error.textContent
    } else {
        console.log("email added")
    }
})