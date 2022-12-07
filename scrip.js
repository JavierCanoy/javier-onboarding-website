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
// const bill = 400;
// let tip;
// console.log(bill);
// // value <= 50 ? `${value % 15}` : `${value % 20}`;
// console.log(
//   bill <= 50
//     ? `15 % of , ${(tip = bill * 0.15)} , ${tip + bill}`
//     : bill <= 300
//     ? ` 15% 0f, ${(tip = bill * 0.15)} , ${tip + bill}`
//     : `20%  of ,  ${(tip = bill * 0.2)} ,${tip + bill}  `
// );

// use strict
// "use strict";
// const interface = `Audio`;
//defrnt developer dprd deprnt format !
//function ! kung value pwdy na gunitan sa variables !
// function studentData(firstName, age, schoolname) {
//   console.log(firstName, age, schoolname);
// }

// studentData("javierbernadascanoy ! ", 12, "tagum national trade school");
// studentData("jonathan bernadas canoy ! ! ", 51, "tagum national trade school");

// // 1.function declaration  vs 2.expression !
// //1fucntiondec
// function age1(birthday) {
//   return 2022 - birthday;
// }

// console.log(`${age1(1982)}`);

// //2expression
// const age2 = function (birthday) {
//   return 2022 - birthday;
// };

// console.log(`${age2(1982)}`);
//arrow function ! pfrd for one liner !

// const age3 = (birthday) => 2022 - birthday;
// console.log(`${age3(1982)}`);

//arrow function but have more than a one blocks of code !

// const retire = (birthyear, firstName) => {
//   const age = 2022 - birthyear;
//   const retirement = 60 - age;

//   return ` ${firstName} retire in ${retirement} ,years more ! `;
// };

// console.log(`${retire(1982, "javier ")}`);
// console.log(`${retire(1978, "jonathan !  ")}`);

//function calling function !

// function cutfrt(frts) {
//   return frts * 3;
// }

// function kindoffrst(manggo, apple) {
//   const manggocut = cutfrt(manggo);
//   const applecut = cutfrt(apple);

//   return `manggo cut  ! ${manggocut} and apple cut ${applecut}`;
// }

// console.log(kindoffrst(5, 2));

//arrow function calculate 3 score
//first is 3 value added then total is divided by 3
// this arrow fucntion is too long !
// const calculateAve = (score1, score2, score3) => {
//   const totalAverage = (score1 + score2 + score3) / 3;
//   return totalAverage;
// };

// //arraw fucntion short
// // const calculate = (score1 , score2 , score3) => (score1 + score2 + score3) / 3;

// //2nd is call the arrow funcktion and put 3 score of a person to calculate average

// const javiercore = calculateAve(512, 50, 5);
// const jonathanscore = calculateAve(102, 10, 10);

// //3rd create function and put the data of a person to check who is the winner !
// function checkWinner(javier, jonathanscore) {
//   if (javier >= 2 * jonathanscore) {
//     const winner = `javier win (${javier} vs ${jonathanscore})`;
//     return winner;
//   } else if (javier <= 2 * jonathanscore) {
//     const winner = `jonathan win (${jonathanscore} vs ${javier})`;
//     return winner;
//   } else {
//     const draw = `jonathan and javier is Draw ! `;
//     return draw;
//   }
// }

// const winner = checkWinner(javiercore, jonathanscore);
// console.log(`${winner}`);

//introduction of arrrays !

// const f1 = "javier";
// const f2 = "javier2";
// const f3 = "javier3";
//insted of using this we go for array to make it simple
// arrays is a primetive value can change it(const)
//can hold any value

// const friends = ["javier", "dung", "james "];
// console.log(friends);

// const year = new Array(12, 23, 4, 123);
// // console.log(`${year}`);
// // console.log(year);

// // for (let i = 0; i < friends.length; i++) {
// //   console.log(`${friends[i]}`);
// // }
// const javier = [friends, "akoa ng mga prend ! ", 4, " sila "];

// console.log(javier);

//basicarray operation

// const friends = ["javier", "dung", "james "];
// const newL = friends.push`canoy`; //push adding a new value on arrays at the end
// console.log(friends);
// console.log(newL);

// friends.unshift(`jonallyn`); ///unshift adding at the begining
// console.log(friends);

// friends.pop(); // removing the last value of the arrays
// console.log(friends);
// friends.pop();
// console.log(friends);

// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // remove first at the arrays but no arguments
// console.log(friends);
// friends.unshift("arlyn");
// console.log(friends);

// console.log(friends.indexOf("arlyn"));
// console.log(friends.indexOf("jun")); // -1 if the value not in the arrays list !

// //check if the value is in the arrays list (true or false ! ) it return a boolean
// console.log(friends.includes("arlyn"));
// console.log(friends.includes("jun"));

//Code Challenge //dugay nahuman pero goods !

// function calTip(bill) {
//   if (bill >= 50 && bill <= 300) {
//     const totaltip = bill * 0.15; //tip
//     // return console.log(`total tip ${totaltip}`);
//     return totaltip;
//   } else {
//     const totaltip = bill * 0.2; //tip

//     // return console.log(`total tip ${totaltip}`);
//     return totaltip;
//   }
// }
// const bills = [125, 555, 44];
// // for (let i = 0; i < bills.length; i++) {
// //   console.log(calTip(bills[i]));
// // }

// // const tip = new Array(bills);
// // for (let i = 0; i < tip.length; i++) {
// //   console.log(calTip[i]);
// // }
// const tip = [calTip(bills[0]), calTip(bills[1]), calTip(bills[2])];
// console.log(bills, tip);

// const total = [tip[0] + bills[0], tip[1] + bills[1], tip[2] + bills[2]];
// console.log(total);

//--------------
//introduction to objects
// const studentData = {
//   // studentdata is ocject
//   //firstname: "javier" // firstname  is a property
//   // inside is property !
// };

// const studentData = {
//   name1: `javier`,
//   age: `22`,
//   year: "4rth",
// };
//console.log(studentData);

//-----Dot vs Bracket notation
// const studentData = {
//   name1: `javier`,
//   age: `22`,
//   year: "4rth",
//   father: "jonathan",
//   mother: "arlyn",
//   friend: [`jun `, "dung ", " ding"],
// };

// // const wanToKnow = prompt(
// //   ` what do you want to know me !  ?  pick betwen name1 , age , year , father , and mothers name  :`
// // );

// // function toKnow(wanToKnow) {
// //   if (wanToKnow === "name1") {
// //     console.log(studentData.name1);
// //   } else if (wanToKnow === "name1") {
// //   } else if ("age") {
// //     console.log(studentData.age);
// //   } else {
// //     console.log("you enter a invalid keywords ! ");
// //   }
// // }
// // toKnow(wanToKnow);
// // console.log(studentData[wanToKnow]);
// studentData.sister = "jonalyn"; // adding directly to the object
// console.log(studentData.sister);
// console.log(
//   ` ${studentData.name1} , ${studentData.friend.length} , ${studentData.friend[0]}`
// );
//----- object method !
