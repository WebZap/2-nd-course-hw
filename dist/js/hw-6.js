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

// let array = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// let flatArray = array.flat();
// console.log(flatArray);

// 10)
// let array = [1, 2, 3, 4, 5, 6, 1, 2];
// for (let i = 0; i < array.length - 1; i++) {
//   let resultPlus;
//   resultPlus = array[i] + array[i + 1];
//   console.log(resultPlus);
// }

// 11)
// let array = [1, 2, 3, 4, 5];
// function arrayTwo(array) {
//   let result = array.map((el) => Math.pow(el, 2));
//   return result;
// }
// let arrayMap = arrayTwo(array);
// console.log(arrayMap);
// 12)
// let array = ["слово", "", "слог", "длинное предложение", "буква"];
// function getLengthWords(params) {
//   let resultArray = [];
//   array.map((el) => {
//     resultArray.push(el.length);
//   });
//   console.log(resultArray);
//   return resultArray;
// }

// getLengthWords(array);
// 13)
// let array = [-1, 0, 5, -10, 56];
// function filterPositive(arrayInput) {
//   let filterArray = arrayInput.filter((el) => el < 0);
//   console.log(filterArray);
//   return filterArray;
// }

// filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
// filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2

//

// Задание 15
// Создайте массив, состоящий из 6 элементов. Элементы массива необходимо сгенерировать с помощью
// Math.random()
//  в диапазоне от 1 до 10.

// Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль.

// Для получения среднего арифметического необходимо все значения массива сложить и разделить на количество элементов в массиве.

// 14)
// function giveArrEvAll() {
//   let arrRandom = [];
//   let evenDigits = [];
//   for (let i = 0; i < 10; i++) {
//     arrRandom.push(Math.round(Math.random() * 10));
//   }
//   evenDigits = arrRandom.filter((el) => el % 2 === 0);
//   console.log(arrRandom);
//   console.log(evenDigits);
// }

// giveArrEvAll();
