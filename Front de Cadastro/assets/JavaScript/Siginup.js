


const formulario = document.querySelector("form");

const Iusuario = document.querySelector(".usuario");
const Icpf = document.querySelector(".cpf");
const Iemail = document.querySelector(".email");
const Itel = document.querySelector(".tel");



//função para vizualização da senha com icone do olho

let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }

})

let btnConf = document.querySelector('.conf')

btnConf.addEventListener('click', ()=>{
    let inputSenhaConf = document.querySelector('#senhaConf')

    if (inputSenhaConf.getAttribute('type') == 'password'){
        inputSenhaConf.setAttribute('type', 'text')
    }else{
        inputSenhaConf.setAttribute('type', 'password')
    }

})




function cadastrar () {

        fetch("http://localhost:8080/cadastrar", 
        {
            Headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },
            method: "POST",
            body: JSON.stringify({   
                nome: Inome.value,
                cpf: Icpf.value,
                email: Iemail.value,
                tel: Itel.value
            })

        })
        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) })
}


function limpar () {

    Iusuario.value = "";
    Icpf.value = "";
    Iemail.value = "";
    Itel.value = "";


;}
