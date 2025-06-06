
function toggleMenu() {
    const navMenu = document.getElementById("navbar");
    navMenu.classList.toggle("menu-open");
  }

  const products = [
    { id: 1, name: 'Capuccino', price: 11.50 },
    { id: 2, name: 'Capuccino com Avelã', price: 13.50 },
    { id: 3, name: 'Capuccino com Cookies\'n Cream', price: 13.50 },
    { id: 4, name: 'Capuccino Baunilha', price: 13.50 },
    { id: 5, name: 'Capuccino Caramelo Salgado', price: 13.50 },
    { id: 6, name: 'Capuccino Diet', price: 13.50 },
  ];
  
  let cart = [];

  document.addEventListener('DOMContentLoaded', () => {
    const orderModal = document.getElementById('orderModal');
    const closeModalBtn = document.querySelector('.close');
  
    closeModalBtn.addEventListener('click', () => { 
      orderModal.style.display = 'none'; 
    });
    
    window.onclick = (event) => { 
      if (event.target === orderModal) { 
        orderModal.style.display = 'none'; 
      } 
    };
  });
  
  function confirmOrder() {
    const orderModal = document.getElementById('orderModal');
    orderModal.style.display = 'block';
  }

  document.addEventListener('DOMContentLoaded', () => {
      const productList = document.getElementById('productList');
      const cartList = document.getElementById('cartList');
      
  
      products.forEach(product => {
          const productItem = document.createElement('div');
          productItem.classList.add('product-item');
          productItem.innerHTML = `
              <span>${product.name} - R$${product.price.toFixed(2)}</span>
              <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
          `;
          productList.appendChild(productItem);
      });
  
      document.getElementById('newOrderBtn').addEventListener('click', resetOrder);
      document.getElementById('confirmOrderBtn').addEventListener('click', confirmOrder);
      closeModal.addEventListener('click', () => { orderModal.style.display = 'none'; });
      window.onclick = (event) => { if (event.target === orderModal) { orderModal.style.display = 'none'; } };
  });
  
  function addToCart(productId) {
      const product = products.find(p => p.id === productId);
      const cartItem = cart.find(item => item.product.id === productId);
      
      if (cartItem) {
          cartItem.quantity += 1;
      } else {
          cart.push({ product, quantity: 1 });
      }
  
      renderCart();
  }
  
  function removeFromCart(productId) {
      cart = cart.filter(item => item.product.id !== productId);
      renderCart();
  }
  
  function updateQuantity(productId, quantity) {
      const cartItem = cart.find(item => item.product.id === productId);
      if (cartItem) {
          cartItem.quantity = quantity;
          if (cartItem.quantity <= 0) {
              removeFromCart(productId);
          } else {
              renderCart();
          }
      }
  }
  
  function renderCart() {
      const cartList = document.getElementById('cartList');
      cartList.innerHTML = '';
  
      cart.forEach(item => {
          const cartItem = document.createElement('div');
          cartItem.classList.add('cart-item');
          cartItem.innerHTML = `
              <span>${item.product.name} - R$${item.product.price.toFixed(2)} x ${item.quantity}</span>
              <div>
                  <button onclick="updateQuantity(${item.product.id}, ${item.quantity - 1})">-</button>
                  <button onclick="updateQuantity(${item.product.id}, ${item.quantity + 1})">+</button>
                  <button onclick="removeFromCart(${item.product.id})">Remover</button>
              </div>
          `;
          cartList.appendChild(cartItem);
      });
  }

  
  function resetOrder() {
      cart = [];
      renderCart();
  }
  