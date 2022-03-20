let year = document.getElementsByClassName('year')[0];
year.innerText = new Date().getFullYear();

const hamburgerMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.nav');
hamburgerMenu.addEventListener('click', function (event) {
    nav.classList.toggle('hidden')
})