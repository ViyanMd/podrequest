let userInput = document.getElementById("useremail");
let form = document.querySelector("form");
let errorMessage = document.querySelector(".error");

const checkUserEmail = function (e) {
  e.preventDefault();
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
  if (!regex.test(userInput.value) || userInput.value == 0) {
    errorMessage.textContent = "Oops! Check your email.";
  } else {
    userInput.value = "";
  }
};

form.addEventListener("submit", checkUserEmail, false);
