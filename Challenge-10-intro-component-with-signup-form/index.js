const getForm = document.getElementById('signupForm');

// Regex for email format validation
const emailFormat =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// get input values by name element
const fname = getForm.elements['Name'];
const lname = getForm.elements['Surname'];
const email = getForm.elements['emailAddress'];
const password = getForm.elements['Password'];

function formValidity() {
    // get trimmed values of inputs
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();

    // get error state strings
    const nameErr = document.getElementById('fName-error');
    const surnameErr = document.getElementById('lName-error');
    const emailErr = document.getElementById('email-error');
    const passwordErr = document.getElementById('password-error');

    // adds an error message if the input is empty, if not, changes the border color and removes error message
    if (fnameValue === '') {
        nameErr.innerHTML = 'First name cannot be empty';
        fname.classList.add('error-state');
    } else {
        fname.classList.remove('error-state');
        nameErr.innerHTML = '';
    }

    if (lnameValue === '') {
        surnameErr.innerHTML = 'Last Name cannot be empty';
        lname.classList.add('error-state');
    } else {
        lname.classList.remove('error-state');
        surnameErr.innerHTML = '';
    }

    if (emailValue === '') {
        emailErr.innerHTML = 'Email cannot be empty';
        email.classList.add('error-state');
        // checks email format matches regex expression
    } else if (!emailValue.match(emailFormat)) {
        emailErr.innerHTML = 'Looks like this is not an email';
        email.classList.add('error-state');
        email.classList.add('error-font');
    } else {
        email.classList.remove('error-state');
        emailErr.innerHTML = '';
    }

    if (password.value.length === 0) {
        passwordErr.innerHTML = 'Password cannot be empty';
        password.classList.add('error-state');
    } else {
        password.classList.remove('error-state');
        passwordErr.innerHTML = '';
    }
// checks if all input values have been correctly entered at once
    if (fnameValue !== '' &&
        lnameValue !== '' &&
        emailValue !== '' &&
        emailValue.match(emailFormat) &&
        password.value.length !== 0) {
        // successState()
        getForm.reset();
        alert('Form submitted successfully!')
    }
}

getForm.addEventListener('submit', function (event) {
    event.preventDefault();
    formValidity();
});

// disables whitespace from being entered in the password field
password.addEventListener('keypress', function (event) {
    const key = event.keyCode;
    if (key === 32) {
        event.preventDefault();
    }
});