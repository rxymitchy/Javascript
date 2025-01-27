// Part 1: JavaScript Basics
// Variables and Data Types

// Declare variables of different types
let name = "Mitchelle"; // string
let age = 22; // number
let isStudent = true; // boolean
let hobbies = ["art", "coding", "music"]; // array
let person = { name: "Mitchelle", age: 22, role: "developer" }; // object

// Log values and types to the console
console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);

// Operators: Simple calculator
window.onload = function () {
  // Prompt user for numbers and operation
  let num1 = prompt("Enter the first number:");
  let num2 = prompt("Enter the second number:");
  let operation = prompt("Choose an operation (+, -, *, /):");

  // Convert inputs to numbers
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  // Get the output div from the DOM
  const outputDiv = document.getElementById("output");

  // Validate inputs and perform calculation
  if (isNaN(num1) || isNaN(num2)) {
    outputDiv.textContent = "Please enter valid numbers.";
  } else {
    let result;
    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          outputDiv.textContent = "Division by zero is not allowed.";
          return;
        }
        result = num1 / num2;
        break;
      default:
        outputDiv.textContent = "Invalid operation.";
        return;
    }

    outputDiv.textContent = `Result: ${result}`;
  }

  // Functions: Greet User function
  function greetUser(name) {
    return `Hello, ${name}! Welcome to the JavaScript world.`;
  }

  // Show greeting message in the dynamic-content div
  const dynamicContentDiv = document.getElementById("dynamic-content");
  dynamicContentDiv.textContent = greetUser(name);
  
  // Part 2: JavaScript Control Structures
  // If Statements: Check if user is eligible to vote
  let userAge = prompt("What is your age?");
  userAge = parseInt(userAge); // Convert to number

  const ageOutputDiv = document.getElementById("age-output");
  if (userAge >= 18) {
    ageOutputDiv.textContent = "You are eligible to vote!";
  } else {
    ageOutputDiv.textContent = "You are not eligible to vote.";
  }

  // Loops: Display numbers from 1 to 10
  const numberList = document.getElementById("number-list");
  for (let i = 1; i <= 10; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = i;
    numberList.appendChild(listItem);
  }

  // Part 3: Introduction to the DOM
  // Change the text of the <h1> element to "JavaScript in Action!"
  const heading = document.querySelector("h1");
  heading.textContent = "JavaScript in Action!";

  // Add a new <p> inside the dynamic-content <div>
  const newPara = document.createElement("p");
  newPara.textContent = "This content was added dynamically using JavaScript.";
  dynamicContentDiv.appendChild(newPara);
};
