"use strict";
// let prompt = require("prompt-sync")();
// Home work!
//1)
// let array = [1, 5, 4, 10, 0, 3];
// for (const item of array) {
//   console.log(item);
//   if (item === 10) {
//     break;
//   }
// }

//2)
// let array = [1, 5, 4, 10, 0, 3];
// console.log(array.indexOf(4));

//3)
// let array = [1, 3, 5, 10, 20];
// console.log(array.join(" "));

//4)
// let arr = [];

// for (let i = 0; i < 3; i++) {
//   arr[i] = []; // создаем подмассив

//   for (let j = 0; j < 3; j++) {
//     arr[i].push(1);
//   }
// }

// console.log(arr);

//5)
// let arr = [1, 1, 1];
// for (let i = 3; i < 6; i++) {
//   arr.push(2);
// }
// console.log(arr);

//6)
// let arr = [9, 8, 7, "a", 6, 5];
// let res = arr.filter((item) => !isNaN(item));
// res = res.sort();
// console.log(res);

//7)
// let userInput = +prompt("Угадай мое число: ");
// const array = [9, 8, 7, 6, 5];
// if (array.includes(userInput) === true) {
//   alert("Угадал");
// } else {
//   alert("Не угадал");
// }

//8)

// function reverseString(str) {
//   let splitString = str.split("");
//   let reverseArray = splitString.reverse();
//   let joinArray = reverseArray.join("");
//   console.log(joinArray);
//   return joinArray;
// }

// reverseString("abcdef");

//9)

let array = [
  [1, 2, 3],
  [4, 5, 6],
];
let flatArray = array.flat();
console.log(flatArray);
