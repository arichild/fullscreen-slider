const burgerBtn = document.querySelector('.header-burger');
const closeBurgerBtn = document.querySelector('.header-close');
const burgerMenu = document.querySelector('.header-menu');

if(burgerMenu) {
  burgerBtn.addEventListener('click', openBurger);
  closeBurgerBtn.addEventListener('click', closeBurger);
}


function openBurger() {
  burgerMenu.classList.add('active');
}

function closeBurger() {
  burgerMenu.classList.remove('active')
}