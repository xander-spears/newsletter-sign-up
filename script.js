//Grab element
const form = document.querySelector("form");
const formGroup = document.querySelector(".form-group");
const errorMessage = document.querySelector(".error");
const emailInput = document.querySelector("#email");

function handleSubmit(e) {
  e.preventDefault();

  const data = {};
  const fields = e.target.querySelector("input");

  data[fields.name] = fields.value;

  clearError();
  if (fields.validity.valueMissing == true) {
    formGroup.classList.add("has-error");
    errorMessage.textContent = "Enter your email";
  } else if (fields.validity.typeMismatch == true) {
    formGroup.classList.add("has-error");
    errorMessage.textContent = "Input a valid email :/";
  } else if (fields.validity.valid == true) {
    document.querySelector("body").classList.add("is_subscribed");
    document.querySelector(".bold-email").textContent = fields.value;
  }

  console.log(data);
  console.log(e);
  console.log(fields.validity);
}

function clearError() {
  formGroup.classList.remove("has-error");
}

form.addEventListener("submit", handleSubmit);
emailInput.addEventListener("focus", clearError);
