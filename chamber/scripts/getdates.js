//get the year
document.querySelector("#year").textContent = new Date().getFullYear();

//last modification
const last_update = new Date(document.lastModified);
const formatted_date = last_update.toLocaleDateString("en-US", {
	day: "numeric",
	month: "2-digit",
	year: "numeric",
	hour: "numeric",
	minute: "2-digit",
	second: "2-digit"
  });
document.querySelector("#lastModified").textContent = formatted_date;

//Hamburger fixins
const hamButton = document.querySelector('#hamburger');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('show');
	hamButton.classList.toggle('show');
});