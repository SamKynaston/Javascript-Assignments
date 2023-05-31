const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

while (true) {
    readline.question("Password: ", password => {
        if (password.length < 8) {
            console.log("this password is too short!")
        } else {
            console.log(password)
        }
        readline.close();
    })
    break;
}