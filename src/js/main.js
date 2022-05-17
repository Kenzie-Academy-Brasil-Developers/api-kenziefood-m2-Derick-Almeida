import { Api } from "../controller/Api.js";
import { criarCard } from "./card.js";
import { Carrinho } from "../models/carrinho.js";

const box = document.querySelector(".box");

let produtos = await Api.produtos();



PesquisarProduto.filtrarProdutos();

function criarModal(array) {
  array.forEach(element => {
    criarCard(element);
  });
}
criarModal(produtos);
export { criarModal };
