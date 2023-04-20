const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

const totalValue = document.querySelector("#value");

let counterValue = 0;

totalValue.innerHTML = counterValue;

const onIncrementBtnClick = () => {
  counterValue += 1;
  totalValue.textContent = counterValue;
};

const onDecrementBtnClick = () => {
  counterValue -= 1;
  totalValue.textContent = counterValue;
};

incrementBtn.addEventListener("click", onIncrementBtnClick);
decrementBtn.addEventListener("click", onDecrementBtnClick);
