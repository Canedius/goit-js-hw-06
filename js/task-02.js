const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulIngredientsEl = document.querySelector("#ingredients");
const fragment = document.createDocumentFragment();

for (const ingredient of ingredients) {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = ingredient;
  fragment.appendChild(itemEl);
}
ulIngredientsEl.append(fragment);
