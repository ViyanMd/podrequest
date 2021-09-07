let userInput = document.getElementById("useremail");
let form = document.querySelector("form");
let errorMessage = document.querySelector(".error");

const checkUserEmail = function (e) {
  e.preventDefault();
  const pattern = "[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+";
  if (!userInput.matches(pattern)) {
    errorMessage.innerHTML = "<p> Oops! Check your email.</p>";
  } else {
    errorMessage.innerHTML = "";
  }
};

form.addEventListener("submit", checkUserEmail);
