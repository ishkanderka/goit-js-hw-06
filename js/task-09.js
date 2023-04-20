const body = document.querySelector("body");
const colorValue = document.querySelector(".color");
const btn = document.querySelector(".change-color");

function onBtnClick(event) {
  event.preventDefault();
  body.style.backgroundColor = getRandomHexColor();
  colorValue.innerHTML = body.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btn.addEventListener("click", onBtnClick);
