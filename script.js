// Assignment Code
var generateBtn = document.querySelector("#generate");

var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charLower = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var sym = "!@#$%^&*()_+?/";
console.log(charUpper);
var password = "";

function generatePassword() {
  var length = prompt("how many characters would you like in your password");
  if (length < 8 || length > 128) {
    alert("the length must be greater than 8 and less than 128");
    return;
  }
  var symbol = confirm("do you want special characters in your password");
  var numbers = confirm("do you want numbers in your password");
  var upperCase = confirm("do you want uppercase letters in your password");
  var lowerCase = confirm("do you want lowercase letters in your password");
  if (
    symbol === false &&
    numbers === false &&
    upperCase === false &&
    lowerCase === false
  ) {
    alert("must choose one of the options");
    return;
  }
  var possibleChar = "";
  if (upperCase === true) {
    possibleChar = possibleChar.concat(charUpper); //change to arrays
  }

  if (lowerCase === true) {
    possibleChar = possibleChar.concat(charLower); //change to arrays
    console.log(possibleChar);
  }

  if (numbers === true) {
    possibleChar = possibleChar.concat(num); //change to arrays
    console.log(possibleChar);
  }

  if (symbol === true) {
    possibleChar = possibleChar.concat(sym); //change to arrays
    console.log(possibleChar);
  }

  for (let i = 0; i < length; i++) {
    var random = randomChar(possibleChar);
    password += random;
    console.log(password);
  }
  return password;
}

function randomChar(string) {
  let randomindex = Math.floor(Math.random() * string.length);
  var element = string[randomindex];
  return element;
}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
