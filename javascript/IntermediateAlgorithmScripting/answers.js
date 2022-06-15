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
