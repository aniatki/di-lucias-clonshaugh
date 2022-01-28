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
        console.log(itemName, itemPriceN);
        
        // Use variables to create a new row in cart
        
        let newRow = document.createElement('tr')
        let column = newRow.createElement('td')
        column.textContent('adhfbadfb')
        tBody.appendChild(column)
        
    });
}

// Removing items from cart

let clearBtn = document.getElementsByClassName('clear-btn');
for (var i = 0; i < clearBtn.length; i++) {
    let setClearBtn = clearBtn[i];
    setClearBtn.addEventListener('click', function (event) {
        let buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.remove();
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

// <td class="item-name">${itemName}</td>
// <td class="quantity-value"><input class="right-align" type="number" min="1"></td>
// <td class="price-value right-align">${itemPriceN}</td>
// <button class="clear-btn">&times;</button></td>
let newTd = document.createElement('div')
newTd.textContent('new text div') 

document.body.appendChild(newTd)