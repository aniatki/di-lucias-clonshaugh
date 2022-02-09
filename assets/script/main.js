// Updating copyright year

let year = document.getElementsByClassName('year')[0];
year.innerText = new Date().getFullYear();

// Removing items from cart

const clearButtons = document.getElementsByClassName('clear-btn');
for (let i = 0; i < clearButtons.length; i++) {
    let button = clearButtons[i];
    button.addEventListener('click', function (event) {
        let buttonClicked = event.target;
        buttonClicked.parentElement.remove();
    })
}

// Showing / Hiding elements

const cta = document.getElementsByClassName('cta');
const heroSection = document.getElementsByClassName('hero-container');
const menu = document.getElementsByClassName('menu');
const familyForm = document.getElementsByClassName('form-fam-meal');
const familyMeal = document.getElementById('family-meal');
const submitBtn = document.getElementsByClassName('submit-family-meal');

cta[0].addEventListener('click', function (event) {
    menu[0].classList.toggle('hide');
    heroSection[0].classList.toggle('hide');
})

familyMeal.addEventListener('click', function (event) {
    familyForm[0].classList.toggle('hide');
})
submitBtn[0].addEventListener('click', function (event) {
    familyForm[0].classList.toggle('hide');
    alert('Item added to cart');
})

// Get item name and price

let btn = document.getElementsByClassName('menu-item-name');

for (var i = 0; i < btn.length; i++) {
    let setBtn = btn[i];
    setBtn.setAttribute('title', "Add to cart");
    
    setBtn.addEventListener('click', setLocalStorage);
    
    function setLocalStorage(event) {
        let btnClicked = event.target;
        var itemName = btnClicked.innerText;
        var itemPrice = btnClicked.nextElementSibling.innerText.replace('€', '');
        
        localStorage.setItem("itemName", itemName);
        localStorage.setItem("itemPrice", itemPrice);
    }    
}