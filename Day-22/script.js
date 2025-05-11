// console.log("Async JavaScript - Callback");

// const storeEL = document.getElementById("store");
// const orderDetailsEL = document.getElementById("order-details");
// const addOnEL = document.getElementById("add-on");
// const orderEL = document.getElementById("order");

// function orderPizza(type, name) {
//   // Query the pizzahub for a store
//   storeEL.textContent = `Locating Store...`;
//   query(`api/pizzahub/`, function (result, error) {
//     if (!error) {
//       let shopId = result[0];
//       console.log({ shopId });
//       storeEL.textContent = `Located Store: ${shopId}`;

//       // Get the store and query pizzas
//       orderDetailsEL.textContent = `Loading Order...`;
//       query(`api/pizzahub/pizzas/${shopId}`, function (result, error) {
//         if (!error) {
//           let pizzas = result;
//           console.log({ pizzas });

//           // Find if my pizza is availavle
//           let myPizza = pizzas.find((pizza) => {
//             console.log(pizza.name);
//             return pizza.type === type && pizza.name === name;
//           });
//           console.log({ myPizza });

//           orderDetailsEL.textContent = `You have ordered for ${myPizza.type} ${myPizza.name}`;

//           // Check for the free beverages
//           addOnEL.textContent = `Checking for Add-Ons...`;
//           query(
//             `api/pizzahub/beverages/${myPizza.id}`,
//             function (result, error) {
//               if (!error) {
//                 let beverage = result[0];
//                 console.log({ beverage });
//                 addOnEL.textContent = `We have added an add-on ${beverage.name} for you.`;

//                 // Prepare an order
//                 orderEL.textContent = `Preparing your order...`;
//                 query(
//                   `api/order`,

//                   function (result, error) {
//                     if (!error) {
//                       console.log(
//                         `Your order of ${type} ${name} with ${beverage.name} has been placed`
//                       );
//                       orderEL.textContent = `Your order of ${type} ${name} with ${
//                         beverage.name
//                       } has been placed at ${new Date(result.createdAt)}`;
//                     } else {
//                       console.log(`Bad luck, No Pizza for you today!`);
//                       orderEL.textContent = `Bad luck, No Pizza for you today!`;
//                     }
//                   },
//                   {
//                     method: "POST",
//                     headers: {
//                       "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({
//                       pizzaId: myPizza.id,
//                       beverageId: beverage.id,
//                     }),
//                   }
//                 );
//               }
//             }
//           );
//         }
//       });
//     }
//   });
// }

// // Call the orderPizza method
// orderPizza("veg", "Margherita");

// Task solutions
console.log("Task Solutions");
console.log("+++++++++++++++++++++++++++");

// 1. Pass a function to greet a user and then thank them

function greeting(user, callback) {
  console.log(`Hello ${user}`);
  callback();
}

function sayThanks() {
  console.log(`Thank You`);
}

greeting("Hassan", sayThanks);

// 2. Implement a calculator function that accepts two
// numbers and a callback to perform operations like add,
// subtract

function calculator(a, b, operationCallback) {
  // Complete this function
  console.log(operationCallback(a, b));
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function division(x, y) {
  return x / y;
}

calculator(5, 3, division);

// 3. Create a delayedMessage function that prints a
// message after a delay using setTimeout

function delayedMessage(message, delay, callback) {
  setTimeout(() => {
    console.log(message);
    callback();
  }, delay);
}

// delayedMessage("Task complete", 2000, () => console.log("Callback Fired!"));

// 4. Implement a function that filters numbers in an
// array based on a condition provided via callback

function filterNumbers(arr, conditionCallback) {
  // Use loop and callback to return filtered array
  let filter = arr.filter((num) => conditionCallback(num));
  console.log(filter);
}

filterNumbers([1, 2, 3, 4], (n) => n > 2); // should return [3, 4]

// 5. Execute a sequence of tasks one after another
// using callbacks

function task1(callback) {
  console.log("Task 1 done");
  callback();
}

function task2(callback) {
  console.log("Task 2 done");
  callback();
}

function task3() {
  console.log("Task 3 done");
}

function sequenceCallbacks(callback1, callback2, callback3) {
  callback1(() => {
    callback2(() => {
      callback3()
    })
  })
}

sequenceCallbacks(task1, task2, task3);
