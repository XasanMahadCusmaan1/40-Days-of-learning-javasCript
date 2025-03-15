console.log("day 05");

// for loop
// “A for loop is best when we know exactly how many times we need to run a block of code.”

/*
 for (initialization; condition; update) {
    // Code
 }
*/

for (let count = 1; count <= 5; count++) {
  console.log("Iteration/Loop", count);
}

// Addition of even numbers between 1 to 100

let sum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    //console.log("i", i)
    //sum = sum + i;
    sum += i;
  }
}

console.log("Sum is", sum);

let language = "JavaScript";

for (let i = 0; i < language.length; i++) {
  console.log(language.charAt(i));
}

// Nested Loop

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log("Row", i, "Col", j);
  }
}

// Break and Continue

for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}

// Continue

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

// Multiple Counters for single loop

for (let i = 1, j = 10; i <= 10 && j >= 1; i++, j--) {
  console.log(i, j);
}

/*
 *
 * *
 * * *
 * * * *
 * * * * *
 */

// While Loop
// “A while loop runs as long as a given condition is true. It’s best when we don’t know in advance how many iterations are needed.”
/*
 while(condition) {
    // Code
 }
*/

let counter = 1;
while (counter <= 5) {
  console.log(counter);
  counter++;
}

// do-while
// “A do-while loop ensures that the code executes at least once before checking the condition.”
/*
    do {
        // Code
    } while(condition);
*/

let num = 1;
do {
  console.log(num);
  num++;
} while (num <= 5);

// Infinite Loop

// for (;;) {
//   console.log("I am looping forever!!!");
// }

// while (true) {}

// do {
//   // Code
// } while (true);

console.log("_________Task Solutuons_________");
// TASKS SOLUTION

// 1 :Generate a Pyramid Pattern using Nested Loop as it is shown below:
/*
 *
 **
 ***
 ****
 *****
 */

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

// 2 :Craete Multiplication Table (Using for loop)

// Write a program to print the multiplication table of a given number up to 10.
// For Example: If N = 3, output should be:

// 3 x 1 = 3
// 3 x 2 = 6
// ...
// 3 x 10 = 30

let input = 10;
for (let i = 1; i <= 10; i++) {
  console.log(`${input} * ${i} = ${input * i}`);
}

// 3 :Find the summation of all odd numbers between 1 to 500 and print them on teh console log.

let odd = 0;
for (let i = 1; i <= 500; i++) {
  if (i % 2 !== 0) {
    odd += i;
  }
}
console.log(odd);

//4. Skipping Multiples of 3

// Write a program to print numbers from 1 to 20, but skip multiples of 3.

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}

//5. Reverse Digits of a Number (Using while loop)

// Write a program to reverse the digits of a given number using a while loop.

// Input: 6789;
// Output: 9876;

let reverseInput = 6789;
let reversedNumber = 0;

while (reverseInput > 0) {
  let lastDigit = reverseInput % 10;
  reversedNumber = reversedNumber * 10 + lastDigit;
  reverseInput = Math.floor(reverseInput / 10);
}

console.log(reversedNumber);


// 6 :Write your understanding on the difefrences between for, while, and do-while loop. Create their flow charts.

// Answer

// for loop

//its a type of loop in javascript it used when you know the itteration count example : 1 - 100 print.
// Start → Initialization → Condition Check → Execution → Update → (Loop or Terminate)

//while loop

//also its a type of loop in javascript and it runs while some condition is true and its used when you dont know how many iteration you need to do some task.
// Start → Condition Check → Execution → Update (Loop or Terminate)

//do while loop

//aslo its a type of loop in javascript this loop comes handy when you need the code execute once and then check a codition.
//Start → initialization → Execution (at least one time) → Update → Condtion (Loop or Terminate)
