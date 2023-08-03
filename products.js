const products = [
    {
        id: 1,
        name: 'ceramic cup',
        price: 16.90,
        image: './images/ceramic-cup.jpg'
    },
    {
        id: 2,
        name: 'ceramic mug',
        price: 19.20,
        image: './images/ceramic-mug.jpg'
    },
    {
        id: 3,
        name: 'drip coffee set',
        price: 32.00, 
        image: './images/drip-coffee-set.png'
    },
    {
        id: 4,
        name: 'Oolong Tea Set',
        price: 25.00,
        image: './images/oolong-tea-set.jpg'
    },
    {
        id: 5,
        name: 'tea ceremony set',
        price: 46.00,
        image: './images/tea-ceremony-set.jpg'
    },
    {
        id: 6,
        name: 'robusta coffee beans',
        price: 8.80,
        image: './images/coffee-beans-sale.jpg'
    }
]

//to render products

function renderProducts(productsList, targetElementId) {
    const gridOfProducts = document.getElementById('gridOfProducts');
    gridOfProducts.innerHTML = '';

    productsList.forEach((product) => {
        const figure = document.createElement('figure');
        figure.className= "product-listing";

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;

        const figcaptionName = document.createElement('figcaption');
        figcaptionName.className = 'product-name'
        figcaptionName.textContent = product.name;

        const figcaptionPrice = document.createElement('figcaption')
        figcaptionPrice.className = 'product-price';
        figcaptionPrice.textContent = '£' + product.price.toFixed(2); //to show two decimal places

        const button = document.createElement('button');
        button.className = 'add-to-cart';
        button.textContent = 'Add to Cart';

        button.setAttribute('data-productid', product.id)
        figure.appendChild(img);
        figure.appendChild(figcaptionName);
        figure.appendChild(figcaptionPrice);
        figure.appendChild(button);
        
        gridOfProducts.appendChild(figure);
    })

}

//event listener for sort by bar
const filterSelect = document.getElementById('filterSelect');

if (filterSelect) {
    renderProducts(products) //default
    filterSelect.addEventListener("change", function (event) {
        let sortedProducts = [...products]; //copy of products arr
        selectedValue = event.target.value;
        if (selectedValue === 'lowToHigh') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (selectedValue === 'highToLow') {
            sortedProducts.sort((a, b) => b.price - a.price);
        } 
        //else {
        //     renderProducts(products) //default
        // }

        renderProducts(sortedProducts)
    })
}

//for search

function renderSearch(productsList, targetElementId="searchResults") {
    const targetElement = document.getElementById(targetElementId);
    targetElement.innerHTML = '';

    productsList.forEach((product) => {
        const figure = document.createElement('figure');
        figure.className = 'product-listing';

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;

        const figcaptionName = document.createElement('figcaption');
        figcaptionName.className = 'product-name';
        figcaptionName.textContent = product.name;

        const figcaptionPrice = document.createElement('figcaption');
        figcaptionPrice.className = 'product-price';
        figcaptionPrice.textContent = '£' + product.price.toFixed(2);

        const button = document.createElement('button');
        button.className = 'add-to-cart';
        button.textContent = 'Add to Cart';

        figure.appendChild(img);
        figure.appendChild(figcaptionName);
        figure.appendChild(figcaptionPrice);
        figure.appendChild(button);

        targetElement.appendChild(figure)

    })
}

//1) find a way to get the user input from the URL into a variable that we can use
const currentURL = new URL(window.location.href);
if (currentURL?.searchParams) {
    const userInput = currentURL.searchParams.get('q');
    if (userInput != null) {
        //2) we need to use this variable to filter the products arr for matching product titles
        const filteredProducts = products.filter((product) => {
            return product.name.toLowerCase().includes(userInput)
        })
        //3) pass the filtered arr we just made into the renderSearch function to display the filtered products 
        renderSearch(filteredProducts);

    }
}

//shopping cart

//function to render cart products
function renderCartProducts(cartItems) {
    const cartProductsContainer = document.getElementById('cartProducts');
    cartProductsContainer.innerHTML = '';
  
    cartItems.forEach((product) => {
      const cartProduct = document.createElement('div');
      cartProduct.className = 'cart-product';
  
      const productImage = document.createElement('img');
      productImage.src = product.image;
      productImage.alt = product.name;
  
      const productName = document.createElement('p');
      productName.textContent = product.name;
  
      const productPrice = document.createElement('p');
      productPrice.textContent = '£' + product.price.toFixed(2);
  
      var productQuantity = document.createElement('input');
      productQuantity.type = 'number';
      productQuantity.className = 'quantityInput';
      productQuantity.min = 1;
      productQuantity.max = 10;
      productQuantity.value = product.quantity;

    //   <div class="quantity">
    //                 <button id="decrementBtn">-</button>
    //                 <input type="number" id="quantityInput" value="1" min="1">
    //                 <button id="incrementBtn">+</button>
    //             </div>
      const removeProduct = document.createElement('button');
      removeProduct.textContent = 'Remove';
      removeProduct.addEventListener('click', removeFromCart);
      function removeFromCart(id) {
        cartProducts = cartProducts.filter((item) => (item.id !== product.id))
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts))
        renderCartProducts(cartProducts)
      }

      cartProduct.appendChild(productImage);
      cartProduct.appendChild(productName);
      cartProduct.appendChild(productPrice);
      cartProduct.appendChild(productQuantity);
      cartProduct.appendChild(removeProduct)
      cartProductsContainer.appendChild(cartProduct);
    });
  }
// Add event listener to the "Add to Cart" buttons on the page
  const addToCartBtn = document.querySelectorAll('.add-to-cart');
  //forEach only works for arr
    addToCartBtn.forEach((button) => {
        button.addEventListener('click', addToCart);
    });

//the function to addto cart is on main.js page
let cartProducts = [];
//load cart products in cart.html from localStorage
if (localStorage.getItem('cartProducts')) {
    cartProducts = JSON.parse(localStorage.getItem('cartProducts'))
}

function addToCart(e) {
    const button = e.target
    const productId = button.getAttribute('data-productid')
    const existingItem = cartProducts.find((item) =>
        item.id == productId
    )
    if (existingItem) {
        existingItem.quantity++
    } else {
        //returns object, product
        const productFinder = products.find((product) => {
            return productId == product.id
        })
        
        
        cartProducts.push({
            ...productFinder, 
            quantity: 1
        })
    }
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    //renderCartProducts(cartProducts);
    console.log('klevs cart: ', cartProducts);
}

document.addEventListener('DOMContentLoaded', function() {
  const decrementBtn = document.getElementById('decrementBtn');
  const incrementBtn = document.getElementById('incrementBtn');
  const quantityInput = document.getElementById('quantityInput');

  decrementBtn.addEventListener('click', decrement);
  incrementBtn.addEventListener('click', increment);

  // Load the cart items from localStorage (optional)
  if (localStorage.getItem('cartProducts')) {
    cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
  }

  // Call the renderCartProducts function to display the cart items
  renderCartProducts(cartProducts);
});

// parseint parses a string argument to an integer
function increment() {
  let currentQuantity = parseInt(quantityInput.value);
  quantityInput.value = currentQuantity + 1;
}

function decrement() {
  let currentQuantity = parseInt(quantityInput.value);
  if (currentQuantity > 1) {
    quantityInput.value = currentQuantity - 1;
  }
}

//calling function to display cart items when page loads
renderCartProducts(cartProducts);


//quantity counter
//another way:
// function increment(product) {
//     product.quantity = (product.quantity || 1) + 1;
//     renderCartProducts(cartProducts);
//   }
  
//   function decrement(product) {
//     if (product.quantity && product.quantity > 1) {
//       product.quantity -= 1;
//       renderCartProducts(cartProducts);
//     }
//   }
  
//   function updateQuantity(product, newQuantity) {
//     product.quantity = parseInt(newQuantity) || 1;
//     renderCartProducts(cartProducts);
//   }
//de;ete item off cart btn + functionality]



