const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

function onNameInputChange(event) {
  nameOutput.textContent = event.currentTarget.value;
}

nameInput.addEventListener("input", onNameInputChange);
