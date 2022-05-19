class Api {
  static baseUrl = "https://api-kenzie-food.herokuapp.com/";

  static async registrarUsuario(dados) {
    const resposta = await fetch(`${this.baseUrl}auth/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(dados)
    });
    if (resposta.status == 201) {
      const modalDiv = document.getElementById("modalDiv");
      modalDiv.classList.add("modal__div");
      const modalTexto = document.querySelector(".modal__texto");

      modalTexto.innerText = "Cadastro efetuado com sucesso!";
      setTimeout(() => {
        window.location = "../../src/pages/login.html";
      }, 3000);
    } else {
      const modalDiv = document.getElementById("modalDiv");
      modalDiv.classList.add("modal__div");
      const modalTexto = document.querySelector(".modal__texto");

      modalDiv.style.background = "red";
      modalTexto.innerText = "Informações Inválidas!";
      setTimeout(() => {
        location.reload();
      }, 3000);
    }
    const infos = await resposta.json();
    return infos;
  }

  static async loginUsuario(dados) {
    const resposta = await fetch(`${this.baseUrl}auth/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(dados)
    });
    if (resposta.status == 200) {
      const modalDiv = document.getElementById("modalDiv");
      modalDiv.classList.add("modal__div");
      const modalTexto = document.querySelector(".modal__texto");

      localStorage.setItem("token", resposta);

      modalTexto.innerText = "Login efetuado com sucesso!";
      setTimeout(() => {
        window.location = "../../src/pages/dashboard.html";
      }, 3000);
    } else {
      const modalDiv = document.getElementById("modalDiv");
      modalDiv.classList.add("modal__div");
      const modalTexto = document.querySelector(".modal__texto");

      modalDiv.style.background = "red";
      modalTexto.innerText = "Informações Inválidas!";
      setTimeout(() => {
        location.reload();
      }, 3000);
    }
    const infos = await resposta.json();
    localStorage.setItem("token", JSON.stringify(infos));
    return infos;
  }

  static async produtos() {
    const resposta = await fetch(`${this.baseUrl}products`);
    const info = await resposta.json();
    return info;
  }

  static async produtosCriados(token) {
    const resposta = await fetch(`${this.baseUrl}my/products`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const infos = await resposta.json();
    return infos;
  }

  static async criarProduto(dados, token) {
    const resposta = await fetch(`${this.baseUrl}my/products`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(dados)
    });
    const infos = await resposta.json();
    return infos;
  }

<<<<<<< HEAD
  // static async editarProduto(dados, token,id){
  //   const resposta = await fetch(`${this.baseUrl}`)
  // }
=======
  static async atualizarProduto(dados, id, token) {
    const resposta = await fetch(`${this.baseUrl}my/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(dados)
    });
    const infos = await resposta.json();
    return infos;
  }

  static async removerProduto(id, token) {
    await fetch(`${this.baseUrl}my/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`
      },
    });
  }
>>>>>>> f0fa0f80d78f24040535da6fd77e059bbb2167ab
}

export { Api };
