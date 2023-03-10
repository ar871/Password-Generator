

    console.log("button clicked")
    let lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let numericCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    let specialCharacters = ['@',  '%',  '+',  '\\',  '/',  "'",  '!', '#',  '$', '^', '?',  ':',  ',',  ')',  '(',  '}','{', ']', '[', '~', '-','_','.']
    
  
    
    
// Function to prompt user for password options
function getPasswordOptions() { // Variable for concatenated array that contain all options chosen by the user
  let arrDomain = [];

  // Variable to check if there are no options chosen
  let noOptionChosen = true;

  // Check if user wants lower case characters
  if (confirm("Do you want to include lowercase letters?")) {
      noOptionChosen = false;
      arrDomain = arrDomain.concat(lowerCasedCharacters);
  }

  // Check if user wants upper case characters
  if (confirm("Do you want to include uppercase letters?")) {
      noOptionChosen = false;
      arrDomain = arrDomain.concat(upperCasedCharacters);
  }

  // Check if user wants numeric characters
  if (confirm("Do you want to include numeric characters?")) {
      noOptionChosen = false;
      arrDomain = arrDomain.concat(numericCharacters);
  }

  // Check if user wants special characters
  if (confirm("Do you want to include special characters?")) {
      noOptionChosen = false;
      arrDomain = arrDomain.concat(specialCharacters);
  }

  // Check if user chose at least one of the options
  if (noOptionChosen) {
      alert("You have to choose at least one option.");
  }

  return arrDomain;
}

// Function for getting a random element from an array
function getRandom(arr) { // Get index with random

  const randomIndex = Math.floor(Math.random() * arr.length);

  // Get item on array that corresponds to the index
  const item = arr[randomIndex];

  return item;
}

// Function to generate password with user input
function generatePassword(arrDomain) {

  let finalPassword = '';

  // Skip logic if arrDomain is empty
  if (arrDomain.length !== 0) {
      var userQtCharacter = prompt("How many characters you want? Minimum is 10 and maximum is 64.");
      // Validate if quantity of characters chosen by the user is a number
      if (isNaN(Number(userQtCharacter))) {
          alert("Invalide value, please select a number.");
      } else if (Number(userQtCharacter) < 10 || Number(userQtCharacter) > 64) {
          alert("Invalide value, please select a number between 10 and 64.");
      } else {
          for (var i = 0; i < Number(userQtCharacter); i++) {
              finalPassword += getRandom(arrDomain);
          }
      }
  }

  return finalPassword;

}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {

  let passwordOptions = getPasswordOptions();
  let password = generatePassword(passwordOptions);
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
