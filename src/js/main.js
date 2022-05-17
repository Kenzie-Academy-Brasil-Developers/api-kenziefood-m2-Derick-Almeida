import { Api } from "../controller/Api.js";
import { criarCard } from "./card.js";

const box = document.querySelector(".box");

let produtos = await Api.produtos();

function criarModal(array) {
  array.forEach(element => {
    criarCard(element);
  });
}
criarModal(produtos);
export { criarModal };
