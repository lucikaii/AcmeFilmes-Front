import { getMovies } from './films.js'


document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('main');

    preencherCard(container);
});

function criarCard(){

    const card = document.createElement('div')
    card.classList.add('movie')
    card.id = 'addButton'

    return card
}

async function preencherCard(card){

    const movies = await getMovies()


    movies.filmes.forEach( movie => {
        
        card.style.backgroundImage = `url(${movie.foto_capa})`
        container.appendChild(card)
    });
} 

