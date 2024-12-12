<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cart</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <script src="https://kit.fontawesome.com/a028686634.js" crossorigin="anonymous"></script>
  <style>
    body {
      background-color: #f8f9fa;
    }
    .navbar {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .confirmation-message {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      text-align: center;
    }
  </style>
</head>
<body>
  <!-- Navbar -->
  <nav class="navbar fixed-top" style="background-color: #B6F2D1;">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html">Customer Dashboard</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="vegetables.html">Vegetables</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="meat.html">Meat</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="dairy.html">Dairy</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="cart.html">
              <i class="fa-solid fa-cart-shopping"></i> Cart
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Cart Content -->
  <div id="cartContainer" class="container mt-5 pt-5">
    <h2>Your Cart</h2>
    <div id="cartItems"></div>

    <!-- Cart Total -->
    <div class="d-flex justify-content-between mt-4">
      <h4>Total: Taka <span id="cartTotal">0.00</span></h4>
    </div>

    <!-- Delivery Method Selection -->
    <div class="mt-4">
      <h4>Select Delivery Method</h4>
      <select class="form-select" id="deliveryMethod">
        <option value="" selected disabled>Choose Delivery Method</option>
        <option value="air">By Air</option>
        <option value="road">By Road</option>
        <option value="sea">By Sea</option>
      </select>
    </div>

    <!-- Payment Method Selection -->
    <div class="mt-4">
      <h4>Select Payment Method</h4>
      <select class="form-select" id="paymentMethod">
        <option value="" selected disabled>Choose Payment Method</option>
        <option value="credit_card">Credit Card</option>
        <option value="cash_on_delivery">Cash on Delivery</option>
        <option value="bkash">Bkash</option>
        <option value="nogod">Nogod</option>
      </select>
    </div>

    <!-- Checkout Button -->
    <div class="mt-4">
      <button class="btn btn-success w-100" id="checkoutButton" disabled>Proceed to Checkout</button>
    </div>
  </div>

  <!-- Confirmation Message -->
  <div id="confirmationMessage" class="confirmation-message d-none">
    <h3>Order is confirmed. Thanks for choosing us!</h3>
  </div>

  <script>
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
      });

      const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
      cartTotal.innerText = totalPrice;
      document.getElementById('checkoutButton').disabled = false;
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

    // Initial Display
    updateCartDisplay();

    // Initialize cart total
let cartTotal = 0;

// Add event listener to Add-to-Cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const productPrice = parseFloat(button.getAttribute('data-price'));
    if (!isNaN(productPrice)) {
      cartTotal += productPrice;

      // Update cart total in the navbar
      document.getElementById('cartTotal').textContent = cartTotal.toFixed(2);

      alert(`Item added to cart! Current Total: ৳${cartTotal.toFixed(2)}`);
    } else {
      alert('Error: Product price is not defined.');
    }
  });
});

  </script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
</body>
</html>
