let orderCount = 0;

const takeOrder = (topping, base) => {
    orderCount++;
    console.log(`Pizza w/ ${topping} & ${base} base`)
}

takeOrder("Pepperoni", "Normal")
