const formulario = document.querySelector("form");

const Iusuario = document.querySelector(".usuario");
const Icpf = document.querySelector(".cpf");
const Iemail = document.querySelector(".email");
const Itel = document.querySelector(".tel");

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

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

  cadastrar();
  limpar();
});