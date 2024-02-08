header.innerHTML = `<nav>
    <div style="width: 100px">
      <a href="index.html"><img src="logo.png" style="width: 100%; height: auto" /></a>
    </div>
    <ul>
      <div class="dropdown">
        <li><a href="#">Visit</a>
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
      <li>
        <a href="user.html">
          <i class="fa-solid fa-user" style="color: #000000;"></i>
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
        <form action='' method=''>
          <input type="email" placeholder="Email address" id="emailInput">
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

}


//newsletter form (in footer) functionality w/ vanilla JS




//default billing option already selected, javascript needed to unselect option when user clicks
// const billingAddressOpt = document.getElementById('sameAsBilling');
// billingAddressOpt.addEventListener('click', function () {
//  if (billingAddressOpt.checked) {
//   billingAddressOpt.checked = false;
//  } else {
//   billingAddressOpt.checked = true;
//  }
// })

const differentBillingAddressOpt = document.getElementById('differentAsBilling');
function clearRadio() {
  billingAddressOpt.checked = false;
  differentAsBilling.checked = false;
}

//toggle billing address container - let user provide different billing address - not working but it's unchecking it by click, and then not letting me choose the opt again
const hiddenBillingContainer = document.querySelector('.hiddenBillingAddress');
const differentBillingAddressOptSelected = document.getElementById('differentAsBilling');
const billingAddressFormContainer = document.getElementById('billingAddress');

differentBillingAddressOptSelected.addEventListener('change', function () {
  if (differentBillingAddressOptSelected.checked) {
    // billingAddressFormContainer.style.display = 'none';
    hiddenBillingContainer.style.display = 'block';
  }
})


//if there's nothing yet in cart, all of cart page should be hidden and a phrase saying cart empty should be centred on page
document.addEventListener('DOMContentLoaded', function() {
  const cartProducts = document.getElementById('cartProducts');
  const cartDetailsContainer = document.querySelector('.allFormsOnLeft');
  const cartContainer = document.querySelector('.cartContainer');
  const noProducts = document.getElementById('noProductsMessage');

  if (!cartProducts.innerHTML.trim()) {
    cartDetailsContainer.style.display = 'none';
    cartContainer.style.display = 'none';
    noProductsMessage.style.display = 'block';
  } else {
    noProductsMessage.style.display = 'none';
    cartDetailsContainer.style.display = 'block';
    cartContainer.style.display = 'block';
  }
})

//when clicking on 'add to cart' btns on shop/home page, user should be alerted with a little pop-up or notif on nav bar