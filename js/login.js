const loginButton = document.getElementById('login-button')

const validateLogin = function(){

    window.location.href = '../pages/home.html'
}

loginButton.addEventListener('click', validateLogin)