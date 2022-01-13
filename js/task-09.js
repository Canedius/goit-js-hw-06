function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");

buttonEl.addEventListener("click", addstyle);

function addstyle(event) {
  const color = (bodyEl.style.backgroundColor = getRandomHexColor());
  spanEl.textContent = color;
}
