import { Api } from "../../../controller/Api.js";

function eventoBotaoLogin() {
  const botao = document.getElementById("btnLogin");
  botao.addEventListener("click", pegarDadosFormulario);
}

function pegarDadosFormulario(event) {
  event.preventDefault();

  const formulario = document.querySelector("form");
  const elementosFormulario = [...formulario.children];
  const dadosLogin = {};
  elementosFormulario.forEach(elem => {
    if (elem.name !== "") {
      dadosLogin[elem.name] = elem.value;
    }
  });

  fazerLogin(dadosLogin);
}

async function fazerLogin(dadosLogin) {
  const response = await Api.loginUsuario(dadosLogin);

  const modalDiv = document.getElementById("modalDiv");
  const modalTexto = document.querySelector(".modal__texto");

  if (typeof response === "string") {
    localStorage.setItem("token", response);
    modalTexto.textContent = "Login efetuado com sucesso!";
    modalDiv.style.animation = 'modal 3.5s';
    setTimeout(() => {
      window.location = "../../src/pages/dashboard.html";
    }, 3500);

  } else {
    modalDiv.style.animation = 'modal 3.5s';
    modalDiv.style.background = "red";
    modalTexto.innerText = response.error;

    setTimeout(() => {
      location.reload();
    }, 3500);
  }
}

eventoBotaoLogin();
