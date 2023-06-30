"use strict";
//TASK_1

// function toUpperString(string) {
//   let upperString = string.toUpperCase();
//   console.log(upperString);
//   return upperString;
// }

// toUpperString("js");

// TASK 2

// function startWith(array, value) {
//   let result = [];
//   let lowerCaseArray = array.map((el) => el.toLowerCase());
//   lowerCaseArray.forEach((element) => {
//     if (element.startsWith(value)) {
//       result.push(element);
//     }
//   });
//   console.log(result);
// }

// startWith(["Кошка", "Кит", "Комар", "Носорог"], "ко");
// startWith(["яблоко", "груша", "гриб", "огурец"], "гру");
// startWith(["Дом", "Банк", "Больница", "Театр"], "Кино");

// TASK 3
// Округлите число 32.58884:

// function roundNum(num) {
//   console.log(Math.floor(num), Math.ceil(num), Math.round(num));
// }

// roundNum(32.58884);

// TASK 4

// console.log(Math.max(52, 53, 49, 77, 21, 32), Math.min(52, 53, 49, 77, 21, 32));

//TASK 5
// function randomNumber() {
//   let randomNumber = Math.floor(Math.random() * 10);
//   console.log(randomNumber);
// }

// randomNumber();

// TASK 6

// function getRandomArrNumbers(num) {
//   let result = [];
//   for (let i = 0; i < Math.floor(num / 2); i++) {
//     result.push(Math.round(Math.random() * num));
//   }
//   console.log(result);
// }
// getRandomArrNumbers(13);

//TASK 7
// function getRandomRangeNumber(min, max) {
//   let res;
//   res = Math.floor(Math.random() * (max - min + 1)) + min;
//   console.log(res);
//   return res;
// }

// getRandomRangeNumber(4, 20);

// TASK 8

// let toDayShort = new Date().toISOString().slice(0, 10);
// let toDay = new Date();
// console.log(toDay);
// console.log(toDayShort);

// TASK 9

// let currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 72);
// console.log(currentDate.toISOString().slice(0, 10));

// // TASK 10

// function displayDateAndTime() {
//   const daysOfWeek = [
//     "воскресенье",
//     "понедельник",
//     "вторник",
//     "среда",
//     "четверг",
//     "пятница",
//     "суббота",
//   ];
//   const months = [
//     "января",
//     "февраля",
//     "марта",
//     "апреля",
//     "мая",
//     "июня",
//     "июля",
//     "августа",
//     "сентября",
//     "октября",
//     "ноября",
//     "декабря",
//   ];
//   //Получение объекта Date
//   let nowDate = new Date();
//   //Получение дня недели с заглавной буквы
//   let getDayWeek =
//     daysOfWeek[nowDate.getDay()].charAt(0).toUpperCase() +
//     daysOfWeek[nowDate.getDay()].slice(1);
//   //Получение даты в числе
//   let getDateWeek = nowDate.getDate();
//   //Получение месяца в букавках
//   let getDateMonth =
//     months[nowDate.getMonth()].charAt(0).toUpperCase() +
//     months[nowDate.getMonth()].slice(1);
//   //Получения года в цифрах
//   let getDateYear = nowDate.getFullYear();
//   //Получение часиков
//   let getDateHours = nowDate.getHours();
//   //Получение минуточек
//   let getDateMinuts = nowDate.getMinutes();
//   //Получение секундочек
//   let getDateSecunds = nowDate.getSeconds();

//   let DATE = `Дата: ${getDateWeek} ${getDateMonth} ${getDateYear} - это ${getDayWeek}`;
//   let TIME = `Время: ${getDateHours}:${getDateMinuts}:${getDateSecunds}`;
//   console.log(DATE);
//   console.log(TIME);
// }
// displayDateAndTime();

//
let prompt = require("prompt-sync")();
let arrayFructs = [
  "Apple",
  "Pear",
  "Melon",
  "Grape",
  "Peach",
  "Orange",
  "Tangerines",
];

function shuffleElemnts(array) {
  let randomArray = array.sort(() => Math.random() - 0.5);
  console.log(randomArray);
  let firstItem = prompt("Чему равнялся первый элемент массива?");
  let secondItem = prompt("Чему равнялся второй элемент массива?");
  for (let i = 0; i < randomArray.length; i++) {
    if (firstItem === randomArray[i] && secondItem === randomArray[i + 1]) {
      console.log(`Вы правильно сказали!`);
    } else if (
      firstItem !== randomArray[i] ||
      secondItem !== randomArray[i + 1]
    ) {
      console.log(`была бы победа`);
      break;
    } else {
      console.log(`Все неверно!`);
    }
  }
}

shuffleElemnts(arrayFructs);
