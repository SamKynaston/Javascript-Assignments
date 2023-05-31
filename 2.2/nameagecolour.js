const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("What is your Name?\n", name => {
    readline.question(`How old are you, ${name}?\n`, age => {
        readline.question(`What is your favourite colour, ${name}?\n`, colour => {
            console.log(`Hi ${name}!, I see that you are ${age} year(s) old and your favourite colour is ${colour}!`)
            readline.close();
        })
    })
})