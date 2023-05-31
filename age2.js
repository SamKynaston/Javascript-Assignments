const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("How old are you?\n", age => {
    readline.question("Whare are you based?\n", country => {
        if (age > 17 && country == "UK") {
            console.log("Yes, I can serve you.")
        } else {
            console.log("I cannot serve you.")
        }
        readline.close();
    })
})