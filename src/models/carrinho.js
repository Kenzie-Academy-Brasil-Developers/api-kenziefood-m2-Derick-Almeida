class Carrinho {
    static lista = [];
    
    static adicionarProdutoLista(produto) {
        this.lista.push(produto);
    }

    static setarListaStorage() {
        const listaJson = JSON.stringify(this.lista);
        localStorage.setItem('lista', listaJson);
    }

    static pegarListaStorage() {
        const resposta = localStorage.getItem('lista');
        const data = JSON.parse(resposta);
        return data
    }

    static renderizarLista(array) {
        array.forEach(element => {
            this.criarProduto(element);
        })
        const precoTotal = this.atualizarPreco(array);
        const quantidadeTotal = array.length;
        console.log(precoTotal);
        console.log(quantidadeTotal)
    }
    
    static atualizarPreco (array) {
        const valor = array.reduce((acc,{preco}) => {
            acc += preco;
            return acc
        },0);
        return valor
    }

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