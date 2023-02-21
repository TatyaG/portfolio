let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.nav__list')

burger.addEventListener('click', function () {
  menu.classList.toggle('header__nav--active');
  burger.classList.toggle('burger--active');

})

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    menu.classList.remove('header__nav--active');
    burger.classList.remove('burger--active');
  })
})

