import { getMovies, getMovieByName, getMovie } from './films.js'
import { showPopupMovie } from './popup.js'


const search = document.getElementById('search').value
const searchButton = document.getElementById('search-button')

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('main')

    preencherCard(container)
})


async function preencherCard(container){

    const movies = await getMovies()

    movies.filmes.forEach( movie => {
        
        let card = document.createElement('img')
        card.classList.add('movie')
        card.src = `${movie.foto_capa}`
        card.alt = `${movie.nome}`
        let idFilme = movie.idFilme

        container.appendChild(card)

        card.addEventListener('click', async () => {
            
            let movie = await getMovie(idFilme)

            showPopupMovie(movie)
        })
          
    });

} 

async function pesquisarFilme(search, container){

    const movies = await getMovieByName(search)

    movies.filmes.forEach( movie =>{

        let card = document.createElement('img')
        card.classList.add('movie')
        card.setAttribute('id', 'addButton')
        card.src = `${movie.foto_capa}`
        card.alt = `${movie.nome}`

        container.appendChild(card)
    })

}

searchButton.addEventListener('click', () => {

    window.onload = function pesquisar(){
        const container = document.getElementById('main')
        pesquisarFilme(search, container)

    }
})

