import { Api } from "../controller/Api.js";
import { PesquisarProduto } from "../models/pesquisarPorNome.js";
import { criarCard } from "./card.js";
import { Carrinho } from "../models/carrinho.js";

const box = document.querySelector(".box");

let produtos = await Api.produtos();
produtos.forEach(element => {
  criarCard(element);
});


// Carrinho.criarProduto(produtos[0])

PesquisarProduto.filtrarProdutos();
