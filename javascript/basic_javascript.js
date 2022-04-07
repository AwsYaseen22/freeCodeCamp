// Profile Lookup

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  let hasName = false;
  let findProp = false;
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i]["firstName"] === name) {
      hasName = hasName == false ? true : false;
      if (contacts[i].hasOwnProperty(prop)) {
        findProp = true === false ? true : false;
        return contacts[i][prop];
      }
    }
  }
  if (hasName === false) {
    return "No such contact";
  } else if (!findProp) {
    return "No such property";
  }
  // Only change code above this line
}

console.log(lookUpProfile("Akira", "address"));

// ################################################

// Generate Random Fractions with JavaScript

function randomFraction() {
  // Only change code below this line

  return Math.random();

  // Only change code above this line
}

// ################################################
// Generate Random Whole Numbers with JavaScript

function randomWholeNum() {
  // Only change code below this line
  return Math.floor(Math.random() * 10);
}

// ################################################
// Generate Random Whole Numbers within a Range
function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  // Only change code above this line
}
// console.log(randomRange(2, 6));

// ################################################
// Use the parseInt Function
function convertToInteger(str) {
  return parseInt(str);
}

console.log(convertToInteger("0056"));

// ################################################
// Use the parseInt Function with a Radix
function convertToInteger(str) {
  return parseInt(str, 2);
}

console.log(convertToInteger("10011"));

// ################################################

// Use the Conditional (Ternary) Operator
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

console.log(checkEqual(1, 2));

// ################################################

// Use Multiple Conditional (Ternary) Operators

function checkSign(num) {
  return num > 0 ? "positive" : num === 0 ? "zero" : "negative";
}

console.log(checkSign(0));

// ################################################

// Use Recursion to Create a Countdown

function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArr = countdown(n - 1);
    countArr.unshift(n);
    console.log(countArr);
    return countArr;
  }
}
console.log(countdown(3));

// ################################################

// Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  } else {
    let rangeArr = rangeOfNumbers(startNum + 1, endNum);
    rangeArr.unshift(startNum);
    return rangeArr;
  }
}

console.log(rangeOfNumbers(3, 7));
