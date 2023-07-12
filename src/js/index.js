const $menuIcon = document.querySelector(".menu-bars");
const $menuList = document.querySelector(".navbar-list");
const $mainContainer = document.querySelector(".main-container");
// Contenedor de las hamburguesas
const $menuBurger = document.querySelector(".menu-burgers-container");
// Contenedor de las bebidas
const $menuBeer = document.querySelector(".menu-beer-container");
// Conenedor de los productos seleccionados dentro del carrito
const $cartProducts = document.querySelector(".modal-body");

$menuIcon.addEventListener("click", () => {
	$menuList.classList.toggle("show");
});
// Renderizo las cad de las hamburguesas
renderCard($menuBurger, products, createCardBurguer);
// Renderizo las cards de las cervezas
renderCard($menuBeer, products, createBeerCard);

$mainContainer.addEventListener("click", addProductCart);
