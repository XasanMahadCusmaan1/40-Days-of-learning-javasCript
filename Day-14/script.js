console.log("Day 14: Error Handling");

// What are we going to learn today?

// 1. Different Types of Error in JavaScript
// 2. try...catch syntax and flow
// 3. Real-World Use cases with try...catch
// 4. Throwing Error
// 5. Rethrowing Error
// 6. The try..catch..finally
// 7. Creating Custom Error
// 8. Self Assignment Operator

// parsing error -
// runtime error -

// What is an Exception in JavaScript?
// Ans: Exceptions are runtime errors that disrupt program execution.

// Examples:

// console.log(x); // ReferenceError: x is not defined

// let obj = null;
// console.log(obj.name); // TypeError: Cannot read properties of null

// console.log("hi" // SyntaxError:

// let arr = new Array(-1) // RangeError

// decodeURIComponent("%"); // URIError
// eval("var a = ;"); // EvalError

// try...catch

try {
  // logic or code
} catch (err) {
  // handle error
}

/*
    1. Code inside try gets executed.
    2. If no error in the try block, the catch block will be ignored and will not be
    executed.
    3. If there is an error in the try block, the execution of the try block will be
    suspended and the control will move to the catch block. In the catch block you
    can find the error details and do the needful.
*/

try {
  console.log("execution starts here");
  abc;
  console.log("execution ends here");
} catch (err) {
  console.error("An Error has occured");

  console.log(err.name);
  console.log(err.message);
  console.log(err.stack);
}

// Real-World Use Cases

function divideNumbers(a, b) {
  try {
    if (b === 0) {
      const err = new Error("Division by zero is not allowed.");
      throw err;
    }
    const result = a / b;
    console.log(`The result is ${result}`);
  } catch (error) {
    console.error("Got a Math Error:", error.message);
  }
}
divideNumbers(15, 3);
// divideNumbers(15, 0);

const person = {
  name: "Tapas",
  address: {
    city: "Bangalore",
  },
};

function getPostalCode(user) {
  try {
    console.log(user.address.country.postalCode);
  } catch (error) {
    console.error("Error accessing property:", error.message);
  }
}

// getPostalCode(person);

function validateAge(age) {
  try {
    if (isNaN(age)) {
      throw new Error(
        `Invalid input: Age must be a number. Your input is ${age}`
      );
    }
    console.log(`User's age is: ${age}`);
  } catch (error) {
    console.error("Validation Error:", error.message);
  }
}

// validateAge("Tapas")

// Rethrow

try {
  // Do something with logic and code
} catch (error) {
  // Do something with the error
}

function validateForm(formData) {
  try {
    if (!formData.username) throw new Error("Username is Mandatory");
    if (!formData.email.includes("@")) throw new Error("Invalid email format!");
  } catch (error) {
    console.error("Validation Issues Found:", error.message);
    throw error; // rethrow
  }
}

try {
  validateForm({ username: "Tapas", email: "bademail" });
} catch (error) {
  console.error("Showing error message for user creation", error.message);
}

// try-catch-finally

try {
  // Code that may throw an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code that always runs (cleanup actions)
}

function processInformation(information) {
  try {
    console.log("Processing Information...");
    if (!information) throw new Error("No Information available to process");
    console.log("Information processed");
  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    console.log("Cleanup: Closing database connection");
  }
}

// processInformation();

// Custom Error

function ValidationError(message) {
  this.name = "ValidationError";
  this.message = message;
  //this.stack = new Error().stack;
}

//ValidationError.prototype = Object.create(Error.prototype);

function validateCitizen(age) {
  if (age < 60) {
    throw new ValidationError("You are not a senior citizen");
  }
  return "You are a senior citizen";
}

try {
  const message = validateCitizen(15);
  console.log(message);
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}

// Self Assignment Operator ?=

let x;
let y = 10;

//x ?= 20; // x is undefined, so x becomes 20
//y ?= 30; // y is already 10, so y remains 10

console.log(x); // Output: 20
console.log(y); // Output: 10

console.log("+++++++ TASK SOLUTIONS +++++++");

// 1. What will be the output of the following code?

try {
  let r = p + 50;
  console.log(r);
} catch (error) {
  //   console.log("An error occurred:", error.name); // reference error
}

// 2. Write a function processPayment(amount) that checks if the
// amount is positive and not exceeding balance.
// If any condition fails, throw appropriate errors

function processInformation(amount) {
  let amounBalance = 100;

  try {
    if (amount < 0 || amounBalance < amount) {
      throw new Error(
        `the amount must be greater than 0 and must be less than the balance ${amounBalance}`
      );
    } else {
      amounBalance += amount;
      console.log(`the amount is : ${amounBalance}`);
    }
  } catch (error) {
    console.error(error);
  }
}

processInformation(50);

// 3. Implement a custom error handling system for an
// e-commerce website that categorizes errors as

//   UserError -
//   PaymentError -
//   ServerError -
//   EmailError;

// UserError implement

function UserError(message) {
  this.name = "UserError";
  this.message = message;
  this.stack = new Error().stack;
}

UserError.prototype = Object.create(Error.prototype);

function userAgeError(age) {
  if (age < 18) {
    throw new UserError(`: You age is ${age} must be greater than 18`);
  }
  console.log("You are good to go");
}

try {
  userAgeError(16);
} catch (error) {
  console.error(`${error.name} ${error.message} ${error.stack}`);
}

// PaymentError -

function PaymentError(message) {
  this.name = "PaymentError";
  this.message = message;
  this.stack = new Error().stack;
}

PaymentError.prototype = Object.create(Error.prototype);

function checkPayment(userPayInput) {
  let balance = 100;
  if (userPayInput > balance) {
    throw new PaymentError(
      `: Your balance which is ${balance} is insuficient for your payment ${userPayInput}`
    );
  }
  console.log("You are good to go");
}

try {
  checkPayment(500);
} catch (error) {
  console.error(`${error.name} ${error.message} ${error.stack}`);
}

// ServerError -

function ServerError(message) {
  this.name = "ServerError";
  this.message = message;
  this.stack = new Error().stack;
}

ServerError.prototype = Object.create(Error.prototype);

function checkServerError(serverStatus) {
  if (!serverStatus) {
    throw new ServerError(
      `: ${serverStatus} server request was not complete .......`
    );
  }
  console.log(`Server request was completed`);
}

try {
  checkServerError(false);
} catch (error) {
  console.error(`${error.name} ${error.message} ${error.stack}`);
}

// EmailError -

function EmailError(message) {
  this.name = "EmailError";
  this.message = message;
  this.stack = new Error().stack;
}

EmailError.prototype = Object.create(Error.prototype);

function checkEmail(email) {
  if (!email.includes("@")) {
    throw new EmailError(`: ${email} is an Invalid email`);
  }
  console.log(`Valid email good to go`);
}

try {
  checkEmail("xasanfiidoow23gmail.com");
} catch (error) {
  console.error(`${error.name} ${error.message} ${error.stack}`);
}

// 4. Simulate an API call function fetchData(url). If the URL does not start with "https",
// throw an "Invalid URL" error. Handle it using try...catch

// the short way to check https weither it starts is startsWith method.
// but this way was my implementation
function fetchData(url) {
  try {
    if (
      !(
        url[0] === "h" &&
        url[1] === "t" &&
        url[2] === "t" &&
        url[3] === "p" &&
        url[4] === "s"
      )
    ) {
      throw new Error("Invalid URL");
    }
    console.log("Valid URL");
  } catch (error) {
    console.error(`${error.name} ${error.message} ${error.stack}`);
  }
}

fetchData("htps://google.com");

// 5. Implement a custom error type ValidationError using
// constructor functions to handle form validation errors

const userInput = {
  username: "",
  age: -10,
};

function ValidationError(message) {
  this.name = "validation error";
  this.message = message;
  this.stack = new Error().stack;
}

ValidationError.prototype = Object.create(Error.prototype);

function validate(userInput) {
  if (userInput.username === "") {
    throw new ValidationError(
      `${userInput.username} : username must not be empty`
    );
  } else if (userInput.age < 0) {
    throw new ValidationError(`${userInput.age} : must be greater than '0'`);
  }
  console.log("You are good to go");
}

try {
  validate(userInput);
} catch (error) {
  console.error(`${error.name} ${error.message} ${error.stack}`);
}

// 6. Write a function readFile(filePath) that simulates reading a file.
// If the file does not exist (simulate with a condition), throw a "File not found" error.
// Handle the error with try...catch.
// Make sure you have code to handle releasing the IO resources

// Please note, you do not have to implement the actual IO operation here.
// Just use the console.log to simulate them. {NB}

function readFile(filePath) {
  console.log("File path checking started .......");
  try {
    if (
      filePath === "" ||
      !(filePath.startsWith("C:") || filePath.startsWith("D:"))
    ) {
      throw new Error("File was not found");
    }
    console.log("File found");
  } catch (error) {
    console.error(`${error.name} ${error.stack}`);
  } finally {
    console.log("File path checking completed");
  }
}

readFile(`DUsers\\Hassan\\Documents\\file.txt`);

// 7. Write a function parseJson(str) that takes a JSON string and tries to parse
// it using JSON.parse().If parsing fails, catch the error and return "Invalid JSON"

function parseJson(str) {
  try {
    return JSON.parse(str);
  } catch (error) {
    return (`Invalid JSON`);
  }
}

parseJson('{"name":"hassan" }');


// 8. What is the purpose of throw in JavaScript?
// - It creates a new error manually


// 9. What does the finally block do in a try...catch statement?
// - Runs regardless of whether an error occurs or not


// 10. Create a table exaplaining the usages
// of try, catch, throw, rethrow, error object

/*
  try : try block let you take the code that throws the error
  catch : catch block does when try throws error it will handle that error 
  throw : throw keyword let you throw the error to the catch block and create your own ecxeption error.
  rethrow : Rethrowing involves catching an error, processing it to some extent, and then throwing it again so that a higher-level function can handle it.
  error object : contains the info of the error like name message and the stack 
*/