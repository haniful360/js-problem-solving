//1. Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

const isReversedString = (text) => {
    let reverseString = '';
    for (let i = text.length - 1; i >= 0; i--) {
        reverseString += text[i]
    }
    return reverseString;
}

const output1 = isReversedString('hello world')
console.log(output1);

