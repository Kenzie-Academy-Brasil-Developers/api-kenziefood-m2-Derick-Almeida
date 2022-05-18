function criarCard(produto) {
  const caixa = document.querySelector(".box");
  const card = document.createElement("card");
  const texto = document.createElement("div");
  texto.classList = "card__text";
  card.classList.add("card", "box_card");

  const img = criarCardImg(produto);
  const conteudo = criarCardContent(produto);
  const footer = criarCardFooter(produto);

  texto.append(conteudo, footer);
  card.append(img, texto);
  caixa.appendChild(card);
}

function criarCardImg({ imagem }) {
  const img = document.createElement("img");
  const figura = document.createElement("figure");
  img.src = imagem;
  figura.appendChild(img);

  return figura;
}

function criarCardContent({ nome, descricao, categoria }) {
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

function criarCardFooter({ preco, id }) {
  const footer = document.createElement("div");
  footer.classList.add("card__text__footer");

  const valor = document.createElement("span");
  valor.innerText = `R$ ${preco}`;

  const img = document.createElement("img");
  img.id = id;
  img.src = "./src/pages/assets/imgIcones/carrinho-de-compras (2).png";

  footer.append(valor, img);

  return footer;
}

export { criarCard };
