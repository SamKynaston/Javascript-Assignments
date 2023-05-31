let time = 19
let placeOfWork
let townOfHome

if (time == 8 || time == 18) {
    console.log("I am commuting")
} else if (time > 9 && time < 18) {
    console.log("I am at work")
} else if (time < 8 || time > 18) {
    console.log("I am at home")
}