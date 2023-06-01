let count = 6

for (x=0; x!=count; x++) {
    let x = Math.round(Math.random() * 30);

    if (x%7==0) {
        console.log(true, x)
    } else {
        console.log(false, x)
    }
}