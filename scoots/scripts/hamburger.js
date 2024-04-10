//Hamburger fixins
const hamButton = document.querySelector('#hamburger');
const navigation = document.querySelector('.nav-mobile');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('show');
	hamButton.classList.toggle('show');
});
