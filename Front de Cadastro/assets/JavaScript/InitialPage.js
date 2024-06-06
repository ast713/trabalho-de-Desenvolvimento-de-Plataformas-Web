document.addEventListener('DOMContentLoaded', () => {
    // Função para mostrar o modal de login de administrador
    window.showAdminLogin = () => {
        document.getElementById('adminLoginModal').style.display = 'block';
    };

    // Função para fechar o modal de login de administrador
    window.closeAdminLogin = () => {
        document.getElementById('adminLoginModal').style.display = 'none';
    };

    // Função para validar o login de administrador
    window.adminLogin = () => {
        const adminUser = document.getElementById('adminUser').value;
        const adminPass = document.getElementById('adminPass').value;

        if (adminUser === 'admin' && adminPass === 'masterkey') {
            window.location.href = 'adm.html';
        } else {
            document.getElementById('adminLoginError').innerText = 'Usuário ou senha inválidos';
        }
    };
});
