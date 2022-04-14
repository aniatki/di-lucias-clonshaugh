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

if (document.querySelector(".menu")) {
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

    let articles= document.getElementsByClassName("menu-item-card")

    for (let i = 0; i < articles.length; i++) {
        let article = articles[i]
        let itemNames = article.querySelectorAll(".menu-item-name")
        for (let j = 0; j < itemNames.length; j++) {
            let itemName = itemNames[j]
            itemName.addEventListener('click', handleButtonClick)
        }
    }

    function handleButtonClick(event) {
        let name = event.target.innerText
        let price = parseFloat(event.target.nextElementSibling.innerText.replace("€ ", ""))
        return name, price
    }
}
// Create list items for cart page

if (document.querySelector('.cart-container')) {
    // Code for adding items to the cart
}