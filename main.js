// requiring the letter and word modules
const Word = require("./word");

var _word = new Word('javascript');
console.log(_word.renderWord());
_word.checkGuess('a');
console.log(_word.renderWord());



// requiring the inquirer or prompt npm package to ask users questions
// const inquirer = require("inquirer");
// var count = 0;
// var letterArray = [];
//
// var askForLetter = function(){
//
//   if (count < (lengthOfWord)){
//
//
//     inquirer.prompt([
//     {
//         name: 'letter',
//         message: 'Guess a letter?',
//
//       }
//     ]).then(function(answers){
//       var newLetter = new Letter(
//         answers.letter);
//     letterArray.push(newLetter);
//     count++;
//     askForLetter();
//   });
//
// }else{
//   for(){
//
//   }
// }
// };
// askForLetter();
