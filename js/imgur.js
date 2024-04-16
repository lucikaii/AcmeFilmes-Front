export async function  uploadImgur(file) {
    const client_id = 'f1fa38842676805'
    const url = 'https://api.imgur.com/3/image'
    const data = new FormData();
    data.append('image', file)
    const options = {
    method: 'POST',
    body: data,
    headers: {
        'Authorization': `Client-ID ${client_id}`
        }
    }

    const response = await fetch(url, options)
    const imagem = await response.json()
    console.log (imagem.data)
    return imagem.data.link

}