var generateBtn = document.querySelector("#generate")
generateBtn.addEventListener("click", writePassword);{
};

// Assignment Code

var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var capital = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numeric = [0,1,2,3,4,5,6,7,8,9];
var specialCharaters = ["!","@","#","$","%","^","&","*"];


function generatePassword (){
  var password = [];
  var userInput = []
  let numberOfChars = prompt("Please enter a number between 8 and 128");
  validateCharLength(numberOfChars);

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

  for (var i = 0; i < parseInt(numberOfChars); i++){
    var random = Math.floor(Math.random()*numberOfChars.length);
    password += userInput[random];
    return password;
  }

  function validateCharLength (i) {
    if (i < 8 || i > 128) {
      alert("Please enter a number between 8 and 128");
      return generatePassword()
    }
    return numberOfChars
  }

  console.log (password);
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;}

  