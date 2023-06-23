const $menuIcon = document.querySelector(".menu-bars");
const $menuList = document.querySelector(".navbar-list");
const $menuBurger = document.querySelector(".menu-burgers-container");
$menuIcon.addEventListener("click", () => {
	$menuList.classList.toggle("show");
});
renderCard($menuBurger);
