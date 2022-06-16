// palindrome

function palindrome(str) {
  let arr1 = str.split(/[\W_]/).join("").toLowerCase();
  let arr2 = arr1.split("").reverse().join("").toLowerCase();
  console.log(arr1, arr2);
  return arr1 === arr2;
}

// console.log(palindrome("{e y!e"));
console.log(palindrome("_eye"));
