// Updating copyright year

nd = new Date();
year.innerText = nd.getFullYear();


// Get item name and price(number)

let tBody = document.getElementById('tableBody');
let cartRow = document.getElementsByClassName('cart-row');

let btn = document.getElementsByClassName('menu-item-name');
let itemPrice = document.getElementsByClassName('menu-item-price');

for (var i = 0; i < btn.length; i++) {
    let setBtn = btn[i];
    setBtn.addEventListener('click', function (event) {
        let btnClicked = event.target;
        var itemName = btnClicked.innerText;
        var itemPriceValue = btnClicked.nextElementSibling.innerText;
        var itemPriceN = parseFloat(itemPriceValue.replace('€', ''));
        createRow(event);
    });

    // Use variables to create a new row in cart

    function createRow(event) {
        event.preventDefault();
        let newRow = `<li class="cart-row">
            <p class="item-name">${itemName}</p> 
            <input class="quantity-value right-align" type="number" min="1">
            <button class="clear-btn">&times;</button> 
            <p class="price-value right-align">${itemPriceN}</p>
        </li>`
        tBody.innerHTML = newRow;
    }
}



// Removing items from cart

let clearBtn = document.getElementsByClassName('clear-btn');
for (var i = 0; i < clearBtn.length; i++) {
    let setClearBtn = clearBtn[i];
    setClearBtn.addEventListener('click', function (event) {
        let buttonClicked = event.target;
        buttonClicked.parentElement.remove();
    });
}

// Subtotal

function calculateSubtotal() {

}

// VAT

function calculateVat() {

}

// Total

function calculateTotal() {

}
// Pay

document.getElementById('pay').addEventListener('click', _ => {
    for (var i = -2; i < clearBtn.length; i++) {
        clearBtn[0].parentElement.remove();
    }
    alert('Thank you for your purchase!')
})