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