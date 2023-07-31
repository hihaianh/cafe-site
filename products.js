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
// Function to add item to cart
// function addToCartClicked(event) {

// }
  
//   // Add event listener to the "Add to Cart" buttons on the page
//   const addToCartBtn = document.querySelectorAll('.add-to-cart');
//   addToCartBtn.forEach((button) => {
//     button.addEventListener('click', addToCartClicked);
//   });

  // Function to render cart products
function renderCartProducts(cartItems) {
    const cartProducts = document.getElementById('cartProducts');
    cartProducts.innerHTML = '';
  
    cartItems.forEach((item) => {
      const cartProduct = document.createElement('div');
      cartProduct.className = 'cart-product';
  
      const productImage = document.createElement('img'); // Create an image element
      productImage.src = item.image; // Set the image source to the product's image URL
      productImage.alt = item.name; // Set the image alt attribute to the product's name
      cartProduct.appendChild(productImage); // Add the image to the cartProduct
  
      const productName = document.createElement('p');
      productName.textContent = item.name;
  
      const productPrice = document.createElement('p');
      productPrice.textContent = '£' + item.price.toFixed(2);
  
      const productQuantity = document.createElement('p');
      productQuantity.textContent = 'Quantity: ' + item.quantity;
  
      cartProduct.appendChild(productName);
      cartProduct.appendChild(productPrice);
      cartProduct.appendChild(productQuantity);
  
      cartProducts.appendChild(cartProduct);
    });
  }
  
  
  // Render cart products when the page loads
  //renderCartProducts();

//function to remove a product from cart

// function removeFromCart(productName) {
//     const index = cart.findIndex((item) => item.name === productName)
    
//     if (index !== -1) {
//         cart.splice(index, 1);
//         renderCartProducts();
//     }
// }


//quantity counter
// const decrementBtn = document.getElementById('decrementBtn')
// const incrementBtn = document.getElementById('incrementBtn')
// const quantityInput = document.getElementById('quantityInput')

// decrementBtn.addEventListener('click', decrement);
// incrementBtn.addEventListener('click', increment);

// //parseint parses a string argument to an integer
// function increment() {
//     quantityInput.value = product.quantity + 1
// }

// function decrement() {
//     if (product.quantity > 1) {
//         quantityInput.value = product.quantity - 1
//     }
// }

// function updateQuantity(product, newQuantity) {
//     product.quantity = parseInt(newQuantity)
//     renderCartProducts(cartProducts)
// }
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
















//first param should be an array of products that has been filtered by user search query

// document.addEventListener('DOMContentLoaded', function() {
//     const searchButton = document.getElementById('submitSearch');
//     searchButton.addEventListener('click', finalSearchStep());
// });


// function finalSearchStep() {
//     const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
//     const redirectToNewPage = new URL(window.location.href);
  
//     for (const [key, value] of redirectToNewPage.searchParams.entries()) {
//         redirectToNewPage.searchParams.set('q', searchInput)
    
//     }
    
//     const filteredProducts = products.filter((product) => {
//         product.name.includes(redirectToNewPage)
        
//     })
//     renderSearch(filteredProducts);
// }


