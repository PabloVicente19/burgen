// funcion que  crea las cards de las hamburguesas
const createCardBurguer = (product) => {
	const { id, name, image, price, group } = product;
	return `
  <div class="card " style="width: 17rem;">
      <img src=${image} class="card-img-top img-fluid" alt="...">
    <div class="card-body">
      <h5 class="card-title text-center">${name}</h5>
      <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary ">Go somewhere</a>
    </div>
  </div>`;
};

const renderCard = (container) => {
	return (container.innerHTML = products.map(createCardBurguer).join(""));
};
