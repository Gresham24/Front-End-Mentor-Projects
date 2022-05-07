// STEP BY STEP TO DO LIST:
// 1. create arrays made up of the characters to be used in the password generator
// 2. get the total number of characters in each array (the length) 
// 3. create an onclick event listener that will initialize a function that will store the for loops
// 4. create a variable assigned to a blank string - this will be used to store the generated password
// 5. create a variable that will generate and store the password class nodelist
// 6. get the input value from the HTML input box 
// 7. use the length (total number of elements in the array) as a range to generate a random number (random character position)
//     - the random character position will be used as an index to get the random character from the array
// 8. access random array elements using the random character position as an index
// 9. reassign the blank string variable with a concatination of the radnom array elements
// 10. create a loop to iterates through the previous step as many times as the specified password length
// 11. create a loop to iterate through the nodelist and input the newPassword string into each HTML element with the .password class


// START OF SCRIPT

const buttonClick = document.getElementById("generatorBtn")

//Declaration of array to choose characters from
const fullCharacterArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
    "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "!", "@", "#", "$", "%", "^", "&", "*", "(",
    ")", "-", "_", "+", "=", "~", "<", ">", "?", "[", "]", "{", "}"]

// Storing the array length 
const getFullCharacterArrLength = fullCharacterArr.length;

// function to create the random password by generating a random character from fullCharacterArr and concatinating it into an empty string 
function generatorPassword() {
    let getPasswordLength = document.getElementById("passwordLength").value
    let passwordString = ''
    for (let i = 0; i < getPasswordLength; i++) {
        let getRandCharPosition = Math.floor(Math.random() * getFullCharacterArrLength)
        passwordString = passwordString + fullCharacterArr[getRandCharPosition]
    }
    return passwordString;
}
// click event to run a function that inputs the random password strinng into any element in the DOM with a class name of .password
    buttonClick.addEventListener('click', function () {
        let passwordBlocks = document.querySelectorAll('.password').length
        let newPassword = document.getElementsByClassName('password')
    
        for (let j = 0; j < passwordBlocks; j++) {
            newPassword[j].innerText = generatorPassword()
        }
    })


// END OF SCRIPT
