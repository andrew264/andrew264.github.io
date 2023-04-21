function addSkillCards() {
    let request = new XMLHttpRequest()
    request.open('GET', '/static/json/skills.json', true)
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            const data = JSON.parse(request.responseText)
            const wideIndexes = getWideIndexes(Object.entries(data).length)
            const allCards = document.getElementById('skill-cards')

            for (let [i, [key, value]] of Object.entries(
                Object.entries(data)
            )) {
                const isWide = wideIndexes.includes(parseInt(i))
                const card = createSkillCard(key, value, isWide)
                allCards.appendChild(card)

                animateProgressBar(key, value)
            }
        }
    }
    request.send()
}

function createSkillCard(key, value, isWide) {
    let article = document.createElement('article')
    article.className = isWide ? 'wide-card' : 'card'

    let heading = document.createElement('h3')
    heading.textContent = key
    article.appendChild(heading)

    let progressBarContainer = document.createElement('div')
    progressBarContainer.className = 'progress-bar'
    article.appendChild(progressBarContainer)

    let progressBar = document.createElement('div')
    progressBar.className = 'progress'
    progressBar.id = key
    progressBarContainer.appendChild(progressBar)

    return article
}

function animateProgressBar(barId, percent) {
    let bar = document.getElementById(barId)
    let width = 0
    let id = setInterval(frame, 10)

    function frame() {
        if (width >= percent) {
            clearInterval(id)
        } else {
            width++
            bar.style.width = width + '%'
            if (width < 35) {
                bar.style.backgroundColor = '#DEECFF'
            } else {
                bar.style.backgroundColor = '#E8D3FF'
            }
        }
    }
}

function getWideIndexes(length) {
    const indexes = []
    for (let i = 0; i < length; i++) {
        if (i % 2 !== 0) {
            indexes.push(i)
        }
    }
    for (let i = 0; i < indexes.length; i++) {
        if (i % 2 === 0) {
            indexes[i] -= 1
        }
    }
    return indexes
}
