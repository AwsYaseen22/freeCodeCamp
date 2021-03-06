// Intermediate Algorithm Scripting

// Sum All Numbers in a Range
function sumAll(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let result = 0;
  for (let i = min; i <= max; i++) {
    result += i;
  }
  return result;
}

// console.log(sumAll([4, 1]));

// ######################################################

// Diff Two Arrays

function diffArray(arr1, arr2) {
  let res1 = arr1.filter((e) => {
    return !arr2.includes(e);
  });
  let res2 = arr2.filter((e) => {
    return !arr1.includes(e);
  });
  return res1.concat(res2);
}

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// ######################################################

// Seek and Destroy

function destroyer(arr) {
  let argArr = Object.values(arguments).slice(1);
  return arr.filter((e) => !argArr.includes(e));
}

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

// ######################################################

// Wherefore art thou

function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  let sourceArr = Object.keys(source);
  for (let i = 0; i < collection.length; i++) {
    let result = [];
    for (let j = 0; j < sourceArr.length; j++) {
      result.push(collection[i][sourceArr[j]] === source[sourceArr[j]]);
    }
    if (result.every((b) => b === true)) {
      arr.push(collection[i]);
    }
  }
  // Only change code above this line
  return arr;
}

// console.log(
//   whatIsInAName(
//     [
//       { first: "Romeo", last: "Montague" },
//       { first: "Mercutio", last: null },
//       { first: "Tybalt", last: "Capulet" },
//     ],
//     { last: "Capulet" }
//   )
// );

// ######################################################

// Spinal Tap Case

function spinalCase(str) {
  let refined = str;

  return refined
    .split("")
    .map((e, i, arr) => {
      // console.log(e, i, arr);
      if (i > 0 && e.toLowerCase() !== e) {
        if (/[a-z]/.test(arr[i - 1])) {
          return " " + e;
        } else {
          return e;
        }
      } else {
        return e;
      }
    })
    .join("")
    .toLowerCase()
    .split(/[ ._-]/)
    .join("-");
}

// console.log(spinalCase("This Is_Spinal Tap"));
// console.log(spinalCase("thisIsSpinalTap"));
// console.log(spinalCase("This Is Spinal Tap"));
// console.log(spinalCase("The_Andy_Griffith_Show"));

// ######################################################

// Pig Latin

function translatePigLatin(str) {
  let vowels = "aeiou".split("");
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      if (i > 0) {
        return str.slice(i) + str.slice(0, i) + "ay";
      } else {
        return str + "way";
      }
    }
  }
  return str + "ay";
}

// console.log(translatePigLatin("consonant"));
// console.log(translatePigLatin("rhythm"));

// ######################################################

// Search and Replace

function myReplace(str, before, after) {
  if (before[0].toLowerCase() !== before[0]) {
    after = after.slice(0, 1).toUpperCase() + after.slice(1);
  } else {
    after = after.slice(0, 1).toLowerCase() + after.slice(1);
  }
  return str.replace(before, after);
}

// console.log(
//   myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped")
// );
// console.log(myReplace("I think we should look up there", "up", "Down"));

// ######################################################

// DNA Pairing

function pairElement(str) {
  let dnaObj = { A: "T", T: "A", C: "G", G: "C" };
  return str.split("").map((e) => [e, dnaObj[e]]);
}

// console.log(pairElement("GCG"));

// ######################################################

// Misising letters

function fearNotLetter(str) {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let chunk = letters.slice(
    letters.indexOf(str[0]),
    letters.indexOf(str[str.length - 1]) + 1
  );
  let result = chunk
    .split("")
    .filter((e) => !str.includes(e))
    .join("");
  return result.length > 0 ? result : undefined;
}

// console.log(fearNotLetter("abcg"));

// ######################################################

// Sorted Union

function uniteUnique(arr) {
  let result = [];
  let args = Object.keys(arguments);
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      if (!result.includes(arguments[i][j])) {
        result.push(arguments[i][j]);
      }
    }
  }
  return result;
}

// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// ######################################################

// Convert HTML Entities

function convertHTML(str) {
  let symb = "&<>\"'".split("");
  let enti = ["&amp;", "&lt;", "&gt;", "&quot;", "&apos;"];
  return str
    .split("")
    .map((l) => {
      if (symb.includes(l)) {
        return enti[symb.indexOf(l)];
      } else {
        return l;
      }
    })
    .join("");
}

// console.log(convertHTML("Dolce & Gabbana"));

// ######################################################

// Sum All Odd Fibonacci Numbers

function sumFibs(num) {
  let fib = [1, 1];
  let last = fib[fib.length - 1] + fib[fib.length - 2];
  while (last <= num) {
    fib.push(last);
    last = fib[fib.length - 1] + fib[fib.length - 2];
  }
  return fib.filter((e) => e % 2 !== 0).reduce((acc, cur) => (acc += cur), 0);
}

// console.log(sumFibs(10));
// console.log(sumFibs(4));
// console.log(sumFibs(1));
// console.log(sumFibs(75025));

// ######################################################

// Sum All Primes

function sumPrimes(num) {
  let result = [];
  for (let i = 2; i <= num; i++) {
    let temp = [];
    for (let j = 2; j <= i; j++) {
      if (i % j === 0) {
        temp.push(j);
      }
    }
    if (temp.length === 1) {
      result.push(i);
    }
  }
  return result.reduce((acc, cur) => acc + cur, 0);
}

// console.log(sumPrimes(977));

// ######################################################

// Smallest Common Multiple

function smallestCommons(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let limit = 1;
  let between = [];
  for (let i = min; i <= max; i++) {
    between.push(i);
    limit *= i;
  }
  let result = [];
  for (let i = 2; i < limit; i++) {
    if (between.every((n) => i % n === 0)) {
      return i;
    }
  }
  // console.log(limit, between, result);
}

// console.log(smallestCommons([1, 5]));
// console.log(smallestCommons([2, 10]));

// ######################################################

// Drop it

function dropElements(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr.slice(i);
    }
  }
  return [];
}

// console.log(
//   dropElements([1, 2, 3, 4], function (n) {
//     return n >= 3;
//   })
// );

// ######################################################

// Steamroller

function steamrollArray(arr) {
  let result = [].concat(...arr);
  return result.some((e) => Array.isArray(e)) ? steamrollArray(result) : result;
}

// console.log(steamrollArray([1, [2], [3, [[4]]]]));
// console.log(steamrollArray([1, {}, [3, [[4]]]]));

// ######################################################

// Binary Agents

function binaryAgent(str) {
  return str
    .split(" ")
    .map((l) => String.fromCharCode(parseInt(l, 2)))
    .join("");
}

// console.log(
//   binaryAgent(
//     "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
//   )
// );

// ######################################################

// Everything Be True

function truthCheck(collection, pre) {
  return collection.every((obj) => obj[pre]);
}

// console.log(
//   truthCheck(
//     [
//       { name: "Quincy", role: "Founder", isBot: false },
//       { name: "Naomi", role: "", isBot: false },
//       { name: "Camperbot", role: "Bot", isBot: true },
//     ],
//     "isBot"
//   )
// );

// ######################################################

// Arguments Optional

function addTogether() {
  let arg = Object.values(arguments);
  if (arg.some((n) => typeof n !== "number")) {
    return undefined;
  }
  if (arg.length === 2) {
    return arg[0] + arg[1];
  } else {
    return function (num) {
      if (typeof num !== "number") {
        return undefined;
      }
      return arg[0] + num;
    };
  }
}

// console.log(addTogether(2, 3));
// console.log(addTogether(5)(7));

// ######################################################

// Make a Person

const Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFullName = function () {
    return firstAndLast;
  };
  this.getFirstName = function () {
    return firstAndLast.split(" ")[0];
  };
  this.getLastName = function () {
    return firstAndLast.split(" ")[1];
  };
  this.setFirstName = function (first) {
    let fullArr = firstAndLast.split(" ");
    fullArr[0] = first;
    firstAndLast = fullArr.join(" ");
  };
  this.setLastName = function (last) {
    let fullArr = firstAndLast.split(" ");
    fullArr[1] = last;
    firstAndLast = fullArr.join(" ");
  };
  this.setFullName = function (newFull) {
    firstAndLast = newFull;
    return firstAndLast;
  };
};

// const bob = new Person("Bob Ross");

// bob.setFirstName("Haskell");
// console.log(bob.getFirstName("Haskell"));

// console.log(bob.getFullName());

// ######################################################

// Map the Debris

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.map((e) => {
    let result = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + e.avgAlt, 3) / GM)
    );
    delete e.avgAlt;
    e.orbitalPeriod = result;
    return e;
  });
}

// console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));

// ######################################################
