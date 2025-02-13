//  iñigo ibarlucea moreno
 // Productos disponibles
const products = [
    { id: 1, name: "Elixir of Inferno", price: 10, image: "imagenes/fuego.webp" },
    { id: 2, name: "Ocean's Whisper Elixir", price: 15, image: "imagenes/agua.webp" },
    { id: 3, name: "Essence of Vital Grove", price: 20, image: "imagenes/tierra.webp" },
    { id: 4, name: "Astral Dream Draught", price: 25, image: "imagenes/estrellas.webp" },
    { id: 5, name: "Elixir of Radiant Majesty", price: 30, image: "imagenes/luz.webp" },
    { id: 6, name: "Moonlit Essence", price: 35, image: "imagenes/luna.webp" },
  ];
  
  // Estado del carrito (se recupera de Local Storage o se inicializa vacío)
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  // Elementos del DOM
  const productContainer = document.querySelector(".products");
  const cartButton = document.getElementById("cart-button");
  const cartDropdown = document.getElementById("cart-dropdown");
  const cartItems = document.getElementById("cart-items");
  const totalPrice = document.getElementById("total-price");
  const cartCount = document.getElementById("cart-count");
  
  // Generar productos en la página
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product");
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>€${product.price.toFixed(2)}</p>
      <button data-id="${product.id}">Añadir al Carrito</button>
    `;
    productContainer.appendChild(productCard);
  });
  
  // Mostrar/ocultar menú del carrito
  cartButton.addEventListener("click", () => {
    cartDropdown.style.display = cartDropdown.style.display === "block" ? "none" : "block";
  });
  
  // Añadir productos al carrito
  document.querySelectorAll(".product button").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = parseInt(button.dataset.id);
      const product = products.find((p) => p.id === productId);
      const cartItem = cart.find((item) => item.id === productId);
  
      if (cartItem) {
        cartItem.quantity++;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
  
      saveCartToLocalStorage(); // Guardar en Local Storage
      updateCart(); // Actualizar la visualización del carrito
    });
  });
  
  // Actualizar el carrito
  function updateCart() {
    cartItems.innerHTML = ""; // Limpiar lista de productos
    let total = 0;
    let count = 0;
  
    cart.forEach((item) => {
      total += item.price * item.quantity; // Calcular total
      count += item.quantity; // Calcular cantidad total
  
      const li = document.createElement("li");
      li.classList.add("cart-item");
      li.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        <div class="cart-item-info">
          <p>${item.name} x${item.quantity}</p>
          <p>€${(item.price * item.quantity).toFixed(2)}</p>
        </div>
        <button data-id="${item.id}" class="remove-item">Eliminar</button>
      `;
      cartItems.appendChild(li);
    });
  
    totalPrice.textContent = `€${total.toFixed(2)}`;
    cartCount.textContent = count;
  
    // Botón para eliminar productos específicos
    document.querySelectorAll(".remove-item").forEach((button) => {
      button.addEventListener("click", () => {
        const productId = parseInt(button.dataset.id);
        cart = cart.filter((item) => item.id !== productId);
        saveCartToLocalStorage(); // Actualizar Local Storage
        updateCart(); // Actualizar visualización
      });
    });
  
    // Botón para vaciar el carrito
    if (cart.length > 0) {
      let clearCartButton = document.getElementById("clear-cart");
      if (!clearCartButton) {
        clearCartButton = document.createElement("button");
        clearCartButton.id = "clear-cart";
        clearCartButton.textContent = "Vaciar Carrito";
        clearCartButton.classList.add("clear-cart");
        clearCartButton.addEventListener("click", () => {
          cart = []; // Vaciar el array del carrito
          localStorage.removeItem("cart"); // Eliminar la clave 'cart' del Local Storage
          updateCart(); // Actualizar visualización
        });
        cartDropdown.appendChild(clearCartButton);
      }
    } else {
      const clearCartButton = document.getElementById("clear-cart");
      if (clearCartButton) {
        clearCartButton.remove(); // Eliminar botón si no hay elementos
      }
    }
  }
  
  // Guardar el carrito en Local Storage
  function saveCartToLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  
  // Actualizar el carrito al cargar la página
  updateCart();
  