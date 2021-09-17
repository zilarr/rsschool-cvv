const burger = document.querySelector('.burger'); 
const menu = document.querySelector('.nav_list');

burger.addEventListener('click', openMenu);

function openMenu() {
    burger.classList.toggle('burger_active');
    menu.classList.toggle('active');
}

const noActive = document.querySelectorAll('.nav_item');

noActive.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
    burger.classList.remove('burger_active');
    menu.classList.remove('active');
}