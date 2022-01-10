const arrayItemEl = document.querySelectorAll(".item");

console.log("Number of categories :", arrayItemEl.length);
arrayItemEl.forEach((element) => {
  console.log("Category:", element.firstElementChild.textContent);
  console.log("Elements:", element.lastElementChild.children.length);
});
