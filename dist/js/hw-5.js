"use strict";
// let prompt = require("prompt-sync")();

// Если передадим 6 и 6, то функция должна вернуть 6.
//!________________________1__________________________!//

// let numberOne = +prompt("Введите число первое: ");
// let numberTwo = +prompt("Введите число второе: ");

// const getSmallNumber = () => {
//   return numberOne < numberTwo ? numberOne : numberTwo;
// };

// const smallNumber = getSmallNumber();
// console.log(smallNumber);

//!________________________1__________________________!//

//!________________________2__________________________!//
// let numberOne = +prompt("Введите число : ");

// const getEvenNumber = () => {
//   return numberOne % 2 === 0 ? `Число четное` : `Число не четное`;
// };

// getEvenNumber();

//!________________________2__________________________!//

//!________________________3__________________________!//

// let numberOne = +prompt("Введите число: ");

// let getNumberSquare = () => {
//   let numberSquare = numberOne ** 2;
//   console.log(`Число в квадрате = ${numberSquare}`);
// };

// getNumberSquare();

// let getNumberSquare = () => {
//   let numberSquare = numberOne ** 2;
//   console.log(`Число в квадрате = ${numberSquare}`);
//   return numberSquare;
// };

// getNumberSquare();

//!________________________3__________________________!//

//!________________________4__________________________!//

// let issueAge = +prompt("Ваш возраст: ");

// const givePermission = (age) => {
//   if (issueAge >= 0 && issueAge <= 12) {
//     console.log(`Привет друг!`);
//   } else if (issueAge >= 13) {
//     console.log(`Добро пожаловать!`);
//   } else {
//     console.log(`Вы ввели неправильное значение`);
//   }
// };

// givePermission();

//!________________________4__________________________!//

//!________________________5__________________________!//

// const checkNumber = () => {
//   let firstNumber = +prompt("Введите первое число: ");
//   let secondNumber = +prompt("Введите второе число: ");
//   let multNum;
//   if (isNaN(firstNumber) || isNaN(secondNumber)) {
//     return "Одно или обо значения не являются числом";
//   }
//   multNum = firstNumber * secondNumber;
//   console.log(
//     `\nВведеный значения являются числами\nи их произведение - ${multNum}`
//   );
//   return multNum;
// };
// checkNumber();
//!________________________5__________________________!//

//!________________________6__________________________!//

// const checkNumDoCube = () => {
//   let cubeNum;
//   let userNum = prompt("Введите число: ");

//   if (isNaN(userNum) || userNum === "") {
//     console.log(
//       `\nПереданный параметр не является числом или является пустой строкой`
//     );
//     return `Переданный параметр не является числом`;
//   } else if (userNum >= 0 && userNum <= 10) {
//     cubeNum = userNum * userNum * userNum;
//     console.log(`\n${userNum} в кубе равняется ${cubeNum}`);
//     return `${userNum} в кубе равняется ${cubeNum}`;
//   } else if (userNum > 10 || userNum < 0) {
//     console.log("Вы больше или меньше 10");
//   }
// };

// checkNumDoCube();

//!________________________6__________________________!//

//!________________________7__________________________!//

// function getArea() {
//   let area = Math.PI * Math.pow(this.radius, 2);
//   area = area.toFixed(2);
//   console.log(`\nПлощадь окружности '${this.name}' равна - ${area} м2.`);
//   return area;
// }

// function getPerimeter() {
//   let perimetr = 2 * Math.PI * this.radius;
//   perimetr = perimetr.toFixed(2);
//   console.log(`\nПериметр окружности '${this.name}' равен - ${perimetr} м.`);
//   return perimetr;
// }

// const circle1 = {
//   name: "circle1",
//   radius: 20,
//   area: getArea,
//   perimetr: getPerimeter,
// };

// const circle2 = {
//   name: "circle2",
//   radius: 35,
//   area: getArea,
//   perimetr: getPerimeter,
// };

// circle1.perimetr();
// circle1.area();
// circle2.perimetr();
// circle2.area();
//!________________________7__________________________!//

//!________________________7__________________________!//

function giveSeason() {
  let numberOfSeason = +prompt("Напишите любое число месяца от 1 до 12: ");
  if (numberOfSeason === 12 || numberOfSeason === 1 || numberOfSeason === 2) {
    alert("Это зима");
  } else if (
    numberOfSeason === 3 ||
    numberOfSeason === 4 ||
    numberOfSeason === 5
  ) {
    alert("Это вестна");
  } else if (
    numberOfSeason === 6 ||
    numberOfSeason === 7 ||
    numberOfSeason === 8
  ) {
    alert("Это лето");
  } else if (
    numberOfSeason === 9 ||
    numberOfSeason === 10 ||
    numberOfSeason === 11
  ) {
    alert("Это осень");
  } else {
    alert("Нет такого числа");
  }
}

giveSeason();

//!________________________7__________________________!//
