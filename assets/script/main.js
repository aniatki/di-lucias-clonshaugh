document.getElementById('year').innerText.replace("0000", getFullYear());

var menu = document.getElementsByClassName('menu');
var menuItem = document.getElementsByClassName('menu-item-name');
var menuItemPrice = document.getElementsByClassName('menu-item-price');
var submitFamMeal = document.getElementsByClassName('submit-family-meal');
var cartItem = document.getElementsByClassName('cart-item');
var clearFromCartBtn = document.getElementsByClassName('clear-btn');
var cartRow = document.getElementsByTagName('tr');

for (var i = 0; i < menuItem.length || i < cartItem.length; i++) {
    var button = menuItem[i];
    button.addEventListener('click', () => {
        cartRow[0].innerText = `
            <tr>
            <td class="item-name cart-item">${}</td>
            <td><input class="quantity-value" type="number" min="1"></td>
            <td class="price-value">${}</td>
            <td><input class="clear-btn" type="button" value="&times;"></td>
        </tr>`
        });
    
    
}

function removeItemFromCart() {}
function showDropDown() {}
function hideDropDown() {}
function calculateSubtotal() {}
function calculateVat() {}
function calculateTotalPrice() {}