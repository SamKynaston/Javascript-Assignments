let bobsFollowers = ["Marsh", "John", "Smith", "Edward"]
let hannahsFollowers = ["Marsh", "Edward", "John", "Arben"]

for (x=0; x < bobsFollowers.length; x++) {
    for (y=0; y < hannahsFollowers.length; y++) {
        if (bobsFollowers[x] == hannahsFollowers[y]) {
            console.log(true, hannahsFollowers[y])
        } else {
            console.log(false, hannahsFollowers[y])
        }
    }
}