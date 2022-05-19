
import { Carrinho } from "../models/carrinho.js";

class Card {
  
  static id;
  static array;
  
  static criarCard(produto) {
    const caixa = document.querySelector(".box");
    const card = document.createElement("card");
    const texto = document.createElement("div")
    texto.classList = "card__text"
    card.classList.add("card", "box_card");
    
    const img = this.criarCardImg(produto);
    const conteudo = this.criarCardContent(produto);
    const footer = this.criarCardFooter(produto);
    
    texto.append(conteudo, footer)
    card.append(img, texto);
    caixa.appendChild(card);
  }
  
  static criarCardImg({ imagem }) {
    const img = document.createElement("img");
    const figura = document.createElement("figure");
    img.src = imagem;
    figura.appendChild(img)
    
    return figura;
  }
  
  static criarCardContent({ nome, descricao, categoria }) {
    const conteudo = document.createElement("div");
    conteudo.classList.add("card__text__content");
    
    const titulo = document.createElement("h3");
    titulo.innerText = nome;
    
    const texto = document.createElement("p");
    texto.innerText = descricao;

    const secao = document.createElement("span");
    secao.innerText = categoria;

    conteudo.append(titulo, texto, secao);
    
    return conteudo;
  }
  
  
  static criarCardFooter({ preco, id }) {
    const footer = document.createElement("div");
    footer.classList.add("card__text__footer");
    
    const valor = document.createElement("span");
    valor.innerText = `R$: ${preco}`;
    
    const img = document.createElement("img");
    img.id = id;
    img.classList = "btn"
    img.src = "./src/pages/assets/imgIcones/shopping-cart-add.png"
    
    footer.append(valor, img);
    
    
    img.addEventListener('click', (event) => {
      this.id = event.target.id
      this.retornaItemClicado(this.array)
    })
    
    return footer;
  }
  static defineArray(arr) {
    this.array = arr
  }
  static retornaItemClicado(arr) {
    
    const produto = arr.find((elen) => {
      return elen.id == this.id
    })
    Carrinho.criarProduto(produto)
    Carrinho.lista.push(produto)
    Carrinho.setarListaStorage()
  }
}

export { Card };
