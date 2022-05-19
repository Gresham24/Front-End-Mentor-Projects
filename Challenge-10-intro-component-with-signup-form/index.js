const getForm = document.getElementById('signupForm');

// Regex for email format validation
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
    const nameErr = document.getElementById('fName-error');
    const surnameErr = document.getElementById('lName-error');
    const emailErr = document.getElementById('email-error');
    const passwordErr = document.getElementById('password-error');

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
    
    if (password.value.length === 0) {
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

// disables whitespace from being entered in the password field
password.addEventListener('keypress', function (event) {
    const key = event.keyCode;
    if (key === 32) {
        event.preventDefault();
    }
});