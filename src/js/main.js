import { Api } from "../controller/Api.js";
import { criarCard } from "./card.js";

const box = document.querySelector(".box");

let produtos = await Api.produtos();
produtos.forEach(element => {
  criarCard(element);
});