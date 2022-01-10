const controls = document.querySelector("#controls");
const inputEl = controls.firstElementChild;
const createBtnEl = controls.querySelector("button");
const destroyBtnEl = controls.lastElementChild;
const boxesEl = document.querySelector("#boxes");

createBtnEl.addEventListener("click", makeMagic);
destroyBtnEl.addEventListener("click", (event) => {
  boxesEl.innerHTML = "";
  inputEl.value = "";
});

function makeMagic(event) {
  event.preventDefault();
  const iterator = inputEl.value;
  if (Number.parseInt(iterator)) {
    createBoxes(iterator);
  } else {
    alert("Это не число!");
  }
}

function createBoxes(iterator) {
  let counter = 0;
  while (counter < iterator) {
    counter += 1;
    boxesEl.insertAdjacentHTML("beforeend", `<div></div>`);
  }
  const arrayDiv = [...boxesEl.querySelectorAll("div")];

  arrayDiv.reduce((previousValue, { style }) => {
    (style.width = `${previousValue + 10}px`),
      (style.height = `${previousValue + 10}px`),
      (style.backgroundColor = getRandomHexColor());

    return previousValue + 10;
  }, 20);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
