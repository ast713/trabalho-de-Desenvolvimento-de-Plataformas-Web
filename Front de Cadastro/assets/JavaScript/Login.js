let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }

})

function Entrar (){
    let usuario = document.querySelector('#usuario')
    let userLabel = document.querySelector('#userLabel')

    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')

    let msgErro = document.querySelector('#msgErro')

    let listaUser = [];
    
    let userValid = {
        nome: '',
        usuario: '',
        email: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
        if(usuario.value == item.userCad && senha.value == item.senhaCad){
            userValid= {
                nome: item.nomeCad,
                usuario: item.userCad,
                email: item.emailCad,
                senha: item.senhaCad
            }
        }
    });

    if(usuario.value == userValid.usuario && senha.value == userValid.senha){
        window.location.href = '../HTML/InitialPage.html'
      
        
        let token = Math.random().toString(8).substring(2)
        localStorage.setItem('token', token)

        localStorage.setItem('userLogado', JSON.stringify(userValid))

    }else{
        userLabel.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        senhaLabel.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        msgErro.setAttribute('style', 'display: block')
        msgErro.innerHTML = '<p>Usuário ou senha invalido</p>'
        usuario.focus()
    }

}