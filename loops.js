/*FOR LOOP - repeats same code a specific number of timess
for (initialization; condition; increment/decrement) {
  // Code to execute
}
Initialization: Set the starting value of the loop variable.
Condition: Check if the loop should continue. If true, the loop runs; otherwise, it stops.
Increment/Decrement: Update the loop variable after each iteration */

for(i=1; i<=5; i++){
    console.log(`Count: ${i}`);
};


/*WHILE LOOP - continues as long as the specified condition is true.
Use it when you don’t know beforehand how many iterations you need.
while (condition) {
  // Code to execute
} */

let num = 1;
while (num <=5){
    console.log(`Number: ${num}`);
    num++; //increment to avoid infinite loop
};


/*DO WHILE LOOP
similar to while loop but guarantees the block of code will run
at least once, even if the condition is initially false.
do {
  // Code to execute
} while (condition); */

let count = 6;
do{
    console.log(`Value ${count}`);
    count ++;
}while(count <=5); //even if it is greater it shows the value of count


/* FOR IN LOOP -used to iterate over properties of an object or indices of an array
for (key in object) {
  // Code to execute
} */

const person ={name:"Mitchelle", age:22, role:"Developer"};

for(let key in person){
    console.log(`${key}: ${person[key]}`);
};


/* for..of loop -used to iterate over iterable objects such as arrays, strings, or sets
for (variable of iterable) {
  // Code to execute
} */

const fruits = ['apple', 'orange', 'banana', 'passion'];

for(let fruit of fruits){
    console.log(`I love ${fruit}`);
};

//Special Keywords in Loops

//Break - exits when condition is met
for(i=1; i<=10; i++){
    if(i===5){
        break;//stops at 5
    }
    console.log(i);
};

//Continue -skips the current iteration and moves to the next
for(j=0; j<=10; j++){
    if(j ===7){
        continue;
    }
    console.log(`Digit: ${j}`);
};


//NESTED LOOPS
for(i=1; i<=5; i++){
    for(j=1; j<=5; j++){
        console.log(`${i} x ${j} : ${i * j}`);
    }
}

//STRING LOOP
const myname = "Mitchelle"
for(let char of myname){
    console.log(char);
};

//ARRAY LOOP
const numbers = [10, 20, 30];
for(let num of numbers){
    console.log(num);
};