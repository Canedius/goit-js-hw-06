const textEl = document.querySelector("#text");
const InputEl = document.querySelector("#font-size-control");

textEl.style.fontSize = "50px";

InputEl.addEventListener("input", (event) => {
  textEl.style.fontSize = `${InputEl.value}px`;
});
