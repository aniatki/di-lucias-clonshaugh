// Showing / Hiding elements

const cta = document.getElementsByClassName('cta');
const heroSection = document.getElementsByClassName('hero-container');
const menu = document.getElementsByClassName('menu');

cta[0].addEventListener('click', _ => {
    menu[0].classList.toggle('hide');
    heroSection[0].classList.toggle('hide');
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