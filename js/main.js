'use strict';

(function () {
  var openMenuBtn = document.querySelector('.header__toggle-button--hamburger');
  var closeMenuBtn = document.querySelector('.header__toggle-button--cross');
  var nav = document.querySelector('.nav');
  
  openMenuBtn.addEventListener('click', onDisplayNav);
  closeMenuBtn.addEventListener('click', onCloseNav);
  
  function onDisplayNav() {
    nav.style.display = 'block';
    openMenuBtn.style.display = 'none';
    closeMenuBtn.style.display = 'block';
  }
  function onCloseNav() {
    nav.style.display = 'none';
    closeMenuBtn.style.display = 'none';
    openMenuBtn.style.display = 'block';
  }
})();
