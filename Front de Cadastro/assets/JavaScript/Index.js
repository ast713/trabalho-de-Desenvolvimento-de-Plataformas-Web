document.addEventListener('click', () =>{
    setTimeout(() =>{
        window.location.href = '/Front de Cadastro/assets/HTML/Login.html'
        
    }, 200);
});


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


