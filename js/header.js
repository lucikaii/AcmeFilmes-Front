import { getClassification } from './classifications.js'

document.addEventListener('DOMContentLoaded', function(){

    const classificationList = document.getElementById('classification-list')

    preencherClassificacao(classificationList)
})

async function preencherClassificacao(classificationList){

    const classifications = await getClassification()

    let ul = document.createElement('ul')
        ul.classList.add('dropdown')

    classifications.classificacoes.forEach( classification => {
        
        let li = document.createElement('li')
        ul.appendChild(li)
        let a = document.createElement('a')
        a.setAttribute('href', '#')
        a.classList.add('classificacao-area')
        li.appendChild(a)
        let icon = document.createElement('img')
        icon.classList.add('classificacao-icon')
        icon.src = `${classification.icone}`
        icon.alt = `${classification.sigla}`
        let p = document.createElement('p')
        p.textContent = `${classification.descricao}`
        a.appendChild(icon)
        a.appendChild(p)

        classificationList.appendChild(ul)

    })
}