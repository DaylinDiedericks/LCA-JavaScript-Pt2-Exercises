// TODO: Create a global variable called globalCount.
let globalCount = 100;


// TODO: Create a function that demonstrates local scope.
function localScopeExample() {
    let localCount = 50;

    console.log("Inside function:");
    console.log("Local Variable:", localCount);
    console.log("Global Variable:", globalCount);
}

localScopeExample();


// TODO: Create a function that tries to modify both variables.
function modifyVariables() {
    let localCount = 10;

    // Modifying global variable
    globalCount += 20;

    // Modifying local variable
    localCount += 5;

    console.log("Modified Global Variable:", globalCount);
    console.log("Modified Local Variable:", localCount);
}

modifyVariables();

console.log("Global Variable outside function:", globalCount);

// This will cause an error because localCount only exists inside the function
// console.log(localCount);


// TODO: Create a Student constructor function.
function Student(firstName, lastName, age, course) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.course = course;

    this.introduce = function () {
        console.log(
            "Hi, my name is " +
            this.firstName +
            " " +
            this.lastName +
            ". I study " +
            this.course + "."
        );
    };
}


// TODO: Create several student instances.
let student1 = new Student("Alice", "Johnson", 20, "Computer Science");
let student2 = new Student("Brian", "Smith", 22, "Engineering");
let student3 = new Student("Cindy", "Brown", 19, "Mathematics");

console.log(student1);
console.log(student2);
console.log(student3);

student1.introduce();
student2.introduce();
student3.introduce();


// TODO: Create an object literal with nested properties.
let person = {
    firstName: "John",
    lastName: "Doe",

    address: {
        street: "123 Main Street",
        city: "Cape Town",
        country: "South Africa"
    },

    hobbies: {
        indoor: ["Reading", "Gaming"],
        outdoor: ["Cycling", "Hiking"]
    }
};

console.log(person);

// Accessing nested properties
console.log(person.address.city);          // Cape Town
console.log(person.hobbies.outdoor[0]);   // Cycling