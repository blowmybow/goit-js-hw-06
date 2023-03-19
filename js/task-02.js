const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.getElementById("ingredients");
  const itemElArr = [];
    for (const ingredient of ingredients) {
      const itemEl = document.createElement("li");
      itemEl.textContent = ingredient;
      itemEl.classList.add("item");
      itemElArr.push(itemEl);
};
listEl.append(...itemElArr);