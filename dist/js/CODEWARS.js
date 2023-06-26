"use strict";
// 1)
// function sumDigits(num) {
//   let numb = String(num);
//   const arr = numb.split("");
//   let sum = 0;

//   for (el of arr) {
//     if (el === "-") continue;
//     sum += +el;
//   }
//   return sum;
// }

// console.log(sumDigits(-1231));

// 2)
// function getMiddle(string) {
//   let array = string.split("");
//   while (array.length > 2) {
//     array.pop();
//     array.shift();
//   }
//   let arrayString = array.join("");
//   console.log(arrayString);
//   return arrayString;
// }

// getMiddle("test");

// 3)

// function solution(str, ending) {
//   let revStr = str.split("").reverse().join("").slice(0, ending.length);
//   str = revStr.split("").reverse().join("");
//   console.log(ending === str);
//   return ending === str;
// }
// solution("123", "123");

// 4)

// arr.sort(function (a, b) {
//   // ASC  -> a.length - b.length
//   // DESC -> b.length - a.length
//   return b.length - a.length;
// });

// function sortByLength(array) {
//   let arrayTop = array.sort(function (a, b) {
//     return a.length - b.length;
//   });
//   console.log(arrayTop);
//   return arrayTop;
// }

// sortByLength(["Beg", "Life", "I", "To"]);

// 5)
function sumMul(n, m) {
  let array = [];
  let sumEven = 0;
  for (let i = n; i <= m; i++) {
    array.push(i);
  }
  let filterEven = array.filter((el) => el % 2 === 0);
  for (let i = 0; i < filterEven.length; i++) {
    sumEven += filterEven[i];
    console.log(sumEven);
  }
  console.log(sumEven);
  console.log(array);
  console.log(filterEven);
}

sumMul(3, 13);
