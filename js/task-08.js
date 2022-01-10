const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  let flag = true;
  event.preventDefault();
  const formElemetPass = event.currentTarget.elements.password.value;
  const formElementEmail = event.currentTarget.elements.email.value;

  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    if (formElemetPass && formElementEmail) {
      const obj = {
        [name]: value,
      };
      console.log(obj);
    } else {
      login = false;
    }
    formEl.reset();
  });
  if (!flag) {
    alert("Все поля должны быть заполнены!");
  }
}
