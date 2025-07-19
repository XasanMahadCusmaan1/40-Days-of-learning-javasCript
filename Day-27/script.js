console.log('Task Solutions..........');

// - [ ]  1. What's the output of the code below?

// ```jsx
// function f1() {
//     console.log('f1');
// }

// function f2() {
//     console.log('f2');
// }

// function f3() {
//     console.log('f3');
// }

// function f4() {
//     console.log('f4');
// }

// console.log("Let's do it!");

// setTimeout(function() {f1();}, 0);

// f4();

// setTimeout(function() {f2();}, 5000);

// setTimeout(function() {f3();}, 3000);

// ```

// Options are,

// - Let's do it!, f4, f1, f3, f2
// - Let's do it!, f1, f3, f2, f4
// - Let's do it!, f1, f2, f3, f4
// - Let's do it!, f1, f4, f2, f3

// ## Example Answer: Let's do it!, f4, f1, f3, f2

// Explanation:

// - "Let's do it!" is executed by Execution Stack
// - f1() calls browser API, so gets added to Callback Queue
// - f4() gets added to Execution Stack and is executed
// - Event loop finds a callback function f1() in callback queue & executes it
// - f2() calls browser API and gets added to Callback Queue. Similarly f3() is added to callback queue
// - Now there is nothing in Execution Stack, so event loop checks & finds f2() & - f3() callback functions in callback queue
// - f3() goes back into the stack after timeout, and gets executed
// - f2() too goes back into the stack after timeout, and gets executed


// - [ ]  2. What's the output of the code below?

// ```jsx
// function f1() {
//     console.log('f1');
// }

// console.log("Let's do it!");

// setTimeout(function() {console.log('in settimeout');}, 0);

// f1();
// f1();
// f1();
// f1();

// ```

// Options are,

// - Let's do it!, in settimeout, f1, f1, f1, f1
// - Let's do it!, f1, f1, f1, f1, in settimeout
// - Let's do it!, f1, , in settimeout, f1, f1, f1

// - answer is let's do it!,f1,f1,f1,f1, in settimeout

// - let's do it will execute
// - in settimeout goes web apis,settimeout will add callback queue
// - f1 will add execution context and it will execute
// - again f1 execution to the execution context
// - again f1
// - again f1
// - now call stack is empty event loop will look callback queue
// - settimout will add to the callStack and it executes

// - [ ]  3. Which statements are `true`? Select multiple
// - [✔️]  JavaScript is single-threaded
// - [✔️]  By default, JavaScript is synchronous
// - [ ]  Only promises make JavaScript asynchronous
// - []  All function callbacks are asynchronous
    
// - [ ]  4. Which statement is `true`? Select Only one
// - (_) JavaScript Function Execution Stack(Call Stack) never gets empty.
// - (✔️) The job queue gets higher priority than the callback queue.
// - (_) The only job of Event Loop is to manage the Call Stack
// - (_) The StackOverflow exception is random.


// - [ ]  5. Guess the output

// ```jsx
// const tom = () => console.log('Tom');

// const jerry = () => console.log('Jerry');

// const cartoon = () => {
//   console.log('Cartoon');

//   setTimeout(tom, 5000);

//   new Promise((resolve, reject) =>
//     resolve('should it be right after Tom, before Jerry?')
//   ).then(resolve => console.log(resolve))

//   jerry();
// }

// cartoon();

// ```

// Options are,

// - Cartoon, Jerry, should it be right after Tom, before Jerry?, tom
// - Cartoon, Tom, Jerry, should it be right after Tom, before Jerry?,
// - Cartoon, Tom, should it be right after Tom, before Jerry?, Jerry
// - Error

// the correct optiom is option 1;

// stpes :-

// - cartoon(): will add callstack and it will execute
// imediatly, 'Cartoon'
// - jon will go web apis and then to the callback queue
// - promise will go the micro task and waits till the callstack
// is empty
// - jerry(): will add to the callstack and it executes immediatly
// - now callstack is empty the event loop will give high priority
// then callback queue so promise will go execution context and it
// will execute imediatly
// - lastly event loop will look callback queue and executes jon


// - [ ]  6. Guess the output

// ```jsx
// const tom = () => console.log('Tom');
// const jerry = () => console.log('Jerry');
// const doggy = () => console.log('Doggy');

// const cartoon = () => {
//   console.log('Cartoon');

//   setTimeout(tom, 50);
//   setTimeout(doggy, 30);

//   new Promise((resolve, reject) =>
//     resolve('I am a Promise, right after tom and doggy! Really?')
//   ).then(resolve => console.log(resolve));
//   new Promise((resolve, reject) =>
//     resolve('I am a Promise after Promise!')
//   ).then(resolve => console.log(resolve));

//   jerry();
// }

// cartoon();

// ```

// Options are,

// - Cartoon, Jerry, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, , Tom, Doggy
// - Cartoon, Jerry, I am a Promise after Promise!, I am a Promise, right after tom and doggy! Really?, Doggy, Tom
// - Cartoon, Jerry, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, Doggy, Tom
// - Cartoon, Tom, Doggy, I am a Promise, right after tom and doggy! Really?, I am a Promise after Promise!, Jerry
// - None of the above.

// the correct option is 3

// Step-by-step Execution :-

// cartoon() is called.
// console.log('Cartoon') → Cartoon
// setTimeout(tom, 50) schedules "Tom" after 50ms (callback queue).
// setTimeout(doggy, 30) schedules "Doggy" after 30ms (callback queue).
// First Promise resolves immediately, schedules its .then (job queue):
// 'I am a Promise, right after tom and doggy! Really?'
// Second Promise resolves immediately, schedules its .then (job queue):
// 'I am a Promise after Promise!'
// jerry() → Jerry
// Now, the call stack is empty.

// job queue (Promises) are executed before any callback queue:
// 'I am a Promise, right after tom and doggy! Really?'
// 'I am a Promise after Promise!'
// After all job queue, the event loop processes callback queue in order of their timers:
// After 30ms: Doggy
// After 50ms: Tom

// - [ ]  7. Guess the output

// ```jsx
// const f1 = () => console.log('f1');
// const f2 = () => console.log('f2');
// const f3 = () => console.log('f3');
// const f4 = () => console.log('f4');

// f4();

// setTimeout(f1, 0);

// new Promise((resolve, reject) => {
//     resolve('Boom');
// }).then(result => console.log(result));

// setTimeout(f2, 2000);

// new Promise((resolve, reject) => {
//     resolve('Sonic');
// }).then(result => console.log(result));

// setTimeout(f3, 0);

// new Promise((resolve, reject) => {
//     resolve('Albert');
// }).then(result => console.log(result));

// ```

// Options are,

// - f4, Boom, Sonic, Albert, f1, f3, f2
// - f4, f1, Boom, f2, Sonic, f3, Albert
// - f4, Boom, Sonic, Albert, f3, f1, f2
// - f4, Boom, Sonic, Albert, f1, f2, f3

// option one is correct

// Step-by-Step Execution :-
// f4(); runs immediately → prints f4
// setTimeout(f1, 0) and setTimeout(f3, 0) are scheduled to run as soon as possible (after all synchronous and microtasks).
// setTimeout(f2, 2000) is scheduled to run after 2 seconds.
// Each Promise resolves immediately and its .then() callback is put in the microtask queue.
// Boom
// Sonic
// Albert
// After all synchronous code, the microtask queue (Promises) is processed before the callback queue (setTimeout).
// So, the order for the microtasks is:
// Boom
// Sonic
// Albert
// Now, the event loop processes the callback queue:
// f1 (0ms)
// f3 (0ms)
// f2 (2000ms, after a delay)

// - [ ]  8. Guess the output

// ```jsx
// const f1 = () => {
//     console.log('f1');
//     f2();
// }
// const f2 = () => console.log('f2');
// const f3 = () => console.log('f3');
// const f4 = () => console.log('f4');

// f4();

// setTimeout(f1, 0);

// new Promise((resolve, reject) => {
//     resolve('Sonic');
// }).then(result => console.log(result));

// setTimeout(f3, 0);

// new Promise((resolve, reject) => {
//     resolve('Albert');
// }).then(result => console.log(result));

// ```

// Options are,

// - f4, f1, f2, Sonic, f3, Albert
// - f4, Sonic, Albert, f3, f1, f2
// - f4, Sonic, Albert, f1, f2, f3
// - f4, Albert, Sonic, f1, f2, f3

// the correct option is 4

// Step-by-Step Execution
// f4(); runs immediately → prints f4
// setTimeout(f1, 0) is scheduled (callback queue)
// setTimeout(f3, 0) is scheduled (callback queue)
// Promise.resolve('Sonic') schedules its .then() (microtask queue)
// Promise.resolve('Albert') schedules its .then() (microtask queue)
// console.log('Sonic') → Sonic
// console.log('Albert') → Albert
// f1() runs (from setTimeout):
// prints f1
// calls f2() immediately (synchronous), which prints f2
// f3() runs (from setTimeout), prints f3