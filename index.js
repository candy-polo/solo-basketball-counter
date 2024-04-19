let homeStore = document.getElementById("homescore")

let guestStore = document.getElementById("guestscore")

let homeScore = 0

let guestScore = 0

function homePoints1() {
    homeScore += 1
    homeStore.textContent = homeScore
}

function homePoints2() {
    homeScore += 2
    homeStore.textContent = homeScore
}

function homePoints3() {
    homeScore += 3
    homeStore.textContent = homeScore
}

function guestPoints1() {
    guestScore += 1
    guestStore.textContent = guestScore
}

function guestPoints2() {
    guestScore += 2
    guestStore.textContent = guestScore
}

function guestPoints3() {
    guestScore += 3
    guestStore.textContent = guestScore
}