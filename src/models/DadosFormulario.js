import { Api } from "../controller/Api.js";
import { Templates } from "./DashboardTemplates.js";
const token = JSON.parse(localStorage.getItem("token"));

const Data = class {
    static novoProduto() {
        const form = document.querySelector('form');
        const botaoSalvar = form.children[10].children[0];
        const categorias = [...form.children[5].children];

        const valores = {};

        categorias.forEach(elem => {
            elem.addEventListener('click', (event) => {
                categorias.forEach(e => {
                    e.classList.remove('botao--focado');
                });
                event.target.classList.add('botao--focado');
            });
        });

        botaoSalvar.addEventListener('click', async (e) => {
            e.preventDefault();

            [...form.children].forEach(elem => {
                if (elem.name !== undefined) {
                    valores[elem.name] = elem.value;
                }
            })

            categorias.forEach(elem => {
                if (elem.classList[1] === 'botao--focado') {
                    valores.categoria = elem.dataset.tag;
                }
            });

            await Api.criarProduto(valores, token);

            const container = document.querySelector(".container");
            document.body.removeChild(container);

            setTimeout(() => {
                window.location.reload();
            }, 1000);
        });
    }

    static editarProduto(event, array) {
        const form = document.querySelector('form');
        const produtoId = event.target.parentNode.parentNode.id;
        const botaoExcluir = form.children[10].children[0];
        const botaoSalvar = form.children[10].children[1];
        const categorias = [...form.children[5].children];

        const produtoSelecionado = array.filter(produto => {
            return produto.id === produtoId;
        });

        const { nome, descricao, categoria, preco, imagem } = produtoSelecionado[0];
        const inputs = [];

        [...form.children].forEach(elem => {
            if (elem.name !== undefined) {
                inputs.push(elem);
            }
        })

        inputs[0].value = nome;
        inputs[1].value = descricao;
        inputs[3].value = preco;
        inputs[4].value = imagem;

        categorias.forEach(elem => {
            if (elem.dataset.tag === categoria) {
                elem.classList.add('botao--focado');
            }
            elem.addEventListener('click', (event) => {
                categorias.forEach(e => {
                    e.classList.remove('botao--focado');
                });
                event.target.classList.add('botao--focado');
            });
        });

        botaoExcluir.addEventListener('click', (event) => {
            event.preventDefault()
            Templates.removerProduto();
            this.removerProduto(event);
        });

        botaoSalvar.addEventListener('click', async (event) => {
            event.preventDefault();
            const valores = {};


            [...form.children].forEach(elem => {
                if (elem.name !== undefined) {
                    valores[elem.name] = elem.value;
                }
            })

            categorias.forEach(elem => {
                if (elem.classList[1] === 'botao--focado') {
                    valores.categoria = elem.dataset.tag;
                }
            });

            await Api.atualizarProduto(valores, produtoId, token);
            const container = document.querySelector(".container");
            document.body.removeChild(container);
        });
    }

    static removerProduto(event) {
        const produto = event.target.parentNode.parentNode;
        const listaProdutos = produto.parentNode;
        const produtoId = event.target.parentNode.parentNode.id;

        const btnSim = document.getElementById('btnSim');
        btnSim.addEventListener('click', async () => {

            await Api.removerProduto(produtoId, token);

            const container = document.querySelectorAll(".container");
            container.forEach(elem => {
                document.body.removeChild(elem);
            });
            listaProdutos.removeChild(produto);
        })

        const btnNao = document.getElementById('btnNao');
        btnNao.addEventListener('click', () => {
            const container = document.querySelectorAll(".container");
            container.forEach(elem => {
                document.body.removeChild(elem);
            });
        })
    }
}

export { Data }