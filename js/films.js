export async function getMovies(){
    
    const url = 'http://10.107.134.43:8080/v2/acme/filmes'
    const response = await fetch(url)
    const data = await response.json()
    return data.filmes
}

export async function getMovie (id){

    const url = `http://10.107.134.43:8080/v2/acme/filme/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data.filme

}
export async function getMovieByName(movieName){

}

export async function postMovie (movie){
    const url = `http://10.107.134.43:8080/v2/acmefilmes/filme`
    const options = {
        method: 'POST',
        body: JSON.stringify(movie)
    }
   const response = await fetch(url, options)

   return response.ok
}

export async function putMovie (movie){
    const url = `http://10.107.134.43:8080/v2/acmefilmes/filme/${movie.id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(movie)
    }
   const response = await fetch(url, options)

   return response.ok
}
export async function deleteMovie (id){
    const url = `http://10.107.134.43:8080/v2/acmefilmes/filme/${id}`
    const options = {
        method: 'DELETE',
    }
   const response = await fetch(url, options)

   return response.ok
}