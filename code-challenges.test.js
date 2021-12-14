// ASSESSMENT 2: Coding Practical Questions with Jest
//
// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process
//
// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest
//
// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest
//
//
// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
//
// a) Create a test with expect statements for each of the variables provided.
// This code will check each variable to see if it is divisible by 3.
// var num1 = 15
// // Expected output: "15 is divisible by three"
// var num2 = 0
// // // Expected output: "0 is divisible by three"
// var num3 = -7
// Expected output: "-7 is not divisible by three"
//
// The exercise invokes a function, within the test, that divides the variable by three. The exception is 'if' is NOT divided by three it will output "-7 is not divisible by three"
//
describe("Evenly divisible by three or not", () => {
  var num1 = 15
  // Expected output: "15 is divisible by three"
  var num2 = 0
  // // Expected output: "0 is divisible by three"
  var num3 = -7
  // Expected output: "-7 is not divisible by three"
  it("checks each number for a remainder using modulus", () => {
    expect(divisibleBy3(num1)).toEqual("15 is divisible by three")
    expect(divisibleBy3(num2)).toEqual("0 is divisible by three")
    expect(divisibleBy3(num3)).toEqual("-7 is not divisible by three")
  })
})
// //
const divisibleBy3 = (num) => {
  return num % 3 === 0 ? `${num} is divisible by three` : `${num} is not divisible by three`
// }
//
//
//
//
// // --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
//
//
// // a) Create a test with expect statements for each of the variables provided.
//
//
// var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // //
// // // // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// // //
// var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
//
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
//
//
describe ("uppercaseEachNoun", () => {
  var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
  var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
  it("Capitalize the first letter of each word on the array", () => {
    expect(uppercaseEachNoun(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(uppercaseEachNoun(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})
//
//
// const arr = ['apple', 'banana', 'orange', 'grapes'];
// const capitalize = (randomNouns1 = [], ind = 0) => {
//    const helper = (str = '') => {
//       return str[0].toUpperCase() + str.slice(1).toLowerCase();
//    };
//    if(ind < randomNouns1.length){
//       randomNouns1[ind] = helper(randomNouns1[ind]);
//       return capitalize(randomNouns1, ind + 1);
//    };
//    return;
// };
// capitalize(randomNouns1);
// console.log(randomNouns1);


function uppercase [randomNouns1]
{
  var randomNouns1 = str.split(' ');
  var newarray1 = [];

  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("randomNouns1"));
// //
// // b) Create the function that makes the test pass.
//
//
//
// // --------------------3) Create a function that takes in a string and logs the index of the first vowel.
//
// // a) Create a test with expect statements for each of the variables provided.
//
var vowelTester1 = "learn"
// // Expected output: 1


var vowelTester2 = "academy"
// // Expected output: 0


var vowelTester3 = "challenges"
// // Expected output: 2

function vowelTester1(str){
  let test = str.search(/[a,e,i,o,u]/g)
  console.log(test)
}

// I am having a dificult time coding without someone holding my hand.  I am aware that I have not prioratize the work as i should.  I am now aware of the amount of work that it will take for me to grasp the material.  I am hopeful that during the two week break i will be able to review and excersice the required work.


// b) Create the function that makes the test pass.
