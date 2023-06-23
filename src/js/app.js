// funcion que  crea las cards de las hamburguesas
const createCardBurguer = (product) => {
	const { id, name, image, price, group, ingredients } = product;
	return `
  <div class="card d-flex justify-content-between" style="width: 16rem">
      <div class="img-container d-block">
        <img src=${image} class="img-fluid w-100 h-100 " alt=${name}>
      </div>
    <div class="card-body d-flex flex-column justify-content-between">
      <h5 class="card-title text-center">${name}</h5>
      <p class="lh-1 card-text text-center w-100">${ingredients}</p>
      <button href="#" class="btn btn-primary align-self-center pt-2 pb-2 ps-4 pe-4">Agregar</button>
    </div>
  </div>`;
};

const renderCard = (container) => {
	return (container.innerHTML = products.map(createCardBurguer).join(""));
};
