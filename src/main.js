const mainOne = document.querySelector(".main__one");
const mainTwo = document.querySelector(".main__two");
const errorText = document.querySelector(".main__one-bottom-box-error");
const btn = document.querySelector(".main__one-bottom-btn");
const dismissBtn = document.querySelector(".dissmis-btn");
const thanksEmail = document.querySelector(".main__two-text span");
const emailInput = document.querySelector("#email");
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const checkEmail = () => {
	if (emailRegex.test(emailInput.value) && emailInput.value !== "") {
		emailInput.style.border = "1px solid hsl(231, 7%, 60%)";
		errorText.style.visibility = "hidden";
		emailInput.classList.remove("red-placeholder");
		thanksEmail.textContent = emailInput.value;
		mainOne.style.display = "none";
		mainTwo.style.display = "flex";
		emailInput.value = "";
	} else {
		emailInput.style.border = "1px solid hsl(4, 100%, 67%)";
		errorText.style.visibility = "visible";
		emailInput.classList.add("red-placeholder");
	}
};

const submit = () => {
	mainOne.style.display = "block";
	mainTwo.style.display = "none";
};

window.onload = () => {
	emailInput.value = "";
};

btn.addEventListener("click", checkEmail);
dismissBtn.addEventListener("click", submit);
