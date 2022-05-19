import { Api } from "../controller/Api.js";
const token = JSON.parse(localStorage.getItem("token"));

const Data = class {
  static novoProduto() {
    const form = document.querySelector("form");
    const botaoSalvar = form.children[10].children[0];
    const categorias = [...form.children[5].children];

    const valores = {};

    categorias.forEach(elem => {
      elem.addEventListener("click", event => {
        categorias.forEach(e => {
          e.classList.remove("botao--focado");
        });
        event.target.classList.add("botao--focado");
      });
    });

    botaoSalvar.addEventListener("click", async e => {
      e.preventDefault();

      [...form.children].forEach(elem => {
        if (elem.name !== undefined) {
          valores[elem.name] = elem.value;
        }
      });

      categorias.forEach(elem => {
        if (elem.classList[1] === "botao--focado") {
          valores.categoria = elem.dataset.tag;
        }
      });

      const a = await Api.criarProduto(valores, token);
      const modalParagrafo = document.getElementById("modal__paragrafo");
      const modal = document.getElementById("modal");
      console.log(a);
      if (!a.nome) {
        modal.classList.add("modal");
        modalParagrafo.innerText = "oi";
      }
    });
  }
};

export { Data };
