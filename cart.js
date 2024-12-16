// Initialize cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart display
function updateCartDisplay() {
  const cartItemsContainer = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  cartItemsContainer.innerHTML = '';

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    cartTotal.innerText = '0.00';
    document.getElementById('checkoutButton').disabled = true;
    return;
  }

  let totalPrice = 0;

  cart.forEach((item, index) => {
    const itemRow = document.createElement('div');
    itemRow.classList.add('cart-item', 'd-flex', 'justify-content-between', 'align-items-center');
    itemRow.innerHTML = `
      <div>
        <strong>${item.product}</strong> - Taka ${item.price} x 
        <input type="number" value="${item.quantity}" min="1" class="form-control d-inline-block" style="width: 60px;">
      </div>
      <button class="btn btn-danger btn-sm"><i class="fa-solid fa-trash"></i></button>
    `;

    // Update quantity
    itemRow.querySelector('input').addEventListener('change', function (e) {
      item.quantity = parseInt(e.target.value);
      updateCart();
    });

    // Remove item
    itemRow.querySelector('button').addEventListener('click', function () {
      cart.splice(index, 1);
      updateCart();
    });

    cartItemsContainer.appendChild(itemRow);

    totalPrice += item.price * item.quantity;
  });

  // Update the cart total
  cartTotal.innerText = totalPrice.toFixed(2);
  document.getElementById('checkoutButton').disabled = false;

  // Save updated cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Update cart and re-render
function updateCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartDisplay();
}

// Handle Checkout Button
document.getElementById('checkoutButton').addEventListener('click', () => {
  const deliveryMethod = document.getElementById('deliveryMethod').value;
  const paymentMethod = document.getElementById('paymentMethod').value;

  if (!deliveryMethod || !paymentMethod) {
    alert('Please select both a delivery and payment method.');
    return;
  }

  // Show only the confirmation message
  document.getElementById('cartContainer').classList.add('d-none');
  document.getElementById('confirmationMessage').classList.remove('d-none');

  // Clear cart data
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
});

// Initial Display (on page load)
updateCartDisplay();

// Example of adding items to the cart (you should adapt this to your product pages)
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function () {
    const productName = button.getAttribute('data-name');
    const productPrice = parseFloat(button.getAttribute('data-price'));

    if (!isNaN(productPrice)) {
      addItemToCart(productName, productPrice);
    } else {
      alert('Error: Product price is not defined.');
    }
  });
});

// Function to add item to cart
function addItemToCart(productName, productPrice) {
  let existingItem = cart.find(item => item.product === productName);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      product: productName,
      price: productPrice,
      quantity: 1
    });
  }

  // Save the cart to localStorage and update the display
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartDisplay();
}
