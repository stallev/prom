'use strict';

(function () {
  var openMenuBtn = document.querySelector('.header__toggle-button--hamburger');
  var closeMenuBtn = document.querySelector('.header__toggle-button--cross');
  var nav = document.querySelector('.nav');
  
  openMenuBtn.addEventListener('click', onDisplayNav);
  closeMenuBtn.addEventListener('click', onCloseNav);
  
  function onDisplayNav() {
    nav.style.display = 'block';
    openMenuBtn.classList.add('header__toggle-button--cross');
    openMenuBtn.classList.remove('header__toggle-button--hamburger');
  }
  function onCloseNav() {
    nav.style.display = 'none';
    closeMenuBtn.classList.add('header__toggle-button--hamburger');
    closeMenuBtn.classList.remove('header__toggle-button--cross');
  }
})();
