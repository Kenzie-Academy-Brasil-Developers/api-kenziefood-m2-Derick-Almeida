import { Api } from "../controller/Api.js";
import { Card } from "./card.js";
import { Carrinho } from "../models/carrinho.js";

const produtos = await Api.produtos();

function mostrarProdutos(array) {
  const box = document.querySelector(".box");
  box.innerHTML = "";

  array.forEach(element => {
    Card.criarCard(element);
  });
}

function filtrarProdutos() {
  const input = document.getElementById("buscarProduto");

  input.addEventListener("keyup", buscar);
}

function buscar(event) {
  const campoDeBusca = event.target.value;

  const campoDeBuscaFormatado = campoDeBusca.toLowerCase();

  const filtro = produtos.filter(produto => {
    const nomeProdutoFormatado = produto.nome.toLowerCase();

    return nomeProdutoFormatado.includes(campoDeBuscaFormatado);
  });

  mostrarProdutos(filtro);
}

function verificaTamanhoTela() {
  const size = window.innerWidth;
  const carrinho = document.querySelector(".carrinho_header");
  if (size < 560) {
    carrinho.addEventListener("click", Carrinho.abrirCarrinho);
  }
}
function startAplication() {
  mostrarProdutos(produtos);
  filtrarProdutos();
  Card.defineArray(produtos);
  verificaTamanhoTela();
}

startAplication();

const inicio = document.querySelector(".cardinho");
const preco = document.querySelector(".carrinho_content");
if (inicio.innerHTML === "") {
  preco.innerHTML = "";
  Carrinho.carrinhoVazio();
}

function abrirMenu() {
  const perfilUsuario = document.getElementById("perfilUsuario");
  perfilUsuario.addEventListener("click", () => {
    const menuUsuario = document.querySelector(".menu__usuario");
    menuUsuario.style.display = "block";
    menuUsuario.style.opacity = "1";
  });
}
abrirMenu();

function fazerLogin() {
  const btnLogin = document.getElementById("btnLogin");
  btnLogin.addEventListener("click", () => {
    setTimeout(() => {
      window.location = "./src/pages/login.html";
    }, 1000);
  });
}
fazerLogin();

function fezerRegistro() {
  const btnRegistro = document.getElementById("btnRegistro");
  btnRegistro.addEventListener("click", () => {
    setTimeout(() => {
      window.location = "./src/pages/cadastro.html";
    }, 1000);
  });
}
fezerRegistro();

export { mostrarProdutos };
