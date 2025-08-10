// js/nav.js
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.hamburger');
  const menu = document.querySelector('.nav-menu1');
  if (burger && menu) burger.addEventListener('click', () => menu.classList.toggle('open'));
});
