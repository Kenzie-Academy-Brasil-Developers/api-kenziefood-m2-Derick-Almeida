class Carrinho {
    static criarProduto(produto) {
        const box = document.querySelector('.carrinho_content');
        const card = document.createElement('div');
        card.classList.add("carrinho", "carrinho_card");

        const img = this.criarCardImg(produto);
        const conteudo = this.criarCardContent(produto);
        const botao = this.criarCardBotao(produto);

        card.append(img, conteudo, botao);
        box.appendChild(card);
    }

    static criarCardImg({ imagem }) {
        const img = document.createElement("img");
        img.src = imagem;

        return img;
    }

    static criarCardContent({ nome, categoria, preco }) {
        const conteudo = document.createElement('div');
        conteudo.classList.add("carrinho__content");

        const titulo = document.createElement('h3');
        titulo.innerText = nome;

        const secao = document.createElement('span');
        secao.innerText = categoria;

        const valor = document.createElement('span');
        valor.innerText = `R$ ${preco}`

        conteudo.append(titulo, secao, valor);

        return conteudo
    }

    static criarCardBotao({ id }) {
        const botao = document.createElement('button');
        botao.id = id;

        return botao
    }
}


export { Carrinho }