const categories = [{
        chips: {
            title: "Chips",
            subMenu: {
                chips: {
                    name: "Chips",
                    price: 3.4,
                    allergen: [0]
                },
                garlicCheeseChips: {
                    name: "Garlic Cheese Chips",
                    price: 5.5,
                    allergen: [0, 1, 3, 5]
                },
                curryChips: {
                    name: "Curry Chips",
                    price: 5,
                    allergen: [0, 1, 4, 5]
                },
                tacoChips: {
                    name: "Taco Chips",
                    price: 6.7,
                    allergen: [0, 4]
                },
                chickenGravyChips: {
                    name: "Chicken Gravy Chips",
                    price: 5,
                    allergen: [0, 1, 3, 4, 6]
                },
                chipButty: {
                    name: "Chip Butty",
                    price: 4.5,
                    allergen: [0, 1]
                },
            }
        }
    },
    {
        fish: {
            title: "Fish",
            subMenu: {
                freshCod: {
                    name: "Fresh Cod",
                    price: 7.4,
                    allergen: [0, 2]
                },
                smokedCod: {
                    name: "Smoked Cod",
                    price: 7.2,
                    allergen: [0, 2]
                },
                codPortion: {
                    name: "Cod Portion",
                    price: 5,
                    allergen: [0, 2]
                },
                fishBox: {
                    name: "Fish Box",
                    price: 7.5,
                    allergen: [0, 2]
                }
            }
        }
    },
    {
        burgers: {
            title: "Burgers",
            subMenu: {
                halfPounder: {
                    name: "1/2lb Burger",
                    price: 6,
                    allergen: [0, 3, 4, 6, 12]
                },
                quarterPounder: {
                    name: "1/4lb Burger",
                    price: 4.7,
                    allergen: [0, 3, 4, 6, 12]
                },
                ribSteakBurger: {
                    name: "Rib Steak Burger",
                    price: 4.5,
                    allergen: [0, 1, 3, 6, 12]
                },
                saladBurger: {
                    name: "Salad Burger w/c",
                    price: 3.5,
                    allergen: [0, 1, 3, 6]
                },
                howieBurger: {
                    name: "Howie Burger",
                    price: 4.9,
                    allergen: [0, 1, 3, 11]
                },
                doubleBurger: {
                    name: "Double Burger w/c",
                    price: 4.7,
                    allergen: [0, 1, 3, 11]
                },
                bunBurger: {
                    name: "Bun Burger",
                    price: 2.8,
                    allergen: [0, 1, 3, 6]
                },
                cheeseBurger: {
                    name: "Cheese Burger",
                    price: 3,
                    allergen: [0, 1, 3, 6]
                },
                veggieBurger: {
                    name: "Veggie Burger",
                    price: 3.7,
                    allergen: [0, 1, 3, 4, 12]
                }
            }
        }
    },
    {
        southernFriedChicken: {
            title: "Southern Fried Chicken",
            subMenu: {
                juniorBox: {
                    name: "Junior Box",
                    price: 4.8,
                    allergen: [0, 3]
                },
                snackBox: {
                    name: "Snack Box",
                    price: 7.5,
                    allergen: [0, 3]
                },
                dinnerBox: {
                    name: "Dinner Box",
                    price: 8.3,
                    allergen: [0, 3]
                },
                familyBox: {
                    name: "Family Box",
                    price: 13.5,
                    allergen: [0, 3]
                },
                largeFamilyBox: {
                    name: "Large Family Box",
                    price: 25,
                    allergen: [0, 3]
                }
            }
        }
    },
    {
        chicken: {
            title: "Chicken",
            subMenu: {
                chickenTenders: {
                    name: "Chicken Tenders (7)",
                    price: 5.7,
                    allergen: [0]
                },
                chickenNuggets: {
                    name: "Chicken Nuggets (6)",
                    price: 3.5,
                    allergen: [0, 1, 3, 4, 6]
                },
                chickenBurger: {
                    name: "Chicken Burger",
                    price: 4.5,
                    allergen: [0, 1, 3, 5, 12]
                },
                chickenFilletBurger: {
                    name: "Chicken Fillet Burger",
                    price: 5.6,
                    allergen: [0, 1, 3, 5, 12]
                },
                chickenRoll: {
                    name: "Chicken Roll (with Can)",
                    price: 6.5,
                    allergen: [0, 1, 3, 4, 6]
                },
            }
        }
    },

    // WORK ON CODE BELOW

    // {
    //     "kebabs": {
    //         "title": "Kebabs",
    //         "subMenu": {
    //             "Doner Kebab": 7,
    //             "Doner Kebab Tray": 7.6,
    //             "Mixed Kebab Tray": 7.6,
    //             "Kebab Roll": 5.5,
    //             "Kebab Wrap": 5.5,
    //             "Chicken Kebab": 7,
    //             "Chicken Kebab Tray": 7.2,
    //             "Chips Kebab": 4.5,
    //             "Fish Kebab": 6,
    //             "Veggie Kebab": 5
    //         }
    //     }
    // },
    // {
    //     "sides": {
    //         "title": "Sides",
    //         "subMenu": {
    //             "Onion Rings (4)": 2.5,
    //             "Battered Sausage": 2.7,
    //             "Battered Burger": 3.6,
    //             "Plain Sausages (2)": 2.5,
    //             "Potato Cakes (2)": 1.5,
    //             "Garlic Mushrooms (10)": 4
    //         }
    //     }
    // },
    // {
    //     "sauces": {
    //         "title": "Sauces",
    //         "subMenu": {
    //             "Curry Sauce": 2.2,
    //             "Garlic Sauce": 2.2,
    //             "Kebab Sauce": 2.2,
    //             "Chicken Gravy": 2.2,
    //             "Taco Sauce": 2.2,
    //             "Ketchup": 2.2,
    //             "Mayo": 2.2
    //         }
    //     }
    // },
    // {
    //     "drinks": {
    //         "title": "Drinks",
    //         "subMenu": {
    //             "Coca-Cola (0.33L)": 1.5,
    //             "Diet Coca-Cola (0.33L)": 1.5,
    //             "Coca-Cola Zero (0.33L)": 1.5,
    //             "Fanta (0.33L)": 1.5,
    //             "Sprite (0.33L)": 1.5,
    //             "Coca-Cola (1L)": 2.7,
    //             "Diet Coca-Cola (1L)": 2.7,
    //             "Fanta (1L)": 2.7,
    //             "Sprite (1L)": 2.7,
    //         }
    //     }
    // }
]
const allergens = ['gluten', 'milk', 'fish', 'eggs', 'celery', 'mustard', 'soya', 'sulphites', 'shellfish', 'molluscs', 'peanuts', 'nuts', 'sesame', 'lupin']

const menu = document.querySelector('.menu')
const cards = document.querySelector('.cards')

const titles = function () {
    var menuTitles = []
    for (var i = 0; i < categories.length; i++) {
        menuTitles.push(Object.entries(categories[i])[0][1].title)
    }
    return menuTitles
}

const itemNames = function () {
    var menuNames = []
    for (i = 0; i < categories.length; i++) {
        var submenuArray = Object.values(Object.entries(categories[i])[0][1].subMenu)
        for (i = 0; i < submenuArray.length; i++) {
            menuNames.push(submenuArray[i].name)
        }
    }
    return menuNames
}

const itemPrices = function () {
    var menuItemPrices = []
    for (i = 0; i < categories.length; i++) {
        var submenuArray = Object.values(Object.entries(categories[i])[0][1].subMenu)
        for (i = 0; i < submenuArray.length; i++) {
            menuItemPrices.push(submenuArray[i].price)
        }
    }
    return menuItemPrices
}


const itemAllergens = function () {
    var menuItemAllergen = []
    for (i = 0; i < categories.length; i++) {
        var submenuArray = Object.values(Object.entries(categories[i])[0][1].subMenu)
        for (i = 0; i < submenuArray.length; i++) {
            menuItemAllergen.push(submenuArray[i].allergen)
        }
    }
    return menuItemAllergen
}

// WORK ON CODE BELOW

function populateMenuPage() {
    for (let title of titles()) {
        var section = document.createElement('section')
        section.classList.add('menu-card')

        var h2 = document.createElement('h2')
        h2.classList.add("menu-card-header")
        h2.innerText = `${title}`

        // for (i = 0; i < itemNames().length; i++) {
        //     var button = document.createElement('button')
        //     button.classList.add('menu-button')

        //     var spanName = document.createElement('span')
        //     spanName.classList.add('menu-item-name')
        //     spanName.innerText = `${itemNames()[i]}`
        //     button.append(spanName)
        // }

        for (let category of categories) {
            var button = document.createElement('button')
            button.classList.add('menu-button')

            var spanName = document.createElement('span')
            spanName.classList.add('menu-item-name')
            spanName.innerText = `${itemNames()[i]}`
            button.append(spanName)
        }

        // for (i = 0; i < itemPrices().length; i++) {
        //     var spanPrice = document.createElement('span')
        //     spanPrice.classList.add('menu-item-price')
        //     spanPrice.innerText = itemPrices()[i]
        //     button.append(spanPrice)
        // }

        var pInfo = document.createElement('p')
        pInfo.classList.add('allergen-info')
        pInfo.innerText = "Contains: "
        var pInfoSpan = document.createElement('span')
        // pInfoSpan.innerText = `${itemAllergens()[i]}`
        pInfo.append(pInfoSpan)
        section.append(h2, button, pInfo)
        cards.append(section)
    }
}

populateMenuPage()
