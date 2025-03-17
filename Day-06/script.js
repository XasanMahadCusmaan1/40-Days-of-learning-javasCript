console.log("Day 06");

// Define or Declare a Function
function printThis() {
  console.log("Printing...");
}

// Call or Invoke a Function
printThis();

// Function as an Expression
let printMe = function () {
  console.log("Print Me");
};

printMe();

// Parameters & Arguments
function sum(a, b) {
  const result = a + b;
  //console.log(result);
  return result;
}

// let result = sum(10, 9);
// console.log(result);

function double(x) {
  return 2 * x;
}
// console.log(double(result));

// Default Parameters

function calc(a = 0, b = 0) {
  return 2 * (a + b);
}

const resVar = calc();
console.log(resVar);

// Rest Parameter
function calculateThis(x, y, ...rest) {
  console.log(x, y, rest);
}

calculateThis(1, 2, 3, 4, 5, 6, 7, 8, 9);

// Nested Fucntion

function outer() {
  console.log("Outer");

  return function inner() {
    console.log("inner");
  };
  //inner();
}

let retFunc = outer();

console.log(retFunc());

// callback function
const toCallBuz = false;

function foo(func) {
  console.log("foo");
  if (toCallBuz) {
    func();
  }
}

const buz = function () {
  console.log("buz");
};

foo(buz);

// Pure function
let greeetingMsg = "Hola ";

function greeting(name) {
  return greeetingMsg + name;
}

console.log(greeting("tapaScript"));
console.log(greeting("tapaScript"));

greeetingMsg = "Namaste ";

console.log(greeting("tapaScript"));
console.log(greeting("tapaScript"));
console.log(greeting("tapaScript"));

// Higher Order Function

function getCamera(camera) {
  camera();
}

getCamera(function () {
  console.log("Sony");
});

function returnFunc(param) {
  return function () {
    if (param === 1) {
      console.log("Hello");
    }
  };
}

const retFun = returnFunc(3);
retFun();

// Arrow Function

let greetMe = (greetingMsg) => {
  //
  //
  return greetingMsg + " great";
};

console.log(greetMe("Hola"));

// IIFE(Immediately Invoked Function Expression)
(function (count) {
  console.log("IIFE", count);
})(1);

// Recursion

/*function foo() {
    foo();
}*/

function fetchWater(count) {
  console.log("Fetching Water...", count);
  if (count === 0) {
    console.log("No more water is left to fetch...");
    return;
  }
  fetchWater(count - 1);
}

fetchWater(5);

//Task solution

console.log("_______Task Solution_______");

//1. Write a Function to Convert Celsius to Fahrenheit

// Create a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit.
// Formula: (Celsius * 9/5) + 32 = Fahrenheit

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

let result = celsiusToFahrenheit(10);
console.log(`${result} Fahrenheit`);

//2. Create a Function to Find the Maximum of Two Numbers**

// Write a function findMax(num1, num2) that returns the larger of the two numbers. It should work for negative numbers as well.

function findMax(num1, num2) {
  return Math.max(num1, num2);
}

let max = findMax(2, -3);
console.log(max);

//3. Function to Check if a String is a Palindrome

// Create a function isPalindrome(str) that checks if a given string is a palindrome (reads the same forward and backward). You can not use any string function that we have not learned in the series so far.

function isPalindrome(str) {
  let reverseStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  if (str[0].toLowerCase() === reverseStr[0].toLowerCase()) {
    console.log(`the ${str} and ${reverseStr} are Palindrome`);
  } else {
    console.log(`the ${str} and ${reverseStr} are not Palindrome`);
  }
}

isPalindrome("hassan");

//4. Write a Function to Find Factorial of a Number

// Create a function factorial(n) that returns the factorial of n.
// Example 5! = 5 * 4 * 3 * 2 * 1

function factorial(n) {
  let eachResult = 1;
  for (let i = n; i > 0; i--) {
    eachResult *= i;
  }
  console.log(eachResult);
}

factorial(5);

//5. Write a function to Count Vowels in a String

// Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string.

function countVowels(str) {
  let holdVowels = "";
  for (let i = 0; i < str.length; i++) {
    switch (str[i].toLowerCase()) {
      case "a":
        holdVowels += "a";
        break;
      case "e":
        holdVowels += "e";
        break;
      case "i":
        holdVowels += "i";
        break;
      case "o":
        holdVowels += "o";
        break;
      case "u":
        holdVowels += "u";
        break;
    }
  }

  console.log(
    `The number of vowels inside this name is ${holdVowels.length} and they are ${holdVowels}`
  );
}

countVowels("goojacade");

//6. Write a Function to Capitalize the First Letter of Each Word in a Sentence

// Write a function capitalizeWords(sentence) that takes a sentence and capitalizes the first letter of each word. You can use the toUpperCase() method of string to convert the lowercase to uppercase.

function capitalizeWords(sentence) {
  let changeUpperWord = "";
  let capitalizeNext = true; //The flag (capitalizeNext) is a boolean variable that acts as a signal to determine when to capitalize the next character.
  for (let i = 0; i < sentence.length; i++) {
    if (capitalizeNext) {
      changeUpperWord += sentence[i].toUpperCase();
      capitalizeNext = false;
    } else {
      changeUpperWord += sentence[i];
    }

    if (sentence[i] === " ") {
      capitalizeNext = true;
    }
  }
  console.log(changeUpperWord);
}

capitalizeWords("hello javascript by now");

//7. Use an IIFE to Print “Hello, JavaScript!”**

// Write an IIFE that prints "Hello, JavaScript!" to the console. Here the Second word must be supplied using paramneter and argument.

(function (langName) {
  console.log("Hello " + langName);
})("javasCript");



//8. Create a Simple Callback Function**

// Write a function greet(name, callback), where callback prints a message using the name parameter.

let great = function (name, callback) {
  return callback(name);
};
let callbackResult = great("Hassan", function (name) {
  console.log("Hello " + name);
});


//Task 9 and 10 i take them pic and imported diagram folder.