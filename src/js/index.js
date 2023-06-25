const $menuIcon = document.querySelector(".menu-bars");
const $menuList = document.querySelector(".navbar-list");
const $mainContainer = document.querySelector('.main-container')
const $menuBurger = document.querySelector(".menu-burgers-container");
const $menuBeer = document.querySelector('.menu-beer-container');


$menuIcon.addEventListener("click", () => {
	$menuList.classList.toggle("show");
});
// Renderizo las cad de las hamburguesas
renderCard($menuBurger,copyOfProducts,createCardBurguer);
// Renderizo las cards de las cervezas
renderCard($menuBeer,copyOfProducts,createBeerCard);

$mainContainer.addEventListener('click',addProductCart)
