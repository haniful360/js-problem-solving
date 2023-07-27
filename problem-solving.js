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

function findMostFrequentElement(numArray) {
    
    const frequencyMap = {};
    for (const num of numArray) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    let mostFrequentElement;
    let highestFrequency = 0;
  
    for (const num in frequencyMap) {
      if (frequencyMap[num] > highestFrequency) {
        mostFrequentElement = num;
        highestFrequency = frequencyMap[num];
      }
    }
  
    return parseInt(mostFrequentElement, 10); 
  }
  

  const numArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const output4 = findMostFrequentElement(numArray);
  console.log(output4);


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

// task: 5 Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function findTwoNumbersWithSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const sum = arr[left] + arr[right];
  
      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    return [];
  }
  
  const inputArray = [1, 3, 6, 8, 11, 15];
  const targetValue = 9;
  const result = findTwoNumbersWithSum(inputArray, targetValue);
  console.log(result);


//   task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_-+=<>?/{}~|';
  
    const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
    let password = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters.charAt(randomIndex);
    }
  
    return password;
  }
  
  const passwordLength = 12;
  const randomPassword = generateRandomPassword(passwordLength);
  console.log(randomPassword);
  
  