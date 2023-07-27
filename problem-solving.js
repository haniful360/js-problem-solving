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

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

const numbers2 =  [3, 5, 2, 5, 3, 3, 1, 4, 5]


//task:4 Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
const numbers3 =  [23, 455, 2, 56, 33, 39, 13, 4, 25]

const getSecondLargestNumber = () =>{

    let largeNum = 0;
    let secondLargeNum = 0;
    for(const number of numbers3){
        if(number > largeNum){
             secondLargeNum = largeNum
            largeNum = number
        }
        else if(number > secondLargeNum){
            secondLargeNum = number
        }
    }
    return secondLargeNum;
    
}

const output3 =getSecondLargestNumber();
console.log(output3); 
