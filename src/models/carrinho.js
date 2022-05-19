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
        ul.innerHTML ="";
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
            return acc;
        },0);
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
        figure.addEventListener('click',(event)=>{
            this.id = event.target.id
            this.removeItem(this.lista)
            
        })
        figure.append(img)
        
        return figure
    }
    static removeItem(arr){
        let itensCarrinho = arr.filter(elen => {
           return elen.id != this.id
        })
        this.lista = itensCarrinho
        console.log(this.lista)
        this.renderizarLista(itensCarrinho)
        console.log(itensCarrinho)
        this.setarListaStorage()
    }
}


export { Carrinho }