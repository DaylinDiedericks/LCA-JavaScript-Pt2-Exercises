// 1. Function called 'multiply'
// The arguments must NOT be the same number
function multiply(num1, num2, num3) {
    if (num1 === num2 || num1 === num3 || num2 === num3) {
        return "All numbers must be different";
    }

    return num1 * num2 * num3;
}

// Example:
console.log(multiply(2, 3, 4)); // 24
console.log(multiply(2, 2, 4)); // All numbers must be different


// 2. Function expression called 'convertToSeconds'
const convertToSeconds = function(minutes) {
    return minutes * 60;
};

// Example:
console.log(convertToSeconds(5)); // 300


// 3. Function called 'fahrenheitToCelsius'
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Example:
console.log(fahrenheitToCelsius(68)); // 20


// 4. Function that reverses a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example:
console.log(reverseString("JavaScript")); // tpircSavaJ


// 5. Function that counts vowels
function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Example:
console.log(countVowels("Javascript")); // 3


// 6. Function called 'isPrime'
function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

// Testing with 4 numbers
console.log(isPrime(2));  // true
console.log(isPrime(7));  // true
console.log(isPrime(10)); // false
console.log(isPrime(15)); // false