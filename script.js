// Assignment Code
var generateBtn = document.querySelector("#generate");

// Various Arrays

var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var passwordCharacters = [];
var confirmLength = 0;

// Prompt user to confirm how many characters they want in their password

function generatePassword() {
  var confirmLength = (prompt("How many characters would you like in your password?"));
  while(confirmLength <= 7 || confirmLength >= 128) {
      alert("Password must be between 8-128 characters");
      var confirmLength = (prompt("How many characters would you like in your password?"));} 

// Determine if password meets criteria 
// If password doesn't meet criteria, user needs to change option

var confirmLowerCase = confirm("Click OK if you would like to include lowercase characters");
var confirmUpperCase = confirm("Click OK if you would like to include uppercase characters");
var confirmNumericCharacter = confirm("Click OK if you would like to include numeric characters");    
var confirmSpecialCharacter = confirm("Click OK if you would like to include special characters");
 if ((!confirmUpperCase && !confirmLowerCase && !confirmSpecialCharacter && !confirmNumericCharacter)) {
  passwordCharacters = alert("You must choose at least one criteria");
 }

 // If all 4 criterias are valid

 else if (confirmUpperCase && confirmLowerCase && confirmSpecialCharacter && confirmNumericCharacter) {
  passwordCharacters = passwordCharacters.concat(alphaLower, alphaUpper, number, specialChar);
 }

 // If only 3 criterias are valid
else if (confirmLowerCase && confirmUpperCase && confirmSpecialCharacter) {
  passwordCharacters = passwordCharacters.concat(alphaLower, alphaUpper, specialChar);
}

else if (confirmLowerCase && confirmUpperCase && confirmNumericCharacter) {
  passwordCharacters = passwordCharacters.concat(alphaLower, alphaUpper, number);
}

else if (confirmLowerCase && confirmSpecialCharacter && confirmNumericCharacter) {
  passwordCharacters = passwordCharacters.concat(alphaLower, specialChar, number);
}

else if (confirmUpperCase && confirmSpecialCharacter && confirmNumericCharacter) {
  passwordCharacters = passwordCharacters.concat(alphaUpper, specialChar, number);
}

// If only 2 criterias are valid
else if (confirmLowerCase && confirmUpperCase) {
  passwordCharacters = passwordCharacters.concat(alphaLower, alphaUpper);
}

else if (confirmLowerCase && confirmNumericCharacter) {
  passwordCharacters = passwordCharacters.concat(alphaLower, number);
}

else if (confirmLowerCase && confirmSpecialCharacter) {
  passwordCharacters = passwordCharacters.concat(alphaLower, specialChar);
}

else if (confirmUpperCase && confirmNumericCharacter) {
  passwordCharacters = passwordCharacters.concat(alphaUpper, number);
}

else if (confirmUpperCase && confirmSpecialCharacter) {
  passwordCharacters = passwordCharacters.concat(alphaUpper, specialChar);
}

else if (confirmNumericCharacter && confirmSpecialCharacter) {
  passwordCharacters = passwordCharacters.concat(number, specialChar);
}

// If only 1 criteria is valid
else if (confirmLowerCase) {
  passwordCharacters = passwordCharacters.concat(alphaLower);
}

else if (confirmUpperCase) {
  passwordCharacters = passwordCharacters.concat(alphaUpper);
}

else if (confirmNumericCharacter) {
  passwordCharacters = passwordCharacters.concat(number);
}

else if (confirmSpecialCharacter) {
  passwordCharacters = passwordCharacters.concat(specialChar);
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
