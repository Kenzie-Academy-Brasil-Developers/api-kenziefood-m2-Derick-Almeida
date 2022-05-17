import { Api } from "../../../controller/Api.js"

const formulario = document.querySelector('form');
function PegaValor() {
    return {
        "name":formulario[0].value,
        "email":formulario[1].value,
        "password":formulario[2].value
    }
}

const botao = document.getElementById('btnCadastro');
botao.addEventListener("click",async (event) => {
    event.preventDefault();
    const validacao = await Api.registrarUsuario(PegaValor());
    if (validacao === true) {
        alert("Cadastro concluído");
        location.replace("/index.html");
    } else if(validacao === undefined){
        alert("Usuário já cadastrado");
    }else{
        alert("Usuário já cadastrado");
    }
    
})


