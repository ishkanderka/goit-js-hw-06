const textInput = document.querySelector("#validation-input");
const textLength = textInput.getAttribute("data-length");

const inputElValidation = (event) => {
  return event.currentTarget.value.length <= textLength
    ? (textInput.style.borderColor = "#4caf50")
    : (textInput.style.borderColor = "#f44336");
};

textInput.addEventListener("blur", inputElValidation);
