import { Api } from "../../../controller/Api.js";

const token = localStorage.getItem('token');
const meusProdutos = await Api.produtosCriados(JSON.parse(token));

async function listarProdutos(array) {
    const lista = document.querySelector('.corpo__tabela');
    lista.innerHTML = "";

    array.forEach(produto => {
        const item = document.createElement('li');
        const caixa1 = document.createElement('div');
        const imagemProduto = document.createElement('img');
        const nomeProduto = document.createElement('p');

        const caixa2 = document.createElement('div');
        const categoriaProduto = document.createElement('span');

        const caixa3 = document.createElement('div');
        const descricaoProduto = document.createElement('p');

        const caixa4 = document.createElement('div');
        const botaoEditar = document.createElement('button');
        const botaoRemover = document.createElement('button');

        item.classList.add('corpo__tabela--linha');
        caixa1.classList.add('box', 'produto__nome');
        nomeProduto.classList.add('corpo__tabela--nome');

        caixa2.classList.add('box');
        categoriaProduto.classList.add('corpo__tabela--categoria');

        caixa3.classList.add('box');
        descricaoProduto.classList.add('corpo__tabela--descricao');

        caixa4.classList.add('box');
        botaoEditar.classList.add('corpo__tabela--botao');
        botaoRemover.classList.add('corpo__tabela--botao');

        botaoEditar.id = 'btnEditar';
        botaoRemover.id = 'btnRemover';

        imagemProduto.src = produto.imagem;
        imagemProduto.alt = produto.nome;
        nomeProduto.innerText = produto.nome;

        categoriaProduto.innerText = produto.categoria;

        descricaoProduto.innerText = produto.descricao;

        botaoEditar.innerText = 'Editar';
        botaoRemover.innerText = 'Remover';

        caixa1.append(imagemProduto, nomeProduto);
        caixa2.appendChild(categoriaProduto);
        caixa3.appendChild(descricaoProduto);
        caixa4.append(botaoEditar, botaoRemover);
        item.append(caixa1, caixa2, caixa3, caixa4);
        lista.appendChild(item);
    });
}
listarProdutos(meusProdutos);

function filtrarProdutos() {
    const input = document.getElementById('buscarProduto');

    input.addEventListener('keyup', buscar);
}

async function buscar(event) {
    const campoDeBusca = event.target.value;

    const campoDeBuscaFormatado = campoDeBusca.toLowerCase();

    const filtro = meusProdutos.filter(produto => {
        const nomeProdutoFormatado = produto.nome.toLowerCase();

        return nomeProdutoFormatado.includes(campoDeBuscaFormatado)
    });

    listarProdutos(filtro);
}
filtrarProdutos()