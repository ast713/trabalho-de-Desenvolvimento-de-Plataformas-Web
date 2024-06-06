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

function Entrar() {
    let usuario = document.querySelector('#usuario');
    let userLabel = document.querySelector('#userLabel');

    let senha = document.querySelector('#senha');
    let senhaLabel = document.querySelector('#senhaLabel');

    let msgErro = document.querySelector('#msgErro');

    let listaUser = JSON.parse(localStorage.getItem('listaUser')) || [];

    let userValid = listaUser.find(item => usuario.value === item.userCad && senha.value === item.senhaCad);

    if (userValid) {
        let token = Math.random().toString(36).substring(2);
        localStorage.setItem('token', token);
        localStorage.setItem('userLogado', JSON.stringify(userValid));
        window.location.href = 'InitialPage.html';
    } else {
        userLabel.setAttribute('style', 'color: red');
        usuario.setAttribute('style', 'border-color: red');
        senhaLabel.setAttribute('style', 'color: red');
        senha.setAttribute('style', 'border-color: red');
        msgErro.setAttribute('style', 'display: block');
        msgErro.innerHTML = '<p>Usuário ou senha inválidos</p>';
        usuario.focus();
    }
}
