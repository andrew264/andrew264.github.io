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
    resizeLeftContainer();
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

function resizeLeftContainer() {
    const activeId = document.querySelector('#active').innerHTML;
    const divHeight = document.getElementById(activeId).scrollHeight;
    const leftContainer = document.getElementById("left-container");
    const tabHeight = document.getElementsByClassName("tab")[0].offsetHeight;
    const totalHeight = tabHeight + divHeight;

    const headerHeight = document.querySelector('header').offsetHeight;
    const minLeftContainerHeight = window.innerHeight - 2 * headerHeight;

    if (window.innerWidth > 800) {
        if (totalHeight < minLeftContainerHeight) {
            leftContainer.style.height = minLeftContainerHeight + "px";
        } else {
            leftContainer.style.height = totalHeight + "px";
        }
    } else {
        leftContainer.style.height = "auto";
    }

}
