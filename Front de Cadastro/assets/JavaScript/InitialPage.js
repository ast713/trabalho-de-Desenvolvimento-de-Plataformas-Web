
openMenu.addEventListener('click', () =>{
    menuHeader.style.display = 'flex'

    setTimeout(() =>{
        menuHeader.style.opacity = '1'
    }, 10);
});

closeMenu.addEventListener('click', () =>{
    menuHeader.style.opacity = '0'

    setTimeout(() =>{
        menuHeader.removeAttribute('style')
        
    }, 200);
});

closeMenu.addEventListener('click', () =>{
    menuHeader.style.opacity = '0'

    setTimeout(() =>{
        menuHeader.removeAttribute('style')
        
    }, 200);
});


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

