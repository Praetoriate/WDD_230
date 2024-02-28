const nameInput = document.querySelector('[name="name"]');

nameInput.addEventListener('invalid', () => {
    nameInput.setCustomValidity('Please enter your actual real name.');
 });


