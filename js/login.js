'use strict'

const loginButton = document.getElementById('login-button')

const getUsers = async () => {

    const url = 'https://acmefilmes-zhei.onrender.com/v2/acmefilmes/usuarios'

    try {
        
        const response = await fetch(url)
        const users = await response.json()
        return users
    } catch (error) {
        alert('Ocorreu um erro ao logar')
        return null
    }
}

const validateLogin = async function(){

    const emailInput = document.getElementById('email').value
    const passwordInput = document.getElementById('password').value

    let userStatus = false

    const users = await getUsers()

    console.log(users)

    users.usuarios.forEach(function (user) {

        if(emailInput === user.email && passwordInput === user.senha){
            userStatus = true
            localStorage.setItem('idUser', user.id)
            
            if(user.adm == 0){

                window.location.href = './pages/home.html'
                return
            } else if (user.adm == 1){
                window.location.href = './pages/cms.html'
                return
            }
        }

    })

    if(!userStatus){
        alert('Credenciais inválidos')
    }

}

loginButton.addEventListener('click', validateLogin)