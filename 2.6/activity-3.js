const coffeeShop = {
    branch: "Burnley",
    drinks: [["Hot Chocolate", 0.99], ["Black Coffee", 0.79], ["White Coffee", 0.79]],
    food: [["Donut", 1.99], ["Croissant", 1.99]],

    drinksOrdered() {
        totalCost = 0
        for (i=0; i < this.drinks.length; i++) {
            console.log(this.drinks[i][0])
            totalCost += this.drinks[i][1]
        }
        totalCost = totalCost.toFixed(2)
        console.log(`Your Order is ${totalCost}`)
    },

    foodOrdered() {
        totalCost = 0
        for (i=0; i < this.food.length; i++) {
            console.log(this.food[i][0])
            totalCost += this.food[i][1]
        }
        totalCost = totalCost.toFixed(2)
        console.log(`Your Order is ${totalCost}`)
    }
}

coffeeShop.drinksOrdered()
coffeeShop.foodOrdered()