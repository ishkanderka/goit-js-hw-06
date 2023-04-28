const textInput = document.querySelector("#validation-input");
const textLength = textInput.getAttribute("data-length");

const inputElValidation = (event) => {
  return event.currentTarget.value.length == textLength
    ? (textInput.classList = "valid")
    : (textInput.classList = "invalid");
};
textInput.addEventListener("blur", inputElValidation);
