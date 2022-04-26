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

function handleButtonClick(event) {
    let name = event.target.innerText
    let price = event.target.nextElementSibling.innerText.replace("€ ", "")
    price = (Math.round((parseFloat(price)) * 100) / 100).toFixed(2)
    
    localStorage.setItem(name, name)
    localStorage.setItem(`priceOf${name}`, price)
    console.log(localStorage)
}

function createCartElement() {
    if (localStorage.length == 0) return

    for (var i = 0; i < localStorage.length; i++) {
        console.log(localStorage[i])
    }

    // let itemName = localStorage.getItem("itemName")
    // let itemPrice = localStorage.getItem("itemPrice")

    // let newItem = document.createElement('li')
    // newItem.classList.add("cart-row")
    
    // let namePElem = document.createElement('p')
    // namePElem.classList.add('item-name')
    // namePElem.innerHTML = `${itemName}`
    // newItem.append(namePElem)
    
    // let quantityInpElem = document.createElement('input')
    // quantityInpElem.classList.add('quantity-value', 'right-align')
    // quantityInpElem.setAttribute('type', 'number')
    // quantityInpElem.setAttribute('value', 1)
    // quantityInpElem.setAttribute('min', 1)
    // newItem.append(quantityInpElem)

    // let deleteButton = document.createElement('button')
    // deleteButton.classList.add('clear-btn')
    // deleteButton.innerHTML = `&times;`
    // newItem.append(deleteButton)

    // let pricePElem = document.createElement('p')
    // pricePElem.classList.add("price-value", "right-align")
    // pricePElem.innerHTML = `€ ${itemPrice}`
    // newItem.append(pricePElem)

    // return newItem
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

    // Click event for menu buttons

    let articles= document.getElementsByClassName("menu-item-card")

    for (let i = 0; i < articles.length; i++) {
        let article = articles[i]
        let itemNames = article.querySelectorAll(".menu-item-name")
        for (let j = 0; j < itemNames.length; j++) {
            let itemName = itemNames[j]
            itemName.addEventListener('click', handleButtonClick)
        }
    }
}

if (document.querySelector('.cart-container')) {    
//     let cart = document.getElementById('tableBody')
//     let newElement = createCartElement()
//     window.addEventListener('load', cart.prepend(newElement))
    createCartElement()   
}