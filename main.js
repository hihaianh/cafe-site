header.innerHTML = `<nav>
    <div style="width: 100px">
      <a href="index.html"><img src="logo.png" style="width: 100%; height: auto" /></a>
    </div>
    <ul>
      <div class="dropdown">
        <li><a href="#">Visit &#x2304;</a>
          <div class="dropdown-content">
              <a href="visit.html">Shoreditch</a>
              <a href="menu.html">Menu</a>
          </div>
        </li>
      </div>
      <li><a href="shop.html">Shop</a></li>
      <li><a href="about.html">About Us</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li>
        <a href="#" id="searchIcon">
          <i class="fa-solid fa-magnifying-glass" style="color: #000000;"></i>
        </a>
      </li>
      <li>
        <a href="cart.html">
          <i class="fas fa-shopping-cart" style="color: #000000;"></i>
        </a>
      </li>
    </ul>
  </nav>
  <div id="searchContainer" class="peekaboo">
    <div class="navbar-container">
    <nav>
    <div style="width: 100px">
      <a href="index.html"><img src="logo.png" style="width: 100%; height: auto" /></a>
    </div>
    <ul>
      <div class="dropdown">
        <li><a href="#">Visit &#x2304;</a>
          <div class="dropdown-content">
              <a href="visit.html">Shoreditch</a>
              <a href="menu.html">Menu</a>
          </div>
        </li>
      </div>
      <li><a href="shop.html">Shop</a></li>
      <li><a href="about.html">About Us</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li>
        <a href="#" id="searchIcon">
          <i class="fa-solid fa-magnifying-glass" style="color: #000000;"></i>
        </a>
      </li>
      <li>
        <a href="cart.html">
          <i class="fas fa-shopping-cart" style="color: #000000;"></i>
        </a>
      </li>
    </ul>
  </nav>
    </div>
      <div class="search-content">
        <div id="closeIcon">
          <i class="fa-solid fa-xmark fa-2xl" style="color: #000000;"></i>
        </div>
        <div class="searchLine-container">
          <input type="text" id="searchInput" placeholder="Search...">
        </div>
        <div class="search-click" id="submitSearch">
          <i class="fa-solid fa-magnifying-glass fa-2xl" style="color: #000000;"></i>
        </div>
      </div>
    </div>
  `

    footer.innerHTML = `<div id="footer-container">
    <div class="columns">
      <div class="column">
        <img src="./images/logo-brown.png" alt="logo">
        <div class="sns-icons">
          <ul>
            <li>
              <a href="#">
                <i class="fa-brands fa-instagram fa-xl" style="color: #000000;"></i>
              </a>
              <li>
                <a href="#">
                  <i class="fa-brands fa-square-facebook fa-xl" style="color: #000000;"></i>
                </a>
              </li>
              
            </li>
          </ul>
        </div>
      </div>

      <div class="column">
        <ul>
          <li><a href="shop.html">Shop</a></li>
          <li><a href="menu.html">Menu</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="contact.html">Contact</a></li> 
        </ul>
      </div>

      <div class="column">
        <ul>
          <li><a href="#">Search</a></li>
          <li><a href="#">Deliveries & Refunds</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Terms Of Service</a></li>
        </ul>
      </div>


      <div class="column">
        <div class="email-subscription">
        <p>Receive updates on our products and events in store</p>
        <form>
          <input type="email" placeholder="Email address">
          <button type="submit">Subscribe</button>
        </form>
        </div>
      </div>
    </div>

    <hr class="solid">
    <p>© 2023 càphê</p>
  </div>`


//add event listener for search icon
let search = document.getElementById('searchIcon')
console.log(search)
search?.addEventListener('click', toggleSearch)
//add event listener to close icon (in hidden 'search' container) to show underlying page and close search
let close = document.getElementById('closeIcon')
close.addEventListener('click', toggleSearch)
//search icon once clicked will open up hidden container
function toggleSearch() {
  const searchContainer = document.getElementById('searchContainer');
  const searchInput = document.getElementById('searchInput');
  const grabElement = document.getElementById('testing');
  searchContainer.classList.toggle('peekaboo');
}


//event listener that listens out for user's search input
let submitSearch = document.getElementById('submitSearch');
submitSearch.addEventListener('click', performSearch);

//perform search based on user's input
function performSearch() {
  let searchQuery = document.getElementById('searchInput').value.trim().toLowerCase();

  //filter the products based on searchQuery
  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchQuery))
  //redirect to window containing results w/ search query URL param
  window.location.href = `results.html?q=${encodeURIComponent(searchQuery)}`

  renderProducts(filteredProducts)
  //need to make it close search container to unveil results. and to be able to make search queries on any page.

  //search a list of items / fetch results from an API

}

// Step 1: Add event listeners to "Add to Cart" buttons
// Step 2: Shopping Cart data structure (array to store cart items)
// Step 3: Function to add items to the cart
// Check if the item already exists in the cart
// If item already exists, increase its quantity
// If item does not exist, add it to the cart
// Update cart display

let cart = [];

function addToCart(product) {
  let existingItem = cartItems.find((item) =>
    item.name === product.name
  )
  if (existingItem) {
    existingItem.quantity++
  } else {
    cartItems.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    })
  }
  localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

function removeFromCart(name) {
  // Filter out the item with the provided name from the cart array
  let cart = cartItems.filter((item) => item.name !== name);
  // Save the updated cartItems to localStorage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  // Call the renderCartProducts function to update the cart display
  renderCartProducts(cartItems);
}

//quantity counter
document.addEventListener('DOMContentLoaded', function() {
  const decrementBtn = document.getElementById('decrementBtn')
  const incrementBtn = document.getElementById('incrementBtn')
  const quantityInput = document.getElementById('quantityInput')

  decrementBtn.addEventListener('click', decrement);
  incrementBtn.addEventListener('click', increment);

})

//parseint parses a string argument to an integer
function increment() {
  let currentQuantity = parseInt(quantityInput.value)
  quantityInput.value = currentQuantity + 1
}

function decrement() {
  let currentQuantity = parseInt(quantityInput.value)
  if (currentQuantity > 1) {
      quantityInput.value = currentQuantity - 1
  }
}

//de;ete item off cart btn + functionality]

