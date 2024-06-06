document.addEventListener('DOMContentLoaded', () => {
    let users = JSON.parse(localStorage.getItem('listaUser')) || [];

    const userTable = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    const editModal = document.getElementById('editModal');
    const createUserModal = document.getElementById('createUserModal');
    const closeModal = document.getElementsByClassName('close')[0];
    const editForm = document.getElementById('editForm');
    const createUserForm = document.getElementById('createUserForm');
    const editUserId = document.getElementById('editUserId');
    const editUserName = document.getElementById('editUserName');
    const editUserEmail = document.getElementById('editUserEmail');
    const editUserPassword = document.getElementById('editUserPassword');
    const editUserAdmin = document.getElementById('editUserAdmin');
    const createUserName = document.getElementById('createUserName');
    const createUserEmail = document.getElementById('createUserEmail');
    const createUserPassword = document.getElementById('createUserPassword');
    const createUserAdmin = document.getElementById('createUserAdmin');

    const loadUsers = () => {
        userTable.innerHTML = '';
        users.forEach((user, index) => {
            const row = userTable.insertRow();
            row.insertCell(0).textContent = index + 1;
            row.insertCell(1).textContent = user.nomeCad;
            row.insertCell(2).textContent = user.emailCad;
            row.insertCell(3).textContent = user.isAdmin ? 'Sim' : 'Não';
            const actionsCell = row.insertCell(4);
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
        editUserAdmin.checked = user.isAdmin;
        editModal.style.display = 'block';
    };

    window.showCreateUserModal = () => {
        createUserModal.style.display = 'block';
    };

    window.closeEditModal = () => {
        editModal.style.display = 'none';
    };

    window.closeCreateUserModal = () => {
        createUserModal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target == editModal) {
            editModal.style.display = 'none';
        }
        if (event.target == createUserModal) {
            createUserModal.style.display = 'none';
        }
    };

    editForm.onsubmit = (event) => {
        event.preventDefault();
        const index = parseInt(editUserId.value);
        const name = editUserName.value;
        const email = editUserEmail.value;
        const password = editUserPassword.value;
        const isAdmin = editUserAdmin.checked;
        users[index].nomeCad = name;
        users[index].emailCad = email;
        users[index].senhaCad = password;
        users[index].isAdmin = isAdmin;
        localStorage.setItem('listaUser', JSON.stringify(users));
        editModal.style.display = 'none';
        loadUsers();
    };

    createUserForm.onsubmit = (event) => {
        event.preventDefault();
        const name = createUserName.value;
        const email = createUserEmail.value;
        const password = createUserPassword.value;
        const isAdmin = createUserAdmin.checked;
        users.push({
            nomeCad: name,
            emailCad: email,
            userCad: email,
            senhaCad: password,
            isAdmin: isAdmin
        });
        localStorage.setItem('listaUser', JSON.stringify(users));
        createUserModal.style.display = 'none';
        loadUsers();
    };

    const deleteUser = (index) => {
        users.splice(index, 1);
        localStorage.setItem('listaUser', JSON.stringify(users));
        loadUsers();
    };

    loadUsers();
});
