// Assignment Code
var generateBtn = document.querySelector("#generate");

// Various Arrays

var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

// Variable Criteria 

var confirmLength = 0;

// Prompt user to confirm how many characters they want in their password

function generatePassword() {
  var confirmLength = (prompt("How many characters would you like in your password?"));
  while(confirmLength <= 7 || confirmLength >= 128) {
      alert("Password must be between 8-128 characters");
      var confirmLength = (prompt("How many characters would you like in your password?"));} 

// Determine if password meets criteria 

var confirmSpecialCharacter = confirm("Click OK if you would like to include special characters");
var confirmNumericCharacter = confirm("Click OK if you would like to include numeric characters");    
var confirmLowerCase = confirm("Click OK if you would like to include lowercase characters");
var confirmUpperCase = confirm("Click OK if you would like to include uppercase characters");
  if((confirmUpperCase && confirmLowerCase && confirmSpecialCharacter && confirmNumericCharacter) === false) {
    return "You must choose at least one criteria";
} 

  // If password doesn't meet criteria, user needs to change option
var passwordCharacters = []
    
if (confirmLowerCase) {
  passwordCharacters = passwordCharacters.concat(alphaLower)
}

if (confirmUpperCase) {
  passwordCharacters = passwordCharacters.concat(alphaUpper)
}

if (confirmNumericCharacter) {
  passwordCharacters = passwordCharacters.concat(number)
}

if (confirmSpecialCharacter) {
  passwordCharacters = passwordCharacters.concat(specialChar)
}

  console.log(passwordCharacters)

  var randomPassword = ""
  
  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
