const kp1 = document.querySelector("#pwd");
const kp2 = document.querySelector("#pwd2");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "❗Passwords DO NOT MATCH!";
		message.style.visibility = "show";
		kp2.style.backgroundColor = "#fff0f3";         
		kp1.focus();       
		kp1.value = "";
		kp2.value = "";
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}

// Validate
document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.querySelector("#email");
    const validateEmailButton = document.querySelector("#validateEmail");
    const message = document.querySelector("#emailmessage");
  
    validateEmailButton.addEventListener("click", function () {
      const emailValue = emailInput.value;
      const emailPattern = /^[a-zA-Z0-9_.-]+@byui.edu$/; // Adjust pattern if needed
  
      if (emailPattern.test(emailValue)) {
        message.textContent = "Email is valid!";
      } else {
        message.textContent = "Email is not valid.";
      }
    });
  });


// Range Value
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}
