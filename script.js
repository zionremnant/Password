var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);}

function validateCharLength (numberOfChars) {
  if (numberOfChars < 8 || numberOfChars > 128) {
    alert("Please enter a number between 8 and 128");
    return generatePassword()
  }
  return numberOfChars
}

// Assignment Code
var userInput
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var capital = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = [0,1,2,3,4,5,6,7,8,9];
var specialCharaters = ["!","@","#","$","%","^","&","*"];

function generatePassword() {
 var passwordLength = prompt ("Enter the number of characters.");
 var lowercase = confirm ("Would you like to include lowercase letters?");
 var capital = confirm ("Would you like to include capital letters?");
 var numeric = confirm("Would you like to include numbers?");
 var specialCharaters = confirm("Would you like to include special characters?");


console.log(userInput);}