// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Echo 2021"
// console.log(cohort.split(""))

// a) Your answer: . split splits the string into an array.
// b) Verify and explain: The .split method diovides a string into an ordered list of substrings, puts these substrings into an array, and returns the array.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: ${} will plug in the string "LEARN Student" in side the {} brackets.
// b) Verify and explain: received an undefined error.  Reason may be that we have not fully gone through Document Object Models or MODs.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: The output should be an array of the input numbers multiplied by two.
// b) Verify and explain: Output was [8,10,14,16]


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: The output will log the odd numbers given in the array of data.
// b) Verify and explain: [11,13,15] The value % 2 !== ) skips even numbers because of the strict inequality.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: I believe it log only the languages array.
// b) Verify and explain: It only logged the string "JavaScript"  because of the index invocation from the [] brackets of zero).


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: "New Learn student George" is a wild guess.
// b) Verify and explain: Classes are a template for creating objects.  They encapsulate data with code to work on that data.  The example is a class using class declarations.  The output is "Learn { student: 'George', cohort: 'Delta', year: 2021 }"
