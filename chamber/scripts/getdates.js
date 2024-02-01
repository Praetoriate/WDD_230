//get the year
document.querySelector("#year").textContent = new Date().getFullYear();

//last modification
document.querySelector("#lastModified").textContent = new Date(
  document.lastModified
);

//Hamburger fixins
const hamButton = document.querySelector('#hamburger');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('show');
	hamButton.classList.toggle('show');
});