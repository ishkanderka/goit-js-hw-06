const rangeInput = document.querySelector("#font-size-control");
const textOutput = document.querySelector("#text");

// rangeInput.setAttribute("value", 16);
// rangeInput.setAttribute("step", 1);

rangeInput.addEventListener("input", (event) => {
  textOutput.style.fontSize = event.target.value + "px";
});
