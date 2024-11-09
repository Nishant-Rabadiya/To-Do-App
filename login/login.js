const registerData = JSON.parse(localStorage.getItem('registerData')) || [];
let loginData;
const email = document.getElementById('email');
const emailerror = document.getElementById('emailerror');
const password = document.getElementById('password');
const passworderror = document.getElementById('passworderror');
const loginbtn = document.getElementById('loginbtn');

email.addEventListener('input', () => {
    (!email.value) ? emailerror.innerHTML = 'Please enter the email!' : emailerror.innerHTML = '';
});
password.addEventListener('input', () => {
    (!password.value) ? passworderror.innerHTML = 'Please enter the password!' : passworderror.innerHTML = '';
});

loginbtn.addEventListener('click', (e) => {
    e.preventDefault();
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

    (!password.value) ? passworderror.innerHTML = 'Please enter the password!' : passworderror.innerHTML = '';

    if (isValid) {
        return;
    }
    const findUser = registerData.find((item) => {
        return item.email === email.value && item.password === password.value;
    })

    if (findUser) {
        loginData = {
            email: email.value,
            password: password.value,
        }
        localStorage.setItem('loginData', JSON.stringify(loginData));
        window.location.href = `/home/home.html`;
        email.value = null;
        password.value = null;
        console.log(loginData);
    }
    else {
        alert('Invalid Email And Password!');
        return
    }
})

