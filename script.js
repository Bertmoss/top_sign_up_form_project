//Changes inputs border based on validity status and hides/shows individual inputs invalid messages
const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("blur", () => {
    let invalidNotification = document.querySelector(
      `label[for="${input.id}"] > .invalid-message`
    );
    if (input.id == "password" || input.id == "password-confirmation") {
      //skips password input and password-confirmation input
    } else if (input.validity.valid && !input.value) {
      input.setAttribute("style", "border: 1px solid var(--gray-darker)");
    } else if (input.validity.valid) {
      input.setAttribute("style", "border: 1px solid var(--olive)");
      invalidNotification.setAttribute("style", "visibility: hidden");
    } else {
      input.setAttribute("style", "border: 1px solid var(--red)");
      invalidNotification.setAttribute("style", "visibility: visible");
    }
  });
});

//Password Functionality
const passwordInput = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirmation");
let invalidMessage = document.querySelector(".invalid-message-password");

function stylePasswordMatching() {
  if (passwordInput.value === passwordConfirmation.value) {
    invalidMessage.setAttribute("style", "visibility: hidden");
    passwordInput.setAttribute("style", "border: 1px solid var(--olive)");
    passwordConfirmation.setAttribute(
      "style",
      "border: 1px solid var(--olive)"
    );
  } else if (
    passwordInput.value !== passwordConfirmation.value &&
    passwordConfirmation.value
  ) {
    invalidMessage.setAttribute("style", "visibility: visible");
    passwordInput.setAttribute("style", "border: 1px solid var(--red)");
    passwordConfirmation.setAttribute("style", "border: 1px solid var(--red)");
  }
}

passwordConfirmation.addEventListener("input", stylePasswordMatching);
passwordInput.addEventListener("input", stylePasswordMatching);
