document.addEventListener('DOMContentLoaded', function() {
    let cart = [];

    function addToCart(productName, price) {
        cart.push({ productName, price });
        updateCartDisplay();
    }

    function updateCartDisplay() {
        let total = cart.reduce((acc, item) => acc + item.price, 0);
        let itemCount = cart.length;
        document.getElementById('cart-count').textContent = itemCount;
        document.getElementById('cart-total').textContent = total.toFixed(2);
    }

    // Event delegation for add to cart buttons
    document.addEventListener('click', function(event) {
        if (event.target.matches('.product button')) {
            const productName = event.target.closest('.product').querySelector('h3').textContent;
            const price = parseFloat(event.target.closest('.product').querySelector('p').textContent.replace('$', ''));
            addToCart(productName, price);
        }
    });

    // Suggestion form submission
    document.getElementById('suggestion-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const thankYouMessage = document.getElementById('thank-you-message');
        thankYouMessage.style.display = 'block';
        setTimeout(() => thankYouMessage.style.display = 'none', 5000);
        document.getElementById('suggestion-text').value = '';
    });

    // Search functionality
    document.getElementById('search-field').addEventListener('input', function(event) {
        const searchQuery = event.target.value.toLowerCase();
        document.querySelectorAll('.product-category .product').forEach(function(product) {
            const productName = product.querySelector('h3').textContent.toLowerCase();
            product.style.display = productName.includes(searchQuery) ? '' : 'none';
        });
    });
});
// ... [other code] ...

function searchProducts() {
    // Get the search query
    const searchQuery = document.getElementById('search-field').value.toLowerCase();
    // Get all products
    const products = document.querySelectorAll('.product');

    // Loop over the products and hide those that don't match the search query
    products.forEach(product => {
        const name = product.getAttribute('data-name').toLowerCase();
        if (name.includes(searchQuery)) {
            product.style.display = 'block'; // or 'flex', 'grid', etc.
        } else {
            product.style.display = 'none';
        }
    });
}

// ... [other code] ...
