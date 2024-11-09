const firstName = document.getElementById('firstName');
const firstNameerror = document.getElementById('firstNameError');
const lastName = document.getElementById('lastName');
const lastNameerror = document.getElementById('lastNameError');
const email = document.getElementById('email');
const emailerror = document.getElementById('emailError');
const password = document.getElementById('password');
const passworderror = document.getElementById('passwordError');
const confirmpassword = document.getElementById('confirmPassword');
const confirmpassworderror = document.getElementById('confirmPasswordError');

const form = document.getElementById('form');
const signup = document.getElementById('signup');

const registerData = JSON.parse(localStorage.getItem('registerData')) || [];

firstName.addEventListener('input', () => {
    (!firstName.value) ? firstNameerror.innerHTML = 'Please enter the first name!' : firstNameerror.innerHTML = "";
});
lastName.addEventListener('input', () => {
    (!lastName.value) ? lastNameerror.innerHTML = 'Please enter the last name!' : lastNameerror.innerHTML = '';
});
email.addEventListener('input', () => {
    (!email.value) ? emailerror.innerHTML = 'Please enter email!' : emailerror.innerHTML = '';
});
password.addEventListener('input', () => {
    (!password.value) ? passworderror.innerHTML = 'Please enter email!' : passworderror.innerHTML = '';
});
confirmpassword.addEventListener('input', () => {
    (!confirmpassword.value) ? confirmpassworderror.innerHTML = 'Please enter email!' : confirmpassworderror.innerHTML = '';
});

signup.addEventListener('click', (e) => {
    e.preventDefault()
    const id = new Date().getTime();
    (!firstName.value) ? firstNameerror.innerHTML = 'Please enter the first name!' : firstNameerror.innerHTML = "";

    (!lastName.value) ? lastNameerror.innerHTML = 'Please enter the last name!' : lastNameerror.innerHTML = '';

    const findEmail = registerData.find(item => item.email === email.value);
    let isValid = false;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.value) {
        emailerror.innerHTML = 'Please enter email!';
        isValid = true;
    } else if (!emailPattern.test(email.value)) {
        emailerror.innerHTML = 'Please enter valid email!';
        isValid = true;
    } else {
        emailerror.innerHTML = '';
    }
    if (!password.value) {
        passworderror.innerHTML = 'Please enter the password!';
        isValid = true;
    } else if (password.value.length < 8) {
        passworderror.innerHTML = 'Password length must be atleast 8 characters';
        isValid = true;
    }
    else if (password.value.length > 15) {
        passworderror.innerHTML = 'Password length must not exceed 15 characters';
        isValid = true;
    } else {
        passworderror.innerHTML = '';
    }
    if (!confirmpassword.value) {
        confirmpassworderror.innerHTML = 'Please re-enter the password!';
        isValid = true;
    } else if (!(password.value === confirmpassword.value)) {
        confirmpassworderror.innerHTML = "Password dos't match please enter correct password";
        isValid = true;
    } else {
        confirmpassworderror.innerHTML = '';
    }
    if (isValid) {
        return;
    }
    if (findEmail) {
        alert('Email already exist');
        return;
    }
    if (firstName.value && lastName.value && email.value && (password.value === confirmpassword.value)) {

        registerData.push({
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value,
            id: id,
        })
        localStorage.setItem('registerData', JSON.stringify(registerData));
        form.reset();
        location.replace('/login/login.html');
        console.log(registerData);
    };
});