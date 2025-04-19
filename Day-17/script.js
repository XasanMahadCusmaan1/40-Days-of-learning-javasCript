function highlight() {
  let elements = document.querySelectorAll("p.info");
  elements.forEach((el) => {
    el.style.backgroundColor = "yellow";
  });
}

function filterList() {
  let inputValue = document.getElementById("searchInput").value;
  let listItems = document.querySelectorAll("ul#itemList > li");
  Array.from(listItems).forEach((item) => {
    item.style.display = item.textContent
      .toLowerCase()
      .includes(inputValue.toLowerCase())
      ? "block"
      : "none";
  });
}

// TASK SOLUTIONS
console.log("+++++++++ TASK SOLUTIONS +++++++++");

//1. Find the Most Frequent Word in a Paragraph
// Consider the follwoing HTML:
// ```html
// <div id="text">This is a test. This test is only a test.</div>
// ```
// Now, find and display the most frequently occurring word.
// Also put a count of occurance beside it.
// - Use document.querySelector() or getElementById() to select
// the paragraph.
// - Convert the text into an array of words.
// - Use querySelector() to display the most frequent word along
// with the count inside another

// Step 1: Select the text element
const textElement = document.getElementById("text");
const text = textElement.textContent;

// Step 2: Split text into words (case-insensitive, ignore punctuation)
const words = text.toLowerCase().match(/\b[\w']+\b/g) || [];

// Step 3: Handle empty text edge case
if (words.length === 0) {
  document.getElementById("result").textContent = "No words found.";
} else {
  // Step 4: Create a frequency map
  const frequencyMap = {};
  words.forEach((word) => {
    frequencyMap[word] = (frequencyMap[word] || 0) + 1;
  });

  // Step 5: Find the most frequent word and its count
  let maxCount = 0;
  let mostFrequentWord = "";
  for (const word in frequencyMap) {
    if (frequencyMap[word] > maxCount) {
      maxCount = frequencyMap[word];
      mostFrequentWord = word;
    }
  }

  // Step 6: Display the result
  const resultElement = document.getElementById("result");
  resultElement.textContent = `Most frequent word: "${mostFrequentWord}" (Count: ${maxCount})`;
}

// - [ ]  2. Create a zebra pattern

// Consider the following HTML:

/* ```html
<ul id="cars">
  <li>BMW</li>
  <li>Mahindra</li>
  <li>Audi</li>
  <li>Toyota</li>
  <li>Honda</li>
  <li>Hundai</li>
  <li>Tata</li>
  <li>Suzuki</li>
</ul>;

*/

// Now put alternate colors and background colors to each of the list tags. for example,

// - If tne BMW is in white color text, the background should be in black color.
// - Then for the next car it will be reversed, the color is black and the background is white.
// - Then again the next one is white color and background black
// - So on.

let cars = document.querySelectorAll("#cars > li");
cars.forEach((car, i) => {
  if (i % 2 === 0) {
    car.style.backgroundColor = "black";
    car.style.color = "white";
  } else {
    car.style.backgroundColor = "white";
    car.style.color = "black";
  }
});

// 3. Write different ways we can access DOM and what they returns

/*
    Method 1: document.getElementById("id") 
              Returns a single Element object with the specified ID, or null if not found
              
    Method 2: document.getElementsByClassName("className") 
              Returns a live HTMLCollection of elements with the specified class
              
    Method 3: document.getElementsByTagName("tagName") 
              Returns a live HTMLCollection of elements with the specified tag name
              
    Method 4: document.querySelector("CSS selector") 
              Returns the first Element that matches the CSS selector, or null if not found
              
    Method 5: document.querySelectorAll("CSS selector") 
              Returns a static NodeList of all elements matching the CSS selector
*/

// 4. Find and Replace Text Inside a Page

// Write a script that finds all occurrences of a word inside
// a `<p>` tag and replaces them with another word dynamically.

// let pElem = document.querySelectorAll("p");
// let combineIntoWords = Array.from(pElem).map((el) => el.textContent.split(" "));
// let findWord = "i";
// let replaceWord = "ani";

// pElem.forEach((paragraph) => {
//   let newContent = paragraph.textContent.replace(findWord.toLowerCase(), replaceWord.toLowerCase());
//   paragraph.textContent = newContent
// });

// 4. Find and Replace Text Inside a Page
let pElements = document.querySelectorAll("p");
let findWord = "am";
let replaceWord = "waxan ahay";

let regex = new RegExp(`\\b${findWord}\\b`, "gi");

pElements.forEach((paragraph) => {
  let newContent = paragraph.textContent.replace(regex, replaceWord);
  paragraph.textContent = newContent;
});

// 5. Extract and Count Unique Links from a Page

// Count all the unique hyperlinks (`<a>`) in a page and display their count.

let AllLinksEl = document.querySelectorAll("ul > a");
let allUniqueLinks = new Set();
AllLinksEl.forEach((link) => {
  allUniqueLinks.add(link.getAttribute("href"));
});

let result = document.querySelector('.links-result');
result.textContent = `There are ${allUniqueLinks.size} unique links on this page`;
