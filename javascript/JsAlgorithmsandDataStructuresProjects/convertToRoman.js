// Roman Numeral Converter

// Too long

// function convertToRoman(num) {
//   let numObj = {
//     1: "I",
//     4: "IV",
//     5: "V",
//     9: "IX",
//     10: "X",
//     40: "XL",
//     50: "L",
//     90: "XC",
//     100: "C",
//     400: "CD",
//     500: "D",
//     900: "CM",
//     1000: "M",
//   };

//   let ones = {
//     1: "I",
//     10: "X",
//     100: "C",
//     1000: "M",
//   };

//   // convert number array of chuck of making numbers
//   let arr = num
//     .toString()
//     .split("")
//     .map((s, i, arr) => {
//       if (s === "0") {
//         return "";
//       }
//       let multi = Number("1" + "0".repeat(arr.length - 1 - i));
//       return s * multi;
//     });

//   console.log(arr);
//   return arr
//     .map((d) => {
//       let prev = 1;
//       let currentNumb;
//       for (const key in numObj) {
//         if (Number(key) === d) {
//           console.log(d);
//           d = numObj[key];
//           break;
//         } else if (d < Number(key) && d > prev) {
//           currentNumb = d - prev;
//           let theOne = "1" + "0".repeat(String(currentNumb).length - 1);
//           console.log(key, prev, d, currentNumb, theOne);
//           d = numObj[prev];
//           while (currentNumb > 0) {
//             d = d + ones[theOne];
//             currentNumb -= theOne;
//           }
//         }
//         prev = Number(key);
//       }
//       return d;
//     })
//     .join("");
// }

function convertToRoman(num) {
  let numObj = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = "";
  for (const key in numObj) {
    while (num >= numObj[key]) {
      num -= numObj[key];
      result += key;
    }
  }
  return result;
}

// console.log(convertToRoman(141));
// console.log(convertToRoman(501));
console.log(convertToRoman(649));
// console.log(convertToRoman(501));
