import { getMovies } from './films.js'



document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('main');

    preencherCmsCard(container)
});

window.onload = async function showInfo(){

    let userId = localStorage.getItem('idUser')

    let urlUser = await fetch(`https://acmefilmes-zhei.onrender.com/v2/acmefilmes/usuario/${userId}`)
    let user = await urlUser.json()

    let profileArea = document.getElementById('profile')
    let userIcon = document.createElement('img')
    userIcon.classList.add('photo')
    userIcon.src = `${user.foto_perfil}`
    userIcon.alt = `${user.nome}`
    profileArea.appendChild(userIcon)

    let userName = document.getElementById('profile-name')
    userName.textContent = `${user.nome}`
}

async function preencherCmsCard(container){

    const movies = await getMovies()

    movies.filmes.forEach( movie => {
        
        let card = document.createElement('div')
        card.classList.add('card')
        let filmeArea = document.createElement('div')
        filmeArea.classList.add('filme')
        let botaoArea = document.createElement('div')
        botaoArea.classList.add('botoes')
        card.appendChild(filmeArea)
        card.appendChild(botaoArea)

        let filmeFoto = document.createElement('img')
        filmeFoto.classList.add('foto_capa')
        filmeFoto.src = `${movie.foto_capa}`
        filmeFoto.alt = `${movie.nome}`
        let filmeNome = document.createElement('p')
        filmeNome.classList.add('nome')
        filmeNome.textContent = `${movie.nome}`
        filmeArea.appendChild(filmeFoto)
        filmeArea.appendChild(filmeNome)

        let editButton = document.createElement('button')
        editButton.classList.add('edit-button')
        let deleteButton = document.createElement('button')
        deleteButton.classList.add('delete-button')

        botaoArea.appendChild(editButton)
        botaoArea.appendChild(deleteButton)

        let iconeCaneta = document.createElement('i')
        iconeCaneta.classList.add('bi')
        iconeCaneta.classList.add('bi-pen')
        let iconeLixo = document.createElement('i')
        iconeLixo.classList.add('bi')
        iconeLixo.classList.add('bi-trash')

        editButton.appendChild(iconeCaneta)
        deleteButton.appendChild(iconeLixo)

        container.appendChild(card)
    });
}