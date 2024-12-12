<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vegetable Shop</title>
  <script src="https://kit.fontawesome.com/a028686634.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <style>
    .card {
      height: 25rem; /* Set a consistent height for all cards */
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .card img {
      object-fit: cover; /* Ensures the image fits nicely */
      height: 50%; /* Allocate half of the card height to the image */
    }

    .card-body {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .quantity-input {
      width: 50px; /* Consistent width for quantity inputs */
    }
  </style>
</head>
<body>
<button class="btn btn-primary" onclick="window.location.href='checkout.html';">
  Go to Checkout
</button>


  <!-- Navbar with Cart Button -->
 <nav class="navbar fixed-top" style="background-color: #B6F2D1;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Customer Dashboard</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" aria-controls="offcanvasMenu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end custom-offcanvas" tabindex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasMenuLabel">Navigation</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="productDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Product Types
              </a>
              <ul class="dropdown-menu" aria-labelledby="productDropdown">
                <li><a class="dropdown-item" href="vegetable.html">Vegetables</a></li>
                <li><a class="dropdown-item" href="meat.html">Meat</a></li>
                <li><a class="dropdown-item" href="dairy.html">Dairy</a></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex mt-3" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-success" type="submit">Search</button>
          </form>
          <div class="mt-3">
            <a href="cart.html" class="btn btn-primary w-100"><i class="fa-solid fa-cart-shopping"></i> Cart</a>
          </div>
        </div>
      </div>
    </div>
  </nav>

  body>
  <div class="container mt-5 pt-5">
    <div class="row">
      <!-- Cabbage -->
      <div class="col-md-4">
        <div class="card">
          <img src="cabbage.jpeg" class="card-img-top" alt="Cabbage">
          <div class="card-body">
            <h5 class="card-title"><b>Cabbage</b></h5>
            <p class="card-text">Fresh Cabbage from the farm.</p>
            <div>
              <button class="btn btn-success add-to-cart" data-product="Cabbage" data-price="10">Add to Cart</button>
              <div class="d-flex mt-3">
                <input type="number" class="form-control mx-2 quantity-input" value="0" min="0">
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Potato -->
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="potato.jpeg" class="card-img-top" alt="Potato">
          <div class="card-body">
            <h5 class="card-title"><b>Potato</b></h5>
            <p class="card-text">Fresh Potato from the farm.</p>
            <div>
              <button class="btn btn-success add-to-cart" data-product="Potato" data-price="20/kg">Add to Cart</button>
              <div class="d-flex mt-3">
                <input type="number" class="form-control mx-2 quantity-input" value="0" min="0">
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sweet Potato -->
       <div class="col-md-4 mb-4">
        <div class="card">
          <img src="sweetpotato.jpg" class="card-img-top" alt="Sweet Potato">
          <div class="card-body">
            <h5 class="card-title"><b>Sweet Potato</b></h5>
            <p class="card-text">Fresh Sweet Potato from the farm.</p>
            <div>
              <button class="btn btn-success add-to-cart" data-product="Sweet Potato" data-price="100/kg">Add to Cart</button>
              <div class="d-flex mt-3">
                <input type="number" class="form-control mx-2 quantity-input" value="0" min="0">
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Fajli Aam -->
       <div class="col-md-4 mb-4">
        <div class="card">
          <img src="fajliaam.jpg" class="card-img-top" alt="Fajli Aam">
          <div class="card-body">
            <h5 class="card-title"><b>Fajli Aam</b></h5>
            <p class="card-text">Fresh Fajli Aam from the farm.</p>
            <div>
              <button class="btn btn-success add-to-cart" data-product="Fajli Aam" data-price="150/kg">Add to Cart</button>
              <div class="d-flex mt-3">
                <input type="number" class="form-control mx-2 quantity-input" value="0" min="0">
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Himshagar Aam -->
       <div class="col-md-4 mb-4">
        <div class="card">
          <img src="himshagar.jpg" class="card-img-top" alt="Himshagar Aam">
          <div class="card-body">
            <h5 class="card-title"><b>Himshagar Aam</b></h5>
            <p class="card-text">Fresh Himshagar Mango from the farm.</p>
            <div>
              <button class="btn btn-success add-to-cart" data-product="Himshagar Aam" data-price="200/kg">Add to Cart</button>
              <div class="d-flex mt-3">
                <input type="number" class="form-control mx-2 quantity-input" value="0" min="0">
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Langra Aam -->
       <div class="col-md-4 mb-4">
        <div class="card">
          <img src="langraam.jpg" class="card-img-top" alt="Langra Aam">
          <div class="card-body">
            <h5 class="card-title"><b>Langra Aam</b></h5>
            <p class="card-text">Fresh Langra Mango from the farm.</p>
            <div>
              <button class="btn btn-success add-to-cart" data-product="Langra Aam" data-price="250/kg">Add to Cart</button>
              <div class="d-flex mt-3">
                <input type="number" class="form-control mx-2 quantity-input" value="0" min="0">
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Eggplant -->
      < <div class="col-md-4 mb-4">
        <div class="card">
          <img src="Eggplant2.jpg" class="card-img-top" alt="Eggplant">
          <div class="card-body">
            <h5 class="card-title"><b>Eggplant</b></h5>
            <p class="card-text">Fresh Eggplant from the farm.</p>
            <div>
              <button class="btn btn-success add-to-cart" data-product="Eggplant" data-price="32/kg">Add to Cart</button>
              <div class="d-flex mt-3">
                <input type="number" class="form-control mx-2 quantity-input" value="0" min="0">
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Broccoli -->
       <div class="col-md-4 mb-4">
        <div class="card">
          <img src="broccoli.jpef.jpg" class="card-img-top" alt="Broccoli">
          <div class="card-body">
            <h5 class="card-title"><b>Broccoli</b></h5>
            <p class="card-text">Fresh Broccoli from the farm.</p>
            <div>
              <button class="btn btn-success add-to-cart" data-product="Broccoli" data-price="300/kg">Add to Cart</button>
              <div class="d-flex mt-3">
                <input type="number" class="form-control mx-2 quantity-input" value="0" min="0">
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Onion -->
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="onion2.jpg" class="card-img-top" alt="Onion">
          <div class="card-body">
            <h5 class="card-title"><b>Onion</b></h5>
            <p class="card-text">Fresh Onion from the farm.</p>
            <div>
              <button class="btn btn-success add-to-cart" data-product="Onion" data-price="150/kg">Add to Cart</button>
              <div class="d-flex mt-3">
                <input type="number" class="form-control mx-2 quantity-input" value="0" min="0">
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tomato -->
       <div class="col-md-4 mb-4">
        <div class="card">
          <img src="tomato.jpeg" class="card-img-top" alt="Tomato">
          <div class="card-body">
            <h5 class="card-title"><b>Tomato</b></h5>
            <p class="card-text">Fresh Tomato from the farm.</p>
            <div>
              <button class="btn btn-success add-to-cart" data-product="Tomato" data-price="12">Add to Cart</button>
              <div class="d-flex mt-3">
                <input type="number" class="form-control mx-2 quantity-input" value="0" min="0">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script>
    // Initialize the cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to update the cart display
    function updateCartDisplay() {
      const cartCount = document.getElementById('cartCount');
      const cartTotal = document.getElementById('cartTotal');

      // Update the number of items and total price
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

      cartCount.innerText = `(${totalItems})`;
      cartTotal.innerText = totalPrice;
    }

    // Handle Add to Cart functionality
    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', function() {
        const product = this.getAttribute('data-product');
        const price = parseFloat(this.getAttribute('data-price'));

        const quantityInput = this.closest('.card-body').querySelector('.quantity-input');
        let quantity = parseInt(quantityInput.value);

        if (quantity > 0) {
          const existingItem = cart.find(item => item.product === product);
          if (existingItem) {
            existingItem.quantity += quantity;
          } else {
            cart.push({ product, price, quantity });
          }

          // Update cart in localStorage
          localStorage.setItem('cart', JSON.stringify(cart));

          // Update cart display
          updateCartDisplay();
        } else {
          alert("Please enter a valid quantity");
        }
      });
    });

    // Redirect to the cart page
    document.getElementById('cartButton').addEventListener('click', function() {
      window.location.href = 'cart.html';  // Redirect to the cart page
    });

    // Initial cart display
    updateCartDisplay();
  </script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
</body>
</html>
