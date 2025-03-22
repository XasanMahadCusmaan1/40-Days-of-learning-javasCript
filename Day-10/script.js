console.log("Day 10");

// 4 Types of Scope in JavaScript
// 1. Global Scope
// 2. Function Scope
// 3. Block Scope
// 4. Module Scope

// Global Scope
// Variables declared outside of any function or block scope
// are in the global scope

let name = "Tapas";

function greeting() {
  console.log("Hello ", name);
}

greeting();

console.log(name); // "Tapas"

{
  console.log("Inside Block", name);
}

// Function Scope: Variables declared inside a function are only
// accessible within that function.

function toDo() {
  let task = "Learning 40 days of JS";
  console.log(task);
}

toDo();

// console.log(task);

// Block Scope: Variables declared using let and const inside {} cannot be accessed outside the block.

{
  let count = 10;
  console.log(count);
}

// console.log(count)

// Scope Chain

let globalVar = "I am a Global Variable";

function outer() {
  let outerVar = "I am an Outer Variable";

  function inner() {
    let innerVar = "I am an Inner Variable";

    console.log(innerVar); // "I am an Inner Variable"
    console.log(outerVar); // "I am an Outer Variable"
    console.log(globalVar); // "I am a Global Variable"
  }

  inner();
}

outer();

// console.log(outerVar); // Reference Error

var count = 10;

function outer() {
  // var count = 20;

  function inner() {
    //var count = 30;
    console.log(count); // 10
  }
  inner();
  console.log(count); // 10
}

outer();
console.log(count); // 10

// Variable Shadowing

let message = "I am doing great";

function situation() {
  let message = "I am not doing great";
  console.log(message); // I am not doing great
}

situation();
console.log(message); // I am doing great

console.log("+++++++++++++TASK SOLUTIONS++++++++++++++");
//TASK SOLUTIONS

// 1. What will be the output of the following code and why?

let user = "Alice";

function outer() {
  function inner() {
    console.log(user);
  }
  let user = "Bob";
  inner();
}

outer();

// solution
// Bob becouse the nearest user var is the one inside the outer function
// becouse javasCript uses what is called scope chain.

// 2. What is the mistake in the code below?

let total = 0; // Global, bad practice

function add(num) {
  total += num;
}

add(5);
add(10);
console.log(total);

//solution
// the mistake is total variable declaring for the global insted of the function .

// 3. Create a function with a nested function and log a variable from the parent function.

function parent() {
  let parentName = "alice";

  function child() {
    console.log(parentName);
  }

  child();
}

parent();

// 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

function heyLoop() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }

  // console.log(i) // i is not difined error
}

heyLoop();

// solution

// i cant access it.

// 5. Write a function that tries to access a variable declared inside another function.

function func1() {
  let me = "Hassan";
  console.log(me);
}

function func2() {
  console.log(me);
}

// func2(); me is not difined error

// 6: What will be the output and why?

// console.log(a); // Reverence error
let a = 10;

// solution

//becouse of hositing can't access varaible before initialization.

// 7. Where is the age variable accessible?

// function showAge() {
//   let age = 25;
//   console.log(age);
// }

// console.log(age);

// solution

// B: only showAge function


// 8: What will be the output and explain the output?

let messages = "Hello";

function outer() {
  let messages = "Hi";

  function inner() {
    console.log(messages); // "Hi"
  }

  inner();
}

outer();

/*
solution

the output is gona be 'Hi' becouse of variable shadowing.
when i log the messages var inside inner func it looks the nearest messages var wich is 'Hi'
thats why it logs 'Hi' this mechanism is called scope chain
*/

// 9. What will be the output and why?

let x = "Global";

function outer() {
  let x = "Outer";

  function inner() {
    let x = "Inner";
    console.log(x); // 'Inner'
  }

  inner();
}

outer();

/*
 solution

 the output is 'Inner' the nearest x variable is the one in the inner func.
*/

// 10. What will be the output and why?

function counter() {
  let count = 0;
  return function () {
    count--;
    console.log(count);
  };
}

const reduce = counter();
reduce(); // -1
reduce(); // -2

/*
 solution

 the output is -1 and -2 becouse count var is declared outer func wich is counter,
 the inner funcion can access the outer func vars thats why every time i call reduce 
 i see new updated number even if it returns and gone the counter func.

*/
