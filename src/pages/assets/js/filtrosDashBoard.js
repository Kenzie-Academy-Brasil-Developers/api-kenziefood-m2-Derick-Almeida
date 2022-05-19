import { Templates } from "../../../models/DashboardTemplates.js";
import { Api } from "../../../controller/Api.js";

async function filtrarTodos() {
  const produtos = await Api.produtos();
  const result = produtos.filter(({ categoria }) => categoria);
  Templates.listarMeusProdutos(result);
}

const botaoTodos = document.getElementById("todos");
botaoTodos.addEventListener("click", filtrarTodos);

async function filtrarPorPanificadora() {
  const produtos = await Api.produtos();
  const result = produtos.filter(
    ({ categoria }) => categoria === "Panificadora"
  );

  Templates.listarMeusProdutos(result);
}

const botaoPanificadora = document.getElementById("panificadora");
botaoPanificadora.addEventListener("click", filtrarPorPanificadora);

async function filtrarPorFrutas() {
  const produtos = await Api.produtos();
  const result = produtos.filter(({ categoria }) => categoria === "Frutas");
  Templates.listarMeusProdutos(result);
}

const botaoFrutas = document.getElementById("frutas");
botaoFrutas.addEventListener("click", filtrarPorFrutas);

async function filtrarPorBebidas() {
  const produtos = await Api.produtos();
  const result = produtos.filter(({ categoria }) => categoria === "Bebidas");

  Templates.listarMeusProdutos(result);
}

const botaoBebidas = document.getElementById("bebidas");
botaoBebidas.addEventListener("click", filtrarPorBebidas);
