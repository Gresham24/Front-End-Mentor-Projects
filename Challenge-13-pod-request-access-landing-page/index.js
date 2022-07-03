const getForm = document.getElementById('form');

const email = getForm.elements['email'];

const submit = document.getElementById('submit');

const error = document.getElementById('error-msg');

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validate() {
    const emailValue = email.value;
    if (emailRegex.test(emailValue)) {
        alert('Submitted Successfully');
        getForm.reset();
        clearErrors();
    } else {
        error.innerHTML = 'Oops! Please check your email';
    }
}

function clearErrors() {
    error.innerHTML = '';
}

submit.addEventListener('click', function (event) {
    event.preventDefault();
    validate();
})


