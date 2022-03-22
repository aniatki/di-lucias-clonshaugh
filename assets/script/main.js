const categories = [{
        "chips": {
            "title": "Chips",
            "subMenu": {
                "chips": {
                    "name": "Chips",
                    "price": 3.4,
                    "allergen": [0]
                },
                "garlicCheeseChips": {
                    "name": "Garlic Cheese Chips",
                    "price": 5.5,
                    "allergen": [0, 1, 3, 5]
                },
                "curryChips": {
                    "name": "Curry Chips",
                    "price": 5,
                    "allergen": [0, 1, 4, 5]
                },
                "tacoChips": {
                    "name": "Taco Chips",
                    "price": 6.7,
                    "allergen": [0, 4]
                },
                "chickenGravyChips": {
                    "name": "Chicken Gravy Chips",
                    "price": 5,
                    "allergen": [0, 1, 3, 4, 6]
                },
                "chipButty": {
                    "name": "Chip Butty",
                    "price": 4.5,
                    "allergen": [0, 1]
                },
            }
        }
    },
    {
        "fish": {
            "title": "Fish",
            "subMenu": {
                "freshCod": {
                "name": "Fresh Cod", 
                "price": 7.4,
                "allergen": [0, 2]
                },
                "smokedCod": {
                    "name": "Smoked Cod", 
                    "price": 7.2, 
                    "allergen": [0, 2]
                },
                "codPortion": {"name": "Cod Portion", "price": 5, "allergen": [0, 2]
                },
                "fishBox": {"name": "Fish Box", "price": 7.5, "allergen": [0, 2]
                }
            }
        }
    },
    {
        "burgers": {
            "title": "Burgers",
            "subMenu": {
                "1/2lb Burger": 6,
                "1/4lb Burger w/c": 4.7,
                "Rib Steak Burger": 4.5,
                "Salad Burger w/c": 3.5,
                "Howie Burger": 4.9,
                "Double Burger w/c": 4.7,
                "Bun Burger": 2.8,
                "Cheese Burger": 3,
                "Veggie Burger": 3.7
            }
        }
    },
    {
        "southernFriedChicken": {
            "title": "Southern Fried Chicken",
            "subMenu": {
                "Junior Box": 4.8,
                "Snack Box": 7.5,
                "Dinner Box": 8.3,
                "Family Box": 13.5,
                "Large Family Box": 25,
                "Leg": 2.5,
                "Thigh": 2.5,
                "Wing": 2.5,
                "Breast": 4
            }
        }
    },
    {
        "chicken": {
            "title": "Chicken",
            "subMenu": {
                "Chicken Tenders (7)": 5.7,
                "Chicken Nuggets (6)": 3.5,
                "Chicken Burger": 4.5,
                "Chicken Fillet Burger": 5.6,
                "Chicken Roll (with Can)": 6.5
            }
        }
    },
    {
        "kebabs": {
            "title": "Kebabs",
            "subMenu": {
                "Donner Kebab": 7,
                "Donner Kebab Tray": 7.6,
                "Mixed Kebab Tray": 7.6,
                "Kebab Roll": 5.5,
                "Kebab Wrap": 5.5,
                "Chicken Kebab": 7,
                "Chicken Kebab Tray": 7.2,
                "Chips Kebab": 4.5,
                "Fish Kebab": 6,
                "Veggie Kebab": 5
            }
        }
    },
    {
        "sides": {
            "title": "Sides",
            "subMenu": {
                "Onion Rings (4)": 2.5,
                "Battered Sausage": 2.7,
                "Battered Burger": 3.6,
                "Plain Sausages (2)": 2.5,
                "Potato Cakes (2)": 1.5,
                "Garlic Mushrooms (10)": 4
            }
        }
    },
    {
        "sauces": {
            "title": "Sauces",
            "subMenu": {
                "Curry Sauce": 2.2,
                "Garlic Sauce": 2.2,
                "Kebab Sauce": 2.2,
                "Chicken Gravy": 2.2,
                "Taco Sauce": 2.2,
                "Ketchup": 2.2,
                "Mayo": 2.2
            }
        }
    },
    {
        "drinks": {
            "title": "Drinks",
            "subMenu": {
                "Coca-Cola (0.33L)": 1.5,
                "Diet Coca-Cola (0.33L)": 1.5,
                "Coca-Cola Zero (0.33L)": 1.5,
                "Fanta (0.33L)": 1.5,
                "Sprite (0.33L)": 1.5,
                "Coca-Cola (1L)": 2.7,
                "Diet Coca-Cola (1L)": 2.7,
                "Fanta (1L)": 2.7,
                "Sprite (1L)": 2.7,
            }
        }
    }
]
const allergens = ['gluten', 'milk', 'fish', 'eggs', 'celery', 'mustard', 'soya', 'sulphites', 'shellfish', 'molluscs', 'peanuts', 'nuts', 'sesame', 'lupin']


let year = document.getElementsByClassName('year')[0];
year.innerText = new Date().getFullYear();


const hamburgerMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.nav');
hamburgerMenu.addEventListener('click', function (event) {
    nav.classList.toggle('hidden')
})


// for (let category of categories) {

//     let titles = Object.values(category)[0].title;
//     document.body.append(h2)
//     let entry = Object.values(category)[0].subMenu;
//     let names = Object.keys(entry);
//     let prices = Object.values(entry);

//     const body = document.body
//     const menu = body.querySelector('.menu')

//     var section = document.createElement('section')
//     section.classList.add('menu-card')

//     var h2 = document.createElement('h2')
//     h2.classList.add("menu-card-header")
//     h2.innerHTML = `${category[titles]}`

//     var button = document.createElement('button')
//     button.classList.add('menu-button')

//     var span = document.createElement('span')
//     var spanName = span
//     var spanPrice = span
//     spanName.classList.add('menu-item-name')
//     spanName.innerHTML(`${names[i]}`)
//     spanPrice.classList.add('menu-item-price')
//     spanPrice.innerHTML(`${(Math.round(prices[i] * 100) / 100).toFixed(2)}`)

//     var pInfo = document.createElement('p')
//     pInfo.classList.add('allergen-info')
//     pInfo.innerText = "Contains: "
//     var pInfoSpan = span
//     pInfoSpan.innerText = `${allergens}`




// }