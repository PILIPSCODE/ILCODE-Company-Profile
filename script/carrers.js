// form

function validate(inputElement, errorElement) {
  if (inputElement.value.trim() === "") {
    inputElement.classList.add("error");
    errorElement.textContent = "ndak boleh kosong";
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
  const errorName = document.getElementById("errorName");
  const errorEmail = document.getElementById("errorEmail");

  const namaValid = validate(namaInput, errorName);
  const emailValid = validate(emailInput, errorEmail);

  if (namaValid && emailValid) {
    form.submit();
  }
});
