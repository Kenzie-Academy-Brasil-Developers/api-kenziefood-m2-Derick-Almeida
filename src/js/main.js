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


function startAplication() {
  mostrarProdutos(produtos);
  filtrarProdutos();
  Card.defineArray(produtos)
  Carrinho.pegarListaStorage()
}
startAplication()




export { mostrarProdutos };
