function criarCard(produto) {
    const box = document.querySelector('.box'); 
    const card = document.createElement('card');
    card.classList.add('card', 'box_card')

    const img = criarCardImg(produto);
    const content = criarCardContent(produto);
    const footer = criarCardFooter(produto);
    
    card.append(img,content,footer);
    box.appendChild(card);
}

function criarCardImg({ imagem }) {
    console.log(imagem)
    const img = document.createElement('img');
    img.src = imagem;

    return img
}

function criarCardContent({ nome, descricao, categoria }) {
    const content = document.createElement('div');
    content.classList.add('card__content');

    const titulo = document.createElement('h3');
    titulo.innerText = nome;

    const text = document.createElement('p');
    text.innerText = descricao;

    const secao = document.createElement('span');
    secao.innerText = categoria;

    content.append(titulo, text, categoria);

    return content
}

function criarCardFooter({ preco, id }) {
    const footer = document.createElement('div');
    footer.classList.add('card__footer');

    const valor = document.createElement('span');
    valor.innerText = `R$: ${preco}`;

    const botao = document.createElement('button');
    botao.id = id;

    footer.append(valor, botao);

    return footer
}

export { criarCard }