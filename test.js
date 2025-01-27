const inquirer = require("inquirer"); // Importing inquirer

// Simple calculator function using async/await
async function calculator() {
  try {
    // Using await with inquirer.prompt for getting user input
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "num1",
        message: "Enter the first number: ",
        validate: (input) => !isNaN(input) || "Please enter a valid number."
      },
      {
        type: "input",
        name: "num2",
        message: "Enter the second number: ",
        validate: (input) => !isNaN(input) || "Please enter a valid number."
      },
      {
        type: "list",
        name: "operation",
        message: "Choose an operation (+, -, *, /): ",
        choices: ["+", "-", "*", "/"]
      }
    ]);

    const num1 = parseFloat(answers.num1);
    const num2 = parseFloat(answers.num2);
    const operation = answers.operation;

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
          console.log("Division by zero is not allowed.");
          return;
        }
        result = num1 / num2;
        break;
      default:
        console.log("Invalid operation.");
        return;
    }

    console.log(`Result: ${result}`);
  } catch (error) {
    console.error("Error during prompt:", error);
  }
}

// Call the calculator function
calculator();
