

// Adding items to cart

var item = document.getElementsByClassName('menu-item-name');
var itemPrice = document.getElementsByClassName('menu-item-price');
var row = document.getElementById('cart-row');

var x;
var y;
var itemsList;

for (x = 0; x < item.length; x++) {
    var itemName = item[x].value
    var itemPriceText = itemPrice[x].textContent
    itemsList = {
        "name": itemName,
        "price": itemPriceText
    };
    // console.log(itemsList)
    // let addedItemToCart = row.createElement('tr')
    // let newRow = addedItemToCart.createElement = ` <td class="item-name cart-item">${itemsList.name}</td>
    // <td><input class="quantity-value" type="number" min="1"></td>
    // <td class="price-value">${itemsList.price}</td>
    // <td><input class="clear-btn" type="button" value="&times;"></td>`;
    // addedItemToCart.appendChild(newRow);
    // console.log(newRow)
}



