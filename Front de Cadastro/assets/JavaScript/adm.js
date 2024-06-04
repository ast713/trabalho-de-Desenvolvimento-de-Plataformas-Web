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

document.addEventListener('DOMContentLoaded', () => {
    let users = JSON.parse(localStorage.getItem('listaUser')) || [];

    const userTable = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    const editModal = document.getElementById('editModal');
    const closeModal = document.getElementsByClassName('close')[0];
    const editForm = document.getElementById('editForm');
    const editUserId = document.getElementById('editUserId');
    const editUserName = document.getElementById('editUserName');
    const editUserEmail = document.getElementById('editUserEmail');
    const editUserPassword = document.getElementById('editUserPassword');

    const loadUsers = () => {
        userTable.innerHTML = '';
        users.forEach((user, index) => {
            const row = userTable.insertRow();
            row.insertCell(0).textContent = index + 1;
            row.insertCell(1).textContent = user.nomeCad;
            row.insertCell(2).textContent = user.emailCad;
            const actionsCell = row.insertCell(3);
            const editButton = document.createElement('button');
            editButton.textContent = 'Editar';
            editButton.addEventListener('click', () => openEditModal(user, index));
            actionsCell.appendChild(editButton);
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Excluir';
            deleteButton.addEventListener('click', () => deleteUser(index));
            actionsCell.appendChild(deleteButton);
        });
    };

    const openEditModal = (user, index) => {
        editUserId.value = index;
        editUserName.value = user.nomeCad;
        editUserEmail.value = user.emailCad;
        editUserPassword.value = user.senhaCad;
        editModal.style.display = 'block';
    };

    closeModal.onclick = () => {
        editModal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target == editModal) {
            editModal.style.display = 'none';
        }
    };

    editForm.onsubmit = (event) => {
        event.preventDefault();
        const index = parseInt(editUserId.value);
        const name = editUserName.value;
        const email = editUserEmail.value;
        const password = editUserPassword.value;
        users[index].nomeCad = name;
        users[index].emailCad = email;
        users[index].senhaCad = password;
        localStorage.setItem('listaUser', JSON.stringify(users));
        editModal.style.display = 'none';
        loadUsers();
    };

    const deleteUser = (index) => {
        users.splice(index, 1);
        localStorage.setItem('listaUser', JSON.stringify(users));
        loadUsers();
    };

    loadUsers();
});
