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

  //  autoplay: {
  //   // delay: 3000,
  // },
});

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});