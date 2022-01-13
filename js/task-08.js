const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const formElemetPass = event.currentTarget.elements.password.value;
  const formElementEmail = event.currentTarget.elements.email.value;

  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    if (!formElemetPass && formElementEmail) {
      return alert("Все поля должны быть заполнены!");
    }
    const obj = {
      [name]: value,
    };
    console.log(obj);
    formEl.reset();
  });
}
