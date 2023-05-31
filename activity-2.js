const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Topping:\n", topping => {
    switch(topping) {
        case "pepperoni": {
            console.log(`I wouldn't mind having ${topping} on a pizza.`)
            readline.close();
            break;
        }

        case "chicken": {
            console.log(`I wouldn't mind having ${topping} on a pizza.`)
            readline.close();
            break;
        }

        default: {
            console.log(`${topping} should not be on a pizza.`)
        }
    }
})