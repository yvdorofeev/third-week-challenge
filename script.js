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
var passwordLength = ""; // YD: this will be a number, not a string. 
                         // window.prompt returns a string, but you will need to convert it to a number
// var passwordType = [  
//   {
//     lowercase: ""
//   },
//   {
//     uppercase: ""
//   },
//   {
//     numeric: ""
//   },
//   {
//     specialchar: ""
//   },

// ]

// YVD: compare above to below. what's above is an array of object. you need a simple object here
// If you go with your code above, you will need to get values differently
// i.e. if you need to get if password must contain numeric char, it will be stored in passwordType[2].numeric, notice index
var passwordType = {
  lowercase: false,
  uppercase: false,
  numeric: false,
  specialchar: false
};

//function to get the length of the password

var lengthCheck = function () {
  var length = window.prompt("Please choose the password length from 8 to 128 characters");

  //YVD: direct comparison below will not work. you'll need to convert string to a number:
  length = eval(length);

  //YVD: string might fail to convert. you should check if conversion was successful:
  if (isNaN(length)){
    window.alert("Length can only be a number");
    lengthCheck();
  }

  // check if the password size is correct
  if (length < 8) {
    window.alert("The password is too short. Please try again");
    //YVD: I hope you understand that this is recursive. 
    // It'll work now, but you should consider removing recursion as it will be easier to understand code.
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

  // YVD: bad practice. hard to read this code. I'll explain later. It's better to call this outside of this function, at the very bottom
  typeCheck();
}

//function to get password types 

var typeCheck = function () {

  var ucCheck = window.confirm("Would you like to have uppercase letters in your password?");
  //YVD: this follows my object structure above. If you want to use yours, this will need to be passwordType[1].uppercase
  // Also, typo, this should be uppercase.
  //passwordType.lowercase = ucCheck;
  passwordType.uppercase = ucCheck;

  var lcCheck = window.confirm("Would you like to have lowercase letters in your password?");
  passwordType.lowercase = lcCheck;


  var numCheck = window.confirm("Would you like to have numbers in your password?");
  //YVD: this should be numeric
  //passwordType.lowercase = numCheck;
  passwordType.numeric = numCheck;

  var scCheck = window.confirm("Would you like to have special characters in your password?");
  //YVD: this should be specialchar
  //passwordType.lowercase = scCheck;
  passwordType.specialchar = scCheck;

  
  //YVD: try logging passwordType. that will be more useful to you, because this is the variable you are using later, not these four.
  //console.log(lcCheck, ucCheck, numCheck, scCheck);
  console.log(passwordType);

  //check if at least one charachter type selected

  if (lcCheck == false && ucCheck == false && numCheck == false && scCheck == false) {
    window.alert("Please choose at least one type");
    typeCheck();
  }
  // YVD: bad practice. hard to read this code. I'll explain later. It's better to call this outside of this function, at the very bottom
  genPass();
}

// generae password

var genPass = function () {

  var upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
  var lower = "qwertyuiopasdfghjklzxcvbnm";
  var numb = "1234567890";
  var schar = "!@#$%&*?><|}{+_-=`~;:";
  var passcomb = "";

  //YVD: you will need to randomize two things here:
  // 1. character type (upper, lower, numb or schar)
  // 2. character index
  // Based on first random value, you'll get a variable out of which you'll need to get a character from
  // Based on second random value, you'll get an index, which you'll use to retrieve a character from a variable identified in step 1 
  //
  // What you have below will basically add the whole string in the variable, i.e. if lowercase is true, your password will be:
  // qwertyuiopasdfghjklzxcvbnm; or if both upper and lower are true, you'll get qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM

  //create the string with the combination of chosen characters 

  if (passwordType.lowercase) {
    passcomb = passcomb + upper;
  }
  if (passwordType.uppercase) {
    passcomb = passcomb + lower;
  }
  if (passwordType.numeric) {
    passcomb = passcomb + numb
  }
  if (passwordType.specialchar) {
    passcomb = passcomb + schar;
  }

  console.log(passcomb);
}



lengthCheck();
//YVD: call other functions here, instead of from inside of those functions