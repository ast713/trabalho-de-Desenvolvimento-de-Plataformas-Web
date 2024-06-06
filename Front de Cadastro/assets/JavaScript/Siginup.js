function togglePasswordVisibility(passwordFieldId) {
    let passwordField = document.getElementById(passwordFieldId);
    let passwordIcon = document.getElementById(passwordFieldId + 'Icon');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        passwordIcon.src = '../assets/img/Icons/Show.png';
    } else {
        passwordField.type = 'password';
        passwordIcon.src = '../assets/img/Icons/Secret.png';
    }
}

function Cadastrar() {
    let nome = document.querySelector('#nome');
    let nomeLabel = document.querySelector('#nomeLabel');

    let email = document.querySelector('#email');
    let emailLabel = document.querySelector('#emailLabel');

    let usuario = document.querySelector('#usuario');
    let usuarioLabel = document.querySelector('#usuarioLabel');

    let senha = document.querySelector('#senha');
    let senhaLabel = document.querySelector('#senhaLabel');

    let msgErro = document.querySelector('#msgErro');

    let listaUser = JSON.parse(localStorage.getItem('listaUser')) || [];

    let userValid = listaUser.find(item => usuario.value === item.userCad);

    if (!userValid) {
        listaUser.push({
            nomeCad: nome.value,
            emailCad: email.value,
            userCad: usuario.value,
            senhaCad: senha.value
        });

        localStorage.setItem('listaUser', JSON.stringify(listaUser));

        window.location.href = '../HTML/Login.html';
    } else {
        usuarioLabel.setAttribute('style', 'color: red');
        usuario.setAttribute('style', 'border-color: red');
        msgErro.setAttribute('style', 'display: block');
        msgErro.innerHTML = '<p>Usuário já cadastrado</p>';
        usuario.focus();
    }
}
