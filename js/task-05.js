const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

function onNameInputChange(event) {
  nameOutput.textContent = event.target.value;
  if (event.target.value === "") {
    nameOutput.textContent = "Anonymous";
  }
}

nameInput.addEventListener("input", onNameInputChange);
