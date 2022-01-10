const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulIngredientsEl = document.querySelector("#ingredients");

for (const ingredient of ingredients) {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = ingredient;
  ulIngredientsEl.appendChild(itemEl);
}
