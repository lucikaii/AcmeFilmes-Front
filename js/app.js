import {getMovie, getMovies, postMovie} from './films.js'

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

// Teste

const filme = {
    "nome": "Elementos",
    "sinopse": "Em uma cidade onde os habitantes de fogo, água, terra e ar convivem, uma jovem mulher flamejante e um rapaz que vive seguindo o fluxo descobrem algo surpreendente, porém elementar: o quanto eles têm em comum.",
    "duracao": "01:42:00",
    "data_lancamento": "2023-06-15",
    "data_relancamento": null,
    "foto_capa": "https://lumiere-a.akamaihd.net/v1/images/elemental_bport_765442cf.png",
    "valor_unitario": 29 
}

console.log(await postMovie(filme))
