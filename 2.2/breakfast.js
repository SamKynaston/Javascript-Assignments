const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("What did you eat for breakfast?\n", breakfast => {
    readline.question(`What did you eat for lunch?\n`, lunch => {
        readline.question(`What did you eat for tea?\n`, tea => {
            console.log(`Breakfast: ${breakfast}\nLunch: ${lunch}\nTea: ${tea}`);
            readline.close();
        })
    })
})