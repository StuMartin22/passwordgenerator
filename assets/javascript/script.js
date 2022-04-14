// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var mix = []
var newPassword = ""
var userSelections = {
  upperCase: undefined,
  lowerCase: undefined,
  numbers: undefined,
  special: undefined,
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword (){
  var passLength = prompt("Please enter a number between 8 and 128 to set how long you want your password.")
    if (passLength < 8 || passLength > 128) {
      alert("Please... Make it between 8 and 128 characters...")
      generatePassword()
    }
    var choice = confirm("Do you want lowercase characters in your password?")
      if (choice){
        userSelections.lowerCase=true
        mix.push(lowerCase)
      }
      else{
        userSelections.lowerCase=false
      }
    var choice = confirm("Wanna throw some upper case letters in the mix?")
      if (choice){
        userSelections.upperCase=true
        mix.push(upperCase)
      }
      else{
        userSelections.upperCase=false
      }
    var choice = confirm("How about numbers?")
      if (choice){
        userSelections.numbers=true
        mix.push(numbers)
      }
      else{
        userSelections.numbers=false
      }
    var choice = confirm("Do you want special characters?")
      if (choice){
        userSelections.special=true
        mix.push(special)
      }
      else{
        userSelections.special=false
      }
      if (userSelections.lowerCase === false && userSelections.upperCase === false && userSelections.numbers === false && userSelections.special === false){
        alert("Please select at least one type of character.")
        generatePassword()
      }
      numberGenerator(passLength)
      var generatedPassword = newPassword
      newPassword = ""
      mix=[]
      return generatedPassword
}
function numberGenerator(x){
for (let i = 0; i < x; i++) {
  var charType = mix[Math.floor(Math.random() * mix.length)]
  newPassword = newPassword.concat(charType[Math.floor(Math.random() * charType.length) ])
}
return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//pseudo-coding process:
//1. create variables to save input from prompts
//passwordLength - turn string into integer
//specialCharacters boolean
//numericCharacters boolean
//lowercaseCharacters
//uppercaseCharacters
  //alert, confirm, prompt
  // use conditionals to validate inputs - password length, user enters no input
  

//2. create arrays for each character type
  // specialCharacters, upperCase, lowerCase, numeric
  // use randomizer to select characters from each array

//3. generatePassword function -- take user input, grab characters from array and generate password

//create empty array that represents final password

// join characters from arrays together based on user input

//Randomize characters from the joined arrays

//randomizer needs to pull at least one character from each array

//transforming array into string
//["a",1,3,"z"]
//"a13z"

//--start by making like numbers or lowercase or something but just do one
//and get it working then basically just copy paste
//if having errors CHECK CONSOLE LOG

//function generatePassword(){
 // return "password";
//}