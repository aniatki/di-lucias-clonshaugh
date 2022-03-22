const categories = [{
        "chips": {
            "title": "Chips",
            "subMenu": {
                "chips": {
                    name: "Chips",
                    price: 3.4,
                    allergen: [0]
                },
                "garlicCheeseChips": {
                    name: "Garlic Cheese Chips",
                    price: 5.5,
                    allergen: [0, 1, 3, 5]
                },
                "curryChips": {
                    name: "Curry Chips",
                    price: 5,
                    allergen: [0, 1, 4, 5]
                },
                "tacoChips": {
                    name: "Taco Chips",
                    price: 6.7,
                    allergen: [0, 4]
                },
                "chickenGravyChips": {
                    name: "Chicken Gravy Chips",
                    price: 5,
                    allergen: [0, 1, 3, 4, 6]
                },
                "chipButty": {
                    name: "Chip Butty",
                    price: 4.5,
                    allergen: [0, 1]
                },
            }
        }
    },

    {
        "fish": {
            "title": "Fish",
            "subMenu": {
                "Fresh Cod": 7.4,
                "Smoked Cod": 7.2,
                "Cod Portion": 5,
                "Fish Box": 7.5,
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

const menuPage = document.querySelector('.menu')
console.log(menuPage)

function getMenuData() {
    for (let category of categories) {
        let titles = Object.values(category)[0].title;
        let entry = Object.values(category)[0].subMenu;
        let names = Object.keys(entry);
        let prices = Object.values(entry);
        for (var i = 0; i < names.length; i++) {
            let newCard = document.createElement("div");
            newCard.innerHTML =

                `<section class="menu-card">
            <h2 class="menu-card-header">${titles}</h2>
                <button class="menu-button">
                    <span class="menu-item-name">${names[i]}</span>
                    <span class="menu-item-price">&euro; ${(Math.round(prices[i] * 100) / 100).toFixed(2)}</span>
                </button>
                <p class="allergen-info">Contains: <span>Gluten, Dairy, Egg</span></p>
            </section>`
            // document.body.append(newCard)
        }
    }
}

const allergens = ['gluten', 'milk', 'fish', 'eggs', 'celery', 'mustard', 'soya', 'sulphites', 'shellfish', 'molluscs', 'peanuts', 'nuts', 'sesame', 'lupin']

// getMenuData()