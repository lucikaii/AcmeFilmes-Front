import { getMovie } from "./films.js"

const myButton = document.getElementById('addButton')
const myPopup = document.getElementById('popup')
const closePopup = document.getElementById('closePopup')

// myButton.addEventListener('click', function () {
//     myPopup.classList.add("show");
// });
closePopup.addEventListener('click', function () {
    myPopup.classList.remove("show");
});
window.addEventListener('click', function (event) {
    if (event.target == myPopup) {
        myPopup.classList.remove("show");
    }
});

export async function showPopupMovie(movie){

    let popup = document.getElementById('popup')
    popup.innerHTML = ''

    let popupBox = document.createElement('div')
    popupBox.classList.add('popup-box')

    let popupContent = document.createElement('div')
    popupContent.classList.add('popup-content')
    popupBox.appendChild(popupContent)

    let synopsis = document.createElement('div')
    synopsis.classList.add('synopsis')
    let movieTitle = document.createElement('h1')
    movieTitle.classList.add('movie-title')
    movieTitle.textContent = `${movie.nome}`
    let movieText = document.createElement('p')
    movieText.classList.add('movie-text')
    movieText.textContent = `${movie.sinopse}`
    synopsis.appendChild(movieTitle)
    synopsis.appendChild(movieText)


}

