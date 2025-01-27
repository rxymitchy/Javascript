let myName = "Mitchelle"; //string
const max_age = 120; //constant value
let age = 22; //age
let greeting = "Hello " +(myName);

let favcolors = ['pink', 'purple', 'black', 'white']; //array
let user = {name: 'Mitchelle', age: 22, role: 'Developer'};//pbjest

console.log(greeting);
console.log(user);
console.log(favcolors);
console.log(max_age);

let a = 10, b = 5;
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a % b);

let c = 5, d = '5';
console.log(c == d);
console.log(c === d);
console.log(c != d);
console.log(c !== d);

let isAdult = true;
let hasID = false;

console.log(isAdult && hasID);
console.log(isAdult || hasID);
console.log(!isAdult);

console.log(typeof "Hello");
console.log(typeof [2, 3]);

let x = (2, 3); //returns the last value
console.log(x);

let maritalstatus = null;
console.log(maritalstatus);
let defaultstatus = maritalstatus ?? "Single";
console.log(defaultstatus);