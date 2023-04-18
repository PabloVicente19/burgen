const $menuIcon = document.querySelector('.menu-bars');
const $menuList = document.querySelector('.navbar-list');

$menuIcon.addEventListener('click', () =>{
  $menuList.classList.toggle('show')
})