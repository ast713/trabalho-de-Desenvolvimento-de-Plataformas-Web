let btn = document.querySelector('.fa-eye')
let btnConf = document.querySelector('.conf')

let msgErro = document.querySelector('.msgErro')
let msgSucesso = document.querySelector('#msgSucesso')

let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');
let validNome = false

let usuario = document.querySelector('#usuario');
let userLabel = document.querySelector('#userLabel');
let validUsuario = false


let email = document.querySelector('#email');
let emailLabel = document.querySelector('#emailLabel');
let validEmail = false


let senha = document.querySelector('#senha');
let senhaLabel = document.querySelector('#senhaLabel');
let validSenha = false


let senhaConf = document.querySelector('#senhaConf');
let senhaLabelConf = document.querySelector('#senhaLabelConf');
let validSenhaConf = false

//função para validação dos campos de inputs

nome.addEventListener('keyup', () => {
    if(nome.value.length < 4){
        labelNome.setAttribute('style', 'color: red')
        nome.setAttribute('style', 'border-color: red')
        labelNome.innerHTML = '<strong>Nome *Minimo 4 caracteres</strong>'
        validNome = false
    }else{
        labelNome.setAttribute('style', 'color: green')
        nome.setAttribute('style', 'border-color: green')
        labelNome.innerHTML = '<strong>Nome</strong>'
        validNome = true
    }
})

usuario.addEventListener('keyup', () => {
    if(usuario.value.length < 3){
        userLabel.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        userLabel.innerHTML = '<strong>Usuario *Minimo 4 caracteres</strong>'
        validUsuario = false
    }else{
        userLabel.setAttribute('style', 'color: green')
        usuario.setAttribute('style', 'border-color: green')
        userLabel.innerHTML = '<strong>Usuario</strong>'
        validUsuario = true
    }
})

email.addEventListener('keyup', () => {
    if(email.value.length < 8){
        emailLabel.setAttribute('style', 'color: red')
        email.setAttribute('style', 'border-color: red')
        emailLabel.innerHTML = '<strong>E-mail *Insira um e-mail valido</strong>'
        validEmail = false
    }else{
        emailLabel.setAttribute('style', 'color: green')
        email.setAttribute('style', 'border-color: green')
        emailLabel.innerHTML = '<strong>E-mail</strong>'
        validEmail = true
    }
})

senha.addEventListener('keyup', () => {
    if(senha.value.length < 8){
        senhaLabel.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        senhaLabel.innerHTML = '<strong>Senha *Minimo 8 caracteres</strong>'
        validSenha = false
    }else{
        senhaLabel.setAttribute('style', 'color: green')
        senha.setAttribute('style', 'border-color: green')
        senhaLabel.innerHTML = '<strong>Senha</strong>'
        validSenha = true
    }
})

senhaConf.addEventListener('keyup', () => {
    if(senhaConf.value != senha.value){
        senhaLabelConf.setAttribute('style', 'color: red')
        senhaConf.setAttribute('style', 'border-color: red')
        senhaLabelConf.innerHTML = '<strong>Confirme sua senha *As senhas não conferem</strong>'
        validSenhaConf = false
    }else{
        senhaLabelConf.setAttribute('style', 'color: green')
        senhaConf.setAttribute('style', 'border-color: green')
        senhaLabelConf.innerHTML = '<strong>Confirme sua senha</strong>'
        validSenhaConf = true
    }
})

function Cadastrar (){
    if(validNome && validUsuario && validEmail && validSenha && validSenhaConf){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    listaUser.push(
        {
            nomeCad: nome.value,
            userCad: usuario.value,
            emailCad: email.value,
            senhaCad: senha.value
        }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))


        msgSucesso.setAttribute('style', 'display: block')
        msgSucesso.innerHTML = '<p>Usuario cadastrado!</p>'
        msgErro.setAttribute('style', 'display: none')
        msgErro.innerHTML = ''

        setTimeout(() => {
            window.location.href = '../HTML/Login.html'
        }, 2000)
       
    }else{
        msgErro.setAttribute('style', 'display: block')
        msgErro.innerHTML = '<p>Formulario não preenchido</p>'
        msgSucesso.setAttribute('style', 'display: none')
        msgSucesso.innerHTML = ''
      
    }
}


//função para vizualização da senha com icone do olho


btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }

})


btnConf.addEventListener('click', ()=>{
    let inputSenhaConf = document.querySelector('#senhaConf')

    if (inputSenhaConf.getAttribute('type') == 'password'){
        inputSenhaConf.setAttribute('type', 'text')
    }else{
        inputSenhaConf.setAttribute('type', 'password')
    }

})

