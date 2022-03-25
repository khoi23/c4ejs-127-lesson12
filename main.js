const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const checkPassword = document.getElementById('check-password');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    // get the values form the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const checkPasswordValue = checkPassword.value.trim();

    // check username
    if(usernameValue === '') {
        // show error
        // add error class
        setErrorFor(username, 'Username cannot be blank');
    } else {
        // add succes class
        setSuccessFor(username);
    }

    // check email
    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank')
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid')
    } else {
        setSuccessFor(email)
    }

    // check passwords
    if (passwordValue === '') {
        setErrorFor(password, 'Passwords cannot be blank')
    } 
    else if (passwordValue.length <= "8") {
        setErrorFor(password, 'Passwords must be longer than 8 charaters')
    }
    else {
        setSuccessFor(password);
    }

    // check checkpassword
    if (checkPasswordValue === '') {
        setErrorFor(checkPassword, 'Passwords cannot be blank')
    }
    else if (checkPasswordValue.length <= "8") {
        setErrorFor(checkPassword, 'Passwords must be longer than 8 charaters')
    }
    else if (checkPasswordValue !== passwordValue) {
        setErrorFor(checkPassword, 'Passwords does not match')
    } 
    else {
        setSuccessFor(checkPassword)
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement; //.form-control
    
    formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}