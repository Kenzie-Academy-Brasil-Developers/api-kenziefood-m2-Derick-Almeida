import { Templates } from "../../../models/DashboardTemplates.js";
import { Api } from "../../../controller/Api.js";
const token = JSON.parse(localStorage.getItem("token"));
async function filtrarTodos() {
  const produtos = await Api.produtosCriados(token);
  const result = produtos.filter(({ categoria }) => categoria);
  Templates.listarMeusProdutos(result);
}

const botaoTodos = document.getElementById("todos");
botaoTodos.addEventListener("click", filtrarTodos);

async function filtrarPorPanificadora() {
  const produtos = await Api.produtosCriados(token);
  const result = produtos.filter(
    ({ categoria }) => categoria === "Panificadora"
  );

  Templates.listarMeusProdutos(result);
}

const botaoPanificadora = document.getElementById("panificadora");
botaoPanificadora.addEventListener("click", filtrarPorPanificadora);

async function filtrarPorFrutas() {
  const produtos = await Api.produtosCriados(token);
  const result = produtos.filter(({ categoria }) => categoria === "frutas");
  Templates.listarMeusProdutos(result);
}

const botaoFrutas = document.getElementById("frutas");
botaoFrutas.addEventListener("click", filtrarPorFrutas);

async function filtrarPorBebidas() {
  const produtos = await Api.produtosCriados(token);
  const result = produtos.filter(({ categoria }) => categoria === "Bebidas");

  Templates.listarMeusProdutos(result);
}

const botaoBebidas = document.getElementById("bebidas");
botaoBebidas.addEventListener("click", filtrarPorBebidas);

const botoes = document.querySelector(".filtros").children;
const arrayBotoes = [...botoes];

function toggle() {
  arrayBotoes.forEach(elem => {
    elem.addEventListener("click", event => {
      arrayBotoes.forEach(e => {
        e.classList.remove("botao--focado");
      });
      event.target.classList.add("botao--focado");
    });
  });
}

toggle();
