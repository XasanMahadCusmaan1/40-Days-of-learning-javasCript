console.log("Promises");

// - What is a Promise in JavaScript?
// - Callback to Promise
// - Understanding Promise States
// - How promises are resolved and rejected
// - Handling Promises
// - Promise Chain
// - Handling Multiple Promises
// - How to Cancel a Promise
// - That PizzaHub App
// - Tasks and Assignments

/*let promise = new Promise(function(resolve, reject){

});

// Executor
function(resolve, reject){
    // Logic goes here
    resolve()
    reject()
    resolve()
}*/

// state -
// pending: Initially when the executor function starts the execution.
// fulfilled: When the promise is resolved.
// rejected: When the promise is rejected.

// result -
// undefined: Initially when the state value is pending.
// value: When resolve(value) is called.
// error: When reject(error) is called.

// - How promises are resolved and rejected

let promise1 = new Promise(function (resolve, reject) {
  resolve("Hey, I am done!");
});

let promise2 = new Promise(function (resolve, reject) {
  reject("Something is not right!");
});

let anotherPromise = new Promise(function (resolve, reject) {
  resolve("I am surely going to get resolved!");

  reject(new Error("Will this be ignored?")); // ignored
  resolve("Ignored?"); // ignored
});

// - Handling Promises

// .then()
// .catch()
// .finally()

let loading = false;
const promise = new Promise(function (resolve, reject) {
  loading = true;
  // Make a Network Call(API Call/IO Operation)
  resolve("I am resolved...");
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    loading = false;
  });

// - Promise Chain

// Rule 1: Every promise gives you a .then() handler method. Every rejected promise provides you a .catch() handler.

// Rule 2: You can do mainly three valuable things from the .then() method. You can return another promise(for async operation). You can return any other value from a synchronous operation. Lastly, you can throw an error.

// Return a promise from the .then() handler

// Create a Promise
let getUser = new Promise(function (resolve, reject) {
  const user = {
    name: "John Doe",
    email: "jdoe@email.com",
    password: "jdoe.password",
    permissions: ["db", "dev"],
  };
  resolve(user);
});

getUser
  .then(function (user) {
    console.log(`Got user ${user.name}`);

    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve("Bangalore");
      }, 2000);
    });
  })
  .then((address) => {
    console.log(`User address is ${address}`);
  });

// Return a simple value from the .then() handler

getUser
  .then(function (user) {
    console.log(`Got user ${user.name}`);
    return user.email;
  })
  .then(function (email) {
    console.log(`User email is ${email}`);
  });

// Throw an error from the .then() handler

getUser
  .then(function (user) {
    console.log(`Got user ${user.name}`);

    if (!user.permissions.includes("hr")) {
      throw new Error("You are not allowed to access the HR module");
    }

    return user.email;
  })
  .then((email) => {
    console.log(`User email is ${email}`);
  })
  .catch((error) => {
    console.error(error);
  });

// Rule 3: You can rethrow from the .catch() handler to handle the error later. In this case, the control will go to the next closest .catch() handler.

let promise401 = new Promise(function (resolve, reject) {
  reject(401);
});

promise401
  .catch((error) => {
    console.log(error);
    if (error === 401) {
      console.log("Rethrowing 401");
      throw error;
    } else {
      // Do Something
    }
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(`handling ${error} here`);
  });

// Rule 4 - Unlike .then() and .catch(), the .finally() handler doesn't process the result value or error. It just passes the result as is to the next handler.

// Create a Promise
let promiseFinally = new Promise(function (resolve, reject) {
  resolve("Testing Finally.");
});

promiseFinally
  .finally(function () {
    console.log("Running Finally!");
  })
  .then(function (result) {
    console.log(result);
  });

// Rule 5 - Calling the .then() handler method multiple times on a single promise is NOT chaining.

promise
  .then((result) => {
    // Do Something
    return 101;
  })
  .then((result) => {
    // result // 101
    // throw error
  })
  .catch((error) => {});

// This is not Chaining Promises

// Create a Promise
{
  let promise = new Promise(function (resolve, reject) {
    resolve(10);
  });

  // Calling the .then() method multiple times
  // on a single promise - It's not a chain
  promise
    .then(function (value) {
      value++;
      return value;
    })
    .then(function (value) {
      value = value + 10;
      return value;
    })
    .then(function (value) {
      value = value + 20;
      console.log(value);
      return value;
    });
}

// Handle Multiple Promises

// promise.all([promises])

const BULBASAUR_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/bulbasaur";
const RATICATE_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/raticate";
const KAKUNA_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/kakuna";

let promise_1 = getPromise(BULBASAUR_POKEMONS_URL);
let promise_2 = getPromise(RATICATE_POKEMONS_URL);
let promise_3 = getPromise(KAKUNA_POKEMONS_URL);

Promise.all([promise_1, promise_2, promise_3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

Promise.any([promise_1, promise_2, promise_3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

// settling a promise = fulfilling(resolve) + rejecting

Promise.allSettled([promise_1, promise_2, promise_3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

Promise.race([promise_1, promise_2, promise_3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

Promise.resolve();
// let promise = new Promise(resolve => resolve(value));

Promise.reject();
// let promise = new Promise((resolve, reject) => reject(error));

// How to Cancel a Promise

// Task Solutions

/** 
1. Create Your First Promise
- Create a Promise that resolves with the string "Hello, Promises!" after 1 second.
- Log the result using .then().
*/

const taskPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello, Promises!");
  }, 1000);
});

taskPromise.then((result) => {
  console.log(result);
});

/*
-2. Reject a Promise
- Create a Promise that immediately rejects with the message "Something went wrong!".
- Handle the error using .catch().
 */

const taskPromise2 = new Promise((resolve, reject) => {
  reject("Something went wrong!");
});

taskPromise2
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

/*
3. Simulate Coin Toss
Return a Promise that randomly resolves to "Heads" or "Tails" 
after 1 second.
*/

function coinToss() {
  return new Promise((resolve, reject) => {
    let headsOrTails = Math.floor(Math.random() * 2) < 1 ? "Heads" : "Tails";
    setTimeout(() => {
      resolve(headsOrTails);
    }, 1000);
  });
}

coinToss().then((result) => {
  console.log(result);
});

/*
4. Promise with Condition
- Create a function checkAge(age) that returns a Promise.
- Resolve if age >= 18, reject otherwise.
*/

function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("You can Pass");
    } else {
      reject(`You Can't`);
    }
  });
}

checkAge(20)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

/*
5. Chain Promises Sequentially
- Create three Promises that log:
    - "Step 1 done"
    - "Step 2 done"
    - "Step 3 done"
- Chain them using .then().
*/

let promise01 = new Promise((resolve, reject) => {
  resolve("Step 1 done");
});

let promise02 = new Promise((resolve, reject) => {
  resolve("Step 2 done");
});

let promise03 = new Promise((resolve, reject) => {
  resolve("Step 3 done");
});

promise01
  .then((result1) => {
    console.log(result1);
    return promise02;
  })
  .then((result2) => {
    console.log(result2);
    return promise03;
  })
  .then((result3) => {
    console.log(result3);
  });

/*
6. Value Transformation in Chain
- Create a Promise that resolves with 5.
- Chain .then() handlers to double it, then square it.
- Final output should be 100.
*/

let resolve5 = new Promise((resolve, reject) => {
  resolve(5);
});

resolve5
  .then((result) => {
    return result + result;
  })
  .then((result) => {
    console.log(result * result);
  });

/*
7. Chain with Random Rejection
- First .then() resolves to "Start".
- Second .then() randomly throws an error or returns "Continue".
- Handle rejection gracefully.
*/

let randomRejection = new Promise((resolve, reject) => {
  resolve("Start");
});

randomRejection
  .then((result) => {
    return result;
  })
  .then((result) => {
    let randomRe = Math.floor(Math.random() * 2);
    if (randomRe < 1) {
      console.log("Continue");
    } else {
      throw new Error("Random Rejection");
    }
  })
  .catch((error) => {
    console.error(error);
  });

/*
8. Multiple then() calls on same Promise
- Create a single resolved Promise.
- Attach two different .then() handlers to it.
- Explain that both run independently.
*/

let singleResolvePro = new Promise((resolve, rejec) => {
  resolve(2);
});

// this is independend then attaching
singleResolvePro.then((result) => {
  console.log(result + 1);
});
// becouse every then uses the original resolve value instead of the previous then result ,
// and this is not the correct chaining
singleResolvePro.then((result) => {
  console.log(result + 3);
});

/*
9. Return New Promises in .then()
- Chain multiple .then() where each returns a new Promise 
with a delay and logs a step like:
    - “First”
    - “Second”
    - “Third”
*/

let newPromise = new Promise((resolve, reject) => {
  resolve("First");
});

newPromise
  .then((result) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Second");
        console.log(result);
      }, 2000);
    });
  })
  .then((result) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("third");
        console.log(result);
      }, 2000);
    });
  })
  .then((result) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
        console.log(result);
      }, 2000);
    });
  });

/*
10. Implement fakeDBQuery()
- Create a function that simulates a DB query with a random delay and returns data (like a user object).
- Chain multiple fake queries.
*/

let user = { name: "Hassan", age: 20, gender: "male" };
let posts = [
  { id: 1, title: "Hello" },
  { id: 2, title: "World" },
];
let comments = [{ id: 1, text: "Nice!" }];

function fakeDBQuery(data) {
  let randomDelay = Math.random() * 2000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, randomDelay);
  });
}

fakeDBQuery(user)
  .then((userData) => {
    console.log("User: ", userData);
    return fakeDBQuery(posts);
  })
  .then((postData) => {
    console.log("Posts; ", postData);
    return fakeDBQuery(comments)
  })
  .then((commentsData) => {
    console.log("comments; ", commentsData);
  });