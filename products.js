const products = [
    {
        name: 'ceramic cup',
        price: 16.90,
        image: './images/ceramic-cup.jpg'
    },
    {
        name: 'ceramic mug',
        price: 19.20,
        image: './images/ceramic-mug.jpg'
    },
    {
        name: 'drip coffee set',
        price: 32.00, 
        image: './images/drip-coffee-set.png'
    },
    {
        name: 'oolong tea set',
        price: 25.00,
        image: './images/oolong-tea-set.jpg'
    },
    {
        name: 'tea ceremony set',
        price: 46.00,
        image: './images/tea-ceremony-set.jpg'
    },
    {
        name: 'robusta coffee beans',
        price: 8.80,
        image: './images/coffee-beans-sale.jpg'
    }
]

//to render products

function renderProducts(productsList) {
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
filterSelect.addEventListener("change", function (event) {
    let sortedProducts = [...products]; //copy of products arr
    selectedValue = event.target.value;
    if (selectedValue === 'lowToHigh') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (selectedValue === 'highToLow') {
        sortedProducts.sort((a, b) => b.price - a.price);
    } else {
        renderProducts(products) //default
    }

    renderProducts(sortedProducts)
})


