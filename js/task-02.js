const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.getElementById("ingredients")
console.log(listEl)
for (const ingredient of ingredients) {
  const itemEl = document.createElement("li")
  itemEl.textContent = ingredient
  itemEl.classList.add("item")
  listEl.appendChild(itemEl)
  console.log(itemEl)
}