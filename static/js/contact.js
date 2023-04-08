function addContactCards() {
    let request = new XMLHttpRequest()
    request.open('GET', '/static/json/contact.json', true)
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            const data = JSON.parse(request.responseText)
            const allCards = document.getElementById('contact-cards')

            for (let [key, value] of Object.entries(data)) {
                const card = createContactCard(key, value)
                allCards.appendChild(card)
            }
        }
    }
    request.send()
}

function createContactCard(key, value) {
    let article = document.createElement('article')
    article.className = 'contact-item'

    let anchor = document.createElement('a')
    anchor.href = value['link']
    anchor.target = '_blank'
    article.appendChild(anchor)

    let heading = document.createElement('h3')
    heading.textContent = key
    anchor.appendChild(heading)

    let paragraph = document.createElement('p')
    paragraph.textContent = value['displayText']
    anchor.appendChild(paragraph)

    return article
}
