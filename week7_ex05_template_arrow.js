// TODO: Create a multiline string using template literals.
const message = `
Welcome to the site!
This text spans
multiple lines.
`;

console.log(message);

// TODO: Create a function that uses template literals for HTML generation.
const createUserCard = (name, age) => `
  <div class="user-card">
    <h2>${name}</h2>
    <p>Age: ${age}</p>
  </div>
`;

console.log(createUserCard("Alice", 25));

// TODO: Convert regular functions to arrow functions.

// Regular function:
// function add(a, b) {
//   return a + b;
// }

// Arrow function:
const add = (a, b) => a + b;

console.log(add(3, 5));

// TODO: Use arrow functions with array methods.
const numbers = [1, 2, 3, 4, 5];

// map()
const doubled = numbers.map(num => num * 2);

// filter()
const evens = numbers.filter(num => num % 2 === 0);

// reduce()
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(doubled); // [2, 4, 6, 8, 10]
console.log(evens);   // [2, 4]
console.log(sum);     // 15