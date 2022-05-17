import { Api } from "../../../controller/Api.js";

// function eventoBotaoLogin() {
//   const botao = document.getElementById("btnLogin");
//   botao.addEventListener("click", pegarDadosFormulario);
// }

// function pegarDadosFormulario(event) {
//   event.preventDefault();

//   const formulario = document.querySelector("form");
//   const elementosFormulario = [...formulario.children];
//   const dadosLogin = {};

//   elementosFormulario.forEach(elem => {
//     if (elem.name !== "") {
//       dadosLogin[elem.name] = elem.value;
//       console.log(dadosLogin);
//     }
//   });

//   fazerLogin(dadosLogin);
// }

// async function fazerLogin(dadosLogin) {
//   const response = await Api.loginUsuario(dadosLogin);
//   const modalDiv = document.getElementById("modalDiv");
//   modalDiv.classList.add("modal__div");
//   const modalTexto = document.querySelector(".modal__texto");
//   if (typeof response === "string") {
//     localStorage.setItem("token", response);
//     modalTexto.textContent = "Login efetuado com sucesso!";
//     setTimeout(() => {
//       window.location = "../../src/pages/dashboard.html";
//     }, 3000);
//   } else {
//     modalDiv.style.background = "red";
//     modalTexto.innerText = response.error;
//     setTimeout(() => {
//       location.reload();
//     }, 3000);
//   }
// }

// eventoBotaoLogin();

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
