// Renderizar los productos en el DOM
export function renderProducts(products, container) {
  container.innerHTML = "";
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
          <img src="${product.image}" alt="${product.title}" />
          <h2>${product.title}</h2>
          <p>${product.description}</p>
          <div class="price">$${product.price}</div>
          <button data-product-id="${product.id}">Añadir al carrito</button>
      `;
    container.appendChild(productCard);
  });
}

// Filtrar productos según la búsqueda
export function filterProducts(products, query) {
  return products.filter(
    (product) =>
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
  );
}
