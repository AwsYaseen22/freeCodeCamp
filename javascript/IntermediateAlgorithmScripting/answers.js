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
