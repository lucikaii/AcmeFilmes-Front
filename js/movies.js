import { getMovies } from './films.js'


document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('main')

    preencherCard(container)
})


async function preencherCard(container){

    const movies = await getMovies()

    movies.filmes.forEach( movie => {
        
        let card = document.createElement('img')
        card.classList.add('movie')
        card.setAttribute('id', 'addButton')
        card.src = `${movie.foto_capa}`
        card.alt = `${movie.nome}`

        container.appendChild(card)
    });

} 


