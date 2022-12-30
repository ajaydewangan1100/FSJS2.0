let menuIcon = document.getElementsByClassName("menu-icon")[0];
let menuList = document.getElementsByClassName("header-menu-list")[0];

menuIcon.addEventListener('click', showMenu);

function showMenu() {
    menuList.classList.toggle('clickShow');
}