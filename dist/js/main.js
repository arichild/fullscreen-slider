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
const swiper = new Swiper('.welcome', {

  pagination: {
    el: ".swiper-pagination",
    type: 'bullets',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});