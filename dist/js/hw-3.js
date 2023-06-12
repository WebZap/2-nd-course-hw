"use strict";
// let prompt = require("prompt-sync")();

//!-----1-----!/;

// let password, userInput;

// password = "pass001";
// userInput = prompt("Enter your password: ");
// password == userInput
//   ? console.log("Password right!")
//   : console.log("Password !WRONG! ");

//!-----1-----!/;

//!-----2-----!/;

// let c = Number(prompt("Enter number not more then 10 and not less then 10: "));

// c > 0 && c < 10 ? console.log("Right") : console.log("Not right");

//!-----2-----!/;

//!-----3-----!/;

// let d, e;

// d = Number(prompt("Enter first count: "));
// e = Number(prompt("Enter second count: "));
// if (d < 100 || e < 100) {
//   console.log("Right");
// } else {
//   console.log("Not right");
// }

//!-----3-----!/;

//!-----4-----!/;

// let a = Number("2");
// let b = Number("3");

// alert(a + b);

//!-----4-----!/;

//!-----5-----!/;

// let month = +prompt("Enter number of month: ");

// switch (month) {
//   case 1:
//   case 2:
//   case 3:
//     console.log("This is winter");
//     break;
//   case 4:
//   case 5:
//   case 6:
//     console.log("This is spring");
//     break;
//   case 7:
//   case 8:
//   case 9:
//     console.log("This is spring");
//     break;
//   case 10:
//   case 11:
//   case 12:
//     console.log("This is spring");
//     break;
//   default:
//     console.log("Not exist this month");
//     break;
// }

//!-----5-----!/;

//!-----7-----!/;

// let input = +prompt("Enter any number:  ");

// if (!isNaN(input)) {
//   if (input % 2 == 0) {
//     alert("The number is even");
//   } else {
//     alert("The number is not even");
//   }
// } else {
//   alert("It's not number, byu!");
// }

//!-----7-----!/;

//!-----8-----!/;

// const OS = {
//   android: 0,
//   ios: 1,
// };

// let clientOs = OS.android;

// if (clientOs === 0) {
//   console.log("Install app's version for iOS by link -> ");
// } else {
//   console.log("Install app's version for Android by link -->");
// }

//!-----8-----!/;

//!-----9-----!/;

// const OS = {
//   android: 1,
//   ios: 0,
// };

// let dotLightVersion = 2015;
// let clientDeviceYear = 2014;
// let clientOs = OS.android;

// if (clientOs === 0 && clientDeviceYear >= dotLightVersion) {
//   console.log("Install app's version for iOS by link -> ");
// } else if (clientOs === 0 && clientDeviceYear < dotLightVersion) {
//   console.log("Install app's light version for iOS by link  -> ");
// } else if (clientOs === 1 && clientDeviceYear < dotLightVersion) {
//   console.log("Install app's light version for Android by link -> ");
// } else if (clientOs === 1 && clientDeviceYear >= dotLightVersion) {
//   console.log("Install app's version for Andorid by link -> ");
// }

//!-----9-----!/;
