// TODO: Create a function called sum.
function sum(n) {
    // Check if the value is a number and an integer
    if (typeof n !== "number" || n % 1 !== 0) {
        return "The value passed is not a number";
    }

    let total = 0;

    for (let i = 0; i <= n; i++) {
        total += i;
    }

    return total;
}

// Tests for sum()
console.log(sum(5));      // 15
console.log(sum(10));     // 55
console.log(sum("5"));    // The value passed is not a number
console.log(sum(4.5));    // The value passed is not a number


// TODO: Create a function called factorial
function factorial(num) {
    let result = 1;
    let output = "";

    for (let i = num; i >= 1; i--) {
        result *= i;

        output += i;

        if (i !== 1) {
            output += "*";
        }
    }

    console.log(output + " = " + result);
}

// Tests for factorial()
factorial(4); // 4*3*2*1 = 24
factorial(5); // 5*4*3*2*1 = 120


// TODO: Create a function called funkyMath
function funkyMath(a, b, c, d) {

    // 2 arguments
    if (arguments.length === 2) {
        return b - a;
    }

    // 3 arguments
    if (arguments.length === 3) {
        return a + b + c;
    }

    // 4 arguments
    if (arguments.length === 4) {
        return (a + b) / (c + d);
    }

    return "Invalid number of arguments";
}

// Tests for funkyMath()
console.log(funkyMath(5, 10));       // 5
console.log(funkyMath(1, 2, 3));     // 6
console.log(funkyMath(8, 2, 3, 5));  // 1.25


// TODO: Remove odd numbers and place them in a new array
let numbers = [1, 2, 33, 45, 6, 44];

let oddNumbers = [];
let evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 !== 0) {
        oddNumbers.push(numbers[i]);
    } else {
        evenNumbers.push(numbers[i]);
    }
}

// Bonus: Sort odd numbers from smallest to biggest
oddNumbers.sort(function(a, b) {
    return a - b;
});

console.log("Even Numbers:", evenNumbers); // [2, 6, 44]
console.log("Odd Numbers:", oddNumbers);   // [1, 33, 45]


// TODO: Create an object called 'me'
let me = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    favouriteColour: "Blue",
    dreamCar: "Ferrari"
};

console.log(me);


// TODO: Add favourite food property
me.favouriteFood = "Pizza";

console.log(me);


// TODO: Delete the age property
delete me.age;

console.log(me);