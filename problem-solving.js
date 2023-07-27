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

// 2.Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
const numbers = [2, -5, 10, -3, 7]

const addPositiveNumbers = () => {
    let sum = 0;
    for (const number of numbers) {
        if (number > 0) {
            sum += number
        }
    }
    return sum;

}
const output2 = addPositiveNumbers()
console.log(output2);