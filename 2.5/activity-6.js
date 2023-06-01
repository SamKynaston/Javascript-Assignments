function hcf(numOne, numTwo) {
    while(numOne != numTwo){
        if(numOne > numTwo) {
            numOne -= numTwo;
        }
        else {
            numTwo -= numOne;
        }
    }    

    return numOne
}

console.log(hcf(60, 72)) // 12