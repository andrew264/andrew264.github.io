function openTab(evt, tabName) {
    let i
    const tabContent = document.querySelectorAll('.tab-content')
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none'
    }

    const tabLinks = document.querySelectorAll('.nav-button-item')
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove('active')
        tabLinks[i].removeAttribute('id')
    }

    document.getElementById(tabName).style.display = 'block'
    evt.currentTarget.classList.add('active')
    evt.currentTarget.id = 'active'
}

function setCurrentYear() {
    const today = new Date()
    const year = today.getFullYear()
    document.getElementById('currentYear').textContent = year.toString()
}

function setAge() {
    const today = new Date()
    const birthDate = new Date(2002, 7, 10)
    let age = today.getFullYear() - birthDate.getFullYear()
    const m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
    }
    document.getElementById('age').textContent = age.toString()
}

function setRandomIntro() {
    let request = new XMLHttpRequest()
    request.open('GET', '/static/json/intros.json', true)
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            const data = JSON.parse(request.responseText)
            const randomIndex = Math.floor(Math.random() * data.length)
            const intro = data[randomIndex].replace(/\n/g, ' <br> ').split(' ')
            let index = 0
            const intervalId = setInterval(() => {
                document.getElementById('intro').innerHTML += intro[index] + ' '
                index++
                if (index === intro.length) {
                    clearInterval(intervalId)
                    document.getElementById('cursor').style.display = 'none'
                }
            }, 66)
        }
    }
    request.send()
}
