const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const Password = event.currentTarget.elements.password.value;
  const Email = event.currentTarget.elements.email.value;
  if (!Password || !Email) {
    return alert("Все поля должны быть заполнены!");
  }
  const obj = {
    Password,
    Email,
  };
  console.log(obj);
  formEl.reset();
}
