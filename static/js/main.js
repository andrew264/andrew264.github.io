function openTab(evt, tabName) {
    let i;
    const tabContent = document.querySelectorAll(".tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    const tabLinks = document.querySelectorAll(".tab-links");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
        tabLinks[i].removeAttribute("id");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
    evt.currentTarget.id = "active";
    resizePageHeight();
}


function setCurrentYear() {
    const today = new Date();
    const year = today.getFullYear();
    document.getElementById("currentYear").textContent = year.toString();
}

function setAge() {
    const today = new Date();
    const birthDate = new Date(2002, 7, 10);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    document.getElementById("age").textContent = age.toString();
}

function resizePageHeight() {
    const activeId = document.querySelector('#active').innerHTML;
    const divHeight = document.getElementById(activeId).scrollHeight;
    const leftContainer = document.getElementById("left-container");
    const tabHeight = document.getElementsByClassName("tab")[0].offsetHeight;
    const totalRightHeight = tabHeight + divHeight;

    const headerHeight = document.querySelector('header').offsetHeight * 2;
    const leftContainerHeight = leftContainer.scrollHeight;

    if (window.innerWidth > 800) {
        if (window.innerHeight > leftContainerHeight && window.innerHeight > totalRightHeight) {
            leftContainer.style.height = (window.innerHeight - headerHeight) + "px";
        } else if (totalRightHeight > leftContainerHeight) {
            leftContainer.style.height = totalRightHeight + headerHeight + "px";
        } else if (totalRightHeight < leftContainerHeight) {
            leftContainer.style.height = "auto";
        }
    } else {
        leftContainer.style.height = "auto";
    }

}

function setRandomIntro() {
    let request = new XMLHttpRequest();
    request.open("GET", "/static/json/intros.json", true);
    request.onload = function () {

        if (request.status >= 200 && request.status < 400) {
            const data = JSON.parse(request.responseText);
            const randomIndex = Math.floor(Math.random() * data.length);
            const intro = data[randomIndex].replace(/\n/g, ' <br> ').split(' ');
            let index = 0;
            const intervalId = setInterval(() => {
                document.getElementById("intro").innerHTML += intro[index] + ' ';
                index++;
                if (intro[index] === '<br>') resizePageHeight();
                if (index === intro.length) {
                    clearInterval(intervalId);
                    document.getElementById("cursor").style.display = "none";
                }
            }, 66);
        }
    }
    request.send();
}
