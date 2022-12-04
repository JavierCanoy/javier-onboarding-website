// let name = "dung ";
// function mine() {
//   document.getElementById("name").innerHTML = " done !  ";
// }
// function back() {
//   document.getElementById("name").innerHTML = "d";
// }

// let teacher = "javiesdwr";
// console.log(teacher);

//let use for if you want to change the value in the future !
// let name = true;

// console.log(typeof name);
// name = "javier";
// console.log(typeof name);

// let me;
// me = "2";

// console.log(me);
// console.log(typeof me);

// constant cant be change in the fugfure and cant be undifined
// const birth = 20;
// const year; need to intializ
// birth = 21;

//var same as let ! can change value
// var firstName = "jav2ier";
// firstName = "jonathan";
// console.log(firstName);

// operator

// const agejavier = 22;
// const agejonathan = 51;

// console.log(agejavier / 2);
// console.log(agejavier * 2, 2 ** 3);

//2 ** 3 means 2 to the power of 3  like 2 * 2 * 2

// const lastName = "bernadas";
// const lastage = "21";
// const space = " ";

// console.log(lastName + space + lastage);

//compareson operator (> , > , <= , >= , ==)

// console.log(agejavier > agejonathan);
// console.log(agejavier >= 22);
// console.log(typeof agejavier);

// let bmiResultMark;
// let bmiResultJohn;
// let markHResult;
// const markMAss = 78;
// const markHeigth = 1.69;

// const johnkMAss = 98;
// const johnHeigth = 1.95;

// bmiResultMark = markMAss / markHeigth ** 2;
// bmiResultJohn = johnkMAss / johnHeigth ** 2;

// console.log(bmiResultJohn, bmiResultMark);
// markHResult = bmiResultJohn > bmiResultMark;
// console.log(markHResult);

//Stirng
// const firstName = "javier";
// const lastName = "canoy";
// const job = "teacher";
// const byear = 2000;
// const yearNow = 2022;

// const javier =
//   "I'm " +
//   firstName +
//   " " +
//   lastName +
//   "  " +
//   (yearNow - byear) +
//   " a" +
//   " teacher " +
//   "!";

// console.log(javier);
// //using back text $
// const javierNew = ` I'm  ${firstName} , ${lastName} , ${
//   yearNow - byear
// } years old and im a ${job}`;

// console.log(javierNew);

//if statment

// const ageJavier = 21;
// const agejonathan = 21;

// if (agejonathan == ageJavier) {
//   console.log(`they are the same age ! ...`);
// } else if (agejonathan > ageJavier) {
//   console.log(` ${agejonathan} is older than ${ageJavier}  `);
// } else {
//   console.log(`  ${ageJavier} is yung than ${agejonathan} `);
// }

// const age = "12";
// console.log(typeof age);
// console.log(Number(age) + 2);
// console.log(Number(age));

//coertion

// console.log("2" + 1);
// console.log("2" * 5);

// let num1 = "1" + 2;
// num1 = num1 - 1;
// console.log(num1);

//5 false value 0, "" , null ,NaN, undefined

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("JAVIER"));
// console.log(Boolean({}));

//Equality operators == vs === and != vs !==
// Rmder = always use strick ===equality to compare value

// const age = 12;
// const name = "20";
// console.log(age === 12);
// console.log(name == 20);

// const favNumber = Number(prompt("enter your fav number  ? "));
// console.log(favNumber);

// if (favNumber === 2) {
//   console.log("we are the same fav ! ");
// } else {
//   console.log("were not the same ! ");
// }
//----------
//Basic Boolean Logic The and, or & not operators

// const javierAge = 22;
// const jonathanAge = 51;

//some declaration
//--------

// const num1 = true;
// const num2 = false;

// //or
// if (num1 || num2) {
//   console.log("some of them ar correct ! ");
// }
// //and
// if (num1 && num2) {
//   console.log("some of them ar correct ! ");
// } else {
//   console.log("all of them are correct ! ");
// }
// // something new !

// if (!num2) {
//   console.log("this is false !");
// }

// //and ------
// if (javierAge >= 22 && jonathanAge >= 22) {
//   console.log("yes 2 are both true");
// } else {
//   console.log("some of them are wrong ! ");
// }
// // or ------
// if (javierAge === 22 || jonathanAge > 100) {
//   console.log("one of them are correct ! ");
// } else {
//   console.log("two of them are wrong ! ");
// }

// const minimum = 100;
// const javierTeamTotalScore = 88 + 112 + 11;
// const jonathanTeamTotalScore = 18 + 112 + 101;

// const javierAverage = javierTeamTotalScore / 3;
// const jonathanAverage = jonathanTeamTotalScore / 3;
// // udemy declaration ! ----
// //const javierteam = (2 + 12 + 21) / 3 ;
// if (javierAverage >= minimum && javierAverage > jonathanAverage) {
//   console.log(`javier team wins  , ${javierAverage}`);
// } else if (jonathanAverage >= minimum && jonathanAverage > javierAverage) {
//   console.log(`jonathan team wins ${jonathanAverage}`);
// } else if (jonathanAverage === javierAverage) {
//   console.log("we have a draw ! ");
// } else {
//   console.log("no team has pass the average ! ");
// }

//Swicth Statement !
// const numbers = prompt("enter your numbre ");
// switch (numbers) {
//   case "2":
//     console.log("you enter a number 2 ");
//     break;
//   case "1":
//     console.log("you enter a number  1");
//     break;
//   default:
//     console.log("you type is not a number ! ");
// }

//statement ang expressions

//conditional (ternary) operator but if else if needed all the time samot nag dako nag code then daghan nag condition !

// age = 21;

// age >= 18
//   ? console.log(" you can drink a beer ! ")
//   : console.log("you cant ! drink a beer your to young ! ");

// const drink = age >= 18 ? "beer ! " : "water ! ";
// console.log(drink);

// console.log(` i like to drink ! ${age >= 12 ? " beer ! " : "just water ! "} `);

// const bill = 300;
// const tip = 1;

// const value = bill + tip;

// console.log(value);
// // value <= 50 ? `${value % 15}` : `${value % 20}`;
// console.log(
//   value <= 50
//     ? `15 % of , ${value * 0.15}`
//     : value <= 300
//     ? ` 15% 0f, ${value * 0.15}`
//     : `20%  of , ${value * 0.2}`
// );
// 'use strict'; to make a visible error !

// `use strict`;
// const private = 123;
