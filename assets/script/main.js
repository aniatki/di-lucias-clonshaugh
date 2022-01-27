// Adding items to cart

var itemPrice = document.getElementsByClassName('menu-item-price');
var row = document.getElementById('cart-row');

var i;
var x;
var itemsList;
var menuItems = [];
var emptyItemObj = {};


let item = document.getElementsByClassName('menu-item-name');

for (i = 0; i < item.length; i++) {
        item[i].addEventListener('click', _ => {
        //         for (i = 0; i < item.length; i++) {
            //         }        
            // var itemPriceText = itemPrice[i].innerText.replace('€', '');
            // console.log(itemPriceText)
            console.log(i)
        })
}
        
        // itemsList = {
        //         "name": itemName,
        //         "price": itemPriceText

        // works
        // var tableBody = document.querySelector('tbody')
        // let cartRow = document.createElement('tr')
        // cartRow.innerHTML = `
        // <td class="item-name cart-item">${itemsList.itemName}</td>
        // `
        // tableBody.append(cartRow)
// })}}