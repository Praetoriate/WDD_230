const visitCount = document.querySelector(".discover-visits");

let visitNumber = Number(window.localStorage.getItem("discoverVisits-ls")) || 0;

if (visitNumber == 0) {
    visitCount.textContent = `Welcome! Let us know if you have any questions.`;
}

visitNumber++;

localStorage.setItem("discoverVisits-ls",visitNumber)