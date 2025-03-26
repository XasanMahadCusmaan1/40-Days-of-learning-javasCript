console.log("Day 11 - Closure");

// Outher Inner
function outer() {
  let x = 10;

  return function inner() {
    console.log(x);
  };
}

const func = outer();
console.log(func());

// Count Closure
function outerCount() {
  let count = 0;

  return function innerCount() {
    count++;
    console.log(count);
  };
}

const retVal = outerCount();

retVal(); // 1
retVal(); // 2
retVal(); // 3

// Real World Example

function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: (amount) => {
      balance = balance + amount;
      console.log("Deposited ", amount, " Current Balance ", balance);
    },

    withdraw: (amount) => {
      if (amount > balance) {
        console.warn("Insifficient Fund");
      } else {
        balance = balance - amount;
        console.log("Withdrawn ", amount, " Current Balance ", balance);
      }
    },

    checkBalance: () => console.log("Current Balance", balance),
  };
}

const tapaScriptAccount = createBankAccount(100);

console.log(tapaScriptAccount);

console.log(tapaScriptAccount.deposit(300)); // 400

console.log(tapaScriptAccount.withdraw(50)); // 350

console.log(tapaScriptAccount.withdraw(20)); // 330

console.log(tapaScriptAccount.withdraw(50)); // 280

console.log(tapaScriptAccount.withdraw(150)); // 130

console.log(tapaScriptAccount.checkBalance()); // 130

function dealingWithBigData() {
  let bigData = new Array(10000000).fill("*");

  return function () {
    console.log(bigData[3]);
  };
}

const variable12 = dealingWithBigData();

console.log(variable12());

// Usefulness of Closure

// 1. You can keep the variables private without exposing them.
// 2. You can stop variable pollution.
// 3. You can create a function factory.
// 4. You can keep a variable alive between multiple calls.

function timer() {
  let secs = 0;

  return function () {
    secs++;
    console.log("elaspsed seconds ", secs);
  };
}

const timerInstance = timer();
timerInstance(); // 1
timerInstance(); // 2
timerInstance(); // 3

// Closure in Event handler

function setupButton() {
  let clickCount = 0;

  // document.getElementById("myButton").addEventListener("click", function () {
  //   clickCount++;
  //   console.log(`Button clicked ${clickCount} times`);
  // });
}

setupButton();

//TASK SOLUTIONS
console.log("++++++++++TASK SOLUTIONS+++++++++++");

// 1. What will be the output of the following code and why?

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter(); // 1
counter(); // 2

/*
  SOLUTION 

  The output is 1, 2. Because of lexical scoping, 
  the inner function can still remember variables declared in the outer function even if its execution finishes. 
  This mechanism is called closures, that's why each time you call the counter it will increment by 1.
*/

// 2. What will be the output and why?

function testClosure() {
  let x = 10;
  return function () {
    return x * x;
  };
}
console.log(testClosure()());

/*
  SOLUTION 

  The output is 100, because when you log testClosure() only, 
  it will log the returned function. But due to the additional parentheses, 
  it immediately calls the returned function which is also returning the expression x * x. 
  Since x was 10 in the outer function, it will square it, resulting in the output 100.
*/

// 3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.

function clickButton() {
  let btn = document.getElementById("btn-click");
  let count = 0;
  return btn.addEventListener("click", () => {
    count++;
    console.log(`button clicked ${count}`);
  });
}

clickButton();

// 4. Write a function createMultiplier(multiplier) that returns another function to multiply numbers.

function createMultiplier(multiplier) {
  return function (multiply) {
    console.log(multiplier * multiply);
  };
}

let multipliedResult = createMultiplier(2);
multipliedResult(5);

// 5. What happens if a closure references an object?

/* SOLUTION 
  IV- the object remains in memory as long as the closure exists. 
*/

// 6. Write a function factory of counter to increment, decrement, and reset a counter.
// Use closure to refer the count value across the functuions.

function funFactory() {
  let count = 0;

  return {
    increment: function () {
      count++;
      console.log(`count was incerement by ${count}`);
    },

    decrement: function () {
      count--;
      console.log(`count was decrement by ${count}`);
    },

    reset: function () {
      count = 0;
      console.log(`count was reset by ${count}`);
    },
  };
}

let resultFactory = funFactory();
resultFactory.increment();
resultFactory.increment();

