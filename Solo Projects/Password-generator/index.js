// STEP BY STEP TO DO LIST:
// create arrays made up of the characters to be used in the password generator
// get the total number of characters in each array (the length) 
// create the function that will store the for loops
// create a variable assigned to a blank string - this will be used to store the generated password
// create a for loop that will iterate through each array once (i < 1)
// use the length (total number of elements in the array) as a range to generate a random number (random character position) stored in a variable
//     - the random character position will be used as an index to get the random character from the array
// access random array elements using the random character position as an index
// reassign the blank string variable with a concatination of the radnom array elements
// create a for loop with the previous loop inside of it to run as many times as the specified password length
// add the password string inside the newPassword class


// START OF SCRIPT

// Declaration of global variables
const button = document.querySelector(".generator")
const password = document.querySelector(".newPassword")

//Declaration of array to choose characters from
const upperCase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const lowerCase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const specialCharacter = [ "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "~", "<", ">", "?", "[", "]", "{", "}"]
const number = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Storing the length of each character set array
const getUpperCaseLength = upperCase.length;
const getLowerCaseLength = lowerCase.length;
const getSpecialCharLength = specialChar.length;
const getNumberLength = numChar.length;


// END OF SCRIPT

// THIS IS A MINI TEST PASSWORD GENERATOR FOR ALL CHARACTERS - USED THIS TO TEST THE LOGIC FROM SCRATCH AND WILL EXPAND ON THIS BY INCLUDING MULTIPLE ARRAYS
const getPasswordLength = 12;

let fullCharSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "~", "<", ">", "?", "[", "]", "{", "}",0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const getFullCharSetLength = fullCharSet.length;

let newPassword = '';
for (let i = 0; i < getPasswordLength; i++) {
  const getRandCharPosition = Math.floor(Math.random() * getFullCharSetLength);
  newPassword = newPassword + lowerCase[getRandCharPosition];
}
console.log(newPassword);