let string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
let vowels =  ['a','e','i','o','u'];

const lastVowel = Math.max.apply(null, vowels.map(letter => string.lastIndexOf(letter)));
console.log(lastVowel, string[lastVowel]);