let currentDate = new Date();
let birthDate = new Date("2003-08-06")

let differenceInTime = (currentDate.getTime()-birthDate.getTime())

console.log(Math.round(differenceInTime / (1000 * 3600 * 24)))