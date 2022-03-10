


/*
const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("click", () => {
    if (!input.value) {
      input.classList.add("invalid-class");
    }
  });
  input.addEventListener("input", () => {
    //need to accommodate password and telephone and email. Shouldn't be through value but through valid/invalid status.
    //Otherwise it will falsely claim its valid (for example in email)and falsely claim invalid (telephone which isn't required)
    if (input.value) {
      input.classList.remove("invalid-class");
      input.classList.add("valid-class");
    } else {
      input.classList.remove("valid-class");
      input.classList.add("invalid-class");
    }
  });
});
*/

//Password Input Fuctionality

const invalidInputs = document.querySelectorAll("input:invalid"); 
const validInputs = document.querySelectorAll("input:valid");


invalidInputs.forEach((invalidInput) => {
  invalidInput.addEventListener("input", () => {
    invalidInput.setAttribute("style", "border-color: var(--red)")
  })
})
validInputs.forEach((validInput) => {
  validInput.addEventListener("input", ()=>{
    validInput.setAttribute("style", "border-color: var(--olive)")
  })
})

//Password functionality

const passwordInput = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirmation");
let invalidMessage = document.querySelector(".invalid-message");

//checks if the passwords match
function passwordMatch() {
  if (passwordInput.value === passwordConfirmation.value) {
    return true;
  } else {
    return false;
  }
}

//Shows the invalid message if the confirmation is not the same.
passwordConfirmation.addEventListener("blur", () => {
  if (!passwordMatch()) {
    invalidMessage.setAttribute("style", "visibility: visible")
  }
});
//Hides the invalid message if the password confirmation is changed to fit the password.
passwordConfirmation.addEventListener("input", () => {
  if (passwordMatch()) {
    invalidMessage.setAttribute("style", "visibility: hidden")
  }
})
//Hides the invalid message if the password is changed to fit the password confirmation
passwordInput.addEventListener("input", () => {
  if (passwordMatch()) {
    invalidMessage.setAttribute("style", "visibility: hidden")
  }
})


