"use strict";
// forbids us to do sertain things; it creates a visible erors

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio"; //strict mode reserved word

// function is a piece of code that we can user over and over again in our code

// function logger() {
//   console.log("My name is Jonas"); // this function does not produce a value
// }

// logger(); // calling / running / invoking a function

// // parameters is a variable that only specific to this function and they will be defined once we call function

// function declaration
// function fruitProcessor(apples, oranges) {
//   //   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples ${oranges} oranges`;
//   return juice; // it returns any value that this function produce; the result of this function
// }

// const appleJuice = fruitProcessor(5, 0); //arguments
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number("23");

// function is a value
// function declaration is to simply use function keyword to declare a function
// you can call it before you define it

// function calcAge1(birthYear) {
//   const age = 2037 - birthYear;
//   return age; // to take this value out of the function we return it
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// // function expression

// const calcAge2 = function (birthYear) {
//   const age = 2037 - birthYear;
//   return age; // to take this value out of the function we return it
// };
// const age2 = calcAge2(1991);
// console.log(age2);

// ARROW FUNCTIONS a shorter and more faster to write function
// DO NOT HAVE KEY 'THIS' WORD

// const calcAge2 = function (birthYear) {
//   const age = 2037 - birthYear;
//   return age; // to take this value out of the function we return it
// };

// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntillRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntillRetirement(1991, "Jonas"));
// console.log(yearsUntillRetirement(1980, "Bob"));

// FUNCTIONS CALLING OTHER FUNCTIONS

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   //   console.log(apples, oranges);
//   const juice = `Juice with ${applePieces} piece of apples ${orangePieces} pieces of oranges`;
//   return juice; // it returns any value that this function produce; the result of this function
// }

// console.log(fruitProcessor(2, 4));

// we can simply * 4 and call it a day but DRY principle so we do not change everything in every places

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntillRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement; //immediatly stop executing function and return the value in return; it immediatly exes the function so the console bellow will be not executed; we need to move it before return
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }

//   // return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntillRetirement(1991, "Jonas"));
// console.log(yearsUntillRetirement(1970, "Mike"));

// CHALLENGE #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

// Your tasks:

// Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

// const calcAverage = (firstScore, secondScore, thirdScore) => {
//   return (firstScore + secondScore + thirdScore) / 3;
// };
// console.log(calcAverage(3, 4, 5))

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log("No team wins...");
//   }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log("No team wins...");
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// arrays is a big container in which we can store data and then use it later
// two most important data structure in js are arrays and objects
// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"]; // [] literal syntax
// console.log(friends);

// // const years = new Array(1991, 1980, 2008); // a function with a new keyword
// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length); // amount of elements in the array
// console.log(friends[friends.length - 1]); // expression produce value; in [] js expects an expression, not a statement

// friends[2] = "Jay";
// console.log(friends);

// // only primitive value are inmutuble, array is not a primitive so we can always mutate it
// // we can not replace entire array
// // friends = ["jay"]; Uncaught TypeError: Assignment to constant variable.

// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
// console.log(jonas);

// // exercise

// function calcAge(birthYear) {
//   return 2037 - birthYear;
// }

// const years = [1991, 1967, 2002, 2010, 2018];

// // if we pass it to the function as an argument js will not know what to do with it because it expects a single value

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ]; // we can put a function in an array because it also produces a value
// console.log(ages);

// methods is an array operations

// const friends = ["Michael", "Steven", "Peter"];
// const newLength = friends.push("Jay"); // adds element to the end of an array; its a function; push, since its a function, return a value and this value is a length of an array
// console.log(friends);
// console.log(newLength); // 4

// friends.unshift("John"); // adds element to the beginning of an array
// console.log(friends); // this method also returns a length of an array

// friends.pop(); // remove the last element of the array; this method return a removed element
// const popped = friends.pop();
// console.log(popped); // Peter

// friends.shift(); // remove first element of the array; it returns an elemement that was removed
// console.log(friends);

// console.log(friends.indexOf("Steven")); // return an index in which this element is located
// console.log(friends.indexOf("Bob")); // -1 since its not there

// friends.push(23);
// console.log(friends.includes("Steven")); // return true if the element is in array; use strict equalitty; its more modern method from ES6; we can use it to write conditionals
// console.log(friends.includes("Bob")); // false
// console.log(friends.includes(23));

// if (friends.includes("Steven")) {
//   console.log("You have a friend called Steven");
// }

// const calcTip = (billValue) => {
//   return billValue * 0.15;
// };
// console.log(calcTip(300));

// CHALLENGE #2
// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.

// const calcTip = (billValue) => {
//   if (billValue >= 50 && billValue <= 300) {
//     return billValue * 0.15;
//   } else {
//     return billValue * 0.2;
//   }
// };

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totals);

// const jonas = {
//   firstName: "Jonas", // key(property): value
//   lastName: "Schemedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// }; // {} object-literal syntax

// // we use objetcs to group together different variables that really belong together

// // the differnce between object and arrays is that the order does not matter in objects

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

// // the difference is that we can put any expression that we like in []; it concatanates it automatically; we can use computed property name as shown down bellow

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// // console.log(jonas."first" + nameKey) // a mistake

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between first name, last name, age, job and friends"
// );

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between first name, last name, age, job and friends"
//   );
// }

// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschemedtmann";
// console.log(jonas);

// // challenge
// // jonas has three friends and his best friend Michael
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// );

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schemedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,
//   // calcAge: function (birthYear) {
//   //   return 2037 - birthYear;
//   // }, // its a method
//   // calcAge: function () {
//   //   console.log(this); // this points to the object in which it was called
//   //   return 2037 - this.birthYear;
//   // },
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} - year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license`;
//   },
// };
// // this keyword is equal to the object in which this method is called

// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// // console.log(jonas["calcAge"](1991));

// // Challenge
// console.log(jonas.getSummary());

// CHALLENGE #3
// Let's go back to Mark and John comparing their BMIs!

// This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

// Your tasks:

// For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

// Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.

// Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// const mark = {
//   fullName: "mark miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "john smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
//   );
// }

// loop allows us to automate repetitive tasks

// this loop will be running untill the condition are true
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// const jonas = [
//   "jonas",
//   "shchmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// const types = [];

// // console.log(jonas[0]);

// for (let index = 0; index < jonas.length; index++) {
//   // reading from jonas aray
//   console.log(jonas[index], typeof jonas[index]);

//   // filling the jonas array
//   // types[index] = typeof jonas[index];
//   types.push(typeof jonas[index]);
// }

// console.log(types);

// const years = [1991, 1967, 2002, 2020];
// const ages = [];

// for (let index = 0; index < years.length; index++) {
//   ages.push(2037 - years[index]);
// }

// console.log(ages);

// // continue - is to exes the current iteration of the loop and continue the next one
// // break - is to completely terminate the whole loop
// console.log("---ONLY STRINGS---");
// for (let index = 0; index < jonas.length; index++) {
//   if (typeof jonas[index] !== "string") continue;
//   console.log(jonas[index], typeof jonas[index]);
// }

// console.log("---BREAK WITH NUMBER---");
// for (let index = 0; index < jonas.length; index++) {
//   if (typeof jonas[index] === "number") break;
//   console.log(jonas[index], typeof jonas[index]);
// }

// const jonas = [
//   "jonas",
//   "shchmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`--------Starting exercise ${exercise}`);

//   for (let rep = 1; rep <= 5; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
//   }
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// in a while loop you can only specify the condition

// while dont really need a counter; all it needs is the condition which needs to stay true while it runs; we use while when we dont know how many iteration left
// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weights repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1; // we are reasigning the value at the end of each iteration to create a new number
//   if (dice === 6) console.log("Loop is about to end...");
// }

// CHALLENGE #4
// Let's improve Steven's tip calculator even more, this time using loops!

// Your tasks:

// Create an array called bills containing all 10 test bill values.

// Create empty arrays for the tips and the totals (tips and totals)

// Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

// BONUS:

// Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

// First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

// To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

// Call the function with the totals array.
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };
