let cartCount = 0; 
    let totalPrice = 0; 

    function addToCart(button) {
        cartCount++; 
        const productPrice = parseFloat(button.parentElement.getAttribute('data-price')); 
        totalPrice += productPrice; 

        document.getElementById('cart-count').innerText = cartCount;
        document.getElementById('total-price').innerText = totalPrice.toFixed(2);
        alert('Product added to cart! Total items: ' + cartCount); 
    }

    function checkout() {
        if (cartCount > 0) {
            alert('Proceeding to checkout with ' + cartCount + ' items in your cart. Total Price: ₱' + totalPrice.toFixed(2));
            
            cartCount = 0;
            totalPrice = 0;
            document.getElementById('cart-count').innerText = cartCount;
            document.getElementById('total-price').innerText = totalPrice.toFixed(2);
        } else {
            alert('Your cart is empty. Please add items to your cart before checking out.');
        }
    }