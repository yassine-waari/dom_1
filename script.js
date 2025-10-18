// Select all plus, minus, delete, and heart buttons
let plusBtns = document.querySelectorAll(".fa-plus-circle");
let minusBtns = document.querySelectorAll(".fa-minus-circle");
let deletebtns = document.querySelectorAll(".fa-trash-alt");
let heartbtns = document.querySelectorAll(".fa-heart");

// ----- PLUS BUTTON: increase quantity -----
plusBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        // Get the span that shows quantity
        let countSpan = btn.parentElement.querySelector(".quantity");
        let count = parseInt(countSpan.textContent); // convert string to number
        countSpan.textContent = count + 1;           // increase by 1
        updateTotalPrice();                           // update total price
    });
});

// ----- MINUS BUTTON: decrease quantity -----
minusBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        let countSpan = btn.parentElement.querySelector(".quantity");
        let count = parseInt(countSpan.textContent); 
        if (count > 0) countSpan.textContent = count - 1; // decrease only if > 0
        updateTotalPrice();                                // update total price
    });
});

// ----- DELETE BUTTON: remove product -----
deletebtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        let cardBody = btn.closest(".card"); // find the nearest product card
        if (cardBody) {
            cardBody.remove();              // remove product from DOM
            updateTotalPrice();             // update total price
        }
    });
});

// ----- HEART BUTTON: toggle like/favorite -----
heartbtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        // Toggle heart color between red (liked) and black (unliked)
        if (btn.style.color === "red") {
            btn.style.color = "black"; // change back to unliked
        } else {
            btn.style.color = "red";   // mark as liked
        }
    });
});

// ----- FUNCTION TO UPDATE TOTAL PRICE -----
function updateTotalPrice() {
    let total = 0;
    // Select all inner card-body elements that contain price and quantity
    let products = document.querySelectorAll(".card .card-body");

    products.forEach((product) => {
        // Get the unit price (remove $ sign)
        let priceText = product.querySelector(".unit-price").textContent;
        let price = parseFloat(priceText); 

        // Get the quantity of the product
        let quantity = parseInt(product.querySelector(".quantity").textContent);

        // Multiply unit price by quantity and add to total
        total += price * quantity;
    });

    // Display the total price in the HTML
    document.querySelector(".total").textContent = total + " $";
}
