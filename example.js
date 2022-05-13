// Write a JavaScript program to do a global search that matches all ‘are’ (case-insensitive) and output the result from the following String.

// const csLewisQuote = 'We are what we believe we are.';


// Output Result:

// ['are', 'are']

const csLewisQuote = 'We are what we believe we are.';
const pattern = /are/ig;

console.log(csLewisQuote.match(pattern));

// Write a JavaScript program to do a global search that matches all digits and output the result from the following String. 
// Hint: use quantifier +

// const inStr = "abc123xyz456_7_00";

// Output Result:

// ['123', '456', '7', '00']
const inStr = "abc123xyz456_7_00";
const pattern2 = /[0-9]/g;  // returns all numbers
const pattern3 = /[0-9]+/g; // same as pattern 4
const pattern4 = /\d+/g;    // same as pattern 3

console.log(inStr.match(pattern2));
console.log(inStr.match(pattern3));
console.log(inStr.match(pattern4));

// Write a JavaScript program to do a global search for all cats (case-insensitive) in the word1 string and output the result. 
// The output will also state how many cats (case-insensitive).

// const wordCat = "Do cats really have 9 lives? Why do they say cats have nine lives? Good king of cats, nothing but one of your nine lives."

// Output Result:

//  ['cats', 'cats', 'cats']
// The number of cats (case-insensitive) is 3.

const wordCat = "Do cats really have 9 lives? Why do they say cats have nine lives? Good king of cats, nothing but one of your nine lives.";
const pattern5 = /cats/ig;
const res = wordCat.match(pattern5);
console.log("The number of cats (case-insensitive) is " + res);
console.log("The number of cats (case-insensitive) is " + res.length);

// Write a JavaScript program to search for m in the given string.
// const string = 'Find me';
// Output Result:
// The position of m in the string is 5.
// search returns the index position of the first match

// const string = 'Find me';
// const pat = /me/;
// console.log

// Part 2
const word1 = "The quick brown fox jumped over the lazy dog";
const word2 = "Mr Blue has a red house and a red car";
const word3 = "A1B2C3D4E5F6G7H8I9J10Z";
const word4 = "apple+/banana#mango(!#orange-_>durian";
// Write a JavaScript program to do a global search for all th (case-insensitive) in the word1 string and output the result. The output will also state how many th (case-insensitive).

// Output Result:

// ['Th', 'th']
// The number of th (case-insensitive) is 2.

// this is not done

// Write a Javascript program to match and return either of the words 'fox' or 'dog'(case-insensitive) from word1. 
// Hint: Use Brackets (x|y)

// Output Result:

// ['fox', 'dog']
const pat2 = /(fox|dog)/ig;
console.log(word1.match(pat2));

// Write a JavaScript program to match and get the 3 letter words in the word1 string.
// Hint: Use Quantifier n{X}
 
// Output Result:

// ['The', 'fox', 'the', 'dog']
const pat6 = /\b\w{3}\b/g;
console.log(word1.match(pat6));

// Write a JavaScript program to search for the work 'fox', and display the output as follows.
// Hint: Use String search() and slice() methods

// Output Result:

// fox jumped over the lazy dog
const result7 = word1.search(/fox/i); // return the index of fox position
console.log(result7);
const str = word1.slice(result7); //slice from fox onwards
console.log(str);

// Write a JavaScript program to return a new string and replace 'red' to 'blue' from word2.
// Hint: Use String replace() method
// Output Result 1:
// Mr Blue has a blue house and a blue car
console.log(word2);
const replaceThe = word2.replace(/red/ig, 'blue');
console.log(replaceThe);
// Write a JavaScript program to replace the output result 1 to uppercase.
// Hint: Use String toUpperCase() method
// Output Result 2:
// Mr BLUE has a BLUE HOUSE and a BLUE CAR
const replaceUpperCase = replaceThe.replace(/blue|house|car/ig, (text) => text.toUpperCase() );
console.log(replaceUpperCase);