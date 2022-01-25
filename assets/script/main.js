const cta = document.getElementsByClassName('cta')[0];
const heroSection = document.getElementsByClassName('hero-container')[0];
const menu = document.getElementsByClassName('menu')[0];

cta.addEventListener('click', _ => {
    menu.classList.toggle('hide');
    heroSection.classList.toggle('hide');
})

const year = document.getElementById('year');
const nd = new Date();
year.innerText = nd.getFullYear();