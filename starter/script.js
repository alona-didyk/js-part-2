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

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  //   console.log(apples, oranges);
  const juice = `Juice with ${applePieces} piece of apples ${orangePieces} pieces of oranges`;
  return juice; // it returns any value that this function produce; the result of this function
}

console.log(fruitProcessor(2, 4));

// we can simply * 4 and call it a day but DRY principle so we do not change everything in every places
