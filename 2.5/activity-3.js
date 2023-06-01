const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})


pinNumber = 1234
balance = 1000

function verifyIdentity(attempt) {
    if (attempt == pinNumber) {
        return true
    }
    return false
}

function withdraw(amt) {
    if (amt <= balance) {
        balance = (balance-amt)
        return true
    }
    return false
}

for (x=0; x<3; x++) {
    readline.question("Passcode:\n", code => {
        if (verifyIdentity(code) == true) {
            readline.question("Amount:\n", amt => {
                if (withdraw) {
                    console.log("Thanks for your business!")
                    readline.close();
                }
            })
        } else {
            console.log("Try Again!")
        }
    })
}