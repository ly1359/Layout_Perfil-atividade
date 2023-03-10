function changeThema(){
    const checkbox = document.getElementById('chk');

    checkbox.addEventListener('change', ({target}) => {
        target.checked ? chageThemaToLight() : changeThemaToDark()
    })

    const changeThemaToDark = () =>{
        document.documentElement.setAttribute("data-thema", "dark");
        localStorage.setItem("data-thema", 'dark');
    }

    const chageThemaToLight = () =>{
        document.documentElement.setAttribute("data-thema", "light");
        localStorage.setItem("data-thema", 'light');
    }
}



