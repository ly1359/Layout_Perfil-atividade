//pega o checkbox
const chk = document.getElementById('chk');

//verifica se tem no localStorage seleção do light thema
if(localStorage.getItem('data-thema') == 'light'){
    chk.checked = true;
}

//liga a função
chk.addEventListener('change', () => {
    let thema = localStorage.getItem('data-thema');
    console.log(chk)
    if(thema.valueOf == 'light'){
        changeThemaToDark();
    }else{
        chageThemaToLight();
    }
})


