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

//Dark Mode toggle
const modeButton = document.querySelector(".slider");
const body = document.querySelector("body");
const button = document.getElementById("hero-button");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes(".")) {
		body.classList.toggle('dark_mode');	
		button.classList.toggle('dark_mode');	
		modeButton.textContent = "`";
	} else {
		body.classList.toggle('dark_mode');
		button.classList.toggle('dark_mode');	
		modeButton.textContent = ".";
	}
});