import { Api } from "../../../controller/Api.js";
import { mostrarProdutos } from "../../../js/main.js";

async function filtrarPorTodos() {
  const produtos = await Api.produtos();
  const result = produtos.filter(({ categoria }) => categoria);
  mostrarProdutos(result);
}

const botaoTodos = document.getElementById("todos");
botaoTodos.addEventListener("click", filtrarPorTodos);

async function filtrarPorPanificadora() {
  const carrinho_content = document.querySelector(".box");
  const produtos = await Api.produtos();
  const result = produtos.filter(
    produto => produto.categoria === "Panificadora"
  );
  carrinho_content.innerHTML = "";
  mostrarProdutos(result);
}

const botaoPanificadora = document.getElementById("panificadora");
botaoPanificadora.addEventListener("click", filtrarPorPanificadora);

async function filtrarPorFrutas() {
  const carrinho_content = document.querySelector(".box");
  const produtos = await Api.produtos();
  const result = produtos.filter(produto => produto.categoria === "Frutas");
  carrinho_content.innerHTML = "";
  mostrarProdutos(result);
}

const botaoFrutas = document.getElementById("frutas");
botaoFrutas.addEventListener("click", filtrarPorFrutas);

async function filtrarPorBebidas() {
  const carrinho_content = document.querySelector(".box");
  const produtos = await Api.produtos();
  const result = produtos.filter(
    produto => produto.categoria === "Bebidas" || produto.categoria === "Bebida"
  );
  carrinho_content.innerHTML = "";
  mostrarProdutos(result);
}

const botaoBebidas = document.getElementById("bebidas");
botaoBebidas.addEventListener("click", filtrarPorBebidas);
