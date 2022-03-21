let year = document.getElementsByClassName('year')[0];
year.innerText = new Date().getFullYear();

const hamburgerMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.nav');
hamburgerMenu.addEventListener('click', function (event) {
    nav.classList.toggle('hidden')
})

var menuCardHeader


function populateHtml() {
    `<section class="menu-card">
        <h2 class="menu-card-header">${menuCardHeader}</h2>
        <button class="menu-button">
            <span class="menu-item-name">Chips</span>
            <span class="menu-item-price">3.40</span>
        </button>
        <p class="allergen-info">Contains: <span>Gluten, Dairy, Egg</span></p>
    < /section>`
}