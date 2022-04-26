import i18Obj from './translate.js';

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

const portfolioBtns = document.querySelector('.portfolio-button')
const portfolioImge = document.querySelectorAll('.portfolio-image');
function changeImage(e){
    let season = e.target.dataset.season
    if(e.target.classList.contains('portfolio-but')){
        portfolioImge.forEach((img, index) => img.src = `img/jpg/${season}/${index +1}.jpg`);
    }
}
portfolioBtns.addEventListener('click', changeImage)

const langueRu = document.querySelector('.ru')
const langueEn = document.querySelector('.en')
function getTranslate(langue){
    const tran = document.querySelectorAll('[data-i18n]');
    tran.forEach((item) => item.textContent = i18Obj[langue][item.dataset.i18n])
};
langueRu.addEventListener('click', () => getTranslate('ru'));
langueEn.addEventListener('click', () => getTranslate('en'));

const changeTheme = document.querySelector('.header-theme')
const iconSun = document.querySelector('.icon-sun')
const iconDark = document.querySelector('.icon-dark')
changeTheme.addEventListener('click', () =>{
    changeTheme.classList.toggle('light')
    iconSun.classList.toggle('light')
    iconDark.classList.toggle('light')
});
const changeEl = ['.skills-container','.item-text'];
function chengeLightTheme() {
    changeEl.forEach( el => {
        document.querySelector(el).classList.toggle('light')
    });
}
changeTheme.addEventListener('click', chengeLightTheme)