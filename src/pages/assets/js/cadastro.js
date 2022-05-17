const body = document.querySelector('body')

const formulario = document.querySelector('form')
const botao = document.getElementById('btnCadastro')

function PegaValor() {
    
    console.log(formulario[0])
    console.log(formulario[1])
    console.log(formulario[2])
    return {
        "name":formulario[0].value,
        "email":formulario[1].value,
        "password":formulario[2].value
    }
}

botao.addEventListener("click", (event) => {
    event.preventDefault()
    
})


