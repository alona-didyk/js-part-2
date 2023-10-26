"use strict";
// forbids us to do sertain things; it creates a visible erors

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio"; //strict mode reserved word

// function is a piece of code that we can user over and over again in our code

function logger() {
  console.log("My name is Jonas"); // this function does not produce a value
}

logger(); // calling / running / invoking a function

// parameters is a variable that only specific to this function and they will be defined once we call function

function fruitProcessor(apples, oranges) {
  //   console.log(apples, oranges);
  const juice = `Juice with ${apples} apples ${oranges} oranges`;
  return juice; // it returns any value that this function produce; the result of this function
}

const appleJuice = fruitProcessor(5, 0); //arguments
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
