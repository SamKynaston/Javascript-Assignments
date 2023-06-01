function splitter(sentence) {
    sentence.split(" ").map(word => console.log(word))
    let arr = sentence.split(" ")
    return arr.length
}

console.log(splitter("Hello world"), "word(s)")