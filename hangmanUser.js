// requiring the prompt npm package to ask users questions
const inquirer = require("inquirer");
// requiring the hangmanAdmin module
const Letter = require("./letter");

function getLetter(letter){

  this.letter = letter;
}

Letter.prototype.printInfo = function(){
  console.log("Letters:  " + this.letter);
}
var count = 0;
var letterArray = [];

var askForLetter = function(){

  if (count < 2){


    inquirer.prompt([
    {
        name: 'letter',
        message: 'Guess a letter?',

      }
    ]).then(function(answers){
      var newLetter = new Letter(
        answers.letter);
    letterArray.push(newLetter);
    count++;
    askForLetter();
  });

}else{
  for(var i = 0; i < letterArray.length; i++){
    letterArray[i].printInfo();
  }
}
};
askForLetter();
