const restaurants = {
    hatem: {
        name: "Hatem",
        imgUrl: require("../assets/hatem.jpg"),
        specials: [
            { name: "Beef Burger" },
            { name: "Sausage Sandwich" },
            { name: "Pepperoni Pizza" },
            { name: "Veggie Wrap" },
            { name: "Cajun Fries" },
            { name: "Chicken Taco" },
            { name: "Turkey Taco" }
        ]
    },
    madona: {
        name: "Madona Cafe",
        imgUrl: require("../assets/madona.jpg"),
        specials: [
            { name: "Choco Cookie" },
            { name: "Plain Waffles" },
            { name: "Expresso" },
            { name: "Butter Pancakes" },
            { name: "Maple Custard" },
            { name: "Sprinke Donut" },
            { name: "Apple Pie" }
        ]
    },
    caviche: {
        name: "Caviche",
        imgUrl: require("../assets/caviche.jpg"),
        specials: [
            { name: "Zen Platter" },
            { name: "Fish Broth" },
            { name: "Cajun Shrimp" },
            { name: "Spicy Ramen" },
            { name: "Dumpling" },
            { name: "Yakuza Platter" },
            { name: "Tokyo Sushi" }
        ]
    }
}

export default restaurants;