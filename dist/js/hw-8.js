"use strict";
// TASK 1

// const people = [
//   { name: "Gleb", age: 29 },
//   { name: "Anna", age: 17 },
//   { name: "Oleg", age: 7 },
//   { name: "Oksana", age: 47 },
// ];

// console.log(people.sort((prev, next) => prev.age - next.age));

// TASK 2

// function isPositive(el) {
//   return el >= 0;
// }
// function isMale(arr) {
//   return arr.gender === "male";
// }
// function filter(arr, ruleFuction) {
//   return arr.filter(ruleFuction);
// }

// console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

// const people = [
//   { name: "Глеб", gender: "male" },
//   { name: "Анна", gender: "female" },
//   { name: "Олег", gender: "male" },
//   { name: "Оксана", gender: "female" },
// ];

// console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

// TASK 3

// function logDate() {
//   let counter = 0;

//   const interval = setInterval(function () {
//     const currentDate = new Date().toString();
//     console.log(currentDate);
//     counter++;

//     if (counter === 10) {
//       clearInterval(interval);
//       console.log("Прошло 30 секунд");
//     }
//   }, 3000);
// }

// logDate();

// TASK 4
// function delayForSecond(callback) {
//   setTimeout(callback, 1000);
// }

// delayForSecond(function () {
//   console.log("Привет, Глеб!");
// });

//TASK 5
// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда»,
// а затем вызывает переданный колбэк
// function delayForSecond(cb) {
//   setTimeout(() => {
//     console.log("Прошла одна секунда");
//     if (cb) {
//       cb();
//     }
//   }, 1000);
// }

// // Функция sayHi выводит в консоль приветствие для указанного имени
// function sayHi(name) {
//   console.log(`Привет, ${name}!`);
// }

// // Код выше менять нельзя

// // Нужно изменить код ниже:
// delayForSecond(() => {
//   sayHi("Глеб");
// });
