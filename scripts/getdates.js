//get the year
document.querySelector("#year").textContent = new Date().getFullYear();

//last modification
document.querySelector("#lastModified").textContent = new Date(
  document.lastModified
);
