const categoriesNumber = document.querySelectorAll(".item");
console.log("Number of categories: ", categoriesNumber.length);

categoriesNumber.forEach((item) => {
  console.log("Category: ", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
});
