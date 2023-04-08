function addInterestCards() {
    const request = new XMLHttpRequest()
    request.open('GET', '/static/json/interests.json', true)
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            const data = JSON.parse(request.responseText)
            const allCards = document.getElementById('interest-cards')

            for (let [key, value] of Object.entries(data)) {
                const card = createInterestCard(key, value)
                allCards.appendChild(card)
            }
        }
    }
    request.send()
}

function createInterestCard(key, value) {
    let article = document.createElement('article')
    article.className = 'interest-card'

    let contentDiv = document.createElement('div')
    contentDiv.className = 'interest-content'
    let heading = document.createElement('h3')
    heading.textContent = value.name
    contentDiv.appendChild(heading)

    let description = document.createElement('p')
    description.innerHTML = tab + value.description
    contentDiv.appendChild(description)

    article.appendChild(contentDiv)

    let imageDiv = document.createElement('div')
    imageDiv.className = 'interest-pic'
    let image = document.createElement('img')
    image.src = value.image
    imageDiv.appendChild(image)
    article.appendChild(imageDiv)

    return article
}
