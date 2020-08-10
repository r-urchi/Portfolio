let botonMenu = document.querySelector('.menu-btn');
let navMenu = document.querySelector('.nav__menu');

botonMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
