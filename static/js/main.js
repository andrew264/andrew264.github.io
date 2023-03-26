function openTab(evt, tabName) {
    let i, tabContent, tabLinks;

    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabLinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
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


function animateProgressBar(barId, percent) {
    const progress = document.getElementById(barId);
    let width = 0;
    const id = setInterval(frame, 10);

    function frame() {
        if (width >= percent) {
            clearInterval(id);
        } else {
            width++;
            progress.style.width = width + '%';
            if (width < 35) {
                progress.style.backgroundColor = '#ffff4b';
            } else {
                progress.style.backgroundColor = '#7ef485';
            }
        }
    }
}
