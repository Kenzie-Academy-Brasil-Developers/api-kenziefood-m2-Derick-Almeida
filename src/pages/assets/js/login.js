import { Api } from "../../../controller/Api.js";

async function loginUser(event) {
  event.preventDefault();
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const USER_DATAS = await Api.loginUsuario({
    email: email.value,
    password: password.value
  });

  return USER_DATAS;
}
const BUTTON_LOGIN = document.getElementById("btnLogin");
BUTTON_LOGIN.addEventListener("click", loginUser);
