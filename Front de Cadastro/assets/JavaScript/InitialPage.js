
let userLogado = JSON.parse(localStorage.getItem('userLogado')) 

let logado = document.querySelector('#logado')
logado.innerHTML = `${userLogado.nome}`

if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado')
    localStorage.removeItem('token')

    setTimeout(() => {
        window.location.href = '../HTML/Login.html'
    }, 1000)
}

function Sair(){
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')

    setTimeout(() => {
        window.location.href = '../HTML/Login.html'
    }, 1000)
}