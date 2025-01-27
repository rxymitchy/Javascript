//funtion declaration
function guest(name){
    return `Hello ${name}`;
}
console.log(guest("Mitchelle"));

//function expression
//funtions assigned as variables cannot be called before they are defined
const add = function(a,b){
    return(a + b);
}
console.log(add(3,4));

//Arrow functions
//They are particularly useful for callbacks and one-liners.
//const functionName = (parameters) => expression;

//Basic Arrow Function
const multiply = (a, b) => a * b; console.log(multiply(3,4));

// Single Parameter (Parentheses Optional)
const square = x => x * x; console.log(square(4));

//No Parameters
const greet = () => 'Hello World'; console.log(greet());

//Parameters: Variables listed in the function definition.
//Arguments: Values passed to the function when it's called.

function greetUser(firstName, lastName) {
    return `Hello, ${firstName} ${lastName}!`;
  }
  console.log(greetUser("Mitchelle", "Luciana"));

//default parameters
function hi(name='Guest'){
    return `Hello ${name}`;
};
console.log(hi());

//Return Statement specifies the value a function should return.
//Without it, the function returns undefined.


//Scope of Variables
//Local scope = Variables declared inside a function are accessible only within that function.
//Global scope = Variables declared outside any function are accessible from anywhere.

let globalVar = "I am global";

function variables(){
    let localVar = "I am local";

    console.log(globalVar); //accesible
    console.log(localVar); //accesible
};
variables();
// console.log(localVar) - not accessible, brings an error


//Anonymous functions - without a name;used during callbacks
setTimeout(function(){
    console.log("This runs after 2 seconds");
}, 2000);


//Immediately Invoked Function Expressions (IIFE)
//Functions that execute immediately after being defined.
(function(){
    console.log("This is an IIFE!");
})();
