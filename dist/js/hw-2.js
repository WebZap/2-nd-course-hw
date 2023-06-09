"use strict";

//!----1----!//
// let a = 10;
// a = 20;
// alert(a);
//!----1-----//


//!----2----!//
// let releaseIphone = "2007";
// alert(Number(releaseIphone));
//!----2----!//


//!----3----!//
// let creatorJs = "Brendan Eich";
// alert(creatorJs);
//!----3----!//


//!----4----!//
// let firstCount = 10;
// let secondCount = 2;
// let dataOper = {
//     sum: null,
//     diff: null,
//     product: null,
//     quotient: null,
// };
// function mathOper(a,b) {
//     alert("The sum will be - "+ (dataOper.sum = firstCount + secondCount));
//     alert("The diff will be - "+(dataOper.diff = firstCount - secondCount));
//     alert("The product will be -"+(dataOper.product = firstCount * secondCount));
//     alert("The quetient will be -"+(dataOper.quotient = firstCount / secondCount));
//     return;
// };
// mathOper(firstCount, secondCount);
//!----4----!//


//!----5----!//
// let firstCount = 2;
// let degreeCount = 5;
// let myDegreeFunction = (a,b) => {
//     let result = a**b;
//     alert(result);
//     return result;
// }
// myDegreeFunction(firstCount, degreeCount);
//!----5----!//


//!----6----!//
// let a = 9;
// let b = 2;
// let remainderFinder = (firstCount, secondCount) => alert(firstCount % secondCount);
// remainderFinder(a,b);
//!----6----!///

//!----7----!///
// let num = 1;
// num += 5;
// num -= 3;
// num *= 7;
// num /= 3;
// num += 3;
// num -= 1;
// alert(num);
//!----7----!///


//!----8----!//
// let age = prompt("How old are you?");
// alert(`You are ${age} years!\n Congratulations!`);
//!----8----!//


// //!----9----!//
// let user = {
//     name: 'Elon',
//     age: 51,
//     isAdmin: true
// };

// user['city of residence'] =  null;
// user.age = 22;1
// delete user['city of residence'];


// let info = Number(prompt("Which info of user \n do you want to know? \n 1 - name \n 2 - age \n 3 - admin?"));
// let showData = () =>{
//     let choiceUser = --info;
//     let nameProperty = Object.keys(user)[choiceUser];
//     let namePropertyValue = Object.values(user)[choiceUser];
//     if (choiceUser <= 2){
//         alert(`User's data of ${nameProperty} is a ${namePropertyValue}`);
//     } else {
//         alert(`We have't this choice: ${info + 1}`)
//     }
    
// }
// showData(user);
//!----9----!//


//!----10----!//
// let coderName = prompt('What is your name coder?');
// alert(`Hello, ${coderName}!`);
//!----10----!//

