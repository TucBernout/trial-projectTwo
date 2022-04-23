const iconMenu = document.querySelector('.header-burger')
const menuList = document.querySelector('.nav-list')
if(iconMenu){
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('-lock');
        iconMenu.classList.toggle('-active');
        menuList.classList.toggle('-active');
    });
}
const navLinks = document.querySelectorAll('.list-link')
navLinks.forEach((el) => el.addEventListener('click', closeMenu))
function closeMenu(){
    document.body.classList.remove('-lock');
    iconMenu.classList.remove('-active');
    menuList.classList.remove('-active');
}
