// form

function validate(inputElement, errorElement) {
  if (inputElement.value.trim() === "") {
    inputElement.classList.add("error");
    errorElement.textContent = "form tidak boleh kosong";
    return false;
  } else {
    inputElement.classList.remove("error");
    errorElement.textContent = "";
    return true;
  }
}

const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const namaInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const numberInput = document.getElementById("number")

  const errorName = document.getElementById("errorName");
  const errorEmail = document.getElementById("errorEmail");
  const errorNumber = document.getElementById("errorNumber");

  const namaValid = validate(namaInput, errorName);
  const emailValid = validate(emailInput, errorEmail);
  const numberValid = validate(numberInput, errorNumber);

  if (namaValid && emailValid && numberValid) {
    alert("form sudah terkirim")
  }
});
