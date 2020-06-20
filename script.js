// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//create an object to storage input data
var passwordLength = "";
var passwordType = [
  {
    lowercase: ""
  },
  {
    uppercase: ""
  },
  {
    numeric: ""
  },
  {
    specialchar: ""
  },

]

//function to get the length of the password

var lengthCheck = function () {
  var length = window.prompt("Please choose the password length from 8 to 128 characters");

  // check if the password size is correct
  if (length < 8) {
    window.alert("The password is too short. Please try again");
    lengthCheck();
  }
  if (length > 128) {
    window.alert("The password is too long. Please try again");
    lengthCheck();
  }
  else {
    passwordLength = length;
  }

  console.log(passwordLength)

  typeCheck();
}

//function to get password types 

var typeCheck = function () {
  var lcCheck = window.confirm("Would you like to have lowercase letters in your password?");
  passwordType.lowercase = lcCheck;

  var ucCheck = window.confirm("Would you like to have uppercase letters in your password?");
  passwordType.lowercase = ucCheck;

  var numCheck = window.confirm("Would you like to have numbers in your password?");
  passwordType.lowercase = numCheck;

  var scCheck = window.confirm("Would you like to have special characters in your password?");
  passwordType.lowercase = scCheck;

  console.log(lcCheck, ucCheck, numCheck, scCheck);

  //check if at least one charachter type selected

  if (lcCheck == false && ucCheck == false && numCheck == false && scCheck == false) {
    window.alert("Please choose at least one type");
    typeCheck();
  }
  
}
lengthCheck(); 




