const form = document.querySelector("form");
form.noValidate = true;
form.addEventListener("submit", validateForm);

const pwd1 = document.getElementById("password");
const pwd2 = document.getElementById("password2");
const pwdErrorMsg = document.querySelector(".pwd-error-msg");

function validateForm(e) {
  const form = e.target;

  if (form.checkValidity()) {
    if (!(pwd1.value === pwd2.value)) {
      e.preventDefault();
      pwdErrorMsg.style.display = "block";
      pwd2.classList.add("invalid-input");
    }
  } else {
    e.preventDefault();
    Array.from(form.elements).forEach((item) => {
      if (item.checkValidity()) {
        item.classList.remove("invalid-input");
      } else {
        item.classList.add("invalid-input");
      }
    });
  }
}
