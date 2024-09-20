// Importamos las funciones necesarias de los módulos
import { fetchProducts } from "./fetchProducts.js";
import { renderProducts, filterProducts } from "./renderProducts.js";
import { addToCart, renderCart } from "./cart.js";

// Elementos del DOM
const searchInput = document.getElementById("search");
const productGrid = document.querySelector(".product-grid");
const cartContainer = document.createElement("div");
cartContainer.id = "cart";
document.body.appendChild(cartContainer);

// Inicialización del carrito
let cart = [];

// Función para cargar productos
async function loadProducts() {
  const products = await fetchProducts();
  renderProducts(products, productGrid);

  // Filtrar productos al escribir en la barra de búsqueda
  searchInput.addEventListener("input", () => {
    const filteredProducts = filterProducts(products, searchInput.value);
    renderProducts(filteredProducts, productGrid);
  });

  // Añadir productos al carrito
  productGrid.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      const productId = event.target.dataset.productId;
      const product = products.find((p) => p.id == productId);
      addToCart(product, cart);
      renderCart(cart, cartContainer);
    }
  });
}

// Cargar productos al iniciar la aplicación
loadProducts();
