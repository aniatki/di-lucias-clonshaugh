// Showing / Hiding elements

const cta = document.getElementsByClassName('cta');
const heroSection = document.getElementsByClassName('hero-container');
const menu = document.getElementsByClassName('menu');
const cart = document.getElementsByClassName('cart-container');

cta[0].addEventListener('click', _ => {
    menu[0].classList.toggle('hide');
    heroSection[0].classList.toggle('hide');
    cart[0].classList.toggle('hide');
})

const familyForm = document.getElementsByClassName('form-fam-meal');
const familyMeal = document.getElementById('family-meal');
const submitBtn = document.getElementsByClassName('submit-family-meal');

familyMeal.addEventListener('click', _ => {
    familyForm[0].classList.toggle('hide');    
})
submitBtn[0].addEventListener('click', _ => {
    familyForm[0].classList.toggle('hide');
    alert('Item added to cart');
})

// Updating copyright year

let year = document.getElementById('year');
let nd = new Date();
year.innerText = nd.getFullYear();

// Removing items from cart WORKS

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

document.getElementById('pay').addEventListener('click', function(event) {
    event.preventDefault()
    alert('Thank you for your purchase!')
    let cartRow = document.getElementsByClassName('cart-row');
    for (var i = 0; i < cartRow.length; i*2) {
        cartRow[i].remove()
    }
})

// Get item name and price(number) WORKS

let btn = document.getElementsByClassName('menu-item-name');
let itemPrice = document.getElementsByClassName('menu-item-price');

for (var i = 0; i < btn.length; i++) {
    let setBtn = btn[i];
    setBtn.addEventListener('click', function (event) {
        let btnClicked = event.target;
        var itemName = btnClicked.innerText;
        var itemPriceN = parseFloat(btnClicked.nextElementSibling.innerText.replace('€', ''));
        console.log(itemName)
        console.log(itemPriceN)
    })
}

// Kyle Cooke

var addToCartButtons = document.getElementsByClassName('menu-item-name')
for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
}

function addToCartClicked(event) {
    var button = event.target
    var itemName = button.getElementsByClassName('menu-item-name')[0].innerText
    addItemToCart(itemName, itemPriceN)
}




// function addItemToCart(itemName, itemPriceN) {
//     let tBody = document.getElementById('tableBody');
//     var cartRow = document.createElement('li')
//     cartRow.classList.add('cart-row')
//     var cartRowContents =`
//     <li>
//         <p class="item-name">${itemName}</p> 
//         <input class="quantity-value right-align" type="number" value="1" min="1">
//         <button class="clear-btn">&times;</button> 
//         <p class="price-value right-align">${itemPriceN}</p>
//     </li>
//     `;
//     cartRow.innerHTML = cartRowContents
//     tBody.append(cartRow)
//     // cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
//     // cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
// }

