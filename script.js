document.addEventListener('DOMContentLoaded', function() {
    const productCounters = document.querySelectorAll('.product-counter');

    productCounters.forEach(function(counter) {
        const decrementButton = counter.querySelector('.decrement');
        const incrementButton = counter.querySelector('.increment');
        const quantityElement = counter.querySelector('.quantity');

        let quantity = 0;

        decrementButton.addEventListener('click', function() {
            if (quantity > 0) {
                quantity--;
                quantityElement.textContent = quantity;
            }
        });

        incrementButton.addEventListener('click', function() {
            quantity++;
            quantityElement.textContent = quantity;
        });
    });
});
