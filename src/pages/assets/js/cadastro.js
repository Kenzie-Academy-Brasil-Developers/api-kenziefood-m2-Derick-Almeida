import { Api } from "../../../controller/Api.js";

async function registroUser(e) {
  e.preventDefault();
  const nome = document.getElementById("firstname").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const dados = {
    name: nome,
    email: email,
    password: senha
  };

  await Api.registrarUsuario(dados);
}

const btnRegistrar = document.getElementById("btnRegistrar");
btnRegistrar.addEventListener("click", registroUser);
