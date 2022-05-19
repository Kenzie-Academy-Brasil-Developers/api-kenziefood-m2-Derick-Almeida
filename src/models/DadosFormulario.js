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

        botaoSalvar.addEventListener('click', (e) => {
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

            Api.criarProduto(valores, token)
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

        botaoSalvar.addEventListener('click', (event) => {
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

            // CHAMAR FUNÇÃO QUE ATUALIZA PRODUTO!
            // Api.????(valores, token);
        });
    }

    static removerProduto(event) {
        const produtoId = event.target.parentNode.parentNode.id;

        const btnSim = document.getElementById('btnSim');
        btnSim.addEventListener('click', () => {

            // FUNÇÃO QUE REMOVE PRODUTO!
            // Api.??????(id);

            setTimeout(() => {
                window.location.reload();
            }, 1000);
        })

        const btnNao = document.getElementById('btnNao');
        btnNao.addEventListener('click', () => {
            const container = document.querySelectorAll(".container");
            container.forEach(elem => {
                document.body.removeChild(elem);
            });
        })

        console.log(produtoId);
    }
}

export { Data }