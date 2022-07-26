var passwordChoice = [];

var Choicelength = 8;

var LowerCase = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z", "x","c","v","b","n","m"];

var UpperCase = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];

var SpecialChar = ["!","@","#","$","%","^","&","*","(",")","-","+"];

var Numbers = ["1","2","3","4","5","6","7","8","9","0"];

var UpperCaseChoice = ("Would you like uppercase letters in your password?");

var LowerCaseChoice = ("Would you like lowercase letters in your password?");

var SpecialCharChoice = ("Would you like special characters in your password?");

var NumbersChoice = ("Would you like numbers in your password?")

function GetInfo() { 
  passwordChoice = [];
  UserChoice = window.prompt("How many characters do you want in your password? (Between 8 - 128)");
  if (UserChoice < 8 || UserChoice > 128) {
   window.alert("Error. Try again");
   return false;
  }
  
  else if (window.confirm(UpperCaseChoice)) {
    passwordChoice = passwordChoice.concat(UpperCase);

  }
  if (window.confirm(LowerCaseChoice)) {
    passwordChoice = passwordChoice.concat(LowerCase);
  } 
   if (window.confirm(SpecialCharChoice)) {
    passwordChoice = passwordChoice.concat(SpecialChar); 
  }
  if (window.confirm(NumbersChoice)) {
    passwordChoice = passwordChoice.concat(Numbers);
  }
  return true;
  
 }

 


;

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  
  if (GetInfo()) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
else {
  passwordText.value = "";
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  password = "";
  for (var i = 0; i < UserChoice; i++) {
    var execute = Math.floor(Math.random() * passwordChoice.length); 
    password = password + passwordChoice[execute];
  }
  return password;
  }
  