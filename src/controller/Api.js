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
    const infos = await resposta.json();
    console.log(infos);
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
    const infos = await resposta.json();
    console.log(infos);
    return infos;
  }

  static async produtos() {
    const resposta = await fetch(`${this.baseUrl}products`);
    const info = await resposta.json();
    console.log(info);
    return info;
  }

  static async produtosCriados(token) {
    const resposta = await fetch(`${this.baseUrl}my/products`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const infos = await resposta.json();
    console.log(infos);
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
    console.log(infos);
    return infos;
  }
}

export { Api };