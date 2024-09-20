// Añadir un producto al carrito
export function addToCart(product, cart) {
  const productInCart = cart.find((item) => item.id === product.id);
  if (productInCart) {
    productInCart.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
}

// Renderizar el carrito en el DOM
export function renderCart(cart, container) {
  container.innerHTML = "<h2>Carrito de Compras</h2>";
  const cartItems = document.createElement("ul");

  // Renderizar los elementos del carrito
  cart.forEach((item) => {
    const cartItem = document.createElement("li");
    cartItem.textContent = `${item.title} - $${item.price} x ${item.quantity}`;
    cartItems.appendChild(cartItem);
  });

  container.appendChild(cartItems);

  let total = 0; // Inicializamos el total
  cart.forEach((item) => {
    total += item.price * item.quantity; // Sumamos el total
  });

  const totalElement = document.createElement("p");
  totalElement.textContent = `Total: $${total.toFixed(2)}`;
  container.appendChild(totalElement);
}
