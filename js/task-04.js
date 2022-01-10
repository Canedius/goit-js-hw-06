const counterEl = document.querySelector(`#counter`);
const btnDecremEl = counterEl.firstElementChild;
const btnIncremEl = counterEl.lastElementChild;
const valueEl = counterEl.querySelector(`#value`);

let counterValue = 0;

btnDecremEl.addEventListener("click", () => {
  valueEl.textContent = counterValue -= 1;
});

btnIncremEl.addEventListener("click", () => {
  valueEl.textContent = counterValue += 1;
});
