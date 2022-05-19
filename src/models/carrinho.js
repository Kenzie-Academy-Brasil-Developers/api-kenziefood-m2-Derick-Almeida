class Carrinho {
    static lista = [];
    static id;



    static setarListaStorage() {
        const listaJson = JSON.stringify(this.lista);
        localStorage.setItem('lista', listaJson);
    }

    static pegarListaStorage() {
        const resposta = localStorage.getItem('lista');
        const data = JSON.parse(resposta);
        return data;
    }

    static renderizarLista(array) {
        const ul = document.querySelector(".cardinho");
        ul.innerHTML = "";
        array.forEach(element => {
            this.criarProduto(element);
        })
        const precoTotal = this.atualizarPreco(array);
        const quantidadeTotal = array.length;
        // console.log(precoTotal);
        // console.log(quantidadeTotal)
    }

    static atualizarPreco(array) {
        const valor = array.reduce((acc, { preco }) => {
            acc += preco;
            return acc;
        }, 0);
        return valor;
    }

    static criarProduto(produto) {
        const box = document.querySelector('.cardinho');
        const li = document.createElement("li")
        li.classList.add("carrinho", "carrinho_card");

        const img = this.criarCardImg(produto);
        const conteudo = this.criarCardContent(produto);
        const img2 = this.criarCardBotao(produto);

        li.append(img, conteudo, img2);
        box.appendChild(li);

    }
    static criarCardImg({ imagem }) {
        const img2 = document.createElement("img");
        img2.src = imagem;

        return img2;
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
        const img = document.createElement('img');
        const figure = document.createElement('figure');
        img.id = id;
        img.classList = "lixeira"
        img.src = "./src/pages/assets/imgIcones/lixeira.png"
        figure.addEventListener('click', (event) => {
            this.id = event.target.id
            this.removeItem(this.lista)
            this.lipar()

        })
        figure.append(img)

        return figure
    }
    static removeItem(arr) {
        let itensCarrinho = arr.filter(elen => {
            return elen.id != this.id
        })
        this.lista = itensCarrinho
        // console.log(this.lista)
        this.renderizarLista(itensCarrinho)
        // console.log(itensCarrinho)
        this.setarListaStorage()

    }
    static carrinhoVazio() {
        const inicio = document.querySelector(".carrinho_content");
        inicio.innerHTML = `
        <figure>
            <img src="src/pages/assets/imgIcones/sacola-de-compras-aberta.png" alt="sacola do carrinho img"/>
        </figure>
        <span>Por enquanto não temos produtos no carrinho</span>
        `
    }
    static carrinhoCheio() {
        const inicio = document.querySelector(".carrinho_content");
        const calcular = document.createElement('section');
        const quantidade = document.createElement('div');
        const total = document.createElement('div');
        const p1q1 = document.createElement('p');
        const p4q2 = document.createElement('p');
        const p2t1 = document.createElement('p');
        const p3t2 = document.createElement('p');

        calcular.classList = "boxGeral"
        quantidade.classList = "quantidade"
        total.classList = "pagamentoTotal"

        p1q1.innerText = "Quantidade"
        p2t1.innerText = "Total"

        //aqui vai o preco todal e a quantidade

        p4q2.innerText = "0"
        p3t2.innerText = `R$ 0,00`

        total.append(p2t1, p3t2)
        quantidade.append(p1q1, p4q2)
        calcular.append(quantidade, total)

        inicio.appendChild(calcular)

    }
    static lipar() {

        const preco = document.querySelector(".carrinho_content")
        if (this.lista.length === 0) {
            preco.innerHTML = ""
            this.carrinhoVazio()
        }
    }
}


export { Carrinho }