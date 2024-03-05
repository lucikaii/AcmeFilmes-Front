import {getMovie, getMovies} from './films.js'

function criarCard(filme){

    const card = document.createElement('div')
    const titulo = document.createElement('h2')
    const valor = document.createElement('button')
    valor.textContent = filme.valor_unitario
    titulo.textContent = filme.nome 

    card.append(titulo, valor)
    return card

}



async function preencherContainer(){

    const container = document.querySelector('body')

    const filmes = await getMovies()

   filmes.forEach( filme =>{

    const card = criarCard(filme)
    container.appendChild(card)
   })
}

