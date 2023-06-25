const copyOfProducts = [...products];
let cart = [];

// funcion que  crea las cards de las hamburguesas
const createCardBurguer = (product) => {
	const { id, name, image, price, group, ingredients } = product;
  if(product.category == 'burger'){
    return `
    <div class="card d-flex justify-content-between" style="width: 16rem">
        <div class="img-container d-block">
          <img src=${image} class="img-fluid w-100 h-100 " alt=${name}>
        </div>
      <div class="card-body d-flex flex-column justify-content-between">
        <h5 class="card-title text-center">${name}</h5>
        <p class="lh-1 card-text text-center w-100">${ingredients.join(", ")}</p>
        <p class="text-center mb-2"> $: ${price} </p>
        <button href="#" class="btn btn-primary align-self-center pt-2 pb-2 ps-4 pe-4" data-id=${id}>Agregar</button>
      </div>
    </div>`;
  }
};

// Funcion que crea las card de las bebidas
const createBeerCard = (product) => {
	const { id, name, image, price, group, ingredients } = product;
  if(product.category == 'beer'){ 
return`<div class="card d-flex justify-content-between" style="width: 16rem">
          <div class="img-container d-block">
            <img src=${image} class="img-fluid w-100 h-100 " alt=${name}>
          </div>
        <div class="card-body d-flex flex-column justify-content-between">
          <h5 class="card-title text-center">${name}</h5>
          <p class="lh-1 card-text text-center w-100" mb-2>$: ${price}</p>
          <button href="#" class="btn btn-primary align-self-center pt-2 pb-2 ps-4 pe-4" data-id=${id}>Agregar</button>
        </div>
      </div>`;
}}
// Funcion que sirve para renderizar
// Category sirve para separar dentro del objeto la categoria
const renderCard = (container, arr, category) => {
	return (container.innerHTML += arr.map(category).join(""));
};

const addProductCart = (e) => {
  // Almaceno el id en la variable
  let productId = e.target.dataset.id
  // Si no existe el id que retorne
  if(!productId) return;

}