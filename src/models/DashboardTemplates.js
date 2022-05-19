const Templates = class {
  static listarMeusProdutos(array) {
    const lista = document.querySelector(".corpo__tabela");
    lista.innerHTML = "";
    array.forEach(produto => {
      const item = document.createElement("li");
      const caixa1 = document.createElement("div");
      const imagemProduto = document.createElement("img");
      const nomeProduto = document.createElement("p");

      const caixa2 = document.createElement("div");
      const categoriaProduto = document.createElement("span");

      const caixa3 = document.createElement("div");
      const descricaoProduto = document.createElement("p");

      const caixa4 = document.createElement("div");
      const botaoEditar = document.createElement("button");
      const botaoRemover = document.createElement("button");

      item.id = produto.id;
      item.classList.add("corpo__tabela--linha");
      caixa1.classList.add("box", "produto__nome");
      nomeProduto.classList.add("corpo__tabela--nome");

      caixa2.classList.add("box");
      categoriaProduto.classList.add("corpo__tabela--categoria");

      caixa3.classList.add("box");
      descricaoProduto.classList.add("corpo__tabela--descricao");

      caixa4.classList.add("box");
      botaoEditar.classList.add("corpo__tabela--botao");
      botaoRemover.classList.add("corpo__tabela--botao");

      botaoEditar.id = "btnEditar";
      botaoRemover.id = "btnRemover";

      imagemProduto.src = produto.imagem;
      imagemProduto.alt = produto.nome;
      nomeProduto.innerText = produto.nome;

      categoriaProduto.innerText = produto.categoria;

      descricaoProduto.innerText = produto.descricao;

      botaoEditar.innerText = "Editar";
      botaoRemover.innerText = "Remover";

      caixa1.append(imagemProduto, nomeProduto);
      caixa2.appendChild(categoriaProduto);
      caixa3.appendChild(descricaoProduto);
      caixa4.append(botaoEditar, botaoRemover);
      item.append(caixa1, caixa2, caixa3, caixa4);
      lista.appendChild(item);
    });
    return lista;
  }

  static form(obj, excluir = false) {
    const container = document.createElement("div");
    const subContainer = document.createElement("div");
    const form = document.createElement("form");
    const boxTitulo = document.createElement("div");
    const titulo = document.createElement("h2");
    const botaoFechar = document.createElement("button");
    const nomeProdutoLabel = document.createElement("label");
    const nomeProdutoInput = document.createElement("input");
    const descricaoLabel = document.createElement("label");
    const descricaoTextarea = document.createElement("textarea");

    const boxCategoria = document.createElement("div");
    const categoriaLabel = document.createElement("label");
    const panificadora = document.createElement("span");
    const frutas = document.createElement("span");
    const bebidas = document.createElement("span");

    const valorProdutoLabel = document.createElement("label");
    const valorProdutoInput = document.createElement("input");
    const linkImagemLabel = document.createElement("label");
    const linkImagemInput = document.createElement("input");

    const boxBotoes = document.createElement("div");
    const botaoConcluir = document.createElement("button");

    if (excluir) {
      const botaoExcluir = document.createElement("button");
      botaoExcluir.id = "btnExcluir";
      botaoExcluir.classList.add("filtro__botao");
      botaoExcluir.innerText = obj.deletar;
      boxBotoes.appendChild(botaoExcluir);
    }

    titulo.innerText = obj.titulo;
    botaoFechar.id = "btnFechar";
    botaoConcluir.id = "btnSalvar";
    botaoFechar.innerText = "x";
    botaoConcluir.innerText = obj.concluir;

    nomeProdutoLabel.innerText = "Nome do Produto";
    descricaoLabel.innerText = "Descrição";
    valorProdutoLabel.innerText = "Valor do Produto";
    linkImagemLabel.innerText = "Link da imagem";

    categoriaLabel.innerText = "Categorias";
    panificadora.innerText = "Panificadora";
    frutas.innerText = "Frutas";
    bebidas.innerText = "Bebidas";

    panificadora.dataset.tag = "panificadora";
    frutas.dataset.tag = "frutas";
    bebidas.dataset.tag = "bebidas";

    nomeProdutoInput.type = "text";
    valorProdutoInput.type = "number";
    linkImagemInput.type = "text";

    nomeProdutoInput.name = "nome";
    boxCategoria.name = "categoria";
    descricaoTextarea.name = "descricao";
    valorProdutoInput.name = "preco";
    linkImagemInput.name = "imagem";

    nomeProdutoInput.placeholder = "Digitar o nome";
    descricaoTextarea.placeholder = "Digitar a descrição";
    valorProdutoInput.placeholder = "Digitar o valor aqui";
    linkImagemInput.placeholder = "Inserir link ";

    container.classList.add("container");
    subContainer.classList.add("container__box");
    boxTitulo.classList.add("box--flex", "cabeca");
    titulo.classList.add("titulo");
    botaoFechar.classList.add("botao__fechar");
    descricaoTextarea.classList.add("textarea");
    boxCategoria.classList.add("box--flex", "box--categorias");
    panificadora.classList.add("filtro__botao");
    frutas.classList.add("filtro__botao");
    bebidas.classList.add("filtro__botao");
    boxBotoes.classList.add("box--flex");
    botaoConcluir.classList.add("filtro__botao", "botao--focado");

    boxBotoes.appendChild(botaoConcluir);
    boxCategoria.append(panificadora, frutas, bebidas);
    form.append(
      nomeProdutoLabel,
      nomeProdutoInput,
      descricaoLabel,
      descricaoTextarea,
      categoriaLabel,
      boxCategoria,
      valorProdutoLabel,
      valorProdutoInput,
      linkImagemLabel,
      linkImagemInput,
      boxBotoes
    );
    boxTitulo.append(titulo, botaoFechar);
    subContainer.append(boxTitulo, form);
    container.appendChild(subContainer);

    return container;
  }

  static adicionarProduto() {
    const body = document.querySelector("body");

    const infos = {
      titulo: "Cadastro de produto",
      concluir: "Cadastro de produto"
    };
    const formulario = this.form(infos);
    body.appendChild(formulario);
  }

  static atualizarProduto() {
    const body = document.querySelector("body");

    const infos = {
      titulo: "Edição de produto",
      concluir: "Salvar alterações",
      deletar: "Excluir"
    };
    const formulario = this.form(infos, true);
    body.appendChild(formulario);
  }

  static removerProduto() {
    const body = document.querySelector("body");
    const container = document.createElement("div");
    const subContainer = document.createElement("div");
    const boxTitulo = document.createElement("div");
    const titulo = document.createElement("h2");
    const botaoFechar = document.createElement("button");
    const texto = document.createElement("p");
    const boxBotoes = document.createElement("div");
    const botaoSim = document.createElement("button");
    const botaoNao = document.createElement("button");

    container.classList.add("container");
    subContainer.classList.add("container__box");
    boxTitulo.classList.add("box--flex", "cabeca");
    titulo.classList.add("titulo");
    botaoFechar.classList.add("botao__fechar");
    texto.classList.add("texto__confirmacao");
    boxBotoes.classList.add("box--flex");
    botaoSim.classList.add("filtro__botao");
    botaoNao.classList.add("filtro__botao");

    botaoFechar.id = "btnFechar";
    botaoSim.id = "btnSim";
    botaoNao.id = "btnNao";

    titulo.innerText = "Exclusão de produto";
    texto.innerText = "Tem certeza que deseja exluir este produto?";
    botaoFechar.innerText = "x";
    botaoSim.innerText = "Sim";
    botaoNao.innerText = "Não";

    boxBotoes.append(botaoSim, botaoNao);
    boxTitulo.append(titulo, botaoFechar);
    subContainer.append(boxTitulo, texto, boxBotoes);
    container.appendChild(subContainer);
    body.appendChild(container);
  }

  static modalStatus() {}

  static perfilUsuario() {
    const caixa = document.createElement("div");
    const pontaBalao = document.createElement("div");
    const titulo = document.createElement("h2");
    const botaoLogout = document.createElement("button");

    caixa.classList.add("menu__usuario");
    pontaBalao.classList.add("menu__usuario--pontaBalao");
    titulo.classList.add("menu__usuario--titulo");
    botaoLogout.classList.add("menu__usuario--botao");

    titulo.innerText = "Time A";
    botaoLogout.innerText = "Logout";
    botaoLogout.id = "btnLogout";

    caixa.append(pontaBalao, titulo, botaoLogout);
    return caixa;
  }
};
export { Templates };
