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
