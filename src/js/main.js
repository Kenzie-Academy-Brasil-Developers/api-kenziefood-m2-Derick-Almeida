import { Api } from "../controller/Api.js";
import { PesquisarProduto } from "../models/pesquisarPorNome.js";
import { criarCard } from "./card.js";

const box = document.querySelector(".box");

let produtos = await Api.produtos();
produtos.forEach(element => {
  criarCard(element);
});

PesquisarProduto.filtrarProdutos();
