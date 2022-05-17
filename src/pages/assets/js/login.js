import { Api } from "../../../controller/Api.js";

function eventoBotaoLogin() {
    const botao = document.getElementById('btnLogin');
    botao.addEventListener('click', pegarDadosFormulario);
}

function pegarDadosFormulario(event) {
    event.preventDefault();

    const formulario = document.querySelector('form');
    const elementosFormulario = [...formulario.children];
    const dadosLogin = {};
    elementosFormulario.forEach(elem => {
        if (elem.name !== "") {
            dadosLogin[elem.name] = elem.value;
        }
    });

    fazerLogin(dadosLogin)
}

async function fazerLogin(dadosLogin) {
    const response = await Api.loginUsuario(dadosLogin)

    if (typeof response === 'string') {
        localStorage.setItem('token', response);
        //exibir modal de sucesso
        setTimeout(() => {
            window.location = '../../src/pages/dashboard.html'
        }, 2000);
    } else {
        //exibe modal de erro
    }
}

eventoBotaoLogin();