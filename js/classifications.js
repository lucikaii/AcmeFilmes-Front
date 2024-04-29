export async function getClassification(){

    const url = 'https://acmefilmes-zhei.onrender.com/v2/acmefilmes/classificacoes'
    const response = await fetch(url)
    const data = await response.json()
    return data
}