console.log("Day 04");

let catchingBus = false;

if (catchingBus) {
  console.log("I will Reach home on time");
} else {
  console.log("I will be late to reach");
}

catchingBus
  ? console.log("I will Reach home on time")
  : console.log("I will be late to reach");

let age = 8;

if (age >= 18) {
  console.log("You are Eligible to Vote");
} else {
  console.log("You are NOT Eligible to Vote");
}

// Let's build a grading system
// if score is >= 90, Grade A
// if score if >= 80, Grade B
// If score if >= 70, Grade C
// Fail

let score = 76;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 80) {
  console.log("Grade B");
} else if (score >= 70) {
  console.log("Grade C");
} else if (score < 70) {
  console.log("Fail");
}

let x = 0;

if (x === 0) {
  console.log(0);
} else if (x >= 0) {
  console.log("Greater than 0");
} else if (x <= 0) {
  console.log("Less than 0");
}

const condition = false;
const innerCondition = false;

if (condition) {
  console.log("Outer if");
  if (innerCondition) {
    console.log("Inner if");
  } else {
    console.log("Inner else");
  }
} else {
  console.log("Outer else");
}

/*else {
    console.log("I am alone else")
}*/

let position = 10;

switch (position) {
  case 1:
    console.log("Print 1");
    break;
  case 2:
    console.log("Print 2");
    break;
  case 3:
    console.log("Print 3");
    break;
  case 4:
    console.log("Print 4");
    break;

  default:
    console.log("Nothing is matched");
}

// let day = 51;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;

//   default:
//     console.log("Invalid Day Number");
// }

let name = "Google";

switch (name) {
  case "tapaScript":
    console.log("Teaching 40 days of Js");
    break;
  case "google":
    console.log("Giving answer to all searches");
    break;
  default:
    console.log("You are neither google, nor tapaScript!");
}

const city = "Bangalore";
switch (city) {
  case "Bangalore":
  case "Kolkata":
  case "Agra":
  case "Jaipur":
    console.log("All these are in India");
    break;
  case "New York":
  default:
    console.log("It is in USA");
}

// DAY 4 : TASKS

// 1- What will be the output of this code snippet and why?
let day = "Monday";

switch (day) {
  case "monday":
    console.log("It's the start of the week.");
    break;
  default:
    console.log("It's a normal day.");
}

/*Answer : the output of this code is its normal day becouse,
  the day varable is Monday and the case is monday that means the day variable is capitlized 
  and when it comes the case is writen lowercase and why they are defer is javasCript is caseSensitive.
*/

// 2 - Build an ATM Cash Withdrawal System

let Withdrawal = 200;

if (Withdrawal > 100 && Withdrawal % 100 == 0) {
  console.log("withdrawal seccesfull");
} else {
  console.log("invalid amount");
}

// 3 - Build a Calculator with switch-case

let userInput = "+";
let a = 20;
let b = 10;

switch (userInput) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "/":
    console.log(a / b);
    break;
  case "%":
    console.log(a % b);
    break;

  default:
    console.log("enter valid operator");
}

// 4 : Pay for your movie ticket

let personAge = 18;

if (personAge <= 18) {
  console.log("the price is 3$");
} else if (personAge >= 18 && personAge <= 60) {
  console.log("the price is 10$");
} else {
  console.log("the price is 8$");
}

// 5 : Horoscope Sign Checker

let birthMonth = "April";

switch (birthMonth) {
  case "April":
    console.log("Your Zodiac Sign is : Aries");
    break;
  case "April":
  case "May":
    console.log("Your Zodiac Sign is : Taurus");
    break;
  case "May":
  case "June":
    console.log("Your Zodiac Sign is : Gemini");
    break;
  case "June":
  case "July":
    console.log("Your Zodiac Sign is : Cancer");
    break;
  case "July":
  case "August":
    console.log("Your Zodiac Sign is : Leo");
    break;
  case "August":
  case "September":
    console.log("Your Zodiac Sign is : Virgo");
    break;
  case "September":
  case "October":
    console.log("Your Zodiac Sign is : Libra");
    break;
  case "October":
  case "November":
    console.log("Your Zodiac Sign is : Scorpio");
    break;
  case "November":
  case "December":
    console.log("Your Zodiac Sign is : Sagittarius");
    break;
  case "December":
  case "January":
    console.log("Your Zodiac Sign is : Capricorn");
    break;
  case "January":
  case "February":
    console.log("Your Zodiac Sign is : Aquarius");
    break;
  case "February":
  case "March":
  case "March":
    console.log("Your Zodiac Sign is : Pisces");
    break;
  default:
    console.log("Enter a valid Month");
}

// 6 : Which Triangle?

let side1 = 2;
let side2 = 0;
let side3 = 1;

if (side1 === side2 && side2 === side3) {
  console.log("Equilateral Triangle");
} else if (side1 === side2 || side2 === side3 || side3 === side1) {
  console.log("Isosceles Triangle");
} else {
  console.log("Scallen Triangle");
}
