function changeThema(){
    const checkbox = document.getElementById('chk');

    checkbox.addEventListener('change', ({target}) => {
        target.checked ? chageThemaToLight() : changeThemaToDark()
    })

    const changeThemaToDark = () =>{
        document.documentElement.setAttribute("data-thema", "dark");
    }

    const chageThemaToLight = () =>{
        document.documentElement.setAttribute("data-thema", "light");
    }
}

function mobileMenu(){
    const mobileMenu = document.getElementById("mobile-menu");
    const menuList = document.getElementById("menu");
    const menuLinks = document.querySelectorAll(".menu li")
    const activeClass = "active";

    if(mobileMenu){
        addClickEvente();
    }else{
        return 0;
    }

    function handleClick(){
        menuList.classList.toggle(activeClass);
        mobileMenu.classList.toggle(activeClass);
        animateLinks();
    }

    function animateLinks(){
        menuLinks.forEach((link, index) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `menuLinkFade 0.5s ease forwards  ${index/7 + 0.3}s`);  
        });
    }

    function addClickEvente(){

        mobileMenu.addEventListener("click", handleClick());
    }
    
}



