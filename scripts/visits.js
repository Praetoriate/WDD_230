const visitCount = document.querySelector(".visits");

let visitNumber = Number(window.localStorage.getItem("visitNumber-ls")) || 0;

if (visitNumber != 0) {
    visitCount.textContent = visitNumber;
} else {
    visitCount.textContent = `Sup, first timer...`;
}

visitNumber++;

localStorage.setItem("visitNumber-ls",visitNumber)