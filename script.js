function validateCharLength (numberOfChars) {
  if (numberOfChars < 8 || numberOfChars > 128) {
    alert("Please enter a number between 8 and 128");
    return generatePassword()
  }
  return numberOfChars
}

// Assignment Code
var userInput = []
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var capital = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = [0,1,2,3,4,5,6,7,8,9];
var specialCharaters = ["!","@","#","$","%","^","&","*"];

if(prompt("Please enter a number between 8 and 128")==true){
  userInput.push(numberOfChars)
}
if(confirm("Would you like to include lowercase letters?")==true){
  userInput.push(lowercase)
}
if(confirm("Would you like to include capital letters?")==true){
  userInput.push(capital)
}
if(confirm("Would you like to include numbers?")==true){
  userInput.push(numeric)
}
if(confirm("Would you like to include special characters?")==true){
  userInput.push(specialCharaters)
}

console.log(userInput);

function generatePassword (numberOfChars){
  var password = " ";
  for (var i = 0; i < numberOfChars; i++){
    var arrs = userInput[Math.floor(Math.random()*userInput.length)];
    var digit = arrs[Math.floor(Math.random()*arrs.length)];
    password += digit;
  }

  console.log ("password", password);
  return password
}
// Add event listener to generate button
const generateButton = document.getElementById('generateBtn')
generateButton.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;}

  