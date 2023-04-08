const tab = '&emsp;&emsp;&emsp;&emsp;'

function addProjectCards() {
    let request = new XMLHttpRequest()
    request.open('GET', '/static/json/projects.json', true)
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            const data = JSON.parse(request.responseText)
            const allCards = document.getElementById('project-cards')

            for (let [key, value] of Object.entries(data)) {
                const card = createProjectCard(key, value)
                allCards.appendChild(card)
            }
        }
    }
    request.send()
}

function createProjectCard(title, values) {
    let article = document.createElement('article')
    article.className = 'project-card'

    let pictureDiv = document.createElement('div')
    pictureDiv.className = 'project-pic'
    let picture = document.createElement('img')
    picture.src = values.imageUrl
    pictureDiv.appendChild(picture)
    article.appendChild(pictureDiv)

    let contentDiv = document.createElement('div')
    contentDiv.className = 'project-content'
    let heading = document.createElement('h3')
    heading.textContent = title
    contentDiv.appendChild(heading)

    let description = document.createElement('p')
    if (values.description.length > 100) {
        values.description = values.description.substring(0, 100) + '...'
    }
    description.innerHTML = tab + values.description
    contentDiv.appendChild(description)

    article.appendChild(contentDiv)

    let tagsDiv = document.createElement('div')
    tagsDiv.className = 'project-tags'
    for (let tag of values.tags) {
        tagsDiv.innerHTML += '<span>' + tag + '</span>'
    }
    article.appendChild(tagsDiv)

    return article
}
