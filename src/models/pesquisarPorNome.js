import { Api } from "../controller/Api.js";

const PesquisarProduto = class {
    static produtosFiltrados = [];

    static filtrarProdutos() {
        const input = document.getElementById('buscarProduto');

        input.addEventListener('keyup', this.buscar);
    }

    static async buscar(event) {
        const campoDeBusca = event.target.value;
        const arrayProdutos = await Api.produtos();

        const campoDeBuscaFormatado = campoDeBusca.toLowerCase();

        const filtro = arrayProdutos.filter(produto => {
            const nomeProdutoFormatado = produto.nome.toLowerCase();

            return nomeProdutoFormatado.includes(campoDeBuscaFormatado)
        });

        PesquisarProduto.produtosFiltrados = [...filtro];
    }
}

export  {PesquisarProduto};