const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");

const createNewEl = (elements) => {
  return elements.map((element) => {
    const newEl = document.createElement("li");
    newEl.classList.add("item");
    newEl.textContent = element;

    return newEl;
  });
};

const items = createNewEl(ingredients);
ingredientsListEl.append(...items);
