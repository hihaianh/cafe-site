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
        <a href="#">
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
        <a href="#">
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
        <div class="search-click">
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

//perform search based on user's input
function performSearch() {
  let searchQuery = searchInput.value.trim();
  //search a list of items / fetch results from an API

}



// const cart = [];

// //function to handle adding an item to cart
// function addToCart(event) {
//   const button = event.target;
//   const productName = button.dataset.product;
//   const productPrice = parseFloat(button.dataset.price);

//   cart.push({name: productName, price: productPrice})

//   displayCart();
// }

// //function to display shopping cart contents
// function displayCart() {
//   const cartDiv = document.getElementById('cart');
//   cartDiv.innerHTML = '';

//   //calculate total price of all items in cart
//   let totalPrice = 0;

//   cart.forEach(item => {
//     const itemDiv = document.createElement('div');
//     itemDiv.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
//     cartDiv.appendChild(itemDiv)

//     totalPrice += item.price
//   })

//   //display total price

//   const totalDiv = document.createElement('div');
//   totalDiv.innerHTML = `<strong>Total: $${totalPrice.toFixed(2)}</strong>`;
//   cartDiv.appendChild(totalDiv);
// }

// //added event listeners to all add to cart buttons- it'll add to cart when you 'click' the button

// const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
// addToCartButtons.forEach(button => {
//   button.addEventListener('click', addToCart)
// });




//   //function to perform search
// function performSearch() {
//   //get the search term from the input field

// }


// //attach event Listener to search button

// document.getElementById('search-icon')

// document.getElementById('search-word').addEventListener('click', performSearch())

// //Make search work by just pressing enter key
// document.getElementById('searchInput').addEventListener('keypress', function(event) {
//   if (event.key === 'Enter') {
//     performSearch();
//   }
// })
