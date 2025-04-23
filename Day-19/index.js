console.log("Day 19 - JavaScript Events");

// What will we learn today?

// - What is an Event?
// - Event Handling and Why?
// - Event Handling in Markup
// - Event Handling in Script
// - addEventListener and removeEventListener
// - DOM Content Loaded
// - Event Object
// - Event Capturing and Bubbling
// - Event Delegation
// - Event Default Behaviour
// - Custom Events
// - Project(s)
// - Tasks

// Event Handling in Markup
function handleClick(greeting) {
    console.log(`Button Clicked with a ${greeting}`);
}

// Event Handling in Script
const myBtn2Elem = document.getElementById("myBtn2");
myBtn2Elem.onclick = function() {
    console.log("My Button 2 Clicked");
}
// Can not add multiple
myBtn2Elem.onclick = function() {
    console.log("My Button 2 Clicked Again");
}
// Separating fundtion
myBtn2Elem.onclick = handleClick;
myBtn2Elem.onclick = () => handleClick("Hola");

// addEventListener and removeEventListener
let counter = 0;
const counBtnElem = document.getElementById("countBtn");
const handleCount = function() {
    console.log(counter);
    counter++;
}
const greetMe = function() {
    console.log("Thank You!");
}
/*
counBtnElem.addEventListener("click", function() {
    console.log(counter);
    counter++;
})

counBtnElem.removeEventListener("click", function() {
    console.log(counter);
    counter++;
})
*/

counBtnElem.addEventListener("click", handleCount);
counBtnElem.addEventListener("click", greetMe);
counBtnElem.removeEventListener("click", handleCount);

// DOM Conetnt Loaded

// will never run
document.onDOMContentLoaded = function() {
    console.log("DOM Content Loaded...");
};

// this will run
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM Content Loaded...");
});


// Event Object
const searchElem = document.getElementById("search-id");
function handleChange(event) {
    console.log(event);
    console.log("Target:", event.target);
    console.log("Target Name:", event.target.name);
    console.log("Target Value:", event.target.value);
    console.log("Event Type:", event.type);
    console.log("Current Target:", event.currentTarget);
    console.log("this:", this);
}
searchElem.addEventListener("change", handleChange);



console.log("Event Defaults");

document.getElementById("websiteLink").addEventListener("click", function (e) {
  console.log("Navigating to website!");
  // e.preventDefault();
  // console.log("Default link behavior prevented!");
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
  // e.preventDefault();
  console.log("Form submission prevented!");
});

console.log("Event Bubbling, Capturing, and Delegation");

// Event Capturing and Bubbling

// In event bubbling, the event starts from the target element and bubbles upwards through its ancestors (parent → grandparent → etc.).

// The Flow is: Child → Parent → Grandparent → Document

// Bubbling

document.getElementById("grandparent").addEventListener("click", () => {
  console.log("Grandparent clicked");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

// Capturing

// In event capturing, the event flows from the outermost ancestor down to the target element before the actual target handles it.

// The Flow is: Document → Grandparent → Parent → Child

// Rarely used, but useful if you want to catch events before they reach the target.

document.getElementById("grandparent").addEventListener(
  "click",
  () => {
    console.log("Captured at Grandparent");
  },
  true // Capture phase
);

document.getElementById("parent").addEventListener(
  "click",
  () => {
    console.log("Captured at Parent");
  },
  true // Capture phase
);

document.getElementById("child").addEventListener(
  "click",
  () => {
    console.log("Captured at Child");
  },
  true // Capture phase
);

// Event Delegation - it is a technique where you add a single event listener to a parent element instead of each child. It uses event bubbling to handle events from dynamically added or existing child elements.

// Efficient for handling events on lists, tables, or any repeated/dynamic content.

document.getElementById("itemList").addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log(`You clicked on ${event.target.textContent}`);
  }
});

// Dynamically add a new list item
let newItemElem = document.createElement("li");
newItemElem.textContent = "Item 3";
document.getElementById("itemList").appendChild(newItemElem);

// event.stopPropagation() - event.stopPropagation() is a method used inside an event handler to stop the event from bubbling up (or propagating further) through the DOM tree

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", (e) => {
  // e.stopPropagation();
  console.log("Child clicked");
});